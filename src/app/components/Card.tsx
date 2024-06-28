'use client'
import { useState } from 'react';

interface CardProps {
    title: string;
    description: string;
  }
  
  const Card: React.FC<CardProps> = ({ title, description }) => {
    const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative p-4 border rounded-md shadow-md hover:bg-gray-100"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      {hovered && (
        <div className="fixed bottom-4 right-4 p-2 bg-white border rounded-md shadow-lg">
          <p>This is the textbox that appears on hover.</p>
        </div>
      )}
    </div>
  );
};

export default Card;
