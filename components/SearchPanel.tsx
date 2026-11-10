"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  PiArrowUpRightLight,
  PiMagnifyingGlassLight,
  PiXLight,
} from "react-icons/pi";
import { formatPrice, products } from "@/lib/products";

const popular = products.filter((p) => p.isBestSeller || p.isNew).slice(0, 4);

const suggestions = [
  { label: "Straight", href: "/textures/straight" },
  { label: "Wavy", href: "/textures/wavy" },
  { label: "Curly", href: "/textures/curly" },
  { label: "Glueless", href: "/shop?q=glueless" },
  { label: "HD lace", href: "/shop?q=HD%20lace" },
  { label: "Body wave", href: "/shop?q=body%20wave" },
];

type SearchPanelProps = {
  open: boolean;
  onClose: () => void;
};

export default function SearchPanel({ open, onClose }: SearchPanelProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    setQuery("");
    const timer = window.setTimeout(() => inputRef.current?.focus(), 40);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  const trimmed = query.trim().toLowerCase();

  const typedSuggestions = useMemo(() => {
    if (!trimmed) return suggestions;
    return suggestions.filter((item) =>
      item.label.toLowerCase().includes(trimmed),
    );
  }, [trimmed]);

  const matches = useMemo(() => {
    if (!trimmed) return [];
    return products
      .filter((product) => {
        const haystack = [
          product.name,
          product.detail,
          product.texture,
          product.lace,
        ]
          .join(" ")
          .toLowerCase();
        return haystack.includes(trimmed);
      })
      .slice(0, 4);
  }, [trimmed]);

  if (!open) return null;

  return (
    <>
      <button
        type="button"
        aria-label="Close search"
        className="fixed inset-0 z-[45] bg-cocoa/25"
        onClick={onClose}
      />

      <div className="absolute inset-x-0 top-full z-[55] border-b border-line bg-pearl text-cocoa shadow-[0_12px_40px_rgba(43,33,28,0.08)]">
        <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3 border-b border-line pb-4">
            <PiMagnifyingGlassLight
              size={20}
              className="shrink-0 text-champagne-deep"
            />
            <input
              ref={inputRef}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search wigs, textures, lace…"
              className="min-w-0 flex-1 bg-transparent text-[1.05rem] text-cocoa outline-none placeholder:text-cocoa-muted/70"
              aria-label="Search products"
            />
            <button
              type="button"
              aria-label="Close search"
              onClick={onClose}
              className="grid size-10 place-items-center text-cocoa transition-colors hover:bg-blush/50"
            >
              <PiXLight size={20} />
            </button>
          </div>

          <div className="grid gap-8 py-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-champagne-deep">
                {trimmed ? "Suggestions" : "Try searching"}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {typedSuggestions.length === 0 ? (
                  <p className="text-[0.9rem] text-cocoa-muted">No suggestions</p>
                ) : (
                  typedSuggestions.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={onClose}
                      className="border border-line-strong px-3 py-2 text-[0.72rem] font-medium uppercase tracking-[0.14em] text-cocoa transition-colors hover:border-cocoa hover:bg-blush/40"
                    >
                      {item.label}
                    </Link>
                  ))
                )}
              </div>

              {!trimmed ? (
                <>
                  <p className="mt-7 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-champagne-deep">
                    Popular now
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {popular.map((product) => (
                      <Link
                        key={product.id}
                        href={`/shop/${product.slug}`}
                        onClick={onClose}
                        className="bg-blush/50 px-3 py-2 text-[0.8rem] text-cocoa transition-colors hover:bg-blush"
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : null}
            </div>

            <div>
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-champagne-deep">
                {trimmed ? "Matching pieces" : "Quick picks"}
              </p>

              <ul className="mt-3 space-y-1">
                {(trimmed ? matches : popular).map((product) => (
                  <li key={product.id}>
                    <Link
                      href={`/shop/${product.slug}`}
                      onClick={onClose}
                      className="flex items-center gap-3 px-1 py-2.5 transition-colors hover:bg-blush/35"
                    >
                      <span className="relative h-12 w-10 shrink-0 overflow-hidden bg-blush">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="40px"
                          className="object-cover"
                        />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-heading text-lg font-medium leading-tight text-cocoa">
                          {product.name}
                        </span>
                        <span className="mt-0.5 block text-[0.72rem] text-cocoa-muted">
                          {product.detail}
                        </span>
                      </span>
                      <span className="shrink-0 text-[0.8rem] font-medium text-cocoa">
                        {formatPrice(product.price)}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              {trimmed && matches.length === 0 ? (
                <p className="py-6 font-heading text-xl font-medium text-cocoa">
                  No pieces match “{query.trim()}”
                </p>
              ) : null}

              <Link
                href={
                  trimmed
                    ? `/shop?q=${encodeURIComponent(query.trim())}`
                    : "/shop"
                }
                onClick={onClose}
                className="mt-3 inline-flex items-center gap-2 text-[0.74rem] font-medium uppercase tracking-[0.16em] text-cocoa transition-opacity hover:opacity-70"
              >
                View all in shop
                <PiArrowUpRightLight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
