export const profile = {
  name: 'GosuQuan',
  displayName: 'Kingsley Li',
  handle: 'thisiskingsley',
  tagline: '全栈 · SEO/GEO · 开源与工程交付',
  blurb:
    '开源项目与工程实践的个人站点。',
  blurbShort: '开源与工程实践。',
  github: 'https://github.com/GosuQuan',
  email: 'ikingsleyes@gmail.com',
}

export const featuredProject = {
  id: 'seo-geo-commerce',
  name: 'TrailForge 峰途',
  subtitle: '开源电商演示 · SEO/GEO',
  description:
    '可 fork 的店面和 Shopify 交付包。我重点做了三件事：答案写在首屏、商品事实只维护一份、重动效不拖首页。',
  demo: 'http://117.72.122.109:3088/',
  repo: 'https://github.com/GosuQuan/seo-geo-commerce',
  highlights: [
    { label: '打开演示', logo: '/logos/tech/demo.svg', href: 'http://117.72.122.109:3088/' },
    { label: 'GitHub', logo: '/logos/tech/github.svg', href: 'https://github.com/GosuQuan/seo-geo-commerce' },
    { label: 'Shopify Liquid', logo: '/logos/tech/shopify.svg', href: 'https://github.com/GosuQuan/seo-geo-commerce/tree/main/docs/shopify' },
    { label: 'Answer-first / GEO', logo: '/logos/tech/seo.svg', href: 'http://117.72.122.109:3088/products' },
    { label: 'JSON-LD 事实源', logo: '/logos/tech/seo.svg', href: 'http://117.72.122.109:3088/audit' },
    { label: '动效实验室', logo: '/logos/tech/react.svg', href: 'http://117.72.122.109:3088/effects' },
  ],
  demos: [
    {
      src: '/demos/home.jpg',
      title: '首页 · Answer-first + 商品 3D',
      body: '首屏先给可引用的短结论，右侧是可拖的 R3F 商品场景；底部标签把 JSON-LD、Facts API、llms.txt 等能力摊开给访客。',
      href: 'http://117.72.122.109:3088/',
    },
    {
      src: '/demos/products.jpg',
      title: '商品列表 · 单一事实源',
      body: '列表、详情页文案和 JSON-LD 共用同一套商品数据，改价格规格只动一处，避免页面和结构化数据两套稿对不上。',
      href: 'http://117.72.122.109:3088/products',
    },
    {
      src: '/demos/audit.jpg',
      title: 'GEO 审计 · 可打分检查',
      body: '按路由跑 Answer-first、Product JSON-LD、FAQ、Sitemap 等清单，示例商品页可拿到满分 A，改完立刻能自查。',
      href: 'http://117.72.122.109:3088/audit',
    },
    {
      src: '/demos/effects.jpg',
      title: '动效实验室 · 按路由懒加载',
      body: 'Motion / GSAP / Lottie / R3F 各自独立 demo 页，dynamic 懒加载，实验室再炫也不进商城首页主包。',
      href: 'http://117.72.122.109:3088/effects',
    },
  ],
  talkingPoints: [
    {
      title: 'Answer-first / GEO',
      body: '首屏先给短结论，FAQ 和规格跟同一套数据，方便被搜到、也被 AI 引用，不是堆关键词。',
    },
    {
      title: 'JSON-LD · 单一事实源',
      body: '价格规格只在数据层改一次，页面文案和结构化数据一起走，少两套稿对不上。',
    },
    {
      title: '动效懒加载',
      body: 'R3F、Motion、Lottie 按路由再加载，实验室页再炫也不进首页主包。',
    },
    {
      title: '电商实战 3D',
      body: 'TrailForge 首页可拖商品 3D，R3F 场景按需加载，不拖垮首屏。',
    },
  ],
  stack: ['Next.js 15', 'TypeScript', 'Tailwind', 'R3F', 'Framer Motion', 'Shopify Liquid'],
  seoLine: '一份事实 + 答案前置，搜索和 AI 都更好用。',
}


