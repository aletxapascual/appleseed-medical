"use client"

import React from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

interface DottedGlowBackgroundProps {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  dotColor?: string
  glowColor?: string
  dotSize?: number
  dotSpacing?: number
  animate?: boolean
}

export function DottedGlowBackground({
  children,
  className,
  containerClassName,
  dotColor = "rgba(59, 130, 246, 0.3)",
  glowColor = "rgba(59, 130, 246, 0.15)",
  dotSize = 1,
  dotSpacing = 24,
  animate = true,
}: DottedGlowBackgroundProps) {
  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {/* Dotted pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at center, ${dotColor} ${dotSize}px, transparent ${dotSize}px)`,
          backgroundSize: `${dotSpacing}px ${dotSpacing}px`,
        }}
      />

      {/* Animated glow orbs */}
      {animate && (
        <>
          <motion.div
            className="absolute rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
              width: "40%",
              height: "40%",
            }}
            animate={{
              x: ["0%", "60%", "30%", "0%"],
              y: ["0%", "40%", "80%", "0%"],
              scale: [1, 1.2, 0.9, 1],
              opacity: [0.5, 0.8, 0.6, 0.5],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
              width: "35%",
              height: "35%",
              right: 0,
              bottom: 0,
            }}
            animate={{
              x: ["0%", "-50%", "-20%", "0%"],
              y: ["0%", "-30%", "-60%", "0%"],
              scale: [1, 0.9, 1.1, 1],
              opacity: [0.6, 0.5, 0.7, 0.6],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute rounded-full blur-3xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
              width: "50%",
              height: "50%",
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </>
      )}

      {/* Content */}
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  )
}

export function DottedGlowCard({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm",
        className
      )}
    >
      {/* Inner glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
