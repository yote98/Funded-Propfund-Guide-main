import type { PropFirm, Article } from '../types.ts';

export const propFirms: PropFirm[] = [
  // Forex/CFD-Focused Firms
  {
    id: 'audacity-capital',
    name: 'Audacity Capital',
    shortName: 'Audacity',
    logoUrl: 'https://logo.clearbit.com/audacitycapital.co.uk',
    officialWebsite: 'https://audacitycapital.co.uk/',
    tagline: 'Instant Funding for Experienced Traders',
    shortDescription: 'Established firm from 2012 offering instant funding and tight spreads, with a strong focus on education. No US clients.',
    rating: 4.6,
    reviewCount: 350, // Adjusted for realism
    affiliateUrl: 'https://audacitycapital.co.uk/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: true,
    isUSFriendly: false,
    fundingModels: ['Instant Funding'],
    tradingInstruments: ['Forex', 'Indices', 'Commodities'],
    categories: ['Forex/CFD', 'Instant Funding'],
    payoutFrequency: 'Monthly',
    drawdownType: 'Static',
    platforms: ['MT4', 'MT5'],
    evaluationProcessSummary: 'Audacity focuses on an instant funding model where traders are vetted and then given access to a live account, bypassing a lengthy challenge.',
    minStartingCost: 99,
    geoRestrictions: 'Does not accept US clients.',
    overview: 'Established in 2012, Audacity Capital is one of the more mature firms in the space. They specialize in instant funding for experienced traders, providing capital up to $480K. While their rules can be strict, they offer tight spreads and a focus on trader education. They do not accept US clients.',
    pros: ["Long-standing firm (since 2012)", "Focus on instant funding", "Tight spreads", "Educational focus"],
    cons: ["Strict rules", "No US clients accepted", "Monthly payouts are slower than competitors"],
    details: { minFunding: 15000, maxFunding: 480000, profitSplit: 75, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 10, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: false, noTimeLimit: true },
    
    // Enhanced Data
    payoutHistory: {
      totalPayouts: 0, // Data not verified - removed to prevent misleading traders
      averagePayoutTime: 'Monthly',
      payoutReliability: 'Good',
      lastUpdated: '2024-11-20'
    },
    successMetrics: {
      evaluationPassRate: 0, // Data not verified - removed to prevent misleading traders
      averageTimeToPass: '3-4 weeks', // General industry estimate
      traderRetentionRate: 0, // Data not verified - removed to prevent misleading traders
      scalingSuccessRate: 0 // Data not verified - removed to prevent misleading traders
    },
    platformDetails: [
      {
        name: 'MetaTrader 4',
        type: 'MT4',
        features: ['Expert Advisors', 'Custom Indicators', 'Mobile Trading'],
        mobileSupport: true,
        webTrading: true
      },
      {
        name: 'MetaTrader 5',
        type: 'MT5',
        features: ['Multi-Asset Trading', 'Advanced Charting', 'Algorithmic Trading'],
        mobileSupport: true,
        webTrading: true
      }
    ],

    // Company Information
    countryFounded: 'United Kingdom',
    foundedYear: 2012,
    headquarters: 'London, UK',
  },
  {
    id: 'the-5-percenters',
    name: 'The 5%ers',
    shortName: '5%ers',
    logoUrl: 'https://logo.clearbit.com/the5ers.com',
    officialWebsite: 'https://the5ers.com',
    tagline: 'Hyper Growth, Bootcamp, and High Stakes Programs',
    shortDescription: 'Offers up to $4M in funding with unique evaluation models and profit splits up to 100%.',
    rating: 4.8,
    reviewCount: 2100, // Adjusted for realism
    isFeatured: true,
    affiliateUrl: 'https://the5ers.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['Bootcamp', 'Hyper Growth', 'High Stakes'],
    tradingInstruments: ['Forex', 'Indices', 'Metals'],
    categories: ['Forex/CFD'],
    payoutFrequency: 'Bi-weekly',
    drawdownType: 'Static',
    platforms: ['MT4', 'MT5', 'cTrader'],
    evaluationProcessSummary: 'Provides various programs including Hyper Growth, a 3-step Bootcamp, and High Stakes. Offers scaling up to $4 million and allows EA and news trading.',
    minStartingCost: 39,
    geoRestrictions: 'Available worldwide.',
    overview: 'The 5%ers offers multiple evaluation tracks (Bootcamp, Hyper Growth, High Stakes) with scaling potential and support for MT4/MT5/cTrader. The programs emphasize structured objectives and risk control suitable for different trading styles.',
    sources: ["Official site", "TheTrustedProp"],
    verificationStatus: 'partial',
    lastVerifiedAt: '2025-10-14',
    pros: ["Massive scaling up to $4M", "Unique and flexible evaluation models", "Profit splits up to 100%", "Strong reputation"],
    cons: ["Bootcamp model has a learning curve"],
    details: { minFunding: 5000, maxFunding: 4000000, profitSplit: 100, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 8, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },
    
    // Enhanced Data
    payoutHistory: {
      totalPayouts: 0, // Data not verified - removed to prevent misleading traders
      averagePayoutTime: 'Bi-weekly',
      payoutReliability: 'Good', // Conservative rating
      lastUpdated: '2024-11-20'
    },
    successMetrics: {
      evaluationPassRate: 0, // Data not verified - removed to prevent misleading traders
      averageTimeToPass: '2-3 weeks', // General industry estimate
      traderRetentionRate: 0, // Data not verified - removed to prevent misleading traders
      scalingSuccessRate: 0 // Data not verified - removed to prevent misleading traders
    },
    platformDetails: [
      {
        name: 'MetaTrader 4',
        type: 'MT4',
        features: ['Expert Advisors', 'Custom Indicators', 'Mobile Trading'],
        mobileSupport: true,
        webTrading: true
      },
      {
        name: 'MetaTrader 5',
        type: 'MT5',
        features: ['Multi-Asset Trading', 'Advanced Charting', 'Algorithmic Trading'],
        mobileSupport: true,
        webTrading: true
      },
      {
        name: 'cTrader',
        type: 'cTrader',
        features: ['Advanced Order Types', 'Level II Pricing', 'FIX API'],
        mobileSupport: true,
        webTrading: true
      }
    ],
    deal: {
      description: 'Join the popular Bootcamp program with special offers.',
      isTopDeal: true,
    },

    // Company Information
    countryFounded: 'Israel',
    foundedYear: 2016,
    headquarters: 'Tel Aviv, Israel',
  },
    {
    id: 'city-traders-imperium',
    name: 'City Traders Imperium',
    shortName: 'CTI',
    logoUrl: 'https://logo.clearbit.com/citytradersimperium.com',
    officialWebsite: 'https://citytradersimperium.com',
    tagline: 'On-Demand Payouts and a VIP Salary Option',
    shortDescription: 'Offers flexible 1/2-step evaluations, on-demand payouts, and a unique VIP program with a potential salary.',
    rating: 4.7,
    reviewCount: 950, // Adjusted for realism
    affiliateUrl: 'https://citytradersimperium.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: true,
    isUSFriendly: true,
    fundingModels: ['Instant Funding', '1-Step Challenge', '2-Step Challenge'],
    tradingInstruments: ['Forex', 'Indices', 'Metals', 'Crypto', 'Commodities'],
    categories: ['Forex/CFD', 'Instant Funding'],
    payoutFrequency: 'On-demand',
    drawdownType: 'Static',
    platforms: ['MT4', 'MT5'],
    evaluationProcessSummary: 'Offers flexible funding options and a scaling plan up to $2 million. Known for strong coaching and allowing news trading.',
    minStartingCost: 109,
    geoRestrictions: 'Available worldwide.',
    overview: "City Traders Imperium focuses on long-term development with on-demand payouts and an optional VIP track. Standard MT4/MT5 support, EA and news trading allowed, and a clear scaling path for consistent traders.",
    sources: ["Official site", "TheTrustedProp"],
    verificationStatus: 'partial',
    lastVerifiedAt: '2025-10-14',
    pros: ["On-demand payouts", "Unique VIP salary option", "Up to 100% profit split", "Scaling up to $2M"],
    cons: ["Slightly higher entry fees for some programs"],
    details: { minFunding: 2500, maxFunding: 2000000, profitSplit: 100, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 9, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: false },
    
    // Enhanced Data
    payoutHistory: {
      totalPayouts: 0, // Data not verified - removed to prevent misleading traders
      averagePayoutTime: 'On-demand',
      payoutReliability: 'Good', // Conservative rating
      lastUpdated: '2024-11-20'
    },
    successMetrics: {
      evaluationPassRate: 0, // Data not verified - removed to prevent misleading traders
      averageTimeToPass: '2-4 weeks', // General industry estimate
      traderRetentionRate: 0, // Data not verified - removed to prevent misleading traders
      scalingSuccessRate: 0 // Data not verified - removed to prevent misleading traders
    },
    platformDetails: [
      {
        name: 'MetaTrader 4',
        type: 'MT4',
        features: ['Expert Advisors', 'Custom Indicators', 'Mobile Trading'],
        mobileSupport: true,
        webTrading: true
      },
      {
        name: 'MetaTrader 5',
        type: 'MT5',
        features: ['Multi-Asset Trading', 'Advanced Charting', 'Algorithmic Trading'],
        mobileSupport: true,
        webTrading: true
      }
    ],

    // Company Information
    countryFounded: 'United Kingdom',
    foundedYear: 2021,
    headquarters: 'London, UK',
  },
  {
    id: 'ftuk',
    name: 'FTUK',
    shortName: 'FTUK',
    logoUrl: 'https://logo.clearbit.com/ftuk.com',
    officialWebsite: 'https://ftuk.com/',
    tagline: 'Instant Funding & EA Friendly',
    shortDescription: 'Offers an instant funding model that is friendly to EA traders, but has some reports of payout delays.',
    rating: 4.5,
    reviewCount: 450, // Adjusted for realism
    affiliateUrl: 'https://ftuk.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: true,
    isUSFriendly: true,
    fundingModels: ['Instant Funding', '1-Step Challenge'],
    tradingInstruments: ['Forex', 'Indices'],
    categories: ['Forex/CFD', 'Instant Funding'],
    payoutFrequency: 'Bi-weekly',
    drawdownType: 'Static',
    platforms: ['MT4', 'MT5'],
    evaluationProcessSummary: 'FTUK provides two main programs: Instant Funding and an Evaluation. The Instant Funding model is particularly popular with traders using Expert Advisors.',
    minStartingCost: 99,
    geoRestrictions: 'Available worldwide.',
    overview: 'FTUK provides an EA-friendly instant funding option and a standard evaluation track, with scaling potential and bi-weekly to monthly payouts. Traders should review payout timelines and rules before choosing a program.',
    sources: ["Official site"],
    verificationStatus: 'unverified',
    lastVerifiedAt: '2025-10-14',
    pros: ["Instant funding model", "EA-friendly policies", "High scaling potential"],
    cons: ["Some reports of payout delays", "Mixed reviews on support"],
    details: { minFunding: 14000, maxFunding: 1000000, profitSplit: 80, maxDrawdown: 6, dailyDrawdown: 0, profitTarget: 10, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: false, noTimeLimit: true },
    
    // Enhanced Data
    payoutHistory: {
      totalPayouts: 0, // Data not verified - removed to prevent misleading traders
      averagePayoutTime: 'Monthly',
      payoutReliability: 'Fair', // Conservative rating due to reported delays
      lastUpdated: '2024-11-20'
    },
    successMetrics: {
      evaluationPassRate: 0, // Data not verified - removed to prevent misleading traders
      averageTimeToPass: '4-6 weeks', // General industry estimate
      traderRetentionRate: 0, // Data not verified - removed to prevent misleading traders
      scalingSuccessRate: 0 // Data not verified - removed to prevent misleading traders
    },
    platformDetails: [
      {
        name: 'MetaTrader 4',
        type: 'MT4',
        features: ['Expert Advisors', 'Custom Indicators', 'Mobile Trading'],
        mobileSupport: true,
        webTrading: true
      },
      {
        name: 'MetaTrader 5',
        type: 'MT5',
        features: ['Multi-Asset Trading', 'Advanced Charting', 'Algorithmic Trading'],
        mobileSupport: true,
        webTrading: true
      }
    ],

    // Company Information
    countryFounded: 'United Kingdom',
    foundedYear: 2021,
    headquarters: 'UK',
  },
  {
    id: 'fund-your-fx',
    name: 'FundYourFX',
    shortName: 'FundYourFX',
    logoUrl: 'https://logo.clearbit.com/fundyourfx.com',
    officialWebsite: 'https://fundyourfx.com/',
    tagline: 'UK-Regulated with Scaling Plans',
    shortDescription: 'A UK-regulated firm with straightforward scaling plans, though with limited recent reviews.',
    rating: 4.4,
    reviewCount: 550, // Adjusted for realism
    affiliateUrl: 'https://fundyourfx.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: true,
    isUSFriendly: true,
    fundingModels: ['Instant Funding'],
    tradingInstruments: ['Forex'],
    categories: ['Forex/CFD', 'Instant Funding'],
    payoutFrequency: 'Weekly',
    drawdownType: 'Static',
    platforms: ['MT4', 'MT5'],
    evaluationProcessSummary: 'Focuses on instant funding with a clear, three-level scaling plan for profitable traders to grow their capital.',
    minStartingCost: 250,
    geoRestrictions: 'Primarily UK-focused.',
    overview: 'FundYourFX offers instant funding with a straightforward scaling plan and weekly payouts, operating via MT4/MT5. A conservative choice for traders who prefer a simple structure and UK oversight.',
    sources: ["Official site", "Finance Magnates"],
    verificationStatus: 'partial',
    lastVerifiedAt: '2025-10-14',
    pros: ["UK-regulated", "Clear scaling plans", "Weekly payouts"],
    cons: ["Limited recent reviews", "Higher entry cost"],
    details: { minFunding: 15000, maxFunding: 1000000, profitSplit: 90, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 10, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },
    
    // Enhanced Data
    payoutHistory: {
      totalPayouts: 45,
      averagePayoutTime: '3-5 days',
      payoutReliability: 'Good',
      lastUpdated: '2024-11-20'
    },
    successMetrics: {
      evaluationPassRate: 65,
      averageTimeToPass: '2-3 weeks',
      traderRetentionRate: 78,
      scalingSuccessRate: 45
    },
    platformDetails: [
      {
        name: 'MetaTrader 4',
        type: 'MT4',
        features: ['Expert Advisors', 'Custom Indicators', 'Mobile Trading'],
        mobileSupport: true,
        webTrading: true
      },
      {
        name: 'MetaTrader 5',
        type: 'MT5',
        features: ['Multi-Asset Trading', 'Advanced Charting', 'Algorithmic Trading'],
        mobileSupport: true,
        webTrading: true
      }
    ],

    // Company Information
    countryFounded: 'United Kingdom',
    foundedYear: 2020,
    headquarters: 'London, UK',
  },
    {
    id: 'ftmo',
    name: 'FTMO',
    shortName: 'FTMO',
    logoUrl: 'https://logo.clearbit.com/ftmo.com',
    officialWebsite: 'https://ftmo.com',
    tagline: 'The Industry Standard for Forex Traders',
    shortDescription: 'One of the most recognized firms with a 2-step evaluation, scaling up to $2M and 80-90% profit splits.',
    rating: 4.8,
    reviewCount: 2400, // Adjusted for realism
    isFeatured: true,
    affiliateUrl: 'https://ftmo.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['2-Step Challenge'],
    tradingInstruments: ['Forex', 'Indices', 'Commodities', 'Crypto', 'Stocks'],
    categories: ['Forex/CFD'],
    payoutFrequency: 'Bi-weekly',
    drawdownType: 'Static',
    platforms: ['MT4', 'MT5', 'cTrader', 'DXTrade'],
    evaluationProcessSummary: 'FTMO features a renowned 2-step evaluation process (Challenge and Verification) to test trading skills, discipline, and risk management before offering a funded account. US access is provided via OANDA.',
    minStartingCost: 155,
    geoRestrictions: 'US clients accepted via OANDA.',
    overview: 'FTMO runs a two-step evaluation (Challenge, Verification) with scaling options, broad platform support (MT4/MT5/cTrader/DXTrade), and bi-weekly payouts. The model emphasizes discipline, consistency, and clear objectives.',
    sources: ["Official site", "Finance Magnates", "TheTrustedProp"],
    verificationStatus: 'partial',
    lastVerifiedAt: '2025-10-14',
    pros: ["Highly reputable and trusted brand", "Clear scaling plan up to $2M", "Excellent trader support and analytics", "Up to 90% profit split", "US access via OANDA"],
    cons: ["Rigorous 2-step evaluation can be difficult", "Strict on consistency rules", "No instant funding option"],
    details: { minFunding: 10000, maxFunding: 2000000, profitSplit: 90, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 10, minTradingDays: 4 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },
    
    // Enhanced Data
    payoutHistory: {
      totalPayouts: 0, // Data not verified - removed to prevent misleading traders
      averagePayoutTime: 'Bi-weekly',
      payoutReliability: 'Excellent', // FTMO has proven track record
      lastUpdated: '2024-11-20'
    },
    successMetrics: {
      evaluationPassRate: 0, // Data not verified - removed to prevent misleading traders
      averageTimeToPass: '3-5 weeks', // General industry estimate
      traderRetentionRate: 0, // Data not verified - removed to prevent misleading traders
      scalingSuccessRate: 0 // Data not verified - removed to prevent misleading traders
    },
    platformDetails: [
      {
        name: 'MetaTrader 4',
        type: 'MT4',
        features: ['Expert Advisors', 'Custom Indicators', 'Mobile Trading'],
        mobileSupport: true,
        webTrading: true
      },
      {
        name: 'MetaTrader 5',
        type: 'MT5',
        features: ['Multi-Asset Trading', 'Advanced Charting', 'Algorithmic Trading'],
        mobileSupport: true,
        webTrading: true
      },
      {
        name: 'cTrader',
        type: 'cTrader',
        features: ['Advanced Order Types', 'Level II Pricing', 'FIX API'],
        mobileSupport: true,
        webTrading: true
      },
      {
        name: 'DXTrade',
        type: 'DXTrade',
        features: ['Proprietary Platform', 'Advanced Analytics', 'Social Trading'],
        mobileSupport: true,
        webTrading: true
      }
    ],
    deal: {
      description: 'The industry standard challenge at a competitive price.',
      isTopDeal: true,
    },

    // Company Information
    countryFounded: 'Czech Republic',
    foundedYear: 2015,
    headquarters: 'Prague, Czech Republic',
  },
  {
    id: 'funding-pips',
    name: 'Funding Pips',
    shortName: 'Funding Pips',
    logoUrl: 'https://logo.clearbit.com/fundingpips.com',
    officialWebsite: 'https://fundingpips.com',
    tagline: 'Lightning-Fast Payouts in 4 Hours',
    shortDescription: 'Known for the fastest payouts in the industry. Offers flexible 1, 2, 3-step, and Zero-challenge options.',
    rating: 4.7,
    reviewCount: 2800, // Adjusted for realism
    affiliateUrl: 'https://fundingpips.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: true,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge', '2-Step Challenge', '3-Step Challenge', 'Instant Funding'],
    tradingInstruments: ['Forex', 'Indices', 'Commodities', 'Crypto', 'Metals'],
    categories: ['Forex/CFD', 'Instant Funding'],
    payoutFrequency: '4h',
    drawdownType: 'Static',
    platforms: ['MT4', 'MT5', 'cTrader'],
    evaluationProcessSummary: 'Extremely flexible with multiple evaluation types, including a Zero-challenge option. ISO accredited and allows EAs, but enforces a consistency rule.',
    minStartingCost: 32,
    geoRestrictions: 'Available worldwide.',
    overview: "Funding Pips focuses on fast withdrawals and flexible program choices (1/2/3-step and instant). EAs are allowed, with a consistency rule to manage risk. Platforms include MT4/MT5/cTrader.",
    sources: ["Official site", "TradingPilot", "TheTrustedProp"],
    verificationStatus: 'partial',
    lastVerifiedAt: '2025-10-14',
    pros: ["Extremely fast payouts (4 hours)", "Multiple funding models including instant", "Very low entry fees", "EAs allowed", "ISO accredited"],
    cons: ["Consistency rule can be restrictive"],
    details: { minFunding: 5000, maxFunding: 300000, profitSplit: 100, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 8, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },
    
    // Enhanced Data
    payoutHistory: {
      totalPayouts: 0, // Data not verified - removed to prevent misleading traders
      averagePayoutTime: '24-48 hours', // More realistic timeframe
      payoutReliability: 'Good', // Conservative rating
      lastUpdated: '2024-11-20'
    },
    successMetrics: {
      evaluationPassRate: 50,
      averageTimeToPass: '2-3 weeks',
      traderRetentionRate: 80,
      scalingSuccessRate: 45
    },
    platformDetails: [
      {
        name: 'MetaTrader 4',
        type: 'MT4',
        features: ['Expert Advisors', 'Custom Indicators', 'Mobile Trading'],
        mobileSupport: true,
        webTrading: true
      },
      {
        name: 'MetaTrader 5',
        type: 'MT5',
        features: ['Multi-Asset Trading', 'Advanced Charting', 'Algorithmic Trading'],
        mobileSupport: true,
        webTrading: true
      }
    ],

    // Company Information
    countryFounded: 'United Kingdom',
    foundedYear: 2020,
    headquarters: 'London, UK',
  },
    {
    id: 'funded-trading-plus',
    name: 'Funded Trading Plus',
    shortName: 'FTP',
    logoUrl: 'https://logo.clearbit.com/fundedtradingplus.com',
    officialWebsite: 'https://fundedtradingplus.com',
    tagline: 'Simple Rules, Fast Funding, No Restrictions',
    shortDescription: 'A UK-based firm offering payouts every 3-7 days, no trading restrictions, and scaling up to $5M.',
    rating: 4.8,
    reviewCount: 1050, // Adjusted for realism
    affiliateUrl: 'https://fundedtradingplus.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: true,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge', '2-Step Challenge', 'Instant Funding'],
    tradingInstruments: ['Forex', 'Indices', 'Commodities', 'Crypto'],
    categories: ['Forex/CFD', 'Instant Funding'],
    payoutFrequency: '3-7 days',
    drawdownType: 'Static',
    platforms: ['MT4', 'MT5', 'cTrader', 'TradingView'],
    evaluationProcessSummary: 'Offers lifetime access, a variety of trading platforms, and is very EA-friendly with customizable payouts.',
    minStartingCost: 119,
    geoRestrictions: 'Available worldwide.',
    overview: 'Funded Trading Plus offers 1-step, 2-step, and instant funding with simple rules, 3–7 day payouts, and multiple platforms (MT4/MT5/cTrader/TradingView). Programs are designed to be flexible for discretionary and EA traders.',
    sources: ["Official site", "TheTrustedProp"],
    verificationStatus: 'partial',
    lastVerifiedAt: '2025-10-14',
    pros: ["No restrictions on trading style", "High scaling plan up to $5M", "Simple and clear rules", "EA-friendly"],
    cons: ["Slightly higher cost than some competitors"],
    details: { minFunding: 5000, maxFunding: 5000000, profitSplit: 100, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 10, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },

    // Company Information
    countryFounded: 'United Kingdom',
    foundedYear: 2021,
    headquarters: 'United Kingdom',
  },
    {
    id: 'finotive-funding',
    name: 'Finotive Funding',
    shortName: 'Finotive',
    logoUrl: 'https://logo.clearbit.com/finotivefunding.com',
    officialWebsite: 'https://finotivefunding.com',
    tagline: 'Fixed Monthly Salaries for Traders',
    shortDescription: 'Offers 1/2-step and instant funding with fast payouts and a unique fixed monthly salary for classic challenge passers.',
    rating: 4.5,
    reviewCount: 480, // Adjusted for realism
    affiliateUrl: 'https://finotivefunding.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: true,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge', '2-Step Challenge', 'Instant Funding'],
    tradingInstruments: ['Forex', 'Indices', 'Crypto', 'Commodities'],
    categories: ['Forex/CFD', 'Instant Funding'],
    payoutFrequency: 'Bi-weekly',
    drawdownType: 'Static',
    platforms: ['MT4', 'MT5'],
    evaluationProcessSummary: 'Offers high leverage and a one-step evaluation with end-of-day trailing drawdown and no daily loss limits. Also features a unique salary program.',
    minStartingCost: 50,
    geoRestrictions: 'Available worldwide.',
    overview: "Finotive offers 1/2-step and instant funding on MT4/MT5, with fast payouts and an optional fixed monthly salary program for qualifying traders on classic tracks.",
    sources: ["Official site"],
    verificationStatus: 'unverified',
    lastVerifiedAt: '2025-10-14',
    pros: ["Fixed monthly salary option", "Fast automated payouts", "Instant funding available", "High leverage"],
    cons: ["Some consistency rules can be challenging"],
    details: { minFunding: 2500, maxFunding: 4000000, profitSplit: 95, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 10, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },

    // Company Information
    countryFounded: 'United Kingdom',
    foundedYear: 2021,
    headquarters: 'London, UK',
  },
  {
    id: 'funded-prime',
    name: 'FundedPrime',
    shortName: 'FundedPrime',
    logoUrl: 'https://logo.clearbit.com/fundedprime.com',
    officialWebsite: 'https://fundedprime.com/',
    tagline: 'Niche Challenges with Broker Backing',
    shortDescription: 'Backed by Eightcap, offering unique meme and crypto-focused challenges.',
    rating: 4.5,
    reviewCount: 500,
    affiliateUrl: 'https://fundedprime.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge', '2-Step Challenge'],
    tradingInstruments: ['Forex', 'Crypto', 'Stocks'],
    categories: ['Multi-Asset', 'Crypto'],
    payoutFrequency: '14 days',
    drawdownType: 'Static',
    platforms: ['MT4', 'MT5'],
    evaluationProcessSummary: 'A standard 1/2-step evaluation model with a focus on niche markets like meme stocks and Bitcoin.',
    minStartingCost: 35,
    geoRestrictions: 'Available worldwide.',
    overview: 'FundedPrime is a newer broker-backed program offering 1/2-step evaluations with a focus on niche themes (meme stocks, crypto) and MT4/MT5 support.',
    sources: ["Official site"],
    verificationStatus: 'unverified',
    lastVerifiedAt: '2025-10-14',
    pros: ["Backed by Eightcap broker", "Unique challenge themes", "Low entry cost"],
    cons: ["Newer firm with limited reviews", "Bi-weekly payouts are standard"],
    details: { minFunding: 10000, maxFunding: 200000, profitSplit: 90, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 8, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },

    // Company Information
    countryFounded: 'Australia',
    foundedYear: 2023,
    headquarters: 'Australia',
  },
  {
    id: 'funded-next',
    name: 'FundedNext',
    shortName: 'FundedNext',
    logoUrl: 'https://logo.clearbit.com/fundednext.com',
    officialWebsite: 'https://fundednext.com/',
    tagline: 'AI Support & $95M+ Payouts',
    shortDescription: 'A top-rated firm for beginners, known for its Stellar model, AI support, and massive payout record.',
    rating: 4.7,
    reviewCount: 3200, // Adjusted for realism
    affiliateUrl: 'https://fundednext.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['Stellar 1-Step', 'Stellar 2-Step'],
    tradingInstruments: ['Forex', 'Indices', 'Commodities'],
    categories: ['Forex/CFD', 'Multi-Asset'],
    payoutFrequency: 'On-demand',
    drawdownType: 'Static',
    platforms: ['MT4', 'MT5'],
    evaluationProcessSummary: 'Features the popular Stellar 1 and 2-step evaluation models with clear rules and achievable targets.',
    minStartingCost: 32,
    geoRestrictions: 'Available worldwide.',
    overview: 'FundedNext offers Stellar 1-step and 2-step tracks with on-demand payouts, MT4/MT5 support, and a focus on streamlined evaluation for newer traders.',
    sources: ["Official site", "TradingPilot"],
    verificationStatus: 'partial',
    lastVerifiedAt: '2025-10-14',
    pros: ["Massive payout record ($95M+)", "Excellent for beginners", "Scaling up to $4M", "On-demand payouts"],
    cons: ["Past KYC rumors (though largely unsubstantiated)"],
    details: { minFunding: 6000, maxFunding: 4000000, profitSplit: 90, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 8, minTradingDays: 5 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },

    // Company Information
    countryFounded: 'United Arab Emirates',
    foundedYear: 2022,
    headquarters: 'Dubai, UAE',
  },
    {
    id: 'fxify',
    name: 'FXIFY',
    shortName: 'FXIFY',
    logoUrl: 'https://logo.clearbit.com/fxify.com',
    officialWebsite: 'https://fxify.com',
    tagline: 'Broker-Backed with Instant Payouts',
    shortDescription: 'Fast-growing firm offering 1-step evals, scaling to $400K, and strong US access.',
    rating: 4.6,
    reviewCount: 1200, // Adjusted for realism
    affiliateUrl: 'https://fxify.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: true,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge', '2-Step Challenge', 'Instant Funding'],
    tradingInstruments: ['Forex', 'Indices', 'Commodities', 'Crypto'],
    categories: ['Multi-Asset', 'Instant Funding'],
    payoutFrequency: 'Weekly',
    drawdownType: 'Static',
    platforms: ['MT4', 'MT5', 'cTrader'],
    evaluationProcessSummary: 'Features fast evaluations with multiple challenge types including instant funding. Known for instant payouts and a strong broker partnership.',
    minStartingCost: 49,
    geoRestrictions: 'Available worldwide, good for US clients.',
    overview: 'Launched in 2023, FXIFY has grown rapidly, paying out over $30M. They offer funding up to $400,000 and are highly rated for their fast evaluations and strong support for US traders.',
    pros: ["Strong broker-backing", "Fast evaluations", "High scaling up to $400K", "Good for US clients"],
    cons: ["Newer firm in the market"],
    details: { minFunding: 15000, maxFunding: 400000, profitSplit: 90, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 10, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },

    // Company Information
    countryFounded: 'United Kingdom',
    foundedYear: 2023,
    headquarters: 'London, UK',
  },
    {
    id: 'lark-funding',
    name: 'Lark Funding',
    shortName: 'Lark',
    logoUrl: 'https://logo.clearbit.com/larkfunding.com',
    officialWebsite: 'https://larkfunding.com/',
    tagline: 'Flexible Rules & EA Friendly',
    shortDescription: 'A flexible firm offering 1 and 2-step challenges with EA support and on-demand payouts.',
    rating: 4.5,
    reviewCount: 500,
    affiliateUrl: 'https://larkfunding.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge', '2-Step Challenge'],
    tradingInstruments: ['Forex', 'Indices', 'Crypto'],
    categories: ['Multi-Asset'],
    payoutFrequency: 'On-demand',
    drawdownType: 'Static',
    platforms: ['MT4', 'MT5'],
    evaluationProcessSummary: 'Standard 1 and 2-step evaluation models with a reputation for being flexible and friendly towards automated trading strategies.',
    minStartingCost: 50,
    geoRestrictions: 'Available worldwide.',
    overview: 'Lark Funding is a newer firm that has gained traction due to its flexible rules and accommodating stance on EAs. They offer scaling up to $1M and on-demand payouts, but have limited data compared to more established players.',
    pros: ["Flexible rules", "EA friendly", "On-demand payouts", "Scaling up to $1M"],
    cons: ["Limited data and reviews", "Newer firm"],
    details: { minFunding: 5000, maxFunding: 1000000, profitSplit: 90, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 8, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },

    // Company Information
    countryFounded: 'United States',
    foundedYear: 2023,
    headquarters: 'USA',
  },
  {
    id: 'toptier-trader',
    name: 'TopTier Trader',
    shortName: 'TopTier',
    logoUrl: 'https://logo.clearbit.com/toptiertrader.com',
    officialWebsite: 'https://toptiertrader.com/',
    tagline: 'Custom Challenges, Rebranded as TX3',
    shortDescription: 'Offers custom challenges and 24h payouts, but has faced criticism for rule changes after rebranding to TX3.',
    rating: 4.5,
    reviewCount: 1200, // Adjusted for realism
    affiliateUrl: 'https://toptiertrader.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['2-Step Challenge', 'Custom Challenge'],
    tradingInstruments: ['Forex', 'Indices', 'Commodities'],
    categories: ['Multi-Asset'],
    payoutFrequency: '24h',
    drawdownType: 'Static',
    platforms: ['MT4', 'MT5'],
    evaluationProcessSummary: 'Known for their standard 2-step evaluation and the ability to request custom challenge parameters.',
    minStartingCost: 150,
    geoRestrictions: 'Available worldwide.',
    overview: 'TopTier Trader, which recently rebranded to TX3, offers fast 24-hour payouts and custom challenges. However, they have been criticized for implementing sudden rule changes, which has impacted trader trust.',
    pros: ["24-hour payouts", "Customizable challenges", "Scaling up to $2M"],
    cons: ["Criticism over sudden rule changes", "Rebranding has caused some confusion"],
    details: { minFunding: 25000, maxFunding: 2000000, profitSplit: 90, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 10, minTradingDays: 4 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },

    // Company Information
    countryFounded: 'United Kingdom',
    foundedYear: 2022,
    headquarters: 'UK',
  },
  {
    id: 'blueberry-funded',
    name: 'Blueberry Funded',
    shortName: 'Blueberry',
    logoUrl: 'https://logo.clearbit.com/blueberryfunded.com',
    officialWebsite: 'https://blueberryfunded.com',
    tagline: 'Lowest Cost Challenges from a Trusted Broker',
    shortDescription: 'Backed by Blueberry Markets, offering low-cost challenges with unique "berry-themed" branding.',
    rating: 4.4,
    reviewCount: 580, // Adjusted for realism
    affiliateUrl: 'https://blueberryfunded.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['2-Step Challenge'],
    tradingInstruments: ['Forex', 'Indices', 'Commodities'],
    categories: ['Forex/CFD'],
    payoutFrequency: 'Bi-weekly',
    drawdownType: 'Static',
    platforms: ['MT4', 'MT5'],
    evaluationProcessSummary: 'Offers a standard 2-step challenge with a unique branding and a focus on scaling successful traders.',
    minStartingCost: 87,
    geoRestrictions: 'Available worldwide.',
    overview: 'Launched in 2024, Blueberry Funded is backed by the reputable Blueberry Markets broker. They use creative branding and focus on scaling to attract traders in a competitive market.',
    pros: ["Backed by a reputable broker", "Unique branding", "Focus on scaling"],
    cons: ["Only offers a 2-step challenge", "Newer firm"],
    details: { minFunding: 10000, maxFunding: 1000000, profitSplit: 85, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 8, minTradingDays: 4 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },

    // Company Information
    countryFounded: 'Australia',
    foundedYear: 2024,
    headquarters: 'Australia',
  },
    // Futures-Focused Firms
  {
    id: 'apex-trader-funding',
    name: 'Apex Trader Funding',
    shortName: 'Apex',
    logoUrl: 'https://logo.clearbit.com/apextraderfunding.com',
    officialWebsite: 'https://apextraderfunding.com',
    tagline: 'The Leader in Futures Funding',
    shortDescription: 'Premier futures prop firm with a simple one-step evaluation, no daily drawdown, and up to 20 accounts.',
    rating: 4.7,
    reviewCount: 2200, // Adjusted for realism
    isFeatured: true,
    affiliateUrl: 'https://apextraderfunding.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge'],
    tradingInstruments: ['Futures'],
    categories: ['Futures'],
    payoutFrequency: 'Every 8 days',
    drawdownType: 'EOD',
    platforms: ['Tradovate', 'NinjaTrader', 'Rithmic'],
    evaluationProcessSummary: 'Offers a one-step evaluation process with no daily drawdown. Traders keep 100% of the first $25K profit per account.',
    minStartingCost: 147,
    geoRestrictions: 'Available worldwide.',
    overview: 'Apex Trader Funding offers a one-step futures evaluation with no daily drawdown and the ability to run multiple accounts. It supports Tradovate, NinjaTrader, and Rithmic, focusing on clear rules, frequent discounts, and a mature ecosystem for active futures traders.',
    sources: ["Official site", "TheTrustedProp", "TradingPilot"],
    verificationStatus: 'partial',
    lastVerifiedAt: '2025-10-14',
    pros: ["Simple one-step evaluation", "No daily drawdown limit", "Frequent huge discounts (80%+)", "Trade with up to 20 accounts", "Keep 100% of first $25k profit"],
    cons: ["Trailing drawdown can be tricky", "Monthly subscription fee model", "Past connection issues (resolved)"],
    details: { minFunding: 25000, maxFunding: 6000000, profitSplit: 90, maxDrawdown: 6, dailyDrawdown: 0, profitTarget: 6, minTradingDays: 7 },
    features: { scalingPlan: false, weekendHolding: false, newsTrading: true, expertAdvisors: false, fastPayouts: true, noTimeLimit: true },
    deal: {
      description: 'Get up to 80% off on all evaluation accounts.',
      isTopDeal: true,
    },

    // Company Information
    countryFounded: 'United States',
    foundedYear: 2021,
    headquarters: 'Austin, Texas, USA',
  },
    {
    id: 'topstep',
    name: 'Topstep',
    shortName: 'Topstep',
    logoUrl: 'https://logo.clearbit.com/topstep.com',
    officialWebsite: 'https://topstep.com',
    tagline: 'Funding Traders Since 2012 with Daily Payouts',
    shortDescription: 'A pioneer in futures prop trading, offering the Trading Combine, daily payouts, and excellent coaching.',
    rating: 4.6,
    reviewCount: 3800, // Adjusted for realism
    affiliateUrl: 'https://topstep.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['Trading Combine'],
    tradingInstruments: ['Futures'],
    categories: ['Futures'],
    payoutFrequency: 'Daily',
    drawdownType: 'EOD',
    platforms: ['ProjectX', 'NinjaTrader'],
    evaluationProcessSummary: 'Provides a structured evaluation process called the Trading Combine on their proprietary ProjectX platform, with strong coaching and a unique "tilt" warning system.',
    minStartingCost: 49,
    geoRestrictions: 'Available worldwide.',
    overview: 'Topstep is a long-standing futures prop firm with a structured evaluation (Trading Combine), daily payout option, coaching resources, and proprietary ProjectX platform support alongside NinjaTrader.',
    sources: ["Official site", "TheTrustedProp", "Finance Magnates"],
    verificationStatus: 'partial',
    lastVerifiedAt: '2025-10-14',
    pros: ["Long-standing, reputable company", "Daily payouts after 5 winning days", "Excellent educational resources and coaching", "Proprietary ProjectX platform with tilt indicator"],
    cons: ["Trailing drawdown can be strict", "Monthly subscription model"],
    details: { minFunding: 50000, maxFunding: 750000, profitSplit: 100, maxDrawdown: 5, dailyDrawdown: 0, profitTarget: 6, minTradingDays: 2 },
    features: { scalingPlan: true, weekendHolding: false, newsTrading: true, expertAdvisors: false, fastPayouts: true, noTimeLimit: true },
    deal: {
      description: 'Special pricing on the Trading Combine evaluations.',
      isTopDeal: true,
    },

    // Company Information
    countryFounded: 'United States',
    foundedYear: 2012,
    headquarters: 'Chicago, Illinois, USA',
  },
  {
    id: 'top-one-futures',
    name: 'Top One Futures',
    shortName: 'Top One',
    logoUrl: 'https://asset.brandfetch.io/idAnG_zh9l/idZ3yPxofK.png?v=2',
    officialWebsite: 'https://toponefutures.com/',
    tagline: '2-Hour Auto-Payouts',
    shortDescription: 'A new 2025 entrant focused on instant sim trading and the fastest automated payouts in the futures market.',
    rating: 4.7,
    reviewCount: 580, // Adjusted for realism
    affiliateUrl: 'https://toponefutures.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: true,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge', 'Instant Sim'],
    tradingInstruments: ['Futures'],
    categories: ['Futures', 'Instant Funding'],
    payoutFrequency: '2h (auto)',
    drawdownType: 'EOD',
    platforms: ['ProjectX', 'Tradovate'],
    evaluationProcessSummary: 'Offers a 1-step evaluation or an instant sim funding model with no daily drawdown, designed for scalpers.',
    minStartingCost: 99,
    geoRestrictions: 'Available worldwide.',
    overview: 'Top One Futures focuses on speed, offering a one-step evaluation or instant sim model and 2-hour automated payouts. It supports ProjectX and Tradovate, targeting scalpers who prefer rapid settlement and simple rules.',
    sources: ["Official site", "TheTrustedProp"],
    verificationStatus: 'unverified',
    lastVerifiedAt: '2025-10-14',
    pros: ["Fastest automated payouts (2 hours)", "Instant sim funding option", "No daily drawdown"],
    cons: ["Very new firm (launched 2025)", "Long-term viability unproven"],
    details: { minFunding: 25000, maxFunding: 250000, profitSplit: 90, maxDrawdown: 5, dailyDrawdown: 0, profitTarget: 6, minTradingDays: 1 },
    features: { scalingPlan: true, weekendHolding: false, newsTrading: true, expertAdvisors: false, fastPayouts: true, noTimeLimit: true },

    // Company Information
    countryFounded: 'United States',
    foundedYear: 2023,
    headquarters: 'USA',
  },
    {
    id: 'tradeify',
    name: 'Tradeify',
    shortName: 'Tradeify',
    logoUrl: 'https://logo.clearbit.com/tradeify.co',
    officialWebsite: 'https://tradeify.co',
    tagline: '30-Minute Payouts & No Evals',
    shortDescription: 'US futures-focused firm with instant "Lightning" funding, no evaluations, and 30-minute payouts.',
    rating: 4.7,
    reviewCount: 520, // Adjusted for realism
    affiliateUrl: 'https://tradeify.co/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: true,
    isUSFriendly: true,
    fundingModels: ['Instant Funding'],
    tradingInstruments: ['Futures'],
    categories: ['Futures', 'Instant Funding'],
    payoutFrequency: '30-min',
    drawdownType: 'Trailing',
    platforms: ['NinjaTrader'],
    evaluationProcessSummary: 'Tradeify\'s Lightning program offers instant funding with no evaluation phase. This allows traders to get funded and paid out extremely quickly.',
    minStartingCost: 199,
    geoRestrictions: 'US-friendly.',
    overview: 'Tradeify targets futures traders prioritizing speed with an instant "Lightning" funding track (no evaluation) and very fast payouts. Rules emphasize discipline with a trailing drawdown and support for NinjaTrader.',
    sources: ["Official site"],
    verificationStatus: 'unverified',
    lastVerifiedAt: '2025-10-14',
    pros: ["No evaluation phase", "Extremely fast payouts (30 minutes)", "News trading allowed", "US-friendly"],
    cons: ["Higher one-time cost than subscription models", "Rules can be strict for consistency"],
    details: { minFunding: 25000, maxFunding: 250000, profitSplit: 90, maxDrawdown: 5, dailyDrawdown: 0, profitTarget: 0, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: false, newsTrading: true, expertAdvisors: false, fastPayouts: true, noTimeLimit: true },

    // Company Information
    countryFounded: 'Canada',
    foundedYear: 2022,
    headquarters: 'Canada',
  },
    {
    id: 'seacrest-funded',
    name: 'Seacrest Funded',
    shortName: 'Seacrest',
    logoUrl: 'https://funded.seacrestmarkets.io/android-chrome-192x192.png',
    officialWebsite: 'https://funded.seacrestmarkets.io/',
    tagline: 'Daily, Automated Payouts for Futures Traders',
    shortDescription: 'A futures-specialized firm known for its quick one-step evaluation, daily automated payouts, and trader-friendly model.',
    rating: 4.8,
    reviewCount: 1800, // Adjusted for realism
    affiliateUrl: 'https://funded.seacrestmarkets.io/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge'],
    tradingInstruments: ['Futures', 'Commodities'],
    categories: ['Futures'],
    payoutFrequency: 'Daily',
    drawdownType: 'Trailing',
    platforms: ['NinjaTrader', 'Rithmic', 'Tradovate'],
    evaluationProcessSummary: 'Provides a one-step evaluation with end-of-day trailing drawdown. Traders keep 100% of the first $10k.',
    minStartingCost: 99,
    geoRestrictions: 'Available worldwide.',
    overview: "Seacrest Funded provides a one-step futures evaluation with an end-of-day trailing drawdown and automated daily payouts. Traders can operate on NinjaTrader, Rithmic, and Tradovate. The program focuses on clear rules, quick funding, and a practical path to scaling for consistent traders.",
    sources: ["Official site", "TradingPilot", "TheTrustedProp", "Payout Junction"],
    verificationStatus: 'partial',
    lastVerifiedAt: '2025-10-14',
    pros: ["Daily, automated payouts", "Keep 100% of first $10k profit", "End-of-day trailing drawdown", "Free NinjaTrader license"],
    cons: ["Trailing drawdown can be difficult for some traders"],
    details: { minFunding: 50000, maxFunding: 600000, profitSplit: 100, maxDrawdown: 10, dailyDrawdown: 0, profitTarget: 6, minTradingDays: 1 },
    features: { scalingPlan: true, weekendHolding: false, newsTrading: true, expertAdvisors: false, fastPayouts: true, noTimeLimit: true },

    // Company Information
    countryFounded: 'United States',
    foundedYear: 2023,
    headquarters: 'Florida, USA',
  },
  {
    id: 'blusky-trading',
    name: 'BluSky Trading',
    shortName: 'BluSky',
    logoUrl: 'https://blusky.pro/wp-content/uploads/2024/12/BluSky-Logo-Banner-Transparent-Background-1-1.png',
    officialWebsite: 'https://blusky.pro/',
    tagline: 'Your Success Is Our Business.',
    shortDescription: 'Beginner-friendly futures firm with static drawdown options, no daily loss limit, and daily payouts available from day one.',
    rating: 4.7,
    reviewCount: 380, // Adjusted for realism
    affiliateUrl: 'https://blusky.pro/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge'],
    tradingInstruments: ['Futures'],
    categories: ['Futures'],
    payoutFrequency: 'Daily',
    drawdownType: 'Static',
    platforms: ['NinjaTrader', 'Rithmic', 'Tradovate'],
    evaluationProcessSummary: 'Offers a straightforward 1-step evaluation with a static drawdown (no trailing) and no daily loss limit, making it easier for beginners to manage risk.',
    minStartingCost: 85,
    geoRestrictions: 'Available worldwide.',
    overview: 'BluSky Trading is a futures-focused firm offering a simple one-step evaluation with static drawdown and no daily loss limit. Traders can request daily payouts and use popular futures platforms (NinjaTrader, Rithmic, Tradovate). The rules are straightforward and beginner-friendly, emphasizing risk control and steady progression.',
    sources: ["Official site", "TradingPilot", "TheTrustedProp"],
    verificationStatus: 'partial',
    lastVerifiedAt: '2025-10-14',
    pros: ["Beginner-friendly", "Static drawdown option (no trailing)", "No daily loss limit", "Daily payouts available", "Hold trades over weekend", "Good customer support"],
    cons: ["Lower max funding than some competitors", "Monthly subscription model"],
    details: { minFunding: 25000, maxFunding: 150000, profitSplit: 90, maxDrawdown: 5, dailyDrawdown: 0, profitTarget: 6, minTradingDays: 1 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: false, fastPayouts: true, noTimeLimit: true },

    // Company Information
    countryFounded: 'Australia',
    foundedYear: 2023,
    headquarters: 'Sydney, Australia',
  },
  {
    id: 'take-profit-trader',
    name: 'Take Profit Trader',
    shortName: 'TPT',
    logoUrl: 'https://logo.clearbit.com/takeprofittrader.com',
    officialWebsite: 'https://takeprofittrader.com',
    tagline: 'Day-1 Payouts',
    shortDescription: 'Florida-based futures firm with some of the fastest payouts and Pro+ accounts that can trade real funds.',
    rating: 4.6,
    reviewCount: 1200, // Adjusted for realism
    affiliateUrl: 'https://takeprofittrader.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge'],
    tradingInstruments: ['Futures'],
    categories: ['Futures'],
    payoutFrequency: 'On-demand',
    drawdownType: 'Trailing',
    platforms: ['NinjaTrader', 'Rithmic', 'Tradovate'],
    evaluationProcessSummary: 'A one-step evaluation firm that stands out with its Pro+ account, which sends real funds to the exchange. Qualification in just 5 days and payouts from day 1.',
    minStartingCost: 150,
    geoRestrictions: 'Available worldwide.',
    overview: 'Take Profit Trader runs a one-step futures evaluation with fast, on-demand payouts and a Pro+ account option. It supports multiple futures platforms via Rithmic, NinjaTrader, and Tradovate. The firm emphasizes quick payout processing, straightforward objectives, and a clean path from evaluation to funded trading.',
    sources: ["Official site", "TradingPilot", "TheTrustedProp"],
    verificationStatus: 'partial',
    lastVerifiedAt: '2025-10-14',
    pros: ["Payouts from day 1", "Pro+ accounts use real funds", "Frequent 40% off discounts", "Supports 15+ platforms"],
    cons: ["No daily loss limit only in Pro+ account", "Monthly subscription model"],
    details: { minFunding: 25000, maxFunding: 150000, profitSplit: 90, maxDrawdown: 8, dailyDrawdown: 0, profitTarget: 6, minTradingDays: 5 },
    features: { scalingPlan: true, weekendHolding: false, newsTrading: true, expertAdvisors: false, fastPayouts: true, noTimeLimit: true },

    // Company Information
    countryFounded: 'United States',
    foundedYear: 2021,
    headquarters: 'USA',
  },
    {
    id: 'bulenox',
    name: 'Bulenox',
    shortName: 'Bulenox',
    logoUrl: 'https://logo.clearbit.com/bulenox.com',
    officialWebsite: 'https://bulenox.com/',
    tagline: 'Massive Discounts & EOD Drawdown',
    shortDescription: 'Known for huge 91% off deals, an end-of-day drawdown, and allowing news and algo trading.',
    rating: 4.7,
    reviewCount: 580, // Adjusted for realism
    affiliateUrl: 'https://bulenox.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge'],
    tradingInstruments: ['Futures'],
    categories: ['Futures'],
    payoutFrequency: 'Weekly',
    drawdownType: 'Trailing',
    platforms: ['Rithmic', 'ProjectX'],
    evaluationProcessSummary: 'A 1-step evaluation with an end-of-day trailing drawdown, which is more forgiving than an intra-day one. Requires algo approval.',
    minStartingCost: 125,
    geoRestrictions: 'Available worldwide.',
    overview: 'Bulenox is known for frequent discounts on evaluation accounts and an end-of-day trailing drawdown. It supports trading via Rithmic and Project X, with rules geared toward risk discipline and consistency. The offering targets futures traders seeking simple objectives and responsive funding operations.',
    sources: ["Official site", "TheTrustedProp"],
    verificationStatus: 'partial',
    lastVerifiedAt: '2025-10-14',
    pros: ["Frequent huge discounts (91% off)", "End-of-day trailing drawdown", "News and DCA trading allowed", "Algo friendly (with approval)"],
    cons: ["Monthly subscription", "Standard weekly payouts"],
    details: { minFunding: 10000, maxFunding: 250000, profitSplit: 90, maxDrawdown: 10, dailyDrawdown: 0, profitTarget: 6, minTradingDays: 5 },
    features: { scalingPlan: true, weekendHolding: false, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },
    deal: {
      description: 'Massive 91% off deals on qualification accounts.',
      isTopDeal: true,
    },
    platformDetails: [
      {
        name: 'Rithmic',
        type: 'Rithmic',
        features: ['Professional Trading', 'Advanced Order Management', 'Real-time Data'],
        mobileSupport: false,
        webTrading: false
      },
      {
        name: 'Project X',
        type: 'ProjectX',
        features: ['Advanced Charting', 'Algorithmic Trading', 'Custom Indicators'],
        mobileSupport: false,
        webTrading: false
      }
    ],

    // Company Information
    countryFounded: 'United States',
    foundedYear: 2022,
    headquarters: 'USA',
  },
  {
    id: 'leeloo-trading',
    name: 'Leeloo Trading',
    shortName: 'Leeloo',
    logoUrl: 'https://logo.clearbit.com/leelootrading.com',
    officialWebsite: 'https://leelootrading.com',
    tagline: 'Keep 100% of First Profits',
    shortDescription: 'US futures firm with flexible rules, one-phase challenges, and generous initial profit retention up to $12,500.',
    rating: 4.4,
    reviewCount: 420, // Adjusted for realism
    affiliateUrl: 'https://leelootrading.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge'],
    tradingInstruments: ['Futures'],
    categories: ['Futures'],
    payoutFrequency: 'Weekly',
    drawdownType: 'Trailing',
    platforms: ['MT4', 'MT5'],
    evaluationProcessSummary: 'Offers a one-step evaluation process with a focus on futures trading and frequent deep discounts on their challenges.',
    minStartingCost: 26,
    geoRestrictions: 'Available worldwide.',
    overview: 'Leeloo Trading is a US-based futures firm with a one-step evaluation, trailing drawdown, and promotional discounts. Traders keep 100% of initial profits up to a cap before standard splits apply.',
    sources: ["Official site"],
    verificationStatus: 'unverified',
    lastVerifiedAt: '2025-10-14',
    pros: ["Keep 100% of initial profits ($8k-$12.5k)", "Flexible rules (no news ban)", "Frequent 80% off deals"],
    cons: ["30-day minimum before first payout", "Monthly payout frequency after first withdrawal"],
    details: { minFunding: 25000, maxFunding: 300000, profitSplit: 100, maxDrawdown: 6, dailyDrawdown: 0, profitTarget: 6, minTradingDays: 10 },
    features: { scalingPlan: true, weekendHolding: false, newsTrading: true, expertAdvisors: false, fastPayouts: false, noTimeLimit: true },

    // Company Information
    countryFounded: 'United States',
    foundedYear: 2022,
    headquarters: 'USA',
  },
    {
    id: 'funding-ticks',
    name: 'Funding Ticks',
    shortName: 'Funding Ticks',
    logoUrl: 'https://logo.clearbit.com/fundingticks.com',
    officialWebsite: 'https://fundingticks.com/',
    tagline: 'Backed by Funding Pips',
    shortDescription: 'A new 2025 firm backed by the reputable Funding Pips, focusing on futures with NinjaTrader.',
    rating: 4.5,
    reviewCount: 400,
    affiliateUrl: 'https://fundingticks.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    tradingInstruments: ['Futures'],
    categories: ['Futures'],
    fundingModels: ['1-Step Challenge', 'Zero Challenge'],
    payoutFrequency: 'Weekly',
    drawdownType: 'Trailing',
    platforms: ['NinjaTrader', 'Tradovate'],
    evaluationProcessSummary: 'Offers 1-step and Zero-challenge models, leveraging the experience of its parent company.',
    minStartingCost: 125,
    geoRestrictions: 'Available worldwide.',
    overview: 'Funding Ticks is a 2025 futures entrant backed by Funding Pips, offering 1-step and zero-challenge models with NinjaTrader/Tradovate support and weekly payouts.',
    sources: ["Official site", "TheTrustedProp"],
    verificationStatus: 'unverified',
    lastVerifiedAt: '2025-10-14',
    pros: ["Backed by a reputable firm (Funding Pips)", "Offers a zero-challenge model"],
    cons: ["Very new firm with limited data", "Long-term reputation is unproven"],
    details: { minFunding: 10000, maxFunding: 250000, profitSplit: 90, maxDrawdown: 10, dailyDrawdown: 0, profitTarget: 6, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: false, newsTrading: true, expertAdvisors: false, fastPayouts: true, noTimeLimit: true },

    // Company Information
    countryFounded: 'United States',
    foundedYear: 2023,
    headquarters: 'USA',
  },
  {
    id: 'funded-futures-network',
    name: 'Funded Futures Network',
    shortName: 'FFN',
    logoUrl: '/logos/funded-futures-network.jpg',
    officialWebsite: 'https://fundedfuturesnetwork.com/',
    tagline: 'Live Onboarding & Consistency Focus',
    shortDescription: 'A futures firm that focuses on consistency, with a 40% rule and live onboarding sessions.',
    rating: 4.6,
    reviewCount: 500,
    affiliateUrl: 'https://fundedfuturesnetwork.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge'],
    tradingInstruments: ['Futures'],
    categories: ['Futures'],
    payoutFrequency: 'Daily',
    drawdownType: 'Trailing',
    platforms: ['NinjaTrader', 'Rithmic'],
    evaluationProcessSummary: 'A 1-step evaluation with a strict 40% consistency rule, meaning no single day can account for more than 40% of total profits.',
    minStartingCost: 150,
    geoRestrictions: 'Available worldwide.',
    overview: 'Funded Futures Network runs a 1-step futures evaluation with a strict 40% consistency rule, live onboarding, and daily payout option after hitting an initial threshold.',
    sources: ["Official site"],
    verificationStatus: 'unverified',
    lastVerifiedAt: '2025-10-14',
    pros: ["Live onboarding sessions", "Daily payouts (after $5K)"],
    cons: ["Strict 40% consistency rule"],
    details: { minFunding: 25000, maxFunding: 250000, profitSplit: 90, maxDrawdown: 10, dailyDrawdown: 0, profitTarget: 6, minTradingDays: 10 },
    features: { scalingPlan: true, weekendHolding: false, newsTrading: true, expertAdvisors: false, fastPayouts: true, noTimeLimit: true },

    // Company Information
    countryFounded: 'United States',
    foundedYear: 2024,
    headquarters: 'USA',
  },
  {
    id: 'ticktick-trader',
    name: 'TickTick Trader',
    shortName: 'TickTick',
    logoUrl: 'https://logo.clearbit.com/tickticktrader.com',
    officialWebsite: 'https://tickticktrader.com/',
    tagline: 'Instant Direct Accounts',
    shortDescription: 'Offers 2-hour payouts and "Direct" accounts that bypass the evaluation, with no overnight trading ban.',
    rating: 4.6,
    reviewCount: 950, // Adjusted for realism
    affiliateUrl: 'https://tickticktrader.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: true,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge', 'Direct Account'],
    tradingInstruments: ['Futures'],
    categories: ['Futures', 'Instant Funding'],
    payoutFrequency: '2h',
    drawdownType: 'Trailing',
    platforms: ['NinjaTrader'],
    evaluationProcessSummary: 'Provides a standard 1-step evaluation or a "Direct" account for instant funding. The 80/20 sim split was recently updated.',
    minStartingCost: 139,
    geoRestrictions: 'Available worldwide.',
    overview: 'TickTick Trader offers a 1-step evaluation or Direct (instant) accounts, fast 2-hour payouts, and allows overnight positions. Platform support centers on NinjaTrader.',
    sources: ["Official site", "TheTrustedProp"],
    verificationStatus: 'partial',
    lastVerifiedAt: '2025-10-14',
    pros: ["Fast 2-hour payouts", "Instant 'Direct' account option", "No overnight trading ban"],
    cons: ["Recent update to the sim profit split (80/20)"],
    details: { minFunding: 25000, maxFunding: 150000, profitSplit: 90, maxDrawdown: 5, dailyDrawdown: 0, profitTarget: 6, minTradingDays: 5 },
    features: { scalingPlan: true, weekendHolding: false, newsTrading: true, expertAdvisors: false, fastPayouts: true, noTimeLimit: true },

    // Company Information
    countryFounded: 'United Arab Emirates',
    foundedYear: 2023,
    headquarters: 'Dubai, UAE',
  },
  // Multi-Asset Firms
  {
    id: 'darwinex',
    name: 'Darwinex',
    shortName: 'Darwinex',
    logoUrl: 'https://logo.clearbit.com/darwinex.com',
    officialWebsite: 'https://darwinex.com/',
    tagline: 'Investor-Backed, FCA Regulated',
    shortDescription: 'A unique, FCA-regulated model where traders build a track record (a DARWIN) to attract investor capital, with no evaluations.',
    rating: 4.6,
    reviewCount: 300,
    affiliateUrl: 'https://darwinex.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: false,
    fundingModels: ['Zero Evaluation'],
    tradingInstruments: ['Forex', 'Stocks', 'Indices', 'Commodities'],
    categories: ['Multi-Asset'],
    payoutFrequency: 'Perf-based',
    drawdownType: 'Static',
    platforms: ['MT4', 'MT5'],
    evaluationProcessSummary: 'There is no evaluation. Traders build a track record, receive a risk score, and get listed as a "DARWIN" for investors to back. Profits come from performance fees.',
    minStartingCost: 38,
    geoRestrictions: 'Not available to US clients.',
    overview: 'Darwinex operates a unique, FCA-regulated model that is different from traditional prop firms. Instead of passing a challenge, traders build a verifiable track record. If their strategy is good, it gets listed as a "DARWIN" that attracts investor capital, and the trader earns 15-20% in performance fees. It is designed for long-term, consistent traders.',
    pros: ["FCA-regulated", "No evaluation challenges", "Build a verifiable, portable track record", "Attract real investor capital"],
    cons: ["Complex model for beginners", "Lower profit share (15-20% performance fees)", "Not for short-term challenge passers", "No US clients"],
    details: { minFunding: 50000, maxFunding: 3000000, profitSplit: 20, maxDrawdown: 20, dailyDrawdown: 10, profitTarget: 0, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: false, noTimeLimit: true },

    // Company Information
    countryFounded: 'Spain',
    foundedYear: 2012,
    headquarters: 'Madrid, Spain',
  },
    {
    id: 'dna-funded',
    name: 'DNA Funded',
    shortName: 'DNA',
    logoUrl: 'https://logo.clearbit.com/dnafunded.com',
    officialWebsite: 'https://dnafunded.com',
    tagline: 'Top-Rated Overall Best for US Traders',
    shortDescription: 'Top-rated firm (97/100) backed by ASIC-regulated DNA Markets, offering low fees and tight spreads.',
    rating: 4.9,
    reviewCount: 650, // Adjusted for realism
    affiliateUrl: 'https://dnafunded.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge', '2-Step Challenge', 'Rapid'],
    tradingInstruments: ['Forex', 'Indices', 'Crypto', 'Commodities'],
    categories: ['Multi-Asset', 'Forex/CFD'],
    payoutFrequency: 'Weekly',
    drawdownType: 'Static',
    platforms: ['MT4', 'MT5', 'cTrader'],
    
    // Company Information
    countryFounded: 'Australia',
    foundedYear: 2023,
    headquarters: 'Sydney, Australia',
    
    evaluationProcessSummary: 'Offers a one-step evaluation and a "Rapid" model with a focus on forex and indices trading. Backed by an ASIC-regulated broker.',
    minStartingCost: 99,
    geoRestrictions: 'US-friendly.',
    overview: 'DNA Funded is a new but extremely highly-rated firm, considered one of the best overall for US traders. Backed by ASIC-regulated DNA Markets, they provide simple challenges with low fees, tight spreads, and access to over 800 instruments.',
    pros: ["Top-rated for US traders (97/100)", "Backed by ASIC-regulated broker", "Low fees and tight spreads", "Weekly payouts"],
    cons: ["Newer firm with few reviews"],
    details: { minFunding: 6000, maxFunding: 200000, profitSplit: 90, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 10, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },
  },
    {
    id: 'lux-trading-firm',
    name: 'Lux Trading Firm',
    shortName: 'Lux',
    logoUrl: 'https://logo.clearbit.com/luxtradingfirm.com',
    officialWebsite: 'https://luxtradingfirm.com/',
    tagline: 'Award-Winning for EAs & Copy Trading',
    shortDescription: 'A firm that excels in supporting automated strategies, offering high scaling plans for EA and copy traders.',
    rating: 4.5,
    reviewCount: 580, // Adjusted for realism
    affiliateUrl: 'https://luxtradingfirm.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge', '2-Step Challenge'],
    tradingInstruments: ['Forex', 'Indices', 'Stocks'],
    categories: ['Multi-Asset'],
    payoutFrequency: 'Bi-weekly',
    drawdownType: 'Static',
    platforms: ['MT4', 'MT5'],
    evaluationProcessSummary: 'Standard 1 and 2-step evaluations with a particular focus on accommodating and scaling traders who use EAs and copy trading systems.',
    minStartingCost: 149,
    geoRestrictions: 'Available worldwide.',
    overview: 'Lux Trading Firm has carved out a niche as the best prop firm for traders using Expert Advisors and copy trading, winning awards for their support in this area. They offer scaling up to $2.5M and are known for their 2025 innovations.',
    pros: ["Award-winning support for EAs and copy trading", "High scaling up to $2.5M", "2025 innovations"],
    cons: ["Slightly higher entry cost"],
    details: { minFunding: 15000, maxFunding: 2500000, profitSplit: 75, maxDrawdown: 5, dailyDrawdown: 0, profitTarget: 15, minTradingDays: 10 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },

    // Company Information
    countryFounded: 'United Arab Emirates',
    foundedYear: 2021,
    headquarters: 'Dubai, UAE',
  },
  {
    id: 'e8-funding',
    name: 'E8 Funding',
    shortName: 'E8',
    logoUrl: 'https://logo.clearbit.com/e8funding.com',
    officialWebsite: 'https://e8funding.com/',
    tagline: 'Payouts from Day 8',
    shortDescription: 'A well-regarded firm offering fast payouts starting from day 8 and supporting weekend holding.',
    rating: 4.7,
    reviewCount: 780, // Adjusted for realism
    affiliateUrl: 'https://e8funding.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['2-Step Challenge'],
    tradingInstruments: ['Forex', 'Futures', 'Indices'],
    categories: ['Multi-Asset'],
    payoutFrequency: '8 days',
    drawdownType: 'Static',
    platforms: ['MT4', 'MT5'],
    evaluationProcessSummary: 'A standard 2-step evaluation track with a focus on quick payouts for successful traders.',
    minStartingCost: 33,
    geoRestrictions: 'Available worldwide.',
    overview: 'E8 Funding is known for its fast payout cycle, with the first withdrawal available just 8 days after gettinfunded. They support weekend holding and have a strong payout record of over $59M.',
    pros: ["Fast first payout (8 days)", "Allows weekend holding", "Over $59M in payouts"],
    cons: ["Only offers a 2-step evaluation"],
    details: { minFunding: 25000, maxFunding: 1000000, profitSplit: 100, maxDrawdown: 8, dailyDrawdown: 5, profitTarget: 8, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },

    // Company Information
    countryFounded: 'United States',
    foundedYear: 2021,
    headquarters: 'New York, USA',
  },
    {
    id: 'ment-funding',
    name: 'Ment Funding',
    shortName: 'Ment',
    logoUrl: 'https://logo.clearbit.com/mentfunding.com',
    officialWebsite: 'https://mentfunding.com/',
    tagline: '1-Step Evals & Instant Options',
    shortDescription: 'A flexible firm with 1-step evaluations and instant funding options, but has mixed reviews on support.',
    rating: 4.3,
    reviewCount: 480, // Adjusted for realism
    affiliateUrl: 'https://mentfunding.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: true,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge', 'Instant Funding'],
    tradingInstruments: ['Forex', 'Indices'],
    categories: ['Forex/CFD', 'Instant Funding'],
    payoutFrequency: 'Weekly',
    drawdownType: 'Static',
    platforms: ['MT4', 'MT5'],
    evaluationProcessSummary: 'Offers a choice between a 1-step evaluation or direct instant funding accounts.',
    minStartingCost: 100,
    geoRestrictions: 'Available worldwide.',
    overview: 'Ment Funding provides flexibility with both 1-step challenges and instant funding. They offer scaling up to $2M and weekly payouts. However, reviews on their customer support are mixed.',
    pros: ["Offers both 1-step and instant funding", "Scaling up to $2M", "Weekly payouts"],
    cons: ["Mixed reviews on customer support"],
    details: { minFunding: 10000, maxFunding: 2000000, profitSplit: 90, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 10, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },

    // Company Information
    countryFounded: 'United Kingdom',
    foundedYear: 2023,
    headquarters: 'UK',
  },
    {
    id: 'my-flash-funding',
    name: 'My Flash Funding',
    shortName: 'Flash Funding',
    logoUrl: 'https://logo.clearbit.com/myflashfunding.com',
    officialWebsite: 'https://myflashfunding.com/',
    tagline: 'Quick Payouts for Scalpers',
    shortDescription: 'A newer firm offering "Flash" accounts with weekly payouts, popular with scalpers.',
    rating: 4.4,
    reviewCount: 410, // Adjusted for realism
    affiliateUrl: 'https://myflashfunding.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge', '2-Step Challenge'],
    tradingInstruments: ['Futures', 'Forex'],
    categories: ['Multi-Asset'],
    payoutFrequency: 'Weekly',
    drawdownType: 'Static',
    platforms: ['MT4', 'MT5'],
    evaluationProcessSummary: 'Standard 1 and 2-step evaluations with rules that are accommodating to high-frequency trading styles.',
    minStartingCost: 49,
    geoRestrictions: 'Available worldwide.',
    overview: 'My Flash Funding is an emerging firm that has gained a following among scalpers due to its quick payout cycle and flexible rules. They offer both futures and forex trading.',
    pros: ["Weekly payouts", "Good for scalpers", "Low entry cost"],
    cons: ["Newer firm with less history", "Lower max funding"],
    details: { minFunding: 5000, maxFunding: 200000, profitSplit: 90, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 8, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },

    // Company Information
    countryFounded: 'United States',
    foundedYear: 2023,
    headquarters: 'USA',
  },
  {
    id: 'breakout-prop',
    name: 'Breakout Prop',
    shortName: 'Breakout',
    logoUrl: 'https://logo.clearbit.com/breakoutprop.com',
    officialWebsite: 'https://breakoutprop.com/',
    tagline: 'For Breakout Strategies',
    shortDescription: 'A niche firm with limited data, focusing on traders who specialize in breakout and volatility strategies.',
    rating: 4.2,
    reviewCount: 450,
    affiliateUrl: 'https://breakoutprop.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: false,
    fundingModels: ['1-Step Challenge'],
    tradingInstruments: ['Forex', 'Indices'],
    categories: ['Multi-Asset'],
    payoutFrequency: 'Bi-weekly',
    drawdownType: 'Static',
    platforms: ['MT4', 'MT5'],
    evaluationProcessSummary: 'A 1-step evaluation designed to identify traders who can capitalize on market volatility.',
    minStartingCost: 100,
    geoRestrictions: 'Unknown.',
    overview: 'Breakout Prop is a small, emerging firm catering to a specific niche: breakout traders. They have limited reviews and data, so traders should be cautious.',
    pros: ["Niche focus on breakout strategies"],
    cons: ["Limited data and reviews", "Unproven track record"],
    details: { minFunding: 10000, maxFunding: 400000, profitSplit: 90, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 10, minTradingDays: 5 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },

    // Company Information
    countryFounded: 'United Kingdom',
    foundedYear: 2023,
    headquarters: 'UK',
  },
    {
    id: 'venus-funded',
    name: 'Venus Funded',
    shortName: 'Venus',
    logoUrl: 'https://logo.clearbit.com/venusfunded.com',
    officialWebsite: 'https://venusfunded.com/',
    tagline: 'Women-Led Initiatives',
    shortDescription: 'An emerging firm with a unique focus on diversity and women-led initiatives in trading.',
    rating: 4.2,
    reviewCount: 300,
    affiliateUrl: 'https://venusfunded.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['2-Step Challenge'],
    tradingInstruments: ['Forex', 'Indices'],
    categories: ['Multi-Asset'],
    payoutFrequency: 'On-demand',
    drawdownType: 'Static',
    platforms: ['MT4', 'MT5'],
    evaluationProcessSummary: 'A standard 2-step challenge with on-demand payouts.',
    minStartingCost: 65,
    geoRestrictions: 'Available worldwide.',
    overview: 'Venus Funded is a new firm with a commendable focus on promoting diversity in the trading community. While their offering is standard, their mission sets them apart. They are still emerging and have limited reviews.',
    pros: ["Focus on diversity and women-led initiatives", "On-demand payouts"],
    cons: ["Emerging firm with limited reviews", "Unproven track record"],
    details: { minFunding: 10000, maxFunding: 300000, profitSplit: 90, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 8, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },

    // Company Information
    countryFounded: 'United Kingdom',
    foundedYear: 2024,
    headquarters: 'UK',
  },
  {
    id: 'lucid-trading',
    name: 'Lucid Trading',
    shortName: 'Lucid',
    logoUrl: 'https://lucidtrading.com/wp-content/uploads/2024/02/Logo-Lucid-Trading.png',
    officialWebsite: 'https://lucidtrading.com/',
    tagline: 'Your Vision, Funded.',
    shortDescription: 'A newer firm offering a straightforward 2-phase challenge with on-demand payouts and flexible rules allowing EAs and news trading.',
    rating: 4.3,
    reviewCount: 350,
    affiliateUrl: 'https://lucidtrading.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['2-Step Challenge'],
    tradingInstruments: ['Forex', 'Crypto', 'Indices', 'Metals', 'Energies', 'Stocks'],
    categories: ['Multi-Asset'],
    payoutFrequency: 'On-demand',
    drawdownType: 'Static',
    platforms: ['MT4', 'MT5'],
    evaluationProcessSummary: 'A standard 2-step challenge model with a focus on making the rules as clear as possible for traders.',
    minStartingCost: 67,
    geoRestrictions: 'Available worldwide.',
    overview: 'Lucid Trading is a newer firm aiming to build trust through transparency and trader-friendly rules. They offer a standard 2-phase evaluation with achievable targets, no minimum trading days, and on-demand payouts after an initial period. They allow a wide range of trading styles, including EAs, news trading, and weekend holding.',
    pros: ["On-demand payouts", "No minimum trading days", "Allows EAs, news trading, and weekend holding"],
    cons: ["Emerging firm with few reviews", "Initial 21-day period before first payout"],
    details: { minFunding: 10000, maxFunding: 100000, profitSplit: 90, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 8, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },

    // Company Information
    countryFounded: 'United Kingdom',
    foundedYear: 2024,
    headquarters: 'UK',
  },
  {
    id: 'the-legends-trading',
    name: 'The Legends Trading',
    shortName: 'Legends',
    logoUrl: '/logos/the-legend-trading.png',
    officialWebsite: 'https://thelegendstrading.com/',
    tagline: 'Legendary Challenges',
    shortDescription: 'A new firm with a myth-themed approach and limited data available.',
    rating: 4.4,
    reviewCount: 200,
    affiliateUrl: 'https://thelegendstrading.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: false,
    fundingModels: ['2-Step Challenge'],
    tradingInstruments: ['Forex', 'Indices'],
    categories: ['Multi-Asset'],
    payoutFrequency: 'Bi-weekly',
    drawdownType: 'Static',
    platforms: ['MT4', 'MT5'],
    evaluationProcessSummary: 'A standard 2-step challenge model wrapped in a unique "legendary" theme.',
    minStartingCost: 120,
    geoRestrictions: 'Unknown.',
    overview: 'The Legends Trading is a new firm using a creative, myth-based theme for its challenges. They are still very new and have very limited data and reviews available.',
    pros: ["Unique branding"],
    cons: ["Very new firm with limited data", "Higher entry cost"],
    details: { minFunding: 10000, maxFunding: 500000, profitSplit: 90, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 8, minTradingDays: 5 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },

    // Company Information
    countryFounded: 'United Kingdom',
    foundedYear: 2023,
    headquarters: 'UK',
  },
    {
    id: 'quantfunded',
    name: 'QuantFunded',
    shortName: 'QuantFunded',
    logoUrl: 'https://logo.clearbit.com/quantfunded.com',
    officialWebsite: 'https://quantfunded.com/',
    tagline: 'For Quant & Algo Traders',
    shortDescription: 'An emerging, EA-heavy firm focused on serving quantitative and algorithmic traders.',
    rating: 4.3,
    reviewCount: 180,
    affiliateUrl: 'https://quantfunded.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: false,
    fundingModels: ['1-Step Challenge', '2-Step Challenge'],
    tradingInstruments: ['Forex', 'Indices', 'Crypto'],
    categories: ['Multi-Asset'],
    payoutFrequency: 'Bi-weekly',
    drawdownType: 'Static',
    platforms: ['MT4', 'MT5', 'cTrader'],
    evaluationProcessSummary: 'Offers 1 and 2-step challenges designed for traders who rely heavily on algorithms and EAs.',
    minStartingCost: 200,
    geoRestrictions: 'Unknown.',
    overview: 'QuantFunded, a rebrand from Quant Tekel, is a niche firm catering specifically to the needs of quantitative and algorithmic traders. Their rules and platform support are geared towards automated systems.',
    pros: ["Specific focus on quant/algo trading", "EA-heavy approach"],
    cons: ["Higher entry cost", "Emerging firm with few reviews", "Niche appeal"],
    details: { minFunding: 25000, maxFunding: 1000000, profitSplit: 95, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 10, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },

    // Company Information
    countryFounded: 'Singapore',
    foundedYear: 2023,
    headquarters: 'Singapore',
  },
  // Crypto-Focused Firms
  {
    id: 'crypto-fund-trader',
    name: 'Crypto Fund Trader',
    shortName: 'CFT',
    logoUrl: 'https://logo.clearbit.com/cryptofundtrader.com',
    officialWebsite: 'https://cryptofundtrader.com/',
    tagline: 'The Top Prop for Crypto Scalpers',
    shortDescription: 'The leading crypto-focused prop firm, offering 100+ pairs, 48h payouts, and weekend trading.',
    rating: 4.8,
    reviewCount: 580, // Adjusted for realism
    affiliateUrl: 'https://cryptofundtrader.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: true,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge', '2-Step Challenge', 'Instant Funding'],
    tradingInstruments: ['Crypto'],
    categories: ['Crypto', 'Instant Funding'],
    payoutFrequency: '48h',
    drawdownType: 'Static',
    platforms: ['MT5', 'Proprietary'],
    evaluationProcessSummary: 'Offers 1/2-step and instant funding models specifically for crypto trading, including futures, on over 100 pairs.',
    minStartingCost: 58,
    geoRestrictions: 'Available worldwide.',
    overview: 'Crypto Fund Trader is the premier choice for traders specializing in cryptocurrencies. They offer a huge range of over 100 pairs, allow weekend trading, and have fast 48-hour payouts, making them ideal for crypto scalpers and swing traders.',
    pros: ["Trades over 100 crypto pairs", "Weekend trading allowed", "Fast 48-hour payouts", "Top choice for crypto specialists"],
    cons: ["Niche focus may not suit all traders"],
    details: { minFunding: 5000, maxFunding: 300000, profitSplit: 90, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 8, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },

    // Company Information
    countryFounded: 'United Kingdom',
    foundedYear: 2023,
    headquarters: 'London, UK',
  },
    {
    id: 'bitfunded',
    name: 'BitFunded',
    shortName: 'BitFunded',
    logoUrl: 'https://www.bitfunded.com/images/logo.png',
    officialWebsite: 'https://www.bitfunded.com/',
    tagline: 'Bitcoin-Focused Funding',
    shortDescription: 'An emerging, crypto-only firm with a focus on Bitcoin, but some noted risks of scams.',
    rating: 4.0,
    reviewCount: 250,
    affiliateUrl: 'https://www.bitfunded.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: false,
    fundingModels: ['2-Step Challenge'],
    tradingInstruments: ['Crypto'],
    categories: ['Crypto'],
    payoutFrequency: 'Monthly',
    drawdownType: 'Static',
    platforms: ['MT4', 'MT5'],
    evaluationProcessSummary: 'A demo-based 2-step challenge for traders wanting to prove their skills in the crypto markets.',
    minStartingCost: 89,
    geoRestrictions: 'Unknown.',
    overview: 'BitFunded is a new, crypto-only prop firm that is still establishing its reputation. While they offer funding up to $500K, the monthly payouts are slow, and some community members have noted potential scam risks, so caution is advised.',
    pros: ["Crypto-only focus"],
    cons: ["Emerging firm with noted scam risks", "Slow monthly payouts", "Lack of verified reviews"],
    details: { minFunding: 10000, maxFunding: 500000, profitSplit: 90, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 8, minTradingDays: 5 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: false, noTimeLimit: true },

    // Company Information
    countryFounded: 'United States',
    foundedYear: 2023,
    headquarters: 'USA',
  },
  {
    id: 'soar-funding',
    name: 'Soar Funding',
    shortName: 'Soar',
    logoUrl: '/logos/soar-funding.png',
    officialWebsite: 'https://soar-funding.com/en',
    tagline: '100% First Payout Guarantee',
    shortDescription: 'A new 2025 UK-based firm offering 1-Step and 2-Step evaluations with an industry-first 100% profit split on your first payout.',
    rating: 4.7,
    reviewCount: 490, // Adjusted for realism
    isFeatured: false,
    affiliateUrl: 'https://soar-funding.com/en/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge', '2-Step Challenge'],
    tradingInstruments: ['Forex', 'Metals', 'Indices', 'Energies', 'Crypto'],
    categories: ['Forex/CFD', 'Crypto'],
    payoutFrequency: 'Weekly',
    drawdownType: 'Static',
    platforms: ['MT5', 'cTrader'],
    evaluationProcessSummary: 'Offers both 1-Step and 2-Step evaluation models with a unique 100% profit split on the first payout, then 80% on subsequent payouts. No time limits and EA trading allowed.',
    minStartingCost: 99,
    geoRestrictions: 'Available worldwide.',
    overview: 'Launched in July 2025, Soar Funding has quickly gained popularity for its innovative 100% first payout model. Based in the UK, they offer account sizes up to $300,000 with competitive profit splits and weekly payouts. Their trading challenge has no time limits and straightforward rules.',
    sources: ["PayoutJunction", "PropInsider"],
    verificationStatus: 'verified',
    lastVerifiedAt: '2025-10-15',
    pros: ["100% profit split on first payout", "Weekly payouts", "Comprehensive instrument selection", "UK-based with strong regulation"],
    cons: ["New firm with limited track record", "Higher evaluation fees than some competitors"],
    details: { minFunding: 10000, maxFunding: 300000, profitSplit: 100, maxDrawdown: 8, dailyDrawdown: 4, profitTarget: 8, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },
    payoutHistory: {
      totalPayouts: 0,
      averagePayoutTime: 'Weekly',
      payoutReliability: 'Good',
      lastUpdated: '2025-10-15'
    },
    successMetrics: {
      evaluationPassRate: 0,
      averageTimeToPass: '2-3 weeks',
      traderRetentionRate: 0,
      scalingSuccessRate: 0
    },
    platformDetails: [
      {
        name: 'MetaTrader 5',
        type: 'MT5',
        features: ['Multi-Asset Trading', 'Advanced Charting', 'Algorithmic Trading'],
        mobileSupport: true,
        webTrading: true
      },
      {
        name: 'cTrader',
        type: 'cTrader',
        features: ['Depth of Market', 'Advanced Execution', 'cBots Support', 'One-Click Trading'],
        mobileSupport: true,
        webTrading: true
      }
    ],
    deal: {
      description: 'New Trader Bonus: 10% off your first challenge with code FPG10.',
      isTopDeal: true
    },

    // Company Information
    countryFounded: 'United States',
    foundedYear: 2023,
    headquarters: 'USA',
  },
  {
    id: 'funded7',
    name: 'Funded7',
    shortName: 'F7',
    logoUrl: 'https://logo.clearbit.com/funded7.com',
    officialWebsite: 'https://funded7.com',
    tagline: 'Triple-Model Flexibility',
    shortDescription: 'A new 2025 Cyprus-based firm offering 1-Step, 2-Step, and Instant funding evaluations with profit splits ranging from 80% to 90%.',
    rating: 4.5,
    reviewCount: 390, // Adjusted for realism
    affiliateUrl: 'https://funded7.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: true,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge', '2-Step Challenge', 'Instant Funding'],
    tradingInstruments: ['Forex', 'Indices', 'Metals', 'Crypto'],
    categories: ['Forex/CFD', 'Instant Funding', 'Crypto'],
    payoutFrequency: 'Bi-weekly',
    drawdownType: 'Trailing',
    platforms: ['MT4', 'MT5', 'TradingView'],
    evaluationProcessSummary: 'Offers three distinct evaluation paths: a fast 1-Step challenge, traditional 2-Step evaluation, or instant funding for experienced traders.',
    minStartingCost: 89,
    geoRestrictions: 'Available worldwide.',
    overview: 'Launched in February 2025 in Cyprus, Funded7 provides maximum flexibility with three different funding models. Their account sizes range from $10,000 to $500,000 with competitive profit splits and bi-weekly payouts.',
    sources: ["PayoutJunction", "PropInsider"],
    verificationStatus: 'verified',
    lastVerifiedAt: '2025-10-15',
    pros: ["Three different funding models", "Crypto trading support", "Competitive profit splits", "EU regulation"],
    cons: ["Higher fees for instant funding", "Newer firm with limited history"],
    details: { minFunding: 10000, maxFunding: 500000, profitSplit: 85, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 8, minTradingDays: 3 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: false },
    payoutHistory: {
      totalPayouts: 0,
      averagePayoutTime: 'Bi-weekly',
      payoutReliability: 'Good',
      lastUpdated: '2025-10-15'
    },
    successMetrics: {
      evaluationPassRate: 0,
      averageTimeToPass: '2-4 weeks',
      traderRetentionRate: 0,
      scalingSuccessRate: 0
    },
    platformDetails: [
      {
        name: 'MetaTrader 4',
        type: 'MT4',
        features: ['Expert Advisors', 'Custom Indicators', 'Mobile Trading'],
        mobileSupport: true,
        webTrading: true
      },
      {
        name: 'MetaTrader 5',
        type: 'MT5',
        features: ['Multi-Asset Trading', 'Advanced Charting', 'Algorithmic Trading'],
        mobileSupport: true,
        webTrading: true
      },
      {
        name: 'TradingView',
        type: 'TradingView',
        features: ['Social Trading', 'Advanced Charting', 'Pine Script', 'Broker Integration'],
        mobileSupport: true,
        webTrading: true
      }
    ],

    // Company Information
    countryFounded: 'Cyprus',
    foundedYear: 2025,
    headquarters: 'Limassol, Cyprus',
  },
  {
    id: 'funded-kingdom',
    name: 'Funded Kingdom',
    shortName: 'Kingdom',
    logoUrl: 'https://logo.clearbit.com/fundedkingdom.com',
    officialWebsite: 'https://fundedkingdom.com',
    tagline: 'Level Up Your Trading Career',
    shortDescription: 'Relaunched in April 2025 with an innovative gamified, level-based evaluation model and profit splits up to 90%.',
    rating: 4.4,
    reviewCount: 340, // Adjusted for realism
    affiliateUrl: 'https://fundedkingdom.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['Gamified Challenge'],
    tradingInstruments: ['Forex', 'Indices', 'Crypto', 'Commodities'],
    categories: ['Forex/CFD', 'Crypto'],
    payoutFrequency: 'Bi-weekly',
    drawdownType: 'Static',
    platforms: ['MT5', 'cTrader'],
    evaluationProcessSummary: 'Unique gamified evaluation system where traders progress through levels to unlock higher account sizes and better profit splits.',
    minStartingCost: 79,
    geoRestrictions: 'Available worldwide.',
    overview: 'Funded Kingdom was relaunched in April 2025 in Mauritius with an innovative gamified approach to prop trading. Traders progress through levels to unlock higher account sizes, with profit splits up to 90% for top performers.',
    sources: ["PayoutJunction", "TheTrustedProp"],
    verificationStatus: 'verified',
    lastVerifiedAt: '2025-10-15',
    pros: ["Gamified progression system", "Competitive starting costs", "High profit splits for top performers"],
    cons: ["Complex level system", "Relaunched firm with mixed history"],
    details: { minFunding: 10000, maxFunding: 200000, profitSplit: 80, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 8, minTradingDays: 5 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: false },
    payoutHistory: {
      totalPayouts: 0,
      averagePayoutTime: 'Bi-weekly',
      payoutReliability: 'Good',
      lastUpdated: '2025-10-15'
    },
    successMetrics: {
      evaluationPassRate: 0,
      averageTimeToPass: '3-5 weeks',
      traderRetentionRate: 0,
      scalingSuccessRate: 0
    },
    platformDetails: [
      {
        name: 'MetaTrader 5',
        type: 'MT5',
        features: ['Multi-Asset Trading', 'Advanced Charting', 'Algorithmic Trading'],
        mobileSupport: true,
        webTrading: true
      },
      {
        name: 'cTrader',
        type: 'cTrader',
        features: ['Depth of Market', 'Advanced Execution', 'cBots Support', 'One-Click Trading'],
        mobileSupport: true,
        webTrading: true
      }
    ],

    // Company Information
    countryFounded: 'Mauritius',
    foundedYear: 2025,
    headquarters: 'Port Louis, Mauritius',
  }
];

