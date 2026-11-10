"use client";

import Image from "next/image";
import Link from "next/link";
import { Drawer } from "vaul";
import {
  PiMinusLight,
  PiPlusLight,
  PiTrashSimpleLight,
  PiXLight,
} from "react-icons/pi";
import { formatPrice } from "@/lib/products";
import { useCart } from "@/components/cart/CartContext";

export default function CartSheet() {
  const {
    items,
    itemCount,
    subtotal,
    isOpen,
    closeCart,
    openCart,
    removeItem,
    updateQuantity,
  } = useCart();

  return (
    <Drawer.Root
      open={isOpen}
      onOpenChange={(open) => (open ? openCart() : closeCart())}
      direction="right"
    >
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-[60] bg-cocoa/45" />
        <Drawer.Content className="fixed inset-y-0 right-0 z-[70] flex h-full w-full max-w-md flex-col bg-pearl outline-none">
          <div className="flex items-center justify-between border-b border-line px-5 py-5 sm:px-6">
            <div>
              <Drawer.Title className="font-heading text-2xl font-medium tracking-tight text-cocoa">
                Your bag
              </Drawer.Title>
              <Drawer.Description className="mt-1 text-[0.8rem] tracking-[0.04em] text-cocoa-muted">
                {itemCount === 0
                  ? "No pieces yet"
                  : `${itemCount} ${itemCount === 1 ? "piece" : "pieces"}`}
              </Drawer.Description>
            </div>
            <Drawer.Close
              aria-label="Close bag"
              className="grid size-10 place-items-center text-cocoa transition-colors hover:bg-blush/50"
            >
              <PiXLight size={22} />
            </Drawer.Close>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-6">
            {items.length === 0 ? (
              <div className="flex h-full min-h-[16rem] flex-col items-center justify-center text-center">
                <p className="font-heading text-2xl font-medium text-cocoa">
                  Your bag is empty
                </p>
                <p className="mt-3 max-w-xs text-[0.95rem] font-light text-cocoa-muted">
                  Soft lace units are waiting — find your next texture.
                </p>
                <Drawer.Close asChild>
                  <Link
                    href="/shop"
                    className="mt-8 bg-cocoa px-6 py-3.5 text-[0.74rem] font-medium uppercase tracking-[0.18em] text-pearl transition-colors hover:bg-cocoa-soft"
                  >
                    Continue shopping
                  </Link>
                </Drawer.Close>
              </div>
            ) : (
              <ul className="space-y-6">
                {items.map(({ product, quantity }) => (
                  <li
                    key={product.id}
                    className="flex gap-4 border-b border-line pb-6"
                  >
                    <Link
                      href={`/shop/${product.slug}`}
                      onClick={closeCart}
                      className="relative h-28 w-24 shrink-0 overflow-hidden bg-blush"
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    </Link>

                    <div className="flex min-w-0 flex-1 flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <Link
                            href={`/shop/${product.slug}`}
                            onClick={closeCart}
                            className="font-heading text-xl font-medium leading-tight text-cocoa transition-opacity hover:opacity-70"
                          >
                            {product.name}
                          </Link>
                          <p className="mt-1 text-[0.75rem] tracking-[0.04em] text-cocoa-muted">
                            {product.detail}
                          </p>
                        </div>
                        <button
                          type="button"
                          aria-label={`Remove ${product.name}`}
                          onClick={() => removeItem(product.id)}
                          className="grid size-8 shrink-0 place-items-center text-red-600 transition-colors hover:text-red-700"
                        >
                          <PiTrashSimpleLight size={16} />
                        </button>
                      </div>

                      <div className="mt-auto flex items-center justify-between pt-4">
                        <div className="inline-flex items-center border border-line-strong">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            onClick={() =>
                              updateQuantity(product.id, quantity - 1)
                            }
                            className="grid size-8 place-items-center text-cocoa"
                          >
                            <PiMinusLight size={14} />
                          </button>
                          <span className="min-w-8 text-center text-[0.85rem] font-medium text-cocoa">
                            {quantity}
                          </span>
                          <button
                            type="button"
                            aria-label="Increase quantity"
                            onClick={() =>
                              updateQuantity(product.id, quantity + 1)
                            }
                            className="grid size-8 place-items-center text-cocoa"
                          >
                            <PiPlusLight size={14} />
                          </button>
                        </div>
                        <p className="text-[0.9rem] font-medium text-cocoa">
                          {formatPrice(product.price * quantity)}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {items.length > 0 ? (
            <div className="border-t border-line px-5 py-5 sm:px-6">
              <div className="flex items-center justify-between">
                <span className="text-[0.78rem] font-medium uppercase tracking-[0.16em] text-cocoa-muted">
                  Subtotal
                </span>
                <span className="font-heading text-2xl font-medium text-cocoa">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mt-2 text-[0.8rem] font-light text-cocoa-muted">
                Shipping calculated at checkout · Prices in FCFA
              </p>
              <Drawer.Close asChild>
                <Link
                  href="/checkout"
                  className="mt-5 block w-full bg-cocoa py-3.5 text-center text-[0.74rem] font-medium uppercase tracking-[0.18em] text-pearl transition-colors hover:bg-cocoa-soft"
                >
                  Checkout
                </Link>
              </Drawer.Close>
              <Drawer.Close asChild>
                <Link
                  href="/shop"
                  className="mt-3 block w-full py-3 text-center text-[0.74rem] font-medium uppercase tracking-[0.16em] text-cocoa transition-opacity hover:opacity-70"
                >
                  Continue shopping
                </Link>
              </Drawer.Close>
            </div>
          ) : null}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
