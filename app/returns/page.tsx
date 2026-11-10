import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Returns & Exchanges | Mel's Lux Hairs",
  description:
    "Learn about Mel's Lux Hairs 14-day exchange window and return guidelines.",
};

const sections = [
  {
    title: "14-day exchange window",
    body: "Eligible unused units can be exchanged within 14 days of delivery if the lace is uncut, the hair is unworn, and all original packaging is included.",
  },
  {
    title: "What qualifies",
    body: "Units must be in sellable condition — no styling product, no adhesive residue, and no odor. Custom-colored or heavily customized pieces are final sale.",
  },
  {
    title: "How to start",
    body: "Message us on WhatsApp or email hello@melsluxhairs.com with your order number and photos of the unit. We’ll guide you through the next steps.",
  },
  {
    title: "Refunds",
    body: "Approved refunds are returned to your original payment method once the unit is received and inspected. Shipping fees are non-refundable unless we made an error.",
  },
];

export default function ReturnsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Help"
        title="Returns & exchanges"
        description="Shop with confidence — soft textures, clear policies, and support when you need a different unit."
      />
      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title} className="border-b border-line pb-10">
              <h2 className="font-heading text-2xl font-medium text-cocoa">
                {section.title}
              </h2>
              <p className="mt-4 text-[1.02rem] font-light leading-relaxed text-cocoa-muted">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
