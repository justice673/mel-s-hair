import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PiArrowUpRightLight } from "react-icons/pi";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "About Mel | Mel's Lux Hairs",
  description:
    "Meet Mel — the heart behind Mel's Lux Hairs, a Cameroon-based premium wig brand for everyday glam.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our story"
        title="Hair that feels like you — only softer"
        description="Mel’s Lux Hairs started with one belief: premium units should feel honest, beautiful, and easy to wear — from Douala soft glam to every day after."
      />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-24">
        <div className="relative aspect-[4/5] overflow-hidden bg-blush">
          <Image
            src="/images/brand-story.jpg"
            alt="Mel preparing a premium lace-front wig"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="max-w-lg">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-champagne-deep">
            Meet Mel
          </p>
          <h2 className="mt-4 font-heading text-[clamp(2.2rem,4vw,3.2rem)] font-medium leading-[0.95] tracking-tight text-cocoa">
            Built in Cameroon, made for soft confidence
          </h2>
          <p className="mt-6 text-[1.05rem] font-light leading-relaxed text-cocoa-soft">
            Mel’s Lux Hairs is a sister-led brand focused on melt-ready lace,
            true-to-feel textures, and units that keep up with real life. Every
            piece is chosen for density, softness, and that clean install finish
            clients come back for.
          </p>
          <p className="mt-4 text-[1.05rem] font-light leading-relaxed text-cocoa-muted">
            From carefully packed orders to texture guidance that actually helps,
            the goal is simple: glam without stress, quality without guesswork.
          </p>

          <Link
            href="/shop"
            className="mt-9 inline-flex items-center gap-2.5 border-b border-cocoa pb-1 text-[0.74rem] font-medium uppercase tracking-[0.18em] text-cocoa transition-opacity hover:opacity-70"
          >
            Shop the collection
            <PiArrowUpRightLight size={16} />
          </Link>
        </div>
      </section>

      <section className="bg-cocoa px-5 py-20 text-pearl sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
          {[
            {
              title: "Quality first",
              copy: "Lace, density, and texture checked so every unit feels premium in hand and on head.",
            },
            {
              title: "Local love",
              copy: "Proudly serving clients across Cameroon with clear pricing in FCFA and careful packing.",
            },
            {
              title: "Real guidance",
              copy: "Texture tips, install notes, and care that helps you keep your unit looking soft longer.",
            },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="font-heading text-2xl font-medium tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-[0.98rem] font-light leading-relaxed text-pearl/65">
                {item.copy}
              </p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
