"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import SpotifyIcon from "../public/spotify-icon.svg";

export default function Song() {
  const [title, setTitle] = useState("");
  const [albumImageUrl, setAlbumImageUrl] = useState("");
  const [artist, setArtist] = useState("");
  const [songUrl, setSongUrl] = useState("");
  const [isPlaying, setIsPlaying] = useState("");

  useEffect( () => {
    const fetchData = async () => {
      const res = await axios.get("api/spotify");
      setTitle(res.data.title);
      setAlbumImageUrl(res.data.albumImageUrl);
      setArtist(res.data.artist);
      setSongUrl(res.data.songUrl);
      setIsPlaying(res.data.isPlaying);
    };

    fetchData();
  });

  return (
    <div className="h-screen px-8">
      <h1 className="lg:text-5xl text-4xl text-center font-bold pt-32 pb-16 text-dark-blue-3 dark:text-white">
        Currently Playing
      </h1>

      <div className="">
        <div className="flex justify-center">
          {isPlaying ? (
            <Link href={songUrl} target="_blank">
              <Image
                className="rounded-md border-[1px] border-gray-300 dark:border-white"
                src={albumImageUrl}
                alt={`${title} album image`}
                width={400}
                height={400}
              />
            </Link>
          ) : (
            <Image
              className="rounded-md border-[1px] border-gray-300 dark:border-white"
              src="/grey-spotify-logo.jpeg"
              alt={`spotify logo`}
              width={400}
              height={400}
            />
          )}
        </div>

        <div className="text-center pt-4">
          {/* <SpotifyIcon /> */}
          {isPlaying ? (
            <div>
              <p className="dark:text-white">{title}</p>
              <p className="text-gray-400">{artist}</p>
            </div>
          ) : (
            <p className="text-gray-400">Not Playing</p>
          )}
        </div>
      </div>
    </div>
  );
}
