"use client";

import { useEffect, useState } from "react";
import { SpotifyData } from "@/types/spotify";
import { CurrentSong } from "./CurrentSong";

export default function SpotifySection() {
  const [data, setData] = useState<SpotifyData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch("/api/spotify", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        // Check if the API returned an error in the response
        if (result.error) {
          console.warn("Spotify API returned error:", result.error);
          // Set data to not playing state instead of showing error
          setData({ isPlaying: false, track: null });
        } else {
          setData(result);
        }
      } catch (err) {
        console.error("Error fetching Spotify data:", err);
        // Set to not playing state instead of showing error
        setData({ isPlaying: false, track: null });
        setError(null); // Don't show error to user, just show not playing
      } finally {
        setIsLoading(false);
      }
    };

    fetchSpotifyData();

    // Refresh every 30 seconds
    const interval = setInterval(fetchSpotifyData, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <div className="flex justify-center mb-10">
        <p className="max-w-4xl w-full bg-white shadow-xs rounded-lg p-6 items-center text-left">
          Find out what I'm listening to on{" "}
          <span className="font-semibold text-green-600">Spotify</span> below.
        </p>
      </div>

      <CurrentSong isLoading={isLoading} error={error} data={data} />
    </div>
  );
}
