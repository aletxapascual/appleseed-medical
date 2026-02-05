import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const highlights = [
  "No sales reps or pressure",
  "Next-day delivery available",
  "AI-powered platform",
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary py-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.15)_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[85vh] py-16">
          {/* Content */}
          <div className="text-white">
            <p className="text-blue-200 font-medium tracking-wide uppercase text-sm mb-6">
              Advanced Wound Care Solutions
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Wound Care Made Simple
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              No reps, no pressure, direct access to the skin substitutes you need plus a smart
              platform that streamlines your day.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-10">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-blue-100">
                  <CheckCircle2 className="h-5 w-5 text-blue-300 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="text-base px-8 py-6 bg-white text-primary hover:bg-blue-50" asChild>
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 py-6 border-white/30 text-white hover:bg-white/10" asChild>
                <Link href="/platform">Explore Platform</Link>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/logos/appleseed_Icon.svg"
                    alt="Apple Seed Medical Platform"
                    width={200}
                    height={200}
                    className="opacity-30"
                  />
                </div>

                {/* Floating Stats Card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-5">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Healthcare Providers</div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-white rounded-full shadow-xl px-4 py-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-medium text-foreground">AI-Powered</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
