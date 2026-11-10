import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { PiArrowLeftLight, PiArrowUpRightLight } from "react-icons/pi";
import PageShell from "@/components/PageShell";
import ProductCard from "@/components/shop/ProductCard";
import ProductGallery from "@/components/shop/ProductGallery";
import ProductPurchase from "@/components/shop/ProductPurchase";
import {
  formatPrice,
  getProductBySlug,
  getProductImages,
  getRelatedProducts,
  products,
} from "@/lib/products";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product | Mel's Lux Hairs" };

  return {
    title: `${product.name} | Mel's Lux Hairs`,
    description: `${product.name} — ${product.detail}. ${product.texture} texture, ${product.lace}. Premium wig from Mel's Lux Hairs, Cameroon.`,
  };
}

function ProductDetailFallback() {
  return (
    <div className="mx-auto max-w-7xl animate-pulse px-5 py-16 sm:px-8 lg:px-10">
      <div className="h-3 w-28 bg-blush" />
      <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="aspect-[4/5] bg-blush" />
        <div className="space-y-4">
          <div className="h-3 w-24 bg-blush" />
          <div className="h-12 w-3/4 bg-blush" />
          <div className="h-4 w-1/2 bg-blush" />
          <div className="h-8 w-40 bg-blush" />
        </div>
      </div>
    </div>
  );
}

async function ProductDetail({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);
  const badge = product.isNew
    ? "New arrival"
    : product.isBestSeller
      ? "Best seller"
      : null;
  const textureSlug = product.texture.toLowerCase();

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-12 lg:px-10 lg:py-16">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-cocoa-muted transition-colors hover:text-cocoa"
        >
          <PiArrowLeftLight size={16} />
          Back to shop
        </Link>

        <div className="mt-8 grid items-start gap-10 lg:mt-12 lg:grid-cols-2 lg:gap-16">
          <ProductGallery
            name={product.name}
            images={getProductImages(product)}
          />

          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-champagne-deep">
              {badge ?? "Mel's Lux Hairs"}
            </p>

            <h1 className="mt-4 font-heading text-[clamp(2.4rem,5vw,3.8rem)] font-medium leading-[0.95] tracking-[-0.02em] text-cocoa">
              {product.name}
            </h1>

            <p className="mt-4 text-[1.05rem] font-light text-cocoa-muted">
              {product.detail}
            </p>

            <p className="mt-6 font-heading text-3xl font-medium tracking-tight text-cocoa">
              {formatPrice(product.price)}
            </p>

            <p className="mt-8 max-w-md text-[1.02rem] font-light leading-relaxed text-cocoa-soft">
              A {product.texture.toLowerCase()} unit with{" "}
              {product.lace.toLowerCase()} construction — soft density, clean
              finish, made for everyday glam and easy installs.
            </p>

            <dl className="mt-10 grid grid-cols-3 gap-4 border-y border-line py-6">
              <div>
                <dt className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-cocoa-muted">
                  Texture
                </dt>
                <dd className="mt-2 text-[0.95rem] text-cocoa">
                  <Link
                    href={`/textures/${textureSlug}`}
                    className="transition-opacity hover:opacity-70"
                  >
                    {product.texture}
                  </Link>
                </dd>
              </div>
              <div>
                <dt className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-cocoa-muted">
                  Length
                </dt>
                <dd className="mt-2 text-[0.95rem] text-cocoa">{product.length}</dd>
              </div>
              <div>
                <dt className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-cocoa-muted">
                  Lace
                </dt>
                <dd className="mt-2 text-[0.95rem] text-cocoa">{product.lace}</dd>
              </div>
            </dl>

            <ProductPurchase product={product} />

            <ul className="mt-10 space-y-2.5 text-[0.9rem] font-light text-cocoa-muted">
              <li>Ships across Cameroon · WhatsApp checkout</li>
              <li>Soft lace · Ready for everyday wear</li>
              <li>Need help sizing? Message us from Contact</li>
            </ul>
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="border-t border-line px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-champagne-deep">
                  You may also like
                </p>
                <h2 className="mt-3 font-heading text-[clamp(2rem,4vw,2.8rem)] font-medium tracking-tight text-cocoa">
                  More {product.texture.toLowerCase()} units
                </h2>
              </div>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 text-[0.74rem] font-medium uppercase tracking-[0.18em] text-cocoa transition-opacity hover:opacity-70"
              >
                Shop all
                <PiArrowUpRightLight size={16} />
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-6">
              {related.map((entry) => (
                <ProductCard key={entry.id} product={entry} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}

export default function ProductDetailPage({ params }: PageProps) {
  return (
    <PageShell>
      <Suspense fallback={<ProductDetailFallback />}>
        <ProductDetail params={params} />
      </Suspense>
    </PageShell>
  );
}
