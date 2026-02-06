"use client"

import { ShieldCheck, FileText, ClipboardList, Scale } from "lucide-react"
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion"

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
    <section className="bg-gradient-to-b from-white via-slate-50/30 to-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <FadeUp>
            <p className="text-primary font-semibold tracking-widest uppercase text-xs mb-6">
              Compliance & Documentation
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight">
              Compliance Automation
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
              Built-in compliance and documentation support so you can focus on patient care
            </p>
          </FadeUp>
        </div>

        <StaggerContainer staggerDelay={0.12} className="grid sm:grid-cols-2 gap-x-12 gap-y-10 max-w-4xl mx-auto">
          {complianceFeatures.map((feature, index) => (
            <StaggerItem key={index}>
              <div className="group flex gap-4">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mt-0.5">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-1.5 tracking-tight">
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
    </section>
  )
}
