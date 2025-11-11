import React, { ReactNode } from 'react';

interface CardProps {
  title: string;
  description?: string;
  icon?: string;
  children?: ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, icon, children }) => {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition">
      <div className='flex justify-center text-4xl'>{icon}</div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        {description && <p className="text-gray-600 mb-4">{description}</p>}
        {children}
      </div>
    </div>
  );
};

export default Card;
