export const SITE_NAME     = 'Newline Express Logistics'
export const SITE_SHORT    = 'NEXL'
export const SITE_TAGLINE  = 'Your Trusted Global Freight Partner'
export const SITE_PHONE    = '+91 98400 00000'
export const SITE_EMAIL    = 'info@nexllogistics.com'
export const SITE_ADDRESS  = 'New No.134, Old No.264, 3rd Floor, Thambu Chetty Street, Mannady, George Town, Chennai - 600001'
export const SITE_OWNER    = 'Mohammed Idhirish'

export const NAV_LINKS = [
  { label: 'Home',       href: '/' },
  { label: 'Services',   href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'About Us',   href: '/about' },
  { label: 'Contact',    href: '/contact' },
]

export const SERVICES = [
  {
    slug: 'sea-freight',
    title: 'Sea Freight',
    shortDesc: 'FCL & LCL ocean freight to 150+ ports worldwide.',
    fullDesc: 'End-to-end ocean freight solutions — Full Container Load (FCL) and Less than Container Load (LCL) — covering all major global ports. We handle booking, documentation, and port-to-port delivery with real-time visibility.',
    icon: '🚢',
    features: ['FCL & LCL options', 'NVOCC services', '150+ global ports', 'Real-time tracking', 'All trade lanes'],
    color: '#0EA5E9',
  },
  {
    slug: 'air-freight',
    title: 'Air Freight',
    shortDesc: 'Express & charter air cargo for time-critical shipments.',
    fullDesc: 'Fast, reliable air freight services for time-sensitive cargo. From standard airfreight to charter solutions, we partner with leading airlines for guaranteed capacity and on-time delivery.',
    icon: '✈️',
    features: ['Express & standard', 'Charter flights', 'Perishables handling', 'DG cargo certified', 'Door-to-airport'],
    color: '#8B5CF6',
  },
  {
    slug: 'lcl-consolidation',
    title: 'LCL Consolidation',
    shortDesc: 'Weekly groupage shipments — cost-effective for small cargo.',
    fullDesc: 'Our LCL consolidation service groups your cargo with others into a shared container, giving you the benefits of sea freight at reduced cost. Weekly fixed sailings to major trade lanes.',
    icon: '📦',
    features: ['Weekly fixed sailings', 'Shared container', 'Cost-effective', 'All major trade lanes', 'Flexible volumes'],
    color: '#F97316',
  },
  {
    slug: 'customs-clearance',
    title: 'Customs Clearance',
    shortDesc: 'Expert CHA services — IEC, BOE, duty drawback & more.',
    fullDesc: 'Licensed Custom House Agent (CHA) services for seamless import and export clearance at all major Indian ports and airports. We handle documentation, duty calculation, and compliance.',
    icon: '🛃',
    features: ['Licensed CHA', 'Import & export', 'Duty drawback', 'DGFT compliance', 'All Indian ports'],
    color: '#10B981',
  },
  {
    slug: 'door-to-door',
    title: 'Door-to-Door',
    shortDesc: 'Complete pick-up to final delivery — hassle free.',
    fullDesc: "We manage your shipment from your factory or warehouse door all the way to the consignee's door — anywhere in the world. Includes inland transport, customs, ocean/air freight, and last-mile delivery.",
    icon: '🏠',
    features: ['Pick-up to delivery', 'Single point of contact', 'Worldwide coverage', 'Real-time updates', 'Insurance included'],
    color: '#EC4899',
  },
  {
    slug: 'project-cargo',
    title: 'Project Cargo',
    shortDesc: 'ODC, heavy lift & out-of-gauge cargo specialists.',
    fullDesc: 'Specialized logistics for oversized, heavy, or out-of-gauge (ODC) cargo — industrial machinery, power plant equipment, offshore modules, and more. We plan every move with precision engineering.',
    icon: '🏗️',
    features: ['ODC & heavy lift', 'Route survey', 'Special equipment', 'Offshore modules', 'Turn-key solutions'],
    color: '#F59E0B',
  },
  {
    slug: 'domestic-coastal',
    title: 'Domestic & Coastal',
    shortDesc: 'Pan-India surface & coastal shipping at competitive rates.',
    fullDesc: 'Cost-effective domestic logistics via road, rail, and Indian coastal shipping routes. Connect any two Indian ports or cities with reliable, scheduled services and full cargo tracking.',
    icon: '🇮🇳',
    features: ['Pan-India coverage', 'Coastal shipping', 'FTL & LTL', 'Scheduled services', 'Competitive rates'],
    color: '#6366F1',
  },
]

