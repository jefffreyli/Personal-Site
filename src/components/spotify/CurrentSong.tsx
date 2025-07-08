import { SpotifyData } from "@/types/spotify";
import Image from "next/image";

interface ErrorStateProps {
  error: string;
}

function ErrorState({ error }: ErrorStateProps) {
  return (
    <div className="flex justify-center mb-10">
      <div className="max-w-4xl w-full bg-white shadow-xs rounded-lg p-6">
        <div className="text-red-500 text-center">
          <span className="text-2xl mb-2 block">⚠️</span>
          <p className="font-semibold">Unable to load current song</p>
          <p className="text-sm text-gray-600 mt-1">{error}</p>
        </div>
      </div>
    </div>
  );
}

function NotPlayingState() {
  return (
    <div className="flex justify-center mb-10">
      <div className="max-w-4xl w-full bg-white shadow-xs rounded-lg p-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-lg shadow-xs flex-shrink-0 bg-gray-100 flex items-center justify-center border border-gray-200">
            <span className="text-2xl">🎵</span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-gray-800 font-semibold text-lg mb-1">
              Nothing currently playing
            </h3>
            <p className="text-gray-600 text-sm">
              Jeffrey is not listening to anything right now on Spotify.
            </p>
          </div>
          <div className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <span className="text-gray-500 text-sm font-medium">
              Not Playing
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

interface CurrentSongProps {
  isLoading: boolean;
  error: string | null;
  data: SpotifyData | null;
}

export function CurrentSong({ isLoading, error, data }: CurrentSongProps) {
  if (error) {
    return <ErrorState error={error} />;
  }

  if (isLoading) {
    return (
      <div className="flex justify-center mb-10">
        <div className="max-w-4xl w-full bg-white shadow-xs rounded-lg p-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-lg shadow-xs flex-shrink-0 bg-gray-100 animate-pulse"></div>
            <div className="flex-1 min-w-0">
              <div className="h-5 bg-gray-200 rounded mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!data?.isPlaying || !data?.track) {
    return <NotPlayingState />;
  }

  const { track } = data;

  return (
    <div className="flex justify-center mb-10">
      <div className="max-w-4xl w-full bg-white shadow-xs rounded-lg p-6">
        <div className="flex items-center space-x-4">
          {track.image ? (
            <div className="relative w-16 h-16 rounded-lg shadow-xs flex-shrink-0 overflow-hidden border border-gray-200">
              <Image
                src={track.image}
                alt={track.name}
                className="object-cover"
                fill
                sizes="64px"
              />
            </div>
          ) : (
            <div className="w-16 h-16 rounded-lg shadow-xs flex-shrink-0 bg-gray-100 flex items-center justify-center border border-gray-200">
              <span className="text-2xl">🎵</span>
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="text-gray-800 font-semibold text-lg mb-1 truncate">
              {track.name}
            </h3>
            <p className="text-gray-600 text-sm mb-1 truncate">
              by {track.artists.join(", ")}
            </p>
            <p className="text-gray-500 text-xs truncate">{track.album}</p>
          </div>
          <div className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-600 text-sm font-medium">
              Now Playing
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Default export for backward compatibility
export default CurrentSong;
