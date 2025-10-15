import React from 'react';
import type { PropFirm } from '../types.ts';

interface AuditPageProps {
  firms: PropFirm[];
}

const isPlaceholder = (text: string) => {
  if (!text) return true;
  const t = text.trim().toLowerCase();
  return t.length < 40 || /lorem ipsum|placeholder|coming soon/.test(t);
};

const AuditPage: React.FC<AuditPageProps> = ({ firms }) => {
  const issues = firms.map((firm) => {
    const problems: string[] = [];

    if (!firm.platforms || firm.platforms.length === 0) problems.push('Missing platforms');
    if (!firm.platformDetails || firm.platformDetails.length === 0) problems.push('Missing platformDetails');
    if (!firm.payoutHistory || !firm.payoutHistory.averagePayoutTime || !firm.payoutHistory.payoutReliability) problems.push('Missing payoutHistory fields');
    if (!firm.successMetrics || (firm.successMetrics.evaluationPassRate === 0 && firm.successMetrics.traderRetentionRate === 0 && firm.successMetrics.scalingSuccessRate === 0)) problems.push('Success metrics look placeholder');
    if (!firm.affiliateUrl) problems.push('Missing affiliateUrl');
    if (isPlaceholder(firm.evaluationProcessSummary)) problems.push('Evaluation summary too short/placeholder');
    if (isPlaceholder(firm.overview)) problems.push('Overview too short/placeholder');

    // Verification checks
    const lastVerified = firm.lastVerifiedAt ? new Date(firm.lastVerifiedAt) : null;
    const daysSinceVerify = lastVerified ? Math.floor((Date.now() - lastVerified.getTime()) / (1000 * 60 * 60 * 24)) : null;
    if (!firm.sources || firm.sources.length === 0) problems.push('Missing sources[]');
    if (!firm.verificationStatus || firm.verificationStatus === 'unverified') problems.push('Verification status unverified');
    if (daysSinceVerify !== null && daysSinceVerify > 60) problems.push(`Verification older than 60 days (${daysSinceVerify}d)`);

    return { firm, problems };
  });

  const withProblems = issues.filter(i => i.problems.length > 0);

  return (
    <div>
      <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Data Audit</h1>
      <p className="text-slate-600 mb-6">Dev-only view. Flags firms with missing or placeholder-like fields.</p>

      {withProblems.length === 0 ? (
        <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg">All firms look complete.</div>
      ) : (
        <div className="space-y-4">
          {withProblems.map(({ firm, problems }) => (
            <div key={firm.id} className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">{firm.name}</h2>
                  <p className="text-sm text-slate-500">ID: {firm.id}</p>
                </div>
                <a href={`/firm-review/${firm.id}`} className="text-teal-600 hover:text-teal-700 font-semibold">View</a>
              </div>
              <ul className="list-disc ml-6 mt-3 text-sm text-slate-700">
                {problems.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AuditPage;


