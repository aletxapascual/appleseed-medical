"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeUp, FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/why-us", label: "Why Us" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/platform", label: "Platform" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-primary to-primary-dark">
      {/* CTA Section */}
      <div className="bg-primary-light">
        <div className="container mx-auto py-12 md:py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-center lg:text-left max-w-xl">
              <FadeUp>
                <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-sm font-semibold text-primary mb-4">
                  Get Started Today
                </span>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-dark mb-4 leading-tight">
                  Ready to Simplify Your Wound Care Supply?
                </h3>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="text-primary/70 text-lg">
                  Contact us today for a personalized consultation and see the difference.
                </p>
              </FadeUp>
            </div>
            <FadeUp delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="text-base px-8 bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    Get Started
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300"
                  asChild
                >
                  <a href="tel:+18552733633" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Call Us
                  </a>
                </Button>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto pt-16 pb-8">
        {/* Top Section - Logo and Nav */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 md:gap-12 pb-8 md:pb-12">
          {/* Logo & Description */}
          <div className="max-w-md">
            <Image
              src="/logos/appleseed_N%20Horizontal.svg"
              alt="Apple Seed Medical"
              width={200}
              height={48}
              className="h-12 w-auto brightness-0 invert mb-5"
            />
            <p className="text-blue-200/80 leading-relaxed">
              Your trusted partner for advanced wound care solutions. Direct access to premium products with next-day shipping.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3 lg:gap-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-blue-100 hover:text-white transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Middle Section - Contact Cards */}
        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 py-8 md:py-12">
          <StaggerItem>
            <a
              href="tel:+18552733633"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-primary-dark/40 hover:bg-primary-dark/60 transition-all duration-300"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-400/20 flex items-center justify-center group-hover:bg-blue-400/30 transition-colors">
                <Phone className="h-4 w-4 md:h-5 md:w-5 text-blue-200" />
              </div>
              <div>
                <p className="text-xs text-blue-300/60 uppercase tracking-wider mb-1">Phone</p>
                <p className="text-white font-semibold">(855) 273-3633</p>
              </div>
            </a>
          </StaggerItem>

          <StaggerItem>
            <a
              href="mailto:support@appleseedmedical.com"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-primary-dark/40 hover:bg-primary-dark/60 transition-all duration-300"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-400/20 flex items-center justify-center group-hover:bg-blue-400/30 transition-colors">
                <Mail className="h-4 w-4 md:h-5 md:w-5 text-blue-200" />
              </div>
              <div>
                <p className="text-xs text-blue-300/60 uppercase tracking-wider mb-1">Email</p>
                <p className="text-white font-semibold">support@appleseed.com</p>
              </div>
            </a>
          </StaggerItem>

          <StaggerItem>
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-primary-dark/40">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-400/20 flex items-center justify-center">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-blue-200" />
              </div>
              <div>
                <p className="text-xs text-blue-300/60 uppercase tracking-wider mb-1">Location</p>
                <p className="text-white font-semibold">Austin, Texas</p>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
          <p className="text-sm text-blue-200/60">
            © {new Date().getFullYear()} Apple Seed Medical. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link href="#" className="text-sm text-blue-200/60 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-blue-200/60 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
