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
  focus: ['Agent / LangGraph', 'React · Next.js', 'TypeScript', '性能与可观测', 'SEO / GEO'],
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
