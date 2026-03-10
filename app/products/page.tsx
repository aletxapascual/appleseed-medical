"use client"

import Link from "next/link"
import { Building2, Layers } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { products, type Product } from "@/lib/products"
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion"

const manufacturerOrder = [
  "Bio Tissue Technologies",
  "Regenerative Sciences",
  "My Medicics Group",
  "Amnio Technology",
]

const categoryColors: Record<string, string> = {
  Amniotic: "bg-blue-100 text-blue-700",
  Collagen: "bg-purple-100 text-purple-700",
  Keratin: "bg-amber-100 text-amber-700",
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/20 overflow-hidden">
      <CardContent className="p-0">
        {/* Product Image */}
        <div className="relative aspect-[3/2] bg-gradient-to-br from-primary-light to-secondary overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
              <Layers className="h-10 w-10 text-primary/60" />
            </div>
          </div>
          <div className="absolute top-3 left-3">
            <Badge
              className={`${categoryColors[product.category] || "bg-gray-100 text-gray-700"} text-xs font-medium border-0`}
            >
              {product.category}
            </Badge>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-foreground mb-1 leading-tight group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <Building2 className="h-3.5 w-3.5" />
            {product.manufacturer}
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
            {product.description}
          </p>

          {/* Sizes */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-1.5">
              {product.sizes.slice(0, 4).map((size, index) => (
                <span
                  key={index}
                  className="text-xs px-2.5 py-1 bg-secondary rounded-full text-foreground font-medium"
                >
                  {size}
                </span>
              ))}
              {product.sizes.length > 4 && (
                <span className="text-xs px-2.5 py-1 bg-secondary rounded-full text-muted-foreground font-medium">
                  +{product.sizes.length - 4} more
                </span>
              )}
            </div>
          </div>

          {/* Q Code & CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <span className="text-sm text-muted-foreground">
              Q Code:{" "}
              <span className="font-mono font-semibold text-foreground">
                {product.qCode}
              </span>
            </span>
            <Button size="sm" variant="outline" asChild>
              <Link href="/contact">Request Access</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function ProductsPage() {
  const productsByManufacturer = manufacturerOrder.map((manufacturer) => ({
    manufacturer,
    products: products.filter((p) => p.manufacturer === manufacturer),
  }))

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary py-0 relative overflow-hidden">
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
                Advanced Wound Care Products
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-lg text-blue-100 leading-relaxed">
                Browse our catalog of premium wound care products organized by
                manufacturer. Direct access with next-day shipping.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Products by Manufacturer */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto">
          {productsByManufacturer.map(
            (group) =>
              group.products.length > 0 && (
                <div key={group.manufacturer} className="mb-16 last:mb-0">
                  <FadeUp>
                    <div className="flex items-center gap-3 mb-8 pb-4 border-b border-border">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Building2 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                          {group.manufacturer}
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          {group.products.length} product
                          {group.products.length !== 1 ? "s" : ""} available
                        </p>
                      </div>
                    </div>
                  </FadeUp>

                  <StaggerContainer
                    staggerDelay={0.08}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {group.products.map((product) => (
                      <StaggerItem key={product.id}>
                        <ProductCard product={product} />
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              )
          )}
        </div>
      </section>
    </>
  )
}
