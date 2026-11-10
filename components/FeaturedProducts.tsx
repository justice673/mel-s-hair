import Link from "next/link";
import { PiArrowUpRightLight } from "react-icons/pi";
import ProductCard from "@/components/shop/ProductCard";
import { products } from "@/lib/products";

const featured = products.filter((product) => product.isBestSeller).slice(0, 4);

export default function FeaturedProducts() {
  return (
    <section className="bg-blush/35 px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-champagne-deep">
              Customer favorites
            </p>
            <h2 className="mt-4 font-heading text-[clamp(2.4rem,5vw,3.8rem)] font-medium leading-[0.95] tracking-[-0.02em] text-cocoa">
              Best sellers
            </h2>
            <p className="mt-5 max-w-md text-[1.02rem] font-light leading-relaxed text-cocoa-muted">
              Clean lace, soft density, and units that install like a dream —
              ready for your next look.
            </p>
          </div>

          <Link
            href="/shop"
            className="hidden items-center gap-2 text-[0.74rem] font-medium uppercase tracking-[0.18em] text-cocoa transition-opacity hover:opacity-70 sm:inline-flex"
          >
            Shop all
            <PiArrowUpRightLight size={16} />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-3 gap-y-8 sm:mt-14 sm:gap-x-5 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <Link
          href="/shop"
          className="mt-10 flex items-center justify-center gap-2 border border-line-strong py-3.5 text-[0.74rem] font-medium uppercase tracking-[0.18em] text-cocoa transition-colors hover:border-cocoa hover:bg-blush/40 sm:hidden"
        >
          Shop all
          <PiArrowUpRightLight size={16} />
        </Link>
      </div>
    </section>
  );
}
