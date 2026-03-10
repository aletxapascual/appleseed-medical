"use client"

import Image from "next/image"
import Link from "next/link"
import { Truck, Factory, ShieldCheck, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeUp, SlideInRight, Float } from "@/components/ui/motion"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-50/40 flex items-center">
      {/* Subtle grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,#000_40%,transparent_100%)]" />
      </div>

      {/* Soft glow orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/[0.07] rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-sky-400/[0.06] rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10 px-6 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text + CTAs */}
          <div>
            <FadeUp>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
                <ShieldCheck className="h-4 w-4" />
                Trusted Wound Care Partner
              </span>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight">
                Wound Care{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-sky-600 to-primary-dark">
                  Made Simple
                </span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mb-10">
                No pressure. Direct access to virtually every wound care product with remarkably prompt service and next-day shipping. Experience the difference with Appleseed Medical.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="flex flex-wrap gap-4 mb-12">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-1 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/products">Browse Products</Link>
                </Button>
              </div>
            </FadeUp>

            <FadeUp delay={0.4}>
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Truck className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-medium">Next-Day Shipping</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Factory className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-medium">50+ Manufacturers</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-medium">FDA-Approved Products</span>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Right — Image */}
          <SlideInRight className="hidden lg:block relative">
            <div className="relative">
              {/* Premium glow behind image */}
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/15 to-sky-400/10 rounded-[2.5rem] blur-3xl" />

              {/* Main image */}
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop"
                  alt="Healthcare professional using digital tablet for wound care consultation"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Floating stat badge */}
              <Float duration={4} distance={8}>
                <div className="absolute -bottom-4 -left-6 bg-white rounded-2xl shadow-xl border border-slate-100 px-5 py-4">
                  <p className="text-2xl font-bold text-foreground">50+</p>
                  <p className="text-xs text-muted-foreground font-medium">Manufacturer Partners</p>
                </div>
              </Float>
            </div>
          </SlideInRight>
        </div>
      </div>
    </section>
  )
}
