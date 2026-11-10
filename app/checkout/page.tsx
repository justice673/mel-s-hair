import type { Metadata } from "next";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Checkout | Mel's Lux Hairs",
  description:
    "Complete your Mel's Lux Hairs order and send it to Mel on WhatsApp.",
};

export default function CheckoutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Checkout"
        title="Send your order"
        description="Confirm your details and we’ll open WhatsApp with your bag ready for Mel."
      />
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <CheckoutForm />
      </section>
    </PageShell>
  );
}