export const about = {
  role: 'AI Agent 应用全栈开发',
  introLead: '现在在',
  introMid: '做国际电商与 AI 工程，偏前端性能和 Agent 落地。之前在',
  introAfterKe: '做 B 端业务与内部 AI 工作流。业余把 SEO/GEO 电商实践开源成',
  introEnd: '。雅思 8 分。',
  companies: [
    { id: 'jd', name: '京东 Joybuy', logo: '/logos/jd.png', href: 'https://www.joybuy.com/' },
    { id: 'ke', name: '贝壳', logo: '/logos/ke.png', href: 'https://www.ke.com/' },
    { id: 'tf', name: 'TrailForge', logo: '/logos/trailforge.png', href: 'http://117.72.122.109:3088/' },
  ],
  focusGroups: [
    {
      title: 'AI',
      items: [
        { label: 'LangGraph / Agent', logo: '/logos/tech/agent.svg' },
        { label: 'LangChain', logo: '/logos/tech/langchain.svg' },
        { label: 'RAG', logo: '/logos/tech/rag.svg' },
        { label: 'Tool Calling', logo: '/logos/tech/tools.svg' },
      ],
    },
    {
      title: '前端',
      items: [
        { label: 'React', logo: '/logos/tech/react.svg' },
        { label: 'Next.js', logo: '/logos/tech/nextjs.svg' },
        { label: 'TypeScript', logo: '/logos/tech/typescript.svg' },
        { label: 'JavaScript', logo: '/logos/tech/javascript.svg' },
        { label: 'Webpack', logo: '/logos/tech/webpack.svg' },
        { label: '微信小程序', logo: '/logos/tech/wechat.svg' },
        { label: 'HTML / CSS', logo: '/logos/tech/css.svg' },
        { label: 'MobX', logo: '/logos/tech/mobx.svg' },
      ],
    },
    {
      title: '全栈 · 数据',
      items: [
        { label: 'Node.js', logo: '/logos/tech/nodejs.svg' },
        { label: 'Express / Koa', logo: '/logos/tech/express.svg' },
        { label: 'Python', logo: '/logos/tech/python.svg' },
        { label: 'Java', logo: '/logos/tech/java.svg' },
        { label: 'MySQL', logo: '/logos/tech/mysql.svg' },
        { label: 'Redis', logo: '/logos/tech/redis.svg' },
        { label: '性能与可观测', logo: '/logos/tech/observability.svg' },
        { label: 'SEO / GEO', logo: '/logos/tech/seo.svg' },
      ],
    },
  ],
  hobbyBlurb: '工作之余也爱「乱投资」，爱看盘、爱聊市场——还想搞个大新闻。',
  hobbies: [
    { emoji: '🥾', label: '徒步' },
    { emoji: '🏸', label: '羽毛球单打' },
    { emoji: '🍜', label: '探店' },
    { emoji: '✈️', label: '旅行' },
    { emoji: '💪', label: '健身' },
    { emoji: '🥁', label: '架子鼓（找搭子中）' },
  ],
}

