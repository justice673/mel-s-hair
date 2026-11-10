export type Texture = "Straight" | "Wavy" | "Curly";
export type Length = "Short" | "Medium" | "Long";
export type LaceType = "13×4" | "13×6" | "HD lace" | "Glueless";

export type Product = {
  id: string;
  name: string;
  slug: string;
  detail: string;
  price: number;
  texture: Texture;
  length: Length;
  lace: LaceType;
  isNew?: boolean;
  isBestSeller?: boolean;
  /** Units available — 0 means out of stock */
  stock: number;
  image: string;
  /** Extra gallery shots; primary `image` is always first when rendered */
  images?: string[];
};

/** Prices in Central African CFA franc (XAF / FCFA) for Cameroon */
export const products: Product[] = [
  {
    id: "1",
    name: "Espresso Body Wave",
    slug: "espresso-body-wave",
    detail: '13×4 lace · 22"',
    price: 112000,
    texture: "Wavy",
    length: "Long",
    lace: "13×4",
    isBestSeller: true,
    stock: 6,
    image: "/images/product-1.jpg",
    images: [
      "/images/product-1.jpg",
      "/images/texture-wavy.jpg",
      "/images/hero-wig.jpg",
      "/images/sale-banner.jpg",
    ],
  },
  {
    id: "2",
    name: "Soft Glam Bob",
    slug: "soft-glam-bob",
    detail: 'HD lace · 12"',
    price: 85000,
    texture: "Wavy",
    length: "Short",
    lace: "HD lace",
    isBestSeller: true,
    stock: 3,
    image: "/images/product-2.jpg",
    images: [
      "/images/product-2.jpg",
      "/images/arrival-2.jpg",
      "/images/confidence.jpg",
    ],
  },
  {
    id: "3",
    name: "Honey Balayage Wave",
    slug: "honey-balayage-wave",
    detail: '13×6 lace · 24"',
    price: 128000,
    texture: "Wavy",
    length: "Long",
    lace: "13×6",
    isBestSeller: true,
    stock: 0,
    image: "/images/product-3.jpg",
    images: [
      "/images/product-3.jpg",
      "/images/arrival-1.jpg",
      "/images/brand-story.jpg",
      "/images/texture-wavy.jpg",
    ],
  },
  {
    id: "4",
    name: "Cocoa Soft Curl",
    slug: "cocoa-soft-curl",
    detail: 'Glueless · 18"',
    price: 101000,
    texture: "Curly",
    length: "Medium",
    lace: "Glueless",
    isBestSeller: true,
    stock: 8,
    image: "/images/product-4.jpg",
    images: [
      "/images/product-4.jpg",
      "/images/texture-curly.jpg",
      "/images/arrival-3.jpg",
    ],
  },
  {
    id: "5",
    name: "Midnight Silk Straight",
    slug: "midnight-silk-straight",
    detail: '13×4 HD lace · 20"',
    price: 119000,
    texture: "Straight",
    length: "Long",
    lace: "13×4",
    isNew: true,
    stock: 2,
    image: "/images/arrival-1.jpg",
    images: [
      "/images/arrival-1.jpg",
      "/images/texture-straight.jpg",
      "/images/product-3.jpg",
    ],
  },
  {
    id: "6",
    name: "Caramel Layered Wave",
    slug: "caramel-layered-wave",
    detail: 'Glueless · 14"',
    price: 94000,
    texture: "Wavy",
    length: "Medium",
    lace: "Glueless",
    isNew: true,
    stock: 5,
    image: "/images/arrival-2.jpg",
  },
  {
    id: "7",
    name: "Kinky Soft Coil",
    slug: "kinky-soft-coil",
    detail: '13×6 lace · 16"',
    price: 104000,
    texture: "Curly",
    length: "Medium",
    lace: "13×6",
    isNew: true,
    stock: 0,
    image: "/images/arrival-3.jpg",
    images: [
      "/images/arrival-3.jpg",
      "/images/product-4.jpg",
      "/images/texture-curly.jpg",
      "/images/confidence.jpg",
    ],
  },
  {
    id: "8",
    name: "Espresso Middle Part",
    slug: "espresso-middle-part",
    detail: 'HD lace · 22"',
    price: 115000,
    texture: "Straight",
    length: "Long",
    lace: "HD lace",
    isNew: true,
    stock: 4,
    image: "/images/arrival-4.jpg",
  },
  {
    id: "9",
    name: "Pearl Blonde Bob",
    slug: "pearl-blonde-bob",
    detail: 'HD lace · 12"',
    price: 98000,
    texture: "Straight",
    length: "Short",
    lace: "HD lace",
    stock: 1,
    image: "/images/product-2.jpg",
  },
  {
    id: "10",
    name: "Auburn Soft Wave",
    slug: "auburn-soft-wave",
    detail: '13×4 lace · 20"',
    price: 121000,
    texture: "Wavy",
    length: "Long",
    lace: "13×4",
    stock: 7,
    image: "/images/sale-banner.jpg",
  },
  {
    id: "11",
    name: "Natural Coil Unit",
    slug: "natural-coil-unit",
    detail: 'Glueless · 16"',
    price: 96000,
    texture: "Curly",
    length: "Medium",
    lace: "Glueless",
    stock: 0,
    image: "/images/arrival-3.jpg",
  },
  {
    id: "12",
    name: "Jet Silk Closure",
    slug: "jet-silk-closure",
    detail: '13×6 lace · 18"',
    price: 108000,
    texture: "Straight",
    length: "Medium",
    lace: "13×6",
    stock: 5,
    image: "/images/texture-straight.jpg",
  },
  {
    id: "13",
    name: "Champagne Body Wave",
    slug: "champagne-body-wave",
    detail: '13×4 lace · 24"',
    price: 132000,
    texture: "Wavy",
    length: "Long",
    lace: "13×4",
    isBestSeller: true,
    stock: 4,
    image: "/images/product-1.jpg",
  },
  {
    id: "14",
    name: "Soft Pixie Glam",
    slug: "soft-pixie-glam",
    detail: 'HD lace · 10"',
    price: 78000,
    texture: "Wavy",
    length: "Short",
    lace: "HD lace",
    stock: 2,
    image: "/images/arrival-2.jpg",
  },
  {
    id: "15",
    name: "Deep Wave Luxe",
    slug: "deep-wave-luxe",
    detail: '13×6 lace · 22"',
    price: 125000,
    texture: "Curly",
    length: "Long",
    lace: "13×6",
    stock: 6,
    image: "/images/texture-curly.jpg",
  },
  {
    id: "16",
    name: "Cocoa Glueless Bob",
    slug: "cocoa-glueless-bob",
    detail: 'Glueless · 12"',
    price: 82000,
    texture: "Straight",
    length: "Short",
    lace: "Glueless",
    isNew: true,
    stock: 3,
    image: "/images/arrival-4.jpg",
  },
];

export function formatPrice(price: number) {
  return new Intl.NumberFormat("fr-CM", {
    style: "currency",
    currency: "XAF",
    currencyDisplay: "code",
    maximumFractionDigits: 0,
  })
    .format(price)
    .replace("XAF", "FCFA");
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function isInStock(product: Product) {
  return product.stock > 0;
}

export function getStockLabel(product: Product) {
  if (product.stock <= 0) return "Out of stock";
  if (product.stock <= 3) return `Only ${product.stock} left`;
  return "In stock";
}

export function getProductImages(product: Product) {
  const gallery = product.images?.length ? product.images : [product.image];
  return [...new Set([product.image, ...gallery])];
}

export function getRelatedProducts(product: Product, limit = 4) {
  return products
    .filter(
      (entry) =>
        entry.id !== product.id &&
        (entry.texture === product.texture || entry.lace === product.lace),
    )
    .slice(0, limit);
}
