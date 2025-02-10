"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import FuturisticButton from "./FuturisticButton"
import Link from "next/link"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const imageOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.7, 0.5])
  const contentTranslateY = useTransform(scrollYProgress, [0, 0.5], [0, -50])

  const tintColor = useTransform(scrollYProgress, [0, 1], ["rgba(0, 0, 0, 0.5)", "rgba(0, 48, 87, 0.9)"])

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Fixed Background Image */}
      <div className="fixed inset-0 w-full h-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ljPbbV38wmi4G51Dl0tl348Wd4ypB8.png"
          alt="GT Research Lab"
          fill
          priority
          className="object-cover"
          quality={100}
        />
      </div>

      {/* Dynamic Tint Overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundColor: tintColor,
        }}
      />

      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(179,163,105,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(179,163,105,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Particle Effects */}
      {isMounted && (
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gt-gold rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: Math.random() * 2 + 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <motion.div
        className="relative z-10 min-h-screen flex flex-col items-center justify-center"
        style={{
          opacity: contentOpacity,
          y: contentTranslateY,
        }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-6xl md:text-8xl font-display font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span
                className="bg-clip-text text-transparent bg-gradient-to-r from-gt-gold via-gt-gold-light to-white inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                GT Research Finder
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-200 mb-12 font-display"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Connect with Georgia Tech's leading researchers and labs
              <br />
              through our AI-powered platform
            </motion.p>

            {/* Updated CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/join">
                <FuturisticButton size="lg" className="transform-gpu" glowColor="rgba(179, 163, 105, 0.5)">
                  Join Our Network
                </FuturisticButton>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scientific Symbols Overlay */}
      {isMounted && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-gt-gold/10 text-6xl font-bold"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              ⚛
            </motion.div>
          ))}
        </div>
      )}
    </section>
  )
}

