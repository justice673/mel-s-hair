import Image from "next/image";
import Link from "next/link";
import { PiArrowUpRightLight } from "react-icons/pi";

export default function BrandStory() {
  return (
    <section className="bg-pearl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative aspect-[4/5] overflow-hidden bg-blush lg:aspect-[4/5]">
          <Image
            src="/images/brand-story.jpg"
            alt="Mel styling a premium lace-front wig by a soft window"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="max-w-lg lg:py-8">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-champagne-deep">
            Our story
          </p>
          <h2 className="mt-4 font-heading text-[clamp(2.4rem,5vw,3.8rem)] font-medium leading-[0.95] tracking-[-0.02em] text-cocoa">
            Hair that feels like you — only softer
          </h2>
          <p className="mt-6 text-[1.05rem] font-light leading-relaxed text-cocoa-soft">
            Mel&apos;s Lux Hairs was built for women who want premium units without
            the guesswork. Every wig is chosen for melt-ready lace, natural
            density, and textures that stay beautiful through real life — not
            just photos.
          </p>
          <p className="mt-4 text-[1.05rem] font-light leading-relaxed text-cocoa-muted">
            From soft installs to everyday glam, we keep the experience clean,
            honest, and elevated.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-2.5 border-b border-cocoa pb-1 text-[0.74rem] font-medium uppercase tracking-[0.18em] text-cocoa transition-opacity hover:opacity-70"
          >
            Meet Mel
            <PiArrowUpRightLight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
