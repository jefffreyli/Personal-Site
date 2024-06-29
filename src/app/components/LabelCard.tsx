"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

interface LabelCardProps {
  name: string;
  logoPath: string;
  index: number;
  setHoveredIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function LabelCard({
  name,
  logoPath,
  index,
  setHoveredIndex,
}: LabelCardProps) {
  // useEffect(() => {
  //   console.log("reload component");
  // }, [hoveredIndex]);

  return (
    <div className="relative">
      <div
        className="w-max flex items-center bg-gray-50 border-[1px] border-gray-200 rounded-lg shadow-sm px-4 py-2 max-w-fit cursor-help"
        onMouseEnter={() => {
          console.log("hovered");
          setHoveredIndex(index);
        }}
        onMouseLeave={() => setHoveredIndex(-1)}
        // onMouseMove={() => {
        //   setHovered(true);
        //   console.log("hovered");
        // }}
        // onMouseEnter={() => {
        //   setHovered(true);
        //   console.log("hovered");
        // }}
        // onMouseLeave={() => setHovered(false)}
      >
        <div className="mr-3">
          <Image
            className=""
            src={logoPath}
            width={24}
            height={24}
            alt={`${name} logo`}
          />
        </div>
        <div className="font-small text-gray-800">{name}</div>
      </div>
    </div>
  );
}

// {hoveredIndex == idx && (
//   <div className="fixed bottom-4 right-4 p-2 bg-white border rounded-md shadow-lg w-40 bg-black">
//     <p>This is the textbox that appears on hover.</p>
//   </div>
// )}

{
  /* <div
            key={idx}
            className="cursor-help relative"
            onMouseMove={() => {
              setHoveredIndex(idx);
              console.log("hovered");
            }}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={handleMouseLeave}
          ></div> */
}
