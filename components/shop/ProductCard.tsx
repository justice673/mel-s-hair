import Image from "next/image";
import Link from "next/link";
import AddToBagButton from "@/components/shop/AddToBagButton";
import {
  formatPrice,
  getStockLabel,
  isInStock,
  type Product,
} from "@/lib/products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const inStock = isInStock(product);
  const stockLabel = getStockLabel(product);
  const tag = !inStock
    ? "Out of stock"
    : product.isNew
      ? "New"
      : product.isBestSeller
        ? "Best seller"
        : product.stock <= 3
          ? stockLabel
          : null;

  return (
    <article className={`group ${inStock ? "" : "opacity-90"}`}>
      <div className="relative aspect-[4/5] overflow-hidden bg-blush/40">
        <Link
          href={`/shop/${product.slug}`}
          className="absolute inset-0 block"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] ${
              inStock ? "" : "grayscale-[0.35]"
            }`}
          />
        </Link>
        {inStock ? (
          <AddToBagButton productId={product.id} productName={product.name} />
        ) : (
          <span className="absolute inset-x-0 bottom-0 bg-cocoa/70 px-2 py-2 text-center text-[0.58rem] font-medium uppercase tracking-[0.16em] text-pearl">
            Out of stock
          </span>
        )}
      </div>

      <div className="mt-3 sm:mt-4">
        {tag ? (
          <p
            className={`text-[0.58rem] font-medium uppercase tracking-[0.18em] sm:text-[0.62rem] ${
              !inStock
                ? "text-rose-deep"
                : product.stock <= 3 && !product.isNew && !product.isBestSeller
                  ? "text-champagne-deep"
                  : "text-champagne-deep"
            }`}
          >
            {tag}
          </p>
        ) : null}
        <div
          className={`flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-3 ${
            tag ? "mt-1" : ""
          }`}
        >
          <div className="min-w-0">
            <h3 className="font-heading text-[1.05rem] font-medium leading-tight tracking-tight text-cocoa sm:text-[1.35rem]">
              <Link
                href={`/shop/${product.slug}`}
                className="transition-opacity hover:opacity-70"
              >
                {product.name}
              </Link>
            </h3>
            <p className="mt-1 text-[0.7rem] tracking-[0.04em] text-cocoa-muted sm:text-[0.78rem]">
              {product.detail}
            </p>
          </div>
          <p className="shrink-0 text-[0.82rem] font-medium text-cocoa sm:pt-0.5 sm:text-[0.88rem]">
            {formatPrice(product.price)}
          </p>
        </div>
      </div>
    </article>
  );
}
