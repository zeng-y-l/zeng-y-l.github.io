---
title: 小狼毫监控程序
create: 2024-05-01
desc: 用 AHK 自动重启小狼毫
---

用 [RIME](https://rime.im/) 输入法，Windows 上即**小狼毫**。它有个大问题：经常莫名其妙就退出了，打字打不了，只好重新打开。

手动重启很麻烦，我不堪其扰，于是前几天写了个 [AutoHotkey](https://www.autohotkey.com/) 脚本，用于自动重启。每隔半秒判断（避免占用过多 CPU）小狼毫是否退出，若退出则重启并提示。重启后等两秒，若又退出则弹窗报错。

脚本如下。右键托盘图标可得*程序文件夹*。

```autohotkey
loop {
    Sleep 500
    if ProcessExist("WeaselServer.exe") == 0 {
        Run "程序文件夹\WeaselServer.exe"
        TrayTip "已重启小狼毫"
        Sleep 2000

        if ProcessExist("WeaselServer.exe") == 0 {
            MsgBox "小狼毫重启失败"
        }
    }
}
```