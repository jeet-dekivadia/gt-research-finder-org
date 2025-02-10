"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState } from "react"

export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  const [isPointer, setIsPointer] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([])

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)

      // Update trail
      setTrail((prev) => [...prev.slice(-20), { x: e.clientX, y: e.clientY }])

      // Check if hovering over clickable element
      const target = e.target as HTMLElement
      setIsPointer(window.getComputedStyle(target).cursor === "pointer")
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* Cursor Trail */}
      {trail.map((point, index) => (
        <motion.div
          key={index}
          className="fixed top-0 left-0 w-1 h-1 bg-gt-gold rounded-full pointer-events-none z-50 mix-blend-difference"
          initial={{ opacity: 0.5 }}
          animate={{
            opacity: 0,
            x: point.x,
            y: point.y,
          }}
          transition={{
            duration: 0.5,
            ease: "linear",
          }}
        />
      ))}

      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        {/* Inner Circle */}
        <motion.div
          className="relative"
          animate={{
            scale: isPointer ? 1.5 : 1,
            opacity: isClicking ? 0.5 : 1,
          }}
        >
          <div className="w-8 h-8 rounded-full border-2 border-gt-gold" />
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-gt-gold rounded-full -translate-x-1/2 -translate-y-1/2" />
        </motion.div>
      </motion.div>

      {/* Glow Effect */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-40"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <div className="w-32 h-32 rounded-full bg-gt-gold/20 blur-xl -translate-x-1/2 -translate-y-1/2" />
      </motion.div>
    </>
  )
}

