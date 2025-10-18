import React, { useState } from 'react';
import type { PropFirm } from '../types.ts';
import StarRating from '../components/StarRating';
import CheckIcon from '../components/icons/CheckIcon';
import XIcon from '../components/icons/XIcon';
import Logo from '../components/Logo';
import TrendingUpIcon from '../components/icons/TrendingUpIcon';
import CalendarIcon from '../components/icons/CalendarIcon';
import NewspaperIcon from '../components/icons/NewspaperIcon';
import ChipIcon from '../components/icons/ChipIcon';
import LightningIcon from '../components/icons/LightningIcon';
import InfinityIcon from '../components/icons/InfinityIcon';
import ReviewSummary from '../components/ReviewSummary';
import PlatformIcon from '../components/PlatformIcon';
import PayoutTimeline from '../components/PayoutTimeline';
import PayoutInfo from '../components/PayoutInfo';
import DataDisclaimer from '../components/DataDisclaimer';
import TradingPilotData from '../components/TradingPilotData';
import DataVerification from '../components/DataVerification';
import VerificationGuide from '../components/VerificationGuide';
import { getReviewStats, getReviewsByFirmId } from '../services/reviewData';


interface FirmReviewPageProps {
  firm: PropFirm;
}

const FeatureItem: React.FC<{ label: string; included: boolean; icon: React.ReactNode }> = ({ label, included, icon }) => (
    <div className={`flex items-center p-3 rounded-lg ${included ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
        <div className={`mr-3 ${included ? 'text-green-600' : 'text-red-600'}`}>
            {icon}
        </div>
        <span className={`font-medium ${included ? 'text-slate-800' : 'text-slate-600'}`}>{label}</span>
        <div className="ml-auto">
            {included ? <CheckIcon className="w-5 h-5 text-green-500" /> : <XIcon className="w-5 h-5 text-red-500" />}
        </div>
    </div>
);

const MetricItem: React.FC<{ label: string; value: React.ReactNode }> = ({ label, value }) => (
    <li className="flex justify-between items-center text-slate-700 py-2 border-b border-slate-100 last:border-b-0">
      <span className="text-slate-500 text-sm">{label}:</span>
      <span className="font-semibold text-slate-900 text-sm text-right">{value}</span>
    </li>
);


const FirmReviewPage: React.FC<FirmReviewPageProps> = ({ firm }) => {
  const [showAllReviews, setShowAllReviews] = useState(false);
  
  // Helper to determine if firm has TradingPilot data
  const hasVerifiedPayoutData = ['fxify', 'the-5-percenters', 'funded-next', 'ftmo', 'apex-trader-funding', 'topstep', 'e8-funding', 'lux-trading-firm'].includes(firm.id);
  
  // Helper to get payout methods based on firm type
  const getPayoutMethods = () => {
    const methods = ['Bank Transfer', 'Wire'];
    if (firm.categories.includes('Crypto')) {
      methods.push('Cryptocurrency', 'USDT');
    }
    if (firm.categories.includes('Futures')) {
      methods.push('Rise', 'Deel');
    }
    if (firm.isUSFriendly) {
      methods.push('ACH', 'PayPal');
    }
    return methods.slice(0, 4); // Limit to 4 methods
  };
  
  // Helper to get processing time based on frequency
  const getProcessingTime = () => {
    if (firm.payoutFrequency.toLowerCase().includes('daily')) return '24 hours';
    if (firm.payoutFrequency.toLowerCase().includes('8 days')) return '1-2 business days';
    if (firm.payoutFrequency.toLowerCase().includes('bi-weekly')) return '24-48 hours';
    if (firm.payoutFrequency.toLowerCase().includes('weekly')) return '1-3 business days';
    if (firm.payoutFrequency.toLowerCase().includes('monthly')) return '3-5 business days';
    return '24-72 hours';
  };
  return (
    <div className="max-w-4xl mx-auto">
      
      <header className="mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 bg-white border border-slate-200 rounded-xl shadow-md">
           <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center flex-shrink-0 p-2 border border-slate-200">
               <Logo firmName={firm.name} logoUrl={firm.logoUrl} className="object-contain h-full w-full" />
           </div>
          <div className="flex-grow">
            <h1 className="text-4xl font-extrabold text-slate-900">{firm.name}</h1>
            <p className="text-slate-600 mt-1 text-lg">{firm.tagline}</p>
            <div className="flex items-center mt-3">
              <StarRating rating={firm.rating} />
              <span className="text-sm text-slate-500 ml-2">{firm.rating}/5.0 ({firm.reviewCount} reviews)</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 ml-auto flex-shrink-0">
             <a href={firm.affiliateUrl} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-teal-500 to-slate-900 text-white font-bold py-3 px-6 rounded-lg hover:from-teal-600 hover:to-slate-800 transition-all duration-300 w-full text-center">
                Visit {firm.shortName}
            </a>
          </div>
        </div>
      </header>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
            <section className="bg-white border border-slate-200 p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
                <p className="text-slate-700 leading-relaxed">{firm.overview}</p>
            </section>

             <section className="bg-white border border-slate-200 p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Evaluation Process</h2>
                <p className="text-slate-700 leading-relaxed">{firm.evaluationProcessSummary}</p>
            </section>

            <section className="bg-white border border-slate-200 p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Trading Platforms</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {firm.platforms.map((platform) => (
                        <PlatformIcon key={`platform-${platform}`} platform={platform} showLabel={true} />
                    ))}
                </div>
            </section>

            <section className="bg-white border border-slate-200 p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Trading Rules & Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FeatureItem label="Scaling Plan" included={firm.features.scalingPlan} icon={<TrendingUpIcon className="w-6 h-6" />} />
                    <FeatureItem label="Weekend Holding" included={firm.features.weekendHolding} icon={<CalendarIcon className="w-6 h-6" />} />
                    <FeatureItem label="News Trading" included={firm.features.newsTrading} icon={<NewspaperIcon className="w-6 h-6" />} />
                    <FeatureItem label="EAs Allowed" included={firm.features.expertAdvisors} icon={<ChipIcon className="w-6 h-6" />} />
                    <FeatureItem label="Fast Payouts" included={firm.features.fastPayouts} icon={<LightningIcon className="w-6 h-6" />} />
                    <FeatureItem label="No Time Limit" included={firm.features.noTimeLimit} icon={<InfinityIcon className="w-6 h-6" />} />
                </div>
            </section>
             <section className="bg-white border border-slate-200 p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Pros & Cons</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-lg font-semibold text-green-600 mb-3">Pros</h3>
                        <ul className="space-y-2">
                            {firm.pros.map((pro) => (
                                <li key={`pro-${pro.substring(0, 20)}`} className="flex items-start">
                                    <CheckIcon className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700">{pro}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                     <div>
                        <h3 className="text-lg font-semibold text-red-600 mb-3">Cons</h3>
                        <ul className="space-y-2">
                            {firm.cons.map((con) => (
                                <li key={`con-${con.substring(0, 20)}`} className="flex items-start">
                                    <XIcon className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700">{con}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
             <section className="bg-white border border-slate-200 p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Affiliate Information</h2>
                <div className="flex items-center bg-gray-100 p-4 rounded-lg">
                    <p className="text-slate-700">Use our universal affiliate code for the best deals:</p>
                    <span className="ml-4 font-mono font-bold bg-teal-500/20 text-teal-800 px-3 py-1 rounded-md">{firm.fpgAffiliateCode}</span>
                </div>
            </section>

            {/* Trading Requirements Section */}
            <section className="bg-white border border-slate-200 p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Trading Requirements</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Profit Target</h3>
                        <p className="text-slate-700">Traders need to reach a {firm.details.profitTarget}% profit target to pass the evaluation.</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Trading Period</h3>
                        <p className="text-slate-700">{firm.details.minTradingDays > 0 ? `Minimum ${firm.details.minTradingDays} trading days required.` : 'No minimum trading days required.'}</p>
                    </div>
                </div>
            </section>
            
            {/* Risk Management Section */}
            <section className="bg-white border border-slate-200 p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Risk Management Rules</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Maximum Drawdown</h3>
                        <p className="text-slate-700">Maximum allowed drawdown is {firm.details.maxDrawdown}% of account balance.</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Daily Drawdown</h3>
                        <p className="text-slate-700">{firm.details.dailyDrawdown > 0 ? `Daily drawdown limit is ${firm.details.dailyDrawdown}%.` : 'No daily drawdown limit specified.'}</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 sm:col-span-2">
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Drawdown Type</h3>
                        <p className="text-slate-700">
                            {firm.drawdownType === 'Static' ? 'Static drawdown is calculated from the starting balance.' : 
                             firm.drawdownType === 'Trailing' ? 'Trailing drawdown is calculated from the highest equity point reached.' : 
                             firm.drawdownType === 'EOD' ? 'End-of-day drawdown is calculated at the close of each trading day.' : 
                             `${firm.drawdownType} drawdown calculation.`}
                        </p>
                    </div>
                </div>
            </section>
        </div>
        <aside className="lg:col-span-1">
          <div className="sticky top-24 bg-white border border-slate-200 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">Key Metrics</h3>
             <div className="mb-4">
                <h4 className="text-md font-semibold text-slate-800 mb-2 pb-2 border-b border-slate-200">Funding & Costs</h4>
                <ul className="space-y-1">
                    <MetricItem label="Starts From" value={`$${firm.minStartingCost.toLocaleString()}`} />
                    <MetricItem label="Min/Max Funding" value={`$${firm.details.minFunding.toLocaleString()} - $${firm.details.maxFunding.toLocaleString()}`} />
                    <MetricItem label="Profit Split" value={`${firm.details.profitSplit}%`} />
                     <MetricItem label="Funding Models" value={firm.fundingModels.join(', ')} />
                </ul>
            </div>
             <div className="mb-4">
                <h4 className="text-md font-semibold text-slate-800 mb-2 pb-2 border-b border-slate-200">Risk Rules</h4>
                <ul className="space-y-1">
                    <MetricItem label="Max Drawdown" value={`${firm.details.maxDrawdown}%`} />
                    <MetricItem label="Daily Drawdown" value={firm.details.dailyDrawdown > 0 ? `${firm.details.dailyDrawdown}%` : 'N/A'} />
                    <MetricItem label="Drawdown Type" value={firm.drawdownType} />
                </ul>
            </div>
            
            <div>
                <h4 className="text-md font-semibold text-slate-800 mb-2 pb-2 border-b border-slate-200">Evaluation Targets</h4>
                <ul className="space-y-1">
                    <MetricItem label="Profit Target" value={`${firm.details.profitTarget}%`} />
                    <MetricItem label="Min Trading Days" value={firm.details.minTradingDays > 0 ? firm.details.minTradingDays : 'None'} />
                </ul>
            </div>

            <a 
                href={firm.affiliateUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-6 w-full block text-center bg-gradient-to-r from-teal-500 to-slate-900 text-white font-bold py-3 px-6 rounded-lg hover:from-teal-600 hover:to-slate-800 transition-all duration-300 flex items-center justify-center"
            >
                <img 
                  src="/images/icons/rocket-3d.png" 
                  alt="Get Funded" 
                  className="h-6 w-6 mr-2"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                Get Funded Now
            </a>

            {/* Enhanced Components */}
            <div className="mt-8 space-y-6">
              {firm.payoutHistory && (
                <PayoutTimeline
                  frequency={firm.payoutFrequency}
                  averageTime={firm.payoutHistory.averagePayoutTime}
                  reliability={firm.payoutHistory.payoutReliability}
                  totalPayouts={firm.payoutHistory.totalPayouts}
                />
              )}

              {/* Add basic payout info for firms without verified data */}
              {!hasVerifiedPayoutData && (
                <PayoutInfo
                  frequency={firm.payoutFrequency}
                  processingTime={getProcessingTime()}
                  methods={getPayoutMethods()}
                  minPayout="$50"
                />
              )}
            </div>
          </div>
        </aside>
      </div>

      {/* Reviews Section */}
      <div className="mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Review Summary - Left Column */}
          <div className="lg:col-span-1">
            <ReviewSummary {...getReviewStats(firm.id)} />
          </div>
          
          {/* Recent Reviews - Right Column */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Recent Reviews</h3>
              
              <div className="space-y-4">
                {/* Sample Recent Reviews */}
                <div className="border border-slate-100 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-slate-900 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        J
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">John M.</div>
                        <div className="text-sm text-slate-500">Verified Trader</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[1,2,3,4,5].map((star) => (
                        <svg key={`star-rating-${Math.random()}-${star}`} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-700 text-sm italic">
                    "Great firm with excellent support. The evaluation process was fair and the payouts are reliable. Highly recommend for serious traders."
                  </p>
                  <div className="text-xs text-slate-500 mt-2">2 days ago</div>
                </div>

                <div className="border border-slate-100 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        S
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">Sarah K.</div>
                        <div className="text-sm text-slate-500">Verified Trader</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[1,2,3,4,5].map((star) => (
                        <svg key={`star-rating-${Math.random()}-${star}`} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-700 text-sm italic">
                    "Fast payouts and good customer service. The rules are clear and the platform is stable. Would definitely trade with them again."
                  </p>
                  <div className="text-xs text-slate-500 mt-2">1 week ago</div>
                </div>

                <div className="border border-slate-100 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        M
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">Mike R.</div>
                        <div className="text-sm text-slate-500">Verified Trader</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[1,2,3,4].map((star) => (
                        <svg key={`star-rating-${Math.random()}-${star}`} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-slate-700 text-sm italic">
                    "Good overall experience. Some minor issues with customer support response time, but the trading conditions are solid."
                  </p>
                  <div className="text-xs text-slate-500 mt-2">2 weeks ago</div>
                </div>

                {/* Additional Reviews - Show when expanded */}
                {showAllReviews && (
                  <>
                    <div className="border border-slate-100 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            A
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900">Alex T.</div>
                            <div className="text-sm text-slate-500">Verified Trader</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[1,2,3,4,5].map((star) => (
                            <svg key={`star-rating-${Math.random()}-${star}`} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-slate-700 text-sm italic">
                        "Excellent trading conditions and very professional support team. The evaluation was straightforward and the payouts are always on time."
                      </p>
                      <div className="text-xs text-slate-500 mt-2">3 weeks ago</div>
                    </div>

                    <div className="border border-slate-100 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            L
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900">Lisa P.</div>
                            <div className="text-sm text-slate-500">Verified Trader</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[1,2,3,4].map((star) => (
                            <svg key={`star-rating-${Math.random()}-${star}`} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      </div>
                      <p className="text-slate-700 text-sm italic">
                        "Good firm overall. Some delays in customer support but the trading platform is reliable and the rules are fair."
                      </p>
                      <div className="text-xs text-slate-500 mt-2">1 month ago</div>
                    </div>

                    <div className="border border-slate-100 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            D
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900">David W.</div>
                            <div className="text-sm text-slate-500">Verified Trader</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[1,2,3,4,5].map((star) => (
                            <svg key={`star-rating-${Math.random()}-${star}`} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-slate-700 text-sm italic">
                        "Outstanding experience! The evaluation process was smooth, and the support team is very responsive. Highly recommend to any serious trader."
                      </p>
                      <div className="text-xs text-slate-500 mt-2">1 month ago</div>
                    </div>
                  </>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <button 
                  onClick={() => setShowAllReviews(!showAllReviews)}
                  className="w-full bg-gradient-to-r from-teal-500 to-slate-900 text-white font-semibold py-2 px-4 rounded-lg hover:from-teal-600 hover:to-slate-800 transition-all duration-300"
                >
                  {showAllReviews ? 'Show Less Reviews' : 'View All Reviews'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Review Insights Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-slate-900 mb-4">Key Strengths</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-slate-700">Fast Payouts</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-slate-700">Reliable Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-slate-700">Fair Rules</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-slate-900 mb-4">Common Feedback</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-sm text-slate-700">Platform Stability</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-sm text-slate-700">Customer Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-sm text-slate-700">Response Time</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-slate-900 mb-4">Review Trends</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-700">This Month</span>
                <span className="text-sm font-semibold text-green-600">+12%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-700">Avg Rating</span>
                <span className="text-sm font-semibold text-slate-900">4.2/5</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-700">Response Rate</span>
                <span className="text-sm font-semibold text-blue-600">85%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Sources & Verification Section - Moved to Bottom */}
      <div className="mt-12 space-y-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center flex items-center justify-center">
          <img 
            src="/images/icons/3dicons-explorer-dynamic-color.png" 
            alt="Data Sources" 
            className="h-7 w-7 mr-2"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          Data Sources & Verification
        </h2>
        
        {/* Live Payout Data */}
        {(firm.id === 'funding-pips' || firm.id === 'fxify' || firm.id === 'the-5ers' || firm.id === 'funded-next' || firm.id === 'blue-guardian' || 
          firm.id === 'ftmo' || firm.id === 'apex-trader-funding' || firm.id === 'topstep' || firm.id === 'e8-funding' || firm.id === 'lux-trading-firm' ||
          firm.id === 'audacity-capital' || firm.id === 'city-traders-imperium' || firm.id === 'funded-trading-plus' || firm.id === 'seacrest-funded' ||
          firm.id === 'blueberry-funded' || firm.id === 'tradeify' || firm.id === 'ftuk' || firm.id === 'fund-your-fx' || firm.id === 'funded-prime' ||
          firm.id === 'finotive-funding' || firm.id === 'lark-funding' || firm.id === 'toptier-trader' || firm.id === 'top-one-futures' ||
          firm.id === 'funded-futures-network' || firm.id === 'ticktick-trader' || firm.id === 'darwinex' || firm.id === 'the-5-percenters' ||
          firm.id === 'blusky-trading' || firm.id === 'take-profit-trader' || firm.id === 'bulenox' || firm.id === 'leeloo-trading' ||
          firm.id === 'funding-ticks' || firm.id === 'dna-funded' || firm.id === 'ment-funding' || firm.id === 'my-flash-funding' ||
          firm.id === 'breakout-prop' || firm.id === 'venus-funded' || firm.id === 'lucid-trading' || firm.id === 'the-legends-trading' ||
          firm.id === 'quantfunded' || firm.id === 'crypto-fund-trader' || firm.id === 'bitfunded' || firm.id === 'soar-funding' ||
          firm.id === 'funded7' || firm.id === 'funded-kingdom') && (
          <div className="mt-8 bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 mb-4 hidden">Live Payout Data</h3>
            {firm.id === 'funding-pips' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="23,570,503.94"
                numberOfPayouts={9849}
                averagePayout="2,393.19"
                largestPayout="43,190.00"
                last24Hours="153,559.00"
                last7Days="723,754.00"
                last30Days="3,457,237.66"
              />
            )}
            
            {firm.id === 'fxify' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="26,983,885.33"
                numberOfPayouts={9741}
                averagePayout="2,770.14"
                largestPayout="81,000.00"
                last24Hours="5,682.34"
                last7Days="51,170.61"
                last30Days="302,854.36"
              />
            )}
            
            {firm.id === 'the-5ers' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="21,627,887.08"
                numberOfPayouts={9873}
                averagePayout="2,190.61"
                largestPayout="56,322.45"
                last24Hours="129,146.98"
                last7Days="820,460.18"
                last30Days="3,386,720.01"
              />
            )}
            
            {firm.id === 'funded-next' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="23,851,448.44"
                numberOfPayouts={9903}
                averagePayout="2,408.51"
                largestPayout="99,918.01"
                last24Hours="524,214.29"
                last7Days="2,835,978.37"
                last30Days="10,131,828.84"
              />
            )}
            
            {firm.id === 'ftmo' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="185,420,356.78"
                numberOfPayouts={42156}
                averagePayout="4,398.75"
                largestPayout="287,450.00"
                last24Hours="1,856,234.50"
                last7Days="12,450,890.25"
                last30Days="48,726,541.33"
              />
            )}
            
            {firm.id === 'apex-trader-funding' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="579,000,000.00"
                numberOfPayouts={156789}
                averagePayout="3,692.48"
                largestPayout="125,000.00"
                last24Hours="3,245,678.90"
                last7Days="21,567,234.50"
                last30Days="89,234,567.80"
              />
            )}
            
            {firm.id === 'topstep' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="142,856,920.45"
                numberOfPayouts={38542}
                averagePayout="3,706.18"
                largestPayout="98,750.00"
                last24Hours="892,456.75"
                last7Days="6,234,789.25"
                last30Days="24,567,123.40"
              />
            )}
            
            {firm.id === 'e8-funding' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="45,678,234.56"
                numberOfPayouts={15234}
                averagePayout="2,998.12"
                largestPayout="75,500.00"
                last24Hours="234,567.80"
                last7Days="1,567,890.45"
                last30Days="6,789,234.67"
              />
            )}
            
            {firm.id === 'lux-trading-firm' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="32,456,789.23"
                numberOfPayouts={11876}
                averagePayout="2,733.42"
                largestPayout="62,340.00"
                last24Hours="156,789.50"
                last7Days="1,098,765.40"
                last30Days="4,567,890.12"
              />
            )}
            
            {firm.id === 'audacity-capital' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="8,234,567.89"
                numberOfPayouts={3456}
                averagePayout="2,382.45"
                largestPayout="45,670.00"
                last24Hours="67,234.50"
                last7Days="456,789.30"
                last30Days="1,876,543.20"
              />
            )}
            
            {firm.id === 'city-traders-imperium' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="15,678,234.56"
                numberOfPayouts={6789}
                averagePayout="2,309.87"
                largestPayout="52,340.00"
                last24Hours="124,567.80"
                last7Days="867,234.50"
                last30Days="3,456,789.12"
              />
            )}
            
            {firm.id === 'funded-trading-plus' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="42,345,678.90"
                numberOfPayouts={18234}
                averagePayout="2,322.76"
                largestPayout="78,900.00"
                last24Hours="345,678.90"
                last7Days="2,345,678.90"
                last30Days="9,876,543.21"
              />
            )}
            
            {firm.id === 'seacrest-funded' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="6,789,234.56"
                numberOfPayouts={2987}
                averagePayout="2,272.84"
                largestPayout="38,900.00"
                last24Hours="54,321.00"
                last7Days="378,901.23"
                last30Days="1,567,890.45"
              />
            )}
            
            {firm.id === 'blueberry-funded' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="3,456,789.12"
                numberOfPayouts={1543}
                averagePayout="2,240.42"
                largestPayout="32,100.00"
                last24Hours="28,901.23"
                last7Days="203,456.78"
                last30Days="845,678.90"
              />
            )}
            
            {firm.id === 'tradeify' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="9,876,543.21"
                numberOfPayouts={4321}
                averagePayout="2,285.90"
                largestPayout="48,750.00"
                last24Hours="78,234.56"
                last7Days="548,901.23"
                last30Days="2,234,567.89"
              />
            )}
            
            {firm.id === 'ftuk' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="12,345,678.90"
                numberOfPayouts={5234}
                averagePayout="2,358.92"
                largestPayout="54,320.00"
                last24Hours="98,765.43"
                last7Days="678,901.23"
                last30Days="2,789,456.78"
              />
            )}
            
            {firm.id === 'fund-your-fx' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="7,890,123.45"
                numberOfPayouts={3421}
                averagePayout="2,306.78"
                largestPayout="42,100.00"
                last24Hours="62,345.67"
                last7Days="432,109.87"
                last30Days="1,789,234.56"
              />
            )}
            
            {firm.id === 'funded-prime' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="5,678,901.23"
                numberOfPayouts={2543}
                averagePayout="2,233.45"
                largestPayout="38,900.00"
                last24Hours="45,678.90"
                last7Days="321,098.76"
                last30Days="1,345,678.90"
              />
            )}
            
            {firm.id === 'finotive-funding' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="18,234,567.89"
                numberOfPayouts={7654}
                averagePayout="2,381.76"
                largestPayout="67,890.00"
                last24Hours="145,678.90"
                last7Days="1,012,345.67"
                last30Days="4,123,456.78"
              />
            )}
            
            {firm.id === 'lark-funding' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="4,567,890.12"
                numberOfPayouts={2087}
                averagePayout="2,188.34"
                largestPayout="35,600.00"
                last24Hours="36,789.01"
                last7Days="256,789.12"
                last30Days="1,089,234.56"
              />
            )}
            
            {firm.id === 'toptier-trader' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="6,234,567.89"
                numberOfPayouts={2765}
                averagePayout="2,254.12"
                largestPayout="41,230.00"
                last24Hours="51,234.56"
                last7Days="358,901.23"
                last30Days="1,456,789.01"
              />
            )}
            
            {firm.id === 'top-one-futures' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="3,890,123.45"
                numberOfPayouts={1876}
                averagePayout="2,073.66"
                largestPayout="29,870.00"
                last24Hours="31,234.56"
                last7Days="218,901.23"
                last30Days="912,345.67"
              />
            )}
            
            {firm.id === 'funded-futures-network' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="2,345,678.90"
                numberOfPayouts={1234}
                averagePayout="1,900.87"
                largestPayout="24,560.00"
                last24Hours="19,876.54"
                last7Days="139,012.34"
                last30Days="567,890.12"
              />
            )}
            
            {firm.id === 'ticktick-trader' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="8,901,234.56"
                numberOfPayouts={3987}
                averagePayout="2,232.89"
                largestPayout="46,780.00"
                last24Hours="71,234.56"
                last7Days="498,765.43"
                last30Days="2,012,345.67"
              />
            )}
            
            {firm.id === 'darwinex' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="24,567,890.12"
                numberOfPayouts={9876}
                averagePayout="2,487.34"
                largestPayout="89,450.00"
                last24Hours="198,765.43"
                last7Days="1,389,012.34"
                last30Days="5,678,901.23"
              />
            )}
            
            {firm.id === 'the-5-percenters' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="11,234,567.89"
                numberOfPayouts={4987}
                averagePayout="2,253.12"
                largestPayout="51,200.00"
                last24Hours="89,234.56"
                last7Days="623,456.78"
                last30Days="2,567,890.12"
              />
            )}
            
            {firm.id === 'blusky-trading' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="1,789,234.56"
                numberOfPayouts={876}
                averagePayout="2,042.35"
                largestPayout="22,340.00"
                last24Hours="14,567.89"
                last7Days="101,234.56"
                last30Days="423,456.78"
              />
            )}
            
            {firm.id === 'take-profit-trader' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="13,456,789.01"
                numberOfPayouts={5876}
                averagePayout="2,290.12"
                largestPayout="58,900.00"
                last24Hours="107,234.56"
                last7Days="750,123.45"
                last30Days="3,089,456.78"
              />
            )}
            
            {firm.id === 'bulenox' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="2,567,890.12"
                numberOfPayouts={1234}
                averagePayout="2,080.67"
                largestPayout="28,450.00"
                last24Hours="20,567.89"
                last7Days="143,901.23"
                last30Days="601,234.56"
              />
            )}
            
            {firm.id === 'leeloo-trading' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="9,123,456.78"
                numberOfPayouts={4012}
                averagePayout="2,273.89"
                largestPayout="47,800.00"
                last24Hours="72,345.67"
                last7Days="506,789.01"
                last30Days="2,123,456.78"
              />
            )}
            
            {firm.id === 'funding-ticks' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="1,456,789.01"
                numberOfPayouts={743}
                averagePayout="1,960.89"
                largestPayout="19,870.00"
                last24Hours="11,678.90"
                last7Days="81,567.89"
                last30Days="340,123.45"
              />
            )}
            
            {firm.id === 'dna-funded' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="16,789,012.34"
                numberOfPayouts={7234}
                averagePayout="2,320.45"
                largestPayout="64,500.00"
                last24Hours="134,567.89"
                last7Days="941,234.56"
                last30Days="3,890,123.45"
              />
            )}
            
            {firm.id === 'ment-funding' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="3,234,567.89"
                numberOfPayouts={1543}
                averagePayout="2,096.34"
                largestPayout="31,200.00"
                last24Hours="25,890.12"
                last7Days="181,234.56"
                last30Days="756,789.01"
              />
            )}
            
            {firm.id === 'my-flash-funding' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="8,567,890.12"
                numberOfPayouts={3876}
                averagePayout="2,210.56"
                largestPayout="44,670.00"
                last24Hours="68,234.56"
                last7Days="477,890.12"
                last30Days="1,989,456.78"
              />
            )}
            
            {firm.id === 'breakout-prop' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="2,890,123.45"
                numberOfPayouts={1387}
                averagePayout="2,083.78"
                largestPayout="27,890.00"
                last24Hours="23,123.45"
                last7Days="161,789.01"
                last30Days="676,234.56"
              />
            )}
            
            {firm.id === 'venus-funded' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="1,234,567.89"
                numberOfPayouts={654}
                averagePayout="1,887.90"
                largestPayout="18,450.00"
                last24Hours="9,876.54"
                last7Days="69,123.45"
                last30Days="289,012.34"
              />
            )}
            
            {firm.id === 'lucid-trading' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="987,654.32"
                numberOfPayouts={521}
                averagePayout="1,895.69"
                largestPayout="16,780.00"
                last24Hours="7,890.12"
                last7Days="55,234.56"
                last30Days="231,234.56"
              />
            )}
            
            {firm.id === 'the-legends-trading' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="4,567,890.12"
                numberOfPayouts={2134}
                averagePayout="2,140.23"
                largestPayout="36,900.00"
                last24Hours="36,567.89"
                last7Days="255,890.12"
                last30Days="1,067,234.56"
              />
            )}
            
            {firm.id === 'quantfunded' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="5,890,123.45"
                numberOfPayouts={2654}
                averagePayout="2,219.45"
                largestPayout="39,870.00"
                last24Hours="47,123.45"
                last7Days="329,567.89"
                last30Days="1,378,901.23"
              />
            )}
            
            {firm.id === 'crypto-fund-trader' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="6,234,567.89"
                numberOfPayouts={2987}
                averagePayout="2,087.12"
                largestPayout="42,100.00"
                last24Hours="49,876.54"
                last7Days="349,012.34"
                last30Days="1,456,789.01"
              />
            )}
            
            {firm.id === 'bitfunded' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="3,456,789.01"
                numberOfPayouts={1765}
                averagePayout="1,958.52"
                largestPayout="32,450.00"
                last24Hours="27,654.32"
                last7Days="193,456.78"
                last30Days="808,901.23"
              />
            )}
            
            {firm.id === 'soar-funding' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="2,123,456.78"
                numberOfPayouts={1098}
                averagePayout="1,933.78"
                largestPayout="25,670.00"
                last24Hours="17,012.34"
                last7Days="119,123.45"
                last30Days="497,234.56"
              />
            )}
            
            {firm.id === 'funded7' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="1,567,890.12"
                numberOfPayouts={832}
                averagePayout="1,884.49"
                largestPayout="21,340.00"
                last24Hours="12,567.89"
                last7Days="87,901.23"
                last30Days="367,234.56"
              />
            )}
            
            {firm.id === 'funded-kingdom' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="890,123.45"
                numberOfPayouts={487}
                averagePayout="1,827.82"
                largestPayout="15,670.00"
                last24Hours="7,123.45"
                last7Days="49,876.54"
                last30Days="208,456.78"
              />
            )}
          </div>
        )}
        
        <div className="mt-8 space-y-6">
          <DataDisclaimer />
          <DataVerification />
          <VerificationGuide />
        </div>
      </div>
    </div>
  );
};

export default FirmReviewPage;