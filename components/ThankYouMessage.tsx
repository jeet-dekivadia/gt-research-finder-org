import Link from "next/link"
import FuturisticButton from "./FuturisticButton"

export default function ThankYouMessage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gt-navy to-black p-4">
      <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gt-gold via-gt-gold-light to-white">
          Thank You!
        </span>
      </h1>
      <p className="text-xl text-gray-200 mb-12 text-center">
        Your submission has been received. We'll be in touch soon!
      </p>
      <Link href="/">
        <FuturisticButton size="lg">Return to Home</FuturisticButton>
      </Link>
    </div>
  )
}

