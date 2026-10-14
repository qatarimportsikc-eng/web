/** Gallery categories. Each item renders a designed placeholder until real photos are supplied. */

export interface GalleryItem {
  id: string;
  caption: string;
}

export interface GalleryCategory {
  slug: string;
  name: string;
  description: string;
  icon: string;
  items: GalleryItem[];
}

export const GALLERY: GalleryCategory[] = [
  {
    slug: "factory",
    name: "Factory",
    description: "Overview of our processing facility.",
    icon: "Factory",
    items: [
      { id: "factory-1", caption: "Processing hall — photo placeholder" },
      { id: "factory-2", caption: "Facility exterior — photo placeholder" },
      { id: "factory-3", caption: "Cutting room — photo placeholder" },
    ],
  },
  {
    slug: "livestock",
    name: "Livestock",
    description: "Veterinary-inspected, healthy livestock.",
    icon: "Beef",
    items: [
      { id: "livestock-1", caption: "Livestock sourcing — photo placeholder" },
      { id: "livestock-2", caption: "Pre-slaughter inspection — photo placeholder" },
    ],
  },
  {
    slug: "processing",
    name: "Processing",
    description: "Hygienic halal processing and cutting.",
    icon: "Scissors",
    items: [
      { id: "processing-1", caption: "Halal processing line — photo placeholder" },
      { id: "processing-2", caption: "Deboning — photo placeholder" },
      { id: "processing-3", caption: "Portioning — photo placeholder" },
    ],
  },
  {
    slug: "packaging",
    name: "Packaging",
    description: "Vacuum sealing and food grade packing.",
    icon: "PackageCheck",
    items: [
      { id: "packaging-1", caption: "Vacuum sealing — photo placeholder" },
      { id: "packaging-2", caption: "Carton over-packing — photo placeholder" },
    ],
  },
  {
    slug: "cold-storage",
    name: "Cold Storage",
    description: "Temperature-controlled holding rooms.",
    icon: "ThermometerSnowflake",
    items: [
      { id: "cold-storage-1", caption: "Chilled room — photo placeholder" },
      { id: "cold-storage-2", caption: "Frozen room — photo placeholder" },
    ],
  },
  {
    slug: "containers",
    name: "Containers",
    description: "Reefer containers prepared for export.",
    icon: "Container",
    items: [
      { id: "containers-1", caption: "Reefer container — photo placeholder" },
      { id: "containers-2", caption: "Temperature verification — photo placeholder" },
    ],
  },
  {
    slug: "loading",
    name: "Loading",
    description: "Container loading for international export.",
    icon: "Truck",
    items: [
      { id: "loading-1", caption: "Loading bay — photo placeholder" },
      { id: "loading-2", caption: "Stowing pallets — photo placeholder" },
    ],
  },
  {
    slug: "meat-cuts",
    name: "Meat Cuts",
    description: "Premium cuts from our catalog.",
    icon: "Beef",
    items: [
      { id: "cuts-1", caption: "Ribeye — photo placeholder" },
      { id: "cuts-2", caption: "Brisket — photo placeholder" },
      { id: "cuts-3", caption: "Tenderloin — photo placeholder" },
    ],
  },
  {
    slug: "warehouse",
    name: "Warehouse",
    description: "Packed goods ready for dispatch.",
    icon: "Warehouse",
    items: [
      { id: "warehouse-1", caption: "Finished goods area — photo placeholder" },
      { id: "warehouse-2", caption: "Dispatch staging — photo placeholder" },
    ],
  },
  {
    slug: "export-process",
    name: "Export Process",
    description: "Documentation and shipment stages.",
    icon: "Ship",
    items: [
      { id: "export-1", caption: "Documentation desk — photo placeholder" },
      { id: "export-2", caption: "Port departure — photo placeholder" },
    ],
  },
];
