export interface Client {
  id: string;
  name: string;
  industry: string;
  category: string;
  badge: string;
  description: string;
  solutionType: string;
  focusArea: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  deliverables: string[];
  supportedTools?: string[];
  audience: string[];
  highlights: { title: string; desc: string }[];
}

export interface SoftwarePlatform {
  id: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  keyFeatures: string[];
  bestFor: string;
  deployment: string;
  pricingModel: string;
  badge?: string;
  strengths: string[];
}

export const COMPANY_INFO = {
  name: "Ledgerstack Technologies",
  legalName: "Ledgerstack Technologies",
  tagline: "Driving efficiency through technology",
  description:
    "Ledgerstack Technologies is a Ghanaian technology and business-solutions company that helps organizations improve their operations through business management software, practical training, modern digital services, and dependable technical support.",
  phones: ["0547790310", "0540442020"],
  displayPhones: ["+233 54 779 0310", "+233 54 044 2020"],
  email: "info@ledgerstacktechnologies.com",
  location: "Accra, Ghana",
  address: "Digital Innovation Hub, Accra, Greater Accra Region, Ghana",
  workingHours: "Monday – Friday: 8:00 AM – 5:30 PM (24/7 Dedicated Support Available)",
  socials: {
    linkedin: "https://linkedin.com/company/ledgerstack-technologies",
    twitter: "https://twitter.com/ledgerstacktech",
    facebook: "https://facebook.com/ledgerstacktech",
    whatsapp: "https://wa.me/233547790310?text=Hello%20Ledgerstack%20Technologies%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.",
  },
};

export const CLIENTS: Client[] = [
  {
    id: "vivaldi-foods",
    name: "Vivaldi Foods Ltd",
    industry: "Food Processing & Distribution",
    category: "FMCG & Logistics",
    badge: "Enterprise Implementation",
    description: "Multi-branch inventory control, supply chain tracking, and real-time financial reporting.",
    solutionType: "Business Software Implementation",
    focusArea: "Inventory & Financial Management",
  },
  {
    id: "pave360",
    name: "Pave360 Ltd",
    industry: "Engineering & Infrastructure",
    category: "Construction & Project Management",
    badge: "Digital Transformation",
    description: "Integrated project accounting, asset management, and vendor cost monitoring.",
    solutionType: "Business Technology Solutions",
    focusArea: "Project Accounting & Systems Integration",
  },
  {
    id: "churchmove",
    name: "Churchmove Ltd",
    industry: "Logistics & Fleet Management",
    category: "Transport & Logistics",
    badge: "Web & Operations Tech",
    description: "Operational tracking, digital presence, and automated customer booking flows.",
    solutionType: "Digital Solutions & Web Systems",
    focusArea: "Fleet Systems & Web Architecture",
  },
  {
    id: "oval-technologies",
    name: "Oval Technologies",
    industry: "Information Technology",
    category: "Tech & Services",
    badge: "Infrastructure & Tools",
    description: "Enterprise email administration, technical workflow optimization, and cloud architecture.",
    solutionType: "Support & Business Email",
    focusArea: "Cloud Email & Maintenance",
  },
  {
    id: "hidden-leaf",
    name: "Hidden Leaf Pharmacy Ltd",
    industry: "Healthcare & Pharmaceuticals",
    category: "Retail & Batch Management",
    badge: "ERP & Batch Control",
    description: "Point-of-sale integration, expiry date batch tracking, and automated reorder triggers.",
    solutionType: "Business Solution Implementation",
    focusArea: "POS, Batch Tracking & Compliance",
  },
];

