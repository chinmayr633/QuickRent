import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 ${className}`}>
      {children}
    </div>
  );
}

Card.Header = function CardHeader({ children, className = '' }: CardProps) {
  return <div className={`p-6 ${className}`}>{children}</div>;
};

Card.Footer = function CardFooter({ children, className = '' }: CardProps) {
  return <div className={`px-6 pt-6 pb-8 ${className}`}>{children}</div>;
};