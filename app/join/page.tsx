import Link from "next/link"
import FuturisticButton from "@/components/FuturisticButton"

export default function JoinPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gt-navy to-black">
      <h1 className="text-4xl md:text-6xl font-display font-bold mb-12 text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gt-gold via-gt-gold-light to-white">
          Join the Global Academic Research Community
        </span>
      </h1>
      <div className="flex flex-col md:flex-row gap-8">
        <Link href="/join/student">
          <FuturisticButton size="lg">Join as Student</FuturisticButton>
        </Link>
        <Link href="/join/professor">
          <FuturisticButton size="lg">Join as Professor</FuturisticButton>
        </Link>
      </div>
    </div>
  )
}

