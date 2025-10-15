import React from 'react';

const InfinityIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    {...props}
  >
    <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M16.5 12c0 2.485-3.134 4.5-7 4.5s-7-2.015-7-4.5 3.134-4.5 7-4.5 7 2.015 7 4.5zM16.5 12v0c0 2.485 3.134 4.5 7 4.5s7-2.015 7-4.5-3.134-4.5-7-4.5-7 2.015-7 4.5z" 
    />
  </svg>
);

export default InfinityIcon;