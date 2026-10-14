/** Product catalog data — offerings listed in the company profile. */

export type ProductCategory = "Meat" | "Value-Added" | "Services";
export type StorageState = "Fresh Chilled" | "Frozen" | "Both" | "Not applicable";

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  tagline: string;
  description: string;
  cuts: string[];
  packaging: string[];
  state: StorageState;
  /** MOQ is not stated in the company profile — placeholder until confirmed. */
  moq: string;
  availability: string;
  /** Key into the icon map (see components/Icon.tsx). */
  icon: string;
  featured?: boolean;
}

const MOQ_TBC = "To be confirmed with our sales team";
const AVAILABILITY =
  "Subject to current production schedule — confirmed at time of quotation";

export const PRODUCTS: Product[] = [
  {
    slug: "fresh-chilled-beef",
    name: "Fresh Chilled Beef",
    category: "Meat",
    tagline: "Farm-fresh halal beef kept at chilled temperatures",
    description:
      "Premium halal beef from veterinary-inspected livestock, processed hygienically and held under temperature-controlled chilled conditions to preserve freshness from our facility to your cold room.",
    cuts: ["Boneless blocks", "Bone-in primals", "Customized cuts on request"],
    packaging: ["Vacuum packed", "Food grade plastic", "Carton boxes"],
    state: "Fresh Chilled",
    moq: MOQ_TBC,
    availability: AVAILABILITY,
    icon: "Snowflake",
    featured: true,
  },
  {
    slug: "frozen-beef",
    name: "Frozen Beef",
    category: "Meat",
    tagline: "Deep-frozen halal beef for long-distance export",
    description:
      "Quickly frozen halal beef designed for extended shelf life and stable long-haul shipping to Qatar and GCC destinations, packed and stored under strict cold chain management.",
    cuts: ["Boneless blocks", "Primal cuts", "Trim"],
    packaging: ["Vacuum packed", "Carton boxes", "Bulk export packaging"],
    state: "Frozen",
    moq: MOQ_TBC,
    availability: AVAILABILITY,
    icon: "PackageCheck",
    featured: true,
  },
  {
    slug: "premium-buffalo-meat",
    name: "Premium Buffalo Meat",
    category: "Meat",
    tagline: "Halal buffalo meat to export quality standards",
    description:
      "Carefully selected, veterinary-inspected buffalo processed in our modern halal facility and prepared for export buyers who require consistent lean meat quality.",
    cuts: ["Boneless", "Primal cuts", "Customized cuts"],
    packaging: ["Vacuum packed", "Food grade plastic", "Carton boxes"],
    state: "Both",
    moq: MOQ_TBC,
    availability: AVAILABILITY,
    icon: "Beef",
    featured: true,
  },
  {
    slug: "boneless-beef",
    name: "Boneless Beef",
    category: "Meat",
    tagline: "Clean boneless blocks ready for processing",
    description:
      "Hygienically deboned beef blocks prepared for processors, distributors and institutional buyers, with traceable handling and temperature-controlled storage.",
    cuts: ["Lean blocks", "Fat-trimmed blocks", "Specified lean ratios on request"],
    packaging: ["Vacuum packed", "Carton boxes"],
    state: "Both",
    moq: MOQ_TBC,
    availability: AVAILABILITY,
    icon: "Scissors",
    featured: true,
  },
  {
    slug: "customized-meat-cuts",
    name: "Customized Meat Cuts",
    category: "Value-Added",
    tagline: "Cuts portioned to your specification",
    description:
      "Cutting, portioning and trim to buyer specification — share your spec sheet and we prepare the product to your market's requirements before packing and loading.",
    cuts: ["Retail portions", "Food-service cuts", "Spec-based portioning"],
    packaging: ["Vacuum packed", "Custom weight packaging", "Retail-ready on request"],
    state: "Both",
    moq: MOQ_TBC,
    availability: AVAILABILITY,
    icon: "ChefHat",
  },
  {
    slug: "vacuum-packed-meat",
    name: "Vacuum Packed Meat",
    category: "Value-Added",
    tagline: "Sealed for freshness and longer shelf life",
    description:
      "Food grade vacuum sealing that protects product freshness, hygiene and colour throughout the cold chain, with weight labels prepared for your market.",
    cuts: ["Any cut from the catalog"],
    packaging: ["Vacuum pouch", "Carton over-pack", "Custom weight labelling"],
    state: "Both",
    moq: MOQ_TBC,
    availability: AVAILABILITY,
    icon: "Layers",
  },
  {
    slug: "bulk-export-orders",
    name: "Bulk Export Orders",
    category: "Services",
    tagline: "Container-scale volumes for importers and distributors",
    description:
      "Full-container and consolidated volumes for importers, wholesalers and distributors, coordinated end to end from production scheduling to container loading.",
    cuts: ["Mixed or single-cut loads"],
    packaging: ["Bulk export packaging", "Container loading"],
    state: "Both",
    moq: MOQ_TBC,
    availability: AVAILABILITY,
    icon: "Container",
  },
  {
    slug: "cold-chain-logistics",
    name: "Cold Chain Logistics",
    category: "Services",
    tagline: "Temperature-controlled from cold storage to delivery",
    description:
      "Temperature-controlled cold storage, refrigerated transportation and container loading that keep the product within its required temperature band for the whole journey.",
    cuts: ["Not applicable"],
    packaging: ["Reefer container loading", "Refrigerated transport"],
    state: "Not applicable",
    moq: "Included with export orders",
    availability: "Available with every export shipment",
    icon: "ThermometerSnowflake",
  },
  {
    slug: "export-documentation",
    name: "Complete Export Documentation",
    category: "Services",
    tagline: "Paperwork handled for smooth customs clearance",
    description:
      "Complete export documentation prepared with every shipment so your consignment clears customs smoothly — document list to be confirmed with your order.",
    cuts: ["Not applicable"],
    packaging: ["Not applicable"],
    state: "Not applicable",
    moq: "Included with export orders",
    availability: "Available with every export shipment",
    icon: "FileCheck2",
  },
];

export const PRODUCT_CATEGORIES: ProductCategory[] = ["Meat", "Value-Added", "Services"];
export const PRODUCT_STATES: StorageState[] = ["Fresh Chilled", "Frozen", "Both"];
