import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Privacy Policy | Mel's Lux Hairs",
  description: "Privacy policy for Mel's Lux Hairs customers and website visitors.",
};

const sections = [
  {
    title: "What we collect",
    body: "When you shop or contact us, we may collect your name, phone/WhatsApp, email, delivery address, and order details needed to fulfill your purchase.",
  },
  {
    title: "How we use it",
    body: "We use your information to process orders, arrange delivery, share tracking updates, answer support messages, and improve Mel’s Lux Hairs.",
  },
  {
    title: "Sharing",
    body: "We only share what’s necessary with delivery partners and payment providers to complete your order. We do not sell your personal information.",
  },
  {
    title: "Your choices",
    body: "You can ask us to update or remove your contact details by emailing hello@melsluxhairs.com. Some order records may be kept for accounting and legal reasons.",
  },
];

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        description="How Mel’s Lux Hairs collects, uses, and protects your information."
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
