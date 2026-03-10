"use client"

import Image from "next/image"
import { ShieldCheck, FileText, ClipboardList, Scale } from "lucide-react"
import { FadeUp, SlideInLeft, StaggerContainer, StaggerItem } from "@/components/ui/motion"

const complianceFeatures = [
  {
    icon: ShieldCheck,
    title: "Regulatory Compliance",
    description:
      "Stay current with evolving wound care regulations and documentation requirements.",
  },
  {
    icon: FileText,
    title: "Documentation Support",
    description:
      "Comprehensive documentation assistance to support proper coding and billing.",
  },
  {
    icon: ClipboardList,
    title: "Audit Trail",
    description:
      "Complete traceability from order to delivery with full audit-ready records.",
  },
  {
    icon: Scale,
    title: "Payer Compliance",
    description:
      "Guidance on payer-specific requirements to help ensure clean claims and timely reimbursement.",
  },
]

export function ComplianceSection() {
  return (
    <section className="bg-gradient-to-b from-white via-slate-50/30 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Image */}
          <SlideInLeft>
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/10 to-sky-400/10 rounded-[2.5rem] blur-3xl" />

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000&auto=format&fit=crop"
                  alt="Compliance documentation and audit process"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Overlay stat */}
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl border border-slate-100 px-6 py-4 z-10">
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-xs text-muted-foreground font-medium">Audit-Ready</p>
              </div>
            </div>
          </SlideInLeft>

          {/* Right — Content */}
          <div>
            <FadeUp>
              <p className="text-primary font-semibold tracking-widest uppercase text-xs mb-4">
                Compliance & Documentation
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 leading-[1.1] tracking-tight">
                Compliance Automation
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-lg text-muted-foreground leading-relaxed font-light mb-10">
                Built-in compliance and documentation support so you can focus on patient care
              </p>
            </FadeUp>

            <StaggerContainer staggerDelay={0.1} className="space-y-6">
              {complianceFeatures.map((feature, index) => (
                <StaggerItem key={index}>
                  <div className="group flex gap-4">
                    <div className="shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mt-0.5 group-hover:bg-primary/20 transition-colors duration-300">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-foreground mb-1 tracking-tight">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
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
