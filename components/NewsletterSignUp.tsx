import React, { useState } from 'react';

const NewsletterSignUp: React.FC = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
  };

  if (isSubscribed) {
    return (
      <div className="bg-slate-100 border-t border-slate-200">
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900">
            Thank You for Subscribing!
          </h2>
          <p className="mt-2 max-w-2xl mx-auto text-lg text-slate-600">
            You're now on the list for the latest prop firm deals and trading tips.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-100 border-t border-slate-200">
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-slate-900">
                Stay Ahead of the Market
            </h2>
            <p className="mt-2 max-w-2xl mx-auto text-lg text-slate-600">
                Subscribe for the latest prop firm deals, reviews, and trading tips delivered to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="mt-8 sm:flex sm:justify-center max-w-lg mx-auto">
                <label htmlFor="email-address" className="sr-only">
                    Email address
                </label>
                <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full px-5 py-3 border border-slate-300 shadow-sm placeholder-slate-400 focus:ring-1 focus:ring-teal-500 focus:border-teal-500 rounded-md"
                    placeholder="Enter your email"
                />
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button
                        type="submit"
                        className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-teal-500 to-slate-900 hover:from-teal-600 hover:to-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all duration-300"
                    >
                        Subscribe
                    </button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default NewsletterSignUp;