import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PiArrowUpRightLight } from "react-icons/pi";
import PageShell from "@/components/PageShell";
import ProductCard from "@/components/shop/ProductCard";
import { products } from "@/lib/products";
import {
  textureGuides,
  type TextureSlug,
} from "@/lib/textures";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const slugs = Object.keys(textureGuides) as TextureSlug[];

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const texture = textureGuides[slug as TextureSlug];
  if (!texture) return { title: "Texture | Mel's Lux Hairs" };
  return {
    title: `${texture.name} Wigs | Mel's Lux Hairs`,
    description: texture.description,
  };
}

export default async function TextureDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const texture = textureGuides[slug as TextureSlug];
  if (!texture) notFound();

  const matched = products.filter(
    (product) => product.texture.toLowerCase() === texture.name.toLowerCase(),
  );

  return (
    <PageShell>
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-20">
        <div className="relative aspect-[4/5] overflow-hidden bg-blush">
          <Image
            src={texture.image}
            alt={`${texture.name} wig texture`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="max-w-lg">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-champagne-deep">
            {texture.eyebrow}
          </p>
          <h1 className="mt-4 font-heading text-[clamp(2.6rem,5vw,4rem)] font-medium leading-[0.95] tracking-[-0.02em] text-cocoa">
            {texture.name}
          </h1>
          <p className="mt-6 text-[1.05rem] font-light leading-relaxed text-cocoa-soft">
            {texture.description}
          </p>

          <ul className="mt-8 space-y-3 border-t border-line pt-8">
            {texture.notes.map((note) => (
              <li
                key={note}
                className="text-[0.95rem] font-light text-cocoa-muted"
              >
                {note}
              </li>
            ))}
          </ul>

          <Link
            href="/shop"
            className="mt-10 inline-flex items-center gap-2.5 bg-cocoa px-6 py-3.5 text-[0.74rem] font-medium uppercase tracking-[0.18em] text-pearl transition-colors hover:bg-cocoa-soft"
          >
            Shop {texture.name.toLowerCase()}
            <PiArrowUpRightLight size={16} />
          </Link>
        </div>
      </section>

      <section className="border-t border-line px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-heading text-[clamp(2rem,4vw,2.8rem)] font-medium tracking-tight text-cocoa">
            {texture.name} units
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-5 lg:grid-cols-4 lg:gap-x-6">
            {matched.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