export const SOFTWARE_PLATFORMS: SoftwarePlatform[] = [
  {
    id: "tallyprime",
    name: "TallyPrime",
    tagline: "Accounting, Inventory & Compliance Management",
    category: "Accounting & Business Management",
    description:
      "A trusted business management platform known for lightning-fast transaction entry, comprehensive VAT reporting, multi-currency accounting, and robust inventory control.",
    keyFeatures: [
      "Lightning-fast voucher entry & keyboard-driven workflows",
      "Flexible multi-location inventory & batch management",
      "Accurate VAT, withholding tax & compliance generation",
      "Comprehensive balance sheets, cashflow & P&L statements",
      "Secure user access control and audit trails",
    ],
    bestFor: "Trading businesses, distributors, retail chains, and manufacturing enterprises requiring high-speed data entry and reliable offline-capable accounting.",
    deployment: "On-Premises / Private Cloud Remote Access",
    pricingModel: "Perpetual License / Annual Subscription",
    badge: "Widely Adopted",
    strengths: ["High Speed", "Robust Inventory", "Local Compliance", "Low Overhead"],
  },
  {
    id: "quickbooks",
    name: "QuickBooks",
    tagline: "Cloud & Desktop Financial Management",
    category: "Financial Management & Cloud Accounting",
    description:
      "User-friendly accounting software offering seamless invoice tracking, bank feed reconciliations, expense categorizations, and mobile financial visibility.",
    keyFeatures: [
      "Automated bank feed synchronization & categorization",
      "Professional invoicing with payment tracking",
      "Expense tracking with receipt capture & approval flows",
      "Multi-currency support and real-time dashboard analytics",
      "Seamless integrations with third-party apps and payment gateways",
    ],
    bestFor: "Small to mid-sized businesses, professional service firms, agencies, and consultancies wanting intuitive cloud-accessible financial management.",
    deployment: "Cloud (QuickBooks Online) / Desktop",
    pricingModel: "Monthly / Annual Subscription",
    badge: "Cloud-First",
    strengths: ["Intuitive UI", "Bank Feeds", "Mobile Access", "App Ecosystem"],
  },
  {
    id: "erpnext",
    name: "ERPNext",
    tagline: "Comprehensive Open-Source Enterprise Management",
    category: "Enterprise Resource Planning (ERP)",
    description:
      "A fully featured, open-source modern ERP encompassing accounting, HR & payroll, manufacturing, CRM, sales, procurement, and project tracking in one cohesive framework.",
    keyFeatures: [
      "End-to-end unified ERP covering all operational departments",
      "Integrated HR, attendance, payroll & leave management",
      "Bill of Materials (BOM), production planning & manufacturing workflows",
      "Customizable workflows, role permissions, and REST APIs",
      "Zero per-user software licensing lock-in",
    ],
    bestFor: "Growing enterprises, manufacturers, educational institutions, and supply chain operators seeking an all-in-one ERP without recurring per-seat license taxes.",
    deployment: "Self-Hosted / Managed Cloud",
    pricingModel: "Open Source / Implementation & Support Model",
    badge: "Full ERP",
    strengths: ["100% Extensible", "No User Fees", "All-in-One", "Custom Workflows"],
  },
  {
    id: "odoo",
    name: "Odoo",
    tagline: "Modular Business Applications & ERP",
    category: "Modular Enterprise Applications",
    description:
      "A suite of integrated business applications covering CRM, POS, inventory, eCommerce, accounting, project management, and automated marketing.",
    keyFeatures: [
      "Modular design — activate only the apps you need as you grow",
      "Integrated modern Point-of-Sale (POS) for retail and hospitality",
      "Seamless bridge between website/eCommerce and backend inventory",
      "Automated lead nurturing, pipeline CRM, and sales quotes",
      "Vast community and enterprise app marketplace",
    ],
    bestFor: "Retailers, multi-channel businesses, and growing companies desiring a modular system that scales seamlessly from simple CRM to complex manufacturing.",
    deployment: "Odoo Cloud / On-Premise / Odoo.sh",
    pricingModel: "Community / Enterprise Subscription",
    badge: "Modular Ecosystem",
    strengths: ["Modern UI", "Modular Apps", "POS & eCommerce", "Scalable"],
  },
  {
    id: "zoho-books",
    name: "Zoho Books",
    tagline: "Automated Cloud Accounting & Connected Apps",
    category: "Cloud Accounting & Workflow Automation",
    description:
      "A powerful, smart cloud accounting solution that automates business workflows, tracks billable hours, manages inventory, and integrates seamlessly with the Zoho universe.",
    keyFeatures: [
      "Automated recurring billing, payment reminders & tax calculations",
      "Client portal for effortless invoice approvals and statement viewing",
      "Project billing, timesheet tracking & expense allocation",
      "Native connectivity with Zoho CRM, Inventory, and Desk",
      "Comprehensive mobile applications for iOS and Android",
    ],
    bestFor: "Tech-savvy businesses, service agencies, and organizations already leveraging or planning to use the broader Zoho SaaS suite.",
    deployment: "100% Cloud / Multi-Platform Mobile",
    pricingModel: "Tiered Monthly / Annual Subscription",
    badge: "Automation Power",
    strengths: ["Workflow Automation", "Client Portal", "Zoho Ecosystem", "Mobile Apps"],
  },
];

