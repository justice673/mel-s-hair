import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PiArrowUpRightLight } from "react-icons/pi";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import { textureList } from "@/lib/textures";

export const metadata: Metadata = {
  title: "Textures | Mel's Lux Hairs",
  description:
    "Shop Mel's Lux Hairs by texture — straight, wavy, and curly premium wig units.",
};

export default function TexturesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Find your texture"
        title="Textures"
        description="Start with how you want the hair to move — then choose the lace unit that matches your everyday glam."
      />

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {textureList.map((texture) => (
            <Link
              key={texture.slug}
              href={`/textures/${texture.slug}`}
              className="group relative block overflow-hidden"
            >
              <div className="relative aspect-[3/4] bg-blush">
                <Image
                  src={texture.image}
                  alt={`${texture.name} texture`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-cocoa/70 via-cocoa/10 to-transparent"
                  aria-hidden
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <h2 className="font-heading text-3xl font-medium text-pearl">
                      {texture.name}
                    </h2>
                    <p className="mt-1 text-[0.78rem] tracking-[0.04em] text-pearl/75">
                      {texture.eyebrow}
                    </p>
                  </div>
                  <span className="mb-1 grid size-9 place-items-center border border-pearl/35 text-pearl transition-colors group-hover:bg-pearl group-hover:text-cocoa">
                    <PiArrowUpRightLight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
