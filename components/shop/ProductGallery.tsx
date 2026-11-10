"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";

type ProductGalleryProps = {
  name: string;
  images: string[];
};

export default function ProductGallery({ name, images }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const current = images[active] ?? images[0];
  const hasMany = images.length > 1;

  const goTo = (index: number) => {
    const next = (index + images.length) % images.length;
    setActive(next);
  };

  return (
    <div className="space-y-3 sm:space-y-4">
      <div
        className="relative aspect-[4/5] touch-pan-y overflow-hidden bg-blush"
        onTouchStart={(event) => {
          touchStartX.current = event.changedTouches[0]?.clientX ?? null;
        }}
        onTouchEnd={(event) => {
          if (touchStartX.current === null || !hasMany) return;
          const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
          const delta = endX - touchStartX.current;
          touchStartX.current = null;
          if (Math.abs(delta) < 40) return;
          goTo(active + (delta < 0 ? 1 : -1));
        }}
      >
        <Image
          key={current}
          src={current}
          alt={`${name} — view ${active + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="animate-fade-in object-cover"
          draggable={false}
        />

        {hasMany ? (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={() => goTo(active - 1)}
              className="absolute left-2 top-1/2 z-10 hidden size-10 -translate-y-1/2 place-items-center bg-pearl/90 text-cocoa transition-opacity hover:opacity-80 sm:grid"
            >
              <PiCaretLeftLight size={18} />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={() => goTo(active + 1)}
              className="absolute right-2 top-1/2 z-10 hidden size-10 -translate-y-1/2 place-items-center bg-pearl/90 text-cocoa transition-opacity hover:opacity-80 sm:grid"
            >
              <PiCaretRightLight size={18} />
            </button>

            <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-1.5">
              {images.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  type="button"
                  aria-label={`Go to image ${index + 1}`}
                  aria-current={index === active}
                  onClick={() => setActive(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    index === active
                      ? "w-5 bg-pearl"
                      : "w-1.5 bg-pearl/55"
                  }`}
                />
              ))}
            </div>
          </>
        ) : null}
      </div>

      {hasMany ? (
        <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:grid sm:grid-cols-4 sm:gap-3 sm:overflow-visible sm:px-0 sm:pb-0">
          {images.map((src, index) => {
            const selected = index === active;
            return (
              <button
                key={`${src}-${index}`}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`View image ${index + 1}`}
                aria-pressed={selected}
                className={`relative aspect-[4/5] w-[4.5rem] shrink-0 overflow-hidden bg-blush transition-[opacity,outline-color] sm:w-auto ${
                  selected
                    ? "outline outline-1 outline-offset-2 outline-cocoa"
                    : "opacity-70"
                }`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      ) : null}

      {hasMany ? (
        <p className="text-center text-[0.7rem] tracking-[0.08em] text-cocoa-muted sm:hidden">
          Swipe image · {active + 1} / {images.length}
        </p>
      ) : null}
    </div>
  );
}
