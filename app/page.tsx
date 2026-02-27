"use client"

import { useState, useCallback } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { GenreBar } from "@/components/genre-bar"
import { AlbumGrid } from "@/components/album-grid"
import { TrackList } from "@/components/track-list"
import { ArtistShowcase } from "@/components/artist-showcase"
import { PlaylistSection } from "@/components/playlist-section"
import { PlayerBar } from "@/components/player-bar"
import { Footer } from "@/components/footer"
import type { Track } from "@/lib/music-data"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleNavigate = useCallback((section: string) => {
    setActiveSection(section)
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    } else if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [])

  const handlePlayTrack = useCallback((track: Track) => {
    setCurrentTrack(track)
    setIsPlaying(true)
  }, [])

  const handleTogglePlay = useCallback(() => {
    setIsPlaying((prev) => !prev)
  }, [])

  const handleTrackChange = useCallback((track: Track) => {
    setCurrentTrack(track)
    setIsPlaying(true)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      <HeroSection onNavigate={handleNavigate} />

      <GenreBar />

      <AlbumGrid onPlayTrack={handlePlayTrack} />

      <TrackList
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        onPlayTrack={handlePlayTrack}
        onTogglePlay={handleTogglePlay}
      />

      <ArtistShowcase />

      <PlaylistSection />

      <Footer />

      <PlayerBar
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        onTogglePlay={handleTogglePlay}
        onTrackChange={handleTrackChange}
      />
    </main>
  )
}
