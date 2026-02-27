"use client"

import Image from "next/image"
import { featuredArtists } from "@/lib/music-data"

export function ArtistShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24" id="artists">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Artists
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">Trending Artists</span>
          </h2>
        </div>
        <button className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground md:block">
          View All
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {featuredArtists.map((artist) => (
          <div key={artist.id} className="group cursor-pointer text-center">
            <div className="relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-full">
              <Image
                src={artist.image}
                alt={`${artist.name} portrait`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 rounded-full ring-2 ring-transparent transition-all duration-300 group-hover:ring-primary" />
            </div>
            <h3 className="mt-4 font-display text-base font-semibold text-foreground md:text-lg">
              {artist.name}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{artist.genre}</p>
            <p className="mt-1 text-xs text-muted-foreground">
              {artist.followers} followers
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
