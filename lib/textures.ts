export type TextureSlug = "straight" | "wavy" | "curly";

export const textureGuides: Record<
  TextureSlug,
  {
    name: string;
    eyebrow: string;
    description: string;
    image: string;
    notes: string[];
  }
> = {
  straight: {
    name: "Straight",
    eyebrow: "Sleek · Silky · Soft",
    description:
      "Clean, polished units with a soft hand-feel — perfect for everyday sleek looks and soft glam.",
    image: "/images/texture-straight.jpg",
    notes: [
      "Best for middle parts and sleek ponytails",
      "Holds heat styling gently when cared for",
      "Pairs well with HD and 13×4 lace",
    ],
  },
  wavy: {
    name: "Wavy",
    eyebrow: "Body wave · Natural fall",
    description:
      "Soft body movement with natural bounce — the Mel’s go-to for effortless everyday glam.",
    image: "/images/texture-wavy.jpg",
    notes: [
      "Looks lived-in with light moisture",
      "Easy to wear loose or half-up",
      "Available in lace and glueless options",
    ],
  },
  curly: {
    name: "Curly",
    eyebrow: "Defined · Full · Soft spring",
    description:
      "Defined coils and soft springs with volume that still feels lightweight on the head.",
    image: "/images/texture-curly.jpg",
    notes: [
      "Refresh with light mist and scrunch",
      "Beautiful for wash-and-go styling",
      "Choose glueless for quick installs",
    ],
  },
};

export const textureList = Object.entries(textureGuides).map(([slug, data]) => ({
  slug: slug as TextureSlug,
  ...data,
}));
