"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { UserPlus, Search, Send, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: UserPlus,
    title: "Create Your Profile",
    description: "Sign up with your institute credentials and build your academic profile with your interests and skills.",
  },
  {
    icon: Search,
    title: "Discover Opportunities",
    description: "Browse through available research positions or get AI-recommended matches based on your profile.",
  },
  {
    icon: Send,
    title: "Easy Apply",
    description: "Submit applications to multiple labs with just a few clicks using your saved profile.",
  },
  {
    icon: CheckCircle,
    title: "Get Connected",
    description: "Receive responses directly from professors and start your research journey.",
  },
]

export default function HowItWorks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="relative py-20 bg-gradient-to-b from-black to-gt-navy overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#B3A36922_1px,transparent_1px),linear-gradient(to_bottom,#B3A36922_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gt-gold via-gt-gold-light to-white">
              How It Works
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Four simple steps to find your perfect research opportunity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="relative p-6 rounded-xl bg-gradient-to-br from-gt-navy/50 to-black/50 border border-gt-gold/20 h-full group hover:border-gt-gold transition-colors duration-300">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gt-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-gt-gold/10 flex items-center justify-center mb-4 group-hover:bg-gt-gold/20 transition-colors duration-300">
                    <step.icon className="w-6 h-6 text-gt-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-gt-gold mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>

                <div className="absolute top-2 right-2 text-gt-gold/20 font-display text-4xl font-bold">
                  {index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

