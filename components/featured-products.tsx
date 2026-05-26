"use client"

import { useState } from "react"
import { Star, Heart, ShoppingBag } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "Floral Print Midi Dress",
    price: 89.00,
    originalPrice: 120.00,
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&h=650&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=650&fit=crop",
    isNew: true,
    isSale: false,
  },
  {
    id: 2,
    name: "Leather Crossbody Bag",
    price: 129.00,
    originalPrice: null,
    rating: 4.9,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=650&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=650&fit=crop",
    isNew: false,
    isSale: false,
  },
  {
    id: 3,
    name: "Strappy Block Heel Sandals",
    price: 69.00,
    originalPrice: 95.00,
    rating: 4.6,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=650&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1596703263926-eb0762ee17e4?w=500&h=650&fit=crop",
    isNew: false,
    isSale: true,
  },
  {
    id: 4,
    name: "Oversized Linen Blazer",
    price: 145.00,
    originalPrice: null,
    rating: 4.7,
    reviews: 45,
    image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=500&h=650&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=650&fit=crop",
    isNew: true,
    isSale: false,
  },
  {
    id: 5,
    name: "Silk Blend Camisole Top",
    price: 49.00,
    originalPrice: null,
    rating: 4.5,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500&h=650&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=500&h=650&fit=crop",
    isNew: false,
    isSale: false,
  },
  {
    id: 6,
    name: "High-Waist Wide Leg Pants",
    price: 79.00,
    originalPrice: 110.00,
    rating: 4.8,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&h=650&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&h=650&fit=crop",
    isNew: false,
    isSale: true,
  },
  {
    id: 7,
    name: "Pearl Statement Earrings",
    price: 35.00,
    originalPrice: null,
    rating: 4.9,
    reviews: 212,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=650&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=650&fit=crop",
    isNew: true,
    isSale: false,
  },
  {
    id: 8,
    name: "Wrap Front Maxi Skirt",
    price: 65.00,
    originalPrice: null,
    rating: 4.6,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=650&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaec?w=500&h=650&fit=crop",
    isNew: false,
    isSale: false,
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
          FEATURED PRODUCTS
        </h2>
        <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-md mx-auto">
          Handpicked pieces you&apos;ll love
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center mt-10 sm:mt-12">
        <Button variant="outline" size="lg" className="px-10 sm:px-16 tracking-widest font-medium">
          VIEW ALL PRODUCTS
        </Button>
      </div>
    </section>
  )
}

interface Product {
  id: number
  name: string
  price: number
  originalPrice: number | null
  rating: number
  reviews: number
  image: string
  hoverImage: string
  isNew: boolean
  isSale: boolean
}

function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isWishlisted, setIsWishlisted] = useState(false)

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-secondary">
        <img
          src={isHovered ? product.hoverImage : product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-all duration-500 ease-out group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex flex-col gap-1 sm:gap-2">
          {product.isNew && (
            <span className="bg-primary text-primary-foreground text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
              NEW
            </span>
          )}
          {product.isSale && (
            <span className="bg-accent text-accent-foreground text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
              SALE
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className={cn(
            "absolute top-2 sm:top-3 right-2 sm:right-3 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300",
            "hover:bg-white hover:scale-110",
            "focus:outline-none focus:ring-2 focus:ring-primary"
          )}
        >
          <Heart
            className={cn(
              "h-4 w-4 sm:h-5 sm:w-5 transition-colors",
              isWishlisted ? "fill-red-500 text-red-500" : "text-foreground"
            )}
          />
          <span className="sr-only">Add to wishlist</span>
        </button>

        {/* Quick Add Button */}
        <div
          className={cn(
            "absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 transition-all duration-300",
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          )}
        >
          <Button
            className="w-full text-xs sm:text-sm font-medium tracking-wide shadow-lg"
            size="sm"
          >
            <ShoppingBag className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
            ADD TO BAG
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-3 sm:mt-4 space-y-1 sm:space-y-2">
        <h3 className="text-xs sm:text-sm font-medium line-clamp-2 group-hover:text-muted-foreground transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-3 w-3",
                  i < Math.floor(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-muted text-muted"
                )}
              />
            ))}
          </div>
          <span className="text-[10px] sm:text-xs text-muted-foreground">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="font-semibold text-sm sm:text-base">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-xs sm:text-sm text-muted-foreground line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
