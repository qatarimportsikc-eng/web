/** Industries served, quality standards, export process and QC timeline data. */

export interface Industry {
  name: string;
  description: string;
  icon: string;
}

/** From the company profile: "Industries We Serve". */
export const INDUSTRIES: Industry[] = [
  { name: "Hotels", description: "Consistent premium cuts for hotel kitchens and banqueting.", icon: "Building2" },
  { name: "Restaurants", description: "Menu-ready cuts and portioned meat for food service.", icon: "UtensilsCrossed" },
  { name: "Supermarkets", description: "Retail-ready chilled and frozen packs with clean labelling.", icon: "ShoppingCart" },
  { name: "Hypermarkets", description: "High-volume supply for large-format retail floors.", icon: "Store" },
  { name: "Food Distributors", description: "Reliable volumes for regional distribution networks.", icon: "Route" },
  { name: "Wholesalers", description: "Bulk quantities at competitive export pricing.", icon: "Package" },
  { name: "Military Camps", description: "Institutional supply under strict hygiene standards.", icon: "Shield" },
  { name: "Government Suppliers", description: "Dependable supply for public sector programmes.", icon: "Landmark" },
  { name: "Cloud Kitchens", description: "Prepped and portioned meat for delivery-first kitchens.", icon: "ChefHat" },
  { name: "Catering Companies", description: "Event-scale volumes with dependable scheduling.", icon: "HandPlatter" },
  { name: "Importers", description: "Container-scale export orders with full documentation.", icon: "Ship" },
  { name: "Large Institutional Buyers", description: "Long-term supply agreements for institutions.", icon: "Factory" },
];

export interface QualityStandard {
  title: string;
  description: string;
  icon: string;
}

/** From the company profile: "Our Quality Standards". */
export const QUALITY_STANDARDS: QualityStandard[] = [
  { title: "100% Halal Slaughter", description: "Every animal is slaughtered in accordance with halal requirements.", icon: "BadgeCheck" },
  { title: "Veterinary Inspection", description: "Healthy, veterinary-inspected livestock selected before processing.", icon: "Stethoscope" },
  { title: "Hygienic Processing", description: "Modern halal processing with strict hygiene controls on the line.", icon: "Sparkles" },
  { title: "Food Grade Packaging", description: "Only food grade materials touch the product, sealed for export.", icon: "PackageCheck" },
  { title: "Cold Chain Management", description: "Unbroken temperature control from cold storage to delivery.", icon: "ThermometerSnowflake" },
  { title: "Export Quality Inspection", description: "Each shipment passes quality inspection before it is released.", icon: "ClipboardCheck" },
  { title: "Fresh Chilled & Frozen Storage", description: "Holding in chilled and frozen rooms to protect product state.", icon: "Snowflake" },
  { title: "Customer Satisfaction Guarantee", description: "Every shipment is produced to deliver freshness, safety and consistency.", icon: "HeartHandshake" },
];

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

/** From the brief: customer inquiry → delivery. */
export const EXPORT_STEPS: ProcessStep[] = [
  { step: 1, title: "Customer Inquiry", description: "Tell us the product, quantity, destination and required delivery window.", icon: "MessageSquareText" },
  { step: 2, title: "Quotation", description: "We prepare a quotation covering product specification, packing and price.", icon: "FileText" },
  { step: 3, title: "Meeting", description: "We align on specifications, terms and expectations — virtual or in person.", icon: "Users" },
  { step: 4, title: "Purchase Order", description: "You issue the purchase order confirming the agreed scope.", icon: "ClipboardList" },
  { step: 5, title: "Payment", description: "Agreed payment terms are confirmed before production scheduling.", icon: "Wallet" },
  { step: 6, title: "Production", description: "Sourcing, halal slaughter, cutting and processing to your specification.", icon: "Factory" },
  { step: 7, title: "Quality Inspection", description: "Export quality checks on product, packing and temperature records.", icon: "ClipboardCheck" },
  { step: 8, title: "Packaging", description: "Vacuum sealing, carton over-packing and labelling as ordered.", icon: "PackageCheck" },
  { step: 9, title: "Cold Storage", description: "Holding in temperature-controlled cold storage until loading.", icon: "ThermometerSnowflake" },
  { step: 10, title: "Container Loading", description: "Reefer container stowing with temperature verification.", icon: "Container" },
  { step: 11, title: "Shipping", description: "Departure on the scheduled reefer service to your destination port.", icon: "Ship" },
  { step: 12, title: "Delivery", description: "Consignment arrives within its temperature band, ready for clearance.", icon: "MapPinCheck" },
];

export interface QCTimelineStage {
  stage: string;
  description: string;
  icon: string;
}

/** Quality control journey from farm to delivery. */
export const QC_TIMELINE: QCTimelineStage[] = [
  { stage: "Farm Selection", description: "Healthy livestock sourced from trusted farms.", icon: "Wheat" },
  { stage: "Veterinary Inspection", description: "Pre-slaughter inspection of every animal.", icon: "Stethoscope" },
  { stage: "Halal Slaughter", description: "100% halal slaughter carried out on the line.", icon: "BadgeCheck" },
  { stage: "Hygienic Processing", description: "Controlled cutting and deboning under hygiene protocols.", icon: "Scissors" },
  { stage: "Quality Inspection", description: "Export quality checks before packing begins.", icon: "ClipboardCheck" },
  { stage: "Packaging", description: "Food grade vacuum packing and carton over-packing.", icon: "PackageCheck" },
  { stage: "Cold Storage", description: "Temperature-controlled holding until the container is ready.", icon: "ThermometerSnowflake" },
  { stage: "Container Loading", description: "Verified loading for the export voyage.", icon: "Container" },
  { stage: "Delivery", description: "Product arrives fresh within its required temperature band.", icon: "MapPinCheck" },
];

export interface Facility {
  title: string;
  description: string;
  icon: string;
}

/** From the company profile: "Our Facilities". */
export const FACILITIES: Facility[] = [
  { title: "Healthy Veterinary-Inspected Livestock", description: "Only healthy, inspected animals enter the process.", icon: "Stethoscope" },
  { title: "Modern Halal Processing Facility", description: "Purpose-built facility for halal processing at export standard.", icon: "Factory" },
  { title: "Hygienic Cutting & Processing", description: "Controlled cutting rooms with strict hygiene practices.", icon: "Scissors" },
  { title: "Vacuum Packaging", description: "In-house vacuum sealing for freshness and shelf life.", icon: "Layers" },
  { title: "Temperature-Controlled Cold Storage", description: "Chilled and frozen holding rooms under continuous monitoring.", icon: "ThermometerSnowflake" },
  { title: "Export Documentation", description: "Documentation prepared in-house for every shipment.", icon: "FileCheck2" },
  { title: "Refrigerated Transportation", description: "Refrigerated trucks for inland leg to the terminal.", icon: "Truck" },
  { title: "Container Loading for International Export", description: "Reefer loading arranged for international sailing.", icon: "Container" },
];
