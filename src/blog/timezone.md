---
title: 时区的坑
create: 2024-12-01
desc: 时间的复杂性
---

用 JavaScript 处理时间问题，遇到不少坑。

## 00-99 年

这个问题和时区没有关系，但是个大坑！

创建公元 50 年的 `Date`：

```js
new Date(50, 1, 1).toISOString() // '1950-01-31T16:00:00.000Z'
```

穿越到了 1950 年，令人忍俊不禁。[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/Date) 也有记录这一神奇设计。

解决方案很简单：

```js
const date = new Date(114514, 1, 1)
date.setFullYear(50)
date.toISOString() // '0050-01-31T15:54:17.000Z'
```

解决是解决了，但这实在是让我匪夷所思啊，什么人能够设计出这种反人类的东西？

此外，你可能注意到，这个时间似乎不大对啊，怎么不是十六点？难道时区不是 `UTC+8` 吗？下面一节就讲了这件事情。

## `Asia/Shanghai`

使用如下方法可以获取默认时区：

```js
new Intl.DateTimeFormat().resolvedOptions().timeZone // 'Asia/Shanghai'
```

所以，`Asia/Shanghai` 和 `UTC+8` 有何区别？现在是没有的，以前有：

- 1986-1991 年，实行夏令时。
- 1940 年代有多次调整，很混乱，我也不清楚。
- 1919年，实行夏令时。
- 1901年前，使用本地时间 `UTC+8:05:43`。

[这个网站 ](https://www.timeanddate.com/time/zone/china/shanghai)可以看到时区的历史变化。我也看了 [IANA 时区数据库](https://www.iana.org/time-zones)，看得我晕头转向。

除此之外需要注意，中国除了 `Asia/Shanghai` 外，还有 `Asia/Urumqi`、`Asia/Hong_Kong`、`Asia/Macau`、`Asia/Taipei`。目前都是 `UTC+8`，历史上有不同。后三者不论（因为我懒得看），`Asia/Urumqi` 在 1980 年前使用 `UTC+6` 的新疆时间，在 1928 年前使用的本地时间 `UTC+5:50:20`。

## day.js

这个库很多人用，体积很小。然而它对时区支持很不好。它号称对时区有支持，通过插件支持。事实上呢，有没有支持？如有。到底有没有？如有。

```js
// 改个时区，时间也变了？（二者都错误）
dayjs('1900-01-01T00:00:00Z').tz('Asia/Shanghai').toISOString() // '1900-01-01T00:05:00.000Z'
dayjs('1900-01-01T00:00:00Z').tz('Etc/GMT-8').toISOString() // '1900-01-01T00:05:17.000Z'

// 修改后的时间怎么还依赖于修改前的时间？（前者正确，后者错误）
dayjs('1990-08-01T00:00:00Z').tz('Asia/Shanghai').year(1990).month(7).date(1).hour(0).minute(0).second(0).toISOString() // '1990-07-31T15:00:00.000Z' 
dayjs('1990-01-01T00:00:00Z').tz('Asia/Shanghai').year(1990).month(7).date(1).hour(0).minute(0).second(0).toISOString() // '1990-07-31T16:00:00.000Z'
```

day.js 一遇到夏令时或者时区的变化就摆烂了，常常给出错误的结果。别管对不对，你就说小不小吧！

当然，也许是我用错了。不过不管怎样，如果对时区有需求，还是用 [Luxon](https://moment.github.io/luxon/) 吧！简单清晰：

```js
luxon.DateTime.fromISO('1900-01-01T00:00:00Z').setZone('Asia/Shanghai').toISO() // '1900-01-01T08:05:43.000+08:05'

luxon.DateTime.fromISO('1990-01-01T00:00:00Z').setZone('Asia/Shanghai').set({ year: 1990, month: 8, day: 1, hour: 0, minute: 0, second: 0 }).toISO() // '1990-08-01T00:00:00.000+09:00'
```
