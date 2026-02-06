"use client"

import { Workflow, ShieldCheck, TrendingUp, Brain } from "lucide-react"
import { Carousel, Card } from "@/components/ui/apple-cards-carousel"
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background"
import { FadeUp } from "@/components/ui/motion"

const pillars = [
  {
    icon: Workflow,
    category: "Pillar 01",
    title: "Smarter Workflows",
    description: "From eligibility through product access in one place. Streamlined processes that save time and reduce errors.",
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: ShieldCheck,
    category: "Pillar 02",
    title: "Compliance Confidence",
    description: "With documentation support and clear visibility. Automated audit trails and regulatory compliance built-in.",
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: TrendingUp,
    category: "Pillar 03",
    title: "Healthy Revenue Cycles",
    description: "With transparent pricing and rep-free efficiency. Maximize profitability while maintaining full compliance.",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Brain,
    category: "Pillar 04",
    title: "Apple Seed Intelligence",
    description: "Purpose built for wound care access and documentation. AI-powered insights that improve patient outcomes.",
    src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
  },
]

export function FourPillarsSection() {
  const cards = pillars.map((pillar, index) => (
    <Card
      key={pillar.title}
      card={{
        title: pillar.title,
        category: pillar.category,
        content: pillar.description,
        icon: <pillar.icon className="h-6 w-6 md:h-7 md:w-7 text-white" />,
        src: pillar.src,
      }}
      index={index}
    />
  ))

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
          <div className="text-center max-w-3xl mx-auto">
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
        </div>

        <Carousel items={cards} />
      </div>
    </section>
  )
}
