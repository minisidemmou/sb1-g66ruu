import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: 'h-5 sm:h-6',
  md: 'h-6 sm:h-8',
  lg: 'h-8 sm:h-12'
};

export function Logo({ className = '', size = 'md' }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <svg
        viewBox="0 0 800 800"
        className={`${sizes[size]} w-auto`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Light blue teardrop */}
        <path
          d="M600 400C600 250 500 150 350 150C200 150 100 250 100 400C100 550 200 650 350 650C500 650 600 550 600 400Z"
          fill="#38BDF8"
          transform="rotate(-45 400 400)"
        />
        
        {/* Dark blue teardrop */}
        <path
          d="M700 400C700 250 600 150 450 150C300 150 200 250 200 400C200 550 300 650 450 650C600 650 700 550 700 400Z"
          fill="#1E40AF"
          transform="rotate(45 400 400)"
        />
      </svg>
      <span className={`ml-2 font-bold ${
        size === 'sm' ? 'text-base sm:text-lg' :
        size === 'md' ? 'text-lg sm:text-xl' :
        'text-xl sm:text-3xl'
      } bg-gradient-to-r from-blue-400 to-blue-900 bg-clip-text text-transparent`}>
        Sehelli
      </span>
    </div>
  );
}