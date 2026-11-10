"use client";

import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import {
  PiArrowLeftLight,
  PiArrowRightLight,
  PiArrowUpRightLight,
} from "react-icons/pi";
import { formatPrice } from "@/lib/products";
import { saleProducts } from "@/lib/sale-products";

/** Soft launch window — ends Nov 17, 2026 11:59 PM UTC */
const SALE_ENDS_AT = new Date("2026-11-17T23:59:59.000Z").getTime();

const saleCategories = [
  "All deals",
  "Straight",
  "Wavy",
  "Curly",
  "Glueless",
  "Lace",
] as const;

function FlipTimer() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) {
    return (
      <div className="flex h-[78px] items-end gap-2 sm:h-[90px]" aria-hidden>
        {["Days", "Hours", "Mins", "Secs"].map((label) => (
          <div key={label} className="flex flex-col items-center gap-1.5">
            <div className="flex gap-0.5">
              <span className="block h-[58px] w-[42px] rounded-[2px] bg-pearl sm:h-[66px] sm:w-[48px]" />
              <span className="block h-[58px] w-[42px] rounded-[2px] bg-pearl sm:h-[66px] sm:w-[48px]" />
            </div>
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-champagne">
              {label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <FlipClockCountdown
      to={SALE_ENDS_AT}
      labels={["Days", "Hours", "Mins", "Secs"]}
      labelStyle={{
        fontSize: 10,
        fontWeight: 500,
        textTransform: "uppercase",
        letterSpacing: "0.18em",
        color: "#8a8a8a",
      }}
      digitBlockStyle={{
        width: 42,
        height: 58,
        fontSize: 28,
        fontFamily:
          "var(--font-outfit), ui-sans-serif, system-ui, sans-serif",
        fontWeight: 500,
        backgroundColor: "#f7f7f7",
        color: "#111111",
        borderRadius: 2,
      }}
      dividerStyle={{ color: "rgba(255, 255, 255, 0.2)", height: 1 }}
      separatorStyle={{ color: "#8a8a8a", size: 5 }}
      duration={0.6}
      showSeparators
      hideOnComplete={false}
      className="mels-flip-clock"
    />
  );
}

export default function FlashSale() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 28 }, [
    Autoplay({ delay: 5200, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
  const [activeCategory, setActiveCategory] =
    useState<(typeof saleCategories)[number]>("All deals");

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="bg-cocoa px-5 py-8 sm:px-8 lg:px-10 lg:py-12">
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-5 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.24em] text-champagne">
              Soft launch sale
            </p>
            <h2 className="mt-2 font-heading text-[clamp(1.8rem,3vw,2.4rem)] font-medium tracking-tight text-pearl">
              On discount now
            </h2>
          </div>

          <div className="flex items-end gap-4 sm:gap-6">
            <div className="h-[78px] overflow-hidden sm:h-[90px]">
              <FlipTimer />
            </div>

            <div className="flex items-center gap-2 pb-1">
              <button
                type="button"
                aria-label="Previous sale item"
                onClick={scrollPrev}
                className="grid size-10 place-items-center border border-pearl/25 text-pearl transition-colors hover:border-champagne hover:text-champagne"
              >
                <PiArrowLeftLight size={18} />
              </button>
              <button
                type="button"
                aria-label="Next sale item"
                onClick={scrollNext}
                className="grid size-10 place-items-center border border-pearl/25 text-pearl transition-colors hover:border-champagne hover:text-champagne"
              >
                <PiArrowRightLight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="mb-5 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {saleCategories.map((category) => {
            const active = category === activeCategory;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 border px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.16em] transition-colors ${
                  active
                    ? "border-champagne bg-champagne text-cocoa"
                    : "border-pearl/20 text-pearl/70 hover:border-pearl/45 hover:text-pearl"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {saleProducts.map((product, index) => (
              <div
                key={product.id}
                className="min-w-0 shrink-0 grow-0 basis-full"
              >
                <div className="grid min-h-[26rem] overflow-hidden lg:min-h-[30rem] lg:grid-cols-2">
                  <div className="relative min-h-[18rem] overflow-hidden lg:min-h-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center"
                      priority={index === 0}
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-cocoa/35 max-lg:bg-gradient-to-t max-lg:from-cocoa/75 max-lg:via-transparent max-lg:to-transparent"
                      aria-hidden
                    />
                    <p className="absolute bottom-5 left-5 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-pearl/85 lg:bottom-7 lg:left-7">
                      {product.detail}
                    </p>
                  </div>

                  <div className="relative flex flex-col justify-center bg-[linear-gradient(135deg,#2a2a2a_0%,#111111_48%,#1f1f1f_100%)] px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
                    <div
                      className="pointer-events-none absolute -left-16 top-0 hidden h-full w-24 -skew-x-12 bg-cocoa lg:block"
                      aria-hidden
                    />

                    <p className="relative text-[0.72rem] font-medium uppercase tracking-[0.24em] text-champagne">
                      Limited offer · {product.discountLabel}
                    </p>

                    <h3 className="relative mt-4 font-heading text-[clamp(2.2rem,5vw,3.6rem)] font-medium leading-[0.95] tracking-[-0.02em] text-pearl">
                      {product.name}
                    </h3>

                    <div className="relative mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="font-heading text-[1.85rem] font-medium text-champagne sm:text-3xl">
                        {formatPrice(product.salePrice)}
                      </span>
                      <span className="text-[0.9rem] text-pearl/45 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    </div>

                    <p className="relative mt-5 max-w-sm text-[0.98rem] font-light leading-relaxed text-pearl/70">
                      {product.tagline}
                    </p>

                    <div className="relative mt-9 flex flex-wrap items-center gap-3">
                      <Link
                        href={`/shop/${product.slug}`}
                        className="inline-flex items-center gap-2.5 bg-pearl px-6 py-3.5 text-[0.74rem] font-medium uppercase tracking-[0.18em] text-cocoa transition-colors duration-300 hover:bg-blush"
                      >
                        Shop this deal
                        <PiArrowUpRightLight size={16} />
                      </Link>
                      <Link
                        href="/shop?sale=soft-launch"
                        className="inline-flex items-center gap-2 border border-pearl/30 px-6 py-3.5 text-[0.74rem] font-medium uppercase tracking-[0.18em] text-pearl transition-colors hover:border-pearl/60"
                      >
                        All sale items
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
