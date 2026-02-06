"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  UserPlus,
  ShoppingCart,
  Truck,
  Calendar,
  Shield,
  CheckCircle2,
  Users,
  FileText,
  CreditCard,
  Clock,
  Star,
  Ban,
  DollarSign,
  Award
} from "lucide-react"
import { FadeUp, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from "@/components/ui/motion"

const steps = [
  {
    number: "1",
    title: "Enroll",
    icon: UserPlus,
    description: "Quick online enrollment with instant access to our curated catalog of premium wound care products from trusted manufacturers.",
    features: [
      "5-minute enrollment process",
      "Instant platform access",
      "No contracts or commitments",
    ],
  },
  {
    number: "2",
    title: "Order",
    icon: ShoppingCart,
    description: "Browse our intelligent catalog, get AI-powered product recommendations, and place orders with transparent pricing and automated compliance.",
    features: [
      "AI-powered product matching",
      "Transparent pricing",
      "Automated documentation",
    ],
  },
  {
    number: "3",
    title: "Deliver",
    icon: Truck,
    description: "Fast, reliable delivery with real-time tracking and temperature-controlled shipping for sensitive products.",
    features: [
      "Next-day delivery available",
      "Temperature-controlled shipping",
      "Real-time tracking",
    ],
  },
]

const intelligenceFeatures = [
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "AI-optimized delivery scheduling based on your practice patterns and patient needs",
  },
  {
    icon: Shield,
    title: "Compliance Automation",
    description: "Automated documentation and audit trails ensure regulatory compliance at every step",
  },
  {
    icon: CheckCircle2,
    title: "Instant Approvals",
    description: "Real-time insurance verification and pre-authorization processing",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Multi-user access with role-based permissions for seamless team coordination",
  },
  {
    icon: FileText,
    title: "Smart Documentation",
    description: "AI-generated clinical notes and automated progress tracking",
  },
  {
    icon: CreditCard,
    title: "Flexible Billing",
    description: "Multiple payment options with transparent pricing and automated invoicing",
  },
]

const benefits = [
  {
    icon: Ban,
    title: "No Sales Pressure",
    description: "Direct access to products without pushy sales representatives or unnecessary meetings",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "Clear, upfront pricing with no hidden fees or surprise charges",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "All products sourced directly from FDA-approved manufacturers",
  },
  {
    icon: Shield,
    title: "Compliance Built-In",
    description: "Automated documentation ensures regulatory compliance at every step",
  },
]

const metrics = [
  { label: "Average Enrollment Time", value: "5 min" },
  { label: "Order Processing Speed", value: "< 2 hrs" },
  { label: "Delivery Success Rate", value: "99.8%" },
  { label: "Customer Satisfaction", value: "4.9/5" },
]

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary py-0 relative overflow-hidden">
        {/* Dot Pattern Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:32px_32px]" />
        {/* Radial Glow */}
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        <div className="container mx-auto pt-20 pb-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center lg:text-left">
              <FadeUp>
                <p className="text-blue-200 font-medium tracking-wide uppercase text-sm mb-6">
                  Our Process
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                  How It Works
                </h1>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed">
                  Simple, streamlined process from enrollment to delivery. No reps, no pressure,
                  just premium wound care when you need it.
                </p>
              </FadeUp>
            </div>
            <SlideInRight className="hidden lg:block relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1200&auto=format&fit=crop"
                  alt="Healthcare professional with medical supplies"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* 3 Steps Section */}
      <section className="bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeUp>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                3 Simple Steps to Better Wound Care
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-lg text-muted-foreground">
                Premium wound care with zero hassle
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-muted-foreground mt-4">
                Apple Seed Medical keeps the ordering experience simple and predictable for solo providers,
                mobile clinics, and multi-location practices
              </p>
            </FadeUp>
          </div>

          <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <StaggerItem key={index}>
                <div className="relative h-full">
                  <div className="bg-secondary rounded-xl md:rounded-2xl p-5 md:p-8 h-full hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold">
                        {step.number}
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="space-y-3">
                      {step.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-foreground font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                      <ArrowRight className="h-8 w-8 text-border" />
                    </div>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Powered by Intelligence */}
      <section className="bg-gradient-to-b from-primary to-primary-dark text-white relative overflow-hidden">
        {/* Dot Pattern Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:24px_24px]" />
        {/* Radial Fade */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(3,105,161,0.5)_100%)]" />
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeUp>
              <p className="text-blue-200 font-medium tracking-wide uppercase text-sm mb-4">
                Powered by Intelligence
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Every Step Enhanced by AI
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-blue-100 text-lg">
                Our AI-powered platform maximizes efficiency and compliance at every touchpoint
              </p>
            </FadeUp>
          </div>

          <StaggerContainer staggerDelay={0.1} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {intelligenceFeatures.map((feature, index) => (
              <StaggerItem key={index}>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Our Process */}
      <section className="bg-secondary">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeUp>
              <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
                Why Choose Us
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Our Process?
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-muted-foreground text-lg">
                Our streamlined approach eliminates the traditional hassles of wound care procurement
                while ensuring the highest quality outcomes.
              </p>
            </FadeUp>
          </div>

          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {benefits.map((benefit, index) => (
              <StaggerItem key={index}>
                <div className="bg-white rounded-xl p-4 md:p-6 text-center hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary-light flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <benefit.icon className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-1 md:mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-xs md:text-sm">{benefit.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process Metrics */}
      <section className="bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <FadeUp>
              <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
                Process Metrics
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Proven Performance
              </h2>
            </FadeUp>
          </div>

          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto mb-8">
            {metrics.map((metric, index) => (
              <StaggerItem key={index}>
                <div className="bg-secondary rounded-xl md:rounded-2xl p-4 md:p-6 text-center">
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

          <FadeUp delay={0.5}>
            <p className="text-center text-muted-foreground text-sm">
              Based on data from 500+ healthcare providers
            </p>
          </FadeUp>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-light">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <SlideInLeft className="relative hidden lg:block">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=1200&auto=format&fit=crop"
                  alt="Medical team collaborating in modern healthcare environment"
                  fill
                  className="object-cover"
                />
              </div>
            </SlideInLeft>
            <div className="text-center lg:text-left">
              <FadeUp>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Ready to Get Started?
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="text-lg text-muted-foreground mb-10">
                  Join hundreds of healthcare providers who have simplified their wound care
                  procurement with our streamlined process.
                </p>
              </FadeUp>
              <FadeUp delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button size="lg" className="text-base px-8 py-6" asChild>
                    <Link href="/contact">
                      Start Enrollment
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="text-base px-8 py-6" asChild>
                    <Link href="/platform">Learn More</Link>
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
