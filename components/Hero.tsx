import Image from "next/image";
import Link from "next/link";
import { PiArrowUpRightLight } from "react-icons/pi";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-cocoa">
      <div className="absolute inset-0 animate-soft-zoom">
        <Image
          src="/images/hero-wig.jpg"
          alt="Model wearing a premium Mel's Lux Hairs wavy lace-front wig"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_center] sm:object-center"
        />
      </div>

      <div
        className="absolute inset-0 bg-[linear-gradient(105deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.55)_34%,rgba(0,0,0,0.2)_62%,rgba(0,0,0,0.08)_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.12),transparent_42%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20 lg:justify-center lg:px-10 lg:pb-24 lg:pt-24">
        <div className="max-w-xl text-pearl">
          <p className="animate-fade-up font-heading text-[clamp(2.8rem,8vw,5.6rem)] font-medium leading-[0.92] tracking-[-0.02em]">
            Mel&apos;s Lux Hairs
          </p>

          <span
            className="animate-draw-line mt-5 block h-px w-24 bg-champagne"
            aria-hidden
          />

          <h1 className="animate-fade-up delay-1 mt-7 max-w-md font-sans text-[0.8rem] font-medium uppercase tracking-[0.22em] text-blush">
            Luxury wigs, made to move with you
          </h1>

          <p className="animate-fade-up delay-2 mt-5 max-w-sm text-[1.02rem] font-light leading-relaxed text-pearl/85">
            Soft textures, clean lace, and units that feel as good as they look —
            curated for everyday glam.
          </p>

          <div className="animate-fade-up delay-3 mt-9 flex flex-nowrap items-center gap-2.5 sm:gap-3">
            <Link
              href="/shop"
              className="inline-flex shrink-0 items-center gap-2 bg-pearl px-4 py-3 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-cocoa transition-[background-color,transform] duration-300 hover:bg-blush sm:gap-2.5 sm:px-6 sm:py-3.5 sm:text-[0.74rem] sm:tracking-[0.18em]"
            >
              Shop wigs
              <PiArrowUpRightLight size={16} />
            </Link>
            <Link
              href="/collections"
              className="inline-flex shrink-0 items-center gap-2 border border-pearl/35 px-4 py-3 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-pearl transition-[border-color,background-color] duration-300 hover:border-pearl/70 hover:bg-pearl/10 sm:gap-2.5 sm:px-6 sm:py-3.5 sm:text-[0.74rem] sm:tracking-[0.18em]"
            >
              View collections
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
