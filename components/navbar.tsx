"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, ShoppingBag, Heart, User, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const categories = [
  "New Arrivals",
  "Handbags",
  "Clothing",
  "Footwear",
  "Curve",
  "Accessories",
  "Summer Collection",
  "Sale",
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-background"
      )}
    >
      {/* Top Navbar */}
      <nav className="border-b border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="font-serif text-2xl font-bold tracking-wider">
                LUXE
              </span>
            </Link>

            {/* Desktop Navigation Icons */}
            <div className="flex items-center gap-1 sm:gap-2">
              <Button variant="ghost" size="icon" className="hover:bg-secondary">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-secondary hidden sm:flex">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Wishlist</span>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-secondary hidden sm:flex">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Button>
              <CartDrawer />
            </div>
          </div>
        </div>
      </nav>

      {/* Category Navigation - Desktop */}
      <nav className="hidden lg:block bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center justify-center gap-8 py-3">
            {categories.map((category) => (
              <li key={category}>
                <Link
                  href={`/category/${category.toLowerCase().replace(" ", "-")}`}
                  className="relative text-sm font-medium tracking-wide transition-colors hover:text-primary-foreground/80 group"
                >
                  {category}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary-foreground transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border animate-in slide-in-from-top-2">
          <div className="px-4 py-4 space-y-4">
            <div className="flex gap-4 pb-4 border-b border-border">
              <Button variant="ghost" size="sm" className="flex-1">
                <Heart className="h-4 w-4 mr-2" />
                Wishlist
              </Button>
              <Button variant="ghost" size="sm" className="flex-1">
                <User className="h-4 w-4 mr-2" />
                Account
              </Button>
            </div>
            <ul className="space-y-1">
              {categories.map((category) => (
                <li key={category}>
                  <Link
                    href={`/category/${category.toLowerCase().replace(" ", "-")}`}
                    className="block py-2 text-sm font-medium tracking-wide hover:text-muted-foreground transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}

function CartDrawer() {
  const cartItems = [
    {
      id: 1,
      name: "Floral Summer Dress",
      price: 89.00,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=100&h=100&fit=crop",
    },
    {
      id: 2,
      name: "Leather Crossbody Bag",
      price: 129.00,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=100&h=100&fit=crop",
    },
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="hover:bg-secondary relative">
          <ShoppingBag className="h-5 w-5" />
          <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-primary text-primary-foreground text-[10px] font-medium flex items-center justify-center">
            {cartItems.length}
          </span>
          <span className="sr-only">Cart</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="font-serif text-xl">Shopping Bag</SheetTitle>
        </SheetHeader>
        <div className="mt-6 flex-1 overflow-auto">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-muted-foreground">
              <ShoppingBag className="h-12 w-12 mb-4" />
              <p>Your bag is empty</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li key={item.id} className="flex gap-4 py-4 border-b border-border">
                  <div className="h-20 w-20 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">{item.name}</h3>
                    <p className="text-muted-foreground text-sm mt-1">Qty: {item.quantity}</p>
                    <p className="font-medium mt-1">${item.price.toFixed(2)}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <X className="h-4 w-4" />
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="border-t border-border pt-4 mt-4 space-y-4">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Shipping and taxes calculated at checkout.
            </p>
            <Button className="w-full" size="lg">
              Checkout
            </Button>
            <Button variant="outline" className="w-full" size="lg">
              View Bag
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
