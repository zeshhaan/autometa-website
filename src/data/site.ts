export const site = {
  name: 'Autometa',
  domain: 'autometa.ae',
  email: 'hello@autometa.ae',
  whatsapp: '+971500000000',
  tagline: 'Custom operations software for serious workflows.',
  description:
    'Autometa builds custom web-based operations software for retail, automotive, ecommerce, print and service businesses that need billing, stock, payments, documents, reporting and customer communication in one connected workflow.',
};

export const navLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'Solutions', href: '/#solutions' },
  { label: 'Integrations', href: '/#integrations' },
  { label: 'Why us', href: '/#why' },
  { label: 'FAQ', href: '/#faq' },
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
      'Custom online stores with real-time admin, product personalization, AI-assisted product imagery, inventory and payment integrations.',
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
      'Technical SEO, analytics and content structure for businesses that need their website to generate qualified enquiries.',
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
      'Content management, payments, WhatsApp workflows, and third-party tools wired cleanly into your business process.',
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
      'Yes. We can create permission levels so each person only sees the areas and actions needed for their work.',
  },
  {
    question: 'Can the software work on mobile?',
    answer:
      'Yes. Depending on the project, we can build systems that work cleanly on desktop, tablet and mobile.',
  },
  {
    question: 'Can you integrate WhatsApp?',
    answer:
      'Yes. We can integrate WhatsApp for invoices, job updates, reminders, campaigns, and customer communication depending on the business requirement.',
  },
  {
    question: 'Can you integrate payments, Zoho, Stripe, Tamara, or other tools?',
    answer:
      'Yes. We can connect external tools when they provide reliable integration methods.',
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
