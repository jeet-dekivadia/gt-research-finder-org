import type React from "react"
import { motion } from "framer-motion"
import * as Icons from "lucide-react"

interface AnimatedIconProps {
  icon: keyof typeof Icons
  text: string
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({ icon, text }) => {
  const Icon = Icons[icon]

  return (
    <motion.div className="flex flex-col items-center" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Icon className="w-12 h-12 text-yellow-400 mb-2" />
      <span className="text-sm">{text}</span>
    </motion.div>
  )
}

export default AnimatedIcon

