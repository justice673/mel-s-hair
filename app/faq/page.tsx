import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "FAQ | Mel's Lux Hairs",
  description:
    "Frequently asked questions about Mel's Lux Hairs wigs, lace, shipping, and care.",
};

const faqs = [
  {
    q: "Are your prices in FCFA?",
    a: "Yes. Mel’s Lux Hairs is based in Cameroon and all product prices are shown in FCFA.",
  },
  {
    q: "Do you offer glueless units?",
    a: "Yes — several units are glueless-ready for quicker installs. Filter by lace type on the shop page to find them fast.",
  },
  {
    q: "How do I choose a texture?",
    a: "Start with how you want the hair to move: straight for sleek, wavy for soft body, curly for defined volume. Visit the Textures page for guidance.",
  },
  {
    q: "Can I exchange a unit?",
    a: "Eligible unused units can be exchanged within 14 days if the lace is uncut and the piece is in original condition. See Returns for details.",
  },
  {
    q: "How long does shipping take in Cameroon?",
    a: "After processing, most city deliveries take about 2–5 business days depending on your location and courier.",
  },
  {
    q: "How should I care for my wig?",
    a: "Detangle gently, wash with sulfate-free products when needed, moisturize lightly, and protect at night with satin. Full tips are on the Hair Care page.",
  },
];

export default function FaqPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Help"
        title="FAQ"
        description="Quick answers to the questions Mel’s clients ask most."
      />
      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="space-y-8">
          {faqs.map((item) => (
            <div key={item.q} className="border-b border-line pb-8">
              <h2 className="font-heading text-2xl font-medium text-cocoa">
                {item.q}
              </h2>
              <p className="mt-4 text-[1.02rem] font-light leading-relaxed text-cocoa-muted">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
