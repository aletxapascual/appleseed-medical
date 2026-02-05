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
    <section className="bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
              Next-Generation AI Platform
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Apple Seed Intelligence Platform
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Revolutionary AI-powered wound care management system that transforms healthcare
              delivery through intelligent automation and predictive analytics
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-4 rounded-xl hover:bg-secondary transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <feature.icon className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base" asChild>
                <Link href="/platform">
                  Explore the Platform
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base" asChild>
                <Link href="/contact">Request Demo</Link>
              </Button>
            </div>
          </div>

          {/* Platform Visual */}
          <div className="relative">
            <div className="relative">
              {/* Main Dashboard Image */}
              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 shadow-2xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center">
                    <Image
                      src="/logos/appleseed_Icon.svg"
                      alt="Apple Seed Platform"
                      width={120}
                      height={120}
                      className="opacity-40"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-5 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                    <BarChart3 className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-foreground">35%</div>
                    <div className="text-xs text-muted-foreground">Better Outcomes</div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 border border-border">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center">
                    <Zap className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">60%</div>
                    <div className="text-xs text-muted-foreground">Time Saved</div>
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
