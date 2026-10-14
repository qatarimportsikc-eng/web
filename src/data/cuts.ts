/** Premium halal beef cuts catalog. */

export type CutGroup = "Loin & Rib" | "Chuck & Shoulder" | "Leg & Round" | "Plate, Flank & Shank" | "Neck & Other";

export interface MeatCut {
  slug: string;
  name: string;
  group: CutGroup;
  description: string;
  recommendedUse: string;
  exportAvailability: string;
  packaging: string;
}

const AVAIL = "Available for export — confirm current stock at inquiry";
const PACK = "Vacuum packed / food grade carton, as required";

export const CUTS: MeatCut[] = [
  {
    slug: "tenderloin",
    name: "Tenderloin",
    group: "Loin & Rib",
    description:
      "The most tender muscle of the animal, running along the spine. Fine-grained, lean and delicate.",
    recommendedUse: "Premium steaks, fine dining menus, pan-searing and grilling",
    exportAvailability: AVAIL,
    packaging: PACK,
  },
  {
    slug: "striploin",
    name: "Striploin",
    group: "Loin & Rib",
    description:
      "A classic loin cut with a firm bite and balanced marbling along the outer edge.",
    recommendedUse: "Steaks, grilling, hotel and restaurant service",
    exportAvailability: AVAIL,
    packaging: PACK,
  },
  {
    slug: "cube-roll",
    name: "Cube Roll",
    group: "Loin & Rib",
    description:
      "Boneless ribeye muscle taken from the rib section, known for rich marbling and flavour.",
    recommendedUse: "Ribeye steaks, roasting, premium retail packs",
    exportAvailability: AVAIL,
    packaging: PACK,
  },
  {
    slug: "ribeye",
    name: "Ribeye",
    group: "Loin & Rib",
    description:
      "Well-marbled cut from the rib section with generous fat coverage and deep beef flavour.",
    recommendedUse: "Grilling, steaks, signature restaurant dishes",
    exportAvailability: AVAIL,
    packaging: PACK,
  },
  {
    slug: "brisket",
    name: "Brisket",
    group: "Plate, Flank & Shank",
    description:
      "A hard-working chest muscle with connective tissue that becomes tender with slow cooking.",
    recommendedUse: "Slow roasting, braising, smoking and BBQ",
    exportAvailability: AVAIL,
    packaging: PACK,
  },
  {
    slug: "chuck",
    name: "Chuck",
    group: "Chuck & Shoulder",
    description:
      "Shoulder-area primal with good flavour and moderate marbling, versatile across cuisines.",
    recommendedUse: "Stews, ground beef, roasts and curries",
    exportAvailability: AVAIL,
    packaging: PACK,
  },
  {
    slug: "shank",
    name: "Shank",
    group: "Plate, Flank & Shank",
    description:
      "Leg muscle rich in collagen, ideal for long, moist cooking methods.",
    recommendedUse: "Braising, stocks, shank roasts and bone-in dishes",
    exportAvailability: AVAIL,
    packaging: PACK,
  },
  {
    slug: "knuckle",
    name: "Knuckle",
    group: "Leg & Round",
    description:
      "Lean round-section muscle with a uniform shape that portions cleanly.",
    recommendedUse: "Lean steaks, roasts, slicing and processing",
    exportAvailability: AVAIL,
    packaging: PACK,
  },
  {
    slug: "topside",
    name: "Topside",
    group: "Leg & Round",
    description:
      "Inner leg cut that is lean and tender when sliced against the grain.",
    recommendedUse: "Roasting, thin-sliced dishes, retail portions",
    exportAvailability: AVAIL,
    packaging: PACK,
  },
  {
    slug: "silverside",
    name: "Silverside",
    group: "Leg & Round",
    description:
      "Outer leg cut with a silvery connective sheet, lean and even in grain.",
    recommendedUse: "Roasting, corned-style preparations, slicing",
    exportAvailability: AVAIL,
    packaging: PACK,
  },
  {
    slug: "flank",
    name: "Flank",
    group: "Plate, Flank & Shank",
    description:
      "Flat, fibrous abdominal muscle with pronounced grain and beefy flavour.",
    recommendedUse: "Grilling, fajita-style slicing, stir-fry",
    exportAvailability: AVAIL,
    packaging: PACK,
  },
  {
    slug: "round",
    name: "Round",
    group: "Leg & Round",
    description:
      "Large lean primal from the hindquarter that yields consistent, uniform cuts.",
    recommendedUse: "Roasts, deli slicing, processed products",
    exportAvailability: AVAIL,
    packaging: PACK,
  },
  {
    slug: "short-ribs",
    name: "Short Ribs",
    group: "Plate, Flank & Shank",
    description:
      "Rib sections cut across the bone with layers of meat and fat for rich flavour.",
    recommendedUse: "Braising, slow cooking, barbecue and stews",
    exportAvailability: AVAIL,
    packaging: PACK,
  },
  {
    slug: "neck",
    name: "Neck",
    group: "Neck & Other",
    description:
      "Muscular, flavourful cut with connective tissue that suits patient cooking.",
    recommendedUse: "Braising, minced products, stocks and curries",
    exportAvailability: AVAIL,
    packaging: PACK,
  },
  {
    slug: "sirloin",
    name: "Sirloin",
    group: "Loin & Rib",
    description:
      "Balanced loin cut prized for tenderness and a mild, refined beef taste.",
    recommendedUse: "Steaks, roasting, premium retail and food service",
    exportAvailability: AVAIL,
    packaging: PACK,
  },
  {
    slug: "brisket-point",
    name: "Brisket Point",
    group: "Plate, Flank & Shank",
    description:
      "Fattier tip section of the brisket with richer flavour and more moisture.",
    recommendedUse: "Smoking, slow roasting, pulled preparations",
    exportAvailability: AVAIL,
    packaging: PACK,
  },
];

export const CUT_GROUPS: CutGroup[] = [
  "Loin & Rib",
  "Chuck & Shoulder",
  "Leg & Round",
  "Plate, Flank & Shank",
  "Neck & Other",
];
