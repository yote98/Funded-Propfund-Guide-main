import React from 'react';
import type { PropFirm } from '../types.ts';
import CheckIcon from './icons/CheckIcon';
import StarIcon from './icons/StarIcon.tsx';

interface TrustMetricsProps {
  firm: PropFirm;
}

const TrustMetrics: React.FC<TrustMetricsProps> = ({ firm }) => {
  if (!firm.trustScore && !firm.trustedByUsers && !firm.verificationStatus && !firm.regulatoryCompliance) {
    return null;
  }

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6">
      <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
        <StarIcon className="w-6 h-6 mr-3 text-amber-500" />
        Trust & Credibility
      </h3>
      
      {/* Main Trust Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {firm.trustScore && (
          <div className="flex items-center p-4 bg-amber-50 rounded-lg border border-amber-200">
            <div className="flex items-center">
              <StarIcon className="w-6 h-6 text-amber-500 mr-3" />
              <div>
                <span className="text-sm text-amber-600 block font-medium">Trust Score</span>
                <span className="font-bold text-amber-800 text-2xl">{firm.trustScore}</span>
                <span className="text-xs text-amber-600 ml-1">/5.0</span>
              </div>
            </div>
          </div>
        )}
        
        {firm.trustedByUsers && (
          <div className="flex items-center p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center">
              <CheckIcon className="w-6 h-6 text-blue-500 mr-3" />
              <div>
                <span className="text-sm text-blue-600 block font-medium">Trusted by</span>
                <span className="font-bold text-blue-800 text-2xl">{firm.trustedByUsers.toLocaleString()}</span>
                <span className="text-xs text-blue-600 block">active users</span>
              </div>
            </div>
          </div>
        )}
        
        {firm.verificationStatus && (
          <div className="flex items-center p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center">
              <img
                src="/images/icons/key-3d.png"
                alt="Verified"
                className="w-8 h-8 mr-3 drop-shadow"
                draggable={false}
              />
              <div>
                <span className="text-sm text-green-600 block font-medium">Verification</span>
                <span className="font-bold text-green-800 capitalize text-lg">{firm.verificationStatus}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Additional Trust Information */}
      {(firm.regulatoryCompliance || firm.industryAwards || firm.socialProof) && (
        <div className="space-y-4">
          {firm.regulatoryCompliance && (
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h4 className="text-sm font-semibold text-slate-700 mb-2">Regulatory Compliance</h4>
              <p className="text-slate-600 font-medium">{firm.regulatoryCompliance}</p>
            </div>
          )}
          
          {firm.industryAwards && firm.industryAwards.length > 0 && (
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h4 className="text-sm font-semibold text-purple-700 mb-2">Industry Awards</h4>
              <div className="flex flex-wrap gap-2">
                {firm.industryAwards.map((award, index) => (
                  <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                    {award}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {firm.socialProof && (
            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
              <h4 className="text-sm font-semibold text-indigo-700 mb-3">Social Proof</h4>
              <div className="grid grid-cols-2 gap-4">
                {firm.socialProof.trustpilotRating && (
                  <div className="text-center">
                    <div className="text-lg font-bold text-indigo-800">{firm.socialProof.trustpilotRating}</div>
                    <div className="text-xs text-indigo-600">Trustpilot</div>
                  </div>
                )}
                {firm.socialProof.googleRating && (
                  <div className="text-center">
                    <div className="text-lg font-bold text-indigo-800">{firm.socialProof.googleRating}</div>
                    <div className="text-xs text-indigo-600">Google</div>
                  </div>
                )}
                {firm.socialProof.redditMentions && (
                  <div className="text-center">
                    <div className="text-lg font-bold text-indigo-800">{firm.socialProof.redditMentions.toLocaleString()}</div>
                    <div className="text-xs text-indigo-600">Reddit Mentions</div>
                  </div>
                )}
                {firm.socialProof.youtubeReviews && (
                  <div className="text-center">
                    <div className="text-lg font-bold text-indigo-800">{firm.socialProof.youtubeReviews}</div>
                    <div className="text-xs text-indigo-600">YouTube Reviews</div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TrustMetrics;
