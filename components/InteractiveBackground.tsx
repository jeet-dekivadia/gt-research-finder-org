"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useScroll } from "framer-motion"
import Image from "next/image"

export default function InteractiveBackground() {
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { clientX, clientY } = e
      const { width, height } = containerRef.current.getBoundingClientRect()

      const x = ((clientX - width / 2) / width) * 20
      const y = ((clientY - height / 2) / height) * 20

      controls.start({
        x,
        y,
        transition: { type: "spring", stiffness: 100, damping: 30 },
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [controls])

  useEffect(() => {
    return scrollY.onChange((latest) => {
      controls.start({
        scale: 1 + latest / 5000,
        transition: { type: "spring", stiffness: 100, damping: 30 },
      })
    })
  }, [controls, scrollY])

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden -z-10">
      <motion.div animate={controls} className="absolute inset-0 w-full h-full" style={{ perspective: 1000 }}>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-02-08%2022.10.04%20-%20A%20modern,%20sleek%20website%20banner%20for%20'GT%20Research%20Finder'%20featuring%20Georgia%20Tech%20students%20collaborating%20in%20a%20research%20lab%20setting.%20The%20scene%20should%20incl-p88nb3Sv2so6JGL93ohGgcrW7oqjpt.webp"
          alt="GT Research Lab"
          fill
          className="object-cover opacity-90"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gt-navy/80 via-transparent to-black" />

        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(179,163,105,0.1)1px,transparent_1px),linear-gradient(0deg,rgba(179,163,105,0.1)1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Glowing Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gt-gold rounded-full"
              animate={{
                x: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
                y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

