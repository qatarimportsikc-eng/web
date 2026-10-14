/** FAQ entries. Answers are honest placeholders where the company profile has no detail. */

export interface Faq {
  id: string;
  question: string;
  answer: string;
  isPlaceholder?: boolean;
}

export const FAQS: Faq[] = [
  {
    id: "moq",
    question: "What is the minimum order quantity (MOQ)?",
    answer:
      "MOQ depends on the product, packing and destination. Placeholder: the exact MOQ per product will be confirmed by our sales team — contact us with your specification and we will confirm the minimum order quantity with your quotation.",
    isPlaceholder: true,
  },
  {
    id: "delivery-time",
    question: "How long does delivery take?",
    answer:
      "Placeholder: production and transit time depends on order volume, destination port and vessel schedule. Typical lead times will be stated in your quotation once we have your product list and destination.",
    isPlaceholder: true,
  },
  {
    id: "halal-certification",
    question: "Is the beef halal certified?",
    answer:
      "Yes — 100% halal slaughter is a core quality standard of Imran Khan & Co., supported by veterinary inspection of all livestock. Placeholder: specific certification bodies and certificate copies will be provided with your inquiry.",
    isPlaceholder: true,
  },
  {
    id: "packaging",
    question: "What packaging options are available?",
    answer:
      "We offer vacuum packing, food grade plastic, carton boxes, custom weight packaging and bulk export packaging. See the Packaging page for the full range and specification matrix.",
  },
  {
    id: "shipping",
    question: "How is shipping handled?",
    answer:
      "Shipments move under temperature-controlled cold chain management: refrigerated transport from our facility, container loading into reefer containers, then export shipping to Qatar and GCC destinations. Complete export documentation is prepared with every shipment.",
  },
  {
    id: "frozen-vs-fresh",
    question: "What is the difference between frozen and fresh chilled beef?",
    answer:
      "Fresh chilled beef is held at chilled temperatures for shorter shelf life and immediate use, while frozen beef is deep-frozen for longer storage and long-haul transport. Both are produced under the same halal and hygiene standards. Placeholder: exact shelf life and temperature figures to be confirmed.",
    isPlaceholder: true,
  },
  {
    id: "export-documents",
    question: "Which export documents are provided?",
    answer:
      "Complete export documentation is part of our service. Placeholder: the exact document list (health certificates, certificates of origin, lab reports and others) will be confirmed for your destination with your quotation.",
    isPlaceholder: true,
  },
  {
    id: "payment-terms",
    question: "What are your payment terms?",
    answer:
      "Placeholder: payment terms are agreed per order and stated in the quotation. Contact us to discuss terms for your first shipment.",
    isPlaceholder: true,
  },
  {
    id: "custom-orders",
    question: "Can you handle custom orders?",
    answer:
      "Yes. Customized meat cuts, custom weight packaging and buyer-specified preparation are part of our offering. Share your specification and we will prepare the order accordingly.",
  },
];
