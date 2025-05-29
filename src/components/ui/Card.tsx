import React from 'react';
import { shadows } from '@/styles/design-system';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'elevated' | 'outlined' | 'flat';
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'elevated',
}) => {
  const baseStyles = 'rounded-lg bg-white';
  
  const variants = {
    elevated: `shadow-[${shadows.lg}]`,
    outlined: 'border border-gray-200',
    flat: 'border border-gray-100',
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <div className={`px-6 py-4 border-b border-gray-100 ${className}`}>
    {children}
  </div>
);

export const CardBody: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <div className={`px-6 py-4 ${className}`}>
    {children}
  </div>
);

export const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <div className={`px-6 py-4 border-t border-gray-100 ${className}`}>
    {children}
  </div>
);

export default Card; 