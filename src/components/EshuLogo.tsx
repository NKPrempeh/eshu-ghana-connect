
import React from 'react';

interface EshuLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export const EshuLogo = ({ width = 120, height = 60, className = "" }: EshuLogoProps) => {
  return (
    <div className={`flex items-center justify-center bg-white rounded-lg p-2 ${className}`}>
      <img 
        src="/placeholder.svg" 
        alt="Eshu Logo" 
        width={width} 
        height={height}
        className="object-contain"
        style={{
          filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)',
          background: 'white'
        }}
      />
    </div>
  );
};
