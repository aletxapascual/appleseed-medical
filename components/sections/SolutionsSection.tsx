import Image from "next/image"
import { DollarSign, Network, Award, Cpu } from "lucide-react"

const solutions = [
  {
    icon: DollarSign,
    title: "Revenue Optimization",
    description: "Advanced billing analytics and transparent pricing models that maximize practice profitability while ensuring compliance.",
  },
  {
    icon: Network,
    title: "Direct Access Network",
    description: "Streamlined procurement system that eliminates intermediaries and provides direct manufacturer relationships.",
  },
  {
    icon: Award,
    title: "Clinical Excellence",
    description: "Evidence-based product selection from premier manufacturers specializing in advanced wound care technologies.",
  },
  {
    icon: Cpu,
    title: "Intelligent Automation",
    description: "AI-powered workflow optimization that seamlessly integrates documentation, ordering, and compliance management.",
  },
]

export function SolutionsSection() {
  return (
    <section className="bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main Image */}
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary-light to-secondary overflow-hidden">
                <div className="w-full h-full flex items-center justify-center p-12">
                  <Image
                    src="/logos/appleseed_Vertical.svg"
                    alt="Apple Seed Medical Solutions"
                    width={300}
                    height={300}
                    className="opacity-20"
                  />
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-2xl p-6 max-w-[240px] border border-border">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center">
                    <Network className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">50+</div>
                    <div className="text-xs text-muted-foreground">Manufacturer Partners</div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 right-1/4 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Comprehensive Solutions for Modern Healthcare
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Medical-grade solutions designed for modern healthcare practices
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-xl bg-secondary hover:bg-primary-light transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                    <solution.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
