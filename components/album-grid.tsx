"use client"

import Image from "next/image"
import { Play } from "lucide-react"
import { featuredAlbums } from "@/lib/music-data"
import type { Track } from "@/lib/music-data"

interface AlbumGridProps {
  onPlayTrack: (track: Track) => void
}

export function AlbumGrid({ onPlayTrack }: AlbumGridProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24" id="discover">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Discover
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">Featured Albums</span>
          </h2>
        </div>
        <button className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground md:block">
          View All
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
        {featuredAlbums.map((album) => (
          <button
            key={album.id}
            className="group relative text-left"
            onClick={() =>
              onPlayTrack({
                id: album.id,
                title: album.title,
                artist: album.artist,
                album: album.title,
                duration: "4:23",
                cover: album.cover,
              })
            }
          >
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={album.cover}
                alt={`${album.title} by ${album.artist}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/0 transition-colors duration-300 group-hover:bg-background/40" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                  <Play className="h-6 w-6 ml-0.5" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-3 left-3">
                <span className="rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                  {album.genre}
                </span>
              </div>
            </div>
            <div className="mt-3">
              <h3 className="font-display text-sm font-semibold text-foreground md:text-base">
                {album.title}
              </h3>
              <p className="mt-0.5 text-sm text-muted-foreground">{album.artist}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
