"use client"

import { useState } from "react"
import { Search, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavbarProps {
  activeSection: string
  onNavigate: (section: string) => void
}

const navItems = [
  { id: "home", label: "Home" },
  { id: "discover", label: "Discover" },
  { id: "artists", label: "Artists" },
  { id: "playlists", label: "Playlists" },
]

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button
          onClick={() => onNavigate("home")}
          className="font-display text-xl font-bold tracking-wider text-foreground"
        >
          WAVELENGTH
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-sm font-medium tracking-wide transition-colors ${
                activeSection === item.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {searchOpen && (
            <div className="hidden items-center gap-2 md:flex">
              <input
                type="text"
                placeholder="Search artists, albums, tracks..."
                className="w-64 rounded-lg border border-border bg-secondary px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                autoFocus
              />
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-muted-foreground hover:text-foreground"
            aria-label="Toggle search"
          >
            <Search className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Search artists, albums, tracks..."
              className="w-full rounded-lg border border-border bg-secondary px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id)
                  setMobileMenuOpen(false)
                }}
                className={`text-left text-sm font-medium tracking-wide transition-colors ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
