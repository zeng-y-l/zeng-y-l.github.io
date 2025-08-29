---
title: 前端生成视频
description: 通过 WebCodecs 在前端生成视频
create: 2024-03-07
---

Web 的能力与日俱增。我发现，它竟然可以直接生成视频。只需提供每一帧的图片，就能生成 MP4。

此前，若想通过图片生成视频，我只知道（没有用过）通过 [`MediaStream`](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaStream) 获取 canvas 的视频流，然后用 [`MediaRecorder`](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaRecorder) 录制成视频。我想，此法有缺陷：视频多久就得绘制多久。

现在，我发现了 [WebCodecs API](https://developer.mozilla.org/zh-CN/docs/Web/API/WebCodecs_API)。我用之生成视频。MP4 需要封装，我使用 [mp4box.js](https://github.com/gpac/mp4box.js/) 实现，它用起来十分容易。

编码视频的方式，mp4box.js 有示例，很简单。只需注意 [`VideoFrame`](https://developer.mozilla.org/en-US/docs/Web/API/VideoFrame)：其构造需要提供 `timestamp` 为微秒的时间；其使用后要 `.close()`。

视频生成完毕后，从 mp4box.js 处可以获得 `ArrayBuffer`。届时可以生成 `Blob`，然后播放，或者继续生成 URL 以下载。