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
};

export const productSlides: ProductSlide[] = [
  {
    slug: "broiler-feeds",
    eyebrow: "Broiler Feeds",
    title: "Broiler Starter",
    description:
      "Stage-matched pre-starter, starter, grower and finisher feeds for stronger early growth and dependable market readiness.",
    image:
      "https://images.unsplash.com/photo-1569096651661-820d0de8b4ab?auto=format&fit=crop&w=1400&q=80",
    alt: "Broiler chickens on a Malawian farm",
  },
  {
    slug: "layer-feeds",
    eyebrow: "Layer Feeds",
    title: "Layer 106",
    description:
      "Pullet grower and layer formulas built around the laying cycle — supporting body development before lay and consistent production.",
    image:
      "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1400&q=80",
    alt: "Layer hens feeding on grain",
  },
  {
    slug: "breeder-feeds",
    eyebrow: "Breeder Feeds",
    title: "Breeder Mash",
    description:
      "Mash, crumbles, and pellets matched to flock age — a controlled feed program that grows with your breeder birds.",
    image:
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1400&q=80",
    alt: "Free range hens in a farm yard",
  },
  {
    slug: "cattle-feeds",
    eyebrow: "Cattle Feeds",
    title: "Cattle Concentrate",
    description:
      "Protein-rich cattle feed with minerals, vitamins, and feed-protection support for daily farm routines.",
    image:
      "https://images.unsplash.com/photo-1605021154890-cefbc0b8ff44?auto=format&fit=crop&w=1400&q=80",
    alt: "Cattle grazing in pasture",
  },
];

export const aboutImage =
  "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1400&q=80";

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
  },
  {
    name: "Blantyre Depot",
    region: "Southern Region",
    detail: "Direct distribution for Southern Malawi growers",
  },
  {
    name: "Mzuzu Depot",
    region: "Northern Region",
    detail: "Regional supply for Northern Malawi farms",
  },
];
