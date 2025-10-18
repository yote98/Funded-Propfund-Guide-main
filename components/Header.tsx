import React, { useState } from 'react';
import type { Page } from '../types.ts';
import FpgLogoIcon from './FpgLogoIcon.tsx';

interface HeaderProps {
  navigateTo: (page: Page) => void;
  currentPage: Page;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  navigateTo: (page: Page) => void;
  children: React.ReactNode;
  isMobile?: boolean;
}> = ({ page, currentPage, navigateTo, children, isMobile }) => {
  const isActive = currentPage === page;
  
  const baseClasses = 'font-medium transition-colors duration-200 rounded-md';
  const activeClasses = 'bg-teal-50 text-teal-600 font-semibold';
  const inactiveClasses = 'text-slate-600 hover:bg-gray-100 hover:text-slate-900';
  
  const mobileClasses = `block w-full text-left px-3 py-2 text-base`;
  const desktopClasses = `px-3 py-2 text-sm`;

  const finalClassName = `${baseClasses} ${isMobile ? mobileClasses : desktopClasses} ${isActive ? activeClasses : inactiveClasses}`;
  
  return (
    <button
      onClick={() => navigateTo(page)}
      className={finalClassName}
    >
      {children}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ navigateTo, currentPage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const handleMobileNavClick = (page: Page) => {
        navigateTo(page);
        setIsMenuOpen(prev => !prev);
    };

    return (
        <header className="glass-card sticky top-0 z-50" role="banner">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <button 
                            onClick={() => navigateTo('home')} 
                            className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded-md p-1"
                            aria-label="Go to homepage"
                        >
                           <FpgLogoIcon className="h-8 w-8" />
                            <span className="font-heading font-bold text-lg text-slate-800">Funded Program Guide</span>
                        </button>
                    </div>
                    <nav className="hidden md:flex items-center space-x-1" role="navigation" aria-label="Main navigation">
                        <NavLink page="home" currentPage={currentPage} navigateTo={navigateTo}>Home</NavLink>
                        <NavLink page="compare" currentPage={currentPage} navigateTo={navigateTo}>Compare Firms</NavLink>
                        <NavLink page="trading-tools" currentPage={currentPage} navigateTo={navigateTo}>Trading Tools</NavLink>
                        <NavLink page="education" currentPage={currentPage} navigateTo={navigateTo}>Education</NavLink>
                        <NavLink page="analytics" currentPage={currentPage} navigateTo={navigateTo}>Analytics</NavLink>
                        <NavLink page="glossary" currentPage={currentPage} navigateTo={navigateTo}>Glossary</NavLink>
                        <NavLink page="about" currentPage={currentPage} navigateTo={navigateTo}>About</NavLink>
                    </nav>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(prev => !prev)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <NavLink page="home" currentPage={currentPage} navigateTo={handleMobileNavClick} isMobile>Home</NavLink>
                    <NavLink page="compare" currentPage={currentPage} navigateTo={handleMobileNavClick} isMobile>Compare Firms</NavLink>
                    <NavLink page="trading-tools" currentPage={currentPage} navigateTo={handleMobileNavClick} isMobile>Trading Tools</NavLink>
                    <NavLink page="education" currentPage={currentPage} navigateTo={handleMobileNavClick} isMobile>Education</NavLink>
                    <NavLink page="analytics" currentPage={currentPage} navigateTo={handleMobileNavClick} isMobile>Analytics</NavLink>
                    <NavLink page="glossary" currentPage={currentPage} navigateTo={handleMobileNavClick} isMobile>Glossary</NavLink>
                    <NavLink page="about" currentPage={currentPage} navigateTo={handleMobileNavClick} isMobile>About</NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;