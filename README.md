# 6D Object Pose Estimation Review

面向机器人操作的 6D 物体位姿估计调研，聚焦 2024–2026 年工作与“已知 mesh + RGB-D + 口沿/壶嘴精确定位”的工程需求。

- 网站：<https://haoxiangntu.github.io/object-pose-estimation-review/>
- 资料核对日期：2026-10-19
- 页面语言：中文；模型与论文名称保留英文。

## 内容

- FoundationPose、SAM-6D、GigaPose、Pos3R、WAPR、Point2Pose。
- 按年份、输入路线筛选；方法比较和原始来源链接。
- 分割、深度、位姿估计、跟踪之间的职责说明。
- 一个不发布原始影像的项目内单帧消融摘要，以及明确标识的交互示意图。
- 建议的离线对照协议；没有声称已经在本项目运行新候选模型。

论文结论、工程判断、项目内实验分别标注。这里不是完整综述，也不是模型排行榜。论文与软件归原作者所有；不包含其模型权重、代码实现或转载图像。

## 本地查看

直接打开 `docs/index.html`，或：

```bash
python3 -m http.server 8765 --directory docs
```

页面为原生 HTML/CSS/JavaScript，无构建依赖、外部字体、追踪脚本或分析 SDK。

## 检查

```bash
node scripts/check.mjs
node scripts/browser-qa.mjs
```

浏览器检查需要 Node.js 22+ 和本地 Chrome；可用 `CHROME_BIN` 指定浏览器可执行文件。测试产物保存在被忽略的 `.qa/`。

## 部署

GitHub Pages 从 `main` 分支的 `/docs` 发布。维护内容时编辑 `docs/research.js` 和 `docs/index.html`，通过检查后提交推送。

## 证据边界与隐私

公开的实验摘要只包含汇总数字，不包含现场原始 RGB-D、生产日志、内网地址、凭据、机器人操作代码或第三方专有资产。缺少公开原始数据，外部读者不能仅凭本站独立复现实验。正式公开基准评测需要另行准备可发布的数据与真值。

本仓库不是任何论文作者或机构的官方项目，也不把项目判断归因于论文作者。
