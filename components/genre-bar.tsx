"use client"

import { useState } from "react"
import { genres } from "@/lib/music-data"

export function GenreBar() {
  const [activeGenre, setActiveGenre] = useState<string | null>(null)

  return (
    <section className="border-y border-border bg-secondary/30 py-6">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-hide">
          <button
            onClick={() => setActiveGenre(null)}
            className={`flex-shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              activeGenre === null
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-muted"
            }`}
          >
            All Genres
          </button>
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setActiveGenre(genre)}
              className={`flex-shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                activeGenre === genre
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-muted"
              }`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
