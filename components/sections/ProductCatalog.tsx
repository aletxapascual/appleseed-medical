"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Package, Building2, Eye, ArrowRight, Layers } from "lucide-react"
import Link from "next/link"
import { products, categories, filterProducts, type Product } from "@/lib/products"

const categoryColors: Record<string, string> = {
  "Amniotic": "bg-blue-100 text-blue-700",
  "Collagen": "bg-purple-100 text-purple-700",
  "Keratin": "bg-amber-100 text-amber-700",
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/20 overflow-hidden">
      <CardContent className="p-0">
        {/* Product Image */}
        <div className="relative aspect-[4/3] bg-gradient-to-br from-primary-light to-secondary overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
              <Layers className="h-12 w-12 text-primary/60" />
            </div>
          </div>
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <Badge className={`${categoryColors[product.category] || "bg-gray-100 text-gray-700"} text-xs font-medium border-0`}>
              {product.category}
            </Badge>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-2 leading-tight group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Building2 className="h-4 w-4" />
            {product.manufacturer}
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-2">
            {product.description}
          </p>

          {/* Sizes */}
          <div className="mb-6">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">
              Available sizes:
            </p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.slice(0, 4).map((size, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1.5 bg-secondary rounded-full text-foreground font-medium"
                >
                  {size}
                </span>
              ))}
              {product.sizes.length > 4 && (
                <span className="text-xs px-3 py-1.5 bg-secondary rounded-full text-muted-foreground font-medium">
                  +{product.sizes.length - 4} more
                </span>
              )}
            </div>
          </div>

          {/* Q Code */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <span className="text-sm text-muted-foreground">
              Q Code: <span className="font-mono font-semibold text-foreground">{product.qCode}</span>
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="px-6 pb-6 flex gap-3">
          <Button variant="outline" size="sm" className="flex-1" asChild>
            <Link href="/contact">
              <Eye className="h-4 w-4 mr-2" />
              Details
            </Link>
          </Button>
          <Button size="sm" className="flex-1" asChild>
            <Link href="/contact">
              Request Access
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = React.useState("All Categories")
  const [sortBy, setSortBy] = React.useState("name")

  const filteredProducts = filterProducts(selectedCategory, "All Manufacturers")

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name)
    if (sortBy === "manufacturer") return a.manufacturer.localeCompare(b.manufacturer)
    return 0
  })

  return (
    <section className="bg-white py-0 pb-16">
      <div className="container mx-auto">
        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 pb-6 border-b border-border">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-48">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="h-11">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="w-full sm:w-48">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="h-11">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Sort by Name</SelectItem>
                  <SelectItem value="manufacturer">Sort by Manufacturer</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <p className="text-muted-foreground text-sm">
            Showing {sortedProducts.length} product{sortedProducts.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
              <Package className="h-10 w-10 text-muted-foreground" />
            </div>
            <p className="text-xl font-semibold text-foreground mb-2">No products found</p>
            <p className="text-muted-foreground mb-6">
              Try selecting a different category.
            </p>
            <Button variant="outline" onClick={() => setSelectedCategory("All Categories")}>
              View All Products
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
