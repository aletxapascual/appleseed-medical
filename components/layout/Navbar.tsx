"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/why-us", label: "Why Us" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/platform", label: "Platform" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto">
        {/* Top Bar - only show when scrolled on desktop */}
        <div className={cn(
          "hidden lg:flex items-center justify-end py-2 text-sm border-b transition-colors duration-300",
          isScrolled ? "border-border/50" : "border-white/10"
        )}>
          <a
            href="tel:+18552733633"
            className={cn(
              "flex items-center gap-2 transition-colors",
              isScrolled
                ? "text-muted-foreground hover:text-primary"
                : "text-white/80 hover:text-white"
            )}
          >
            <Phone className="h-3.5 w-3.5" />
            (855) 273-3633
          </a>
        </div>

        {/* Main Navigation */}
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/appleseed_Horizontal.svg"
              alt="Apple Seed Medical"
              width={200}
              height={48}
              className={cn(
                "h-12 w-auto transition-all duration-300",
                !isScrolled && "brightness-0 invert"
              )}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors relative py-2",
                  isScrolled
                    ? pathname === link.href
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                    : pathname === link.href
                      ? "text-white"
                      : "text-white/80 hover:text-white",
                  pathname === link.href &&
                    "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:rounded-full",
                  pathname === link.href && isScrolled
                    ? "after:bg-primary"
                    : pathname === link.href && "after:bg-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="outline"
              className={cn(
                "transition-colors",
                !isScrolled && "border-white/30 text-white hover:bg-white/10"
              )}
              asChild
            >
              <a href="tel:+18552733633">Call Us</a>
            </Button>
            <Button
              className={cn(
                !isScrolled && "bg-white text-primary hover:bg-white/90"
              )}
              asChild
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "md:hidden",
              !isScrolled && "text-white hover:bg-white/10"
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-border shadow-lg">
          <nav className="container mx-auto flex flex-col py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "py-3 text-base font-medium transition-colors border-b border-border/50",
                  pathname === link.href
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-6">
              <Button variant="outline" asChild className="w-full">
                <a href="tel:+18552733633">
                  <Phone className="h-4 w-4 mr-2" />
                  (855) 273-3633
                </a>
              </Button>
              <Button asChild className="w-full">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
