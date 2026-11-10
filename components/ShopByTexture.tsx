import Image from "next/image";
import Link from "next/link";
import { PiArrowUpRightLight } from "react-icons/pi";

const textures = [
  {
    name: "Straight",
    href: "/textures/straight",
    image: "/images/texture-straight.jpg",
    note: "Sleek · Silky · Soft",
  },
  {
    name: "Wavy",
    href: "/textures/wavy",
    image: "/images/texture-wavy.jpg",
    note: "Body wave · Natural fall",
  },
  {
    name: "Curly",
    href: "/textures/curly",
    image: "/images/texture-curly.jpg",
    note: "Defined · Full · Soft spring",
  },
];

export default function ShopByTexture() {
  return (
    <section className="bg-pearl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-champagne-deep">
              Find your texture
            </p>
            <h2 className="mt-4 font-heading text-[clamp(2.4rem,5vw,3.8rem)] font-medium leading-[0.95] tracking-[-0.02em] text-cocoa">
              Shop by texture
            </h2>
            <p className="mt-5 max-w-md text-[1.02rem] font-light leading-relaxed text-cocoa-muted">
              Start with how you want the hair to move — then choose the unit that
              matches your everyday glam.
            </p>
          </div>

          <Link
            href="/textures"
            className="inline-flex items-center gap-2 self-start text-[0.74rem] font-medium uppercase tracking-[0.18em] text-cocoa transition-opacity hover:opacity-70 sm:self-auto"
          >
            All textures
            <PiArrowUpRightLight size={16} />
          </Link>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-3 sm:gap-6">
          {textures.map((texture) => (
            <Link
              key={texture.name}
              href={texture.href}
              className="group relative block overflow-hidden"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-blush">
                <Image
                  src={texture.image}
                  alt={`${texture.name} wig texture`}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-cocoa/70 via-cocoa/10 to-transparent"
                  aria-hidden
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <h3 className="font-heading text-3xl font-medium tracking-tight text-pearl">
                      {texture.name}
                    </h3>
                    <p className="mt-1 text-[0.78rem] tracking-[0.04em] text-pearl/75">
                      {texture.note}
                    </p>
                  </div>
                  <span className="mb-1 grid size-9 place-items-center border border-pearl/35 text-pearl transition-colors duration-300 group-hover:border-pearl group-hover:bg-pearl group-hover:text-cocoa">
                    <PiArrowUpRightLight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
