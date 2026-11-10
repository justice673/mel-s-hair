import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Shipping | Mel's Lux Hairs",
  description:
    "Shipping information for Mel's Lux Hairs orders across Cameroon and beyond.",
};

const sections = [
  {
    title: "Processing time",
    body: "Orders are prepared within 1–3 business days. Soft-launch and made-to-order units may take a little longer — we’ll confirm if your piece needs extra time.",
  },
  {
    title: "Delivery in Cameroon",
    body: "We ship across Cameroon with tracked delivery partners. Major cities typically receive orders in 2–5 business days after dispatch. Delivery timelines can vary by location and courier.",
  },
  {
    title: "Shipping fees",
    body: "Shipping is calculated at checkout based on your city. You’ll always see the fee in FCFA before confirming payment.",
  },
  {
    title: "Tracking",
    body: "Once your order leaves Mel’s studio, you’ll receive tracking details by WhatsApp or email so you can follow every step.",
  },
];

export default function ShippingPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Help"
        title="Shipping"
        description="Clear timelines, tracked delivery, and careful packing — so your unit arrives as soft as it left us."
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
