"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Search, Brain, Users, Rocket } from "lucide-react"

const features = [
  {
    icon: Search,
    title: "Smart Search",
    description:
      "Find research opportunities perfectly matching your interests & skills through our filtering system.",
  },
  {
    icon: Brain,
    title: "AI-Powered Matching",
    description: "Our AI algorithm analyzes your profile to recommend the most relevant research positions.",
  },
  {
    icon: Users,
    title: "Direct Connection",
    description: "Connect directly with professors and research labs without the hassle of endless emails.",
  },
  {
    icon: Rocket,
    title: "Quick Apply",
    description: "Apply to multiple research positions with a single click using your saved profile.",
  },
]

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="relative py-20 bg-gradient-to-b from-gt-navy to-black overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#B3A36922_1px,transparent_1px),linear-gradient(to_bottom,#B3A36922_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-condensed font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gt-gold via-gt-gold-light to-white">
            Why Choose Research Finder?
          </h2>
          <p className="text-xl text-gray-300 font-slab max-w-3xl mx-auto">
            Our platform streamlines the research discovery process, making it easier than ever to find your perfect
            research opportunity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="relative p-6 rounded-xl bg-gt-navy/30 backdrop-blur-md border border-gt-gold/20 transition-all duration-300 group-hover:border-gt-gold">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gt-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <feature.icon className="w-12 h-12 text-gt-gold mb-4" />
                <h3 className="text-xl font-bold text-gt-gold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>

                <div className="absolute inset-0 rounded-xl border border-gt-gold/0 group-hover:border-gt-gold/50 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

