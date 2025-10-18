import React, { useEffect } from 'react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
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
      <div 
        className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-hidden"
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="privacy-policy-modal"
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
          <h3 className="text-2xl font-bold text-slate-900" id="privacy-policy-modal">
            Privacy Policy
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
            <h4 className="text-lg font-semibold text-slate-800 mb-2">1. Introduction</h4>
            <p className="mb-4">
              Funded Program Guide ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>

            <h4 className="text-lg font-semibold text-slate-800 mb-2">2. Information We Collect</h4>
            <p className="mb-4">
              We may collect information about you in a variety of ways. The information we may collect includes:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>
                <strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you register with the website or when you choose to participate in various activities related to the website.
              </li>
              <li>
                <strong>Derivative Data:</strong> Information our servers automatically collect when you access the website, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the website.
              </li>
              <li>
                <strong>Financial Data:</strong> Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services.
              </li>
              <li>
                <strong>Data From Social Networks:</strong> User information from social networking sites, such as name, your social network username, location, gender, birth date, email address, profile picture, and public data for contacts, if you connect your account to such social networks.
              </li>
            </ul>

            <h4 className="text-lg font-semibold text-slate-800 mb-2">3. Use of Your Information</h4>
            <p className="mb-4">
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the website to:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Create and manage your account.</li>
              <li>Process your transactions.</li>
              <li>Send you email newsletters, if you have opted in to receive them.</li>
              <li>Fulfill and manage purchases, orders, payments, and other transactions related to the website.</li>
              <li>Increase the efficiency and operation of the website.</li>
              <li>Monitor and analyze usage and trends to improve your experience with the website.</li>
              <li>Notify you of updates to the website.</li>
              <li>Resolve disputes and troubleshoot problems.</li>
            </ul>

            <h4 className="text-lg font-semibold text-slate-800 mb-2">4. Disclosure of Your Information</h4>
            <p className="mb-4">
              We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>
                <strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
              </li>
              <li>
                <strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
              </li>
              <li>
                <strong>Marketing Communications:</strong> With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes.
              </li>
              <li>
                <strong>Interactions with Other Users:</strong> If you interact with other users of the website, those users may see your name, profile photo, and descriptions of your activity.
              </li>
              <li>
                <strong>Online Postings:</strong> When you post comments, contributions or other content to the website, your posts may be viewed by all users and may be publicly distributed outside the website in perpetuity.
              </li>
              <li>
                <strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
              </li>
            </ul>

            <h4 className="text-lg font-semibold text-slate-800 mb-2">5. Cookies and Web Beacons</h4>
            <p className="mb-4">
              We may use cookies, web beacons, tracking pixels, and other tracking technologies on the website to help customize the website and improve your experience. When you access the website, your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the website.
            </p>

            <h4 className="text-lg font-semibold text-slate-800 mb-2">6. Security of Your Information</h4>
            <p className="mb-4">
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>

            <h4 className="text-lg font-semibold text-slate-800 mb-2">7. Policy for Children</h4>
            <p className="mb-4">
              We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below.
            </p>

            <h4 className="text-lg font-semibold text-slate-800 mb-2">8. Options Regarding Your Information</h4>
            <p className="mb-4">
              You may at any time review or change the information in your account or terminate your account by contacting us using the contact information provided.
            </p>

            <h4 className="text-lg font-semibold text-slate-800 mb-2">9. Contact Us</h4>
            <p className="mb-4">
              If you have questions or comments about this Privacy Policy, please contact us through the About Us page.
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

export default PrivacyPolicyModal;
