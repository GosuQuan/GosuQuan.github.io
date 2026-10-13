export const profile = {
  name: 'GosuQuan',
  handle: 'thisiskingsley',
  tagline: '全栈 · SEO/GEO · 开源与工程交付',
  blurb:
    '这里主要放我做过的开源，顺着项目能讲清取舍和落地，不靠堆技术名词。',
  blurbShort: '开源项目为主，讲清取舍与落地。',
  github: 'https://github.com/GosuQuan',
  email: '',
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
      body: '商品级可拖 3D 在 TrailForge 首页；简历站用抽象晶体，两边分工清楚。',
    },
  ],
  stack: ['Next.js 15', 'TypeScript', 'Tailwind', 'R3F', 'Framer Motion', 'Shopify Liquid'],
  seoLine: '一份事实 + 答案前置，搜索和 AI 都更好用。',
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
  { id: 'about', label: '关于' },
  { id: 'work', label: '项目' },
  { id: 'open', label: '开源' },
  { id: 'writing', label: '笔记' },
  { id: 'contact', label: '联系' },
]
