import BrandStory from "@/components/BrandStory";
import FeaturedProducts from "@/components/FeaturedProducts";
import FlashSale from "@/components/FlashSale";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import Newsletter from "@/components/Newsletter";
import ShopByTexture from "@/components/ShopByTexture";
import ShopWithConfidence from "@/components/ShopWithConfidence";
import Testimonials from "@/components/Testimonials";
import WhyMels from "@/components/WhyMels";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <ShopByTexture />
      <NewArrivals />
      <FeaturedProducts />
      <FlashSale />
      <BrandStory />
      <WhyMels />
      <ShopWithConfidence />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
