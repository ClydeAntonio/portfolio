export const portfolioContent = {
  header: {
    title: 'FULLSTACK_DEVELOPER',
    version: 'V1.0.0',
    status: 'STABLE_BUILD',
  },
  hero: {
    role: 'FULLSTACK DEVELOPER',
    tagline: 'BUILDING RESILIENT DIGITAL ARCHITECTURES.',
    description:
      'I build full-featured web apps end-to-end — from pixel-precise frontends to production-grade backends. Currently shipping real products and leveling up into DevOps.',
    primaryAction: 'ESTABLISH_UPLINK',
    secondaryAction: 'VIEW_SCHEMATICS',
  },
  about: {
    header: 'SUB_HEADER: SYS',
    title: 'BEYOND_THE_CODE',
    description:
      'Fullstack developer building real products from the ground up — handling everything from UI to database to deployment. I write clean, maintainable code and ship features that work. Currently expanding into DevOps: containers, CI/CD pipelines, and infrastructure as code. Every project is a step toward owning the full stack.',
    stats: [
      { label: 'ACTIVE_PROJECTS', value: '3' },
      { label: 'DEVOPS_MODE', value: 'ON' },
    ],
  },
  projects: [
    {
      id: 'LOG:001',
      title: 'CHEAPESTGO',
      category: 'TRAVEL_PLATFORM',
      status: 'IN_DEVELOPMENT',
      role: 'LEAD_DEVELOPER',
      url: 'https://cheapestgo.com',
      description:
        'Search and compare the cheapest flights and hotels across providers in real time. Features interactive maps, i18n, and PDF itinerary exports.',
      tech: ['NEXT.JS 15', 'POSTGRESQL', 'MAPBOX', 'STRIPE'],
      image: '/images/cheapestgo.png',
    },
    {
      id: 'LOG:002',
      title: 'FOX_PASSPORT',
      category: 'EVENT_MARKETPLACE',
      status: 'IN_DEVELOPMENT',
      role: 'LEAD_DEVELOPER',
      description:
        'Venue and event services marketplace where hosts list assets and users discover, book, and review. Stripe Connect handles host payouts.',
      tech: ['NEXT.JS 16', 'SUPABASE', 'STRIPE_CONNECT', 'PLAYWRIGHT'],
      image: '/images/foxpasslogo.png',
    },
    {
      id: 'LOG:003',
      title: 'BOOSTK',
      category: 'BUSINESS_PLATFORM',
      status: 'IN_DEVELOPMENT',
      description:
        'Real-time agent-customer chat support hub connecting Korean and Japanese SMEs with English-speaking professionals to bridge global market entry barriers.',
      tech: ['TANSTACK_START', 'BUN', 'SOCKET.IO', 'PRISMA'],
      image: '/images/boostk.webp',
    },
  ],
  techStack: [
    {
      category: 'FRONTEND',
      items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Radix UI', 'Zustand'],
    },
    {
      category: 'BACKEND',
      items: ['Node.js', 'Express', 'Hono', 'PostgreSQL', 'Prisma', 'Lucia Auth'],
    },
    {
      category: 'INTEGRATIONS',
      items: ['Stripe', 'Supabase', 'Mapbox', 'Socket.io', 'TanStack Query', 'next-intl'],
    },
    {
      category: 'DEVOPS',
      items: ['Docker', 'Bun', 'Vitest', 'Playwright', 'Sentry', 'CI/CD'],
    },
  ],
  links: [
    { label: 'EMAIL', value: 'clydeantonio.work@gmail.com', type: 'email' },
    {
      label: 'VERSION_CONTROL',
      value: 'https://github.com/ClydeAntonio',
      type: 'url',
    },
    { label: 'LINKEDIN', value: 'https://www.linkedin.com/in/clyde-antonio-18b5733a6/', type: 'url' },
  ],
  contact: {
    title: 'INITIALIZE_CONNECTION',
    description:
      'Propose your project. Engineering high-fidelity solutions that are robust and maintainable.',
    primaryAction: 'DEPLOY_CONNECTION',
  },
  footer: {
    copyright: '© 2024 ARCHITECT_OS // STABLE_BUILD',
    metadata: [
      { label: 'LATENCY', value: '14MS' },
      { label: 'UPTIME', value: '99.9%' },
      { label: 'ENCRYPTION', value: 'AES-256' },
    ],
  },
};
