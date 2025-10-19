import React, { useState } from 'react';
import AIBot from '../components/AIBot';
import type { PropFirm } from '../types';

interface AIBotPageProps {
  firms: PropFirm[];
  onViewFirmDetails?: (firmId: string) => void;
}

const AIBotPage: React.FC<AIBotPageProps> = ({ firms, onViewFirmDetails }) => {
  const [recommendations, setRecommendations] = useState<PropFirm[]>([]);

  const handleRecommendation = (firms: PropFirm[]) => {
    setRecommendations(firms);
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="text-center py-16 mb-12">
        <div className="relative mb-8">
          <div className="w-32 h-40 bg-gray-200 rounded-3xl flex items-center justify-center mx-auto shadow-2xl group hover:scale-110 transition-all duration-500 border-4 border-gray-300" 
               style={{
                 boxShadow: '0 20px 40px rgba(107, 114, 128, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                 background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 50%, #d1d5db 100%)'
               }}>
            <img 
              src="/images/icons/ai-robot-new.webp" 
              alt="AI Bot" 
              className="w-32 h-40 object-contain rounded-3xl"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling.style.display = 'block';
              }}
            />
            <svg 
              className="w-24 h-32 text-teal-600 drop-shadow-lg hidden" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div className="absolute -inset-2 bg-gradient-to-r from-gray-300 to-gray-400 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
        </div>
        
        <h1 className="font-heading text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          <span className="block bg-gradient-to-r from-teal-500 to-slate-900 text-transparent bg-clip-text">
            AI-Powered Prop Firm Finder
          </span>
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Get personalized prop firm recommendations based on your trading style, experience, and preferences. 
          Our advanced AI analyzes your profile to match you with the perfect evaluation program.
        </p>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-teal-200 group transform hover:-translate-y-1">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-teal-500/25 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3" 
                   style={{
                     boxShadow: '0 10px 25px rgba(20, 184, 166, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                     background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 50%, #0f766e 100%)'
                   }}>
                <svg className="w-7 h-7 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500"></div>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2 text-center group-hover:text-teal-600 transition-colors duration-300">Smart Matching</h3>
          <p className="text-slate-600 text-sm text-center">AI-powered algorithm matches you with the best prop firms</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-teal-200 group transform hover:-translate-y-1">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-teal-500/25 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3" 
                   style={{
                     boxShadow: '0 10px 25px rgba(20, 184, 166, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                     background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 50%, #0f766e 100%)'
                   }}>
                <svg className="w-7 h-7 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500"></div>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2 text-center group-hover:text-teal-600 transition-colors duration-300">Risk Assessment</h3>
          <p className="text-slate-600 text-sm text-center">Comprehensive risk analysis for each recommended firm</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-teal-200 group transform hover:-translate-y-1">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-teal-500/25 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3" 
                   style={{
                     boxShadow: '0 10px 25px rgba(20, 184, 166, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                     background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 50%, #0f766e 100%)'
                   }}>
                <svg className="w-7 h-7 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500"></div>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2 text-center group-hover:text-teal-600 transition-colors duration-300">Deal Tracker</h3>
          <p className="text-slate-600 text-sm text-center">Monitor best deals and price changes automatically</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-teal-200 group transform hover:-translate-y-1">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-teal-500/25 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3" 
                   style={{
                     boxShadow: '0 10px 25px rgba(20, 184, 166, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                     background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 50%, #0f766e 100%)'
                   }}>
                <svg className="w-7 h-7 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500"></div>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2 text-center group-hover:text-teal-600 transition-colors duration-300">Chat Assistant</h3>
          <p className="text-slate-600 text-sm text-center">Get instant answers about prop firms and trading</p>
        </div>
      </section>

      {/* AI Bot Component */}
      <section className="bg-gradient-to-br from-teal-50 via-slate-50 to-teal-100 rounded-3xl p-8 shadow-xl border border-teal-200">
        <AIBot firms={firms} onRecommendation={handleRecommendation} onViewFirmDetails={onViewFirmDetails} />
      </section>

      {/* Additional Information */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-white to-teal-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-teal-100 hover:border-teal-300 group">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-teal-600 transition-colors duration-300">How It Works</h3>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg" 
                   style={{
                     boxShadow: '0 4px 12px rgba(20, 184, 166, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                     background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 50%, #0f766e 100%)'
                   }}>
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">Answer Questions</h4>
                <p className="text-slate-600">Complete our comprehensive questionnaire about your trading preferences</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg" 
                   style={{
                     boxShadow: '0 4px 12px rgba(20, 184, 166, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                     background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 50%, #0f766e 100%)'
                   }}>
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">AI Analysis</h4>
                <p className="text-slate-600">Our advanced algorithm analyzes your profile and matches you with suitable firms</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg" 
                   style={{
                     boxShadow: '0 4px 12px rgba(20, 184, 166, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                     background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 50%, #0f766e 100%)'
                   }}>
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">Get Recommendations</h4>
                <p className="text-slate-600">Receive personalized recommendations with detailed explanations</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white to-teal-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-teal-100 hover:border-teal-300 group">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-teal-600 transition-colors duration-300">Why Use Our AI Bot?</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-6 h-6 bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 rounded-full flex items-center justify-center flex-shrink-0 shadow-md" 
                   style={{
                     boxShadow: '0 2px 8px rgba(20, 184, 166, 0.3)',
                     background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 50%, #0f766e 100%)'
                   }}>
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-slate-700 font-medium">Save time researching hundreds of prop firms</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-6 h-6 bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 rounded-full flex items-center justify-center flex-shrink-0 shadow-md" 
                   style={{
                     boxShadow: '0 2px 8px rgba(20, 184, 166, 0.3)',
                     background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 50%, #0f766e 100%)'
                   }}>
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-slate-700 font-medium">Get unbiased, data-driven recommendations</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-6 h-6 bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 rounded-full flex items-center justify-center flex-shrink-0 shadow-md" 
                   style={{
                     boxShadow: '0 2px 8px rgba(20, 184, 166, 0.3)',
                     background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 50%, #0f766e 100%)'
                   }}>
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-slate-700 font-medium">Understand why each firm matches your needs</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-6 h-6 bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 rounded-full flex items-center justify-center flex-shrink-0 shadow-md" 
                   style={{
                     boxShadow: '0 2px 8px rgba(20, 184, 166, 0.3)',
                     background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 50%, #0f766e 100%)'
                   }}>
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-slate-700 font-medium">Access exclusive deals and promotions</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-6 h-6 bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 rounded-full flex items-center justify-center flex-shrink-0 shadow-md" 
                   style={{
                     boxShadow: '0 2px 8px rgba(20, 184, 166, 0.3)',
                     background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 50%, #0f766e 100%)'
                   }}>
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-slate-700 font-medium">Get ongoing support and updates</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIBotPage;
