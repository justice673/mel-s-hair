"use client";

import { FormEvent, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PiArrowUpRightLight, PiWhatsappLogoLight } from "react-icons/pi";
import { useCart } from "@/components/cart/CartContext";
import { formatPrice } from "@/lib/products";
import { buildWhatsAppUrl } from "@/lib/site";

export default function CheckoutForm() {
  const router = useRouter();
  const { items, subtotal, itemCount, clearCart } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const orderLines = useMemo(
    () =>
      items
        .map(
          (item, index) =>
            `${index + 1}. ${item.product.name} (${item.product.detail}) × ${item.quantity} — ${formatPrice(item.product.price * item.quantity)}`,
        )
        .join("\n"),
    [items],
  );

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (items.length === 0) return;

    const message = [
      "💖 New order — Mel's Lux Hairs",
      "",
      `Name: ${name.trim()}`,
      `WhatsApp: ${phone.trim()}`,
      `City: ${city.trim()}`,
      `Address: ${address.trim()}`,
      notes.trim() ? `Notes: ${notes.trim()}` : null,
      "",
      "🛒 Order:",
      orderLines,
      "",
      `Subtotal: ${formatPrice(subtotal)}`,
      "Shipping: to confirm",
      "",
      "Please confirm availability & delivery. Merci 🙏",
    ]
      .filter(Boolean)
      .join("\n");

    const url = buildWhatsAppUrl(message);
    window.open(url, "_blank", "noopener,noreferrer");
    clearCart();
    router.push("/shop");
  }

  if (itemCount === 0) {
    return (
      <div className="border border-line px-6 py-16 text-center">
        <p className="font-heading text-3xl font-medium text-cocoa">
          Your bag is empty
        </p>
        <p className="mx-auto mt-4 max-w-md text-[1.02rem] font-light text-cocoa-muted">
          Add a few units first, then come back to send your order on WhatsApp.
        </p>
        <Link
          href="/shop"
          className="mt-8 inline-flex items-center gap-2.5 bg-cocoa px-6 py-3.5 text-[0.74rem] font-medium uppercase tracking-[0.18em] text-pearl transition-colors hover:bg-cocoa-soft"
        >
          Shop wigs
          <PiArrowUpRightLight size={16} />
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <h2 className="font-heading text-3xl font-medium tracking-tight text-cocoa">
            Delivery details
          </h2>
          <p className="mt-2 text-[0.95rem] font-light text-cocoa-muted">
            We’ll open WhatsApp with your order ready for Mel to confirm.
          </p>
        </div>

        <label className="block">
          <span className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-champagne-deep">
            Full name
          </span>
          <input
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mt-2 w-full border-b border-line-strong bg-transparent py-3 text-cocoa outline-none placeholder:text-cocoa-muted/60"
            placeholder="Your name"
          />
        </label>

        <label className="block">
          <span className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-champagne-deep">
            WhatsApp number
          </span>
          <input
            required
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="mt-2 w-full border-b border-line-strong bg-transparent py-3 text-cocoa outline-none placeholder:text-cocoa-muted/60"
            placeholder="+237 6XX XXX XXX"
          />
        </label>

        <label className="block">
          <span className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-champagne-deep">
            City
          </span>
          <input
            required
            value={city}
            onChange={(event) => setCity(event.target.value)}
            className="mt-2 w-full border-b border-line-strong bg-transparent py-3 text-cocoa outline-none placeholder:text-cocoa-muted/60"
            placeholder="Douala, Yaoundé…"
          />
        </label>

        <label className="block">
          <span className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-champagne-deep">
            Delivery address
          </span>
          <input
            required
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            className="mt-2 w-full border-b border-line-strong bg-transparent py-3 text-cocoa outline-none placeholder:text-cocoa-muted/60"
            placeholder="Neighborhood / landmark"
          />
        </label>

        <label className="block">
          <span className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-champagne-deep">
            Notes (optional)
          </span>
          <textarea
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            rows={3}
            className="mt-2 w-full resize-y border-b border-line-strong bg-transparent py-3 text-cocoa outline-none placeholder:text-cocoa-muted/60"
            placeholder="Color preference, install timing…"
          />
        </label>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2.5 bg-[#25D366] px-6 py-4 text-[0.74rem] font-medium uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-90 sm:w-auto"
        >
          <PiWhatsappLogoLight size={18} />
          Send order on WhatsApp
        </button>
      </form>

      <aside className="border border-line bg-blush/25 p-6 sm:p-8">
        <h2 className="font-heading text-2xl font-medium tracking-tight text-cocoa">
          Order summary
        </h2>
        <ul className="mt-6 space-y-5">
          {items.map(({ product, quantity }) => (
            <li key={product.id} className="flex gap-4">
              <div className="relative h-20 w-16 shrink-0 overflow-hidden bg-pearl">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-heading text-lg font-medium leading-tight text-cocoa">
                  {product.name}
                </p>
                <p className="mt-1 text-[0.75rem] text-cocoa-muted">
                  Qty {quantity} · {product.detail}
                </p>
                <p className="mt-2 text-[0.88rem] font-medium text-cocoa">
                  {formatPrice(product.price * quantity)}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex items-center justify-between border-t border-line pt-5">
          <span className="text-[0.78rem] font-medium uppercase tracking-[0.16em] text-cocoa-muted">
            Subtotal
          </span>
          <span className="font-heading text-2xl font-medium text-cocoa">
            {formatPrice(subtotal)}
          </span>
        </div>
        <p className="mt-3 text-[0.8rem] font-light text-cocoa-muted">
          Delivery fee confirmed with Mel on WhatsApp.
        </p>
      </aside>
    </div>
  );
}