export const SERVICES: Service[] = [
  {
    id: "business-solutions",
    title: "Implementation of Business Solution Software",
    slug: "solutions",
    shortDesc: "End-to-end selection, setup, data migration, and deployment of TallyPrime, QuickBooks, ERPNext, Odoo, and Zoho Books.",
    fullDesc:
      "Software only solves business problems when it is structured around your specific operations. Ledgerstack implements industry-leading business management software including TallyPrime, QuickBooks, ERPNext, Odoo, and Zoho Books. We conduct deep requirements analysis, map your chart of accounts, configure inventory and tax parameters, migrate historical records safely, and configure custom reports so management gains total clarity from day one.",
    iconName: "Layers",
    supportedTools: ["TallyPrime", "QuickBooks", "ERPNext", "Odoo", "Zoho Books"],
    deliverables: [
      "Operational workflow & chart of accounts assessment",
      "Software architecture & edition selection (TallyPrime, QuickBooks, ERPNext, Odoo, Zoho Books)",
      "Custom system configuration & parameter setting",
      "Historical data sanitization & safe migration",
      "Tax rules, VAT rates & withholding configurations for Ghana",
      "User role permissions & multi-level approval matrices",
      "UAT (User Acceptance Testing) & Go-Live supervision",
      "Post-implementation hypercare & optimization",
    ],
    audience: ["Growing SMEs", "Distributors & Wholesalers", "Retail & Pharmacies", "Service Firms", "Institutions & Schools"],
    highlights: [
      { title: "Multi-Software Expertise", desc: "Certified implementation of TallyPrime, QuickBooks, ERPNext, Odoo, and Zoho Books." },
      { title: "Safe Data Migration", desc: "Preserve historical ledger integrity without missing balances or corrupt entries." },
      { title: "Seamless Go-Live", desc: "Structured parallel runs prevent operational disruptions during cutover." },
    ],
  },
  {
    id: "training-capacity",
    title: "Training for Corporate Workers & Students on Accounting Softwares",
    slug: "training",
    shortDesc: "Hands-on, workflow-focused practical training programs on accounting software for corporate finance teams, staff, and students.",
    fullDesc:
      "The true value of any software system lies in the confidence of the people operating it. Ledgerstack delivers practical, scenario-based training on accounting software for corporate workers, finance professionals, and accounting students to build real muscle memory for day-to-day operations, reconciliations, and compliance.",
    iconName: "GraduationCap",
    deliverables: [
      "Hands-on corporate staff training on TallyPrime, QuickBooks, and ERPs",
      "Specialized training modules for accounting students & fresh graduates",
      "Customized role-specific training manuals & step-by-step guides",
      "On-site office workshops and interactive remote training sessions",
      "Practical scenario simulations & real transactional dummy data practice",
      "Voucher entry speed, reconciliation masterclasses & error prevention",
      "Post-training competency assessments & completion certifications",
    ],
    audience: ["Corporate Teams & Finance Staff", "Accounting Students & Graduates", "Inventory & Warehouse Controllers", "Business Owners & Managers"],
    highlights: [
      { title: "Corporate & Student Tracks", desc: "Tailored programs for on-the-job professionals as well as aspiring accountants." },
      { title: "Practical, Not Theoretical", desc: "We train on real business transactions, not abstract textbook slides." },
      { title: "Confidence Guaranteed", desc: "Employees and students gain autonomy and stop relying on guesswork." },
    ],
  },
  {
    id: "web-graphic-design",
    title: "Web Development & Graphic Design",
    slug: "web-design",
    shortDesc: "High-performance corporate websites, custom web applications, and professional brand identity & graphic design.",
    fullDesc:
      "A modern business requires digital touchpoints that command respect and convert visitors into clients. We design and engineer ultra-responsive corporate websites, tailored web applications, brand identity systems, logos, and marketing graphics engineered for speed, beauty, and credibility.",
    iconName: "Palette",
    deliverables: [
      "Bespoke corporate & enterprise websites",
      "Custom web applications & customer portals",
      "Professional graphic design & marketing collateral",
      "Brand identity: corporate logos, typography & color systems",
      "Company profiles, brochures, pitch decks & digital stationery",
      "Technical SEO & Core Web Vitals optimization",
      "Secure CMS integration for easy content updates",
    ],
    audience: ["Corporate Enterprises", "Service Providers", "Tech Companies", "Educational Institutions", "Growing Brands"],
    highlights: [
      { title: "High-Performance Code", desc: "Modern frameworks engineered for lightning speed and seamless mobile UX." },
      { title: "Complete Graphic Suite", desc: "From official logo marks to pitch decks and high-resolution brochures." },
      { title: "Coherent Brand Presence", desc: "Unified, professional aesthetics across all digital and print touchpoints." },
    ],
  },
  {
    id: "support-maintenance",
    title: "24/7 Support Service on Implemented Business Solutions",
    slug: "support",
    shortDesc: "Dedicated round-the-clock technical assistance, prompt troubleshooting, data backup advisory, and maintenance for business solutions.",
    fullDesc:
      "Your software journey doesn't end on go-live day; that is where your daily operational rhythm begins. Ledgerstack provides 24/7 technical support, proactive maintenance, prompt troubleshooting, version updates, data backup routines, and user guidance so your team is never left stranded when challenges arise.",
    iconName: "Headphones",
    deliverables: [
      "24/7 direct helpdesk access via phone, email, and WhatsApp",
      "Instant remote desktop troubleshooting & error resolution",
      "Automated and scheduled database backup strategies & disaster recovery",
      "Periodic database health checks & index optimization",
      "New employee onboarding & refresher system training",
      "Custom report adjustments as business needs evolve",
      "System patch and version upgrade management",
    ],
    audience: ["Live Software Clients", "Growing Multi-Branch Businesses", "Finance Teams Under Tight Deadlines", "Enterprises Requiring 24/7 Continuity"],
    highlights: [
      { title: "24/7 Availability", desc: "Round-the-clock assistance when your team is closing books or handling peak sales." },
      { title: "Fast-Track Escalation", desc: "Direct access to technical engineers who know your system setup inside-out." },
      { title: "Data Security Focus", desc: "Rigorous backup protocols protect against data loss and hardware failure." },
    ],
  },
  {
    id: "business-email",
    title: "Business Email Services",
    slug: "email",
    shortDesc: "Secure, branded corporate email setups, Google Workspace & Microsoft 365 migrations, DNS security, and mailbox administration.",
    fullDesc:
      "Communicating with customers from generic free email providers undermines credibility and exposes organizations to security risks. We configure professional custom-domain email infrastructure with modern SPF/DKIM/DMARC authentication, spam filtering, mobile synchronization, and seamless user provisioning.",
    iconName: "Mail",
    deliverables: [
      "Custom domain setup (e.g., name@yourcompany.com)",
      "Google Workspace & Microsoft 365 deployment",
      "Zero-downtime historical email & contacts migration",
      "DNS security authentication: SPF, DKIM & DMARC records",
      "Shared inboxes, alias routing & team distribution lists",
      "Mobile device synchronization (iOS, Android, Outlook)",
      "Centralized user administration and security policies",
    ],
    audience: ["New Companies", "Firms Upgrading from Free Email", "Multi-Department Organizations", "Security-Conscious Enterprises"],
    highlights: [
      { title: "Rock-Solid Deliverability", desc: "Proper DNS records guarantee your business emails hit inboxes, not spam folders." },
      { title: "Seamless Team Collaboration", desc: "Integrated calendars, cloud drive storage, and shared company contacts." },
      { title: "Zero-Downtime Migration", desc: "Transfer old messages and folder hierarchies without losing a single client email." },
    ],
  },
];

