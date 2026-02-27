"use client"

import Image from "next/image"
import { Play, Pause, Heart } from "lucide-react"
import { trendingTracks } from "@/lib/music-data"
import type { Track } from "@/lib/music-data"

interface TrackListProps {
  currentTrack: Track | null
  isPlaying: boolean
  onPlayTrack: (track: Track) => void
  onTogglePlay: () => void
}

export function TrackList({
  currentTrack,
  isPlaying,
  onPlayTrack,
  onTogglePlay,
}: TrackListProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
          Trending
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">
          <span className="text-balance">Top Tracks</span>
        </h2>
      </div>

      <div className="flex flex-col">
        {trendingTracks.map((track, index) => {
          const isCurrentTrack = currentTrack?.id === track.id
          return (
            <button
              key={track.id}
              className={`group flex items-center gap-4 border-b border-border/50 px-2 py-4 text-left transition-colors hover:bg-secondary/50 md:px-4 ${
                isCurrentTrack ? "bg-secondary/30" : ""
              }`}
              onClick={() => {
                if (isCurrentTrack) {
                  onTogglePlay()
                } else {
                  onPlayTrack(track)
                }
              }}
            >
              <span className="w-8 text-center text-sm text-muted-foreground">
                {isCurrentTrack && isPlaying ? (
                  <span className="inline-flex items-center gap-0.5">
                    <span className="inline-block h-3 w-0.5 animate-pulse bg-primary" />
                    <span className="inline-block h-4 w-0.5 animate-pulse bg-primary delay-75" />
                    <span className="inline-block h-2 w-0.5 animate-pulse bg-primary delay-150" />
                  </span>
                ) : (
                  <span className="group-hover:hidden">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                )}
                {!(isCurrentTrack && isPlaying) && (
                  <span className="hidden group-hover:inline">
                    {isCurrentTrack ? (
                      <Pause className="mx-auto h-4 w-4 text-primary" />
                    ) : (
                      <Play className="mx-auto h-4 w-4 text-foreground" fill="currentColor" />
                    )}
                  </span>
                )}
              </span>

              <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded md:h-12 md:w-12">
                <Image
                  src={track.cover}
                  alt={`${track.album} album cover`}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="min-w-0 flex-1">
                <p
                  className={`truncate text-sm font-medium md:text-base ${
                    isCurrentTrack ? "text-primary" : "text-foreground"
                  }`}
                >
                  {track.title}
                </p>
                <p className="truncate text-xs text-muted-foreground md:text-sm">
                  {track.artist}
                </p>
              </div>

              <p className="hidden text-sm text-muted-foreground md:block">
                {track.album}
              </p>

              <div className="flex items-center gap-4">
                <Heart className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="w-12 text-right text-sm tabular-nums text-muted-foreground">
                  {track.duration}
                </span>
              </div>
            </button>
          )
        })}
      </div>
    </section>
  )
}
