import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
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

export const metadata: Metadata = {
  title: "AI Platform | Apple Seed Medical",
  description: "Revolutionary AI-powered wound care management system that transforms healthcare delivery through intelligent automation and predictive analytics.",
}

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
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.15)_0%,transparent_50%)]" />
        </div>
        <div className="container mx-auto pt-20 pb-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-blue-200 font-medium tracking-wide uppercase text-sm mb-6">
              AI-Powered Healthcare Platform
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Apple Seed Intelligence Platform
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Revolutionary AI-powered wound care management system that transforms healthcare
              delivery through intelligent automation and predictive analytics
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>
        </div>
      </section>

      {/* Intelligent Features */}
      <section id="features" className="bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
              Intelligent Features
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Advanced AI Capabilities
            </h2>
            <p className="text-lg text-muted-foreground">
              Designed specifically for wound care professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-secondary hover:bg-primary-light transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Benefits */}
      <section className="bg-gradient-to-b from-primary to-primary-dark text-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-blue-200 font-medium tracking-wide uppercase text-sm mb-4">
              Platform Benefits
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Measurable Improvements
            </h2>
            <p className="text-blue-100 text-lg">
              Proven results in patient outcomes, operational efficiency, and revenue optimization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-7 w-7" />
                </div>
                <div className="text-4xl font-bold mb-2">{benefit.stat}</div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-blue-100 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Metrics */}
      <section className="bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
              Platform Metrics
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Trusted by Healthcare Providers
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-sm"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {metric.value}
                </div>
                <p className="text-muted-foreground text-sm font-medium">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Excellence */}
      <section className="bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
              Technical Excellence
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Enterprise-Grade Security
            </h2>
            <p className="text-lg text-muted-foreground">
              Built for healthcare environments with the highest standards of reliability
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {technicalFeatures.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              >
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-light">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Join hundreds of healthcare providers who have revolutionized their wound care
              delivery with Apple Seed Intelligence Platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>
        </div>
      </section>
    </>
  )
}
