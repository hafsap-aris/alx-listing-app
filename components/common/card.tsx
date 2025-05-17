import React from 'react';
import { CardProps } from '../../interfaces/index';

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-4 ${className || ''}`}>
      {children}
    </div>
  );
};

export default Card;