"use client"

import { ProductCatalog } from "@/components/sections/ProductCatalog"
import { FadeUp } from "@/components/ui/motion"

export default function ProductsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary py-0 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
        </div>
        <div className="container mx-auto pt-20 pb-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FadeUp>
              <p className="text-blue-200 font-medium tracking-wide uppercase text-sm mb-4">
                Our Catalog
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Wound Care Solutions
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-lg text-blue-100 leading-relaxed">
                Browse our curated catalog of premium wound care products delivered through
                a digital-first, rep-free platform
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <ProductCatalog />
    </>
  )
}
