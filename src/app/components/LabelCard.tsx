"use client";

import Image from "next/image";
import React from "react";
import { useState } from "react";
import Card from "./Card";

interface LabelCardProps {
  name: string;
  logoPath: string;
}

export default function LabelCard({ name, logoPath }: LabelCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative">
      <div
        onClick={() => {
          setHovered(true);
          console.log("hovered");
        }}
        onMouseMove={() => {
          setHovered(true);
          console.log("hovered");
        }}
        onMouseEnter={() => {
          setHovered(true);
          console.log("hovered");
        }}
        onMouseLeave={() => setHovered(false)}
        className="flex items-center bg-gray-50 border-[1px] border-gray-200 rounded-lg shadow-sm px-4 py-2 max-w-fit cursor-help"
      >
        <div className="mr-3">
          <Image src={logoPath} width={24} height={24} alt={`${name} logo`} />
        </div>
        <div className="font-small text-gray-800">{name}</div>
      </div>

      {hovered && (
        <div className="absolute bottom-4 right-4 p-2 bg-white border rounded-md shadow-lg w-40 bg-black">
          <p>This is the textbox that appears on hover.</p>
        </div>
      )}
    </div>
  );
}
