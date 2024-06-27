import Image from "next/image";

interface LabelCardProps {
  name: string;
  logoPath: string;
}

export default function LabelCard({ name, logoPath }: LabelCardProps) {
  return (
    <div className="flex items-center bg-gray-50 border-[1px] border-gray-200 rounded-lg shadow-sm px-4 py-2 max-w-fit">
      <div className="mr-3">
        <Image
        src={logoPath}
        width={24}
        height={24}
        alt={`${name} logo`}
        />
      </div>
      <div className="font-small text-gray-800">{name}</div>
    </div>
  );
}
