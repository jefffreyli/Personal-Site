"use client";

import { useState } from "react";
import { HiChevronRight } from "react-icons/hi";

const photos = [
  { src: "/profile-picture.png", alt: "Jeffrey Li" },
  { src: "/photos/amazon badge.jpeg", alt: "Amazon Badge" },
  { src: "/photos/rainy day chelsea.jpeg", alt: "Rainy Day Chelsea" },
//   { src: "/photos/me and justin.jpeg", alt: "Me and Justin" },
//   { src: "/photos/me and shaun BT.jpeg", alt: "Me and Shaun BT" },
  { src: "/photos/mit stata center.jpeg", alt: "MIT Stata Center" },
  { src: "/photos/boston skyline.jpeg", alt: "Boston Skyline" },
  { src: "/photos/golden gate bridge.jpeg", alt: "Golden Gate Bridge" },
  {
    src: "/photos/reinvent aws orange room.jpeg",
    alt: "ReInvent AWS Orange Room",
  },
  {
    src: "/photos/madison square garden watch party.jpeg",
    alt: "Madison Square Garden Watch Party",
  },
  { src: "/photos/massive chipotle bowl.jpeg", alt: "Massive Chipotle Bowl" },
  { src: "/photos/mount rainier snow.jpeg", alt: "Mount Rainier Snow" },
  { src: "/photos/my rings.jpeg", alt: "My Rings" },
  { src: "/photos/playa acai bowl.jpeg", alt: "Playa Acai Bowl" },
  
];

export default function PhotoCarousel() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handleClick = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const currentPhoto = photos[currentPhotoIndex];

  const getNextPhotos = (count: number) => {
    return Array.from({ length: count }, (_, i) => {
      const index = (currentPhotoIndex + i + 1) % photos.length;
      return photos[index];
    });
  };

  const nextPhotos = getNextPhotos(3);

  return (
    <div className="relative">
      {/* Spinning tree decoration */}
      <div className="spinning-tree absolute -top-8 -right-8 text-4xl z-50 pointer-events-none">
        🌲
      </div>
      
      <div
        className="w-40 h-40 lg:w-48 lg:h-48 mr-8 cursor-pointer relative group"
        onClick={handleClick}
      >
        {/* Fan-out photos (shown on hover) */}
        {nextPhotos.map((photo, index) => (
          <img
            key={`fan-${index}`}
            src={photo.src}
            alt={photo.alt}
            className={`absolute inset-0 w-full h-full object-cover rounded-md transition-all duration-300 pointer-events-none ${
              index === 0
                ? "opacity-0 group-hover:opacity-70 group-hover:rotate-[-8deg] group-hover:translate-x-[-4px] group-hover:translate-y-[-2px]"
                : index === 1
                ? "opacity-0 group-hover:opacity-70 group-hover:rotate-[8deg] group-hover:translate-x-[4px] group-hover:translate-y-[-2px]"
                : "opacity-0 group-hover:opacity-70 group-hover:rotate-[-4deg] group-hover:translate-x-[-2px] group-hover:translate-y-[4px]"
            }`}
            style={{ zIndex: index + 1 }}
          />
        ))}

        {/* Main current photo */}
        <img
          src={currentPhoto.src}
          alt={currentPhoto.alt}
          className="relative w-full h-full object-cover rounded-md transition-all duration-300 z-10"
        />

        {/* Arrow overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 rounded-md transition-all duration-200 flex items-center justify-center z-30">
          <HiChevronRight className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black bg-opacity-50 rounded-full p-1" />
        </div>
      </div>
    </div>
  );
}
