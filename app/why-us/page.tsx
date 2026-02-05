import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Ban,
  Brain,
  Building2,
  DollarSign,
  Clock,
  Award,
  Heart,
  Eye,
  Handshake,
  Lightbulb,
  Users,
  Package,
  Star,
  Server,
  CheckCircle2,
  X,
  Quote
} from "lucide-react"

export const metadata: Metadata = {
  title: "Why Choose Us | Apple Seed Medical",
  description: "We're revolutionizing wound care delivery with AI-powered intelligence, direct manufacturer relationships, and a commitment to clinical excellence.",
}

const differentiators = [
  {
    icon: Ban,
    title: "Rep-Free Experience",
    description: "No pushy sales representatives, no unnecessary meetings. Direct access to premium products with transparent pricing and honest recommendations.",
    stat: "100%",
    statLabel: "Direct Access",
  },
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description: "Our proprietary AI platform optimizes product selection, automates documentation, and ensures compliance while improving patient outcomes.",
    stat: "35%",
    statLabel: "Better Outcomes",
  },
  {
    icon: Building2,
    title: "Manufacturer Direct",
    description: "Exclusive partnerships with leading manufacturers ensure authentic products, competitive pricing, and reliable supply chain management.",
    stat: "50+",
    statLabel: "Trusted Partners",
  },
  {
    icon: DollarSign,
    title: "Revenue Optimization",
    description: "Transparent pricing models and automated billing processes help maximize practice profitability while maintaining compliance.",
    stat: "25%",
    statLabel: "Revenue Increase",
  },
  {
    icon: Clock,
    title: "Streamlined Workflow",
    description: "Integrated platform handles everything from eligibility verification to delivery tracking, saving valuable time for patient care.",
    stat: "60%",
    statLabel: "Time Savings",
  },
  {
    icon: Award,
    title: "Clinical Excellence",
    description: "Evidence-based product curation and AI-guided treatment protocols ensure the highest standards of wound care delivery.",
    stat: "99.8%",
    statLabel: "Success Rate",
  },
]

const values = [
  {
    icon: Heart,
    title: "Patient-First Approach",
    description: "Every decision we make prioritizes patient outcomes and clinical excellence",
  },
  {
    icon: Eye,
    title: "Transparency & Trust",
    description: "Honest pricing, clear processes, and authentic manufacturer relationships",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Efficiency",
    description: "Leveraging AI and technology to streamline healthcare delivery",
  },
  {
    icon: Handshake,
    title: "Partnership & Support",
    description: "Building long-term relationships with providers and manufacturers",
  },
]

const achievements = [
  { label: "Healthcare Providers Served", value: "500+" },
  { label: "Patients Impacted", value: "50,000+" },
  { label: "Products Delivered", value: "1M+" },
  { label: "Customer Satisfaction", value: "4.9/5" },
  { label: "Platform Uptime", value: "99.9%" },
]

const testimonials = [
  {
    quote: "Apple Seed has transformed our wound care practice. The AI recommendations are spot-on, and the direct pricing saves us thousands monthly.",
    name: "Dr. Sarah Chen",
    title: "Wound Care Specialist",
    location: "Austin, TX",
  },
  {
    quote: "No more pushy sales reps or hidden fees. Just quality products delivered when we need them. The platform is incredibly intuitive.",
    name: "Michael Rodriguez, RN",
    title: "Clinic Director",
    location: "Phoenix, AZ",
  },
  {
    quote: "The compliance automation alone has saved us hours of documentation work. Our audit results have never been better.",
    name: "Dr. Jennifer Walsh",
    title: "Medical Director",
    location: "Denver, CO",
  },
]

const traditionalSuppliers = [
  "Sales rep dependency",
  "Hidden pricing markups",
  "Manual documentation",
  "Limited product access",
  "Slow order processing",
]

const appleSeedFeatures = [
  "Direct platform access",
  "Transparent pricing",
  "AI-powered automation",
  "Comprehensive catalog",
  "Real-time processing",
]

const results = [
  "60% faster ordering",
  "25% cost savings",
  "99.8% compliance rate",
  "35% better outcomes",
  "4.9/5 satisfaction",
]

export default function WhyUsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary py-0 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
        </div>
        <div className="container mx-auto pt-20 pb-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-blue-200 font-medium tracking-wide uppercase text-sm mb-6">
              Why Choose Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Why Choose Apple Seed?
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              We're revolutionizing wound care delivery with AI-powered intelligence,
              direct manufacturer relationships, and a commitment to clinical excellence.
            </p>
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5 border border-white/20">
              <Users className="h-5 w-5 text-white" />
              <span className="text-sm font-medium text-white">
                Trusted by 500+ Healthcare Providers
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
              Our Difference
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-muted-foreground">
              We've reimagined wound care procurement from the ground up, eliminating
              traditional pain points while enhancing clinical outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-secondary hover:bg-primary-light transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-shadow">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="pt-4 border-t border-border/50">
                  <span className="text-2xl font-bold text-primary">{item.stat}</span>
                  <span className="text-sm text-muted-foreground ml-2">{item.statLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-gradient-to-b from-primary to-primary-dark text-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-blue-200 font-medium tracking-wide uppercase text-sm mb-4">
              Our Purpose
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Mission & Values
            </h2>
            <p className="text-blue-100 text-lg">
              We believe healthcare should be simple, transparent, and focused on patient outcomes.
              Our mission is to eliminate the barriers between healthcare providers and the products they need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-blue-100 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Achievements */}
      <section className="bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
              Company Achievements
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Impact
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-sm"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {achievement.value}
                </div>
                <p className="text-muted-foreground text-sm">
                  {achievement.label}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground text-sm mt-8">
            Rated by healthcare professionals nationwide
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
              Testimonials
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Our Customers Say
            </h2>
            <p className="text-muted-foreground text-lg">
              Healthcare providers across the country trust Apple Seed Medical for their wound care needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-secondary rounded-2xl p-8"
              >
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <p className="text-foreground leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-secondary">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
              Comparison
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Apple Seed vs. Traditional Suppliers
            </h2>
            <p className="text-muted-foreground text-lg">
              See how we compare to traditional wound care suppliers and distributors
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Traditional Suppliers */}
              <div className="bg-white rounded-2xl p-8 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
                  Traditional Suppliers
                </h3>
                <ul className="space-y-4">
                  {traditionalSuppliers.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Apple Seed */}
              <div className="bg-primary text-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-lg font-semibold mb-6 text-center">
                  Apple Seed Medical
                </h3>
                <ul className="space-y-4">
                  {appleSeedFeatures.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-200 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results */}
              <div className="bg-primary-light rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
                  The Result
                </h3>
                <ul className="space-y-4">
                  {results.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Star className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Experience the Apple Seed Difference
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Join the growing community of healthcare providers who have transformed their
              wound care delivery with our intelligent platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base px-8 py-6" asChild>
                <Link href="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 py-6" asChild>
                <Link href="/how-it-works">Learn How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
