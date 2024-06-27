import React from 'react';

interface LabelCardProps {
  name: string;
  icon: React.ReactNode;
}

export default function LabelCard({ name, icon }: LabelCardProps) {
  return (
    <div className="flex items-center bg-white rounded-lg shadow-md p-4">
      <div className="mr-4">{icon}</div>
      <div className="font-medium text-gray-800">{name}</div>
    </div>
  );
}
