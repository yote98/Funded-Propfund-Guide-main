import React from 'react';
import FirmCard from '../components/FirmCard';
import TopDeals from '../components/TopDeals';
import NewsletterSignUp from '../components/NewsletterSignUp';
import ReviewCarousel from '../components/ReviewCarousel';
import type { FirmId, PropFirm } from '../types';
import { userReviews } from '../services/reviewData';

interface HomePageProps {
  viewFirm: (firmId: FirmId) => void;
  firms: PropFirm[];
  navigateToCompare: (searchTerm?: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ viewFirm, firms, navigateToCompare }) => {
  const featuredFirms = firms.filter(firm => firm.isFeatured);
  const currentMonth = new Date().toLocaleString('en-US', { month: 'long' });

  return (
    <div className="space-y-16">
      <section className="text-center py-16">
        <h1 className="font-heading text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
          <span className="block bg-gradient-to-r from-teal-500 to-slate-900 text-transparent bg-clip-text">
            We Research. You Profit.
          </span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
          Smart Solutions. Expert Analysis
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => navigateToCompare()}
            className="text-center bg-gradient-to-r from-teal-500 to-slate-900 text-white font-semibold py-3 px-8 rounded-lg hover:from-teal-600 hover:to-slate-800 transition-all duration-300"
          >
            Compare All Firms
          </button>
        </div>
      </section>

      <section id="why-choose-us" className="bg-gradient-to-r from-slate-50 to-teal-50 py-8 rounded-2xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-4">Why Choose Our Platform?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We provide the most comprehensive and unbiased analysis of prop trading firms to help you make informed decisions.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-teal-200 group transform hover:-translate-y-1">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-teal-500/25 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3" 
                       style={{
                         boxShadow: '0 10px 25px rgba(20, 184, 166, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                         background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 50%, #0f766e 100%)'
                       }}>
                    <svg className="w-8 h-8 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500"></div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center group-hover:text-teal-600 transition-colors duration-300">Verified & Trusted</h3>
              <p className="text-slate-600 leading-relaxed text-center text-sm">
                All firms are thoroughly vetted and verified. We only recommend legitimate, trustworthy prop trading companies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-teal-200 group transform hover:-translate-y-1">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-teal-500/25 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3" 
                       style={{
                         boxShadow: '0 10px 25px rgba(20, 184, 166, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                         background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 50%, #0f766e 100%)'
                       }}>
                    <svg className="w-8 h-8 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500"></div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center group-hover:text-teal-600 transition-colors duration-300">Detailed Analytics</h3>
              <p className="text-slate-600 leading-relaxed text-center text-sm">
                Access comprehensive analytics, performance metrics, and detailed comparisons to find your perfect match.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-teal-200 group transform hover:-translate-y-1">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-teal-500/25 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3" 
                       style={{
                         boxShadow: '0 10px 25px rgba(20, 184, 166, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                         background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 50%, #0f766e 100%)'
                       }}>
                    <svg className="w-8 h-8 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500"></div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center group-hover:text-teal-600 transition-colors duration-300">Best Deals & Discounts</h3>
              <p className="text-slate-600 leading-relaxed text-center text-sm">
                Get access to exclusive discounts and promotional offers from top prop trading firms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="featured-firms">
        <h2 className="font-heading text-3xl font-bold text-slate-900 text-center mb-8">Featured Firms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredFirms.map(firm => (
            <FirmCard key={firm.id} firm={firm} viewFirm={viewFirm} />
          ))}
        </div>
      </section>

      <section id="top-deals">
        <h2 className="font-heading text-3xl font-bold text-slate-900 text-center mb-2">Top {currentMonth} Deals</h2>
        <p className="text-center text-slate-600 mb-8">Verified firms, top discounts.</p>
        <TopDeals firms={firms} />
      </section>

      <section id="testimonials">
        <h2 className="font-heading text-3xl font-bold text-slate-900 text-center mb-2">What Our Users Say</h2>
        <p className="text-center text-slate-600 mb-8">Real reviews from successful funded traders</p>
        <ReviewCarousel 
          reviews={userReviews.filter(review => review.rating >= 4)} 
          showCount={3}
          autoSlide={true}
          slideInterval={4000}
        />
      </section>

      <section id="newsletter">
        <NewsletterSignUp />
      </section>
    </div>
  );
};

export default HomePage;