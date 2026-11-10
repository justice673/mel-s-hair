import Link from "next/link";
import {
  PiEnvelopeSimpleLight,
  PiInstagramLogoLight,
  PiTiktokLogoLight,
} from "react-icons/pi";

const shopLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/collections", label: "Collections" },
  { href: "/textures", label: "Textures" },
];

const helpLinks = [
  { href: "/shipping", label: "Shipping" },
  { href: "/returns", label: "Returns" },
  { href: "/care", label: "Hair care" },
  { href: "/faq", label: "FAQ" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-cocoa px-5 pb-10 pt-20 text-pearl sm:px-8 lg:px-10 lg:pt-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-10">
          <div className="max-w-sm">
            <Link
              href="/"
              className="font-heading text-[1.8rem] font-medium tracking-tight text-pearl"
            >
              Mel&apos;s Lux Hairs
            </Link>
            <p className="mt-5 text-[0.98rem] font-light leading-relaxed text-pearl/65">
              Premium wigs and soft textures for everyday glam — curated with
              care, shipped with love.
            </p>
            <div className="mt-7 flex items-center gap-2">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="grid size-10 place-items-center text-pearl/80 transition-colors hover:text-champagne"
              >
                <PiInstagramLogoLight size={20} />
              </a>
              <a
                href="https://tiktok.com"
                aria-label="TikTok"
                className="grid size-10 place-items-center text-pearl/80 transition-colors hover:text-champagne"
              >
                <PiTiktokLogoLight size={20} />
              </a>
              <a
                href="mailto:hello@melsluxhairs.com"
                aria-label="Email"
                className="grid size-10 place-items-center text-pearl/80 transition-colors hover:text-champagne"
              >
                <PiEnvelopeSimpleLight size={20} />
              </a>
            </div>
          </div>

          <div>
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-champagne">
              Shop
            </p>
            <ul className="mt-5 space-y-3">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.95rem] font-light text-pearl/75 transition-colors hover:text-pearl"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-champagne">
              Help
            </p>
            <ul className="mt-5 space-y-3">
              {helpLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.95rem] font-light text-pearl/75 transition-colors hover:text-pearl"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-champagne">
              Company
            </p>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.95rem] font-light text-pearl/75 transition-colors hover:text-pearl"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-pearl/12 pt-8 text-[0.78rem] tracking-[0.04em] text-pearl/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Mel&apos;s Lux Hairs. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-pearl">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-pearl">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
