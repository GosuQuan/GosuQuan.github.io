export type Locale = 'zh' | 'en'

export type SiteCopy = {
  meta: { title: string; description: string }
  nav: { id: string; label: string }[]
  profile: {
    displayName: string
    tagline: string
    blurb: string
    blurbShort: string
    github: string
    email: string
    portfolioLabel: string
    viewWork: string
    aboutMe: string
    githubCta: string
  }
  featured: {
    eyebrow: string
    name: string
    subtitle: string
    description: string
    demo: string
    repo: string
    openPage: string
    highlights: { label: string; logo: string; href: string }[]
    demos: { src: string; title: string; body: string; href: string }[]
  }
  openSource: {
    eyebrow: string
    title: string
    more: string
    items: {
      name: string
      desc: string
      url: string
      tags: { label: string; logo: string }[]
    }[]
  }
  about: {
    eyebrow: string
    title: string
    role: string
    introLead: string
    introMid: string
    introAfterKe: string
    introEnd: string
    workTech: string
    offWork: string
    hobbyBlurb: string
    companies: { id: string; name: string; logo: string; href: string }[]
    focusGroups: { title: string; items: { label: string; logo: string }[] }[]
    hobbies: { emoji: string; label: string }[]
  }
  footer: {
    title: string
    blurb: string
    emailCta: string
  }
}

const sharedCompanies = [
  { id: 'jd', name: '京东 Joybuy', logo: '/logos/jd.png', href: 'https://www.joybuy.com/' },
  { id: 'ke', name: '贝壳', logo: '/logos/ke.png', href: 'https://www.ke.com/' },
  { id: 'tf', name: 'TrailForge', logo: '/logos/trailforge.png', href: 'http://117.72.122.109:3088/' },
] as const

const sharedCompaniesEn = [
  { id: 'jd', name: 'JD Joybuy', logo: '/logos/jd.png', href: 'https://www.joybuy.com/' },
  { id: 'ke', name: 'KE Holdings', logo: '/logos/ke.png', href: 'https://www.ke.com/' },
  { id: 'tf', name: 'TrailForge', logo: '/logos/trailforge.png', href: 'http://117.72.122.109:3088/' },
] as const

const techAi = [
  { label: 'LangGraph / Agent', logo: '/logos/tech/agent.svg' },
  { label: 'LangChain', logo: '/logos/tech/langchain.svg' },
  { label: 'RAG', logo: '/logos/tech/rag.svg' },
  { label: 'Tool Calling', logo: '/logos/tech/tools.svg' },
]

const techFe = [
  { label: 'React', logo: '/logos/tech/react.svg' },
  { label: 'Next.js', logo: '/logos/tech/nextjs.svg' },
  { label: 'TypeScript', logo: '/logos/tech/typescript.svg' },
  { label: 'JavaScript', logo: '/logos/tech/javascript.svg' },
  { label: 'Webpack', logo: '/logos/tech/webpack.svg' },
  { label: '微信小程序', logo: '/logos/tech/wechat.svg' },
  { label: 'HTML / CSS', logo: '/logos/tech/css.svg' },
  { label: 'MobX', logo: '/logos/tech/mobx.svg' },
]

const techFeEn = [
  { label: 'React', logo: '/logos/tech/react.svg' },
  { label: 'Next.js', logo: '/logos/tech/nextjs.svg' },
  { label: 'TypeScript', logo: '/logos/tech/typescript.svg' },
  { label: 'JavaScript', logo: '/logos/tech/javascript.svg' },
  { label: 'Webpack', logo: '/logos/tech/webpack.svg' },
  { label: 'WeChat Mini Program', logo: '/logos/tech/wechat.svg' },
  { label: 'HTML / CSS', logo: '/logos/tech/css.svg' },
  { label: 'MobX', logo: '/logos/tech/mobx.svg' },
]

const techFull = [
  { label: 'Node.js', logo: '/logos/tech/nodejs.svg' },
  { label: 'Express / Koa', logo: '/logos/tech/express.svg' },
  { label: 'Python', logo: '/logos/tech/python.svg' },
  { label: 'Java', logo: '/logos/tech/java.svg' },
  { label: 'MySQL', logo: '/logos/tech/mysql.svg' },
  { label: 'Redis', logo: '/logos/tech/redis.svg' },
  { label: '性能与可观测', logo: '/logos/tech/observability.svg' },
  { label: 'SEO / GEO', logo: '/logos/tech/seo.svg' },
]

