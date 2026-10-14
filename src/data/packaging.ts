/** Packaging styles and specification matrix for the packaging page. */

export interface PackagingStyle {
  slug: string;
  name: string;
  description: string;
  highlights: string[];
  icon: string;
}

export const PACKAGING_STYLES: PackagingStyle[] = [
  {
    slug: "vacuum-packed",
    name: "Vacuum Packed",
    description:
      "Air removed in a food grade pouch to protect freshness, colour and hygiene throughout the cold chain.",
    highlights: ["Extended shelf life", "Protects against freezer burn", "Label-ready"],
    icon: "Layers",
  },
  {
    slug: "food-grade-plastic",
    name: "Food Grade Plastic",
    description:
      "Food grade liners suitable for direct product contact, used alone or as an inner layer.",
    highlights: ["Food-safe material", "Hygienic inner layer", "Moisture barrier"],
    icon: "ShieldCheck",
  },
  {
    slug: "carton-boxes",
    name: "Carton Boxes",
    description:
      "Sturdy export cartons over-packed on top of the inner pack for handling and stacking.",
    highlights: ["Stackable", "Printable labelling", "Export standard"],
    icon: "Box",
  },
  {
    slug: "custom-weight",
    name: "Custom Weight Packaging",
    description:
      "Pack weights prepared to your order specification, with labels matched to your market.",
    highlights: ["Buyer-specified weights", "Market labelling", "Consistent tare"],
    icon: "Scale",
  },
  {
    slug: "bulk-export",
    name: "Bulk Export Packaging",
    description:
      "High-volume packing designed for container loads and wholesale distribution.",
    highlights: ["Container-efficient", "Bulk quantities", "Cost-effective"],
    icon: "Container",
  },
  {
    slug: "frozen-packaging",
    name: "Frozen Packaging",
    description:
      "Packing suited to frozen storage and long-haul reefer transport without seal failure.",
    highlights: ["Freezer-grade seals", "Long-haul ready", "Ice-tolerant"],
    icon: "Snowflake",
  },
  {
    slug: "fresh-chilled-packaging",
    name: "Fresh Chilled Packaging",
    description:
      "Breathable, hygienic packing for chilled shipments handled within the 0–4 °C band.",
    highlights: ["Chill-chain friendly", "Hygienic seal", "Fresh presentation"],
    icon: "Thermometer",
  },
  {
    slug: "container-loading",
    name: "Container Loading",
    description:
      "Carefully stowed and temperature-verified loading of reefer containers for export sailing.",
    highlights: ["Stowed for transit", "Temperature checks", "Photo records on request"],
    icon: "Truck",
  },
];

export interface SpecRow {
  spec: string;
  detail: string;
}

/** Indicative specifications — final values to be confirmed per order. */
export const PACKAGING_SPECS: SpecRow[] = [
  { spec: "Weight options", detail: "Custom weights per order — list of standard weights to be confirmed" },
  { spec: "Shelf life", detail: "Depends on state (chilled vs frozen) and pack — table to be confirmed" },
  { spec: "Temperature", detail: "Indicative: 0–4 °C chilled, −18 °C frozen (to be confirmed)" },
  { spec: "Cold storage", detail: "Temperature-controlled cold storage at our facility" },
  { spec: "Shipping method", detail: "Reefer container export via refrigerated transport" },
  { spec: "Export documentation", detail: "Complete export documentation prepared with each shipment" },
];

export const COLD_CHAIN_HIGHLIGHTS = [
  {
    title: "Vacuum Packaging",
    text: "Air removed in food grade pouches so the product stays protected from sealing to delivery.",
    icon: "Layers",
  },
  {
    title: "Temperature-Controlled Storage",
    text: "Chilled and frozen holding under temperature-controlled cold storage at our facility.",
    icon: "ThermometerSnowflake",
  },
  {
    title: "Refrigerated Transportation",
    text: "Refrigerated trucks move product from our cold storage to the export terminal.",
    icon: "Truck",
  },
  {
    title: "Container Loading",
    text: "Reefer containers stowed and temperature-verified for international export.",
    icon: "Container",
  },
];
