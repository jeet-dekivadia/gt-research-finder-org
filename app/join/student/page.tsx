"use client"

import { useState } from "react"
import FuturisticButton from "@/components/FuturisticButton"
import ThankYouMessage from "@/components/ThankYouMessage"

export default function StudentJoinPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  if (formSubmitted) {
    return <ThankYouMessage />
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gt-navy to-black p-4">
      <h1 className="text-4xl md:text-6xl font-display font-bold mb-12 text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gt-gold via-gt-gold-light to-white">
          Join as a Student
        </span>
      </h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
        <div>
          <label htmlFor="name" className="block text-gt-gold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full p-2 rounded bg-black border border-gt-gold text-white"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gt-gold mb-2">
            Georgia Tech Email
          </label>
          <input
            type="email"
            id="email"
            required
            pattern=".+@gatech\.edu$"
            className="w-full p-2 rounded bg-black border border-gt-gold text-white"
          />
        </div>
        <div>
          <label htmlFor="qualification" className="block text-gt-gold mb-2">
            Qualification
          </label>
          <input
            type="text"
            id="qualification"
            required
            className="w-full p-2 rounded bg-black border border-gt-gold text-white"
          />
        </div>
        <div>
          <label htmlFor="interest" className="block text-gt-gold mb-2">
            Area of Interest
          </label>
          <input
            type="text"
            id="interest"
            required
            className="w-full p-2 rounded bg-black border border-gt-gold text-white"
          />
        </div>
        <FuturisticButton type="submit" size="lg" className="w-full">
          Submit
        </FuturisticButton>
      </form>
    </div>
  )
}

