import React, { useState, useEffect } from 'react';
import type { PropFirm } from '../types';

interface AIBotProps {
  firms: PropFirm[];
  onRecommendation: (firms: PropFirm[]) => void;
  onViewFirmDetails?: (firmId: string) => void;
}

interface Question {
  id: string;
  question: string;
  type: 'single' | 'multiple' | 'range' | 'text';
  options?: string[];
  min?: number;
  max?: number;
  step?: number;
  required: boolean;
}

interface UserAnswers {
  [key: string]: string | string[] | number;
}

const AIBot: React.FC<AIBotProps> = ({ firms, onRecommendation, onViewFirmDetails }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [recommendations, setRecommendations] = useState<PropFirm[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const questions: Question[] = [
    {
      id: 'experience',
      question: 'What is your trading experience level?',
      type: 'single',
      options: ['Beginner (0-1 years)', 'Intermediate (1-3 years)', 'Advanced (3-5 years)', 'Expert (5+ years)'],
      required: true
    },
    {
      id: 'capital',
      question: 'What is your preferred account size?',
      type: 'single',
      options: ['$10K - $25K', '$25K - $50K', '$50K - $100K', '$100K - $200K', '$200K+'],
      required: true
    },
    {
      id: 'markets',
      question: 'Which markets do you prefer to trade?',
      type: 'multiple',
      options: ['Forex', 'Futures', 'Crypto', 'Stocks'],
      required: true
    },
    {
      id: 'strategy',
      question: 'What is your primary trading strategy?',
      type: 'single',
      options: ['Scalping', 'Day Trading', 'Swing Trading'],
      required: true
    },
    {
      id: 'risk_tolerance',
      question: 'What is your risk tolerance?',
      type: 'single',
      options: ['Conservative (Low risk)', 'Moderate (Medium risk)', 'Aggressive (High risk)'],
      required: true
    },
    {
      id: 'profit_split',
      question: 'What minimum profit split do you expect?',
      type: 'single',
      options: ['50-70%', '70-80%', '80-90%', '90%+'],
      required: true
    },
    {
      id: 'evaluation_type',
      question: 'What type of evaluation do you prefer?',
      type: 'single',
      options: ['1-Step Challenge', '2-Step Challenge', 'No Challenge (Direct Funding)'],
      required: true
    },
    {
      id: 'timeframe',
      question: 'How quickly do you want to get funded?',
      type: 'single',
      options: ['As fast as possible', 'Within 1 month', 'Within 2-3 months', 'No rush'],
      required: true
    }
  ];

  const handleAnswer = (questionId: string, answer: string | string[] | number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      generateRecommendations();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateRecommendations = async () => {
    setIsAnalyzing(true);
    
    // Validate that we have answers for all required questions
    const requiredQuestions = questions.filter(q => q.required);
    const missingAnswers = requiredQuestions.filter(q => !answers[q.id]);
    
    if (missingAnswers.length > 0) {
      console.error('AI Bot: Missing required answers:', missingAnswers.map(q => q.id));
      setIsAnalyzing(false);
      return;
    }
    
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const scoredFirms = firms.map(firm => {
      let score = 0;
      let reasons: string[] = [];

      // Experience matching - give points based on firm complexity and rating
      const experience = answers.experience as string;
      const firmMinCapital = firm.details?.minFunding || 0;
      if (experience === 'Beginner' && firmMinCapital <= 25000 && firm.rating >= 4.0) {
        score += 15;
        reasons.push('Beginner-friendly with low entry requirements');
      } else if (experience === 'Intermediate' && firmMinCapital <= 100000 && firm.rating >= 4.0) {
        score += 12;
        reasons.push('Suitable for intermediate traders');
      } else if (experience === 'Advanced' && firm.details?.maxFunding >= 200000 && firm.rating >= 4.2) {
        score += 12;
        reasons.push('High capital options for advanced traders');
      } else if (experience === 'Expert' && firm.details?.maxFunding >= 500000 && firm.rating >= 4.5) {
        score += 15;
        reasons.push('Premium options for expert traders');
      }

      // Capital matching - use actual firm data
      const capital = answers.capital as string;
      const firmMaxCapital = firm.details?.maxFunding || 0;
      if (capital.includes('$200K+') && firmMaxCapital >= 200000) {
        score += 20;
        reasons.push('High capital options available');
      } else if (capital.includes('$100K - $200K') && firmMaxCapital >= 100000) {
        score += 18;
        reasons.push('Good capital range available');
      } else if (capital.includes('$50K - $100K') && firmMaxCapital >= 50000) {
        score += 15;
        reasons.push('Moderate capital options available');
      } else if (capital.includes('$25K - $50K') && firmMaxCapital >= 25000) {
        score += 12;
        reasons.push('Entry-level capital available');
      } else if (capital.includes('$10K - $25K') && firmMaxCapital >= 10000) {
        score += 10;
        reasons.push('Low capital options available');
      } else if (firmMaxCapital > 0) {
        score += 8; // Give some points for any capital amount
        reasons.push('Offers funding opportunities');
      }

      // Markets matching - use actual trading instruments
      const markets = answers.markets as string[];
      const firmMarkets = firm.tradingInstruments || [];
      const marketMatch = markets.some(market => firmMarkets.includes(market));
      if (marketMatch) {
        score += 15;
        reasons.push('Supports your preferred markets');
      }

      // Strategy matching - give points for different strategies
      const strategy = answers.strategy as string;
      if (strategy === 'Scalping' && firm.features?.expertAdvisors) {
        score += 10;
        reasons.push('Supports automated trading');
      } else if (strategy === 'Day Trading') {
        score += 10;
        reasons.push('Good for day trading');
      } else if (strategy === 'Swing Trading' && firm.features?.weekendHolding) {
        score += 10;
        reasons.push('Allows weekend holding');
      }

      // Risk tolerance matching - use actual drawdown data
      const riskTolerance = answers.risk_tolerance as string;
      const dailyDrawdown = firm.details?.dailyDrawdown || 0;
      if (riskTolerance === 'Conservative' && dailyDrawdown <= 5) {
        score += 15;
        reasons.push('Conservative risk management');
      } else if (riskTolerance === 'Aggressive' && dailyDrawdown >= 10) {
        score += 15;
        reasons.push('Higher risk tolerance supported');
      } else if (dailyDrawdown > 0) {
        score += 8; // Give some points for any drawdown limit
        reasons.push('Has risk management rules');
      }

      // Profit split matching - use actual profit split data
      const profitSplit = answers.profit_split as string;
      const firmProfitSplit = firm.details?.profitSplit || 0;
      if (profitSplit.includes('90%+') && firmProfitSplit >= 90) {
        score += 15;
        reasons.push('High profit split');
      } else if (profitSplit.includes('80-90%') && firmProfitSplit >= 80) {
        score += 12;
        reasons.push('Good profit split');
      } else if (profitSplit.includes('70-80%') && firmProfitSplit >= 70) {
        score += 10;
        reasons.push('Moderate profit split');
      } else if (profitSplit.includes('50-70%') && firmProfitSplit >= 50) {
        score += 8;
        reasons.push('Standard profit split');
      } else if (firmProfitSplit > 0) {
        score += 5; // Give some points for any profit split
        reasons.push('Offers profit sharing');
      }

      // Evaluation type matching - use funding models
      const evaluationType = answers.evaluation_type as string;
      const fundingModels = firm.fundingModels || [];
      if (evaluationType === '1-Step Challenge' && fundingModels.some(model => model.includes('1-Step'))) {
        score += 15;
        reasons.push('1-step evaluation process');
      } else if (evaluationType === '2-Step Challenge' && fundingModels.some(model => model.includes('2-Step'))) {
        score += 15;
        reasons.push('2-step evaluation process');
      } else if (evaluationType === 'No Challenge (Direct Funding)' && firm.hasInstantFunding) {
        score += 15;
        reasons.push('Direct funding available');
      }

      // Timeframe matching - give points for instant funding or fast processes
      const timeframe = answers.timeframe as string;
      if (timeframe === 'As fast as possible' && firm.hasInstantFunding) {
        score += 12;
        reasons.push('Instant funding available');
      } else if (timeframe === 'Within 1 month' && firm.features?.fastPayouts) {
        score += 10;
        reasons.push('Fast payout system');
      } else if (firm.features?.fastPayouts) {
        score += 6;
        reasons.push('Fast payout system');
      }

      // Additional scoring based on firm quality
      if (firm.rating >= 4.5) {
        score += 8;
        reasons.push('Highly rated firm');
      } else if (firm.rating >= 4.0) {
        score += 4;
        reasons.push('Well-rated firm');
      }

      // Bonus for instant funding (only if not already added above)
      if (firm.hasInstantFunding && !reasons.includes('Instant funding available')) {
        score += 6;
        reasons.push('Instant funding available');
      }

      // Bonus for US-friendly firms if user is in US
      if (firm.isUSFriendly) {
        score += 3;
        reasons.push('US-friendly');
      }

      // Base score for all firms to ensure some results
      score += 3;
      if (reasons.length === 0) {
        reasons.push('General compatibility');
      }

      // Cap the score at 100% to prevent unrealistic percentages
      const cappedScore = Math.min(score, 100);

      return { ...firm, score: cappedScore, reasons };
    });

    // Sort by score and get top recommendations
    const topRecommendations = scoredFirms
      .filter(firm => firm.score > 0) // Only include firms with positive scores
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);

    console.log('AI Bot: Top recommendations:', topRecommendations.map(f => ({ id: f.id, name: f.name, score: f.score })));

    // Ensure we have at least some recommendations
    if (topRecommendations.length === 0) {
      console.warn('AI Bot: No recommendations found, using fallback');
      // Fallback: show top-rated firms
      const fallbackRecommendations = firms
        .sort((a, b) => (b.rating || 0) - (a.rating || 0))
        .slice(0, 3)
        .map(firm => ({ ...firm, score: 60, reasons: ['High-rated firm'] }));
      setRecommendations(fallbackRecommendations);
      onRecommendation(fallbackRecommendations);
    } else {
      setRecommendations(topRecommendations);
      onRecommendation(topRecommendations);
    }
    
    setIsAnalyzing(false);
    setShowResults(true);
  };

  const resetBot = () => {
    setCurrentStep(0);
    setAnswers({});
    setRecommendations([]);
    setShowResults(false);
  };

  const handleViewDetails = (firmId: string) => {
    console.log('AI Bot: View Details clicked for firm:', firmId);
    if (onViewFirmDetails) {
      console.log('AI Bot: Calling onViewFirmDetails with firmId:', firmId);
      onViewFirmDetails(firmId);
    } else {
      console.log('AI Bot: onViewFirmDetails function not provided');
    }
  };


  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  if (showResults) {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <div className="text-center mb-12">
          <div className="relative mb-6">
            <div className="w-28 h-36 bg-gray-200 rounded-3xl flex items-center justify-center mx-auto shadow-2xl border-4 border-gray-300" 
                 style={{
                   boxShadow: '0 20px 40px rgba(107, 114, 128, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                   background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 50%, #d1d5db 100%)'
                 }}>
              <img 
                src="/images/icons/ai-robot-new.webp" 
                alt="AI Bot" 
                className="w-28 h-36 object-contain rounded-3xl"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'block';
                }}
              />
              <svg 
                className="w-20 h-28 text-teal-600 drop-shadow-lg hidden" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div className="absolute -inset-2 bg-gradient-to-r from-gray-300 to-gray-400 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            <span className="bg-gradient-to-r from-teal-500 to-slate-900 text-transparent bg-clip-text">
              AI Recommendations
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Based on your preferences, here are the best prop firms for you:</p>
        </div>

        <div className="space-y-8">
          {recommendations.map((firm, index) => (
            <div key={firm.id} className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-teal-200 group transform hover:-translate-y-2">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-teal-500/25 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3" 
                         style={{
                           boxShadow: '0 10px 25px rgba(20, 184, 166, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                           background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 50%, #0f766e 100%)'
                         }}>
                      <span className="text-white font-bold text-xl drop-shadow-md">#{index + 1}</span>
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500"></div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">{firm.name}</h3>
                    <p className="text-slate-600 text-lg">Match Score: {firm.score}%</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold bg-gradient-to-r from-teal-500 to-teal-600 text-transparent bg-clip-text">{firm.score}%</div>
                  <div className="text-sm text-slate-500 font-medium">Match</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-2xl border border-slate-200 hover:border-teal-300 transition-all duration-300 group">
                  <div className="text-sm text-slate-500 mb-2 font-medium">Max Capital</div>
                  <div className="text-2xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors duration-300">${firm.details?.maxFunding?.toLocaleString() || 'N/A'}</div>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-2xl border border-slate-200 hover:border-teal-300 transition-all duration-300 group">
                  <div className="text-sm text-slate-500 mb-2 font-medium">Profit Split</div>
                  <div className="text-2xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors duration-300">{firm.details?.profitSplit || 'N/A'}%</div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-bold text-slate-900 mb-4">Why this firm matches you:</h4>
                <div className="flex flex-wrap gap-3">
                  {firm.reasons?.map((reason, idx) => (
                    <span key={idx} className="bg-gradient-to-r from-teal-100 to-teal-200 text-teal-800 px-4 py-2 rounded-full text-sm font-medium border border-teal-300 hover:from-teal-200 hover:to-teal-300 transition-all duration-300">
                      {reason}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-slate-200">
                <div className="flex items-center space-x-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-6 h-6 ${i < Math.floor(firm.rating || 0) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-slate-600 font-medium">({Math.min(firm.reviewCount || 0, 150)} reviews)</span>
                </div>
                <button 
                  onClick={() => handleViewDetails(firm.id)}
                  className="bg-gradient-to-r from-teal-500 to-slate-900 text-white px-8 py-3 rounded-xl font-semibold hover:from-teal-600 hover:to-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={resetBot}
            className="bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 px-8 py-4 rounded-xl font-semibold hover:from-slate-200 hover:to-slate-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-slate-300"
          >
            Start Over
          </button>
        </div>
      </div>
    );
  }

  if (isAnalyzing) {
    return (
      <div className="max-w-3xl mx-auto p-8 text-center">
        <div className="relative mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 rounded-3xl flex items-center justify-center mx-auto shadow-2xl animate-pulse" 
               style={{
                 boxShadow: '0 20px 40px rgba(20, 184, 166, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                 background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 50%, #0f766e 100%)'
               }}>
            <svg className="w-12 h-12 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div className="absolute -inset-2 bg-gradient-to-r from-teal-400 to-teal-600 rounded-3xl opacity-20 blur-xl animate-pulse"></div>
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          <span className="bg-gradient-to-r from-teal-500 to-slate-900 text-transparent bg-clip-text">
            AI is Analyzing Your Preferences
          </span>
        </h2>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">Our advanced algorithm is matching you with the perfect prop firms...</p>
        <div className="w-full bg-slate-200 rounded-full h-3 shadow-inner">
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 h-3 rounded-full animate-pulse shadow-lg" style={{ width: '100%' }}></div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="text-center mb-8">
        <div className="relative mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 rounded-3xl flex items-center justify-center mx-auto shadow-2xl" 
               style={{
                 boxShadow: '0 20px 40px rgba(20, 184, 166, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                 background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 50%, #0f766e 100%)'
               }}>
            <svg className="w-10 h-10 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div className="absolute -inset-2 bg-gradient-to-r from-teal-400 to-teal-600 rounded-3xl opacity-20 blur-xl"></div>
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-2">
          <span className="bg-gradient-to-r from-teal-500 to-slate-900 text-transparent bg-clip-text">
            AI Prop Firm Finder
          </span>
        </h2>
        <p className="text-slate-600 text-lg">Answer a few questions and get personalized recommendations</p>
      </div>

      <div className="mb-8">
        <div className="flex justify-between text-sm text-slate-600 mb-3">
          <span className="font-medium">Question {currentStep + 1} of {questions.length}</span>
          <span className="font-medium text-teal-600">{Math.round(progress)}% Complete</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-3 shadow-inner">
          <div 
            className="bg-gradient-to-r from-teal-500 to-teal-600 h-3 rounded-full transition-all duration-500 shadow-lg" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-white to-teal-50 p-8 rounded-3xl shadow-xl border border-teal-100 mb-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-6">{currentQuestion.question}</h3>
        
        {currentQuestion.type === 'single' && currentQuestion.options && (
          <div className="space-y-4">
            {currentQuestion.options.map((option) => (
              <label key={option} className="flex items-center p-4 border border-teal-200 rounded-xl hover:bg-teal-50 hover:border-teal-300 cursor-pointer transition-all duration-300 group">
                <input
                  type="radio"
                  name={currentQuestion.id}
                  value={option}
                  checked={answers[currentQuestion.id] === option}
                  onChange={(e) => handleAnswer(currentQuestion.id, e.target.value)}
                  className="w-5 h-5 text-teal-600 border-teal-300 focus:ring-teal-500 focus:ring-2"
                />
                <span className="ml-4 text-slate-700 font-medium group-hover:text-teal-700 transition-colors duration-300">{option}</span>
              </label>
            ))}
          </div>
        )}

        {currentQuestion.type === 'multiple' && currentQuestion.options && (
          <div className="space-y-4">
            {currentQuestion.options.map((option) => (
              <label key={option} className="flex items-center p-4 border border-teal-200 rounded-xl hover:bg-teal-50 hover:border-teal-300 cursor-pointer transition-all duration-300 group">
                <input
                  type="checkbox"
                  checked={(answers[currentQuestion.id] as string[])?.includes(option) || false}
                  onChange={(e) => {
                    const currentValues = (answers[currentQuestion.id] as string[]) || [];
                    const newValues = e.target.checked
                      ? [...currentValues, option]
                      : currentValues.filter(v => v !== option);
                    handleAnswer(currentQuestion.id, newValues);
                  }}
                  className="w-5 h-5 text-teal-600 border-teal-300 focus:ring-teal-500 focus:ring-2 rounded"
                />
                <span className="ml-4 text-slate-700 font-medium group-hover:text-teal-700 transition-colors duration-300">{option}</span>
              </label>
            ))}
          </div>
        )}

        {currentQuestion.type === 'text' && (
          <textarea
            value={answers[currentQuestion.id] as string || ''}
            onChange={(e) => handleAnswer(currentQuestion.id, e.target.value)}
            placeholder="Share any additional preferences or requirements..."
            className="w-full p-4 border border-teal-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 resize-none bg-white/50"
            rows={4}
          />
        )}
      </div>

      <div className="flex justify-between">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className="px-6 py-3 text-slate-600 border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
        >
          Previous
        </button>
        
        <button
          onClick={nextStep}
          disabled={currentQuestion.required && !answers[currentQuestion.id]}
          className="px-6 py-3 bg-gradient-to-r from-teal-500 to-slate-900 text-white rounded-lg hover:from-teal-600 hover:to-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
        >
          {currentStep === questions.length - 1 ? 'Get Recommendations' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default AIBot;
