"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Who can use GT Research Finder?",
    answer:
      "GT Research Finder is available to all current Georgia Tech students looking for research opportunities across various departments and labs.",
  },
  {
    question: "How does the AI matching system work?",
    answer:
      "Our AI system analyzes your academic profile, interests, and skills to match you with research opportunities that best align with your background and goals.",
  },
  {
    question: "When will the platform launch?",
    answer:
      "We're currently in the final stages of development. Join our waitlist to be among the first to access the platform when we launch!",
  },
  {
    question: "Can professors post research opportunities?",
    answer:
      "Yes! Professors can create accounts to post positions and review applications directly through our platform.",
  },
  {
    question: "Is this an official Georgia Tech platform?",
    answer:
      "While we're created by GT students for GT students, we're an independent platform working closely with the GT community.",
  },
]

export default function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="relative py-20 bg-gradient-to-b from-gt-navy to-black overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gt-gold via-gt-gold-light to-white">
              Frequently Asked Questions
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gt-gold/20 rounded-xl bg-gradient-to-br from-gt-navy/50 to-black/50 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:text-gt-gold transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

