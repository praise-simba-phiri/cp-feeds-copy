export type ProductSlide = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export type Stat = {
  label: string;
  value: string;
  icon: "users" | "star" | "package" | "truck";
};

export type ValueItem = {
  number: string;
  title: string;
  description: string;
};

export type Depot = {
  name: string;
  region: string;
  detail: string;
  lat: number;
  lng: number;
};

export const productSlides: ProductSlide[] = [
  {
    slug: "broiler-finisher",
    eyebrow: "Chicken Feed",
    title: "Broiler Finisher 50Kg",
    description:
      "Stage-matched finisher feed for stronger growth and dependable market readiness.",
    image: "/cp-bag.png",
    alt: "CP Feeds Broiler Finisher 50kg bag",
  },
  {
    slug: "layer-mash",
    eyebrow: "Layer Feeds",
    title: "Layer Mash 50Kg",
    description:
      "Pullet grower and layer formulas built around the laying cycle for consistent production.",
    image: "/cp-bag.png",
    alt: "CP Feeds Layer Mash 50kg bag",
  },
  {
    slug: "breeder-mash",
    eyebrow: "Breeder Feeds",
    title: "Breeder Mash 50Kg",
    description:
      "Mash, crumbles, and pellets matched to flock age — a controlled program for breeder birds.",
    image: "/cp-bag.png",
    alt: "CP Feeds Breeder Mash 50kg bag",
  },
  {
    slug: "cattle-concentrate",
    eyebrow: "Cattle Feeds",
    title: "Cattle Concentrate 50Kg",
    description:
      "Protein-rich cattle feed with minerals, vitamins, and feed-protection support.",
    image: "/cp-bag.png",
    alt: "CP Feeds Cattle Concentrate 50kg bag",
  },
];

export const aboutImage =
  "/assets/person-hero.png";

export const impactStats: Stat[] = [
  { label: "Farmers Served", value: "+600", icon: "users" },
  { label: "Happy Customers", value: "+700", icon: "star" },
  { label: "Daily Orders", value: "+300", icon: "package" },
  { label: "Bags Delivered", value: "+500", icon: "truck" },
];

export const coreValues: ValueItem[] = [
  {
    number: "01",
    title: "Quality",
    description:
      "Every feed is formulated to support healthy growth, strong output, and customer confidence on every farm.",
  },
  {
    number: "02",
    title: "Care",
    description:
      "We care about the animals, farmers, families, and businesses that depend on our feed each day.",
  },
  {
    number: "03",
    title: "Reliability",
    description:
      "Available when farmers need us — steady supply, clear product guidance, and direct sales support.",
  },
  {
    number: "04",
    title: "Growth",
    description:
      "From smallholder farms to larger operations, our feed range scales with your production goals.",
  },
];

export const depots: Depot[] = [
  {
    name: "Lilongwe Depot",
    region: "Central Region",
    detail: "Dudu Estates · Primary manufacturing and sales base",
    lat: -13.9626,
    lng: 33.7741,
  },
  {
    name: "Blantyre Depot",
    region: "Southern Region",
    detail: "Direct distribution for Southern Malawi growers",
    lat: -15.7861,
    lng: 35.0058,
  },
  {
    name: "Mzuzu Depot",
    region: "Northern Region",
    detail: "Regional supply for Northern Malawi farms",
    lat: -11.4596,
    lng: 34.0151,
  },
];

export const malawiBounds: [[number, number], [number, number]] = [
  [-17.2, 32.5],
  [-9.2, 36.2],
];

export const malawiCenter: [number, number] = [-13.4, 34.3];
