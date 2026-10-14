/**
 * Testimonials.
 *
 * IMPORTANT: Every entry below is a SAMPLE review used as a clearly labelled
 * placeholder until real customer reviews are collected. They are not claims
 * about actual customers.
 */

export type ReviewerType =
  | "Importer"
  | "Restaurant"
  | "Hotel"
  | "Distributor"
  | "Wholesale Buyer"
  | "Corporate Buyer";

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  type: ReviewerType;
  rating: 5;
  isSample: true;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Sample review — placeholder. Consistent quality and clear documentation made the ordering process straightforward for our import team.",
    name: "Sample Importer",
    role: "Import Manager, GCC (sample)",
    type: "Importer",
    rating: 5,
    isSample: true,
  },
  {
    id: "t2",
    quote:
      "Sample review — placeholder. Cuts arrived well presented and portioned the way our kitchen requested.",
    name: "Sample Restaurant Owner",
    role: "Restaurant Owner, Doha (sample)",
    type: "Restaurant",
    rating: 5,
    isSample: true,
  },
  {
    id: "t3",
    quote:
      "Sample review — placeholder. Reliable chilled delivery windows help us plan our banquet menus with confidence.",
    name: "Sample Executive Chef",
    role: "Executive Chef, Hotel (sample)",
    type: "Hotel",
    rating: 5,
    isSample: true,
  },
  {
    id: "t4",
    quote:
      "Sample review — placeholder. Packing and labelling were retail-ready, which saved our team time in the warehouse.",
    name: "Sample Distributor",
    role: "Distribution Supervisor (sample)",
    type: "Distributor",
    rating: 5,
    isSample: true,
  },
  {
    id: "t5",
    quote:
      "Sample review — placeholder. Bulk volumes were delivered as scheduled across repeated orders.",
    name: "Sample Wholesale Buyer",
    role: "Wholesale Buyer (sample)",
    type: "Wholesale Buyer",
    rating: 5,
    isSample: true,
  },
  {
    id: "t6",
    quote:
      "Sample review — placeholder. A responsive team that answers questions about specifications quickly.",
    name: "Sample Corporate Buyer",
    role: "Procurement Lead, Institutional Buyer (sample)",
    type: "Corporate Buyer",
    rating: 5,
    isSample: true,
  },
];

export const REVIEW_RATING = 5.0;

/** Static rating breakdown — placeholder figures until real reviews exist. */
export const RATING_BREAKDOWN = [
  { stars: 5, percent: 100 },
  { stars: 4, percent: 0 },
  { stars: 3, percent: 0 },
  { stars: 2, percent: 0 },
  { stars: 1, percent: 0 },
];
