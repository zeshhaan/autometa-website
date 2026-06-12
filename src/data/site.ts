export const site = {
  name: 'Autometa',
  domain: 'autometa.ae',
  email: 'hello@autometa.ae',
  whatsapp: '+971500000000',
  tagline: 'Software that pays for itself.',
  description:
    'Autometa builds custom software and automation that helps businesses save time, money, and labour: point-of-sale, billing, ecommerce, and bespoke operations platforms you own outright.',
};

export const navLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'Solutions', href: '/#solutions' },
  { label: 'Integrations', href: '/#integrations' },
  { label: 'Why us', href: '/#why' },
  { label: 'FAQ', href: '/#faq' },
];

export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: '100%', label: 'Uptime, around the clock' },
  { value: '20+', label: 'Business domains served' },
  { value: '24/7', label: 'Support that answers' },
  { value: '0', label: 'Data lost in migration' },
];

export interface Service {
  name: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    name: 'Custom Software',
    description:
      'Bespoke operations platforms (POS, billing, CRM, inventory and job management) built around how your business actually works.',
    icon: 'box',
  },
  {
    name: 'Ecommerce Builds',
    description:
      'Own-it-forever online stores with AI product imagery, real-time admin, and Stripe. No monthly SaaS or transaction fees.',
    icon: 'cart',
  },
  {
    name: 'Website Development',
    description:
      'Fast, modern marketing sites and web apps engineered for SEO and conversions. New builds, redesigns, and rescues.',
    icon: 'code',
  },
  {
    name: 'SEO & Growth',
    description:
      'Technical SEO and ecommerce-specific strategy that brings in qualified leads. Clients typically see traction within a month.',
    icon: 'search',
  },
  {
    name: 'AI & Automation',
    description:
      'Chatbots, document extraction, WhatsApp workflows and back-office automation that retire the repetitive work.',
    icon: 'sparkles',
  },
  {
    name: 'CMS & Integrations',
    description:
      'Headless CMS, payment gateways, WhatsApp Business API, and any third-party system wired cleanly into your stack.',
    icon: 'plug',
  },
];

export interface Differentiator {
  name: string;
  description: string;
  icon: string;
}

export const differentiators: Differentiator[] = [
  {
    name: 'We understand the workflow before writing code',
    description:
      "We don't start with screens. We first understand how your business runs today: who does what, where mistakes happen, what is repeated, and what the owner needs to see.",
    icon: 'search',
  },
  {
    name: 'We build around your business, not a fixed template',
    description:
      'Your business should not adjust itself to generic software. The software should adjust to your business.',
    icon: 'layers',
  },
  {
    name: 'We replace scattered work with one connected system',
    description:
      'WhatsApp, Excel, paper, invoices, stock, staff tasks, and reports can be connected into one workflow.',
    icon: 'plug',
  },
  {
    name: 'We focus on owner visibility',
    description:
      'Owners should know what is pending, what is delayed, what is unpaid, who is responsible, and what needs attention.',
    icon: 'chart',
  },
  {
    name: 'We can start from your existing process',
    description:
      'Already using Excel, paper, another software, or WhatsApp? We can study your current flow and help migrate important data where possible.',
    icon: 'arrows',
  },
  {
    name: 'We stay after launch',
    description:
      "We don't treat software as one-shot delivery. We improve it based on real usage, staff feedback, and business changes.",
    icon: 'shield',
  },
];

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
  liveUrl?: string;
  liveLabel?: string;
  audience: string;
  pricing: string;
  highlights: string[];
  painPoints: { title: string; description: string }[];
  features: ProductFeature[];
  workflow?: { step: string; title: string; description: string }[];
  stats?: Stat[];
  techStack: string;
  cta?: {
    primary: { label: string; message?: string };
    secondary?: { label: string; message?: string };
  };
}

