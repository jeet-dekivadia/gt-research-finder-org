"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { CheckCircle, Clock, Star, Zap } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "Save Time",
    description: "No more endless searching through faculty directories. Find relevant research positions in minutes.",
  },
  {
    icon: Star,
    title: "Quality Matches",
    description: "Get matched with research opportunities that align with your academic interests and career goals.",
  },
  {
    icon: Zap,
    title: "Instant Updates",
    description: "Receive real-time notifications when new research positions matching your profile become available.",
  },
  {
    icon: CheckCircle,
    title: "Verified Positions",
    description: "All research opportunities are verified and directly posted by Georgia Tech faculty members.",
  },
]

export default function Benefits() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="relative py-20 bg-black overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-gt-navy/20 to-black" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-condensed font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gt-gold via-gt-gold-light to-white">
              Benefits for GT Students
            </span>
          </h2>
          <p className="text-xl text-gray-300 font-slab max-w-3xl mx-auto">
            Experience a revolutionary way to discover and apply for research opportunities at Georgia Tech
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="relative p-8 rounded-xl bg-gradient-to-br from-gt-navy/50 to-black/50 border border-gt-gold/20 transition-all duration-300 group-hover:border-gt-gold">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gt-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gt-gold/10">
                    <benefit.icon className="w-8 h-8 text-gt-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gt-gold mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-xl border border-gt-gold/0 group-hover:border-gt-gold/50 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-72 h-72 bg-gt-gold/5 rounded-full filter blur-3xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.2, 1],
                x: [0, 30, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 2,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

