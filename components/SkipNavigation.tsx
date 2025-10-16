import React from 'react';

const SkipNavigation: React.FC = () => {
  return (
    <div className="sr-only focus-within:not-sr-only">
      <a
        href="#main-content"
        className="absolute top-0 left-0 bg-teal-600 text-white px-4 py-2 rounded-br-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 z-50"
      >
        Skip to main content
      </a>
    </div>
  );
};

export default SkipNavigation;
