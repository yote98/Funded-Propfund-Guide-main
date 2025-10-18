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
        <h1 className="heading-font text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
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

      <section id="featured-firms">
        <h2 className="heading-font text-3xl font-bold text-slate-900 text-center mb-8">Featured Firms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredFirms.map(firm => (
            <FirmCard key={firm.id} firm={firm} viewFirm={viewFirm} />
          ))}
        </div>
      </section>

      <section id="top-deals">
        <h2 className="heading-font text-3xl font-bold text-slate-900 text-center mb-2">Top {currentMonth} Deals</h2>
        <p className="text-center text-slate-600 mb-8">Verified firms, top discounts.</p>
        <TopDeals firms={firms} />
      </section>

      <section id="testimonials">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-2">What Our Users Say</h2>
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