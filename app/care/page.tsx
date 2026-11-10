import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Hair Care | Mel's Lux Hairs",
  description:
    "Care tips to keep your Mel's Lux Hairs wig soft, shiny, and beautiful longer.",
};

const tips = [
  {
    title: "Detangle gently",
    body: "Start from the ends and work up with a wide-tooth comb or your fingers. Never yank through knots — especially on curly units.",
  },
  {
    title: "Wash with care",
    body: "Use sulfate-free shampoo in lukewarm water. Wash only when needed, then air-dry on a stand. Avoid high heat when the hair is soaking wet.",
  },
  {
    title: "Moisture matters",
    body: "A light leave-in or serum keeps waves and curls soft. For straight units, a tiny amount of oil on the mid-lengths adds shine without weighing the lace down.",
  },
  {
    title: "Protect at night",
    body: "Wrap or use a satin bonnet/scarf so friction doesn’t rough up the cuticle. Store unused units on a mannequin or in a breathable bag.",
  },
  {
    title: "Heat styling",
    body: "Use heat protectant and keep tools on medium settings. Excessive flat-ironing shortens the life of any premium unit.",
  },
];

export default function CarePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Help"
        title="Hair care"
        description="Simple habits that keep your Mel’s unit soft, shiny, and ready for everyday glam."
      />
      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="space-y-10">
          {tips.map((tip, index) => (
            <div key={tip.title} className="border-b border-line pb-10">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-champagne-deep">
                0{index + 1}
              </p>
              <h2 className="mt-3 font-heading text-2xl font-medium text-cocoa">
                {tip.title}
              </h2>
              <p className="mt-4 text-[1.02rem] font-light leading-relaxed text-cocoa-muted">
                {tip.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
