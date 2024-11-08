import React from 'react';

interface Badge {
  name: string;
  image: string; // URL or path to the badge image
}

interface BadgeDisplayProps {
  badges: Badge[];
}

const BadgeDisplay: React.FC<BadgeDisplayProps> = ({ badges }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {badges.map((badge, index) => (
        <div key={index} className="flex flex-col items-center">
          <img src={badge.image} alt={`${badge.name} Badge`} className="w-16 h-16 mb-2" />
          <span className="text-sm text-gray-300">{badge.name}</span>
        </div>
      ))}
    </div>
  );
};

export default BadgeDisplay; 