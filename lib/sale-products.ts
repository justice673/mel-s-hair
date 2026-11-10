export type SaleProduct = {
  id: string;
  name: string;
  slug: string;
  detail: string;
  image: string;
  originalPrice: number;
  salePrice: number;
  discountLabel: string;
  tagline: string;
};

/** Sale prices in FCFA (Cameroon) */
export const saleProducts: SaleProduct[] = [
  {
    id: "sale-1",
    name: "Espresso Body Wave",
    slug: "espresso-body-wave",
    detail: '13×4 lace · 22"',
    image: "/images/product-1.jpg",
    originalPrice: 112000,
    salePrice: 78000,
    discountLabel: "30% off",
    tagline:
      "Soft density body wave — melt-ready lace, limited soft-launch pricing.",
  },
  {
    id: "sale-2",
    name: "Honey Balayage Wave",
    slug: "honey-balayage-wave",
    detail: '13×6 lace · 24"',
    image: "/images/product-3.jpg",
    originalPrice: 128000,
    salePrice: 89000,
    discountLabel: "30% off",
    tagline:
      "Sun-kissed length with a deeper lace — while the flip clock is ticking.",
  },
  {
    id: "sale-3",
    name: "Soft Glam Bob",
    slug: "soft-glam-bob",
    detail: 'HD lace · 12"',
    image: "/images/product-2.jpg",
    originalPrice: 85000,
    salePrice: 59000,
    discountLabel: "30% off",
    tagline:
      "Everyday bob energy at a soft-launch price — easy install, clean finish.",
  },
  {
    id: "sale-4",
    name: "Midnight Silk Straight",
    slug: "midnight-silk-straight",
    detail: '13×4 HD lace · 20"',
    image: "/images/arrival-1.jpg",
    originalPrice: 119000,
    salePrice: 77000,
    discountLabel: "35% off",
    tagline:
      "Sleek straight silk with HD lace — deepest cut of the soft launch.",
  },
  {
    id: "sale-5",
    name: "Cocoa Soft Curl",
    slug: "cocoa-soft-curl",
    detail: 'Glueless · 18"',
    image: "/images/product-4.jpg",
    originalPrice: 101000,
    salePrice: 71000,
    discountLabel: "30% off",
    tagline:
      "Defined soft curls, glueless ready — made for quick glam nights.",
  },
];
