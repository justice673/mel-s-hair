import type { Metadata } from "next";
import { Suspense } from "react";
import PageShell from "@/components/PageShell";
import ShopCatalog from "@/components/shop/ShopCatalog";

export const metadata: Metadata = {
  title: "Shop Wigs | Mel's Lux Hairs",
  description:
    "Browse premium wigs by texture, length, and lace type at Mel's Lux Hairs.",
};

export default function ShopPage() {
  return (
    <PageShell>
      <Suspense fallback={<div className="px-5 py-16 text-cocoa-muted">Loading shop…</div>}>
        <ShopCatalog />
      </Suspense>
    </PageShell>
  );
}
