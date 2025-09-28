import { ScrambleText } from "@/components/scramble-text"
import { MapPin } from "lucide-react"

export function Header() {
  return (
    <header className="mb-16 space-y-4">
      <h1 className="text-4xl font-bold mb-4 animate-fade-in text-white">
        <span className="inline-block">
          <ScrambleText text="akram ramoul" />
        </span>
      </h1>
      <div className="flex flex-col gap-2 text-gray-400">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          Constantine, Algeria
        </div>
      </div>
      <p className="leading-relaxed animate-fade-in-up">
        i&apos;m a 24 y/o frontend developer passionate about building clean,
        modern, and user-friendly web applications. I specialize in React,
        Next.js, and TypeScript, with experience crafting interactive UIs,
        integrating APIs, and optimizing performance.
      </p>
    </header>
  )
}
