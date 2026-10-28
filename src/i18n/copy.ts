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
    highlightsLabel: string
    contributionLabel: string
    howToRunLabel: string
    architectureLabel: string
    items: {
      name: string
      desc: string
      url: string
      tags: { label: string; logo: string }[]
      highlights: string[]
      contribution: string
      image?: string
      howToRun?: string
      architecture?: string
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
      highlightsLabel: '亮点',
      contributionLabel: '我做了什么',
      howToRunLabel: '怎么跑',
      architectureLabel: '架构',
      items: [
        {
          name: 'flask-fullstack-starter',
          desc: 'Flask 全栈可用商城 · 前台下单 + 后台类目/商品/订单 · Postgres/Redis · 仅 Repo 本地可跑',
          url: 'https://github.com/GosuQuan/flask-fullstack-starter',
          tags: [
            { label: 'Python / Flask', logo: '/logos/tech/python.svg' },
            { label: 'Redis', logo: '/logos/tech/redis.svg' },
            { label: 'Observability', logo: '/logos/tech/observability.svg' },
          ],
          howToRun: '需 Postgres + Redis；pip install -r requirements.txt && python run.py → /shop · /admin/',
          architecture: 'shop + admin → services → Postgres；Redis 目录缓存 / 结账幂等；Locust + chaos 文档',
          highlights: [
            '服务层薄路由：前台购物与后台类目/商品/订单/用户，订单状态机 + activity_logs 审计',
            '结账幂等（Redis SET NX）+ FOR UPDATE 扣库存，防超卖与重复提交',
            'Redis 目录缓存，宕机自动降级 DB；管理端可触发 Redis Down 等 chaos',
            'Locust 压测结果入仓（本地 smoke ~287 RPS / 0 fail，注明非生产 WSGI）',
          ],
          contribution:
            '独立搭建可用商城：前台购物与后台 CRUD、Redis 缓存与结账幂等、chaos 开关与 Locust 压测文档。',
        },
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
      ],
    },
    about: {
      eyebrow: 'About',
      title: '关于我',
      role: 'AI Agent 应用全栈开发',
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
        'A forkable storefront and Shopify delivery pack. Three focus areas: Answer-first above the fold, a single source of truth for product facts, and heavy motion kept off the homepage critical path.',
      demo: 'http://117.72.122.109:3088/',
      repo: 'https://github.com/GosuQuan/seo-geo-commerce',
      openPage: 'Open this page →',
      highlights: [
        { label: 'Live demo', logo: '/logos/tech/demo.svg', href: 'http://117.72.122.109:3088/' },
        { label: 'GitHub', logo: '/logos/tech/github.svg', href: 'https://github.com/GosuQuan/seo-geo-commerce' },
        { label: 'Shopify Liquid', logo: '/logos/tech/shopify.svg', href: 'https://github.com/GosuQuan/seo-geo-commerce/tree/main/docs/shopify' },
        { label: 'Answer-first / GEO', logo: '/logos/tech/seo.svg', href: 'http://117.72.122.109:3088/products' },
        { label: 'JSON-LD · single source of truth', logo: '/logos/tech/seo.svg', href: 'http://117.72.122.109:3088/audit' },
        { label: 'Effects lab', logo: '/logos/tech/react.svg', href: 'http://117.72.122.109:3088/effects' },
      ],
      demos: [
        {
          src: '/demos/home.jpg',
          title: 'Home · Answer-first + product 3D',
          body: 'Answer-first: a citable short answer on the first screen; a draggable R3F product scene on the side. Chips surface JSON-LD, Facts API, llms.txt, and more.',
          href: 'http://117.72.122.109:3088/',
        },
        {
          src: '/demos/products.jpg',
          title: 'Catalog · single source of truth',
          body: 'Single source of truth: list, PDP copy, and JSON-LD share one product dataset—change price or specs once, no drifting drafts.',
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
      highlightsLabel: 'Highlights',
      contributionLabel: 'What I built',
      howToRunLabel: 'How to run',
      architectureLabel: 'Architecture',
      items: [
        {
          name: 'flask-fullstack-starter',
          desc: 'Flask full-stack mall · shop checkout + admin CRUD · Postgres/Redis · repo-only (local run)',
          url: 'https://github.com/GosuQuan/flask-fullstack-starter',
          tags: [
            { label: 'Python / Flask', logo: '/logos/tech/python.svg' },
            { label: 'Redis', logo: '/logos/tech/redis.svg' },
            { label: 'Observability', logo: '/logos/tech/observability.svg' },
          ],
          howToRun: 'Needs Postgres + Redis; pip install -r requirements.txt && python run.py → /shop · /admin/',
          architecture: 'shop + admin → services → Postgres; Redis catalog cache / checkout idempotency; Locust + chaos docs',
          highlights: [
            'Thin routes + service layer: shop + admin catalog/orders/users, order state machine + activity_logs audit',
            'Checkout idempotency (Redis SET NX) + FOR UPDATE stock locks against oversell/dupes',
            'Redis catalog cache with automatic DB fallback; admin chaos toggles (e.g. Redis Down)',
            'Documented Locust load tests (local smoke ~287 RPS / 0 fail; not production WSGI)',
          ],
          contribution:
            'Solo: usable mall with shop + admin CRUD, Redis cache and checkout idempotency, chaos toggles, and Locust load-test docs.',
        },
        {
          name: 'short-drama-video',
          desc: 'Short Drama Video / AI short-drama orchestration lab · storyboard→prompt→dual-frame→clips · MIT',
          url: 'https://github.com/GosuQuan/short-drama-video',
          tags: [
            { label: 'AI Video', logo: '/logos/tech/demo.svg' },
            { label: 'Orchestration', logo: '/logos/tech/agent.svg' },
            { label: 'Storyboard', logo: '/logos/tech/tools.svg' },
          ],
          howToRun: 'Browse examples/ and docs/orchestration-rooftop-neon-dance.md',
          architecture: 'Storyboard Markdown → text-to-image first/last frames → first+last-frame image-to-video (~15s 9:16)',
          highlights: [
            'Storyboard → Prompt structure so you can swap models without rewriting the script shape',
            'Dual-frame anchoring to cut pure text-to-video drift',
            '15s highlight windows you can stitch into longer cuts',
            'Learn pacing skeletons from hits; keep copy and storyboard original',
          ],
          contribution: 'Solo: orchestration notes, sample storyboards, sample-asset layout, and orchestration docs.',
        },

        {
          name: 'listing-ops-agent',
          desc: 'Cross-border Listing Ops Agent · LangGraph + human approve · MIT',
          url: 'https://github.com/GosuQuan/listing-ops-agent',
          tags: [
            { label: 'Python', logo: '/logos/tech/python.svg' },
            { label: 'LangGraph / Agent', logo: '/logos/tech/agent.svg' },
            { label: 'Tool Calling', logo: '/logos/tech/tools.svg' },
          ],
          howToRun: 'pip install -r requirements.txt && python demo.py (type approve to export JSON)',
          architecture: 'diagnose → draft → human_approve(interrupt) → export (MemorySaver checkpoint)',
          highlights: [
            'HITL: export only after Approve — drafts never ship alone',
            'Deterministic diagnose/draft tools; LLM is swappable',
            'Target: minutes-scale draft + short review (goal wording, not customer ROI)',
            'Measurable diagnose_ms / draft_ms, approval rate, rule hit rate',
            'No direct platform writes — export + audit boundary only',
          ],
          contribution:
            'Solo 0→1: LangGraph state graph with interrupt approval, diagnose/draft tools, multilingual template skeleton, demo entrypoint, metrics and eval folder layout.',
        },
        {
          name: 'clash-auto-switch',
          desc: 'Clash node failover · latency + throughput checks · local dashboard · MIT',
          url: 'https://github.com/GosuQuan/clash-auto-switch',
          image: '/demos/clash-auto-switch.gif',
          tags: [
            { label: 'Python', logo: '/logos/tech/python.svg' },
            { label: 'Observability', logo: '/logos/tech/observability.svg' },
            { label: 'GitHub', logo: '/logos/tech/github.svg' },
          ],
          highlights: [
            'Latency + real throughput tests to catch “zombie” nodes',
            'Region blacklist / priority with round-robin sampling (no HK; JP>SG>TW>US>UK)',
            'Anti-flapping: score lead threshold, cooldown, and retries',
            'Local dashboard that explains every switch',
            'Single-file tray app — talks to the mihomo API only, never rewrites Clash config',
          ],
          contribution:
            'Solo 0→1: health/switch strategy, throughput probes, region rules, anti-flapping, local web dashboard + system tray, Windows/macOS packaging, and GitHub Actions CI.',
        },
        {
          name: 'seo-geo-commerce',
          desc: 'SEO+GEO commerce demo · Shopify pack · MIT',
          url: 'https://github.com/GosuQuan/seo-geo-commerce',
          tags: [
            { label: 'Next.js', logo: '/logos/tech/nextjs.svg' },
            { label: 'GEO', logo: '/logos/tech/seo.svg' },
            { label: 'Shopify', logo: '/logos/tech/shopify.svg' },
          ],
          highlights: [
            'Answer-first above the fold for search and AI citation',
            'Single product facts source shared by copy and JSON-LD',
            'Heavy motion lazy-loaded per route off the homepage bundle',
          ],
          contribution: 'Open-sourced SEO/GEO commerce practice as the TrailForge demo storefront and Shopify delivery pack.',
        },
      ],
    },
    about: {
      eyebrow: 'About',
      title: 'About me',
      role: 'Full-stack AI Agent apps',
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
