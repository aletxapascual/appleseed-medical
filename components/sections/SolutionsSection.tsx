"use client"

import Image from "next/image"
import { DollarSign, Network, Award, Cpu } from "lucide-react"
import { FadeUp, SlideInLeft, StaggerContainer, StaggerItem } from "@/components/ui/motion"
import { GlowingEffect } from "@/components/ui/glowing-effect"

const solutions = [
  {
    icon: DollarSign,
    title: "Revenue Optimization",
    description: "Advanced billing analytics and transparent pricing models that maximize practice profitability while ensuring compliance.",
  },
  {
    icon: Network,
    title: "Direct Access Network",
    description: "Streamlined procurement system that eliminates intermediaries and provides direct manufacturer relationships.",
  },
  {
    icon: Award,
    title: "Clinical Excellence",
    description: "Evidence-based product selection from premier manufacturers specializing in advanced wound care technologies.",
  },
  {
    icon: Cpu,
    title: "Intelligent Automation",
    description: "AI-powered workflow optimization that seamlessly integrates documentation, ordering, and compliance management.",
  },
]

export function SolutionsSection() {
  return (
    <section className="bg-gradient-to-b from-white via-slate-50/30 to-white relative">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
          {/* Image Side */}
          <SlideInLeft className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Premium Glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-sky-500/10 rounded-[2rem] blur-2xl" />

              {/* Main Image */}
              <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden shadow-elevated-lg group">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop"
                  alt="Healthcare professional using digital tablet for medical consultation"
                  fill
                  className="object-cover image-premium group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Premium Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-elevated-lg p-6 max-w-[260px] border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-sky-500/10 flex items-center justify-center">
                    <Network className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground tracking-tight">50+</div>
                    <div className="text-sm text-muted-foreground font-medium">Manufacturer Partners</div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-primary/15 to-primary/5 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 right-1/4 w-40 h-40 bg-gradient-to-br from-sky-500/10 to-cyan-500/5 rounded-full blur-3xl" />
            </div>
          </SlideInLeft>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <FadeUp>
              <p className="text-primary font-semibold tracking-widest uppercase text-xs mb-6">
                Why Choose Us
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 md:mb-8 leading-[1.1] tracking-tight">
                Comprehensive Solutions for Modern Healthcare
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 md:mb-12 font-light">
                Medical-grade solutions designed for modern healthcare practices
              </p>
            </FadeUp>

            <StaggerContainer staggerDelay={0.15} className="grid sm:grid-cols-2 gap-3 md:gap-5">
              {solutions.map((solution, index) => (
                <StaggerItem key={index}>
                  <div className="relative group p-5 md:p-7 rounded-xl md:rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 h-full">
                    <GlowingEffect
                      spread={40}
                      glow={true}
                      proximity={64}
                      inactiveZone={0.01}
                      borderWidth={2}
                    />
                    <div className="relative z-10">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center mb-4 md:mb-5 group-hover:from-primary/10 group-hover:to-sky-500/10 transition-all duration-500">
                        <solution.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                      </div>
                      <h3 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3 tracking-tight">
                        {solution.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  )
}
