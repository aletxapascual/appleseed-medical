"use client"

import Image from "next/image"
import { Workflow, ShieldCheck, TrendingUp, Brain, type LucideIcon } from "lucide-react"
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background"
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion"

const pillars: {
  icon: LucideIcon
  category: string
  title: string
  description: string
  image: string
  color: { accent: string; text: string; bg: string }
}[] = [
  {
    icon: Workflow,
    category: "Pillar 01",
    title: "Smarter Workflows",
    description:
      "From eligibility through product access in one place. Streamlined processes that save time and reduce errors.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    color: { accent: "bg-cyan-500", text: "text-cyan-400", bg: "bg-cyan-500/10" },
  },
  {
    icon: ShieldCheck,
    category: "Pillar 02",
    title: "Compliance Confidence",
    description:
      "With documentation support and clear visibility. Automated audit trails and regulatory compliance built-in.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
    color: { accent: "bg-emerald-500", text: "text-emerald-400", bg: "bg-emerald-500/10" },
  },
  {
    icon: TrendingUp,
    category: "Pillar 03",
    title: "Transparent Pricing & Revenue Cycle Support",
    description:
      "Clear pricing with no hidden fees. Revenue cycle support to help you maximize reimbursement while maintaining full compliance.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
    color: { accent: "bg-amber-500", text: "text-amber-400", bg: "bg-amber-500/10" },
  },
  {
    icon: Brain,
    category: "Pillar 04",
    title: "Purpose-Built for Wound Care Access & Documentation",
    description:
      "Built specifically for wound care professionals. Streamlined access to products with documentation support that simplifies your workflow.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
    color: { accent: "bg-violet-500", text: "text-violet-400", bg: "bg-violet-500/10" },
  },
]

export function FourPillarsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <DottedGlowBackground
        containerClassName="absolute inset-0"
        dotColor="rgba(14, 165, 233, 0.15)"
        glowColor="rgba(14, 165, 233, 0.1)"
        dotSpacing={24}
      />

      <div className="relative z-10 py-12 md:py-20 lg:py-32">
        <div className="container mx-auto">
          {/* Section header */}
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
            <FadeUp>
              <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
                Our Foundation
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                Four Pillars That Change Your Wound Care Routine
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-slate-400 text-lg">
                A comprehensive approach designed specifically for wound care professionals
              </p>
            </FadeUp>
          </div>

          {/* 2x2 Grid — image cards */}
          <StaggerContainer staggerDelay={0.12} className="grid md:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto">
            {pillars.map((pillar, index) => (
              <StaggerItem key={index}>
                <div className="relative group h-full rounded-2xl overflow-hidden">
                  {/* Background image */}
                  <div className="absolute inset-0">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Dark overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/85 to-slate-900/60" />
                  </div>

                  {/* Colored top accent bar */}
                  <div className={`relative h-1 ${pillar.color.accent}`} />

                  <div className="relative z-10 p-6 md:p-8">
                    {/* Icon + category label */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`w-11 h-11 rounded-xl ${pillar.color.bg} backdrop-blur-sm flex items-center justify-center`}>
                        <pillar.icon className={`h-5 w-5 ${pillar.color.text}`} />
                      </div>
                      <span className={`text-xs font-semibold tracking-widest uppercase ${pillar.color.text}`}>
                        {pillar.category}
                      </span>
                    </div>

                    {/* Title + expanding accent line */}
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 tracking-tight leading-snug">
                      {pillar.title}
                    </h3>
                    <div className={`h-0.5 w-8 ${pillar.color.accent} rounded-full mb-4 transition-all duration-500 group-hover:w-14`} />

                    {/* Description */}
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
