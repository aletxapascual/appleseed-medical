"use client"

import Image from "next/image"
import { Building2, CheckCircle2 } from "lucide-react"
import { FadeUp, SlideInRight, StaggerContainer, StaggerItem } from "@/components/ui/motion"

const manufacturers = [
  { name: "Bio Tissue Technologies", specialty: "Amniotic Products" },
  { name: "Regenerative Sciences", specialty: "Tissue Matrix" },
  { name: "My Medicics Group", specialty: "Advanced Wound Care" },
  { name: "Amnio Technology", specialty: "Dual Layer" },
]

const benefits = [
  "FDA-approved manufacturers only",
  "Direct pricing with no markups",
  "Authentic products guaranteed",
  "Complete traceability",
]

export function TrustedManufacturersSection() {
  return (
    <section className="bg-secondary">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
            <StaggerContainer staggerDelay={0.1} className="mb-8">
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

          {/* Manufacturer Cards */}
          <SlideInRight>
            <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 gap-4">
              {manufacturers.map((manufacturer, index) => (
                <StaggerItem key={index}>
                  <div className="group bg-white hover:bg-primary-light rounded-2xl p-6 lg:p-8 transition-all duration-300 border border-border hover:border-primary/20 shadow-sm hover:shadow-lg">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br from-primary-light to-secondary flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-primary-light transition-colors">
                      <Building2 className="h-8 w-8 lg:h-10 lg:w-10 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm lg:text-base">
                      {manufacturer.name}
                    </h3>
                    <p className="text-xs lg:text-sm text-muted-foreground">
                      {manufacturer.specialty}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </SlideInRight>
        </div>
      </div>
    </section>
  )
}
