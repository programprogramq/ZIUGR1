"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Repeat,
  Shuffle,
  Heart,
} from "lucide-react"
import { Slider } from "@/components/ui/slider"
import type { Track } from "@/lib/music-data"
import { trendingTracks } from "@/lib/music-data"

interface PlayerBarProps {
  currentTrack: Track | null
  isPlaying: boolean
  onTogglePlay: () => void
  onTrackChange: (track: Track) => void
}

export function PlayerBar({
  currentTrack,
  isPlaying,
  onTogglePlay,
  onTrackChange,
}: PlayerBarProps) {
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState([75])
  const [isMuted, setIsMuted] = useState(false)
  const [isShuffled, setIsShuffled] = useState(false)
  const [repeatMode, setRepeatMode] = useState(0)
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0
        return prev + 0.5
      })
    }, 500)
    return () => clearInterval(interval)
  }, [isPlaying])

  useEffect(() => {
    setProgress(0)
    setLiked(false)
  }, [currentTrack?.id])

  const handleNext = useCallback(() => {
    if (!currentTrack) return
    const idx = trendingTracks.findIndex((t) => t.id === currentTrack.id)
    const next = trendingTracks[(idx + 1) % trendingTracks.length]
    onTrackChange(next)
  }, [currentTrack, onTrackChange])

  const handlePrev = useCallback(() => {
    if (!currentTrack) return
    const idx = trendingTracks.findIndex((t) => t.id === currentTrack.id)
    const prev =
      trendingTracks[(idx - 1 + trendingTracks.length) % trendingTracks.length]
    onTrackChange(prev)
  }, [currentTrack, onTrackChange])

  if (!currentTrack) return null

  const formatTime = (pct: number, duration: string) => {
    const parts = duration.split(":")
    const totalSec = parseInt(parts[0]) * 60 + parseInt(parts[1])
    const currentSec = Math.floor((pct / 100) * totalSec)
    const min = Math.floor(currentSec / 60)
    const sec = currentSec % 60
    return `${min}:${String(sec).padStart(2, "0")}`
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-xl">
      <div className="relative">
        <div
          className="absolute left-0 top-0 h-0.5 bg-primary transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 md:px-6">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-md">
            <Image
              src={currentTrack.cover}
              alt={`${currentTrack.album} album cover`}
              fill
              className="object-cover"
            />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-foreground">
              {currentTrack.title}
            </p>
            <p className="truncate text-xs text-muted-foreground">
              {currentTrack.artist}
            </p>
          </div>
          <button
            onClick={() => setLiked(!liked)}
            className="ml-2 hidden md:block"
            aria-label={liked ? "Unlike track" : "Like track"}
          >
            <Heart
              className={`h-4 w-4 transition-colors ${
                liked ? "fill-primary text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            />
          </button>
        </div>

        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-3 md:gap-4">
            <button
              onClick={() => setIsShuffled(!isShuffled)}
              className={`hidden md:block ${
                isShuffled ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label="Toggle shuffle"
            >
              <Shuffle className="h-4 w-4" />
            </button>
            <button
              onClick={handlePrev}
              className="text-muted-foreground hover:text-foreground"
              aria-label="Previous track"
            >
              <SkipBack className="h-5 w-5" fill="currentColor" />
            </button>
            <button
              onClick={onTogglePlay}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-background transition-transform hover:scale-105"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="h-4 w-4" fill="currentColor" />
              ) : (
                <Play className="h-4 w-4 ml-0.5" fill="currentColor" />
              )}
            </button>
            <button
              onClick={handleNext}
              className="text-muted-foreground hover:text-foreground"
              aria-label="Next track"
            >
              <SkipForward className="h-5 w-5" fill="currentColor" />
            </button>
            <button
              onClick={() => setRepeatMode((prev) => (prev + 1) % 3)}
              className={`hidden md:block ${
                repeatMode > 0
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label="Toggle repeat"
            >
              <Repeat className="h-4 w-4" />
              {repeatMode === 2 && (
                <span className="absolute -top-1 -right-1 text-[8px] font-bold text-primary">
                  1
                </span>
              )}
            </button>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <span className="w-10 text-right text-xs tabular-nums text-muted-foreground">
              {formatTime(progress, currentTrack.duration)}
            </span>
            <Slider
              value={[progress]}
              onValueChange={([val]) => setProgress(val)}
              max={100}
              step={0.1}
              className="w-80 lg:w-96"
              aria-label="Track progress"
            />
            <span className="w-10 text-xs tabular-nums text-muted-foreground">
              {currentTrack.duration}
            </span>
          </div>
        </div>

        <div className="hidden flex-1 items-center justify-end gap-2 md:flex">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="text-muted-foreground hover:text-foreground"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </button>
          <Slider
            value={isMuted ? [0] : volume}
            onValueChange={(val) => {
              setVolume(val)
              if (isMuted) setIsMuted(false)
            }}
            max={100}
            step={1}
            className="w-24"
            aria-label="Volume control"
          />
        </div>
      </div>
    </div>
  )
}
