export interface Track {
  id: string
  title: string
  artist: string
  album: string
  duration: string
  cover: string
}

export interface Album {
  id: string
  title: string
  artist: string
  cover: string
  year: number
  genre: string
}

export interface Artist {
  id: string
  name: string
  image: string
  genre: string
  followers: string
}

export interface Playlist {
  id: string
  name: string
  description: string
  trackCount: number
  cover: string
}

export const featuredAlbums: Album[] = [
  {
    id: "1",
    title: "Echoes of Silence",
    artist: "Nova Waves",
    cover: "/images/album-1.jpg",
    year: 2026,
    genre: "Electronic",
  },
  {
    id: "2",
    title: "Midnight City",
    artist: "The Velvet Sound",
    cover: "/images/album-2.jpg",
    year: 2026,
    genre: "Indie Rock",
  },
  {
    id: "3",
    title: "Fractured Light",
    artist: "Artemis Cole",
    cover: "/images/album-3.jpg",
    year: 2025,
    genre: "Alt R&B",
  },
  {
    id: "4",
    title: "Red Meridian",
    artist: "Kinetic Pulse",
    cover: "/images/album-4.jpg",
    year: 2026,
    genre: "Techno",
  },
  {
    id: "5",
    title: "Horizon Line",
    artist: "Sun Dialect",
    cover: "/images/album-5.jpg",
    year: 2025,
    genre: "Ambient",
  },
  {
    id: "6",
    title: "Liquid Architecture",
    artist: "Phase Shift",
    cover: "/images/album-6.jpg",
    year: 2026,
    genre: "Experimental",
  },
]

export const trendingTracks: Track[] = [
  {
    id: "1",
    title: "Shattered Reality",
    artist: "Nova Waves",
    album: "Echoes of Silence",
    duration: "4:23",
    cover: "/images/album-1.jpg",
  },
  {
    id: "2",
    title: "Neon Boulevard",
    artist: "The Velvet Sound",
    album: "Midnight City",
    duration: "3:45",
    cover: "/images/album-2.jpg",
  },
  {
    id: "3",
    title: "Glass Ceiling",
    artist: "Artemis Cole",
    album: "Fractured Light",
    duration: "5:12",
    cover: "/images/album-3.jpg",
  },
  {
    id: "4",
    title: "Pulse Drive",
    artist: "Kinetic Pulse",
    album: "Red Meridian",
    duration: "6:08",
    cover: "/images/album-4.jpg",
  },
  {
    id: "5",
    title: "Golden Hour",
    artist: "Sun Dialect",
    album: "Horizon Line",
    duration: "4:55",
    cover: "/images/album-5.jpg",
  },
  {
    id: "6",
    title: "Dissolve",
    artist: "Phase Shift",
    album: "Liquid Architecture",
    duration: "7:30",
    cover: "/images/album-6.jpg",
  },
  {
    id: "7",
    title: "After Dark",
    artist: "Nova Waves",
    album: "Echoes of Silence",
    duration: "3:58",
    cover: "/images/album-1.jpg",
  },
  {
    id: "8",
    title: "Velvet Underground",
    artist: "The Velvet Sound",
    album: "Midnight City",
    duration: "4:12",
    cover: "/images/album-2.jpg",
  },
]

export const featuredArtists: Artist[] = [
  {
    id: "1",
    name: "Nova Waves",
    image: "/images/artist-1.jpg",
    genre: "Electronic",
    followers: "2.4M",
  },
  {
    id: "2",
    name: "Artemis Cole",
    image: "/images/artist-2.jpg",
    genre: "Alt R&B",
    followers: "1.8M",
  },
  {
    id: "3",
    name: "Kinetic Pulse",
    image: "/images/artist-3.jpg",
    genre: "Techno",
    followers: "980K",
  },
  {
    id: "4",
    name: "Sun Dialect",
    image: "/images/artist-4.jpg",
    genre: "Ambient",
    followers: "1.2M",
  },
]

export const curatedPlaylists: Playlist[] = [
  {
    id: "1",
    name: "Late Night Frequencies",
    description: "Deep cuts for after-hours listening",
    trackCount: 42,
    cover: "/images/album-1.jpg",
  },
  {
    id: "2",
    name: "Urban Pulse",
    description: "The sound of the city at night",
    trackCount: 35,
    cover: "/images/album-2.jpg",
  },
  {
    id: "3",
    name: "Ethereal Moods",
    description: "Float away with ambient soundscapes",
    trackCount: 28,
    cover: "/images/album-5.jpg",
  },
  {
    id: "4",
    name: "Raw Energy",
    description: "High-intensity electronic anthems",
    trackCount: 50,
    cover: "/images/album-4.jpg",
  },
]

export const genres = [
  "Electronic",
  "Indie Rock",
  "Alt R&B",
  "Techno",
  "Ambient",
  "Experimental",
  "Hip Hop",
  "Jazz Fusion",
]
