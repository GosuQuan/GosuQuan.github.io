export const profile = {
  name: 'GosuQuan',
  handle: 'thisiskingsley',
  tagline: '全栈 · SEO/GEO · 动效与开源分享',
  blurb:
    '做能被搜索和 AI 引用的产品，也做看得见的动效。这里是作品集、技术文章与开源项目的入口。',
  github: 'https://github.com/GosuQuan',
  email: '',
}

export const featuredProject = {
  id: 'seo-geo-commerce',
  name: 'TrailForge 峰途',
  subtitle: 'SEO + GEO 电商参考店面',
  description:
    '可 fork 的店面 + 工具库 + Shopify 交付包：事实单一来源、Answer-first 商品页、JSON-LD / llms.txt、GEO 审计，以及 R3F / Motion 懒加载动效。',
  demo: 'http://117.72.122.109:3088/',
  repo: 'https://github.com/GosuQuan/seo-geo-commerce',
  highlights: [
    { label: 'Answer-first PDP', href: 'http://117.72.122.109:3088/products' },
    { label: 'GEO 审计 /audit', href: 'http://117.72.122.109:3088/audit' },
    { label: '动效实验室', href: 'http://117.72.122.109:3088/effects' },
    { label: '购物车→打赏', href: 'http://117.72.122.109:3088/tip' },
    { label: '作品集页', href: 'http://117.72.122.109:3088/portfolio' },
    { label: 'Shopify Liquid 包', href: 'https://github.com/GosuQuan/seo-geo-commerce/tree/main/docs/shopify' },
  ],
  stack: ['Next.js 15', 'TypeScript', 'Tailwind', 'R3F', 'Framer Motion', 'Shopify Liquid'],
  seoLine: '事实单一来源 + 答案前置，方便搜索和 AI 引用。',
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
    title: '为什么 Answer-first 比堆关键词更适合 GEO',
    summary: '从单一事实源到 JSON-LD / FAQ，让搜索和 AI 都能直接引用答案。',
    href: 'https://github.com/GosuQuan/seo-geo-commerce#-%E4%BA%AE%E7%82%B9%E7%BD%91%E6%A0%BC',
    status: '开源文档',
  },
  {
    title: 'Shopify SEO/GEO 指南（交付向）',
    summary: 'Liquid 包与企业亮点文档，把 Demo 能力落到可交付的主题扩展。',
    href: 'http://117.72.122.109:3088/guides/shopify-seo-geo',
    status: '指南',
  },
  {
    title: '动效实验室：R3F + Motion 懒加载',
    summary: '炫酷但不拖垮首屏——实验室与 Lottie 路径可直接体验。',
    href: 'http://117.72.122.109:3088/effects',
    status: '实验',
  },
]

export const nav = [
  { id: 'work', label: '作品' },
  { id: 'open', label: '开源' },
  { id: 'writing', label: '文章' },
  { id: 'contact', label: '联系' },
]
