"use client"

import { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    title: "Summer Collection",
    subtitle: "Embrace the Season",
    description: "Light fabrics, bold prints, and effortless elegance",
    cta: "SHOP NOW",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&h=1080&fit=crop",
    theme: "light" as const,
  },
  {
    id: 2,
    title: "New Arrivals",
    subtitle: "Fresh Styles Daily",
    description: "Be the first to discover our latest pieces",
    cta: "VIEW COLLECTION",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&h=1080&fit=crop",
    theme: "dark" as const,
  },
  {
    id: 3,
    title: "Luxury Handbags",
    subtitle: "Timeless Elegance",
    description: "Crafted for those who appreciate the finer things",
    cta: "EXPLORE",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1920&h=1080&fit=crop",
    theme: "light" as const,
  },
  {
    id: 4,
    title: "Beachwear",
    subtitle: "Sun, Sand, Style",
    description: "Resort-ready looks for your next escape",
    cta: "SHOP THE EDIT",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop",
    theme: "dark" as const,
  },
  {
    id: 5,
    title: "Floral Fashion",
    subtitle: "Garden Party Ready",
    description: "Blooming prints for every occasion",
    cta: "DISCOVER",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&h=1080&fit=crop",
    theme: "light" as const,
  },
]

export function HeroCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  )

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[85vh] overflow-hidden">
      <div ref={emblaRef} className="h-full overflow-hidden">
        <div className="flex h-full">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative flex-[0_0_100%] min-w-0 h-full"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-full w-full object-cover"
                />
                <div
                  className={cn(
                    "absolute inset-0",
                    slide.theme === "dark"
                      ? "bg-black/40"
                      : "bg-white/20"
                  )}
                />
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center justify-center text-center px-4">
                <div className="max-w-2xl space-y-4 sm:space-y-6">
                  <p
                    className={cn(
                      "text-xs sm:text-sm font-medium tracking-[0.3em] uppercase animate-in fade-in slide-in-from-bottom-4 duration-700",
                      slide.theme === "dark" ? "text-white/80" : "text-foreground/70"
                    )}
                  >
                    {slide.subtitle}
                  </p>
                  <h1
                    className={cn(
                      "font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 text-balance",
                      slide.theme === "dark" ? "text-white" : "text-foreground"
                    )}
                  >
                    {slide.title}
                  </h1>
                  <p
                    className={cn(
                      "text-sm sm:text-base md:text-lg max-w-md mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200",
                      slide.theme === "dark" ? "text-white/90" : "text-foreground/80"
                    )}
                  >
                    {slide.description}
                  </p>
                  <div className="animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300 pt-2">
                    <Button
                      size="lg"
                      className={cn(
                        "px-8 sm:px-12 py-5 sm:py-6 text-xs sm:text-sm font-semibold tracking-widest transition-all duration-300",
                        slide.theme === "dark"
                          ? "bg-white text-black hover:bg-white/90"
                          : "bg-primary text-primary-foreground hover:bg-primary/90"
                      )}
                    >
                      {slide.cta}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white text-foreground shadow-lg transition-all duration-300 hover:scale-105"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white text-foreground shadow-lg transition-all duration-300 hover:scale-105"
        onClick={scrollNext}
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        <span className="sr-only">Next slide</span>
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              selectedIndex === index
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/70"
            )}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </section>
  )
}
