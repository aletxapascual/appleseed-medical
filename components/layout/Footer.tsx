import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/why-us", label: "Why Us" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/platform", label: "Platform" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
]

const productCategories = [
  "Amniotic",
  "Collagen",
  "Keratin",
]

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary to-primary-dark">
        <div className="container mx-auto py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Ready to Simplify Your Wound Care Supply?
              </h3>
              <p className="text-blue-100 text-lg">
                Contact us today for a personalized consultation.
              </p>
            </div>
            <Button size="lg" className="text-base px-8 bg-white text-primary hover:bg-blue-50" asChild>
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Image
              src="/logos/appleseed_N%20Horizontal.svg"
              alt="Apple Seed Medical"
              width={180}
              height={42}
              className="h-10 w-auto brightness-0 invert mb-6"
            />
            <p className="text-gray-400 leading-relaxed mb-6">
              Your trusted partner for advanced wound care solutions.
              Direct access to premium products with next-day shipping.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="font-semibold text-lg text-white mb-6">Products</h4>
            <ul className="space-y-4">
              {productCategories.map((category) => (
                <li key={category}>
                  <Link
                    href="/products"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+18552733633"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                  (855) 273-3633
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@appleseedmedical.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                  support@appleseedmedical.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>
                  1250 Innovation Drive, Suite 200
                  <br />
                  Austin, TX 78758
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              {new Date().getFullYear()} Apple Seed Medical. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
