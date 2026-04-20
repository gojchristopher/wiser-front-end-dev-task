export type Job = {
  id: string;
  title: string;
  team: string;
  brand: string;
  location: string;
  link: string;
};

export const mockJobs = [
  {
    id: "job-001",
    title: "Team Member (Stock) – Luton Retail Park",
    team: "Retail",
    brand: "NEXT",
    location: "Luton, Bedfordshire",
    link: "/jobs/team-member-stock-luton",
  },
  {
    id: "job-002",
    title: "Sales Associate – Victoria's Secret",
    team: "Retail",
    brand: "Victoria’s Secret",
    location: "Plymouth, Devon",
    link: "/jobs/sales-associate-vs-plymouth",
  },
  {
    id: "job-003",
    title: "Assistant Buyer",
    team: "Product",
    brand: "JOULES",
    location: "Leicester, Leicestershire",
    link: "/jobs/assistant-buyer-joules",
  },
  {
    id: "job-004",
    title: "eCommerce Trading Manager – Gap & FatFace (12 Month FTC)",
    team: "Business Operations",
    brand: "GAP",
    location: "Trafford, Lancashire",
    link: "/jobs/ecommerce-trading-manager-gap",
  },
  {
    id: "job-005",
    title: "Assistant Merchandiser – Home Textiles",
    team: "Product",
    brand: "NEXT",
    location: "Tottenham Court Road, London",
    link: "/jobs/assistant-merchandiser-home-textiles",
  },
  {
    id: "job-006",
    title: "Assistant Merchandiser",
    team: "Product",
    brand: "LIPSY",
    location: "London, London",
    link: "/jobs/assistant-merchandiser-lipsy",
  },
  {
    id: "job-007",
    title: "Operations Manager – Infrastructure & Cloud Services",
    team: "Tech",
    brand: "NEXT",
    location: "Colombo, Sri Lanka",
    link: "/jobs/operations-manager-cloud",
  },
  {
    id: "job-008",
    title: "Assistant Merchandiser",
    team: "Retail",
    brand: "Cath Kidston",
    location: "London, London",
    link: "/jobs/assistant-merchandiser-cath-kidston",
  },
  {
    id: "job-009",
    title: "Joules Assistant Merchandiser – Menswear",
    team: "Product",
    brand: "JOULES",
    location: "Market Harborough, Leicestershire",
    link: "/jobs/assistant-merchandiser-joules-menswear",
  },
  {
    id: "job-010",
    title: "Product Manager",
    team: "Product",
    brand: "MADE",
    location: "London, London",
    link: "/jobs/product-manager-made",
  },
];