export const openSource = [
  {
    name: 'short-drama-video',
    desc: 'Short Drama Video / AI 短剧编排实验 · 分镜→prompt→双帧→短窗视频 · MIT',
    url: 'https://github.com/GosuQuan/short-drama-video',
    tags: [
      { label: 'AI Video', logo: '/logos/tech/demo.svg' },
      { label: 'Orchestration', logo: '/logos/tech/agent.svg' },
      { label: 'Storyboard', logo: '/logos/tech/tools.svg' },
    ],
    howToRun: '浏览 examples/ 与 docs/orchestration-rooftop-neon-dance.md',
    architecture: '分镜 Markdown → 文生图首/尾帧 → first+last frame 图生视频（~15s 9:16）',
    highlights: [
      'Storyboard → Prompt 结构化，换模型不换剧本结构',
      '双帧锚定，减少纯文生视频漂移',
      '15s 高光窗，可多段拼接',
      '从爆款节奏学骨架，原创文案与分镜',
    ],
    contribution: '独立搭建编排笔记与示例分镜、样片资产目录与 orchestration 文档。',
  },
  {
    name: 'listing-ops-agent',
    desc: '跨境 Listing Ops Agent · LangGraph + 人工审批 · MIT',
    url: 'https://github.com/GosuQuan/listing-ops-agent',
    tags: [
      { label: 'Python', logo: '/logos/tech/python.svg' },
      { label: 'LangGraph / Agent', logo: '/logos/tech/agent.svg' },
      { label: 'Tool Calling', logo: '/logos/tech/tools.svg' },
    ],
    howToRun: 'pip install -r requirements.txt && python demo.py（输入 approve 导出 JSON）',
    architecture: 'diagnose → draft → human_approve(interrupt) → export（MemorySaver checkpoint）',
    highlights: [
      'HITL：必须 Approve 才导出，草稿不能直出',
      '确定性诊断 / 草稿工具，LLM 可替换',
      '目标把磨稿压到「分钟级草稿 + 短审批」（目标表述，非客户 ROI）',
      '可测 diagnose_ms / draft_ms、审批率与规则命中',
      '不直连平台写操作，只导出 + 审计边界',
    ],
    contribution:
      '独立从 0 到 1：LangGraph 状态图与 interrupt 审批、诊断/草稿工具、多语模板骨架、demo 入口、指标与评测目录规划。',
  },
  {
    name: 'clash-auto-switch',
    desc: 'Clash 节点劣化自动切换 · 延迟+吞吐双检 · 本地看板 · MIT',
    url: 'https://github.com/GosuQuan/clash-auto-switch',
    image: '/demos/clash-auto-switch.gif',
    tags: [
      { label: 'Python', logo: '/logos/tech/python.svg' },
      { label: 'Observability', logo: '/logos/tech/observability.svg' },
      { label: 'GitHub', logo: '/logos/tech/github.svg' },
    ],
    highlights: [
      '延迟 + 真实吞吐双检，识别「假活」节点',
      '地区黑名单 / 优先级与轮转抽样（禁港，日>新>台>美>英）',
      '防抖：评分领先阈值 + 冷却 + 重试，减少来回跳',
      '本地看板可追溯每次切换原因',
      '单文件托盘应用，只调 mihomo API，不改 Clash 配置',
    ],
    contribution:
      '独立从 0 到 1 完成：巡检与切换策略、吞吐实测、地区规则、防抖、本地 Web 看板与系统托盘、Windows / macOS 打包与 GitHub Actions CI。',
  },
  {
    name: 'seo-geo-commerce',
    desc: 'SEO+GEO 电商 Demo · Shopify 交付包 · MIT',
    url: 'https://github.com/GosuQuan/seo-geo-commerce',
    tags: [
      { label: 'Next.js', logo: '/logos/tech/nextjs.svg' },
      { label: 'GEO', logo: '/logos/tech/seo.svg' },
      { label: 'Shopify', logo: '/logos/tech/shopify.svg' },
    ],
    highlights: [
      'Answer-first 首屏短答，方便搜索与 AI 引用',
      '商品事实单一数据源，文案与 JSON-LD 同源',
      '重动效按路由懒加载，不拖首页主包',
    ],
    contribution: '把 SEO/GEO 电商实践开源成 TrailForge 演示店面与 Shopify 交付包。',
  },
]

export const articles = [
  {
    title: 'Answer-first 与 GEO 可引用性',
    summary: '为什么不是堆关键词：首屏短答、FAQ 与同源结构化数据。',
    href: 'https://github.com/GosuQuan/seo-geo-commerce#-%E4%BA%AE%E7%82%B9%E7%BD%91%E6%A0%BC',
    status: '开源文档',
  },
  {
    title: 'JSON-LD 与单一事实源',
    summary: '文案、规格表、结构化数据共用数据层，减少交付与 SEO 漂移。',
    href: 'http://117.72.122.109:3088/audit',
    status: '可演示',
  },
  {
    title: '动效懒加载：保首页性能',
    summary: '炫酷动效应在实验室路径，而不是拖垮首屏——可现场打开对比。',
    href: 'http://117.72.122.109:3088/effects',
    status: '实验',
  },
]

export const nav = [
  { id: 'work', label: '项目' },
  { id: 'open', label: '开源' },
  { id: 'about', label: '关于' },
  { id: 'contact', label: '联系' },
]
