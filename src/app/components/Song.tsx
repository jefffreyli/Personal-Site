"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { LinkPreview } from "./ui/link-preview";

export default function Song() {
  const [title, setTitle] = useState("");
  const [albumImageUrl, setAlbumImageUrl] = useState("");
  const [artist, setArtist] = useState("");
  const [songUrl, setSongUrl] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/spotify");
        setTitle(res.data.title);
        setAlbumImageUrl(res.data.albumImageUrl);
        setArtist(res.data.artist);
        setSongUrl(res.data.songUrl);
        setIsPlaying(res.data.isPlaying);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="flex justify-center mb-10">
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-5 items-center text-left flex">
          <div className="mr-3">
            {isPlaying ? (
              <Link href={songUrl} target="_blank">
                <Image
                  className="rounded-md border-[1px] border-gray-300 dark:border-white"
                  src={albumImageUrl}
                  alt={`${title} album image`}
                  width={50}
                  height={50}
                />
              </Link>
            ) : (
              <Image
                className="rounded-md border-[1px] border-gray-300 dark:border-white"
                src="/grey-spotify-logo.jpeg"
                alt={`spotify logo`}
                width={40}
                height={40}
              />
            )}
          </div>

          <div className="flex">
            <p className="">Currently listening to {"‎ "}</p>
            <LinkPreview url={songUrl}>
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-teal-500 to-green-800">
                {"‎ "}
                {title} by {artist} {"‎"}
              </span>
            </LinkPreview>
            <p className="hidden lg:block">on Spotify.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
