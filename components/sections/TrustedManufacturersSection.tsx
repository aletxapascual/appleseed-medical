"use client"

import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { FadeUp, SlideInRight, StaggerContainer, StaggerItem } from "@/components/ui/motion"

const benefits = [
  "FDA-approved manufacturers only",
  "Direct pricing with no markups",
  "Authentic products guaranteed",
  "Complete traceability",
]

export function TrustedManufacturersSection() {
  return (
    <section className="bg-secondary relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <FadeUp>
              <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
                Our Partners
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Access to Every Manufacturer of Advanced Wound Care Products
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-muted-foreground text-lg mb-8">
                Clinical-grade, evidence-based product selection from premier manufacturers specializing in advanced wound care technologies.
              </p>
            </FadeUp>

            {/* Benefits List */}
            <StaggerContainer staggerDelay={0.1} className="mb-10">
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <StaggerItem key={index}>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  </StaggerItem>
                ))}
              </ul>
            </StaggerContainer>

            {/* Stats */}
            <FadeUp delay={0.4}>
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                <div>
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Partners</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">100+</div>
                  <div className="text-sm text-muted-foreground">Products</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-muted-foreground">Quality Rate</div>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Image collage */}
          <SlideInRight>
            <div className="relative">
              {/* Glow behind */}
              <div className="absolute -inset-8 bg-gradient-to-br from-primary/10 to-sky-400/10 rounded-[3rem] blur-3xl" />

              <div className="relative grid grid-cols-2 gap-4">
                {/* Top-left tall image */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop"
                    alt="Medical laboratory research"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                {/* Right column — two stacked images */}
                <div className="space-y-4">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=800&auto=format&fit=crop"
                      alt="Advanced wound care products"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
                  </div>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"
                      alt="Healthcare professional consultation"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl border border-slate-100 px-6 py-4 z-10">
                <p className="text-center text-sm font-semibold text-foreground">Trusted by healthcare providers nationwide</p>
              </div>
            </div>
          </SlideInRight>
        </div>
      </div>
    </section>
  )
}
