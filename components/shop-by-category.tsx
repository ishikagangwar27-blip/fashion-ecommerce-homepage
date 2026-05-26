"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const categories = [
  { name: "Tops", image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=400&fit=crop" },
  { name: "Dresses", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop" },
  { name: "Handbags", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop" },
  { name: "Curve", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop" },
  { name: "Footwear", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop" },
  { name: "Co-ords", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=400&fit=crop" },
  { name: "Skirts", image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaec?w=400&h=400&fit=crop" },
  { name: "Winters", image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=400&fit=crop" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export function ShopByCategory() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 sm:mb-12"
      >
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
          SHOP BY CATEGORY
        </h2>
        <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-md mx-auto">
          Discover our curated collections
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-wrap justify-center gap-3 sm:gap-4"
      >
        {categories.map((category, index) => (
          <motion.button
            key={category.name}
            variants={itemVariants}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "group relative px-5 sm:px-8 py-3 sm:py-4 rounded-full border border-border transition-all duration-300",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
              hoveredIndex === index 
                ? "bg-primary text-primary-foreground border-primary shadow-lg" 
                : "bg-background hover:border-primary"
            )}
          >
            <span className="text-xs sm:text-sm font-medium tracking-wide">
              {category.name}
            </span>

            {/* Hover Preview Image */}
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden shadow-2xl pointer-events-none z-10"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        ))}
      </motion.div>
    </section>
  )
}