export const WORK_PROCESS = [
  {
    step: "01",
    title: "Understand",
    subhead: "Deep Discovery & Workflow Mapping",
    description:
      "We begin by listening. We analyze your existing processes, team structure, transaction volume, reporting bottlenecks, and future growth objectives.",
    icon: "Compass",
  },
  {
    step: "02",
    title: "Recommend",
    subhead: "Unbiased Technology Architecture",
    description:
      "We match your specific operational profile with the most suitable software platform and digital tools—grounded in your budget and technical realities.",
    icon: "Cpu",
  },
  {
    step: "03",
    title: "Implement",
    subhead: "Configuration & Clean Data Migration",
    description:
      "We configure the system, map charts of accounts, set tax parameters, migrate legacy data cleanly, and conduct thorough pre-flight validation.",
    icon: "Wrench",
  },
  {
    step: "04",
    title: "Train",
    subhead: "Hands-On Practical Capacity Building",
    description:
      "We empower your staff with role-tailored workshops, real-world simulations, and practical job aids until everyone enters data with total confidence.",
    icon: "Award",
  },
  {
    step: "05",
    title: "Support",
    subhead: "Continuous Partnership & Peace of Mind",
    description:
      "We stay with you long after go-live. From routine troubleshooting and backups to version updates and custom reports, we keep your business moving.",
    icon: "ShieldCheck",
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Business-First Thinking",
    description:
      "Technology is an enabler, not an end in itself. We don't push complex systems that burden your team; we tailor technology to solve real operational bottlenecks.",
    icon: "Briefcase",
  },
  {
    title: "Practical Implementation",
    description:
      "We don't just click 'install'. We structure charts of accounts, inventory batches, compliance settings, and approval flows to mirror how your business actually runs.",
    icon: "SlidersHorizontal",
  },
  {
    title: "Training Included in the Journey",
    description:
      "Software fails when teams don't understand it. We make capacity building an integral phase of every rollout so your staff operates with autonomy.",
    icon: "BookOpenCheck",
  },
  {
    title: "Long-Term Dedicated Support",
    description:
      "Unlike one-off vendors who disappear after invoicing, Ledgerstack provides continued post-launch maintenance, troubleshooting, and guidance.",
    icon: "Clock",
  },
  {
    title: "Multi-Platform Technology Expertise",
    description:
      "We work across TallyPrime, QuickBooks, ERPNext, Odoo, and Zoho Books. We recommend what is right for you, not what we are forced to sell.",
    icon: "Network",
  },
  {
    title: "One Single Technology Partner",
    description:
      "From core accounting software to modern web presence, graphic design, enterprise email, and ongoing IT support, everything is under one reliable roof.",
    icon: "Building2",
  },
];

