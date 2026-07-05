import React from 'react';

export default function Logo({ className = "", style }: { className?: string, style?: React.CSSProperties }) {
  return (
    <svg 
      className={className}
      style={style}
      viewBox="0 0 120 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Dark rounded background block */}
      <rect width="120" height="120" rx="24" fill="#101726" />
      
      {/* The graphic (centered) */}
      <g transform="translate(12.5, 35)">
        <path 
          d="M 5 25 C 8 15, 14 15, 17 25 C 20 35, 26 35, 29 25 C 32 15, 38 15, 41 25 C 44 35, 50 35, 53 25" 
          stroke="#8A97AD" 
          strokeWidth="5" 
          strokeLinecap="round" 
        />
        <circle cx="5" cy="25" r="4" fill="#8A97AD" />
        
        <path 
          d="M 53 25 L 60 25 L 60 5 L 75 5 L 75 25 L 100 25" 
          stroke="#5B9FEF" 
          strokeWidth="5" 
          strokeLinejoin="round" 
          strokeLinecap="round"
        />
        <circle cx="100" cy="25" r="4" fill="#5B9FEF" />
        
        <circle cx="53" cy="25" r="6" fill="#F0A857" />
      </g>
      
      {/* W I S Text */}
      <text 
        x="60" 
        y="100" 
        fill="#C9D6ED" 
        fontSize="24" 
        fontFamily="sans-serif" 
        fontWeight="600" 
        textAnchor="middle" 
        letterSpacing="4"
      >
        W I S
      </text>
    </svg>
  );
}
