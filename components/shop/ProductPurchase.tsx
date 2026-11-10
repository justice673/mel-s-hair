"use client";

import Link from "next/link";
import { useState } from "react";
import {
  PiArrowUpRightLight,
  PiHandbagSimpleLight,
  PiMinusLight,
  PiPlusLight,
} from "react-icons/pi";
import { useCart } from "@/components/cart/CartContext";
import {
  getStockLabel,
  isInStock,
  type Product,
} from "@/lib/products";

type ProductPurchaseProps = {
  product: Product;
};

export default function ProductPurchase({ product }: ProductPurchaseProps) {
  const { addItem } = useCart();
  const inStock = isInStock(product);
  const [quantity, setQuantity] = useState(1);
  const label = getStockLabel(product);

  const clamp = (value: number) =>
    Math.min(Math.max(1, value), Math.max(1, product.stock));

  return (
    <div className="mt-8 space-y-5">
      <div className="flex flex-wrap items-center gap-3">
        <span
          className={`inline-flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.16em] ${
            !inStock
              ? "text-rose-deep"
              : product.stock <= 3
                ? "text-champagne-deep"
                : "text-cocoa"
          }`}
        >
          <span
            className={`size-1.5 rounded-full ${
              !inStock
                ? "bg-rose-deep"
                : product.stock <= 3
                  ? "bg-champagne"
                  : "bg-cocoa"
            }`}
            aria-hidden
          />
          {label}
        </span>
        {inStock ? (
          <span className="text-[0.8rem] text-cocoa-muted">
            {product.stock} available
          </span>
        ) : (
          <span className="text-[0.8rem] text-cocoa-muted">
            Message us on Contact to restock
          </span>
        )}
      </div>

      <div
        className={`inline-flex h-[2.85rem] items-center border border-line-strong sm:h-[3.15rem] ${
          inStock ? "text-cocoa" : "pointer-events-none opacity-40"
        }`}
      >
        <button
          type="button"
          aria-label="Decrease quantity"
          disabled={!inStock || quantity <= 1}
          onClick={() => setQuantity((value) => clamp(value - 1))}
          className="grid size-10 place-items-center transition-opacity hover:opacity-70 disabled:opacity-30 sm:size-11"
        >
          <PiMinusLight size={14} />
        </button>
        <span className="min-w-8 text-center text-[0.9rem] font-medium tabular-nums">
          {quantity}
        </span>
        <button
          type="button"
          aria-label="Increase quantity"
          disabled={!inStock || quantity >= product.stock}
          onClick={() => setQuantity((value) => clamp(value + 1))}
          className="grid size-10 place-items-center transition-opacity hover:opacity-70 disabled:opacity-30 sm:size-11"
        >
          <PiPlusLight size={14} />
        </button>
      </div>

      <div className="flex flex-nowrap items-center gap-2.5 sm:gap-3">
        <button
          type="button"
          disabled={!inStock}
          onClick={() => addItem(product.id, quantity)}
          className="inline-flex min-w-0 flex-1 items-center justify-center gap-2 bg-cocoa px-4 py-3 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-pearl transition-colors hover:bg-cocoa-soft disabled:cursor-not-allowed disabled:bg-cocoa-muted sm:flex-none sm:gap-2.5 sm:px-6 sm:py-3.5 sm:text-[0.74rem] sm:tracking-[0.18em]"
        >
          {inStock ? "Add to bag" : "Out of stock"}
          {inStock ? <PiHandbagSimpleLight size={18} /> : null}
        </button>

        <Link
          href="/care"
          className="inline-flex shrink-0 items-center justify-center gap-2 border border-line-strong px-4 py-3 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-cocoa transition-colors hover:border-cocoa hover:bg-blush/40 sm:px-6 sm:py-3.5 sm:text-[0.74rem] sm:tracking-[0.18em]"
        >
          Care guide
          <PiArrowUpRightLight size={16} />
        </Link>
      </div>
    </div>
  );
}
