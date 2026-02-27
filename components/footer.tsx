export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/20 pb-28">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <p className="font-display text-lg font-bold text-foreground">WAVELENGTH</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Your personal music discovery experience. Find new sounds, follow artists, and build your perfect playlist.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Discover
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <span className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
                  New Releases
                </span>
              </li>
              <li>
                <span className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
                  Top Charts
                </span>
              </li>
              <li>
                <span className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
                  Genres
                </span>
              </li>
              <li>
                <span className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
                  Podcasts
                </span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <span className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
                  About
                </span>
              </li>
              <li>
                <span className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
                  Careers
                </span>
              </li>
              <li>
                <span className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
                  Press
                </span>
              </li>
              <li>
                <span className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
                  Contact
                </span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Legal
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <span className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
                  Terms of Service
                </span>
              </li>
              <li>
                <span className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
                  Cookie Policy
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            2026 WAVELENGTH. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="cursor-pointer text-xs text-muted-foreground hover:text-foreground">
              Instagram
            </span>
            <span className="cursor-pointer text-xs text-muted-foreground hover:text-foreground">
              Twitter
            </span>
            <span className="cursor-pointer text-xs text-muted-foreground hover:text-foreground">
              YouTube
            </span>
            <span className="cursor-pointer text-xs text-muted-foreground hover:text-foreground">
              TikTok
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
