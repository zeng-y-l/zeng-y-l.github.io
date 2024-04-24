---
title: 荒岛生存教程百科
---

## 基本操作

**按C开关显示提示（鼠标碰到合成、方块、物品显示属性），游戏好助手！**

按上左右（或awd）键控制人物行走跳跃。

鼠标控制，长按鼠标挖掘。  
挖掘方块会掉（有的有概率不掉）物品，靠近捡起，背包满了捡不了。

按1~9数字键、点击右下角物品栏、或拖动鼠标滚轮选择手持物品。  
如果手持物品是方块，点击空气或水可以放置。如果是桶，可以放水或装水。

按Q扔出当前手持物品（扔出的等2秒才能再次捡起）。  
按E打开/关闭背包界面。  
背包里点击两个物品可以交换。

按t可以输入命令。

----

## 杂项

### 昼夜

游戏会昼夜交替，2分钟一天。天空颜色会变化，可以通过日月粗略判断时间。

### 掉落物

挖掘方块的掉落物会落到地上。若背包有空位，靠近可以捡起。按Q扔出的物品也会落到地上形成掉落物，但是扔出2秒后才可捡起。  
掉落物如果在岩浆上方，则会烧毁。

### 血量

开始时有10格血量，耗尽后死亡，在死亡位置掉落身上所有物品，回到出生点（x1000，y5）并补满血。

从3格以上高度摔到有碰撞体积的方块上扣(摔落高度-3)格血。如4高扣1格，5高扣2格。跳跃按最高点算。  
水减免所有伤害，但流水/浅水、枝叶树干等无碰撞体积方块和空气一样看待。

在水中5秒后受到持续伤害，不包括流水/浅水。

在岩浆上方受到持续伤害。

### 背包

打开背包时，如果鼠标碰着矿物筛，则同时打开矿物筛界面；如果鼠标碰着锻造砧，则同时打开锻造砧界面；否则同时打开合成界面。背包在下半部分，其他在上半部分。

### 合成

在合成界面点击上半部分的物品可以合成。灰色代表原料不足。  
合成是将一些物品转换成另一种物品（单个或多个）的过程。  
右下角红数字代表合成的物品的数量，背包满了的话合成出来的物品会掉落到地上。  
打开提示可以看到合成的物品、数量、原料。

### 矿物筛

在矿物筛界面点击上半部分的物品可以筛矿。灰色代表原料不足。  
筛矿是将一个物品随机转换成另一个物品的过程。转换出来的物品可能是空。  
与掉落物不同，筛矿是一对一的，只会返回一个物品或空。  
打开提示可以看到筛矿的原料、产出、概率。

### 锻造砧

和合成一致，但用于金属物品，且只会得出一个物品。

### 洞穴

在地底生成，4x4左右，内有水/岩浆/空气/铁矿。

### 命令

点击t输入命令，啥都不输则不执行。  
这是开发者工具，请不要随意使用，因为容易导致bug，并且其是作弊行为。  
命令的输入方法是：先输入主命令，提交后输入参数1，提交后输入参数2，以此类推。如：give(回车)creative_tool。  
以下为全命令：

#### 给予物品

给予玩家某个物品。物品栏满了则不执行。

主命令为：give

参数：

1. 要给予的物品ID

#### 清除物品

清空背包。

主命令为：clear

#### 传送

把玩家传送到某个坐标。

主命令为：tp

参数：

1. X坐标
1. Y坐标

----

## 全方块


### 泥土

生成在地表，上方为空气时显示出一层草皮（只是显示，无实际作用）。

重力：有  
挖掘：空手，较快；粗制木铲，极快；磨制石通用工具，极快；铁通用工具，极快  
掉落物：泥土方块 × 1  
碰撞体积：有

### 碎石

有概率代替泥土和石头生成。

重力：有  
挖掘：空手，中速；粗制木铲，较快；磨制石通用工具，较快；铁通用工具，很快  
掉落物：70% 掉落 碎石方块 × 1，50% 掉落 石块 × 1，30% 掉落 泥土方块 × 1  
碰撞体积：有

### 石头

在地底生成，支撑整个世界。

重力：无  
挖掘：空手不可挖掘；打制石镐，较慢；磨制石通用工具，中速；铁通用工具，较快  
掉落物：石头方块 × 1  
碰撞体积：有

### 基岩

世界底部一层生成。

重力：无  
挖掘：不可挖掘  
碰撞体积：有

### 空气

空的呗~

重力：无  
挖掘：不可挖掘，可被其他方块覆盖  
碰撞体积：无

### 水

有时在地表生成水池，可以在水里游泳。长时间待在里面会受伤害。

重力：特殊，会流动  
挖掘：用桶装，变成水桶  
碰撞体积：特殊，可游泳

### 流水/浅水

样子不同，实际一样。不能游泳，也不能装水，只能流动。

重力：特殊，会流动  
挖掘：不可挖掘  
碰撞体积：无

### 树干

树干呗！

重力：无  
挖掘：空手不可挖掘；打制石斧，中速；磨制石通用工具，较快；铁通用工具，很快  
掉落物：原木 × 1  
碰撞体积：无

### 枝叶

树枝和树叶。

