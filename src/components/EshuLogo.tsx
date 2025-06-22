
import React from 'react';

interface EshuLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export const EshuLogo = ({ width = 120, height = 60, className = "" }: EshuLogoProps) => {
  return (
    <div className={`flex items-center justify-center bg-white rounded-lg p-3 ${className}`}>
      <div className="text-center">
        <div className="text-2xl font-bold text-red-600 mb-1" style={{ fontFamily: 'serif' }}>
          ESHU
        </div>
        <div className="text-xs text-gray-600 tracking-wide">
          GHANA INTEGRATION
        </div>
        <div className="flex justify-center mt-1">
          <div className="w-8 h-1 bg-yellow-500 rounded"></div>
          <div className="w-2 h-1 bg-green-600 rounded ml-1"></div>
          <div className="w-2 h-1 bg-red-600 rounded ml-1"></div>
        </div>
      </div>
    </div>
  );
};
