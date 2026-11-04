export const site = {
  name: 'Autometa',
  domain: 'autometa.ae',
  email: 'hello@autometa.ae',
  whatsapp: '+971544354211',
  tagline: 'World-class products, built end to end.',
  description:
    'Autometa is a product studio. We take ideas from first conversation to a product people rely on: strategy, design, engineering, AI and growth, delivered by one team that stays after launch.',
};

export const navLinks = [
  { label: 'What we build', href: '/#build' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Capabilities', href: '/#capabilities' },
  { label: 'Why us', href: '/#why' },
  { label: 'FAQ', href: '/#faq' },
];

export interface Capability {
  name: string;
  description: string;
  icon: string;
  items: string[];
}

/** The disciplines we bring to every product, in the order a project uses them. */
export const capabilities: Capability[] = [
  {
    name: 'Product strategy',
    description:
      'We start with the problem, not the screens. We work out who the product is for, what it has to do first, and what can wait.',
    icon: 'search',
    items: ['Discovery & workflow audits', 'Scoping & roadmaps', 'MVP definition'],
  },
  {
    name: 'Design',
    description:
      'Interfaces that feel obvious to the people using them every day, from the first sketch to a consistent design system.',
    icon: 'layers',
    items: ['UX flows & prototypes', 'Interface design', 'Design systems'],
  },
  {
    name: 'Engineering',
    description:
      'Fast, reliable software built properly from the start, on whatever platform your users are: browser, phone or desktop.',
    icon: 'code',
    items: ['Web, mobile & desktop apps', 'Ecommerce & websites', 'APIs & integrations'],
  },
  {
    name: 'AI & automation',
    description:
      'AI where it actually earns its place, plus the automations that take repetitive work off your team.',
    icon: 'sparkles',
    items: ['AI features & assistants', 'Document & image workflows', 'WhatsApp & back-office automation'],
  },
  {
    name: 'Growth',
    description:
      'Launching is the start. We make sure the product gets found, gets used, and tells you what is working.',
    icon: 'chart',
    items: ['Technical SEO', 'Analytics & reporting', 'Conversion improvements'],
  },
  {
    name: 'Run & evolve',
    description:
      'Hosting, security, integrations and ongoing improvements, handled by the same team that built it.',
    icon: 'shield',
    items: ['Hosting & monitoring', 'Integrations & data migration', 'Support & iteration'],
  },
];

export interface Differentiator {
  name: string;
  description: string;
  icon: string;
}

export const differentiators: Differentiator[] = [
  {
    name: 'One team, the whole product',
    description:
      'Strategy, design, engineering and growth sit in one team. Nothing gets lost in a handover between agencies.',
    icon: 'users',
  },
  {
    name: 'We understand the problem first',
    description:
      'Before we design anything, we learn how the work happens today: who does what, where things break, and what success looks like.',
    icon: 'search',
  },
  {
    name: 'Craft in the details',
    description:
      'Fast pages, clear interfaces, correct documents and edge cases handled. The details are what make a product feel world-class.',
    icon: 'sparkles',
  },
  {
    name: 'Built around you, not a template',
    description:
      'Your business should not bend to generic software. We shape the product around how you actually work and where you want to go.',
    icon: 'layers',
  },
  {
    name: 'You see progress early',
    description:
      'We ship in increments, so you can use real software within weeks and steer the direction as it takes shape.',
    icon: 'bolt',
  },
  {
    name: 'We stay after launch',
    description:
      'A product is never finished. We keep improving it based on real usage, feedback and how your business changes.',
    icon: 'rocket',
  },
];

export type BuildVisual = 'consult' | 'browser' | 'phone' | 'desktop' | 'agent' | 'store' | 'automation';

export interface BuildArea {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: string;
  accentHue: number;
  points: string[];
  /** Which styled mock to show when no image is set. */
  visual: BuildVisual;
  /**
   * Optional screenshot or stock photo, served from /public (for example
   * '/images/build/mobile.webp'). When omitted, the styled mock is shown instead.
   */
  image?: { src: string; alt: string };
}

/** What we build. Rendered as alternating text + visual rows on the homepage. */
export const buildAreas: BuildArea[] = [
  {
    id: 'consulting',
    eyebrow: 'Consulting',
    title: 'Clarity before code',
    description:
      'Not sure what to build, or whether to build at all? We help you work out the right product, the right scope and the right technology, and give you a plan you can act on.',
    icon: 'search',
    accentHue: 300,
    visual: 'consult',
    points: [
      'Product and technology strategy',
      'Workflow audits and process mapping',
      'Scoping, roadmaps and MVP definition',
      'Technical reviews of existing products',
    ],
  },
  {
    id: 'web-apps',
    eyebrow: 'Web apps',
    title: 'Platforms your business runs on',
    description:
      'Browser-based products that work on any device: customer-facing apps, SaaS platforms, and the internal systems behind billing, stock, jobs, CRM and reporting.',
    icon: 'layers',
    accentHue: 265,
    visual: 'browser',
    points: [
      'SaaS products and customer portals',
      'POS, billing, inventory and job management',
      'Dashboards that show what needs attention',
      'Roles, permissions and audit trails built in',
    ],
  },
  {
    id: 'mobile',
    eyebrow: 'Mobile apps',
    title: 'Apps people keep on their home screen',
    description:
      'iOS and Android apps designed for the moments people actually reach for their phone, connected to the same systems as the rest of your business.',
    icon: 'phone',
    accentHue: 200,
    visual: 'phone',
    points: [
      'iOS and Android from one codebase',
      'Customer apps and field-team tools',
      'Push notifications, payments and offline support',
      'App Store and Play Store launch handled',
    ],
  },
  {
    id: 'desktop',
    eyebrow: 'Desktop apps',
    title: 'Native-feeling apps for Mac, Windows and Linux',
    description:
      'For work that lives on a desk all day: fast desktop software with local files, hardware and offline access, kept in sync with the cloud.',
    icon: 'box',
    accentHue: 230,
    visual: 'desktop',
    points: [
      'macOS, Windows and Linux builds',
      'Printers, scanners and other hardware',
      'Works offline, syncs when back online',
      'Auto-updates and signed installers',
    ],
  },
  {
    id: 'agent-ready',
    eyebrow: 'Agent-ready websites',
    title: 'Websites built for people and AI agents',
    description:
      'More customers now find businesses through ChatGPT, Gemini and other assistants. We build sites that rank in search, read clearly to AI, and let agents act on them.',
    icon: 'globe',
    accentHue: 150,
    visual: 'agent',
    points: [
      'Fast, conversion-focused marketing sites',
      'Technical SEO and structured data',
      'Clean, machine-readable content for AI answers',
      'APIs and agent integrations so assistants can book, order or enquire',
    ],
  },
  {
    id: 'commerce',
    eyebrow: 'Ecommerce',
    title: 'Stores with a serious back office',
    description:
      'Custom storefronts for brands that have outgrown templates, with the admin, inventory and payment flows to run them properly.',
    icon: 'cart',
    accentHue: 30,
    visual: 'store',
    points: [
      'Fast, mobile-first storefronts',
      'Product personalization, variants and customer uploads',
      'Stripe, Tamara and other checkout integrations',
      'Real-time orders, stock and analytics in one admin',
    ],
  },
  {
    id: 'ai',
    eyebrow: 'AI & automation',
    title: 'AI that does real work',
    description:
      'Practical AI and automation built into your product or operations, so your team spends less time on repetitive tasks.',
    icon: 'sparkles',
    accentHue: 50,
    visual: 'automation',
    points: [
      'Assistants and chatbots that know your business',
      'Document extraction and smart data entry',
      'AI product imagery and content workflows',
      'WhatsApp updates, reminders and back-office automation',
    ],
  },
];

export interface Industry {
  name: string;
  description: string;
  icon: string;
}

/** Industries we have built for. Add new ones here as the list grows. */
export const industries: Industry[] = [
  {
    name: 'Retail',
    description: 'POS, billing, multi-outlet stock, purchasing, GST and accounting for shops and chains.',
    icon: 'store',
  },
  {
    name: 'Automotive',
    description: 'Enquiry-to-invoice workflows for detailing, PPF and ceramic studios, with UAE VAT built in.',
    icon: 'car',
  },
  {
    name: 'Ecommerce',
    description: 'Custom storefronts, personalization, checkout and admin for product and gifting brands.',
    icon: 'cart',
  },
  {
    name: 'Print & production',
    description: 'Estimates, job cards, delivery notes and FTA-compliant invoicing for print shops.',
    icon: 'printer',
  },
  {
    name: 'Service businesses',
    description: 'Bookings, job tracking, customer updates and payments for teams that deliver services.',
    icon: 'calendar',
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: 'What kind of products do you build?',
    answer:
      'Web apps, mobile apps for iOS and Android, desktop apps for Mac, Windows and Linux, ecommerce stores, agent-ready websites and AI features. We also consult when you need a plan before you build.',
  },
  {
    question: 'Do you only write code?',
    answer:
      'No. We cover the whole product: working out what to build, designing it, building it, launching it, and growing and supporting it afterwards. You can bring us in at any stage.',
  },
  {
    question: 'We only have an idea. Is that too early?',
    answer:
      'Not at all. Many projects start with a conversation and a rough idea. We help shape it into a clear first version before any building starts.',
  },
  {
    question: 'Can you improve a product or process we already have?',
    answer:
      'Yes. We regularly start from existing software, spreadsheets, WhatsApp flows or paper processes, and either improve what is there or plan a controlled move to something better.',
  },
  {
    question: 'Can you bring over our existing data?',
    answer:
      'Where exports or clean records exist, we can migrate customers, products, invoices, stock, orders and other important data.',
  },
  {
    question: 'Who do you work with?',
    answer:
      'Founders, growing businesses and established teams. What they share is wanting something built properly rather than patched together.',
  },
  {
    question: 'Can you add AI to our product?',
    answer:
      'Yes, where it genuinely helps: assistants, document extraction, image generation, smart search and automation. We will tell you honestly when AI is not the right tool.',
  },
  {
    question: 'Can you integrate WhatsApp, payments, Zoho or other tools?',
    answer:
      'Yes. We connect WhatsApp, Stripe, Tamara, Zoho, Google, Meta and other services whenever they offer a reliable way to integrate.',
  },
  {
    question: 'How long does a project take?',
    answer:
      'It depends on scope. We usually start with a focused first version you can use within weeks, then improve it in phases based on real usage.',
  },
  {
    question: 'How do we start?',
    answer:
      'Book a call. Tell us what you want to build or fix, and we will come back with what the first version should include, how we would approach it, and what it involves.',
  },
];
