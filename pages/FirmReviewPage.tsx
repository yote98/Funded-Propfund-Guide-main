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
import CostCalculator from '../components/CostCalculator';
import DataDisclaimer from '../components/DataDisclaimer';
import DataSources from '../components/DataSources';
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

            <a href={firm.affiliateUrl} target="_blank" rel="noopener noreferrer" className="mt-6 w-full block text-center bg-gradient-to-r from-teal-500 to-slate-900 text-white font-bold py-3 px-6 rounded-lg hover:from-teal-600 hover:to-slate-800 transition-all duration-300">
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


              <CostCalculator
                minStartingCost={firm.minStartingCost}
                profitSplit={firm.details.profitSplit}
                maxFunding={firm.details.maxFunding}
              />
            </div>
          </div>
        </aside>
      </div>

      {/* Data Sources Section */}
      <div className="mt-8">
        <DataSources />
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
                  <p className="text-slate-700 text-sm">
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
                  <p className="text-slate-700 text-sm">
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
                  <p className="text-slate-700 text-sm">
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
                      <p className="text-slate-700 text-sm">
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
                      <p className="text-slate-700 text-sm">
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
                      <p className="text-slate-700 text-sm">
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
        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Data Sources & Verification</h2>
        <DataSources />
        
        {/* Live Payout Data */}
        {(firm.id === 'funding-pips' || firm.id === 'fxify' || firm.id === 'the-5ers' || firm.id === 'funded-next' || firm.id === 'blue-guardian') && (
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
            
            {firm.id === 'blue-guardian' && (
              <TradingPilotData
                firmName={firm.name}
                totalPayouts="10,512,641.25"
                numberOfPayouts={4754}
                averagePayout="2,211.33"
                largestPayout="40,343.00"
                last24Hours="285.73"
                last7Days="109,941.93"
                last30Days="306,488.62"
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