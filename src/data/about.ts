/** About page narrative data — company profile facts plus clearly marked placeholders. */

export const COMPANY_STORY = [
  "Imran Khan & Co. is a trusted Pakistani exporter specializing in premium halal beef for Qatar and GCC markets.",
  "From carefully selected livestock to hygienic processing and temperature-controlled logistics, every stage of our operation follows strict international quality standards.",
  "We proudly serve importers, supermarkets, hotels, restaurants, catering companies, wholesalers, food distributors, and institutional buyers with fresh, chilled, and frozen halal beef.",
];

export const MISSION =
  "To supply premium halal beef with uncompromising quality, hygienic processing, and dependable export services while building long-term relationships with our customers.";

export const VISION =
  "To become one of Pakistan's leading halal beef exporters, recognized across the GCC for quality, trust, reliability, and customer satisfaction.";

export const GOALS = [
  "Deliver premium halal beef that exceeds customer expectations.",
  "Provide competitive pricing without compromising quality.",
  "Maintain international food safety and hygiene standards.",
  "Build lasting partnerships based on trust and consistency.",
  "Expand our export network across Qatar and the GCC.",
];

export const TRUST_POINTS = [
  {
    title: "Halal by default",
    text: "100% halal slaughter with veterinary inspection of every animal.",
    icon: "BadgeCheck",
  },
  {
    title: "Unbroken cold chain",
    text: "Temperature-controlled storage, refrigerated transport and reefer loading.",
    icon: "ThermometerSnowflake",
  },
  {
    title: "End-to-end service",
    text: "Production, packaging, documentation and logistics handled by one partner.",
    icon: "Handshake",
  },
  {
    title: "Long-term relationships",
    text: "We build partnerships based on trust, consistency and clear communication.",
    icon: "HeartHandshake",
  },
];

export interface TimelineMilestone {
  period: string;
  title: string;
  text: string;
  isPlaceholder: boolean;
}

/**
 * Company timeline — the profile does not include dates yet, so every
 * milestone is an explicit placeholder awaiting confirmation.
 */
export const TIMELINE: TimelineMilestone[] = [
  {
    period: "Date TBC",
    title: "Company founded in Pakistan",
    text: "Placeholder milestone — founding date and story details to be confirmed.",
    isPlaceholder: true,
  },
  {
    period: "Date TBC",
    title: "Halal processing operations begin",
    text: "Placeholder milestone — date of modern halal processing facility commencement to be confirmed.",
    isPlaceholder: true,
  },
  {
    period: "Date TBC",
    title: "First export shipments to Qatar",
    text: "Placeholder milestone — date of first Qatar export to be confirmed.",
    isPlaceholder: true,
  },
  {
    period: "Date TBC",
    title: "GCC market expansion",
    text: "Placeholder milestone — expansion into Saudi Arabia, UAE, Oman, Kuwait and Bahrain to be confirmed.",
    isPlaceholder: true,
  },
  {
    period: "Today",
    title: "Building long-term GCC partnerships",
    text: "Currently supplying premium Pakistani halal beef to Qatar and expanding our presence throughout the GCC.",
    isPlaceholder: false,
  },
];

export interface TeamMember {
  name: string;
  role: string;
  phone?: string;
  isPlaceholderRole: boolean;
}

/** Team members named in the company profile; roles are placeholders. */
export const TEAM: TeamMember[] = [
  { name: "Murtaza Ali", role: "Point of contact (title to be confirmed)", phone: "+974 3015 7663", isPlaceholderRole: true },
  { name: "Ahad Ali", role: "Point of contact (title to be confirmed)", phone: "+974 3015 6536", isPlaceholderRole: true },
];

export const COLD_CHAIN_PROCESS = [
  { title: "Chilled / frozen holding", text: "Product held in temperature-controlled cold rooms after processing.", icon: "ThermometerSnowflake" },
  { title: "Pre-load inspection", text: "Quality and temperature checks before the container is loaded.", icon: "ClipboardCheck" },
  { title: "Refrigerated transport", text: "Refrigerated trucks move the load to the export terminal.", icon: "Truck" },
  { title: "Reefer container", text: "Container loading with set-point verification for the voyage.", icon: "Container" },
];

export const QUALITY_PROMISE =
  "Every shipment is produced under strict quality control procedures to ensure freshness, safety, and consistency.";