const techFullEn = [
  { label: 'Node.js', logo: '/logos/tech/nodejs.svg' },
  { label: 'Express / Koa', logo: '/logos/tech/express.svg' },
  { label: 'Python', logo: '/logos/tech/python.svg' },
  { label: 'Java', logo: '/logos/tech/java.svg' },
  { label: 'MySQL', logo: '/logos/tech/mysql.svg' },
  { label: 'Redis', logo: '/logos/tech/redis.svg' },
  { label: 'Perf & Observability', logo: '/logos/tech/observability.svg' },
  { label: 'SEO / GEO', logo: '/logos/tech/seo.svg' },
]

export const siteCopy: Record<Locale, SiteCopy> = {
  zh: {
    meta: {
      title: 'Kingsley Li 的作品集',
      description: 'GosuQuan 个人作品集：开源项目、技术笔记与动效实验，含 TrailForge SEO+GEO 电商演示。',
    },
    nav: [
      { id: 'work', label: '项目' },
      { id: 'open', label: '开源' },
      { id: 'about', label: '关于' },
      { id: 'contact', label: '联系' },
    ],
    profile: {
      displayName: 'Kingsley Li',
      tagline: '全栈 · SEO/GEO · 开源与工程交付',
      blurb: '开源项目与工程实践的个人站点。',
      blurbShort: '开源与工程实践。',
      github: 'https://github.com/GosuQuan',
      email: 'ikingsleyes@gmail.com',
      portfolioLabel: 'Portfolio',
      viewWork: '查看项目',
      aboutMe: '关于我',
      githubCta: 'GitHub',
    },
    featured: {
      eyebrow: 'Open source',
      name: 'TrailForge 峰途',
      subtitle: '开源电商演示 · SEO/GEO',
      description:
        '可 fork 的店面和 Shopify 交付包。我重点做了三件事：答案写在首屏、商品事实只维护一份、重动效不拖首页。',
      demo: 'http://117.72.122.109:3088/',
      repo: 'https://github.com/GosuQuan/seo-geo-commerce',
      openPage: '打开对应页面 →',
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
    },
    openSource: {
      eyebrow: 'Open source',
      title: '开源项目',
      more: '更多开源会陆续挂上。',
      items: [
        {
          name: 'seo-geo-commerce',
          desc: 'SEO+GEO 电商 Demo · Shopify 交付包 · MIT',
          url: 'https://github.com/GosuQuan/seo-geo-commerce',
          tags: [
            { label: 'Next.js', logo: '/logos/tech/nextjs.svg' },
            { label: 'GEO', logo: '/logos/tech/seo.svg' },
            { label: 'Shopify', logo: '/logos/tech/shopify.svg' },
          ],
        },
      ],
    },
    about: {
      eyebrow: 'About',
      title: '关于我',
      role: 'AI Agent 应用开发 · 前端',
      introLead: '现在在',
      introMid: '做国际电商与 AI 工程，偏前端性能和 Agent 落地。之前在',
      introAfterKe: '做 B 端业务与内部 AI 工作流。业余把 SEO/GEO 电商实践开源成',
      introEnd: '。雅思 8 分。',
      workTech: '工作技术',
      offWork: '工作之余',
      hobbyBlurb: '工作之余也爱「乱投资」，爱看盘、爱聊市场——还想搞个大新闻。',
      companies: [...sharedCompanies],
      focusGroups: [
        { title: 'AI', items: techAi },
        { title: '前端', items: techFe },
        { title: '全栈 · 数据', items: techFull },
      ],
      hobbies: [
        { emoji: '🥾', label: '徒步' },
        { emoji: '🏸', label: '羽毛球单打' },
        { emoji: '🍜', label: '探店' },
        { emoji: '✈️', label: '旅行' },
        { emoji: '💪', label: '健身' },
        { emoji: '🥁', label: '架子鼓（找搭子中）' },
      ],
    },
    footer: {
      title: '联系',
      blurb: '开源协作，欢迎看仓库和演示。',
      emailCta: '发邮件',
    },
  },
  en: {
    meta: {
      title: "Kingsley Li's Portfolio",
      description:
        'GosuQuan personal portfolio: open-source projects, engineering notes, and motion experiments — featuring TrailForge, an SEO+GEO commerce demo.',
    },
    nav: [
      { id: 'work', label: 'Work' },
      { id: 'open', label: 'Open Source' },
      { id: 'about', label: 'About' },
      { id: 'contact', label: 'Contact' },
    ],
    profile: {
      displayName: 'Kingsley Li',
      tagline: 'Full-stack · SEO/GEO · Open source & delivery',
      blurb: 'A personal site for open-source work and engineering practice.',
      blurbShort: 'Open source & engineering.',
      github: 'https://github.com/GosuQuan',
      email: 'ikingsleyes@gmail.com',
      portfolioLabel: 'Portfolio',
      viewWork: 'View work',
      aboutMe: 'About me',
      githubCta: 'GitHub',
    },
    featured: {
      eyebrow: 'Open source',
      name: 'TrailForge',
      subtitle: 'Open-source commerce demo · SEO/GEO',
      description:
        'A forkable storefront and Shopify delivery pack. Three focus areas: answers on the first screen, one source of product truth, and heavy motion that stays off the homepage critical path.',
      demo: 'http://117.72.122.109:3088/',
      repo: 'https://github.com/GosuQuan/seo-geo-commerce',
      openPage: 'Open this page →',
      highlights: [
        { label: 'Live demo', logo: '/logos/tech/demo.svg', href: 'http://117.72.122.109:3088/' },
        { label: 'GitHub', logo: '/logos/tech/github.svg', href: 'https://github.com/GosuQuan/seo-geo-commerce' },
        { label: 'Shopify Liquid', logo: '/logos/tech/shopify.svg', href: 'https://github.com/GosuQuan/seo-geo-commerce/tree/main/docs/shopify' },
        { label: 'Answer-first / GEO', logo: '/logos/tech/seo.svg', href: 'http://117.72.122.109:3088/products' },
        { label: 'JSON-LD source of truth', logo: '/logos/tech/seo.svg', href: 'http://117.72.122.109:3088/audit' },
        { label: 'Effects lab', logo: '/logos/tech/react.svg', href: 'http://117.72.122.109:3088/effects' },
      ],
      demos: [
        {
          src: '/demos/home.jpg',
          title: 'Home · Answer-first + product 3D',
          body: 'Lead with a citable short answer; a draggable R3F product scene sits on the side. Capability chips surface JSON-LD, Facts API, llms.txt, and more.',
          href: 'http://117.72.122.109:3088/',
        },
        {
          src: '/demos/products.jpg',
          title: 'Catalog · single source of truth',
          body: 'List page, PDP copy, and JSON-LD share one product dataset—change price or specs once, avoid two drafts drifting apart.',
          href: 'http://117.72.122.109:3088/products',
        },
        {
          src: '/demos/audit.jpg',
          title: 'GEO audit · scored checklist',
          body: 'Route-level checks for Answer-first, Product JSON-LD, FAQ, Sitemap, and more. Sample PDPs can hit a full A score for quick self-checks.',
          href: 'http://117.72.122.109:3088/audit',
        },
        {
          src: '/demos/effects.jpg',
          title: 'Effects lab · route-level lazy load',
          body: 'Separate demos for Motion, GSAP, Lottie, and R3F via dynamic imports—so the store homepage never pays for the lab bundle.',
          href: 'http://117.72.122.109:3088/effects',
        },
      ],
    },
    openSource: {
      eyebrow: 'Open source',
      title: 'Open-source projects',
      more: 'More repos coming soon.',
      items: [
        {
          name: 'seo-geo-commerce',
          desc: 'SEO+GEO commerce demo · Shopify pack · MIT',
          url: 'https://github.com/GosuQuan/seo-geo-commerce',
          tags: [
            { label: 'Next.js', logo: '/logos/tech/nextjs.svg' },
            { label: 'GEO', logo: '/logos/tech/seo.svg' },
            { label: 'Shopify', logo: '/logos/tech/shopify.svg' },
          ],
        },
      ],
    },
    about: {
      eyebrow: 'About',
      title: 'About me',
      role: 'AI agent apps · Frontend',
      introLead: 'Currently at',
      introMid: 'on international e-commerce and AI engineering—frontend performance and agent rollout. Previously at',
      introAfterKe: 'on B-side products and internal AI workflows. Off hours I open-sourced SEO/GEO commerce practice as',
      introEnd: '. IELTS 8.0.',
      workTech: 'At work',
      offWork: 'Off work',
      hobbyBlurb: 'Off work I also “invest casually,” watch the market, talk markets—and still want a big headline someday.',
      companies: [...sharedCompaniesEn],
      focusGroups: [
        { title: 'AI', items: techAi },
        { title: 'Frontend', items: techFeEn },
        { title: 'Full-stack · Data', items: techFullEn },
      ],
      hobbies: [
        { emoji: '🥾', label: 'Hiking' },
        { emoji: '🏸', label: 'Singles badminton' },
        { emoji: '🍜', label: 'Food hunting' },
        { emoji: '✈️', label: 'Travel' },
        { emoji: '💪', label: 'Gym' },
        { emoji: '🥁', label: 'Drums (looking for bandmates)' },
      ],
    },
    footer: {
      title: 'Contact',
      blurb: 'Open to open-source collab—repos and demos welcome.',
      emailCta: 'Email',
    },
  },
}