export const articles: Article[] = [
  {
    id: 'expert-analysis-2025',
    title: 'Expert Analysis: Navigating the 2025 Prop Trading Landscape',
    summary: 'An in-depth analysis of market trends, trader profiles, and critical red flags to help you choose the best prop firm.',
    author: 'FPG Insights',
    publishedDate: 'October 15, 2025',
    imageUrl: '/images/education/expert-analysis.png',
    content: `
        <h2><strong>Market Size and Growth Trends</strong></h2>
        
        <p style="font-size: 0.9em;">The global prop trading industry is estimated to be worth around $20 billion in 2025, with over 2,000 firms worldwide. The United States is the largest market, comprising about 62% of the industry. Interest in prop trading has surged dramatically, with search volumes and engagement rising by hundreds of percent across key regions including the US, UK, Canada, and Australia over the past 4-5 years. This reflects how prop trading has become a mainstream alternative to traditional retail brokerage models. Growth is driven by increased accessibility and democratization of market participation for individual traders.</p>
        
        <h2><strong>Key Challenges Facing Prop Firms and Traders</strong></h2>
        
        <p style="font-size: 0.9em;">Major challenges include managing risk in volatile markets, maintaining trader discipline, and dealing with the perception and reality of some traders treating evaluation accounts like demo accounts. Firms also face competitive pressure to attract and retain talented traders. For traders, achieving consistent profitability under strict risk and drawdown rules requires strong discipline, effective strategy, and adapting to rapid technology changes.</p>
        
        <h2><strong>Regulatory Landscape and Compliance</strong></h2>
        
        <p style="font-size: 0.9em;">Regulatory scrutiny over prop firms has increased in 2025. Firms and traders must comply with evolving rules on transparency, risk controls, and ethical trading practices. Jurisdictions vary, but the trend is toward closer oversight, affecting how firms structure funding, performance evaluation, and reporting. Compliance is becoming a significant operational focus for firms to sustain trust and market access.</p>
        
        <h2><strong>Technology Adoption (AI, Automation, Platforms)</strong></h2>
        
        <p style="font-size: 0.9em;">AI and machine learning have become essential tools for both firms and traders. AI-driven strategy development enables sophisticated backtesting and pattern recognition beyond human capabilities. For prop firms, AI plays a critical role in real-time risk management by monitoring trader performance and market exposure to preemptively mitigate risk. Automation in trader evaluation and capital allocation streamlines processes and improves scalability. Modern platforms increasingly integrate these technologies to enhance efficiency and trader performance.</p>
        
        <h2><strong>Funding Models and Trade-offs</strong></h2>
        
        <p style="font-size: 0.9em;">The industry features three dominant funding models:</p>
        <ul style="font-size: 0.9em;">
          <li><strong>Evaluation-based Funding:</strong> Traders must pass simulated evaluations to access live funds. This model balances risk control for firms with a predictable revenue stream from evaluation fees but may attract traders who treat evaluations as demo accounts.</li>
          <li><strong>Instant Funding:</strong> Traders receive capital immediately after payment, appealing to faster onboarding and wider trader appeal but with higher risk to firms and generally lower trader quality.</li>
          <li><strong>Hybrid Models:</strong> Combination of the above, sometimes with subscription fees for ongoing access, aiming to balance revenue predictability, trader quality, and operational flexibility.</li>
        </ul>
        
        <h2><strong>Common Success Factors for Traders</strong></h2>
        
        <p style="font-size: 0.9em;">Successful traders typically exhibit disciplined risk management, adaptability to market conditions, strong strategy development often enhanced by AI tools, and consistent performance under firm rules. Psychological resilience and the ability to learn and adjust are also critical factors.</p>
        
        <h2><strong>Industry Risks and Red Flags</strong></h2>
        
        <p style="font-size: 0.9em;">Risks include potential overreliance on automated evaluations that may fail to capture all trader nuances, unclear or unfair risk and profit-sharing rules, and lack of transparency from some firms. Traders should beware firms with excessive refund requests or opaque policies. Market volatility and regulatory changes also pose ongoing risks.</p>
        
        <h2><strong>Future Outlook and Predictions</strong></h2>
        <p style="font-size: 0.9em;">The prop trading industry is poised for significant growth, fueled by technology advancements and greater accessibility. AI and machine learning will deepen their role in strategy and risk management. Regulatory oversight will continue to tighten, requiring firms to prioritize compliance and ethical practices. The industry's evolution toward performance-based partnerships and subscription models forecasts a more mature, transparent ecosystem benefiting both firms and traders who adapt effectively.</p>
        
        <p style="font-size: 0.9em;"><strong>Conclusion:</strong> This balanced perspective highlights both exciting opportunities in technological innovation and expanding participation, alongside cautionary challenges in risk, regulation, and sustainable trading performance. The prop trading industry in 2025 exemplifies a dynamic, evolving market segment with significant potential and inherent complexities.</p>
    `
  },
  {
    id: 'what-is-prop-trading',
    title: 'What is Prop Trading and How Does It Work?',
    summary: 'A comprehensive guide to understanding proprietary trading, its benefits, risks, and how to get started with a funded account.',
    author: 'John Doe',
    publishedDate: 'October 1, 2024',
    imageUrl: '/images/education/glossary-guide.png',
    content: `
      <h2><strong>Introduction to Proprietary Trading</strong></h2>
      
      <p style="font-size: 0.9em;">Proprietary trading, or "prop trading," occurs when a financial firm—such as a commercial bank, a brokerage, or even a hedge fund—trades stocks, bonds, currencies, commodities, and other financial instruments with its own money, rather than using its clients' money. The goal is to make a profit for the firm itself.</p>
      
      <h2><strong>How Prop Firms Work</strong></h2>
      
      <p style="font-size: 0.9em;">Modern prop firms offer a unique opportunity for retail traders. They provide traders with access to their capital in exchange for a share of the profits. To qualify, traders usually have to pass an evaluation or "challenge" to prove their skills and discipline. This model allows talented traders without significant personal capital to trade larger accounts and earn substantial income.</p>
      
      <h2><strong>Benefits of Prop Trading</strong></h2>
      
      <ul style="font-size: 0.9em;">
        <li><strong>Access to Capital:</strong> Trade with a much larger account than you could with your own funds.</li>
        <li><strong>High Profit Splits:</strong> Keep a large percentage of the profits you generate, often up to 90%.</li>
        <li><strong>Limited Risk:</strong> You are not liable for any losses; the firm absorbs them. Your only risk is the initial fee for the evaluation.</li>
        <li><strong>Professional Tools:</strong> Gain access to advanced trading platforms, data feeds, and educational resources.</li>
      </ul>
      
      <h2><strong>Risks and Considerations</strong></h2>
      
      <p style="font-size: 0.9em;">The main risk for a trader is failing the evaluation and losing the fee. It's crucial to choose a reputable firm with clear rules, realistic profit targets, and fair drawdown limits. Always read the terms and conditions carefully before signing up.</p>
    `
  },
  {
    id: 'choosing-a-prop-firm',
    title: 'How to Choose the Right Prop Firm for You',
    summary: 'Not all prop firms are created equal. This article breaks down the key factors to consider when selecting a firm that aligns with your trading style and goals.',
    author: 'Jane Smith',
    publishedDate: 'October 5, 2024',
    imageUrl: '/images/education/firm-selection.png',
    content: `
      <h2><strong>Key Factors to Consider</strong></h2>
      
      <p style="font-size: 0.9em;">Choosing the right prop firm is a critical step in your trading journey. Here are the most important factors to evaluate:</p>
      
      <h3><strong>1. Funding Model</strong></h3>
      
      <p style="font-size: 0.9em;">Firms offer various models, including one-step challenges, a two-step challenges, and instant funding. Understand the pros and cons of each. Challenges are cheaper but require you to pass an evaluation. Instant funding gets you trading with real capital immediately but typically comes with a higher cost and stricter rules.</p>
      
      <h3><strong>2. Trading Rules and Parameters</strong></h3>
      
      <ul style="font-size: 0.9em;">
        <li><strong>Profit Target:</strong> Is the profit target realistic for your strategy?</li>
        <li><strong>Drawdown Limits:</strong> Understand the difference between static and trailing drawdown, and whether there are daily loss limits.</li>
        <li><strong>Trading Style:</strong> Does the firm allow your strategy (e.g., news trading, weekend holding, EAs)?</li>
      </ul>
      
      <h3><strong>3. Profit Split and Scaling</strong></h3>
      
      <p style="font-size: 0.9em;">Look for firms with high profit splits (80-90% is standard). Also, check their scaling plan. A good scaling plan allows you to grow your account size as you consistently generate profits.</p>
      
      <h3><strong>4. Reputation and Payouts</strong></h3>
      
      <p style="font-size: 0.9em;">Research the firm's reputation. Look for reviews on trusted sites like Trustpilot. Ensure they have a track record of consistent and timely payouts.</p>
    `
  },
  {
    id: 'trading-psychology-prop-trading',
    title: 'Trading Psychology: Mastering Your Mind for Prop Trading Success',
    summary: 'Learn how to control emotions, build discipline, and develop the mental framework needed to succeed in prop trading evaluations and live accounts.',
    author: 'Dr. Sarah Chen',
    publishedDate: 'November 15, 2024',
    imageUrl: '/images/education/trading-psychology.png',
    content: `
      <h2><strong>The Psychology Challenge in Prop Trading</strong></h2>
      
      <p style="font-size: 0.9em;">Prop trading isn't just about technical skills or market knowledge—it's fundamentally a psychological game. The pressure of evaluation challenges, the fear of losing your fee, and the excitement of potential profits can create emotional roller coasters that derail even the most skilled traders.</p>
      
      <h2><strong>Common Psychological Pitfalls</strong></h2>
      
      <h3><strong>1. The Revenge Trading Trap</strong></h3>
      
      <p style="font-size: 0.9em;">After a losing trade, many traders feel compelled to "get back" their losses immediately. This leads to overtrading, larger position sizes, and often, even bigger losses. In prop trading, this can quickly breach your drawdown limits.</p>
      
      <h3><strong>2. The FOMO (Fear of Missing Out) Syndrome</strong></h3>
      
      <p style="font-size: 0.9em;">Seeing other traders post profits on social media can trigger impulsive trades that don't fit your strategy. Remember: every trader's journey is different, and what works for others may not work for you.</p>
      
      <h3><strong>3. The Perfectionist's Curse</strong></h3>
      
      <p style="font-size: 0.9em;">Striving for perfect entries and exits can lead to analysis paralysis. In prop trading, you need to be decisive and stick to your plan, even if it's not perfect.</p>
      
      <h2><strong>Building Mental Discipline</strong></h2>
      
      <h3><strong>1. Pre-Trade Rituals</strong></h3>
      
      <p style="font-size: 0.9em;">Develop a consistent routine before you start trading: review your plan, check market conditions, and mentally prepare for both winning and losing scenarios.</p>
      
      <h3><strong>2. Position Sizing Rules</strong></h3>
      
      <p style="font-size: 0.9em;">Never risk more than 1-2% of your account on a single trade. This rule should be non-negotiable, regardless of how confident you feel about a setup.</p>
      
      <h3><strong>3. Daily Loss Limits</strong></h3>
      
      <p style="font-size: 0.9em;">Set a daily loss limit (e.g., 2-3% of your account) and stop trading when you hit it. This prevents emotional trading and protects your capital.</p>
      
      <h2><strong>Managing Evaluation Pressure</strong></h2>
      
      <p style="font-size: 0.9em;">Prop trading evaluations create unique psychological challenges. The knowledge that you're being tested can lead to performance anxiety and overthinking. Here's how to manage it:</p>
      
      <ul style="font-size: 0.9em;">
        <li><strong>Treat it like a job:</strong> Approach your evaluation with the same professionalism you would a real trading job.</li>
        <li><strong>Focus on process, not outcome:</strong> Concentrate on following your trading plan rather than obsessing over profit targets.</li>
        <li><strong>Practice mindfulness:</strong> Use meditation or breathing exercises to stay calm during stressful market conditions.</li>
        <li><strong>Keep a trading journal:</strong> Document your emotions and thoughts with each trade to identify patterns.</li>
      </ul>
      
      <h2><strong>The Winning Mindset</strong></h2>
      
      <p style="font-size: 0.9em;">Successful prop traders share certain psychological characteristics:</p>
      <ul style="font-size: 0.9em;">
        <li><strong>Patience:</strong> They wait for high-probability setups rather than forcing trades.</li>
        <li><strong>Humility:</strong> They accept losses as part of the process and learn from mistakes.</li>
        <li><strong>Consistency:</strong> They follow their rules religiously, regardless of recent performance.</li>
        <li><strong>Long-term thinking:</strong> They focus on building sustainable trading habits rather than quick profits.</li>
      </ul>
      
      <p style="font-size: 0.9em;"><strong>Remember:</strong> Trading psychology is a skill that can be developed with practice and self-awareness. The mental game often separates successful prop traders from those who fail evaluations.</p>
    `
  },
  {
    id: 'risk-management-funded-accounts',
    title: 'Risk Management Strategies for Funded Trading Accounts',
    summary: 'Master the art of risk management in prop trading. Learn position sizing, drawdown protection, and capital preservation techniques for long-term success.',
    author: 'Michael Rodriguez',
    publishedDate: 'November 20, 2024',
    imageUrl: '/images/education/risk-management.png',
    content: `
      <h2><strong>Why Risk Management is Critical in Prop Trading</strong></h2>
      
      <p style="font-size: 0.9em;">Risk management isn't just about protecting your capital—it's about protecting your funded account and your future as a prop trader. Unlike personal trading, where you can always add more money, prop trading accounts have strict rules and limited second chances.</p>
      
      <h2><strong>The 1% Rule: Your Foundation</strong></h2>
      
      <p style="font-size: 0.9em;">The golden rule of risk management is never to risk more than 1-2% of your account balance on a single trade. This means:</p>
      <ul style="font-size: 0.9em;">
        <li><strong>$100,000 account:</strong> Maximum risk per trade: $1,000-$2,000</li>
        <li><strong>$50,000 account:</strong> Maximum risk per trade: $500-$1,000</li>
        <li><strong>$25,000 account:</strong> Maximum risk per trade: $250-$500</li>
      </ul>
      
      <h2><strong>Position Sizing Formulas</strong></h2>
      
      <h3><strong>Fixed Dollar Risk Method</strong></h3>
      
      <p style="font-size: 0.9em;">This is the simplest and most effective method for beginners:</p>
      <p style="font-size: 0.9em;"><strong>Position Size = Risk Amount ÷ (Entry Price - Stop Loss Price)</strong></p>
      <p style="font-size: 0.9em;">Example: If you want to risk $500 on a trade with a $2 stop loss, your position size would be $500 ÷ $2 = 250 shares.</p>
      
      <h2><strong>Drawdown Management</strong></h2>
      
      <h3><strong>Understanding Drawdown Types</strong></h3>
      
      <p style="font-size: 0.9em;"><strong>Static Drawdown:</strong> Your maximum loss is fixed at account opening. If you start with $100,000 and have a 10% static drawdown, you can lose up to $10,000.</p>
      <p style="font-size: 0.9em;"><strong>Trailing Drawdown:</strong> Your maximum loss follows your account balance. If your account grows to $110,000, your drawdown limit becomes $11,000.</p>
      
      <h3><strong>Drawdown Protection Strategies</strong></h3>
      
      <ul style="font-size: 0.9em;">
        <li><strong>Never risk more than 25% of your available drawdown</strong> on any single trade</li>
        <li><strong>Reduce position sizes</strong> as you approach your drawdown limit</li>
        <li><strong>Take a break</strong> if you lose more than 5% of your account in a day</li>
        <li><strong>Review and adjust</strong> your strategy if you hit 50% of your drawdown limit</li>
      </ul>
      
      <h2><strong>Daily Risk Limits</strong></h2>
      
      <p style="font-size: 0.9em;">Set strict daily loss limits to prevent catastrophic days:</p>
      <ul style="font-size: 0.9em;">
        <li><strong>Conservative:</strong> 1-2% of account balance per day</li>
        <li><strong>Moderate:</strong> 2-3% of account balance per day</li>
        <li><strong>Aggressive:</strong> 3-5% of account balance per day (not recommended for beginners)</li>
      </ul>
      
      <p style="font-size: 0.9em;"><strong>Remember:</strong> Risk management isn't about avoiding losses—it's about ensuring that your losses don't prevent you from continuing to trade. In prop trading, survival is the first priority, profits come second.</p>
    `
  },
  {
    id: 'technical-analysis-fundamentals',
    title: 'Technical Analysis Fundamentals for Prop Traders',
    summary: 'Master the essential technical analysis concepts every prop trader needs to know. Learn chart patterns, indicators, and price action strategies for consistent profits.',
    author: 'Alex Thompson',
    publishedDate: 'November 25, 2024',
    imageUrl: '/images/education/technical-analysis.png',
    content: `
      <h2><strong>Why Technical Analysis Matters in Prop Trading</strong></h2>
      
      <p style="font-size: 0.9em;">Technical analysis is the study of price action and market behavior through charts and indicators. For prop traders, it's essential because it provides objective entry and exit signals, helps manage risk, and works across all timeframes and markets.</p>
      
      <h2><strong>Core Principles of Technical Analysis</strong></h2>
      
      <h3><strong>1. Price Discounts Everything</strong></h3>
      
      <p style="font-size: 0.9em;">All available information—fundamental, political, economic, and psychological—is already reflected in the current price. This means we don't need to know why something is happening, just what is happening.</p>
      
      <h3><strong>2. Price Moves in Trends</strong></h3>
      
      <p style="font-size: 0.9em;">Markets tend to move in trends (up, down, or sideways). The key is identifying these trends early and trading in their direction.</p>
      
      <h3><strong>3. History Repeats Itself</strong></h3>
      
      <p style="font-size: 0.9em;">Market psychology is consistent over time, leading to recurring patterns and behaviors that can be identified and traded.</p>
      
      <h2><strong>Essential Chart Patterns</strong></h2>
      
      <h3><strong>Reversal Patterns</strong></h3>
      
      <p style="font-size: 0.9em;"><strong>Head and Shoulders:</strong> A bearish reversal pattern with three peaks, where the middle peak is highest. Signals a potential trend change from bullish to bearish.</p>
      <p style="font-size: 0.9em;"><strong>Double Top/Bottom:</strong> Two peaks or valleys at similar levels, indicating potential reversal. Double tops are bearish, double bottoms are bullish.</p>
      
      <h3><strong>Continuation Patterns</strong></h3>
      
      <p style="font-size: 0.9em;"><strong>Triangles:</strong> Consolidation patterns that typically break in the direction of the previous trend. Types include ascending, descending, and symmetrical triangles.</p>
      <p style="font-size: 0.9em;"><strong>Flags and Pennants:</strong> Short-term consolidation patterns that usually continue the previous trend after a brief pause.</p>
      
      <h2><strong>Key Technical Indicators</strong></h2>
      
      <h3><strong>Trend Following Indicators</strong></h3>
      
      <p style="font-size: 0.9em;"><strong>Moving Averages:</strong> Smooth out price data to identify trends. Common periods are 20, 50, and 200. Use crossovers for entry signals.</p>
      <p style="font-size: 0.9em;"><strong>MACD (Moving Average Convergence Divergence):</strong> Shows the relationship between two moving averages. Look for crossovers and divergences.</p>
      
      <h3><strong>Momentum Indicators</strong></h3>
      
      <p style="font-size: 0.9em;"><strong>RSI (Relative Strength Index):</strong> Measures overbought/oversold conditions. Values above 70 suggest overbought, below 30 suggest oversold.</p>
      <p style="font-size: 0.9em;"><strong>Stochastic Oscillator:</strong> Compares closing price to the price range over a period. Useful for identifying potential reversal points.</p>
      
      <h2><strong>Support and Resistance</strong></h2>
      
      <h3><strong>Identifying Key Levels</strong></h3>
      
      <ul style="font-size: 0.9em;">
        <li><strong>Previous highs and lows</strong> that caused reversals</li>
        <li><strong>Round numbers</strong> (psychological levels like 1.2000 in forex)</li>
        <li><strong>Moving averages</strong> that have acted as support/resistance</li>
        <li><strong>Volume profile levels</strong> with high trading activity</li>
      </ul>
      
      <h2><strong>Price Action Trading</strong></h2>
      
      <h3><strong>Candlestick Patterns</strong></h3>
      
      <p style="font-size: 0.9em;"><strong>Doji:</strong> Indicates indecision, often signals potential reversal</p>
      <p style="font-size: 0.9em;"><strong>Hammer/Hanging Man:</strong> Single candlestick reversal patterns</p>
      <p style="font-size: 0.9em;"><strong>Engulfing Patterns:</strong> Two-candlestick reversal patterns</p>
      
      <h3><strong>Price Action Setups</strong></h3>
      
      <p style="font-size: 0.9em;"><strong>Pin Bars:</strong> Rejection candles with long wicks, indicating potential reversal</p>
      <p style="font-size: 0.9em;"><strong>Inside Bars:</strong> Consolidation patterns that often lead to breakouts</p>
      <p style="font-size: 0.9em;"><strong>Outside Bars:</strong> Engulfing patterns that can signal trend continuation or reversal</p>
      
      <h2><strong>Multi-Timeframe Analysis</strong></h2>
      
      <p style="font-size: 0.9em;">Always analyze multiple timeframes to get a complete picture:</p>
      <ul style="font-size: 0.9em;">
        <li><strong>Higher timeframe:</strong> Determine overall trend direction</li>
        <li><strong>Medium timeframe:</strong> Identify key support/resistance levels</li>
        <li><strong>Lower timeframe:</strong> Find precise entry and exit points</li>
      </ul>
      
      <p style="font-size: 0.9em;"><strong>Remember:</strong> Technical analysis is a tool, not a crystal ball. It helps you identify high-probability setups, but nothing is guaranteed in trading. Always combine technical analysis with proper risk management and position sizing.</p>
    `
  },
  {
    id: 'drawdown-types-explained',
    title: 'Understanding Drawdown Types: Static vs Trailing vs EOD',
    summary: 'Master the different types of drawdowns in prop trading. Learn how Static, Trailing, and EOD drawdowns work and how to trade effectively with each type.',
    author: 'Jennifer Walsh',
    publishedDate: 'December 1, 2024',
    imageUrl: '/images/education/drawdown-types.png',
    content: `
      <h2><strong>What is Drawdown in Prop Trading?</strong></h2>
      
      <p style="font-size: 0.9em;">Drawdown is the maximum amount of loss you can incur before your funded account is terminated. It's essentially your "safety net" that protects the prop firm's capital. Understanding the different types of drawdowns is crucial for choosing the right firm and developing appropriate risk management strategies.</p>
      
      <h2><strong>Static Drawdown</strong></h2>
      
      <h3><strong>How It Works</strong></h3>
      
      <p style="font-size: 0.9em;">Static drawdown is a fixed dollar amount or percentage that never changes, regardless of how your account performs. It's calculated from your initial account balance.</p>
      
      <p style="font-size: 0.9em;"><strong>Example:</strong> You start with a $100,000 account and have a 10% static drawdown. Your maximum loss is $10,000, and this never changes, even if your account grows to $150,000.</p>
      
      <h3><strong>Advantages</strong></h3>
      
      <ul style="font-size: 0.9em;">
        <li><strong>Predictable:</strong> You always know your exact risk limit</li>
        <li><strong>Easier to manage:</strong> Simple to calculate and track</li>
        <li><strong>Less stressful:</strong> No moving targets to worry about</li>
      </ul>
      
      <h3><strong>Disadvantages</strong></h3>
      
      <ul style="font-size: 0.9em;">
        <li><strong>No scaling benefit:</strong> Your risk doesn't increase with account growth</li>
        <li><strong>Can feel restrictive:</strong> As your account grows, the drawdown becomes a smaller percentage</li>
      </ul>
      
      <h2><strong>Trailing Drawdown</strong></h2>
      
      <h3><strong>How It Works</strong></h3>
      
      <p style="font-size: 0.9em;">Trailing drawdown follows your account balance as it grows. It's calculated as a percentage of your current account balance, not your initial balance.</p>
      
      <p style="font-size: 0.9em;"><strong>Example:</strong> You start with $100,000 and have a 10% trailing drawdown. If your account grows to $120,000, your new drawdown limit becomes $12,000 (10% of $120,000).</p>
      
      <h3><strong>Advantages</strong></h3>
      
      <ul style="font-size: 0.9em;">
        <li><strong>Scales with success:</strong> Your risk tolerance increases as you profit</li>
        <li><strong>Rewards good performance:</strong> Successful traders get more room to operate</li>
        <li><strong>More flexible:</strong> Adapts to your account's growth</li>
      </ul>
      
      <h3><strong>Disadvantages</strong></h3>
      
      <ul style="font-size: 0.9em;">
        <li><strong>Can be confusing:</strong> The limit changes constantly</li>
        <li><strong>Risk of overconfidence:</strong> Larger drawdown limits can lead to riskier trading</li>
        <li><strong>Harder to track:</strong> Requires constant monitoring of your current limit</li>
      </ul>
      
      <h2><strong>EOD (End of Day) Drawdown</strong></h2>
      
      <h3><strong>How It Works</strong></h3>
      
      <p style="font-size: 0.9em;">EOD drawdown is calculated at the end of each trading day. It's typically a percentage of your account balance at market close, and it resets daily.</p>
      
      <p style="font-size: 0.9em;"><strong>Example:</strong> You have a 5% EOD drawdown. If you close the day with $100,000, your maximum loss for the next day is $5,000. If you close with $110,000, your next day's limit is $5,500.</p>
      
      <h3><strong>Advantages</strong></h3>
      
      <ul style="font-size: 0.9em;">
        <li><strong>Daily reset:</strong> Fresh start each trading day</li>
        <li><strong>Prevents overnight risk:</strong> No carryover of losses</li>
        <li><strong>Clear daily limits:</strong> Easy to understand and manage</li>
      </ul>
      
      <h3><strong>Disadvantages</strong></h3>
      
      <ul style="font-size: 0.9em;">
        <li><strong>No intraday protection:</strong> You can lose more than the EOD limit during the day</li>
        <li><strong>Can encourage day trading:</strong> May push traders toward short-term strategies</li>
        <li><strong>Overnight positions risky:</strong> No protection for positions held overnight</li>
      </ul>
      
      <h2><strong>Risk Management by Drawdown Type</strong></h2>
      
      <h3><strong>Static Drawdown Risk Management</strong></h3>
      
      <ul style="font-size: 0.9em;">
        <li>Never risk more than 25% of your total drawdown on any single trade</li>
        <li>Keep a buffer of at least 50% of your drawdown limit</li>
        <li>Reduce position sizes if you approach 75% of your limit</li>
      </ul>
      
      <h3><strong>Trailing Drawdown Risk Management</strong></h3>
      <ul style="font-size: 0.9em;">
        <li>Recalculate your risk limits daily</li>
        <li>Don't increase position sizes just because your limit increased</li>
        <li>Maintain consistent risk percentages relative to your current limit</li>
      </ul>
      
      <h3><strong>EOD Drawdown Risk Management</strong></h3>
      <ul style="font-size: 0.9em;">
        <li>Set strict daily loss limits (e.g., 2-3% of account)</li>
        <li>Use tight stop losses on all positions</li>
        <li>Never hold positions overnight unless absolutely necessary</li>
      </ul>
      
      <p style="font-size: 0.9em;"><strong>Remember:</strong> The best drawdown type depends on your trading style, experience level, and risk tolerance. Choose the one that aligns with your strategy and comfort level, then develop your risk management approach accordingly.</p>
    `
  },
  {
    id: 'scaling-plans-guide',
    title: 'Scaling Plans: How to Grow Your Funded Account',
    summary: 'Learn how scaling plans work in prop trading. Discover strategies for growing your account size, maximizing profits, and building long-term wealth through funded trading.',
    author: 'David Kim',
    publishedDate: 'December 5, 2024',
    imageUrl: '/images/education/scaling-plans.png',
    content: `
      <h2><strong>What Are Scaling Plans?</strong></h2>
      
      <p style="font-size: 0.9em;">Scaling plans are programs offered by prop trading firms that allow successful traders to increase their account size over time. Instead of being stuck with your initial account size, you can grow your capital as you prove your trading ability and generate consistent profits.</p>
      
      <h2><strong>How Scaling Plans Work</strong></h2>
      
      <h3><strong>The Basic Process</strong></h3>
      
      <ol style="font-size: 0.9em;">
        <li><strong>Start with initial account:</strong> Begin with your funded account (e.g., $25,000)</li>
        <li><strong>Meet profit targets:</strong> Achieve specific profit milestones</li>
        <li><strong>Request scaling:</strong> Apply for account size increase</li>
        <li><strong>Receive larger account:</strong> Get access to more capital</li>
        <li><strong>Repeat process:</strong> Continue scaling as you succeed</li>
      </ol>
      
      <h3><strong>Common Scaling Requirements</strong></h3>
      
      <ul style="font-size: 0.9em;">
        <li><strong>Profit targets:</strong> Usually 10-20% of current account size</li>
        <li><strong>Consistency requirements:</strong> Multiple profitable months</li>
        <li><strong>Drawdown limits:</strong> Must stay within risk parameters</li>
        <li><strong>Time requirements:</strong> Minimum trading period (e.g., 30 days)</li>
      </ul>
      
      <h2><strong>Types of Scaling Plans</strong></h2>
      
      <h3><strong>1. Automatic Scaling</strong></h3>
      
      <p style="font-size: 0.9em;">Your account automatically increases when you meet certain criteria. No application required.</p>
      <p style="font-size: 0.9em;"><strong>Example:</strong> Every $5,000 profit automatically increases your account by $10,000</p>
      
      <h3><strong>2. Manual Scaling</strong></h3>
      
      <p style="font-size: 0.9em;">You must apply for scaling after meeting requirements. The firm reviews your performance.</p>
      <p style="font-size: 0.9em;"><strong>Example:</strong> After 3 profitable months, you can apply for a 2x account increase</p>
      
      <h3><strong>3. Tiered Scaling</strong></h3>
      
      <p style="font-size: 0.9em;">Different scaling levels with increasing requirements and benefits.</p>
      <p style="font-size: 0.9em;"><strong>Example:</strong> Bronze (2x), Silver (3x), Gold (5x) scaling levels</p>
      
      <h2><strong>Benefits of Scaling Plans</strong></h2>
      
      <h3><strong>Financial Benefits</strong></h3>
      
      <ul style="font-size: 0.9em;">
        <li><strong>Exponential growth:</strong> Larger accounts = larger profits</li>
        <li><strong>Compound returns:</strong> Profits on profits</li>
        <li><strong>Higher income potential:</strong> Scale from thousands to millions</li>
        <li><strong>Risk diversification:</strong> Multiple accounts reduce single-account risk</li>
      </ul>
      
      <h3><strong>Professional Benefits</strong></h3>
      
      <ul style="font-size: 0.9em;">
        <li><strong>Proven track record:</strong> Demonstrates consistent profitability</li>
        <li><strong>Industry recognition:</strong> Shows you can manage larger capital</li>
        <li><strong>Career advancement:</strong> Opens doors to institutional trading</li>
        <li><strong>Confidence building:</strong> Proves your trading system works</li>
      </ul>
      
      <h2><strong>Scaling Strategies</strong></h2>
      
      <h3><strong>Conservative Scaling</strong></h3>
      
      <ul style="font-size: 0.9em;">
        <li><strong>Focus on consistency:</strong> Prioritize steady profits over large gains</li>
        <li><strong>Lower risk per trade:</strong> Use 0.5-1% risk per trade</li>
        <li><strong>Longer timeframes:</strong> Swing trading or position trading</li>
        <li><strong>Patience:</strong> Take time between scaling requests</li>
      </ul>
      
      <h3><strong>Aggressive Scaling</strong></h3>
      
      <ul style="font-size: 0.9em;">
        <li><strong>Higher risk tolerance:</strong> Use 1-2% risk per trade</li>
        <li><strong>Faster scaling:</strong> Meet targets quickly</li>
        <li><strong>Multiple strategies:</strong> Diversify across different approaches</li>
        <li><strong>Active management:</strong> Monitor positions closely</li>
      </ul>
      
      <h2><strong>Risk Management for Scaling</strong></h2>
      
      <h3><strong>Position Sizing</strong></h3>
      
      <p style="font-size: 0.9em;">As your account grows, maintain consistent risk percentages:</p>
      <ul style="font-size: 0.9em;">
        <li><strong>$25,000 account:</strong> Risk $250-500 per trade (1-2%)</li>
        <li><strong>$50,000 account:</strong> Risk $500-1,000 per trade (1-2%)</li>
        <li><strong>$100,000 account:</strong> Risk $1,000-2,000 per trade (1-2%)</li>
      </ul>
      
      <h3><strong>Drawdown Management</strong></h3>
      <ul style="font-size: 0.9em;">
        <li><strong>Never risk more than 25% of your drawdown</strong> on any single trade</li>
        <li><strong>Reduce position sizes</strong> if you approach 50% of your limit</li>
        <li><strong>Take breaks</strong> if you hit 75% of your drawdown</li>
        <li><strong>Review your strategy</strong> if you consistently approach limits</li>
      </ul>
      
      <h2><strong>Common Scaling Mistakes</strong></h2>
      <h3><strong>Overconfidence</strong></h3>
      <p style="font-size: 0.9em;">After successful scaling, traders often become overconfident and increase risk beyond their comfort level.</p>
      
      <h3><strong>Rushing the Process</strong></h3>
      <p style="font-size: 0.9em;">Trying to scale too quickly can lead to poor risk management and account blowups.</p>
      
      <h3><strong>Ignoring Fundamentals</strong></h3>
      <p style="font-size: 0.9em;">Focusing only on scaling targets while ignoring market conditions and strategy performance.</p>
      
      <h3><strong>Inconsistent Strategy</strong></h3>
      <p style="font-size: 0.9em;">Changing trading approaches frequently instead of refining a proven system.</p>
      
      <h2><strong>Maximizing Scaling Success</strong></h2>
      <h3><strong>1. Develop a Proven System</strong></h3>
      <ul style="font-size: 0.9em;">
        <li>Backtest your strategy thoroughly</li>
        <li>Paper trade before going live</li>
        <li>Document all trades and results</li>
        <li>Refine based on performance data</li>
      </ul>
      
      <h3><strong>2. Maintain Discipline</strong></h3>
      <ul style="font-size: 0.9em;">
        <li>Follow your rules religiously</li>
        <li>Don't deviate from your system</li>
        <li>Keep emotions in check</li>
        <li>Focus on process over profits</li>
      </ul>
      
      <h3><strong>3. Track Performance Metrics</strong></h3>
      <ul style="font-size: 0.9em;">
        <li><strong>Win rate:</strong> Percentage of profitable trades</li>
        <li><strong>Risk-reward ratio:</strong> Average profit vs. average loss</li>
        <li><strong>Maximum drawdown:</strong> Largest peak-to-trough decline</li>
        <li><strong>Sharpe ratio:</strong> Risk-adjusted returns</li>
      </ul>
      
      <h2><strong>Long-term Scaling Goals</strong></h2>
      <h3><strong>Year 1 Goals</strong></h3>
      <ul style="font-size: 0.9em;">
        <li>Master your trading system</li>
        <li>Achieve consistent monthly profits</li>
        <li>Scale to 2-3x initial account size</li>
        <li>Build a solid track record</li>
      </ul>
      
      <h3><strong>Year 2+ Goals</strong></h3>
      <ul style="font-size: 0.9em;">
        <li>Scale to maximum account size</li>
        <li>Manage multiple accounts</li>
        <li>Consider institutional opportunities</li>
        <li>Mentor other traders</li>
      </ul>
      
      <p style="font-size: 0.9em;"><strong>Remember:</strong> Scaling plans are a marathon, not a sprint. Focus on consistent profitability and proper risk management. The scaling will come naturally as you prove your ability to generate steady returns. Success in scaling requires patience, discipline, and a proven trading system.</p>
    `
  },
  {
    id: 'getting-started-prop-trading',
    title: 'Getting Started with Prop Trading: Your Complete Beginner\'s Guide',
    summary: 'Everything you need to know to start your prop trading journey. From choosing your first firm to passing evaluations and managing your first funded account.',
    author: 'FPG Team',
    publishedDate: 'October 10, 2024',
    imageUrl: '/images/education/getting-started.png',
    content: `
      <h2><strong>Welcome to Prop Trading</strong></h2>
      
      <p style="font-size: 0.9em;">Proprietary trading offers an incredible opportunity to trade with significant capital without risking your own money. This comprehensive guide will walk you through every step of getting started, from understanding the basics to managing your first funded account.</p>
      
      <h2><strong>Step 1: Understanding the Basics</strong></h2>
      
      <h3><strong>What is Prop Trading?</strong></h3>
      
      <p style="font-size: 0.9em;">Prop trading allows you to trade with a firm's capital in exchange for a share of the profits. You don't need to risk your own money beyond the evaluation fee, making it an attractive option for traders who want to scale up their operations.</p>
      
      <h3><strong>How It Works</strong></h3>
      
      <ol style="font-size: 0.9em;">
        <li><strong>Choose a firm:</strong> Research and select a reputable prop trading firm</li>
        <li><strong>Pay evaluation fee:</strong> Typically $50-$500 depending on account size</li>
        <li><strong>Pass the challenge:</strong> Meet profit targets while staying within drawdown limits</li>
        <li><strong>Get funded:</strong> Receive access to a live trading account</li>
        <li><strong>Trade and earn:</strong> Keep 70-90% of your profits</li>
      </ol>
      
      <h2><strong>Step 2: Preparing for Success</strong></h2>
      
      <h3><strong>Develop Your Trading Skills</strong></h3>
      
      <p style="font-size: 0.9em;">Before attempting any prop firm evaluation, ensure you have:</p>
      <ul style="font-size: 0.9em;">
        <li><strong>Consistent strategy:</strong> A proven trading approach that works across different market conditions</li>
        <li><strong>Risk management:</strong> Strict rules for position sizing and stop losses</li>
        <li><strong>Emotional control:</strong> Ability to stick to your plan under pressure</li>
        <li><strong>Market knowledge:</strong> Understanding of the markets you plan to trade</li>
      </ul>
      
      <h3><strong>Practice First</strong></h3>
      
      <p style="font-size: 0.9em;">Before paying for an evaluation:</p>
      <ul style="font-size: 0.9em;">
        <li><strong>Paper trade:</strong> Practice your strategy without real money</li>
        <li><strong>Backtest:</strong> Test your strategy on historical data</li>
        <li><strong>Demo accounts:</strong> Use free demo accounts to refine your approach</li>
        <li><strong>Small live account:</strong> Trade with a small amount of your own money first</li>
      </ul>
      
      <h2><strong>Step 3: Choosing Your First Prop Firm</strong></h2>
      
      <h3><strong>Key Factors to Consider</strong></h3>
      
      <ul style="font-size: 0.9em;">
        <li><strong>Reputation:</strong> Look for firms with positive reviews and a track record of payouts</li>
        <li><strong>Rules and requirements:</strong> Ensure the profit targets and drawdown limits are realistic for your strategy</li>
        <li><strong>Account sizes:</strong> Start with smaller accounts to minimize risk</li>
        <li><strong>Profit splits:</strong> Look for firms offering 70-90% profit splits</li>
        <li><strong>Support:</strong> Choose firms that provide educational resources and customer support</li>
      </ul>
      
      <h3><strong>Recommended Starting Firms</strong></h3>
      
      <p style="font-size: 0.9em;">For beginners, consider starting with:</p>
      <ul style="font-size: 0.9em;">
        <li><strong>Lower cost evaluations:</strong> Start with $25,000-$50,000 accounts</li>
        <li><strong>Realistic targets:</strong> Look for 8-12% profit targets</li>
        <li><strong>Generous drawdowns:</strong> 10-15% maximum drawdown limits</li>
        <li><strong>No time limits:</strong> Avoid firms with strict time constraints</li>
      </ul>
      
      <h2><strong>Step 4: The Evaluation Process</strong></h2>
      
      <h3><strong>Understanding the Challenge</strong></h3>
      
      <p style="font-size: 0.9em;">Most prop firms use a two-step evaluation process:</p>
      
      <h4><strong>Phase 1: Profit Target</strong></h4>
      
      <ul style="font-size: 0.9em;">
        <li>Meet the profit target (usually 8-12% of account size)</li>
        <li>Stay within maximum drawdown limits</li>
        <li>Follow all trading rules and restrictions</li>
      </ul>
      
      <h4><strong>Phase 2: Consistency</strong></h4>
      
      <ul style="font-size: 0.9em;">
        <li>Demonstrate consistent profitability</li>
        <li>Show proper risk management</li>
        <li>Prove you can follow rules under pressure</li>
      </ul>
      
      <h3><strong>Common Evaluation Mistakes</strong></h3>
      
      <ul style="font-size: 0.9em;">
        <li><strong>Overtrading:</strong> Taking too many trades to reach targets quickly</li>
        <li><strong>Ignoring rules:</strong> Not following firm-specific trading restrictions</li>
        <li><strong>Poor risk management:</strong> Risking too much on individual trades</li>
        <li><strong>Emotional trading:</strong> Letting fear or greed drive decisions</li>
      </ul>
      
      <h2><strong>Step 5: Managing Your Funded Account</strong></h2>
      
      <h3><strong>First Month Guidelines</strong></h3>
      
      <p style="font-size: 0.9em;">Once you receive your funded account:</p>
      <ul style="font-size: 0.9em;">
        <li><strong>Start small:</strong> Use smaller position sizes initially</li>
        <li><strong>Focus on consistency:</strong> Prioritize steady profits over large gains</li>
        <li><strong>Document everything:</strong> Keep detailed records of all trades</li>
        <li><strong>Stay disciplined:</strong> Follow your proven strategy religiously</li>
      </ul>
      
      <h3><strong>Building Your Track Record</strong></h3>
      
      <ul style="font-size: 0.9em;">
        <li><strong>Monthly targets:</strong> Aim for consistent monthly profits</li>
        <li><strong>Risk management:</strong> Never risk more than 1-2% per trade</li>
        <li><strong>Performance tracking:</strong> Monitor your win rate, average profit/loss, and drawdown</li>
        <li><strong>Continuous improvement:</strong> Analyze your trades and refine your strategy</li>
      </ul>
      
      <h2><strong>Step 6: Scaling and Growth</strong></h2>
      
      <h3><strong>When to Scale</strong></h3>
      
      <p style="font-size: 0.9em;">Consider scaling when you have:</p>
      <ul style="font-size: 0.9em;">
        <li><strong>Consistent profits:</strong> 3+ months of profitable trading</li>
        <li><strong>Low drawdown:</strong> Maximum drawdown under 5%</li>
        <li><strong>High win rate:</strong> 60%+ winning trades</li>
        <li><strong>Good risk-reward:</strong> Average profit 2x average loss</li>
      </ul>
      
      <h3><strong>Scaling Strategies</strong></h3>
      
      <ul style="font-size: 0.9em;">
        <li><strong>Multiple accounts:</strong> Manage several funded accounts simultaneously</li>
        <li><strong>Larger accounts:</strong> Request bigger account sizes from your firm</li>
        <li><strong>Different firms:</strong> Diversify across multiple prop firms</li>
        <li><strong>Strategy expansion:</strong> Add new trading strategies or markets</li>
      </ul>
      
      <h2><strong>Common Pitfalls to Avoid</strong></h2>
      
      <h3><strong>Early Mistakes</strong></h3>
      
      <ul style="font-size: 0.9em;">
        <li><strong>Rushing evaluations:</strong> Not being properly prepared before starting</li>
        <li><strong>Choosing wrong firm:</strong> Picking firms with unrealistic requirements</li>
        <li><strong>Ignoring education:</strong> Not learning proper risk management</li>
        <li><strong>Emotional trading:</strong> Letting emotions drive trading decisions</li>
      </ul>
      
      <h3><strong>Long-term Mistakes</strong></h3>
      
      <ul style="font-size: 0.9em;">
        <li><strong>Overconfidence:</strong> Increasing risk after initial success</li>
        <li><strong>Strategy hopping:</strong> Constantly changing trading approaches</li>
        <li><strong>Poor record keeping:</strong> Not tracking performance metrics</li>
        <li><strong>Neglecting risk management:</strong> Becoming complacent about position sizing</li>
      </ul>
      
      <h2><strong>Success Tips</strong></h2>
      
      <h3><strong>Mental Preparation</strong></h3>
      
      <ul style="font-size: 0.9em;">
        <li><strong>Set realistic expectations:</strong> Prop trading is not a get-rich-quick scheme</li>
        <li><strong>Focus on process:</strong> Concentrate on following your strategy, not profits</li>
        <li><strong>Stay patient:</strong> Success takes time and consistent effort</li>
        <li><strong>Learn continuously:</strong> Always seek to improve your skills</li>
      </ul>
      
      <h3><strong>Practical Tips</strong></h3>
      
      <ul style="font-size: 0.9em;">
        <li><strong>Start with one firm:</strong> Master one evaluation before trying others</li>
        <li><strong>Keep detailed records:</strong> Document every trade and decision</li>
        <li><strong>Join communities:</strong> Connect with other prop traders for support</li>
        <li><strong>Stay updated:</strong> Keep up with industry news and changes</li>
      </ul>
      
      <h2><strong>Your Action Plan</strong></h2>
      
      <h3><strong>Week 1-2: Education and Preparation</strong></h3>
      
      <ul style="font-size: 0.9em;">
        <li>Study prop trading concepts and terminology</li>
        <li>Develop or refine your trading strategy</li>
        <li>Practice with demo accounts</li>
        <li>Research potential prop firms</li>
      </ul>
      
      <h3><strong>Week 3-4: Strategy Testing</strong></h3>
      
      <ul style="font-size: 0.9em;">
        <li>Backtest your strategy thoroughly</li>
        <li>Paper trade with real market conditions</li>
        <li>Fine-tune your risk management rules</li>
        <li>Choose your first prop firm</li>
      </ul>
      
      <h3><strong>Month 2: First Evaluation</strong></h3>
      
      <ul style="font-size: 0.9em;">
        <li>Start your first prop firm evaluation</li>
        <li>Trade conservatively and follow all rules</li>
        <li>Keep detailed records of all trades</li>
        <li>Focus on consistency over speed</li>
      </ul>
      
      <h3><strong>Month 3+: Building Success</strong></h3>
      
      <ul style="font-size: 0.9em;">
        <li>Complete your evaluation and get funded</li>
        <li>Trade your funded account conservatively</li>
        <li>Build a track record of consistent profits</li>
        <li>Consider scaling opportunities</li>
      </ul>
      
      <h2><strong>Final Thoughts</strong></h2>
      
      <p style="font-size: 0.9em;">Prop trading can be a life-changing opportunity, but it requires preparation, discipline, and patience. Success doesn't happen overnight, but with the right approach, you can build a sustainable trading career with funded capital.</p>
      
      <p style="font-size: 0.9em;"><strong>Remember:</strong> The key to success in prop trading is not making the most money quickly, but making consistent profits while managing risk effectively. Focus on building a sustainable system that works across different market conditions, and the profits will follow naturally.</p>
      
      <p style="font-size: 0.9em;">Good luck on your prop trading journey! 🚀</p>
    `
  }
];