export const FAQS = [
  {
    q: "How does Ledgerstack help us decide between TallyPrime, QuickBooks, ERPNext, Odoo, or Zoho Books?",
    a: "We assess your business type, transaction volume, inventory complexity, compliance needs, team distribution, and budget. For example, high-volume retail or manufacturing often benefits from TallyPrime or ERPNext, while distributed professional services thrive on QuickBooks or Zoho Books. We provide objective guidance based on what works best for your team.",
  },
  {
    q: "Can you migrate our historical financial and inventory data from spreadsheets or old software?",
    a: "Yes. Data migration is a fundamental pillar of our implementation service. We audit, sanitize, format, and safely import opening balances, master chart of accounts, customer/vendor databases, and inventory records to ensure zero loss of historical context.",
  },
  {
    q: "Do you provide on-site training in Ghana, or is it remote?",
    a: "We offer both. We conduct hands-on, in-person workshops at your offices across Ghana, as well as structured live remote sessions with recorded reference materials and practical exercises.",
  },
  {
    q: "What happens after our new system goes live?",
    a: "We do not leave you on go-live day. We offer ongoing support and maintenance packages that include direct telephone/remote helpdesk access, periodic database backups, troubleshooting, user refresher training, and custom reporting tweaks as your operations evolve.",
  },
  {
    q: "Can Ledgerstack build a custom corporate website or web application for our organization?",
    a: "Yes. Our digital design and engineering team crafts bespoke corporate websites, web applications, client portals, and brand identity graphics tailored specifically for modern technology, service, and enterprise brands.",
  },
  {
    q: "How can we get started with Ledgerstack Technologies?",
    a: "You can book a free exploratory consultation through our contact form, email us at info@ledgerstacktechnologies.com, or call our direct advisory lines at 0547790310 or 0540442020. We will discuss your current setup and outline actionable next steps.",
  },
];
