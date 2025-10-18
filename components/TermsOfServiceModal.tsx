import React, { useEffect } from 'react';

interface TermsOfServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsOfServiceModal: React.FC<TermsOfServiceModalProps> = ({ isOpen, onClose }) => {
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-500 bg-opacity-75 flex items-center justify-center p-4"
      onClick={(e) => {
        // Close when clicking the backdrop
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Modal panel */}
      <div 
        className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-hidden"
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="terms-of-service-modal"
      >
          <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
            <h3 className="text-2xl font-bold text-slate-900" id="terms-of-service-modal">
              Terms of Service
            </h3>
            <button 
              onClick={onClose}
              className="text-slate-400 hover:text-slate-500 focus:outline-none"
              aria-label="Close"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="px-6 py-4 overflow-y-auto max-h-[60vh]">
            <div className="space-y-6 text-sm text-slate-600">
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">1. Acceptance of Terms</h4>
                  <p className="mb-4">
                    By accessing or using Funded Program Guide ("the Website"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Website.
                  </p>

                  <h4 className="text-lg font-semibold text-slate-800 mb-2">2. Use of Content</h4>
                  <p className="mb-4">
                    All content provided on this Website is for informational purposes only. The content is not intended to be a substitute for professional financial advice, and we make no warranties regarding the accuracy, completeness, or reliability of the information presented.
                  </p>

                  <h4 className="text-lg font-semibold text-slate-800 mb-2">3. User Conduct</h4>
                  <p className="mb-4">
                    You agree not to use the Website for any unlawful purpose or in any way that could damage, disable, overburden, or impair the Website's functionality. You also agree not to attempt to gain unauthorized access to any part of the Website or any systems or networks connected to the Website.
                  </p>

                  <h4 className="text-lg font-semibold text-slate-800 mb-2">4. Intellectual Property</h4>
                  <p className="mb-4">
                    All content, features, and functionality of the Website, including but not limited to text, graphics, logos, icons, and images, are the exclusive property of Funded Program Guide and are protected by copyright, trademark, and other intellectual property laws.
                  </p>

                  <h4 className="text-lg font-semibold text-slate-800 mb-2">5. Third-Party Links</h4>
                  <p className="mb-4">
                    The Website may contain links to third-party websites. These links are provided solely for your convenience. We have no control over the content of these websites and assume no responsibility for their content or practices.
                  </p>

                  <h4 className="text-lg font-semibold text-slate-800 mb-2">6. Affiliate Disclosure</h4>
                  <p className="mb-4">
                    Some links on this Website may be affiliate links, which means we may earn a commission if you click on the link or make a purchase using the link. This does not affect our reviews or recommendations, which are based on our honest opinions.
                  </p>

                  <h4 className="text-lg font-semibold text-slate-800 mb-2">7. Disclaimer of Warranties</h4>
                  <p className="mb-4">
                    THE WEBSITE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                  </p>

                  <h4 className="text-lg font-semibold text-slate-800 mb-2">8. Limitation of Liability</h4>
                  <p className="mb-4">
                    IN NO EVENT SHALL FUNDED PROGRAM GUIDE BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OF THE WEBSITE OR THE INFORMATION PROVIDED ON THE WEBSITE.
                  </p>

                  <h4 className="text-lg font-semibold text-slate-800 mb-2">9. Risk Disclosure</h4>
                  <p className="mb-4">
                    Trading in financial markets involves substantial risk of loss and is not suitable for all investors. You should carefully consider your investment objectives, level of experience, and risk appetite before making any investment decisions. Past performance is not indicative of future results.
                  </p>

                  <h4 className="text-lg font-semibold text-slate-800 mb-2">10. Changes to Terms</h4>
                  <p className="mb-4">
                    We reserve the right to modify these Terms of Service at any time. Your continued use of the Website following any changes constitutes your acceptance of the new Terms.
                  </p>

                  <h4 className="text-lg font-semibold text-slate-800 mb-2">11. Governing Law</h4>
                  <p className="mb-4">
                    These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which Funded Program Guide operates, without regard to its conflict of law provisions.
                  </p>

                  <h4 className="text-lg font-semibold text-slate-800 mb-2">12. Contact Information</h4>
                  <p className="mb-4">
                    If you have any questions about these Terms of Service, please contact us through the About Us page.
                  </p>

                  <p className="text-xs text-slate-500 mt-8">
                    Last updated: October 18, 2025
                  </p>
                </div>
          </div>
          <div className="bg-slate-50 px-6 py-4 flex justify-end border-t border-slate-200">
            <button 
              type="button" 
              className="px-4 py-2 bg-teal-600 text-white font-medium rounded-md shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors"
              onClick={onClose}
            >
              I Understand
            </button>
          </div>
        </div>
    </div>
  );
};

export default TermsOfServiceModal;
