import type React from "react"
import { motion } from "framer-motion"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large"
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ size = "medium", children, ...props }) => {
  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
  }

  return (
    <motion.button
      className={`bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-300 transition-colors duration-300 ${sizeClasses[size]}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button

