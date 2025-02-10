"use client"

import { motion, useAnimation } from "framer-motion"
import { useState, useEffect } from "react"
import type React from "react"

interface FuturisticButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
  glowColor?: string
}

export default function FuturisticButton({
  children,
  onClick,
  className = "",
  variant = "primary",
  size = "md",
  glowColor = "rgba(179, 163, 105, 0.5)", // GT Gold
}: FuturisticButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const controls = useAnimation()

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  const variants = {
    primary: {
      base: "bg-black text-gt-gold border-2 border-gt-gold",
      hover: "bg-gt-gold text-black",
    },
    secondary: {
      base: "bg-transparent text-white border-2 border-white",
      hover: "bg-white text-black",
    },
  }

  useEffect(() => {
    if (isHovered) {
      controls.start({
        background: [
          `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor} 0%, transparent 100%)`,
          `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor} 20%, transparent 100%)`,
        ],
      })
    }
  }, [mousePosition, isHovered, controls, glowColor])

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.button
      className={`
        relative overflow-hidden rounded-lg font-bold
        transform transition-all duration-300
        ${sizeClasses[size]}
        ${variants[variant].base}
        ${className}
      `}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Gradient Overlay */}
      <motion.div
        className="absolute inset-0"
        animate={controls}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Border Glow */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        animate={{
          boxShadow: isHovered ? `0 0 20px ${glowColor}, 0 0 40px ${glowColor}` : "0 0 0 transparent",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <motion.span
        className="relative z-10 flex items-center justify-center gap-2"
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
      >
        {children}
      </motion.span>

      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-gt-gold via-white to-gt-gold"
        style={{
          opacity: isHovered ? 0.2 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  )
}

