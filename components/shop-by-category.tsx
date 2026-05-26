"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const categories = [
  { name: "Tops", image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=400&fit=crop" },
  { name: "Dresses", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop" },
  { name: "Handbags", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop" },
  { name: "Curve", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop" },
  { name: "Footwear", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop" },
  { name: "Co-ords", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=400&fit=crop" },
  { name: "Skirts", image: "https://images.unsplash.com/photo-1583496661160-fb5886a0uj4?w=400&h=400&fit=crop" },
  { name: "Winters", image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=400&fit=crop" },
]

export function ShopByCategory() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
          SHOP BY CATEGORY
        </h2>
        <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-md mx-auto">
          Discover our curated collections
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        {categories.map((category, index) => (
          <button
            key={category.name}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={cn(
              "group relative px-5 sm:px-8 py-3 sm:py-4 rounded-full border border-border transition-all duration-300",
              "hover:border-primary hover:shadow-lg hover:scale-105",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
              hoveredIndex === index ? "bg-primary text-primary-foreground" : "bg-background"
            )}
          >
            <span className="text-xs sm:text-sm font-medium tracking-wide">
              {category.name}
            </span>
            
            {/* Hover Preview Image */}
            <div
              className={cn(
                "absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden shadow-xl transition-all duration-300 pointer-events-none z-10",
                hoveredIndex === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              )}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
