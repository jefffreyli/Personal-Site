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
        className="w-max flex items-center bg-gray-50 border-[1px] border-gray-200 rounded-lg shadow-sm px-4 py-2 max-w-fit cursor-help"
        onMouseEnter={() => {
          console.log("hovered");
          setHoveredIndex(index);
        }}
        onMouseLeave={() => setHoveredIndex(-1)}
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
