"use client"

import { motion } from "framer-motion"
import { useState, type ReactNode } from "react"

interface GlowButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  size?: "sm" | "md" | "lg"
}

export default function GlowButton({ children, onClick, className = "", size = "md" }: GlowButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  return (
    <motion.button
      className={`
        relative overflow-hidden rounded-lg bg-gt-gold
        text-black font-bold transition-all duration-300
        hover:bg-gt-gold-light
        ${sizeClasses[size]}
        ${className}
        ${isHovered ? "animate-glow-gold" : ""}
      `}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-gt-gold-light to-gt-gold opacity-0"
        animate={{ opacity: isHovered ? 0.5 : 0 }}
      />
      <motion.span className="relative z-10" animate={{ scale: isHovered ? 1.1 : 1 }}>
        {children}
      </motion.span>
    </motion.button>
  )
}

