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
    { label: '在线演示（主入口）', href: 'http://117.72.122.109:3088/' },
    { label: 'GitHub 仓库', href: 'https://github.com/GosuQuan/seo-geo-commerce' },
    { label: 'Answer-first / GEO 可引用性', href: 'http://117.72.122.109:3088/products' },
    { label: 'JSON-LD · 单一事实源', href: 'http://117.72.122.109:3088/audit' },
    { label: '动效懒加载 · 保首屏', href: 'http://117.72.122.109:3088/effects' },
    { label: '购物车→打赏流程', href: 'http://117.72.122.109:3088/tip' },
    { label: 'Shopify Liquid 交付包', href: 'https://github.com/GosuQuan/seo-geo-commerce/tree/main/docs/shopify' },
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
  role: 'AI Agent 应用开发 · 前端',
  intro:
    '现在在京东 Joybuy 做国际电商主站与 AI 工程：购物车核心链路、Agent 巡检和前端性能。之前在贝壳做楼盘字典与内部 AI 工作流。业余把 SEO/GEO 电商实践开源成 TrailForge。雅思 8 分，英文协作无障碍。',
  highlights: [
    {
      title: 'Joybuy · 购物车与 AI 工程',
      body: '百万级 DAU 购物车 PC/H5 架构；AI Review 用规则引擎兜底越权与结算路径，模型只补语义。业务侧 TTFB 缩短 34%，LCP 从 1.7s 到 1.3s。',
    },
    {
      title: 'DongGUI · 巡检 Agent',
      body: 'Plan-Execute-Evaluate-Repair + RAG：页面知识缓存命中 70%+，LLM 调用约降 80%，Token 约降 45%；多模型路由把巡检耗时再压约 30%。',
    },
    {
      title: '贝壳 · 从业务到内部 AI',
      body: '楼盘字典支撑 40 万经纪人；搭了 2+ 条 PRD→Coding Agent 工作流，集团内 200+ 人在用。入职半年 P4→P5。',
    },
  ],
  focus: ['Agent / LangGraph', 'React · Next.js', 'TypeScript', '性能与可观测', 'SEO / GEO', '雅思 8 分'],
}

export const openSource = [
  {
    name: 'seo-geo-commerce',
    desc: 'SEO+GEO 电商 Demo · Shopify 交付包 · MIT',
    url: 'https://github.com/GosuQuan/seo-geo-commerce',
    tags: ['Next.js', 'GEO', 'Shopify'],
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
