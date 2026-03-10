"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Brain,
  BarChart3,
  Zap,
  Shield,
  Link2,
  Smartphone,
  ArrowRight
} from "lucide-react"
import { FadeUp, SlideInRight, StaggerContainer, StaggerItem, Float } from "@/components/ui/motion"
import { GlowingEffect } from "@/components/ui/glowing-effect"

const features = [
  {
    icon: Brain,
    title: "Smart Documentation",
    description: "AI-powered wound assessment with automated clinical notes",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "Machine learning for healing predictions and treatment optimization",
  },
  {
    icon: Zap,
    title: "Real-time Monitoring",
    description: "Continuous patient monitoring with intelligent alerts",
  },
  {
    icon: Shield,
    title: "Compliance Automation",
    description: "Automated regulatory compliance and audit trails",
  },
  {
    icon: Link2,
    title: "Integration Hub",
    description: "Seamless connectivity with EHR systems and devices",
  },
  {
    icon: Smartphone,
    title: "Mobile Intelligence",
    description: "Full-featured mobile access with offline capabilities",
  },
]

export function AIPlatformSection() {
  return (
    <section className="bg-gradient-to-b from-slate-50/50 via-white to-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <FadeUp>
              <p className="text-primary font-semibold tracking-widest uppercase text-xs mb-6">
                Next-Generation AI Platform
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 md:mb-8 leading-[1.1] tracking-tight">
                Appleseed Intelligence Platform
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 md:mb-12 font-light">
                Revolutionary AI-powered wound care management system that transforms healthcare
                delivery through intelligent automation and predictive analytics
              </p>
            </FadeUp>

            <StaggerContainer staggerDelay={0.1} className="grid sm:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-12">
              {features.map((feature, index) => (
                <StaggerItem key={index}>
                  <div className="group flex items-start gap-3 md:gap-4 p-4 md:p-5 rounded-xl md:rounded-2xl hover:bg-white hover:shadow-elevated border border-transparent hover:border-slate-100 transition-all duration-500">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center flex-shrink-0 group-hover:from-primary group-hover:to-primary-dark transition-all duration-500">
                      <feature.icon className="h-4 w-4 md:h-5 md:w-5 text-primary group-hover:text-white transition-colors duration-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-sm md:text-base mb-1 md:mb-1.5 tracking-tight">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeUp delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base shadow-xl shadow-primary/20 transition-all hover:scale-105" asChild>
                  <Link href="/platform">
                    Explore the Platform
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-base transition-all hover:scale-105" asChild>
                  <Link href="/contact">Request Demo</Link>
                </Button>
              </div>
            </FadeUp>
          </div>

          {/* Platform Visual */}
          <SlideInRight className="relative">
            <div className="relative">
              {/* Premium Glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/15 to-sky-500/15 rounded-[2.5rem] blur-3xl glow-premium" />

              {/* Main Dashboard Image */}
              <div className="relative bg-gradient-to-br from-primary via-primary to-primary-dark rounded-[1.75rem] p-8 shadow-elevated-lg">
                {/* Dot pattern overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:16px_16px] rounded-[1.75rem]" />

                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                    <div className="w-3 h-3 rounded-full bg-green-400/80" />
                  </div>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden relative group">
                    <Image
                      src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1200&auto=format&fit=crop"
                      alt="Medical professional analyzing healthcare data on digital interface"
                      fill
                      className="object-cover image-premium group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>

              {/* Premium Floating Stats - Hidden on mobile to prevent overlap */}
              <Float duration={4} distance={8}>
                <div className="hidden md:block absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-elevated-lg p-5 border border-slate-100 z-20">
                  <GlowingEffect
                    spread={30}
                    glow={true}
                    proximity={80}
                    inactiveZone={0.01}
                    borderWidth={2}
                  />
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center">
                      <BarChart3 className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground tracking-tight">35%</div>
                      <div className="text-sm text-muted-foreground font-medium">Better Outcomes</div>
                    </div>
                  </div>
                </div>
              </Float>

              {/* Premium Floating Badge - Hidden on mobile to prevent overlap */}
              <Float duration={5} distance={6}>
                <div className="hidden md:block absolute -top-5 -right-5 bg-white/95 backdrop-blur-md rounded-2xl shadow-elevated p-4 border border-slate-100 z-20">
                  <GlowingEffect
                    spread={30}
                    glow={true}
                    proximity={80}
                    inactiveZone={0.01}
                    borderWidth={2}
                  />
                  <div className="relative z-10 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center">
                      <Zap className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-foreground tracking-tight">60%</div>
                      <div className="text-xs text-muted-foreground font-medium">Time Saved</div>
                    </div>
                  </div>
                </div>
              </Float>
            </div>
          </SlideInRight>
        </div>
      </div>
    </section>
  )
}