export const STATS = [
  { value: 10,   suffix: '+', label: 'Years Experience' },
  { value: 100,  suffix: '+', label: 'Global Ports' },
  { value: 2000, suffix: '+', label: 'Shipments Handled' },
  { value: 98,   suffix: '%', label: 'On-time Delivery' },
]

export const WHY_US = [
  { icon: '📡', title: 'Real-time Tracking',    desc: 'Live shipment visibility at every stage — from pick-up to final delivery, 24/7.' },
  { icon: '🏆', title: 'IATA / FIATA Certified', desc: 'Internationally accredited freight forwarder with IATA, FIATA, and FFFAI memberships.' },
  { icon: '🌐', title: 'Global Agent Network',   desc: 'Trusted partner agents in 80+ countries for seamless origin and destination services.' },
  { icon: '📋', title: 'Expert Documentation',   desc: 'Flawless Bill of Lading, Airway Bill, customs docs handled by our in-house team.' },
  { icon: '💬', title: '24/7 Support',            desc: 'Dedicated account manager reachable round the clock — real people, no bots.' },
  { icon: '💰', title: 'Competitive Pricing',     desc: 'Best freight rates through volume contracts with carriers and shipping lines worldwide.' },
]

export const INDUSTRIES = [
  { name: 'Automotive',        icon: '🚗', desc: 'CKD/CBU vehicles, spare parts and automotive components with damage-free handling.' },
  { name: 'Pharmaceuticals',   icon: '💊', desc: 'GDP-compliant cold chain logistics for APIs, vaccines and finished pharmaceutical goods.' },
  { name: 'Oil & Gas',         icon: '⛽', desc: 'Offshore equipment, pipeline materials and hazardous cargo with full regulatory compliance.' },
  { name: 'Retail & E-commerce', icon: '🛍️', desc: 'High-volume, time-sensitive retail imports and exports with e-fulfilment capabilities.' },
  { name: 'Engineering',       icon: '⚙️', desc: 'Heavy machinery, capital goods and industrial equipment — ODC and project cargo specialists.' },
  { name: 'Chemicals',         icon: '🧪', desc: 'Hazardous and non-hazardous chemicals with IMDG-compliant documentation and handling.' },
]

export const HOW_IT_WORKS = [
  { step: '01', title: 'Enquire',  desc: 'Submit your shipment details via our quote form or call us directly.' },
  { step: '02', title: 'Quote',    desc: 'Receive a competitive, transparent quote within 4 business hours.' },
  { step: '03', title: 'Book',     desc: 'Confirm booking — we handle all documentation and carrier coordination.' },
  { step: '04', title: 'Deliver',  desc: 'Your cargo moves with full tracking until it reaches the destination.' },
]

export const TESTIMONIALS = [
  {
    quote: 'NEXL has been our freight partner for years. Their customs team is exceptional — zero delays on our pharma imports.',
    name: 'Ramesh Krishnamurthy', role: 'Supply Chain Head', company: 'SunPharma Exports', initials: 'RK',
  },
  {
    quote: 'The project cargo team handled our 120-tonne reactor move flawlessly. Professional, precise, and communicative throughout.',
    name: 'Vikram Nair', role: 'Logistics Director', company: 'Larsen & Petrotech', initials: 'VN',
  },
  {
    quote: 'Competitive rates, reliable LCL consolidation, and a team that actually picks up the phone. Highly recommended.',
    name: 'Priya Sundaram', role: 'Import Manager', company: 'Fabindia Retail', initials: 'PS',
  },
  {
    quote: 'Their air freight team moved our time-critical automotive components from Germany in 48 hours. Absolutely outstanding.',
    name: 'Arun Mehta', role: 'GM Operations', company: 'Tata Components Ltd', initials: 'AM',
  },
  {
    quote: 'Door-to-door service from Shanghai to our Chennai warehouse — seamless, transparent, and always on time.',
    name: 'Deepa Balakrishnan', role: 'Procurement Head', company: 'TVS Supply Chain', initials: 'DB',
  },
]

export const CLIENT_LOGOS = [
  'TCS Logistics','Mahindra Trade','SunPharma','TVS Supply','L&T Projects',
  'Infosys Goods','Ashok Leyland','ONGC Freight','Wipro Logistics','HCL Trade',
  'Bajaj Exports','Hero Moto Corp','ITC Agri','Godrej Supply','Tata Steel',
]
