import { HeroSection } from "@/components/sections/HeroSection"
import { SolutionsSection } from "@/components/sections/SolutionsSection"
import { TrustedManufacturersSection } from "@/components/sections/TrustedManufacturersSection"
import { FourPillarsSection } from "@/components/sections/FourPillarsSection"
import { ComplianceSection } from "@/components/sections/ComplianceSection"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SolutionsSection />
      <TrustedManufacturersSection />
      <FourPillarsSection />
      <ComplianceSection />
    </>
  )
}
