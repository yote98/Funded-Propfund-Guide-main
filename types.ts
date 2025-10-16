export type Page = 'home' | 'firm-review' | 'compare' | 'education' | 'about' | 'article' | 'glossary' | 'trading-tools' | 'analytics' | 'audit';

export type FirmId = string;
export type ArticleId = string;

// FIX: Added 'Oil' to the TradingInstrument type to match data in mockData.ts.
export type TradingInstrument = 'Forex' | 'Futures' | 'Crypto' | 'Stocks' | 'Indices' | 'Metals' | 'Energies' | 'Bonds' | 'Options' | 'Commodities' | 'Oil';

// FIX: Added 'Multi-Asset' to the FirmCategory type to match data in mockData.ts.
export type FirmCategory = 'Forex/CFD' | 'Futures' | 'Crypto' | 'Instant Funding' | 'Multi-Asset';

export interface PropFirm {
  id: FirmId;
  name: string;
  shortName: string;
  logoUrl: string;
  officialWebsite: string;
  tagline: string;
  shortDescription: string;
  rating: number;
  reviewCount: number;
  isFeatured?: boolean;
  affiliateUrl: string;
  fpgAffiliateCode: string;

  hasInstantFunding: boolean;
  isUSFriendly: boolean;
  cryptoFocus?: boolean;
  fundingModels: string[];
  tradingInstruments: TradingInstrument[];
  categories: FirmCategory[];

  payoutFrequency: string;
  drawdownType: 'Static' | 'Trailing' | 'EOD';
  platforms: string[];

  evaluationProcessSummary: string;
  minStartingCost: number;
  geoRestrictions: string;

  // Enhanced Data Fields
  
  payoutHistory?: {
    totalPayouts: number;
    averagePayoutTime: string;
    payoutReliability: 'Excellent' | 'Good' | 'Fair' | 'Poor';
    lastUpdated: string;
  };
  
  successMetrics?: {
    evaluationPassRate: number; // percentage
    averageTimeToPass: string;
    traderRetentionRate: number; // percentage
    scalingSuccessRate: number; // percentage
  };
  
  platformDetails?: {
    name: string;
    type: 'MT4' | 'MT5' | 'cTrader' | 'DXTrade' | 'Tradovate' | 'NinjaTrader' | 'Rithmic' | 'ProjectX' | 'TradingView' | 'ThinkTrader' | 'Bookmap' | 'Quantower' | 'R | Trader' | 'ATAS' | 'Proprietary';
    features: string[];
    mobileSupport: boolean;
    webTrading: boolean;
  }[];

  // Company Information
  countryFounded?: string; // e.g., "Czech Republic", "United States", "United Kingdom"
  yearsInOperation?: number; // e.g., 10, 4, 8
  foundedYear?: number; // e.g., 2015, 2021, 2017
  headquarters?: string; // e.g., "Prague, Czech Republic", "Austin, Texas, USA"
  
  // Trust & Credibility Metrics
  trustScore?: number; // 1-5 scale (e.g., 4.9, 4.5, 4.3)
  trustedByUsers?: number; // "Trusted by 1,933 users"
  verificationStatus?: 'verified' | 'pending' | 'flagged' | 'partial';
  regulatoryCompliance?: string; // e.g., "FCA Regulated", "ISO Certified"
  industryAwards?: string[]; // e.g., ["Best Prop Firm 2024", "Innovation Award"]
  socialProof?: {
    trustpilotRating?: number;
    googleRating?: number;
    redditMentions?: number;
    youtubeReviews?: number;
  };
  
  // Pricing & Discounts
  originalPrice?: number; // Original challenge price
  discountedPrice?: number; // Discounted price
  discountPercentage?: number; // Discount percentage (e.g., 5, 8, 20)
  discountCode?: string; // Available discount code
  isDiscounted?: boolean; // Whether currently discounted
  
  // Trading Categories
  tradingCategories?: {
    forex?: boolean;
    futures?: boolean;
    crypto?: boolean;
    stocks?: boolean;
    indices?: boolean;
  };
  
  // Challenge Types
  challengeTypes?: {
    oneStep?: boolean;
    twoStep?: boolean;
    threeStep?: boolean;
    instant?: boolean;
  };
  challengePassRate?: number; // Percentage pass rate
  challengeDifficulty?: 'Easy' | 'Medium' | 'Hard';
  
  // Community Metrics
  communitySize?: number; // Total community size
  activeTraders?: number; // Active traders count
  successStories?: number; // Number of success stories

  // Verification & sourcing (optional to avoid breaking existing data)
  sources?: string[]; // e.g., ["Official site", "TradingPilot", "TheTrustedProp", "Payout Junction"]
  lastVerifiedAt?: string; // ISO date string

  details: {
    minFunding: number;
    maxFunding: number;
    profitSplit: number;
    maxDrawdown: number;
    dailyDrawdown: number;
    profitTarget: number;
    minTradingDays: number;
  };
  features: {
    scalingPlan: boolean;
    weekendHolding: boolean;
    newsTrading: boolean;
    expertAdvisors: boolean;
    fastPayouts: boolean;
    noTimeLimit: boolean;
  };
  overview: string;
  pros: string[];
  cons: string[];
  deal?: {
    description: string;
    isTopDeal?: boolean;
  };
}

export interface Article {
  id: ArticleId;
  title: string;
  summary: string;
  author: string;
  publishedDate: string;
  imageUrl: string;
  content: string;
}

export interface UserReview {
  id: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  verified: boolean;
  helpful: number;
  firmId: string;
  userLocation?: string;
  tradingExperience?: string;
  accountSize?: string;
  profitMade?: number;
  payoutReceived?: boolean;
}

// Trading Tools Types
export type ToolCategory = 'Options Flow' | 'Dark Pool Data' | 'Technical Analysis' | 'News & Sentiment' | 'Institutional Data' | 'Social Trading' | 'Algorithmic Trading';
export type MarketType = 'Stocks' | 'Options' | 'Crypto' | 'Forex' | 'Futures' | 'Bonds';

export interface TradingTool {
  id: string;
  name: string;
  shortName: string;
  logoUrl: string;
  officialWebsite: string;
  tagline: string;
  shortDescription: string;
  rating: number;
  reviewCount: number;
  affiliateUrl?: string;
  fpgAffiliateCode?: string;
  
  // Tool Categories
  categories: ToolCategory[];
  targetMarkets: MarketType[];
  
  
  // Features
  features: {
    realTimeData: boolean;
    alerts: boolean;
    backtesting: boolean;
    paperTrading: boolean;
    mobileApp: boolean;
    apiAccess: boolean;
    customIndicators: boolean;
    socialTrading: boolean;
    newsFeed: boolean;
    optionsFlow: boolean;
    darkPoolData: boolean;
    institutionalData: boolean;
    sentimentAnalysis: boolean;
    automatedTrading: boolean;
  };
  
  // Technical Details
  dataProviders: string[];
  supportedPlatforms: string[];
  dataLatency: string;
  updateFrequency: string;
  
  // Content
  overview: string;
  pros: string[];
  cons: string[];
  bestFor: string[];
  
  // Deal/Offer
  deal?: {
    description: string;
    isTopDeal: boolean;
  };}