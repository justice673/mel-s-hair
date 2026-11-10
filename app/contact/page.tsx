import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import { OWNER_WHATSAPP_DISPLAY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Mel's Lux Hairs",
  description:
    "Contact Mel's Lux Hairs for orders, texture advice, shipping questions, and support.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Help"
        title="Contact"
        description="Questions about texture, lace, shipping, or an order? Send a note — we’re here for you."
      />

      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-14 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-10 lg:py-20">
        <div>
          <h2 className="font-heading text-3xl font-medium text-cocoa">
            Reach Mel&apos;s team
          </h2>
          <div className="mt-8 space-y-6 text-[1rem] font-light text-cocoa-muted">
            <p>
              <span className="block text-[0.7rem] font-medium uppercase tracking-[0.16em] text-champagne-deep">
                Email
              </span>
              <a
                href="mailto:hello@melsluxhairs.com"
                className="mt-2 inline-block text-cocoa transition-opacity hover:opacity-70"
              >
                hello@melsluxhairs.com
              </a>
            </p>
            <p>
              <span className="block text-[0.7rem] font-medium uppercase tracking-[0.16em] text-champagne-deep">
                WhatsApp
              </span>
              <span className="mt-2 block text-cocoa">{OWNER_WHATSAPP_DISPLAY}</span>
            </p>
            <p>
              <span className="block text-[0.7rem] font-medium uppercase tracking-[0.16em] text-champagne-deep">
                Based in
              </span>
              <span className="mt-2 block text-cocoa">Cameroon</span>
            </p>
          </div>
        </div>

        <ContactForm />
      </section>
    </PageShell>
  );
}
