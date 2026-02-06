"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Truck, Shield, Brain, Sparkles, Play } from "lucide-react"
import { motion } from "motion/react"

const stats = [
  { value: "500+", label: "Healthcare Providers" },
  { value: "50K+", label: "Patients Served" },
  { value: "99.8%", label: "Satisfaction Rate" },
]

const features = [
  { icon: Truck, text: "Next-Day Delivery" },
  { icon: Shield, text: "FDA Approved Products" },
  { icon: Brain, text: "AI-Powered Platform" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Grid Background with fade on all sides */}
      <div className="absolute inset-0 bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_30%,#000_40%,transparent_100%)]" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-end min-h-screen py-20 lg:py-0 lg:pb-20 lg:-mt-[250px]">
          {/* Content */}
          <div className="order-1 lg:order-1 lg:col-span-5 -mt-[70px] lg:mt-0">
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-2 mb-6"
            >
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-sm font-medium text-primary">Revolutionizing Wound Care</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 leading-[1.1] tracking-tight"
            >
              Wound Care
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-sky-600 to-primary-dark">
                Made Simple
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed max-w-md"
            >
              Direct access to premium skin substitutes. No sales reps, no pressure—just an
              AI-powered platform that streamlines your practice.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-slate-50 border border-slate-200/80 rounded-full px-4 py-2"
                >
                  <feature.icon className="h-3.5 w-3.5 text-primary" />
                  <span className="text-sm font-medium text-foreground">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 mb-8"
            >
              <Button
                size="lg"
                className="text-base px-8 bg-primary hover:bg-primary-dark shadow-lg shadow-primary/20 transition-all hover:scale-105"
                asChild
              >
                <Link href="/contact">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 border-slate-300 hover:border-primary/30 hover:bg-primary/5 transition-all hover:scale-105"
                asChild
              >
                <Link href="/platform">
                  <Play className="mr-2 h-4 w-4 text-primary" />
                  Watch Demo
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap gap-8 pt-6 border-t border-slate-200/60"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative order-2 lg:order-2 lg:col-span-7"
          >
            <div className="relative">
              {/* Premium Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-sky-500/15 to-cyan-500/20 rounded-[2rem] blur-3xl scale-95 glow-premium" />

              {/* Image Grid Layout */}
              <div className="relative grid grid-cols-2 md:grid-cols-12 md:grid-rows-6 gap-3 md:gap-5 h-auto md:h-[620px]">
                {/* Main Large Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="col-span-2 md:col-span-8 md:row-span-4 relative rounded-xl md:rounded-[1.25rem] overflow-hidden shadow-elevated-lg group aspect-[4/3] md:aspect-auto"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1200&auto=format&fit=crop"
                    alt="Medical professional performing wound care treatment"
                    fill
                    className="object-cover image-premium group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
                </motion.div>

                {/* Top Right Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="col-span-1 md:col-span-4 md:row-span-3 relative rounded-xl md:rounded-[1.25rem] overflow-hidden shadow-elevated group aspect-square md:aspect-auto"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=800&auto=format&fit=crop"
                    alt="Medical bandages and wound care supplies"
                    fill
                    className="object-cover image-premium group-hover:scale-105 transition-transform duration-700"
                  />
                </motion.div>

                {/* Bottom Right Stat Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="col-span-1 md:col-span-4 md:row-span-3 bg-gradient-to-br from-primary via-primary to-primary-dark rounded-xl md:rounded-[1.25rem] p-4 md:p-7 shadow-elevated-lg flex flex-col justify-between relative overflow-hidden group aspect-square md:aspect-auto"
                >
                  {/* Subtle pattern overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-50" />
                  <div className="relative z-10">
                    <div className="text-3xl md:text-6xl font-bold text-white tracking-tight">35%</div>
                    <div className="text-sky-100 text-xs md:text-sm mt-1 md:mt-2 font-medium">Better Patient Outcomes</div>
                  </div>
                  <div className="relative z-10 flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-11 md:h-11 rounded-lg md:rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20">
                      <Brain className="h-4 w-4 md:h-5 md:w-5 text-white" />
                    </div>
                    <span className="text-xs md:text-sm text-sky-100 font-medium">AI-Powered</span>
                  </div>
                </motion.div>

                {/* Bottom Left Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="hidden md:block md:col-span-4 md:row-span-2 relative rounded-[1.25rem] overflow-hidden shadow-elevated group"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=800&auto=format&fit=crop"
                    alt="Sterile medical supplies and bandages"
                    fill
                    className="object-cover image-premium group-hover:scale-105 transition-transform duration-700"
                  />
                </motion.div>

                {/* Bottom Center Stat Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="hidden md:flex md:col-span-4 md:row-span-2 bg-white rounded-[1.25rem] p-4 md:p-6 shadow-elevated border border-slate-100 flex-col justify-between"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-4xl font-bold text-foreground tracking-tight">500+</div>
                      <div className="text-muted-foreground text-sm font-medium mt-1">Healthcare Providers</div>
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center shadow-sm">
                      <Truck className="h-6 w-6 text-emerald-600" />
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {[1,2,3,4,5].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-sky-500 border-[3px] border-white -ml-2 first:ml-0 shadow-sm" />
                    ))}
                    <span className="text-xs text-muted-foreground ml-3 font-medium">Trusted nationwide</span>
                  </div>
                </motion.div>
              </div>

              {/* Premium Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="hidden md:flex absolute -top-4 -right-4 bg-white/90 backdrop-blur-md rounded-full shadow-elevated px-5 py-2.5 border border-slate-200/50 items-center gap-2.5"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-sm shadow-emerald-500/50" />
                <span className="text-sm font-semibold text-foreground">Live Platform</span>
              </motion.div>

              {/* Premium Floating FDA Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="hidden md:block absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-elevated p-4 border border-slate-200/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">FDA Approved</div>
                    <div className="text-xs text-muted-foreground">100% compliant</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
