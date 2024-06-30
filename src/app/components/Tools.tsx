"use client";

import { useState } from "react";
import { nameToLogo } from "../constants";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function Tools() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1);

  return (
    <div>
      <div className="flex justify-center">
        <p className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6 items-center text-left">
          Here are some <span className="font-semibold">tools</span> I've used
          in past jobs and projects. Hover over each one to learn more about my
          development journey.
        </p>
      </div>

      <div className="h-4" />
      <div className="flex justify-center">
        <InfiniteMovingCards
          items={nameToLogo}
          direction="right"
          speed="fast"
          setHoveredIndex={setHoveredIndex}
        />
      </div>
      {hoveredIndex !== -1 && (
        <div
          className={`fixed bottom-4 right-4 p-3 bg-white border border-gray-400 rounded-md shadow-lg w-60 bg-black transition-opacity duration-500 ${
            hoveredIndex !== -1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <p>{nameToLogo[hoveredIndex].description}</p>
        </div>
      )}
    </div>
  );
}
