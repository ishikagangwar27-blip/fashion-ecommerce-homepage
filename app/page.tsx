import { Navbar } from "@/components/navbar"
import { HeroCarousel } from "@/components/hero-carousel"
import { ShopByCategory } from "@/components/shop-by-category"
import { FeaturedProducts } from "@/components/featured-products"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Spacer for fixed navbar */}
      <div className="h-16 lg:h-[104px]" />
      
      <HeroCarousel />
      <ShopByCategory />
      <FeaturedProducts />
      <Footer />
    </main>
  )
}
