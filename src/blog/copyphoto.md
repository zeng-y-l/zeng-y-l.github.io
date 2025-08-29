---
title: PowerShell 拷照片
description: 用 PowerShell 把手机上的照片拷到电脑上并自动分类
create: 2024-11-07
update: 2025-07-14
---

我要把手机上的照片拷到电脑上，并按照日期分成文件夹，同时自动化这一过程。

最早，我不分文件夹，全部拷到同一个文件夹中，直接用复制粘贴就够了。后来，我写了个 [Nushell](https://www.nushell.sh/zh-CN/) 脚本，分了文件夹，于是就不能复制粘贴了，否则无法检测重复文件。于是，我想写个脚本，自动检测、自动拷贝。

但这事儿并不简单，因为手机连上电脑并非挂载为盘符，而是以 MTP 协议传输。故而，一般的命令无法处理。怎么办？上网搜索，有两种方法：

1. 使用工具，把 MTP 挂载为盘符。收费的有 [MTP Drive](https://www.mtpdrive.com/)，免费的有 [mtpmount](https://github.com/hst125fan/mtpmount/)
2. 使用 PowerShell，调用 COM 组件。

当时拷照片，我选择了 mtpmount，然后用 Nushell 检测和拷贝。这是因为读取 MTP 比较复杂，加上我使用 Git Bash 和 Nushell 而不喜欢 PowerShell（原因之一是后者的命令都是首字母大写的长长一串）。

然而，用了一段时间，发现实在不好用。很慢，而且经常拷一半就崩溃了。想到这么多工具架屋叠床的实在麻烦，于是前段时间，我下定决心使用 PowerShell 重写脚本。

真香！PowerShell 很好用：

- 有丰富的标准库。至少可以轻松 split 字符串。
- 有完善的数据结构。数组、哈希表等，随便嵌套，十分直观。
- 有优秀的编辑器（VSCode）和支持。调试、智能补全很方便。
- 有好用的 REPL。
- 有不错的文档。
- 没 bug。

事实证明，重写脚本的决定是正确的。前段时间写完脚本，一运行，居然发现：以前的脚本拷的照片，修改日期全部都不对，刚好差了八个小时，显然是时区问题。用新的脚本重新拷一遍就正常了。

我还有一些早期的照片，采用其他方式拷来，修改日期也不对，不过是与真实日期对比的（文件管理器「日期」栏）。于是又写了个脚本，批量给它改对，顺便也可以检测所有图片的修改日期有没有错。不过检测过程很慢，而且有些照片的真实日期已经丢失了，故拷贝时不靠真实日期来分类，只看修改日期（真正的原因：写脚本的时候根本不知道居然还有真实日期）。

2025-07-14 补充：今天遇到个坑。数组用 `Where-Object` 过滤之后，长度（`.Count`）居然增加！调试后发现，若过滤后仅有一项，则会直接返回这一项，而非返回数组。需要用 `@()` 转换成数组再获取长度。

附两个脚本，不保证能用：

用于拷照片的：

```powershell
#! powershell

# 输入源文件夹

$sh = New-Object -ComObject Shell.Application

$root = $sh.NameSpace("").Items()
for ($i = 0; $i -lt $root.Count; $i++) {
    Write-Host $i : $root.Item($i).Name
}
$id = Read-Host "请输入手机编号"
$root = $root.Item([int]$id)
if (($null -eq $root) -or (-not $root.IsFolder)) {
    throw "$id 不存在或不是文件夹"
}

$mdir = Read-Host "请输入手机上照片文件夹路径（如：内部存储/dcim/Camera 或 内部存储/Pictures/WeiXin）"
foreach ($dir in $mdir.Split(@('/', '\'), [System.StringSplitOptions]::RemoveEmptyEntries)) {
    $root = $root.GetFolder.Items() |
    Where-Object Name -EQ $dir |
    Select-Object -First 1
    if (($null -eq $root) -or (-not $root.IsFolder)) {
        throw "没有文件夹 $dir"
    }
}

# 输入目标文件夹

$path = Read-Host "请输入目标文件夹路径（如 D:/Photo）"
if (-not (Test-Path -Path $path)) {
    throw "路径不对"
}

# 扫描文件夹

Write-Host "开始扫描手机文件夹"
$pics = @{}
$i = 0
$root.GetFolder.Items() |
Select-Object @{l = "obj"; e = { $_ } },
@{l = "name"; e = { $_.Name } },
@{l = "date"; e = { $_.ExtendedProperty("System.DateModified").ToLocalTime() } },
@{l = "size"; e = { $_.ExtendedProperty("System.Size") } } |
Where-Object size -GT 0 |
ForEach-Object {
    if ($i % 50 -eq 0) {
        Write-Progress "扫描手机文件夹" -Status "已扫描 $i 个文件"
    }
    $i++
    $pics[$_.name] = $_
}
Write-Progress "扫描手机文件夹" -Completed
Write-Host "扫描完成，共" $pics.Count "个内容（去除了空文件和文件夹）"

Write-Host "开始扫描目标文件夹"
$i = 0
Get-ChildItem $path -Recurse | ForEach-Object {
    if ($i % 50 -eq 0) {
        Write-Progress "扫描目标文件夹" -Status "已扫描 $i 个文件"
    }
    $i++
    $pic = $pics[$_.Name]
    if ($null -eq $pic) {
        return
    }
    $pics.Remove($_.Name)
    if ($_.Length -ne $pic.size) {
        Write-Warning ("文件 {0} 已有，但大小不同（目标 {1}，手机 {2}）路径：{3}" -f $_.Name, $_.Length, $pic.size, $_.FullName)
    }
    if ($_.LastWriteTime -ne $pic.date) {
        Write-Warning ("文件 {0} 已有，但更改时间不同（目标 {1}，手机 {2}）路径：{3}" -f $_.Name, $_.LastWriteTime, $pic.date, $_.FullName)
    }
}
$count = $pics.Count
Write-Progress "扫描目标文件夹" -Completed
Write-Host "扫描完成，已忽略重复文件，最终要拷" $count "个文件"

# 创建文件夹

$fmt = Read-Host "请输入分类文件夹格式（如：yyyy-MM）"
$groups = $pics.Values |
Group-Object -Property { Join-Path -Path $path -ChildPath $_.date.ToString($fmt) }
$newgroups = $groups | Where-Object { -not (Test-Path $_.Name) }
Write-Host "要拷到" @($groups).Count "个文件夹中，其中要新建" @($newgroups).Count "个"

Read-Host "请按回车，开始新建文件夹"

$newgroups | ForEach-Object {
    New-Item -ItemType Directory -Path $_.Name
}
Write-Host "新建文件夹完成"

# 拷照片

Read-Host "请按回车，开始拷贝照片"

Write-Host "开始拷贝"
$i = 0
$groups | ForEach-Object {
    $name = $_.Name
    $dest = $sh.NameSpace($name)
    $_.Group | ForEach-Object {
        if ($i % 5 -eq 0) {
            Write-Progress "拷贝文件" -Status "已拷贝 $i 个文件" -CurrentOperation "正在拷贝到 $name" -PercentComplete ($i * 100 / $count)
        }
        $i++
        $dest.CopyHere($_.obj)
    }
}
Write-Progress "拷贝文件" -Completed
Write-Host "拷贝完成"
```

用于检测拍摄日期的：

```powershell
#! powershell

$t = [double](Read-Host "可以接受多少秒误差？")

$sw = Read-Host "要不要直接更新？（Y/N）"
$sw = switch ($sw) {
    "Y" { $true }
    "N" { $false }
    Default { throw "啥玩意儿" }
}

$sh = New-Object -ComObject Shell.Application

$root = Read-Host "请输入路径"
Get-ChildItem $root -Recurse -File | ForEach-Object {
    $f = $sh.NameSpace($_.DirectoryName).Items() | Where-Object Name -eq $_.Name

    $date = $f.ExtendedProperty("System.Photo.DateTaken")
    if ($date -eq $null) {
        $date = $f.ExtendedProperty("System.Media.DateEncoded")
    }
    if ($date -eq $null) {
        Write-Warning ("无法判断文件 {0} 的时间，路径：{1}" -f $_.Name, $_.FullName)
        return
    }
    $date = $date.ToLocalTime()

    if ($_.LastWriteTime -ne $date) {
        if ([System.Math]::Abs(($_.LastWriteTime - $date).TotalSeconds) -gt $t) {
            Write-Warning ("文件 {0} 时间不对！真实时间为 {1}，修改时间为 {2}，路径：{3}" -f $_.Name, $date, $_.LastWriteTime, $_.FullName)
        }
        if ($sw) {
            $_.LastWriteTime = $date
        }
    }
}
```
