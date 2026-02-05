import { Workflow, ShieldCheck, TrendingUp, Brain } from "lucide-react"

const pillars = [
  {
    icon: Workflow,
    number: "1",
    title: "Smarter Workflows",
    description: "From eligibility through product access in one place. Streamlined processes that save time and reduce errors.",
  },
  {
    icon: ShieldCheck,
    number: "2",
    title: "Compliance Confidence",
    description: "With documentation support and clear visibility. Automated audit trails and regulatory compliance built-in.",
  },
  {
    icon: TrendingUp,
    number: "3",
    title: "Healthy Revenue Cycles",
    description: "With transparent pricing and rep-free efficiency. Maximize profitability while maintaining full compliance.",
  },
  {
    icon: Brain,
    number: "4",
    title: "Apple Seed Intelligence",
    description: "Purpose built for wound care access and documentation. AI-powered insights that improve patient outcomes.",
  },
]

export function FourPillarsSection() {
  return (
    <section className="bg-gradient-to-br from-primary via-primary-dark to-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_100%_0%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[radial-gradient(circle_at_0%_100%,rgba(255,255,255,0.15)_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-blue-200 font-medium tracking-wide uppercase text-sm mb-4">
            Our Foundation
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Four Pillars That Change Your Wound Care Routine
          </h2>
          <p className="text-blue-100 text-lg">
            A comprehensive approach designed specifically for wound care professionals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full hover:bg-white/15 transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <pillar.icon className="h-7 w-7 text-white" />
                  </div>
                  <span className="text-4xl font-bold text-white/30">{pillar.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
