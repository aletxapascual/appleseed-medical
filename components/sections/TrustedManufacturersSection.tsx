import Image from "next/image"
import { Building2, CheckCircle2 } from "lucide-react"

const manufacturers = [
  { name: "BioTissue Technologies", specialty: "Amniotic Products" },
  { name: "Regenerative Sciences", specialty: "Tissue Matrix" },
  { name: "MiMedx Group", specialty: "Wound Care" },
  { name: "Amnio Technology", specialty: "Dual Layer" },
]

const benefits = [
  "FDA-approved manufacturers only",
  "Direct pricing with no markups",
  "Authentic products guaranteed",
  "Complete traceability",
]

export function TrustedManufacturersSection() {
  return (
    <section className="bg-secondary">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
              Our Partners
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted Manufacturers
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We partner with leading manufacturers across amniotic, collagen, keratin, and protein-based solutions to bring you the best in wound care.
            </p>

            {/* Benefits List */}
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Partners</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Quality Rate</div>
              </div>
            </div>
          </div>

          {/* Manufacturer Cards */}
          <div className="grid grid-cols-2 gap-4">
            {manufacturers.map((manufacturer, index) => (
              <div
                key={index}
                className="group bg-white hover:bg-primary-light rounded-2xl p-6 lg:p-8 transition-all duration-300 border border-border hover:border-primary/20 shadow-sm hover:shadow-lg"
              >
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br from-primary-light to-secondary flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-primary-light transition-colors">
                  <Building2 className="h-8 w-8 lg:h-10 lg:w-10 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 text-sm lg:text-base">
                  {manufacturer.name}
                </h3>
                <p className="text-xs lg:text-sm text-muted-foreground">
                  {manufacturer.specialty}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