export const products: Product[] = [
  {
    slug: 'pos',
    name: 'Stationery POS',
    category: 'Retail & point of sale',
    badge: 'Live in production',
    tagline: 'Run the whole shop, not just the till.',
    summary:
      'A browser-based POS that handles billing, inventory, multi-outlet stock, customers and full double-entry accounting in one place.',
    description:
      'MoulaviPOS replaces the dusty desktop register with a fast, install-free retail platform. Bill at the counter, watch stock update in real time, keep GST clean, and get a real set of books out the other side, across every outlet.',
    icon: 'store',
    accentHue: 265,
    liveUrl: 'https://pos.autometa.ae',
    liveLabel: 'pos.autometa.ae',
    audience:
      'Indian retail and multi-outlet shops: GST-registered businesses that need real inventory, accounting and compliance, not just a cash drawer.',
    pricing: 'One-time project pricing from ₹75,000 · 3 months support & staff training included.',
    highlights: [
      'Keyboard-first billing with barcode scan & held bills',
      'Real-time stock across every outlet',
      'Built-in double-entry accounting & GST returns',
      'Installs like an app, syncs every terminal live',
    ],
    painPoints: [
      {
        title: 'Software tied to one machine',
        description:
          'Old desktop POS is chained to a single PC. MoulaviPOS runs in any browser, on counter, tablet or phone, with nothing to install.',
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
      { title: 'Fast Billing', description: 'Keyboard-first checkout, barcode scanning, held bills, and MRP / retail / B2B / wholesale price tiers.', icon: 'receipt' },
      { title: 'Inventory & Purchasing', description: 'Real-time stock, weighted-average landing cost, purchase invoices, and AI extraction from an invoice photo.', icon: 'box' },
      { title: 'Multi-Outlet', description: 'Independent products, vendors and stock per outlet, with a transfer request → approve → receive workflow.', icon: 'layers' },
      { title: 'Built-in Accounting', description: 'Chart of accounts, double-entry vouchers, trial balance, P&L and balance sheet generated from daily operations.', icon: 'calculator' },
      { title: 'Reports & GST', description: '12-tab reporting across sales, debtors, creditors, ledgers and GST, with Excel / PDF / CSV export.', icon: 'chart' },
      { title: 'Customers & Wallet', description: 'Retail / B2B / wholesale profiles, purchase history, a store-credit wallet, and sales returns.', icon: 'users' },
      { title: 'WhatsApp Integration', description: 'Auto-send invoice PDFs and a daily owner summary through the WhatsApp Business API.', icon: 'chat' },
      { title: 'PWA & Realtime', description: 'Installs like a native app, works mobile-first, and syncs every terminal instantly across devices.', icon: 'bolt' },
    ],
    stats: [
      { value: '29+', label: 'Features shipped' },
      { value: '150+', label: 'GST categories pre-loaded' },
      { value: '500+', label: 'Commits across two repos' },
      { value: 'Live', label: 'In production' },
    ],
    techStack: 'React 19 + TanStack · Elixir/Ash + PostgreSQL · PWA with realtime cross-device sync',
  },
  {
    slug: 'car-detailing',
    name: 'Car Detailing Shop Software',
    category: 'Automotive & detailing',
    badge: 'Built for UAE studios',
    tagline: 'Your detailing studio, fully computerized.',
    summary:
      'From estimate to invoice in three taps. Inventory, margins and a professional customer experience, built for detailing rather than repurposed from garage software.',
    description:
      'Manage inquiries, estimates, jobs, invoices, payments, customer sources, and follow-ups in one easy system, without using bulky garage software made for mechanical workshops.',
    icon: 'car',
    accentHue: 50,
    audience: 'Car detailing, PPF, ceramic coating and tint studios across the UAE.',
    pricing: 'AED 10 / day (300 AED/month) · 2 months free · no per-user fees · cancel anytime.',
    highlights: [
      'Estimate → Quotation → Invoice in three taps',
      'UAE plate format, TRN and VAT-compliant PDFs',
      'Service-based inventory that deducts automatically',
      'Profit margin per service, live on the dashboard',
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
          'Charge AED 5,000 for a PPF job, but what did the material cost? Every service tracks material cost against revenue.',
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
      { title: 'Inventory & Stock', description: 'Services consume materials automatically: PPF rolls, ceramic bottles, consumables, with low-stock alerts.', icon: 'box' },
      { title: 'Profit Margin Tracking', description: 'Exact material cost versus revenue per service, so you know what actually makes money.', icon: 'calculator' },
      { title: 'Job Scheduling', description: 'Queue, assign staff and track timelines with start / complete capture for every job type.', icon: 'calendar' },
      { title: 'Customer Management', description: 'Full service history per customer and vehicle, VIP flags and lead-source tracking.', icon: 'users' },
      { title: 'WhatsApp Notifications', description: 'Booking confirmations, job updates, completion alerts and offers, all over WhatsApp.', icon: 'chat' },
    ],
    stats: [
      { value: '3 taps', label: 'Inquiry to paid invoice' },
      { value: 'AED 10', label: 'Per day, all in' },
      { value: '2 mo', label: 'Free to start' },
      { value: '∞', label: 'Staff, no per-seat fees' },
    ],
    techStack: 'Phoenix LiveView · PostgreSQL · WhatsApp Business API · VAT-compliant PDF & Excel export',
    cta: {
      primary: { label: 'Book Free Demo', message: "Hi Autometa, I'd like to book a free demo of the car detailing shop software." },
      secondary: { label: 'Start 2 Months Free', message: "Hi Autometa, I'd like to start the 2-month free trial of the car detailing shop software." },
    },
  },
  {
    slug: 'ecommerce',
    name: 'Custom Ecommerce',
    category: 'Online retail',
    badge: 'Live in production',
    tagline: 'A Shopify you actually own.',
    summary:
      'A fast online store plus a real-time admin panel, with AI product photoshoots built in, and zero monthly or transaction fees.',
    description:
      'Stop renting your storefront. idesignsouq is a custom ecommerce platform you own outright: keep 100% of revenue, host it anywhere, and generate studio-quality product imagery without leaving the admin.',
    icon: 'cart',
    accentHue: 200,
    liveUrl: 'https://ecommerce.autometa.ae',
    liveLabel: 'ecommerce.autometa.ae',
    audience:
      'Retail and product brands wanting off SaaS fees or dated platforms like PrestaShop, especially sellers of personalized, gift and home-decor products.',
    pricing: 'One-time from AED 5,000: admin panel + storefront + first month of SEO. Managed backend included.',
    highlights: [
      'No monthly fees, no 2% transaction skim',
      'AI product photoshoots inside the admin',
      'Real-time LiveView dashboard',
      'Stripe + Tamara (buy-now-pay-later)',
    ],
    painPoints: [
      {
        title: 'Renting your own store',
        description:
          'Shopify and Wix charge $24 to $39 a month plus 2% per sale, forever. Own your storefront once and keep every dirham.',
      },
      {
        title: 'Everything is a paid plugin',
        description:
          'SEO, analytics and audit trails cost extra elsewhere. Here they are built in, with your data fully yours.',
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
      { title: 'AI Product Photoshoots', description: 'Generate studio-quality product imagery in the admin with Flux Kontext, Seedream and Mystic.', icon: 'image' },
      { title: 'Real-Time Admin', description: 'A LiveView dashboard where orders, revenue and low-stock alerts update with no page reloads.', icon: 'bolt' },
      { title: 'Inventory & Variants', description: 'Size / colour variants, media, SEO fields, stock tracking and CSV import / export.', icon: 'box' },
      { title: 'Orders & Fulfillment', description: 'Status updates, tracking, refunds and transactional emails for every stage.', icon: 'receipt' },
      { title: 'Analytics Built-In', description: 'Revenue charts, top sellers, sales by category and visitor stats. No plugins.', icon: 'chart' },
    ],
    stats: [
      { value: '0%', label: 'Transaction fees' },
      { value: 'AED 0', label: 'Monthly subscription' },
      { value: 'AI', label: 'Photoshoots included' },
      { value: 'Live', label: 'In production' },
    ],
    techStack: 'Elixir/Phoenix + Ash + PostgreSQL admin · Astro + Tailwind storefront on Cloudflare · Stripe + Tamara',
  },
  {
    slug: 'billing-operations',
    name: 'Printing Press Management',
    category: 'Print & operations',
    badge: 'Audit-ready by design',
    tagline: 'Every quote becomes a paid, compliant invoice.',
    summary:
      'Runs a printing press end-to-end, from quote and job card to delivery note, VAT invoice and payment, without a single number falling through the cracks.',
    description:
      'Hira connects the entire document lifecycle of a print shop into one timeline. Drafts stay editable; issuing locks a record as an immutable, FTA-compliant legal document with gap-free numbering and a full audit trail.',
    icon: 'printer',
    accentHue: 150,
    audience:
      'Printing presses and print shops in the UAE that must issue FTA-compliant tax invoices in AED.',
    pricing: 'Project pricing on request, scoped to your operation.',
    highlights: [
      'Estimate → Job Card → Delivery → Invoice → Payment',
      'Issued documents are tamper-proof and snapshotted',
      'Gap-free sequential numbering for audit',
      'UAE VAT & TRN built in',
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
      { title: 'Full Document Lifecycle', description: 'Estimate → Job Card → Delivery → Invoice → Payment → Credit Note → Refund, linked in one timeline.', icon: 'receipt' },
      { title: 'Draft-to-Issued Workflow', description: 'Drafts stay editable; issuing locks the record as an immutable legal document.', icon: 'lock' },
      { title: 'Gap-Free Numbering', description: 'Dedicated counters guarantee unbroken invoice and estimate numbers for audit.', icon: 'hash' },
      { title: 'UAE VAT & TRN', description: 'VAT rate, buyer / seller TRN and totals snapshotted at issue time so documents never drift.', icon: 'shield' },
      { title: 'Payments & Outstanding', description: 'Record cash, card, transfer or cheque with auto-calculated balances and payment status.', icon: 'calculator' },
      { title: 'Credit Notes & Refunds', description: 'Correct issued invoices the legal way, with stock automatically returned.', icon: 'arrows' },
      { title: 'Inventory Management', description: 'Stock by unit with cost, low-stock thresholds and automatic deduction on issue.', icon: 'box' },
      { title: 'Full Audit Trail', description: 'Every change versioned with the responsible user. Print-ready docs plus CSV / XLS exports.', icon: 'history' },
    ],
    stats: [
      { value: '7', label: 'Linked document types' },
      { value: '5 yr', label: 'FTA retention, automatic' },
      { value: '0', label: 'Gaps in numbering' },
      { value: '100%', label: 'Tamper-proof when issued' },
    ],
    techStack: 'Elixir/Phoenix 1.8 LiveView · Ash 3.0 · PostgreSQL · AshPaperTrail audit log',
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: 'Do you build ready-made software or custom software?',
    answer:
      'We build custom business software around your workflow. Some modules may be reusable, but the final system is shaped around how your business operates.',
  },
  {
    question: 'Can you improve our existing Excel/WhatsApp process?',
    answer:
      'Yes. Many projects start by studying existing Excel sheets, WhatsApp flows, printed forms, invoices, and manual processes.',
  },
  {
    question: 'Can you import our old data?',
    answer:
      'Where export or clean records are available, we can help import customers, products, invoices, stock, job records, or other important data.',
  },
  {
    question: 'Do you work with small businesses?',
    answer:
      'Yes. Autometa is especially useful for small and medium businesses that are growing beyond manual work.',
  },
  {
    question: 'Can staff have different access levels?',
    answer:
      'Yes. We can create roles such as owner, manager, staff, accountant, technician, sales, or admin.',
  },
  {
    question: 'Can the software work on mobile?',
    answer:
      'Yes. Depending on the project, we can build responsive web apps or installable PWAs that work on desktop and mobile.',
  },
  {
    question: 'Can you integrate WhatsApp?',
    answer:
      'Yes. We can integrate WhatsApp for invoices, job updates, reminders, campaigns, and customer communication depending on the business requirement.',
  },
  {
    question: 'Can you integrate payments, Zoho, Stripe, Tamara, or other tools?',
    answer:
      'Yes. We can connect external tools when APIs or supported integration methods are available.',
  },
  {
    question: 'How long does a project take?',
    answer:
      'It depends on scope. A focused internal system can start with an MVP, then improve in phases after real usage.',
  },
  {
    question: 'How do we start?',
    answer:
      'We start with a workflow audit. You show us how your business currently runs, and we identify what can be computerized, automated, or simplified.',
  },
];
