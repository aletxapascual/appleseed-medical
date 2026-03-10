"use client"

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselProps {
  items: React.ReactElement[]
  initialScroll?: number
}

type Card = {
  title: string
  category: string
  content: React.ReactNode
  icon?: React.ReactNode
  src: string
}

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll
      checkScrollability()
    }
  }, [initialScroll])

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth)
    }
  }

  const scrollLeftHandler = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRightHandler = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  return (
    <div className="relative w-full">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-primary-dark to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-primary-dark to-transparent z-20 pointer-events-none" />

      <div
        className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-16 scroll-smooth [scrollbar-width:none] [-webkit-overflow-scrolling:touch]"
        ref={carouselRef}
        onScroll={checkScrollability}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex flex-row justify-start gap-5 md:gap-8 px-8 md:px-16 mx-auto">
          {items.map((item, index) => (
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: 0.15 * index,
                  ease: [0.25, 0.1, 0.25, 1],
                },
              }}
              key={"card" + index}
              className="flex-shrink-0"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center gap-3 mt-2">
        <button
          className={cn(
            "relative z-40 h-12 w-12 rounded-full flex items-center justify-center transition-all duration-300 border",
            canScrollLeft
              ? "bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 hover:scale-105 active:scale-95"
              : "bg-white/5 border-white/10 cursor-not-allowed opacity-50"
          )}
          onClick={scrollLeftHandler}
          disabled={!canScrollLeft}
        >
          <ChevronLeft className="h-5 w-5 text-white" />
        </button>
        <button
          className={cn(
            "relative z-40 h-12 w-12 rounded-full flex items-center justify-center transition-all duration-300 border",
            canScrollRight
              ? "bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 hover:scale-105 active:scale-95"
              : "bg-white/5 border-white/10 cursor-not-allowed opacity-50"
          )}
          onClick={scrollRightHandler}
          disabled={!canScrollRight}
        >
          <ChevronRight className="h-5 w-5 text-white" />
        </button>
      </div>
    </div>
  )
}

export const Card = ({
  card,
  index,
}: {
  card: Card
  index: number
}) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="rounded-3xl h-[22rem] w-72 md:h-[28rem] md:w-[22rem] overflow-hidden flex flex-col items-start justify-end relative z-10 group cursor-pointer"
    >
      {/* Background Image */}
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110"
      />

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

      {/* Colored accent overlay based on index */}
      <div
        className={cn(
          "absolute inset-0 z-10 opacity-0 group-hover:opacity-30 transition-opacity duration-500 mix-blend-overlay",
          index === 0 && "bg-gradient-to-br from-cyan-400 to-blue-600",
          index === 1 && "bg-gradient-to-br from-emerald-400 to-teal-600",
          index === 2 && "bg-gradient-to-br from-amber-400 to-orange-600",
          index === 3 && "bg-gradient-to-br from-violet-400 to-purple-600"
        )}
      />

      {/* Top shine effect */}
      <div className="absolute top-0 left-0 right-0 h-32 z-20 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-30 p-6 md:p-8 flex flex-col w-full">
        {/* Icon */}
        {card.icon && (
          <div
            className={cn(
              "w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg",
              index === 0 && "bg-cyan-500/90 group-hover:bg-cyan-400 group-hover:shadow-cyan-500/30",
              index === 1 && "bg-emerald-500/90 group-hover:bg-emerald-400 group-hover:shadow-emerald-500/30",
              index === 2 && "bg-amber-500/90 group-hover:bg-amber-400 group-hover:shadow-amber-500/30",
              index === 3 && "bg-violet-500/90 group-hover:bg-violet-400 group-hover:shadow-violet-500/30"
            )}
          >
            {card.icon}
          </div>
        )}

        {/* Category pill */}
        <span
          className={cn(
            "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase w-fit mb-3 transition-colors duration-300",
            index === 0 && "bg-cyan-500/20 text-cyan-300",
            index === 1 && "bg-emerald-500/20 text-emerald-300",
            index === 2 && "bg-amber-500/20 text-amber-300",
            index === 3 && "bg-violet-500/20 text-violet-300"
          )}
        >
          {card.category}
        </span>

        {/* Title */}
        <h3 className="text-white text-xl md:text-2xl font-bold max-w-xs text-left [text-wrap:balance] leading-tight">
          {card.title}
        </h3>

        {/* Description - reveals on hover */}
        <div className="overflow-hidden">
          <p className="text-white/70 text-sm md:text-base text-left mt-3 leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
            {typeof card.content === "string" ? card.content : null}
          </p>
        </div>

        {/* Bottom accent line */}
        <div
          className={cn(
            "h-1 rounded-full mt-5 transition-all duration-500 w-12 group-hover:w-full",
            index === 0 && "bg-cyan-400",
            index === 1 && "bg-emerald-400",
            index === 2 && "bg-amber-400",
            index === 3 && "bg-violet-400"
          )}
        />
      </div>
    </motion.div>
  )
}

