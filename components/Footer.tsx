import React from 'react';
import type { Page } from '../types.ts';
import FpgLogoIcon from './FpgLogoIcon.tsx';

interface FooterProps {
  navigateTo: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  return (
    <footer className="bg-white">
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                  <FpgLogoIcon className="h-8 w-8" />
                  <span className="font-bold text-lg text-slate-800">Funded Program Guide</span>
              </div>
              <p className="text-sm text-slate-500 max-w-xs">
                The #1 resource for finding, comparing, and choosing the right proprietary trading firm.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Navigation</h3>
              <ul className="mt-4 space-y-2">
                <li><button onClick={() => navigateTo('home')} className="text-slate-500 hover:text-teal-600 transition-colors">Home</button></li>
                <li><button onClick={() => navigateTo('compare')} className="text-slate-500 hover:text-teal-600 transition-colors">Compare Firms</button></li>
                <li><button onClick={() => navigateTo('education')} className="text-slate-500 hover:text-teal-600 transition-colors">Education</button></li>
                 <li><button onClick={() => navigateTo('glossary')} className="text-slate-500 hover:text-teal-600 transition-colors">Glossary</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Company</h3>
              <ul className="mt-4 space-y-2">
                 <li><button onClick={() => navigateTo('about')} className="text-slate-500 hover:text-teal-600 transition-colors">About Us</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Disclaimer</h3>
              <p className="mt-4 text-xs text-slate-500">
                All information on this site is for educational purposes only and is not financial advice. Trading involves risk.
              </p>
            </div>
          </div>
          <div className="mt-8 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Funded Program Guide. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;