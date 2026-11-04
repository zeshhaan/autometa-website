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

/**
 * Detailed product pages kept at /solutions/<slug>. They stay reachable by URL
 * but are intentionally not linked from the nav, homepage or footer.
 */
export interface ProductFeature {
  title: string;
  description: string;
  icon: string;
}

export interface Product {
  slug: string;
  name: string;
  category: string;
  badge: string;
  tagline: string;
  summary: string;
  description: string;
  icon: string;
  accentHue: number;
  audience: string;
  engagement: string;
  highlights: string[];
  painPoints: { title: string; description: string }[];
  features: ProductFeature[];
  workflow?: { step: string; title: string; description: string }[];
  cta?: {
    primary: { label: string; message?: string };
    secondary?: { label: string; message?: string };
  };
}

export const products: Product[] = [
  {
    slug: 'pos',
    name: 'Retail POS & Stock System',
    category: 'Retail & point of sale',
    badge: 'Retail operations system',
    tagline: 'Billing, stock, GST and accounts in one flow.',
    summary:
      'A browser-based POS for retail teams with barcode billing, held bills, outlet stock, purchase receiving, GST reporting, accounting, WhatsApp receipts and reliable PDFs.',
    description:
      'A retail operating system that connects the counter, stock room and books: barcode billing, held bills, outlet inventory, purchase receiving, returns, GST reports, accounting vouchers, WhatsApp receipts and server-rendered PDFs.',
    icon: 'store',
    accentHue: 265,
    audience:
      'Indian retail and multi-outlet shops: GST-registered businesses that need real inventory, accounting and compliance, not just a cash drawer.',
    engagement: 'Best fit for GST-registered retail teams that need billing, outlet stock, purchasing and accounting in one browser-based system.',
    highlights: [
      'Counter billing with barcode search and held bills',
      'Purchase receiving updates stock and GST records atomically',
      'GST exports, returns, credit notes and rounded invoice PDFs',
      'WhatsApp receipts, owner summaries and cross-device stock sync',
    ],
    painPoints: [
      {
        title: 'Software tied to one machine',
        description:
          'Old desktop POS is chained to a single PC. Stationery POS runs in any browser, on counter, tablet or phone, with nothing to install.',
      },
      {
        title: 'Stock that lies',
        description:
          'Manual counts mean surprise stockouts. Here, stock auto-updates on every sale, purchase and transfer, with low-stock alerts.',
      },
      {
        title: 'GST and books done by hand',
        description:
          'GST-compliant invoices and GSTR-1 exports are built in, and every transaction posts straight to a double-entry ledger.',
      },
    ],
    features: [
      { title: 'Fast Billing', description: 'Keyboard-first checkout, barcode scanning, held bills, and MRP / retail / B2B / wholesale rate tiers.', icon: 'receipt' },
      { title: 'Inventory & Purchasing', description: 'Outlet stock, transfer workflows, purchase invoices, stock movements, and atomic purchase receiving.', icon: 'box' },
      { title: 'Multi-Outlet', description: 'Independent products, vendors and stock per outlet, with a transfer request → approve → receive workflow.', icon: 'layers' },
      { title: 'Built-in Accounting', description: 'Chart of accounts, double-entry vouchers, trial balance, P&L and balance sheet generated from daily operations.', icon: 'calculator' },
      { title: 'Reports & GST', description: '12-tab reporting across sales, debtors, creditors, ledgers and GST, with Excel / PDF / CSV export.', icon: 'chart' },
      { title: 'Customers & Wallet', description: 'Retail / B2B / wholesale profiles, purchase history, a store-credit wallet, and sales returns.', icon: 'users' },
      { title: 'WhatsApp Integration', description: 'Invoice PDFs, daily owner summaries, template validation, message logs and delivery diagnostics.', icon: 'chat' },
      { title: 'Mobile & Realtime', description: 'Works cleanly on counter, tablet and phone, with every terminal staying in sync across devices.', icon: 'bolt' },
    ],
    cta: {
      primary: { label: 'Map a retail workflow', message: "Hi Autometa, I'd like to discuss a retail POS and stock workflow." },
      secondary: { label: 'Discuss my operation', message: "Hi Autometa, I'd like to see how a custom operations system could fit my business." },
    },
  },
  {
    slug: 'car-detailing',
    name: 'Automotive Detailing Workflow System',
    category: 'Automotive & detailing',
    badge: 'Automotive operations system',
    tagline: 'From enquiry to paid job, without losing the thread.',
    summary:
      'A UAE-focused workflow for detailing studios: lead source, customer and vehicle records, estimates, quotations, jobs, invoices, payments, dashboards, Zoho and WhatsApp.',
    description:
      'A detailing studio system that keeps the whole job journey visible: enquiries, referral sources, customers, UAE vehicle plates, estimates, quotations, jobs, invoices, payments, VAT documents, dashboard metrics and WhatsApp updates.',
    icon: 'car',
    accentHue: 50,
    audience: 'Car detailing, PPF, ceramic coating and tint studios across the UAE.',
    engagement: 'Best fit for UAE detailing studios that want enquiries, estimates, job status, VAT invoices and customer updates in one operating system.',
    highlights: [
      'Inquiry → estimate → quotation → job → invoice lifecycle',
      'UAE plate format, TRN and VAT-compliant PDFs',
      'Referral source, customer and vehicle history',
      'WhatsApp templates, test sends and delivery readiness checks',
    ],
    painPoints: [
      {
        title: 'Garage software, wrong fit',
        description:
          'Mechanic suites bury you in features you never use and skip detailing essentials. This is built around PPF, ceramic and detailing work.',
      },
      {
        title: 'No idea of your real margin',
        description:
          'High-value jobs need visibility into material use, payment status and the source of each enquiry.',
      },
      {
        title: 'Not made for the UAE',
        description:
          'Full NUMBER-CODE-EMIRATE plate format, TRN handling and VAT-compliant documents, out of the box.',
      },
    ],
    workflow: [
      { step: '1', title: 'Estimate', description: 'Create an estimate during the customer conversation. Optional vehicle details, select services, send in seconds.' },
      { step: '2', title: 'Quotation', description: 'Convert to a formal quotation with UAE plate format, VAT and a professional PDF for approval.' },
      { step: '3', title: 'Invoice', description: 'Job done. One tap to invoice. Inventory deducts automatically and payment is tracked.' },
    ],
    features: [
      { title: '3-Tier Document Flow', description: 'Estimate → Quotation → Invoice with revision history, PDF export and VAT compliance.', icon: 'receipt' },
      { title: 'Dashboard & Analytics', description: 'Live revenue, job status, service profitability, staff performance and conversion rates.', icon: 'chart' },
      { title: 'UAE Vehicle Plates', description: 'Full NUMBER-CODE-EMIRATE support, search by plate, multiple vehicles per customer.', icon: 'car' },
      { title: 'Inventory & Stock', description: 'Service line items can connect to materials, consumables and stock workflows.', icon: 'box' },
      { title: 'Accounting & VAT', description: 'Invoices, payments, VAT returns and accounting exports are built around UAE operating needs.', icon: 'calculator' },
      { title: 'Job Scheduling', description: 'Queue, assign staff and track timelines with start / complete capture for every job type.', icon: 'calendar' },
      { title: 'Customer Management', description: 'Full service history per customer and vehicle, VIP flags and lead-source tracking.', icon: 'users' },
      { title: 'WhatsApp Notifications', description: 'Booking confirmations, job updates, completion alerts and offers, all over WhatsApp.', icon: 'chat' },
    ],
    cta: {
      primary: { label: 'Request a walkthrough', message: "Hi Autometa, I'd like a walkthrough of the car detailing shop software." },
      secondary: { label: 'Discuss my workflow', message: "Hi Autometa, I'd like to discuss whether the car detailing workflow fits my studio." },
    },
  },
  {
    slug: 'ecommerce',
    name: 'Custom Ecommerce Operations',
    category: 'Online retail',
    badge: 'Commerce operations system',
    tagline: 'A custom storefront with a serious back office.',
    summary:
      'A custom storefront and admin for product brands that need personalization, variants, uploads, shipping rules, payment integrations, SEO controls and content curation.',
    description:
      'A commerce system built for brands whose catalogue needs more than a standard theme: variant-level personalization, file uploads, curated occasions, product media, inventory, shipping rules, Stripe/Tamara checkout, order lifecycle, SEO fields and a real admin workflow.',
    icon: 'cart',
    accentHue: 200,
    audience:
      'Retail and product brands wanting off SaaS fees or dated platforms like PrestaShop, especially sellers of personalized, gift and home-decor products.',
    engagement: 'Best fit for product brands that need a custom storefront, admin workflow, inventory control and payment integrations around their own catalogue.',
    highlights: [
      'Variant-level personalization and customer file uploads',
      'Curated homepage, occasions and featured product workflows',
      'Stripe + Tamara checkout with shipping rule control',
      'Mobile admin tables, filters, SEO fields and order operations',
    ],
    painPoints: [
      {
        title: 'Generic storefronts limit the workflow',
        description:
          'Personalized products, gifting flows, fulfillment and catalogue migration need more control than a basic theme can provide.',
      },
      {
        title: 'Too many disconnected tools',
        description:
          'Orders, product media, SEO fields, analytics, stock and payment events belong in one admin surface.',
      },
      {
        title: 'Product photography is expensive',
        description:
          'Generate studio-quality imagery from the admin with Flux, Seedream and Mystic models. No upsell app, no photographer.',
      },
    ],
    features: [
      { title: 'Storefront', description: 'Fast, mobile-responsive store with category browsing, instant search and rich product pages.', icon: 'store' },
      { title: 'Cart & Checkout', description: 'Discount codes, secure Stripe checkout, shipping / billing addresses and order confirmation.', icon: 'cart' },
      { title: 'Product Personalization', description: 'Per-item engraving, gift messages and file uploads, built for custom and gift products.', icon: 'sparkles' },
      { title: 'AI Product Imagery', description: 'Admin image-generation workflows can use Freepik models such as Flux Kontext, Seedream and Mystic.', icon: 'image' },
      { title: 'Real-Time Admin', description: 'An operations dashboard where orders, revenue and low-stock alerts update without slowing the team down.', icon: 'bolt' },
      { title: 'Inventory & Variants', description: 'Size / colour variants, media, SEO fields, stock tracking and CSV import / export.', icon: 'box' },
      { title: 'Orders & Fulfillment', description: 'Status updates, tracking, refunds and transactional emails for every stage.', icon: 'receipt' },
      { title: 'Analytics Built-In', description: 'Revenue charts, top sellers, sales by category and visitor stats. No plugins.', icon: 'chart' },
    ],
    cta: {
      primary: { label: 'Map a commerce workflow', message: "Hi Autometa, I'd like to discuss a custom ecommerce operations workflow." },
      secondary: { label: 'Discuss my catalogue', message: "Hi Autometa, I'd like to talk about a custom storefront and admin for my catalogue." },
    },
  },
  {
    slug: 'billing-operations',
    name: 'Printing Press Workflow System',
    category: 'Print & operations',
    badge: 'Print operations system',
    tagline: 'Quotes, job cards, delivery notes and VAT docs in one controlled flow.',
    summary:
      'A UAE print-shop workflow for estimates, job cards, delivery notes, VAT invoices, payments, credit notes, stock movement history and accounting exports.',
    description:
      'A print operations system that connects estimates, job orders, delivery notes, invoices, payments, credit notes, customer statements, stock movements and accounting exports into one controlled workflow.',
    icon: 'printer',
    accentHue: 150,
    audience:
      'Printing presses and print shops in the UAE that must issue FTA-compliant tax invoices and track every job document cleanly.',
    engagement: 'Best fit for UAE print shops that need document control, VAT-ready invoices, stock movement history and receivables reporting.',
    highlights: [
      'Estimate → job card → delivery note → invoice → payment',
      'Gap-free counters for estimates, jobs, invoices and credit notes',
      'Stock movement ledger with deductions and reversals',
      'Receivables, customer statements and accounting exports',
    ],
    painPoints: [
      {
        title: 'Documents scattered everywhere',
        description:
          'Quotes, job cards, deliveries and payments live in spreadsheets and notebooks. Hira links them in one connected journey.',
      },
      {
        title: 'VAT compliance by hand',
        description:
          'TRN, VAT rates and 5-year FTA retention are error-prone manually. Totals are snapshotted at issue, so old documents never change.',
      },
      {
        title: 'Who owes what?',
        description:
          'No clear view of outstanding balances or unpaid jobs. Payments and auto-calculated balances make it obvious.',
      },
    ],
    workflow: [
      { step: '1', title: 'Estimate', description: 'Quote a job as an editable draft, then issue it as a locked, numbered document.' },
      { step: '2', title: 'Job & Delivery', description: 'Convert to a job card and delivery note, linked in one timeline with stock deducted on issue.' },
      { step: '3', title: 'Invoice & Pay', description: 'Issue a VAT invoice, record payment, and track the outstanding balance to zero.' },
    ],
    features: [
      { title: 'Full Document Lifecycle', description: 'Estimate → Job Card → Delivery Note → Invoice → Payment → Credit Note → Refund, linked in one timeline.', icon: 'receipt' },
      { title: 'Draft-to-Issued Workflow', description: 'Drafts stay editable; issuing locks the record as an immutable legal document.', icon: 'lock' },
      { title: 'Gap-Free Counters', description: 'Dedicated per-year counters back estimate, job, delivery, invoice and credit-note number series.', icon: 'hash' },
      { title: 'UAE VAT & TRN', description: 'VAT rate, buyer / seller TRN and totals snapshotted at issue time so documents never drift.', icon: 'shield' },
      { title: 'Payments & Outstanding', description: 'Record cash, card, transfer or cheque with auto-calculated balances and payment status.', icon: 'calculator' },
      { title: 'Credit Notes & Refunds', description: 'Correct issued invoices the legal way, with stock automatically returned.', icon: 'arrows' },
      { title: 'Inventory Management', description: 'Stock by unit with cost, low-stock thresholds and automatic deduction on issue.', icon: 'box' },
      { title: 'Full Audit Trail', description: 'Every change versioned with the responsible user. Print-ready docs plus CSV / XLS exports.', icon: 'history' },
    ],
    cta: {
      primary: { label: 'Map a print workflow', message: "Hi Autometa, I'd like to discuss a print-shop workflow system." },
      secondary: { label: 'Discuss my documents', message: "Hi Autometa, I'd like to map our estimates, delivery notes, invoices and payments." },
    },
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
