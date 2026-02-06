"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DottedGlowBackground, DottedGlowCard } from "@/components/ui/dotted-glow-background"
import {
  Brain,
  BarChart3,
  Zap,
  Shield,
  Link2,
  Smartphone,
  ArrowRight,
  Users,
  Heart,
  Clock,
  CheckCircle2,
  Lock,
  Server,
  Code
} from "lucide-react"
import { FadeUp, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from "@/components/ui/motion"

const features = [
  {
    icon: Brain,
    title: "Smart Documentation",
    description: "AI-powered wound assessment with automated clinical notes and progress tracking using computer vision technology",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "Machine learning algorithms that predict healing outcomes and optimize treatment protocols in real-time",
  },
  {
    icon: Zap,
    title: "Real-time Monitoring",
    description: "Continuous patient monitoring with intelligent alerts and automated intervention recommendations",
  },
  {
    icon: Shield,
    title: "Compliance Automation",
    description: "Automated regulatory compliance with intelligent documentation and audit trail generation",
  },
  {
    icon: Link2,
    title: "Integration Hub",
    description: "Seamless connectivity with EHR systems, medical devices, and third-party healthcare platforms",
  },
  {
    icon: Smartphone,
    title: "Mobile Intelligence",
    description: "Full-featured mobile access with offline capabilities and point-of-care AI assistance",
  },
]

const benefits = [
  {
    icon: Heart,
    title: "Improved Patient Outcomes",
    stat: "35%",
    description: "faster healing times with AI-guided treatment protocols and continuous monitoring",
  },
  {
    icon: Clock,
    title: "Operational Efficiency",
    stat: "60%",
    description: "reduction in documentation time through automated clinical note generation",
  },
  {
    icon: BarChart3,
    title: "Revenue Optimization",
    stat: "25%",
    description: "increase in practice revenue through streamlined workflows and compliance automation",
  },
  {
    icon: CheckCircle2,
    title: "Data-Driven Insights",
    stat: "Real-time",
    description: "analytics and reporting for evidence-based decision making",
  },
]

const metrics = [
  { label: "Healthcare Providers", value: "500+" },
  { label: "Patients Served", value: "50,000+" },
  { label: "Documentation Time Saved", value: "60%" },
  { label: "Compliance Rate", value: "99.8%" },
]

const technicalFeatures = [
  {
    icon: Lock,
    title: "HIPAA Compliant",
    description: "End-to-end encryption and comprehensive audit trails ensure complete data security",
  },
  {
    icon: Server,
    title: "99.9% Uptime",
    description: "Cloud-native architecture with redundant systems ensures continuous availability",
  },
  {
    icon: Code,
    title: "API Integration",
    description: "RESTful APIs and HL7 FHIR compatibility for seamless EHR integration",
  },
]

export default function PlatformPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary py-0 relative overflow-hidden">
        {/* Dot Pattern Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:32px_32px]" />
        {/* Radial Glows */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.08)_0%,transparent_50%)]" />
        <div className="container mx-auto pt-20 pb-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <FadeUp>
                <p className="text-blue-200 font-medium tracking-wide uppercase text-sm mb-6">
                  AI-Powered Healthcare Platform
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                  Apple Seed Intelligence Platform
                </h1>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed">
                  Revolutionary AI-powered wound care management system that transforms healthcare
                  delivery through intelligent automation and predictive analytics
                </p>
              </FadeUp>

              <FadeUp delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button size="lg" className="text-base px-8 py-6 bg-white text-primary hover:bg-blue-50" asChild>
                    <Link href="/contact">
                      Request Demo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="text-base px-8 py-6 border-white/30 text-white hover:bg-white/10" asChild>
                    <a href="#features">Learn More</a>
                  </Button>
                </div>
              </FadeUp>
            </div>
            <SlideInRight className="hidden lg:block relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop"
                  alt="Medical technology and healthcare data visualization"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Intelligent Features */}
      <section id="features" className="bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeUp>
              <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
                Intelligent Features
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Advanced AI Capabilities
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-lg text-muted-foreground">
                Designed specifically for wound care professionals
              </p>
            </FadeUp>
          </div>

          <StaggerContainer staggerDelay={0.1} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <div className="group p-5 md:p-8 rounded-xl md:rounded-2xl bg-secondary hover:bg-primary-light transition-all duration-300 h-full">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white flex items-center justify-center mb-4 md:mb-6 shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
                    <feature.icon className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Platform Benefits */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <DottedGlowBackground
          containerClassName="absolute inset-0"
          dotColor="rgba(59, 130, 246, 0.2)"
          glowColor="rgba(59, 130, 246, 0.12)"
          dotSpacing={20}
        />

        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeUp>
              <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
                Platform Benefits
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Measurable Improvements
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-slate-400 text-lg">
                Proven results in patient outcomes, operational efficiency, and revenue optimization
              </p>
            </FadeUp>
          </div>

          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {benefits.map((benefit, index) => (
              <StaggerItem key={index}>
                <DottedGlowCard className="p-8 text-center hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{benefit.stat}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-slate-400 text-sm">{benefit.description}</p>
                </DottedGlowCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Platform Metrics */}
      <section className="bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <FadeUp>
              <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
                Platform Metrics
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Trusted by Healthcare Providers
              </h2>
            </FadeUp>
          </div>

          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto">
            {metrics.map((metric, index) => (
              <StaggerItem key={index}>
                <div className="bg-white rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 text-center shadow-sm">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">
                    {metric.value}
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm font-medium">
                    {metric.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Technical Excellence */}
      <section className="bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeUp>
              <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
                Technical Excellence
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Enterprise-Grade Security
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-lg text-muted-foreground">
                Built for healthcare environments with the highest standards of reliability
              </p>
            </FadeUp>
          </div>

          <StaggerContainer staggerDelay={0.15} className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
            {technicalFeatures.map((feature, index) => (
              <StaggerItem key={index}>
                <div className="text-center p-8 rounded-2xl border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-primary-light flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-light">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideInLeft className="relative hidden lg:block">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=1200&auto=format&fit=crop"
                  alt="Healthcare professionals collaborating on patient care"
                  fill
                  className="object-cover"
                />
              </div>
            </SlideInLeft>
            <div className="text-center lg:text-left">
              <FadeUp>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Ready to Transform Your Practice?
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="text-lg text-muted-foreground mb-10">
                  Join hundreds of healthcare providers who have revolutionized their wound care
                  delivery with Apple Seed Intelligence Platform
                </p>
              </FadeUp>
              <FadeUp delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button size="lg" className="text-base px-8 py-6" asChild>
                    <Link href="/contact">
                      Schedule Demo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="text-base px-8 py-6" asChild>
                    <Link href="/products">View Products</Link>
                  </Button>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
