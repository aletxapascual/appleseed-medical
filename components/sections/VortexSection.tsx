"use client"

import { Vortex } from "@/components/ui/vortex"

interface VortexSectionProps {
  children: React.ReactNode
  title: string
  subtitle?: string
  description?: string
  backgroundColor?: string
  baseHue?: number
}

export function VortexSection({
  children,
  title,
  subtitle,
  description,
  backgroundColor = "#075985",
  baseHue = 200,
}: VortexSectionProps) {
  return (
    <section className="relative overflow-hidden">
      <Vortex
        backgroundColor={backgroundColor}
        baseHue={baseHue}
        rangeY={200}
        particleCount={500}
        baseSpeed={0.1}
        rangeSpeed={1.0}
        containerClassName="h-full"
        className="h-full"
      >
        <div className="relative z-10 py-20 md:py-24 lg:py-32">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              {subtitle && (
                <p className="text-blue-200 font-medium tracking-wide uppercase text-sm mb-4">
                  {subtitle}
                </p>
              )}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                {title}
              </h2>
              {description && (
                <p className="text-blue-100 text-lg">
                  {description}
                </p>
              )}
            </div>

            {children}
          </div>
        </div>
      </Vortex>
    </section>
  )
}
