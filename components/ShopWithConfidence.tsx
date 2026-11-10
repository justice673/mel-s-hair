import Image from "next/image";
import Link from "next/link";
import { PiArrowUpRightLight } from "react-icons/pi";

export default function ShopWithConfidence() {
  return (
    <section className="bg-pearl">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="relative min-h-[28rem] overflow-hidden bg-blush lg:min-h-[36rem]">
          <Image
            src="/images/confidence.jpg"
            alt="Premium Mel's Lux Hairs order being packed with care"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="flex items-center bg-pearl px-5 py-16 sm:px-10 lg:px-16 lg:py-20">
          <div className="max-w-md">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-champagne-deep">
              Peace of mind
            </p>
            <h2 className="mt-4 font-heading text-[clamp(2.4rem,4.5vw,3.6rem)] font-medium leading-[0.95] tracking-[-0.02em] text-cocoa">
              Shop with confidence
            </h2>
            <p className="mt-6 text-[1.05rem] font-light leading-relaxed text-cocoa-soft">
              We make shopping{" "}
              <span className="font-medium text-cocoa">risk-free</span>. Enjoy
              carefully tracked shipping, plus a{" "}
              <span className="font-medium text-cocoa">14-day exchange</span>{" "}
              window on eligible units — so you can find the texture that feels
              like you.
            </p>

            <Link
              href="/shipping"
              className="mt-9 inline-flex items-center gap-2.5 bg-cocoa px-6 py-3.5 text-[0.74rem] font-medium uppercase tracking-[0.18em] text-pearl transition-colors duration-300 hover:bg-cocoa-soft"
            >
              Explore the difference
              <PiArrowUpRightLight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
