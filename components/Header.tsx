"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Button from "./Button"
import type React from "react" // Added import for React

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div className="text-2xl font-bold" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          GT Research Finder
        </motion.div>
        <nav className="hidden md:flex space-x-6">
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#how-it-works">How It Works</NavLink>
          <Button onClick={() => window.open("https://your-typeform-url.com", "_blank")}>Join Waitlist</Button>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-gray-800 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col items-center py-4 space-y-4">
            <NavLink href="#features" onClick={() => setIsMenuOpen(false)}>
              Features
            </NavLink>
            <NavLink href="#how-it-works" onClick={() => setIsMenuOpen(false)}>
              How It Works
            </NavLink>
            <Button onClick={() => window.open("https://your-typeform-url.com", "_blank")}>Join Waitlist</Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
  <a href={href} className="text-white hover:text-yellow-400 transition-colors duration-300" onClick={onClick}>
    {children}
  </a>
)

export default Header

