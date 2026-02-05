import { HeroSection } from "@/components/sections/HeroSection"
import { SolutionsSection } from "@/components/sections/SolutionsSection"
import { FourPillarsSection } from "@/components/sections/FourPillarsSection"
import { TrustedManufacturersSection } from "@/components/sections/TrustedManufacturersSection"
import { AIPlatformSection } from "@/components/sections/AIPlatformSection"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SolutionsSection />
      <FourPillarsSection />
      <TrustedManufacturersSection />
      <AIPlatformSection />
    </>
  )
}
