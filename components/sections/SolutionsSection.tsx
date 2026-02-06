"use client"

import { PackageOpen, Zap, Handshake, HeartPulse, type LucideIcon } from "lucide-react"
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion"
import { GlowingEffect } from "@/components/ui/glowing-effect"

const solutions: {
  icon: LucideIcon
  title: string
  description: string
  color: { bg: string; text: string; accent: string; glow: string }
}[] = [
  {
    icon: PackageOpen,
    title: "Access",
    description:
      "Direct access to virtually every wound care product on the market — no intermediaries, no restrictions.",
    color: {
      bg: "bg-cyan-500/10",
      text: "text-cyan-600",
      accent: "bg-cyan-500",
      glow: "hover:shadow-cyan-500/20",
    },
  },
  {
    icon: Zap,
    title: "Speed",
    description:
      "Remarkably prompt service with next-day shipping so your patients never have to wait.",
    color: {
      bg: "bg-emerald-500/10",
      text: "text-emerald-600",
      accent: "bg-emerald-500",
      glow: "hover:shadow-emerald-500/20",
    },
  },
  {
    icon: Handshake,
    title: "Manufacturer Relationships",
    description:
      "Strong partnerships with premier manufacturers of advanced wound care products.",
    color: {
      bg: "bg-amber-500/10",
      text: "text-amber-600",
      accent: "bg-amber-500",
      glow: "hover:shadow-amber-500/20",
    },
  },
  {
    icon: HeartPulse,
    title: "Clinical Quality",
    description:
      "Clinical-grade, evidence-based product selection from trusted, FDA-approved manufacturers.",
    color: {
      bg: "bg-violet-500/10",
      text: "text-violet-600",
      accent: "bg-violet-500",
      glow: "hover:shadow-violet-500/20",
    },
  },
]

export function SolutionsSection() {
  return (
    <section className="bg-gradient-to-b from-white via-slate-50/30 to-white relative">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="container mx-auto relative z-10">
        {/* Centered section header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <FadeUp>
            <p className="text-primary font-semibold tracking-widest uppercase text-xs mb-4">
              Why Choose Us
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 leading-[1.1] tracking-tight">
              The Difference With Apple Seed
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
              A trusted medical supply partner with fast access to elite wound care products
            </p>
          </FadeUp>
        </div>

        {/* 4-column card grid */}
        <StaggerContainer staggerDelay={0.12} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {solutions.map((solution, index) => (
            <StaggerItem key={index}>
              <div
                className={`relative group p-6 md:p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl ${solution.color.glow} transition-all duration-500 hover:-translate-y-1.5 h-full text-center`}
              >
                <GlowingEffect
                  spread={40}
                  glow={true}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
                <div className="relative z-10 flex flex-col items-center">
                  {/* Colored icon */}
                  <div
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl ${solution.color.bg} flex items-center justify-center mb-5`}
                  >
                    <solution.icon className={`h-7 w-7 ${solution.color.text}`} />
                  </div>

                  {/* Title + accent line */}
                  <h3 className="text-lg font-bold text-foreground mb-2 tracking-tight">
                    {solution.title}
                  </h3>
                  <div
                    className={`h-0.5 w-8 ${solution.color.accent} rounded-full mb-4 transition-all duration-500 group-hover:w-12`}
                  />

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
