// Source Verification Utilities
export interface SourceCredibility {
  name: string;
  url: string;
  credibilityScore: number; // 1-10 scale
  verificationMethods: string[];
  lastVerified: string;
  trustLevel: 'High' | 'Medium' | 'Low';
}

export const verifiedSources: SourceCredibility[] = [
  {
    name: 'TradingPilot.net',
    url: 'https://www.tradingpilot.net/prop-firm-payouts',
    credibilityScore: 9,
    verificationMethods: [
      'Blockchain API Integration (Arbiscan)',
      'Real-time data updates every 6 hours',
      'Transparent methodology',
      'Comprehensive payout tracking',
      'Professional presentation'
    ],
    lastVerified: '2024-11-20',
    trustLevel: 'High'
  },
  {
    name: 'Payout Junction',
    url: 'https://payoutjunction.com',
    credibilityScore: 7,
    verificationMethods: [
      'Community-driven verification',
      'Historical data aggregation',
      'Cross-reference with multiple sources',
      'User-submitted verification'
    ],
    lastVerified: '2024-11-20',
    trustLevel: 'Medium'
  },
  {
    name: 'The Funded Trader',
    url: 'https://thefundedtrader.com',
    credibilityScore: 6,
    verificationMethods: [
      'Community insights',
      'User-generated content',
      'Peer verification',
      'Trading community feedback'
    ],
    lastVerified: '2024-11-20',
    trustLevel: 'Medium'
  }
];

export const verifySourceCredibility = (sourceName: string): SourceCredibility | null => {
  return verifiedSources.find(source => 
    source.name.toLowerCase().includes(sourceName.toLowerCase())
  ) || null;
};

export const getTrustRecommendations = (): string[] => {
  return [
    '✅ TradingPilot.net: Highest credibility - uses blockchain verification',
    '✅ Finance Magnates: High credibility - established financial publication',
    '⚠️ Payout Junction: Medium credibility - community-driven, cross-verify',
    '⚠️ The Funded Trader: Medium credibility - community insights, use as supplement',
    '🔍 Always cross-reference multiple sources for critical decisions',
    '📊 Prefer blockchain-verified data when available',
    '🏢 Official firm data takes precedence over third-party sources'
  ];
};

export const getVerificationChecklist = (): string[] => {
  return [
    'Check if source uses blockchain/API verification',
    'Verify source has transparent methodology',
    'Look for professional presentation and data quality',
    'Check if source is established in the industry',
    'Verify data is updated regularly',
    'Cross-reference with official firm data',
    'Check community feedback and reputation'
  ];
};