重力：无  
挖掘：空手，很快；打制石斧，极快；磨制石通用工具，极快；铁通用工具，极快  
掉落物：叶子 × （0~2），木棍 × （0~2）  
碰撞体积：无

### 枝叶垛

便宜的造房材料。

重力：无  
挖掘：空手，较快；打制石斧，极快；磨制石通用工具，极快；铁通用工具，极快  
掉落物：枝叶垛 × 1  
碰撞体积：有

### 矿物筛

筛矿。

重力：无  
挖掘：空手，慢；打制石斧，中速；磨制石通用工具，较快；铁通用工具，很快  
掉落物：矿物筛 × 1  
碰撞体积：无  
效用：可筛矿，见“杂项->矿物筛”

### 锻造砧

锻造。

重力：无  
挖掘：空手不可挖掘；打制石镐，慢；磨制石通用工具，中速；铁通用工具，较快  
掉落物：锻造砧 × 1  
碰撞体积：无  
效用：可锻造，见“杂项->锻造砧”

### 铁矿

于地底生成，富含铁。

重力：无  
挖掘：空手不可挖掘；打制石镐，极慢；磨制石通用工具，慢；铁通用工具，中速  
掉落物：生铁 × （1~3）  
碰撞体积：有

### 岩浆

于洞穴偶尔生成。待在上面会持续受伤，掉落物在上面会烧毁。  
如果左或右有水（不包括流水/浅水），或上方有水/流水/浅水，则会凝固成石头。

重力：无  
挖掘：空手不可挖掘；打制石镐，中速；磨制石通用工具，较快；铁通用工具，极快  
掉落物：岩浆 × 1
碰撞体积：有

----

## 全物品

### 石头方块

从什么方块掉落：石头  
放置方块：石头  
筛矿原料：产出石头方块（85%）、生铁（10%）、空（5%）

### 泥土方块

从什么方块掉落：泥土、碎石  
放置方块：泥土

### 碎石方块

从什么方块掉落：碎石  
放置方块：碎石  
筛矿原料：产出碎石方块（60%）、石块（35%）、空（5%）  
筛矿结果：筛碎石方块有60%产出

### 原木

从什么方块掉落：树干  
参与合成原料：木棍、木炭  
放置方块：树干

### 石块

从什么方块掉落：碎石  
参与合成原料：打制石斧、打制石镐  
筛矿结果：筛碎石方块有35%产出


### 木棍

合成表：原木 × 1 -> 木棍 × 4  
从什么方块掉落：枝叶  
参与合成原料：打制石斧、粗制木铲、打制石镐  
参与锻造原料：铁通用工具

### 叶片

从什么方块掉落：枝叶  

### 打制石斧

合成表：木棍 × 1 + 石块 × 1 -> 打制石斧 × 1  
可挖掘方块：树干、枝叶、枝叶垛、矿物筛  
损坏概率：1 / 5  

### 粗制木铲

合成表：木棍 × 1 + 原木 × 1 -> 粗制木铲 × 1  
可挖掘方块：泥土、碎石  
损坏概率：1 / 3

### 打制石镐

合成表：木棍 × 2 + 原木 × 1 + 石块 × 2 -> 打制石镐 × 1  
可挖掘方块：石头、锻造砧、铁矿、岩浆  
损坏概率：1 / 10

### 枝叶垛

合成表：木棍 × 2 + 叶片 × 4 -> 枝叶垛 × 1  
从什么方块掉落：枝叶垛  
放置方块：枝叶垛

### 磨制石通用工具

合成表：石头 × 3 + 木棍 × 2 -> 磨制石通用工具 × 1  
可挖掘方块：树干、枝叶、枝叶垛、泥土、碎石、石头、矿物筛、锻造砧、铁矿、岩浆  
损坏概率：1 / 15

### 矿物筛

从什么方块掉落：矿物筛  
合成表：原木 × 1 + 木棍 × 4 -> 矿物筛 × 1  
放置方块：矿物筛

### 木炭

合成表：原木 × 1 -> 木炭 × 1

### 生铁

筛矿结果：筛石头有10%几率产出  
锻造原料：铁锭  
从什么方块掉落：铁矿

### 铁锭

锻造合成表：生铁 × 1 -> 铁锭  
参与锻造原料：桶、铁通用工具

### 锻造砧

合成表：石头 × 3 + 泥土 × 2 + 木炭 × 2 -> 锻造砧 × 1  
从什么方块掉落：锻造砧  
放置方块：锻造砧

### 桶

锻造合成表：铁锭 × 2 -> 桶  
在完整水中点击左键，那个方块变成空气，桶变成水桶  

### 水桶

在空气、水、流水/浅水中点击左键，那个方块变成水（完整），水桶变成桶

### 铁通用工具

锻造合成表：铁锭 × 3 + 木棍 × 2 -> 铁通用工具  
可挖掘方块：树干、枝叶、枝叶垛、泥土、碎石、石头、矿物筛、锻造砧、铁矿、岩浆  
损坏概率：1 / 30

### 创造之镐

只能通过指令获取。  
可挖掘任意方块，不会损坏，瞬间挖掘。

### 岩浆

从什么方块掉落：岩浆  
放置方块：岩浆