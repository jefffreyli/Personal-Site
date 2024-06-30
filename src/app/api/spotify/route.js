import { NextResponse } from "next/server";
import querystring from "querystring";

// export const config = {
//   runtime: "edge",
// };

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  try {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: querystring.stringify({
        grant_type: "refresh_token",
        refresh_token,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch access token: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching access token:", error);
    throw error;
  }
};

const getNowPlaying = async () => {
  try {
    const { access_token } = await getAccessToken();

    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (!response.ok && response.status !== 204) {
      throw new Error(`Failed to fetch now playing: ${response.statusText}`);
    }

    return response;
  } catch (error) {
    console.error("Error fetching now playing:", error);
    throw error;
  }
};

export async function GET() {
  try {
    const response = await getNowPlaying();

    if (response.status === 204 || response.status > 400) {
      return new NextResponse(JSON.stringify({ isPlaying: false }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    const song = await response.json();

    if (!song.item) {
      return new NextResponse(JSON.stringify({ isPlaying: false }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;

    return new NextResponse(
      JSON.stringify({
        album,
        albumImageUrl,
        artist,
        isPlaying,
        songUrl,
        title,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control":
            "public, s-maxage=5, stale-while-revalidate=5, must-revalidate",
        },
      }
    );
  } catch (error) {
    console.error("Error in GET handler:", error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to fetch now playing data" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
