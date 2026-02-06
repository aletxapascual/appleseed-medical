"use client"

import Image from "next/image"
import { PackageOpen, Zap, Handshake, HeartPulse, type LucideIcon } from "lucide-react"
import { FadeUp, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from "@/components/ui/motion"

const solutions: {
  icon: LucideIcon
  title: string
  description: string
  image: string
  color: { bg: string; text: string; accent: string }
}[] = [
  {
    icon: PackageOpen,
    title: "Access",
    description:
      "Direct access to virtually every wound care product on the market — no intermediaries, no restrictions.",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=800&auto=format&fit=crop",
    color: { bg: "bg-cyan-500/10", text: "text-cyan-600", accent: "bg-cyan-500" },
  },
  {
    icon: Zap,
    title: "Speed",
    description:
      "Remarkably prompt service with next-day shipping so your patients never have to wait.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    color: { bg: "bg-emerald-500/10", text: "text-emerald-600", accent: "bg-emerald-500" },
  },
  {
    icon: Handshake,
    title: "Manufacturer Relationships",
    description:
      "Strong partnerships with premier manufacturers of advanced wound care products.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
    color: { bg: "bg-amber-500/10", text: "text-amber-600", accent: "bg-amber-500" },
  },
  {
    icon: HeartPulse,
    title: "Clinical Quality",
    description:
      "Clinical-grade, evidence-based product selection from trusted, FDA-approved manufacturers.",
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=800&auto=format&fit=crop",
    color: { bg: "bg-violet-500/10", text: "text-violet-600", accent: "bg-violet-500" },
  },
]

export function SolutionsSection() {
  return (
    <section className="bg-gradient-to-b from-white via-slate-50/30 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="container mx-auto relative z-10">
        {/* Centered section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
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

        {/* Alternating rows with images */}
        <div className="space-y-20 md:space-y-28">
          {solutions.map((solution, index) => {
            const isEven = index % 2 === 0
            const TextWrapper = isEven ? SlideInLeft : SlideInRight
            const ImageWrapper = isEven ? SlideInRight : SlideInLeft

            return (
              <div key={index} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* Text */}
                <TextWrapper className={isEven ? "lg:order-1" : "lg:order-2"}>
                  <div>
                    <div className={`w-14 h-14 rounded-2xl ${solution.color.bg} flex items-center justify-center mb-6`}>
                      <solution.icon className={`h-7 w-7 ${solution.color.text}`} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight">
                      {solution.title}
                    </h3>
                    <div className={`h-1 w-12 ${solution.color.accent} rounded-full mb-5`} />
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </TextWrapper>

                {/* Image */}
                <ImageWrapper className={isEven ? "lg:order-2" : "lg:order-1"}>
                  <div className="relative">
                    <div className={`absolute -inset-4 rounded-[2rem] blur-2xl opacity-20 ${solution.color.accent}`} />
                    <div className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={solution.image}
                        alt={solution.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                    </div>
                  </div>
                </ImageWrapper>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
