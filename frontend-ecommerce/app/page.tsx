import CarouselTextBanner from "@/components/carousel-text-banner";
import FeaturedProducts from "@/components/featured-products";
import Header from "@/components/header";
import Hero from "@/components/hero";
import BannerDiscount from "@/components/banner-discount";
import CategoryProduct from "@/components/category-product";
import BannerProduct from "@/components/banner-product";
export default function Home() {
  return (
    <main className="pt-12 flex gap-y-20 flex-col justify-between relative">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f5f5f5,transparent_1px),linear-gradient(to_bottom,#f5f5f5,transparent_1px)] bg-[size:6rem_4rem] dark:hidden">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#d1ecff,transparent)]">
        </div>
      </div>

      <Header />
      <Hero/>
      <CarouselTextBanner/>
      <FeaturedProducts/>
      <BannerDiscount/>
      <CategoryProduct/>
      <BannerProduct/>
    </main>
  );
}
