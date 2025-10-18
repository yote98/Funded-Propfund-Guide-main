import React, { useState } from 'react';
import type { Page } from '../types.ts';
import FpgLogoIcon from './FpgLogoIcon.tsx';
import TermsOfServiceModal from './TermsOfServiceModal.tsx';
import PrivacyPolicyModal from './PrivacyPolicyModal.tsx';

interface FooterProps {
  navigateTo: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  return (
    <>
      <footer className="bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 text-slate-800">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <FpgLogoIcon className="h-10 w-10 text-teal-600" />
                <span className="font-bold text-xl text-slate-800">Funded Program Guide</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-sm">
                Your trusted independent guide to prop trading firms. We help traders make informed decisions 
                with unbiased comparisons and in-depth analysis.
              </p>
            </div>

            {/* Navigation Section */}
            <div>
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-6 flex items-center">
                <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                Navigation
              </h3>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => navigateTo('home')} 
                    className="text-slate-600 hover:text-teal-600 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-slate-400 rounded-full mr-3 group-hover:bg-teal-500 transition-colors"></span>
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigateTo('compare')} 
                    className="text-slate-600 hover:text-teal-600 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-slate-400 rounded-full mr-3 group-hover:bg-teal-500 transition-colors"></span>
                    Compare Firms
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigateTo('analytics')} 
                    className="text-slate-600 hover:text-teal-600 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-slate-400 rounded-full mr-3 group-hover:bg-teal-500 transition-colors"></span>
                    Analytics
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigateTo('trading-tools')} 
                    className="text-slate-600 hover:text-teal-600 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-slate-400 rounded-full mr-3 group-hover:bg-teal-500 transition-colors"></span>
                    Trading Tools
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigateTo('education')} 
                    className="text-slate-600 hover:text-teal-600 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-slate-400 rounded-full mr-3 group-hover:bg-teal-500 transition-colors"></span>
                    Education
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigateTo('glossary')} 
                    className="text-slate-600 hover:text-teal-600 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-slate-400 rounded-full mr-3 group-hover:bg-teal-500 transition-colors"></span>
                    Glossary
                  </button>
                </li>
              </ul>
            </div>

            {/* Resources Section */}
            <div>
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-6 flex items-center">
                <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                Resources
              </h3>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => navigateTo('about')} 
                    className="text-slate-600 hover:text-teal-600 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-slate-400 rounded-full mr-3 group-hover:bg-teal-500 transition-colors"></span>
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigateTo('about')} 
                    className="text-slate-600 hover:text-teal-600 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-slate-400 rounded-full mr-3 group-hover:bg-teal-500 transition-colors"></span>
                    Contact
                  </button>
                </li>
              <li>
                <button 
                  onClick={() => setIsPrivacyModalOpen(true)} 
                  className="text-slate-600 hover:text-teal-600 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1 h-1 bg-slate-400 rounded-full mr-3 group-hover:bg-teal-500 transition-colors"></span>
                  Privacy Policy
                </button>
              </li>
                <li>
                  <button 
                    onClick={() => setIsTermsModalOpen(true)} 
                    className="text-slate-600 hover:text-teal-600 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-slate-400 rounded-full mr-3 group-hover:bg-teal-500 transition-colors"></span>
                    Terms of Service
                  </button>
                </li>
              </ul>
            </div>

          </div>

          {/* Stats Section */}
          <div className="mt-12 pt-8 border-t border-slate-300">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600 mb-1">43+</div>
                <div className="text-sm text-slate-600">Prop Firms</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600 mb-1">10K+</div>
                <div className="text-sm text-slate-600">Traders Helped</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600 mb-1">500+</div>
                <div className="text-sm text-slate-600">Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600 mb-1">24/7</div>
                <div className="text-sm text-slate-600">Support</div>
              </div>
            </div>
          </div>

          {/* Disclaimer Section */}
          <div className="mt-12 pt-8 border-t border-slate-300">
            <div className="mb-6">
              <div className="text-xs text-slate-600 border border-slate-300 bg-slate-100 p-4 rounded-lg">
                <p className="font-semibold text-sm mb-2 flex items-center">
                  <svg className="h-5 w-5 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  RISK DISCLOSURE
                </p>
                <p className="mb-2 leading-relaxed">
                  The information provided on this website is for educational and informational purposes only and should not be construed as financial advice, investment recommendation, or an offer or solicitation to buy or sell any financial instruments.
                </p>
                <p className="leading-relaxed">
                  Trading in financial markets involves substantial risk of loss and is not suitable for all investors. You should carefully consider your investment objectives, level of experience, and risk appetite before making any investment decisions. Past performance is not indicative of future results. Funded Program Guide does not guarantee any specific outcome or profit. By using this website, you acknowledge and accept all risks associated with trading.
                </p>
              </div>
            </div>
            
            {/* Trust Badge Section */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center bg-white px-6 py-3 rounded-lg shadow-sm border border-slate-200">
                <img 
                  src="/images/icons/shield-check-3d.png" 
                  alt="Verified Security" 
                  className="h-12 w-12 mr-4" 
                />
                <div>
                  <p className="font-semibold text-sm text-slate-800">Trusted & Verified Information</p>
                  <p className="text-xs text-slate-500">All data is regularly verified for accuracy and reliability</p>
                </div>
              </div>
            </div>
            
            
            {/* Copyright Section */}
            <div className="flex justify-center">
              <div className="text-sm text-slate-500 text-center">
                <p>&copy; {new Date().getFullYear()} Funded Program Guide. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <TermsOfServiceModal 
        isOpen={isTermsModalOpen} 
        onClose={() => setIsTermsModalOpen(false)} 
      />
      
      <PrivacyPolicyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
      />
    </>
  );
};

export default Footer;