import React, { useState } from 'react';

const NewsletterSignUp: React.FC = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubscribed(true);
    setIsLoading(false);
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-teal-50 to-slate-50 border-t border-slate-200">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <img
                src="/images/icons/envelope-3d.png"
                alt="Email Confirmation"
                className="w-8 h-8 drop-shadow"
                draggable={false}
              />
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
              Welcome to the Community! 🎉
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              You're now part of our exclusive community of successful traders. Check your inbox for a welcome email with our latest insights.
            </p>
            <div className="bg-white rounded-lg p-4 border border-slate-200">
              <p className="text-sm text-slate-500">
                <strong>What's next?</strong> You'll receive weekly updates with the best prop firm deals, exclusive discounts, and expert trading tips.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-teal-50 to-slate-50 border-t border-slate-200">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
                Get Exclusive Trading Insights
              </h2>
              <p className="text-xl text-slate-600 mb-6">
                Join 10,000+ traders who get the best prop firm deals, exclusive discounts, and expert analysis delivered weekly.
              </p>
              
              {/* Benefits List */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">Exclusive prop firm discounts (up to 50% off)</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">Weekly market analysis and trading tips</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">Early access to new firm reviews</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">No spam, unsubscribe anytime</span>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center mb-2">
                  <img
                    src="/images/icons/envelope-3d.png"
                    alt="Newsletter"
                    className="w-8 h-8 mr-3 drop-shadow"
                    draggable={false}
                  />
                  <h3 className="text-2xl font-bold text-slate-900">Join Our Newsletter</h3>
                </div>
                <p className="text-slate-600">Get started in 30 seconds</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg shadow-sm placeholder-slate-400 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-lg text-white bg-gradient-to-r from-teal-500 to-slate-900 hover:from-teal-600 hover:to-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Get Free Updates
                    </>
                  )}
                </button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-xs text-slate-500">
                  🔒 We respect your privacy. No spam, ever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignUp;