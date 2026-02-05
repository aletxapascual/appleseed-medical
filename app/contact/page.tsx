import type { Metadata } from "next"
import { ContactForm } from "@/components/sections/ContactForm"
import { FAQSection } from "@/components/sections/FAQSection"
import { Clock, Phone, Mail, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Contact Us | Apple Seed Medical",
  description: "Skip the sales pitch. Reach our team directly for access questions, orders, or platform support. Response within 4 hours guaranteed.",
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary py-0 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
        </div>
        <div className="container mx-auto pt-20 pb-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-blue-200 font-medium tracking-wide uppercase text-sm mb-6">
              Get in Touch
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Connect
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed mb-8">
              Skip the sales pitch. Reach our team directly for access questions,
              orders, or platform support.
            </p>
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5 border border-white/20">
              <Clock className="h-5 w-5 text-white" />
              <span className="text-sm font-medium text-white">
                Response within 4 hours guaranteed
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
              Contact Options
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Reach Out Your Way
            </h2>
            <p className="text-muted-foreground">
              Choose the method that works best for you. Our team is here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="bg-secondary rounded-2xl p-8 text-center">
              <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Phone className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Phone Support</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Speak directly with our wound care specialists
              </p>
              <a href="tel:+18552733633" className="text-xl font-bold text-primary block mb-2">
                (855) 273-3633
              </a>
              <p className="text-xs text-muted-foreground mb-6">
                Monday - Friday / 8:00 AM - 6:00 PM EST
              </p>
              <Button variant="outline" className="w-full" asChild>
                <a href="tel:+18552733633">Call Now</a>
              </Button>
            </div>

            {/* Email */}
            <div className="bg-secondary rounded-2xl p-8 text-center">
              <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Mail className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Email Support</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Get detailed help and documentation via email
              </p>
              <a href="mailto:support@appleseedmedical.com" className="text-lg font-bold text-primary block mb-2">
                support@appleseedmedical.com
              </a>
              <p className="text-xs text-muted-foreground mb-6">
                Response within 4 business hours
              </p>
              <Button variant="outline" className="w-full" asChild>
                <a href="mailto:support@appleseedmedical.com">Send Email</a>
              </Button>
            </div>

            {/* Address */}
            <div className="bg-secondary rounded-2xl p-8 text-center">
              <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center mx-auto mb-6 shadow-sm">
                <MapPin className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Corporate Headquarters</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Distribution & Operations Center
              </p>
              <div className="text-foreground font-medium mb-6">
                <p>Apple Seed Medical</p>
                <p>1250 Innovation Drive</p>
                <p>Suite 200</p>
                <p>Austin, TX 78758</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-secondary">
        <div className="container mx-auto">
          <ContactForm />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
    </>
  )
}
