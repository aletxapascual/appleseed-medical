"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Phone, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-md">
      {/* Premium Top Bar */}
      <div
        className={cn(
          "hidden lg:block transition-all duration-500 overflow-hidden",
          isScrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        )}
      >
        <div className="bg-gradient-to-r from-primary-dark via-primary to-primary-dark">
          <div className="container mx-auto">
            <div className="flex items-center justify-between py-2.5 text-sm">
              <p className="text-white/90 font-light tracking-wide">
                Trusted by leading healthcare providers nationwide
              </p>
              <div className="flex items-center gap-6">
                <a
                  href="tel:+18582995458"
                  className="flex items-center gap-2 text-white/90 hover:text-white transition-colors font-medium"
                >
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <Phone className="h-3 w-3" />
                  </div>
                  (858) 299-5458
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className={cn(
          "bg-transparent transition-all duration-500",
          isScrolled && "shadow-elevated"
        )}
      >
        <div className="container mx-auto">
          <div className="flex h-[64px] md:h-[72px] items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center relative z-10">
              <Image
                src="/logos/appleseed_Horizontal.svg"
                alt="Appleseed Medical"
                width={180}
                height={44}
                className="h-9 sm:h-10 md:h-11 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              <div className="flex items-center gap-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-lg group",
                        isActive
                          ? "text-primary"
                          : "text-slate-700 hover:text-primary hover:bg-primary/5"
                      )}
                    >
                      {link.label}
                      {/* Active indicator */}
                      <span
                        className={cn(
                          "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary rounded-full transition-all duration-300",
                          isActive ? "w-6" : "w-0 group-hover:w-4"
                        )}
                      />
                    </Link>
                  )
                })}
              </div>
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+18582995458"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-primary hover:bg-primary/5 transition-all duration-300"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden xl:inline">Call Us</span>
              </a>
              <Button
                className="group font-medium tracking-wide bg-primary hover:bg-primary-dark text-white shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
                asChild
              >
                <Link href="/contact" className="flex items-center gap-1.5">
                  Get Started
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Menu</span>
              <div className="relative w-5 h-4">
                <span
                  className={cn(
                    "absolute left-0 w-5 h-0.5 bg-slate-700 rounded-full transition-all duration-300",
                    isOpen ? "top-1.5 rotate-45" : "top-0"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-1.5 w-5 h-0.5 bg-slate-700 rounded-full transition-all duration-300",
                    isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 w-5 h-0.5 bg-slate-700 rounded-full transition-all duration-300",
                    isOpen ? "top-1.5 -rotate-45" : "top-3"
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl shadow-black/10 transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container mx-auto py-4">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center justify-between py-3 px-4 rounded-lg text-base font-medium transition-all duration-200",
                    isActive
                      ? "bg-primary/5 text-primary"
                      : "text-slate-700 hover:bg-slate-50 hover:text-primary"
                  )}
                >
                  {link.label}
                  <ChevronRight
                    className={cn(
                      "h-4 w-4 transition-colors",
                      isActive ? "text-primary" : "text-slate-400"
                    )}
                  />
                </Link>
              )
            })}
          </div>

          {/* Mobile CTAs */}
          <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
            <a
              href="tel:+18582995458"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors"
            >
              <Phone className="h-4 w-4" />
              (858) 299-5458
            </a>
            <Button asChild className="w-full shadow-md shadow-primary/20">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-1.5"
              >
                Get Started
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
