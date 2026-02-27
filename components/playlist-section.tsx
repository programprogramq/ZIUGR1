"use client"

import Image from "next/image"
import { Play } from "lucide-react"
import { curatedPlaylists } from "@/lib/music-data"

export function PlaylistSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24" id="playlists">
      <div className="mb-12">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
          Curated
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">
          <span className="text-balance">Playlists for You</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {curatedPlaylists.map((playlist) => (
          <div
            key={playlist.id}
            className="group cursor-pointer overflow-hidden rounded-lg bg-card transition-colors hover:bg-secondary"
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={playlist.cover}
                alt={playlist.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/0 transition-colors group-hover:bg-background/30" />
              <div className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 shadow-xl transition-all duration-300 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                <Play className="h-5 w-5 ml-0.5" fill="currentColor" />
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-display text-base font-semibold text-card-foreground">
                {playlist.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {playlist.description}
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                {playlist.trackCount} tracks
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
