import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PiArrowUpRightLight } from "react-icons/pi";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import { collections } from "@/lib/collections";

export const metadata: Metadata = {
  title: "Collections | Mel's Lux Hairs",
  description:
    "Explore Mel's Lux Hairs collections — soft launch deals, everyday glam, lace favorites, and glueless edits.",
};

export default function CollectionsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Curated edits"
        title="Collections"
        description="Shop the looks Mel’s clients reorder most — from soft-launch deals to everyday glam units."
      />

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2">
          {collections.map((collection) => (
            <Link
              key={collection.slug}
              href={collection.href}
              className="group relative block min-h-[22rem] overflow-hidden bg-blush"
            >
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-cocoa/75 via-cocoa/15 to-transparent"
                aria-hidden
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 sm:p-8">
                <div>
                  <h2 className="font-heading text-3xl font-medium text-pearl">
                    {collection.name}
                  </h2>
                  <p className="mt-2 text-[0.92rem] text-pearl/75">
                    {collection.detail}
                  </p>
                </div>
                <span className="mb-1 grid size-10 place-items-center border border-pearl/40 text-pearl transition-colors group-hover:bg-pearl group-hover:text-cocoa">
                  <PiArrowUpRightLight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
