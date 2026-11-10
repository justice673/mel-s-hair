"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  PiArrowUpRightLight,
  PiEqualsLight,
  PiHandbagSimpleLight,
  PiMagnifyingGlassLight,
  PiXLight,
} from "react-icons/pi";
import { useCart } from "@/components/cart/CartContext";
import SearchPanel from "@/components/SearchPanel";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/collections", label: "Collections" },
  { href: "/textures", label: "Textures" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { itemCount, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const overlay = isHome && !scrolled && !open && !searchOpen;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color,color,box-shadow] duration-500 ${
          overlay
            ? "border-b border-transparent bg-transparent text-pearl"
            : "border-b border-line bg-pearl text-cocoa shadow-[0_1px_0_rgba(43,33,28,0.04)]"
        }`}
      >
        <nav className="mx-auto flex h-[4.25rem] w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link
            href="/"
            className="font-heading text-[1.55rem] font-medium leading-none tracking-[0.02em] transition-opacity hover:opacity-70"
          >
            Mel&apos;s Lux Hairs
          </Link>

          <ul className="hidden items-center gap-8 md:flex lg:gap-9">
            {links.map((link) => {
              const active =
                pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`group relative inline-block text-[0.78rem] font-medium uppercase tracking-[0.18em] transition-[color,transform,letter-spacing] duration-300 ease-out hover:tracking-[0.22em] hover:text-champagne ${
                      overlay
                        ? active
                          ? "text-pearl"
                          : "text-pearl/75 hover:text-champagne"
                        : active
                          ? "text-cocoa"
                          : "text-cocoa-muted hover:text-champagne-deep"
                    } ${active ? "tracking-[0.2em]" : ""}`}
                  >
                    <span className="inline-block transition-transform duration-300 ease-out group-hover:-translate-y-px group-hover:scale-[1.04]">
                      {link.label}
                    </span>
                    <span
                      className={`absolute -bottom-1 left-0 h-px w-full origin-left bg-champagne transition-transform duration-500 ease-out ${
                        active
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-1 sm:gap-2">
            <button
              type="button"
              aria-label="Search"
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen((value) => !value)}
              className={`grid size-10 place-items-center rounded-full transition-colors ${
                overlay ? "hover:bg-white/10" : "hover:bg-blush/60"
              }`}
            >
              {searchOpen ? (
                <PiXLight size={20} />
              ) : (
                <PiMagnifyingGlassLight size={20} />
              )}
            </button>
            <button
              type="button"
              aria-label="Open bag"
              onClick={openCart}
              className={`relative grid size-10 place-items-center rounded-full transition-colors ${
                overlay ? "hover:bg-white/10" : "hover:bg-blush/60"
              }`}
            >
              <PiHandbagSimpleLight size={20} />
              {itemCount > 0 ? (
                <span className="absolute right-1 top-1 grid min-w-4 place-items-center rounded-full bg-rose px-1 text-[0.6rem] font-medium leading-4 text-pearl">
                  {itemCount > 9 ? "9+" : itemCount}
                </span>
              ) : null}
            </button>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className={`grid size-10 place-items-center rounded-full transition-colors md:hidden ${
                overlay ? "hover:bg-white/10" : "hover:bg-blush/60"
              }`}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <PiXLight size={22} /> : <PiEqualsLight size={22} />}
            </button>
          </div>
        </nav>

        <SearchPanel open={searchOpen} onClose={() => setSearchOpen(false)} />
      </header>

      <div
        className={`fixed inset-0 z-40 bg-cocoa transition-[opacity,visibility] duration-400 md:hidden ${
          open
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col px-5 pb-10 pt-24 sm:px-8">
          <ul className="flex flex-1 flex-col gap-1">
            {links.map((link, index) => (
              <li
                key={link.href}
                style={{
                  transitionDelay: open ? `${index * 60 + 80}ms` : "0ms",
                }}
                className={`border-b border-pearl/15 transition-all duration-500 ${
                  open
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                }`}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between py-5 font-heading text-4xl font-medium tracking-tight text-pearl transition-[color,padding] duration-300 hover:pl-2 hover:text-champagne"
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {link.label}
                  </span>
                  <PiArrowUpRightLight
                    size={22}
                    className="text-champagne transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </li>
            ))}
          </ul>

          <p className="text-sm tracking-[0.08em] text-blush/80">
            Premium wigs · Soft textures · Everyday glam
          </p>
        </div>
      </div>
    </>
  );
}
