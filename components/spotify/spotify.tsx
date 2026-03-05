"use client";

import Link from "next/link";
import Image from "next/image";
import PlayingAnimation from "@/components/spotify/playing-animation";
import { useState, useEffect } from "react";

interface SpotifyData {
  album: string;
  artist: string;
  title: string;
  songURL: string;
}

export default function SpotifyCurrentSong() {
  const [spotifyData, setSpotifyData] = useState<SpotifyData>({
    album: "https://i.scdn.co/image/ab67616d00004851c6e0948bbb0681ff29cdbae8",
    artist: "J. Cole",
    title: "January 28th",
    songURL: "https://open.spotify.com/album/0UMMIkurRUmkruZ3KGBLtG",
  });

  useEffect(() => {
    const fetchSpotify = async () => {
      try {
        const response = await fetch("/api/spotify");
        if (response.ok) {
          const data = await response.json();
          setSpotifyData(data);
        }
      } catch (error) {
        console.error("Failed to fetch Spotify data:", error);
      }
    };

    fetchSpotify();
  }, []);

  const { album, artist, title, songURL } = spotifyData;

  return (
    <div className="flex items-center gap-4 text-white rounded-md max-w-md">
      <Image
        src={album}
        width={48}
        height={48}
        alt="Album cover"
        className="rounded-md"
      />

      <div className="flex flex-col min-w-0">
        <Link
          href={songURL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-white transition-colors font-light"
        >
          {title}
        </Link>
        <span className="text-muted-foreground font-light text-sm truncate">
          {artist}
        </span>
      </div>

      <div className="ml-2 pb-5">
        <PlayingAnimation />
      </div>
    </div>
  );
}
