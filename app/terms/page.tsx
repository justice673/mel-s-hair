import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Terms of Service | Mel's Lux Hairs",
  description: "Terms of service for shopping with Mel's Lux Hairs.",
};

const sections = [
  {
    title: "Orders & pricing",
    body: "All prices are listed in FCFA and may change without notice. An order is confirmed once payment is received and Mel’s team validates availability.",
  },
  {
    title: "Product details",
    body: "We work hard to show accurate photos and descriptions. Slight variations in tone or density can occur because hair is a natural product.",
  },
  {
    title: "Shipping & risk",
    body: "Risk of loss transfers once the order is handed to the courier. If a package is delayed or damaged, contact us with your tracking details so we can help.",
  },
  {
    title: "Returns",
    body: "Exchanges and refunds follow the Returns policy. Customized or used units are generally not eligible.",
  },
  {
    title: "Contact",
    body: "For questions about these terms, email hello@melsluxhairs.com.",
  },
];

export default function TermsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Legal"
        title="Terms of service"
        description="The basics of shopping with Mel’s Lux Hairs — clear, fair, and straightforward."
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
