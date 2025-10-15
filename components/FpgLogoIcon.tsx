import React from 'react';

const FpgLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <linearGradient id="logo-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2DD4BF"/>
                <stop offset="100%" stopColor="#0EA5E9"/>
            </linearGradient>
        </defs>
        <rect x="5" y="23" width="8" height="12" rx="4" fill="url(#logo-gradient)"/>
        <rect x="16" y="17" width="8" height="18" rx="4" fill="url(#logo-gradient)"/>
        <rect x="27" y="11" width="8" height="24" rx="4" fill="url(#logo-gradient)"/>
    </svg>
);

export default FpgLogoIcon;
