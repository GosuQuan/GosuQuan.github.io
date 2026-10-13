export const profile = {
  name: 'GosuQuan',
  handle: 'thisiskingsley',
  tagline: '全栈 · SEO/GEO · 开源与工程交付',
  blurb:
    '这里主要放我做过的开源。面试时能顺着项目讲清楚取舍和落地，不靠堆技术名词。',
  blurbShort: '开源项目为主，面试能讲清取舍。',
  github: 'https://github.com/GosuQuan',
  email: '',
}

export const featuredProject = {
  id: 'seo-geo-commerce',
  name: 'TrailForge 峰途',
  subtitle: 'SEO + GEO 电商参考实现 · 面试主案例',
  description:
    '可 fork 的店面 + 工具库 + Shopify 交付包。面试里我重点讲三件事：Answer-first/GEO 如何提升可引用性、JSON-LD 与单一事实源、动效库懒加载如何保住首页性能。',
  demo: 'http://117.72.122.109:3088/',
  repo: 'https://github.com/GosuQuan/seo-geo-commerce',
  highlights: [
    { label: 'GitHub 仓库（主入口）', href: 'https://github.com/GosuQuan/seo-geo-commerce' },
    { label: '电商实战 3D（演示次要）', href: 'http://117.72.122.109:3088/' },
    { label: 'Answer-first / GEO 可引用性', href: 'http://117.72.122.109:3088/products' },
    { label: 'JSON-LD · 单一事实源', href: 'http://117.72.122.109:3088/audit' },
    { label: '动效懒加载 · 保首屏', href: 'http://117.72.122.109:3088/effects' },
    { label: '购物车→打赏流程', href: 'http://117.72.122.109:3088/tip' },
    { label: 'Shopify Liquid 交付包', href: 'https://github.com/GosuQuan/seo-geo-commerce/tree/main/docs/shopify' },
  ],
  talkingPoints: [
    {
      title: 'Answer-first / GEO',
      body: '首屏短答 + FAQ + 规格同源，提升搜索与 AI 答案的可引用性，而不只是堆关键词。',
    },
    {
      title: 'JSON-LD · 单一事实源',
      body: '商品事实集中在数据层，页面文案与结构化数据同源，避免两套稿漂移。',
    },
    {
      title: '动效懒加载',
      body: 'R3F / Motion 按需加载，实验室与 Lottie 不影响首页关键路径性能。',
    },
    {
      title: '电商实战 3D',
      body: '商品级可拖 R3F 在 TrailForge 首页英雄区；简历站用抽象拓扑，两边不撞车。',
    },
  ],
  stack: ['Next.js 15', 'TypeScript', 'Tailwind', 'R3F', 'Framer Motion', 'Shopify Liquid'],
  seoLine: '事实单一来源 + 答案前置，方便搜索和 AI 引用。',
}

export const openSource = [
  {
    name: 'seo-geo-commerce',
    desc: 'SEO+GEO 电商 Demo · Shopify 交付包 · MIT — 面试主开源项目',
    url: 'https://github.com/GosuQuan/seo-geo-commerce',
    tags: ['Next.js', 'GEO', 'Shopify'],
  },
]

export const articles = [
  {
    title: 'Answer-first 如何提升 GEO 可引用性',
    summary: '面试常问：为什么不是堆关键词？用首屏短答、FAQ 与同源结构化数据讲清楚。',
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
  { id: 'about', label: '关于' },
  { id: 'work', label: '项目' },
  { id: 'open', label: '开源' },
  { id: 'writing', label: '可讲点' },
  { id: 'contact', label: '联系' },
]
