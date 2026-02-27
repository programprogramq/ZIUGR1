"use client"

import Image from "next/image"
import { Play, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  onNavigate: (section: string) => void
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-artist.jpg"
          alt="Live concert performance with dramatic red stage lighting"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-24 pt-32">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Now Streaming
          </p>
          <h1 className="font-display text-5xl font-bold leading-tight text-foreground md:text-7xl lg:text-8xl">
            <span className="text-balance">Echoes of Silence</span>
          </h1>
          <p className="mt-2 font-display text-2xl font-light text-muted-foreground md:text-3xl">
            Nova Waves
          </p>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            The groundbreaking new album that blends electronic textures with
            haunting vocals. A sonic journey through silence and sound.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
            >
              <Play className="h-5 w-5" fill="currentColor" />
              Listen Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-border text-foreground hover:bg-secondary rounded-full px-8"
              onClick={() => onNavigate("discover")}
            >
              Explore
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mt-16 flex items-center gap-8 border-t border-border/50 pt-8">
          <div>
            <p className="font-display text-2xl font-bold text-foreground">12</p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Tracks</p>
          </div>
          <div className="h-8 w-px bg-border" />
          <div>
            <p className="font-display text-2xl font-bold text-foreground">48:32</p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Duration</p>
          </div>
          <div className="h-8 w-px bg-border" />
          <div>
            <p className="font-display text-2xl font-bold text-foreground">2026</p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Release</p>
          </div>
        </div>
      </div>
    </section>
  )
}
