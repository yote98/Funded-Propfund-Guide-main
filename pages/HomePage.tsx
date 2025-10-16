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
  const totalFirms = firms.length;
  const totalReviews = userReviews.length;
  const averageRating = userReviews.reduce((sum, review) => sum + review.rating, 0) / userReviews.length;

  return (
    <div className="space-y-16">
      {/* Enhanced Hero Section */}
      <section className="text-center py-20 bg-gradient-to-br from-slate-50 to-teal-50 rounded-2xl">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-font text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
            <span className="block bg-gradient-to-r from-teal-500 to-slate-900 text-transparent bg-clip-text">
              We Research. You Profit.
            </span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-slate-600 leading-relaxed">
            The most comprehensive resource for proprietary trading firms. Compare, analyze, and choose the perfect firm for your trading journey.
          </p>
          
          {/* Key Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600">{totalFirms}+</div>
              <div className="text-sm text-slate-600">Prop Firms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-600">{totalReviews}+</div>
              <div className="text-sm text-slate-600">Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{averageRating.toFixed(1)}</div>
              <div className="text-sm text-slate-600">Avg Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">$2M+</div>
              <div className="text-sm text-slate-600">Max Funding</div>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigateToCompare()}
              className="bg-gradient-to-r from-teal-500 to-slate-900 text-white font-semibold py-4 px-8 rounded-lg hover:from-teal-600 hover:to-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              <img
                src="/images/icons/flame-3d.png"
                alt="Hot Action"
                className="w-5 h-5 mr-2 drop-shadow"
                draggable={false}
              />
              Compare All Firms
            </button>
            <button
              onClick={() => viewFirm('ftmo')}
              className="bg-white text-slate-700 font-semibold py-4 px-8 rounded-lg border-2 border-slate-300 hover:border-teal-500 hover:text-teal-600 transition-all duration-300 flex items-center justify-center"
            >
              <img
                src="/images/icons/flame-3d.png"
                alt="Hot Firms"
                className="w-5 h-5 mr-2 drop-shadow"
                draggable={false}
              />
              View Top Firms
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Our Platform?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We provide the most comprehensive and up-to-date information about prop trading firms
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-200">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Verified Data</h3>
            <p className="text-slate-600">All information is verified and updated regularly from official sources</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-200">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Fast Comparisons</h3>
            <p className="text-slate-600">Compare firms side-by-side with our advanced filtering and sorting tools</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-200">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1h-2.5M12 8h2.5" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Best Deals</h3>
            <p className="text-slate-600">Exclusive discounts and promotional codes for verified prop trading firms</p>
          </div>
        </div>
      </section>

      <section id="featured-firms">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <img
              src="/images/icons/star-3d.png"
              alt="Featured Firms"
              className="w-8 h-8 mr-3 drop-shadow object-contain aspect-square"
              draggable={false}
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
            />
            <h2 className="heading-font text-3xl font-bold text-slate-900">Featured Firms</h2>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Hand-picked top-performing prop trading firms based on our comprehensive analysis
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredFirms.map(firm => (
            <FirmCard key={firm.id} firm={firm} viewFirm={viewFirm} />
          ))}
        </div>
        {featuredFirms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500">No featured firms available at the moment.</p>
          </div>
        )}
      </section>

      <section id="top-deals">
        <div className="flex items-center justify-center mb-2">
          <img
            src="/images/icons/flame-3d.png"
            alt="Hot Deals"
            className="w-8 h-8 mr-3 drop-shadow"
            draggable={false}
          />
          <h2 className="heading-font text-3xl font-bold text-slate-900">Top {currentMonth} Deals</h2>
        </div>
        <p className="text-center text-slate-600 mb-8">Verified firms, top discounts.</p>
        <TopDeals firms={firms} />
      </section>

      <section id="testimonials">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">What Our Users Say</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real reviews from successful funded traders who found their perfect firm through our platform
          </p>
        </div>
        <ReviewCarousel 
          reviews={userReviews.filter(review => review.rating >= 4)} 
          showCount={3}
          autoSlide={true}
          slideInterval={4000}
        />
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-slate-900 rounded-2xl text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Trading Journey?</h2>
          <p className="text-xl text-teal-100 mb-8">
            Join thousands of successful traders who found their perfect prop firm through our platform
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigateToCompare()}
              className="bg-white text-teal-600 font-semibold py-4 px-8 rounded-lg hover:bg-teal-50 transition-all duration-300 shadow-lg"
            >
              Compare All Firms
            </button>
            <button
              onClick={() => viewFirm('ftmo')}
              className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-teal-600 transition-all duration-300"
            >
              View Top Firms
            </button>
          </div>
        </div>
      </section>

      <section id="newsletter">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <img
              src="/images/icons/envelope-3d.png"
              alt="Newsletter"
              className="w-8 h-8 mr-3 drop-shadow"
              draggable={false}
            />
            <h2 className="text-3xl font-bold text-slate-900">Stay Connected</h2>
          </div>
          <p className="text-lg text-slate-600">Get the latest updates and exclusive deals delivered to your inbox</p>
        </div>
        <NewsletterSignUp />
      </section>
    </div>
  );
};

export default HomePage;