import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 24, className = '' }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="32" height="32" rx="8" fill="#3B82F6"/>
      <path d="M8 8H24V12H8V8Z" fill="white"/>
      <path d="M8 14H16V24H8V14Z" fill="white"/>
      <path d="M18 14H24V18H18V14Z" fill="white"/>
      <path d="M18 20H24V24H18V20Z" fill="white"/>
    </svg>
  );
};

export default Logo;