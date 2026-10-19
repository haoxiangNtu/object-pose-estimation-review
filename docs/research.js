window.RESEARCH = {
  reviewed: '2026-10-19',
  methods: [
    {
      id:'foundationpose', name:'FoundationPose', year:2024, venue:'CVPR', route:'rgbd',
      role:'现有基线', input:'RGB-D + mesh；论文也支持参考图像方案',
      mechanism:'生成多个初始位姿，利用渲染比较逐步修正，再对候选评分；同时支持位姿跟踪。',
      judgment:'先修正输入与初始化的鲁棒性，再作为新方法的公平基线。',
      caveat:'一次带噪输入的失败，不足以说明整套方法已经过时；我们的封装与上游实现也须区分。',
      status:'作者提供代码与模型使用说明',
      project:'https://nvlabs.github.io/FoundationPose/', code:'https://github.com/NVlabs/FoundationPose',
      paper:'https://arxiv.org/abs/2312.08344', sourceLabel:'作者项目与论文'
    },
    {
      id:'sam6d', name:'SAM-6D', year:2024, venue:'CVPR', route:'rgbd',
      role:'优先对照 · 不同求解路线', input:'RGB-D + CAD 模型',
      mechanism:'分割与位姿估计分别由 ISM、PEM 处理；通过部分点集匹配建立 3D—3D 对应关系。',
      judgment:'比较点对应求解能否比当前渲染细化路线更好地应对坏 mask。',
      caveat:'仍依赖分割与深度；SAM-6D 不是“把 SAM3 接在 FoundationPose 前面”。',
      status:'作者提供自定义数据示例与模型下载说明',
      project:'https://github.com/JiehongLin/SAM-6D', code:'https://github.com/JiehongLin/SAM-6D',
      paper:'https://arxiv.org/abs/2311.15707', sourceLabel:'作者代码与论文'
    },
    {
      id:'gigapose', name:'GigaPose', year:2024, venue:'CVPR', route:'rgb',
      role:'初始姿态研究候选', input:'RGB + CAD 渲染模板',
      mechanism:'模板匹配恢复部分旋转，再通过局部特征对应估计其余自由度。',
      judgment:'适合考察初始候选质量；不必将它视为整个跟踪链路的直接替代。',
      caveat:'粗位姿和叠加细化后的结果要分开比较；模板准备也需要计入接入成本。',
      status:'作者公开训练与测试实现',
      project:'https://github.com/nv-nguyen/gigapose', code:'https://github.com/nv-nguyen/gigapose',
      paper:'https://openaccess.thecvf.com/content/CVPR2024/html/Nguyen_GigaPose_Fast_and_Robust_Novel_Object_Pose_Estimation_via_One_CVPR_2024_paper.html', sourceLabel:'作者代码与 CVPR 论文'
    },
    {
      id:'pos3r', name:'Pos3R', year:2025, venue:'CVPR', route:'rgb',
      role:'RGB 替代路线', input:'单张 RGB + 对象模型/模板',
      mechanism:'利用三维重建基础模型的特征改善模板选择，不需要额外的任务训练，可结合后续细化。',
      judgment:'用于分析不使用观测深度的路线能否提供互补信息。',
      caveat:'作者指出重遮挡仍有限制；项目页没有可确认的代码入口，不承诺立即可复现。',
      status:'论文与项目页可访问；代码可用性未确认',
      project:'https://pos3r.rios.ai/', code:null,
      paper:'https://pos3r.rios.ai/', sourceLabel:'作者项目页及其论文入口'
    },
    {
      id:'wapr', name:'WAPR', year:2026, venue:'ECCV', route:'rgbd',
      role:'优先对照 · 大偏差修正', input:'RGB-D + 米制 mesh + mask 或框',
      mechanism:'训练覆盖最高 90° 的候选旋转扰动。默认 12 个候选，经大角度修正、小角度修正与评分选择结果。',
      judgment:'输入条件与已有系统接近，值得比较初始化扰动恢复与完整请求耗时。',
      caveat:'90° 是训练扰动范围，不是成功保证；旋转对照中的平移可能固定为真值，不能外推到大平移偏差。',
      status:'作者提供软件包、示例与权重获取说明',
      project:'https://wangyulin-seu.github.io/WAPR/', code:'https://github.com/WangYuLin-SEU/WAPR',
      paper:'https://arxiv.org/abs/2610.09535', sourceLabel:'作者项目、实现与论文'
    },
    {
      id:'point2pose', name:'Point2Pose', year:2026, venue:'ECCV', route:'video',
      role:'遮挡恢复研究候选', input:'RGB-D 视频 + 少量目标点（无模型路线）',
      mechanism:'长期二维点轨迹经深度提升到三维，结合目标地图与图优化估计位姿，并探索完全遮挡后的恢复。',
      judgment:'对应抓住后遮挡和重新出现的场景，适合独立评估连续跟踪。',
      caveat:'作者报告存在单物体精度与广泛无模型能力的取舍；接入口沿任务还要对齐已有 mesh 坐标系。',
      status:'作者项目提供论文、实现入口与交互结果；本项目未部署',
      project:'https://point2pose.github.io/', code:null,
      paper:'https://point2pose.github.io/', sourceLabel:'作者项目及其论文/代码入口'
    }
  ],
  experiment: [
    {name:'原始输入（带孤立点）',tilt:157.22,bottom:-30.65,iou:43.75,depth:52.11},
    {name:'仅清理微小连通域',tilt:3.10,bottom:0.92,iou:89.41,depth:3.13},
    {name:'原 mask + 深度范围筛选',tilt:3.20,bottom:0.94,iou:89.41,depth:3.13},
    {name:'深度几何分割 · 离桌 3 mm',tilt:4.38,bottom:1.61,iou:86.97,depth:2.85},
    {name:'深度几何分割 · 离桌 5 mm',tilt:4.27,bottom:1.74,iou:87.39,depth:2.74},
    {name:'深度几何分割 · 离桌 8 mm',tilt:3.49,bottom:0.85,iou:89.83,depth:3.13}
  ]
};
