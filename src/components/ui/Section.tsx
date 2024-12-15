import React from 'react';

interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray';
}

export function Section({
  id,
  title,
  subtitle,
  children,
  className = '',
  background = 'white',
}: SectionProps) {
  const bgColor = background === 'gray' ? 'bg-gray-50' : 'bg-white';

  return (
    <div id={id} className={`py-12 ${bgColor} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>
          {subtitle && <p className="mt-4 text-xl text-gray-600">{subtitle}</p>}
        </div>
        {children}
      </div>
    </div>
  );
}