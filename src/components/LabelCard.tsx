"use client";

import Image from "next/image";

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
  return (
    <div className="relative">
      <div
        className="flex items-center bg-gray-50 border-[1px] border-gray-200 rounded-lg shadow-xs px-4 py-2 cursor-help"
        onMouseEnter={() => {
          console.log("hovered");
          setHoveredIndex(index);
        }}
        onMouseLeave={() => setHoveredIndex(-1)}
      >
        <Image
          className="mr-2"
          src={logoPath}
          width={24}
          height={24}
          alt={`${name} logo`}
        />
        <div className="font-small text-gray-800 mr-5">{name}</div>
      </div>
    </div>
  );
}
