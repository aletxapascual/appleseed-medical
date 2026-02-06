import type { Metadata } from "next"
import { ContactForm } from "@/components/sections/ContactForm"
import { Clock, Phone, Mail, MapPin, MessageSquare, Headphones, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Apple Seed Medical",
  description: "Skip the sales pitch. Reach our team directly for access questions, orders, or platform support. Response within 4 hours guaranteed.",
}

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    value: "(855) 273-3633",
    href: "tel:+18552733633",
    description: "Mon-Fri, 8AM-6PM EST",
  },
  {
    icon: Mail,
    title: "Email",
    value: "support@appleseedmedical.com",
    href: "mailto:support@appleseedmedical.com",
    description: "Response within 4 hours",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "Austin, TX",
    href: "#",
    description: "1250 Innovation Drive",
  },
]

const features = [
  {
    icon: Clock,
    title: "4-Hour Response",
    description: "Guaranteed response time during business hours",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Speak with wound care specialists, not call centers",
  },
  {
    icon: Zap,
    title: "Quick Resolution",
    description: "Most inquiries resolved on the first contact",
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero Section - Light with Grid */}
      <section className="relative min-h-[60vh] overflow-hidden bg-white">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

          {/* Grid Pattern with Fade */}
          <div className="absolute inset-0 bg-[linear-gradient(#f1f5f9_1px,transparent_1px),linear-gradient(90deg,#f1f5f9_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_30%,black_20%,transparent_100%)]" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center min-h-[60vh] py-12 md:py-20">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <MessageSquare className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Get in Touch</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-[1.1]">
                Let's Start a
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-500 to-blue-600">
                  Conversation
                </span>
              </h1>

              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed max-w-lg">
                Skip the sales pitch. Reach our team directly for access questions,
                orders, or platform support. We're here to help.
              </p>

              {/* Contact Methods - Horizontal */}
              <div className="flex flex-wrap gap-3 md:gap-4 mb-8 md:mb-10">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    className="flex items-center gap-3 bg-white border border-border rounded-xl px-4 py-3 hover:border-primary/30 hover:shadow-md transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <method.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{method.title}</div>
                      <div className="text-xs text-muted-foreground">{method.description}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-foreground">{feature.title}</div>
                    <div className="text-xs text-muted-foreground hidden md:block">{feature.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form Card */}
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-cyan-500/20 rounded-3xl blur-2xl scale-95" />

              <div className="relative bg-white rounded-2xl md:rounded-3xl border border-border shadow-2xl shadow-primary/10 p-5 sm:p-6 md:p-8">
                <ContactFormInline />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-secondary border-t border-border">
        <div className="container mx-auto py-12">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">Healthcare Providers</div>
            </div>
            <div className="w-px h-10 bg-border hidden md:block" />
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">4 hrs</div>
              <div className="text-sm text-muted-foreground">Avg Response Time</div>
            </div>
            <div className="w-px h-10 bg-border hidden md:block" />
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">98%</div>
              <div className="text-sm text-muted-foreground">First-Contact Resolution</div>
            </div>
            <div className="w-px h-10 bg-border hidden md:block" />
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">4.9/5</div>
              <div className="text-sm text-muted-foreground">Support Rating</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// Inline version of the contact form for the new layout
function ContactFormInline() {
  return <ContactForm />
}
