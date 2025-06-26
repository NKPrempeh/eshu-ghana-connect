
import React from 'react';

interface EshuLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export const EshuLogo = ({ width = 120, height = 60, className = "" }: EshuLogoProps) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src="/lovable-uploads/72f26483-9e1a-4043-a88b-dfbdaedf8af0.png" 
        alt="Eshu Logo" 
        width={width} 
        height={height}
        className="object-contain"
      />
    </div>
  );
};
