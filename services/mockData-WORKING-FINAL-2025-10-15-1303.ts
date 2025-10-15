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
    reviewCount: 500,
    affiliateUrl: 'https://audacitycapital.co.uk/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: true,
    isUSFriendly: false,
    fundingModels: ['Instant Funding'],
    tradingInstruments: ['Forex', 'Indices', 'Commodities'],
    categories: ['Forex/CFD', 'Instant Funding'],
    payoutFrequency: 'Monthly',
    drawdownType: 'Static',
    evaluationProcessSummary: 'Audacity focuses on an instant funding model where traders are vetted and then given access to a live account, bypassing a lengthy challenge.',
    minStartingCost: 99,
    geoRestrictions: 'Does not accept US clients.',
    overview: 'Established in 2012, Audacity Capital is one of the more mature firms in the space. They specialize in instant funding for experienced traders, providing capital up to $480K. While their rules can be strict, they offer tight spreads and a focus on trader education. They do not accept US clients.',
    pros: ["Long-standing firm (since 2012)", "Focus on instant funding", "Tight spreads", "Educational focus"],
    cons: ["Strict rules", "No US clients accepted", "Monthly payouts are slower than competitors"],
    details: { minFunding: 15000, maxFunding: 480000, profitSplit: 75, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 10, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: false, noTimeLimit: true },
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
    reviewCount: 18000,
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
    evaluationProcessSummary: 'Provides various programs including Hyper Growth, a 3-step Bootcamp, and High Stakes. Offers scaling up to $4 million and allows EA and news trading.',
    minStartingCost: 39,
    geoRestrictions: 'Available worldwide.',
    overview: 'Founded in 2016, The 5%ers is a major player offering up to $4 million in funding. They stand out with three distinct evaluation models: Bootcamp, Hyper Growth, and High Stakes, catering to different trader styles. With profit splits reaching 100%, they are one of the most popular firms globally.',
    pros: ["Massive scaling up to $4M", "Unique and flexible evaluation models", "Profit splits up to 100%", "Strong reputation"],
    cons: ["Bootcamp model has a learning curve"],
    details: { minFunding: 5000, maxFunding: 4000000, profitSplit: 100, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 8, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },
    deal: {
      description: 'Join the popular Bootcamp program with special offers.',
      isTopDeal: true,
    },
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
    reviewCount: 1500,
    affiliateUrl: 'https://citytradersimperium.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: true,
    isUSFriendly: true,
    fundingModels: ['Instant Funding', '1-Step Challenge', '2-Step Challenge'],
    tradingInstruments: ['Forex', 'Indices', 'Metals', 'Crypto', 'Commodities'],
    categories: ['Forex/CFD', 'Instant Funding'],
    payoutFrequency: 'On-demand',
    drawdownType: 'Static',
    evaluationProcessSummary: 'Offers flexible funding options and a scaling plan up to $2 million. Known for strong coaching and allowing news trading.',
    minStartingCost: 109,
    geoRestrictions: 'Available worldwide.',
    overview: "City Traders Imperium focuses on long-term trader development, offering on-demand payouts and a unique salary option for its most successful VIP traders. They allow news trading and have a strong educational focus, making them great for swing traders.",
    pros: ["On-demand payouts", "Unique VIP salary option", "Up to 100% profit split", "Scaling up to $2M"],
    cons: ["Slightly higher entry fees for some programs"],
    details: { minFunding: 2500, maxFunding: 2000000, profitSplit: 100, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 9, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: false },
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
    reviewCount: 600,
    affiliateUrl: 'https://ftuk.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: true,
    isUSFriendly: true,
    fundingModels: ['Instant Funding', '1-Step Challenge'],
    tradingInstruments: ['Forex', 'Indices'],
    categories: ['Forex/CFD', 'Instant Funding'],
    payoutFrequency: 'Bi-weekly',
    drawdownType: 'Static',
    evaluationProcessSummary: 'FTUK provides two main programs: Instant Funding and an Evaluation. The Instant Funding model is particularly popular with traders using Expert Advisors.',
    minStartingCost: 99,
    geoRestrictions: 'Available worldwide.',
    overview: 'FTUK is a UK-based firm that has gained popularity for its EA-friendly instant funding model. They offer scaling up to $1M and an 80% profit split. However, some traders have reported delays in payouts, which is a key consideration.',
    pros: ["Instant funding model", "EA-friendly policies", "High scaling potential"],
    cons: ["Some reports of payout delays", "Mixed reviews on support"],
    details: { minFunding: 14000, maxFunding: 1000000, profitSplit: 80, maxDrawdown: 6, dailyDrawdown: 0, profitTarget: 10, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: false, noTimeLimit: true },
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
    reviewCount: 900,
    affiliateUrl: 'https://fundyourfx.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: true,
    isUSFriendly: true,
    fundingModels: ['Instant Funding'],
    tradingInstruments: ['Forex'],
    categories: ['Forex/CFD', 'Instant Funding'],
    payoutFrequency: 'Weekly',
    drawdownType: 'Static',
    evaluationProcessSummary: 'Focuses on instant funding with a clear, three-level scaling plan for profitable traders to grow their capital.',
    minStartingCost: 250,
    geoRestrictions: 'Primarily UK-focused.',
    overview: 'FundYourFX is a UK-regulated prop firm that offers instant funding. They have a simple premise with scaling plans to reward consistency. While established, they have fewer recent reviews compared to larger competitors.',
    pros: ["UK-regulated", "Clear scaling plans", "Weekly payouts"],
    cons: ["Limited recent reviews", "Higher entry cost"],
    details: { minFunding: 15000, maxFunding: 1000000, profitSplit: 90, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 10, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },
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
    reviewCount: 28000,
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
    evaluationProcessSummary: 'FTMO features a renowned 2-step evaluation process (Challenge and Verification) to test trading skills, discipline, and risk management before offering a funded account. US access is provided via OANDA.',
    minStartingCost: 155,
    geoRestrictions: 'US clients accepted via OANDA.',
    overview: 'FTMO, founded in 2015, is a global leader in the prop trading industry. They offer funding up to $2M and are known for their rigorous 2-step evaluation, which has become the industry benchmark. They maintain a stellar reputation for reliability and trader support.',
    pros: ["Highly reputable and trusted brand", "Clear scaling plan up to $2M", "Excellent trader support and analytics", "Up to 90% profit split", "US access via OANDA"],
    cons: ["Rigorous 2-step evaluation can be difficult", "Strict on consistency rules", "No instant funding option"],
    details: { minFunding: 10000, maxFunding: 2000000, profitSplit: 90, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 10, minTradingDays: 4 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },
    deal: {
      description: 'The industry standard challenge at a competitive price.',
      isTopDeal: true,
    },
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
    reviewCount: 31000,
    affiliateUrl: 'https://fundingpips.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: true,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge', '2-Step Challenge', '3-Step Challenge', 'Instant Funding'],
    tradingInstruments: ['Forex', 'Indices', 'Commodities', 'Crypto', 'Metals'],
    categories: ['Forex/CFD', 'Instant Funding'],
    payoutFrequency: '4h',
    drawdownType: 'Static',
    evaluationProcessSummary: 'Extremely flexible with multiple evaluation types, including a Zero-challenge option. ISO accredited and allows EAs, but enforces a consistency rule.',
    minStartingCost: 32,
    geoRestrictions: 'Available worldwide.',
    overview: "Funding Pips has disrupted the industry with its focus on payout speed, offering withdrawals in as little as 4 hours. With low entry fees and support for EAs, they are a top choice for active traders, though traders should be aware of their consistency rule.",
    pros: ["Extremely fast payouts (4 hours)", "Multiple funding models including instant", "Very low entry fees", "EAs allowed", "ISO accredited"],
    cons: ["Consistency rule can be restrictive"],
    details: { minFunding: 5000, maxFunding: 300000, profitSplit: 100, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 8, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },
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
    reviewCount: 2500,
    affiliateUrl: 'https://fundedtradingplus.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: true,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge', '2-Step Challenge', 'Instant Funding'],
    tradingInstruments: ['Forex', 'Indices', 'Commodities', 'Crypto'],
    categories: ['Forex/CFD', 'Instant Funding'],
    payoutFrequency: '3-7 days',
    drawdownType: 'Static',
    evaluationProcessSummary: 'Offers lifetime access, a variety of trading platforms, and is very EA-friendly with customizable payouts.',
    minStartingCost: 119,
    geoRestrictions: 'Available worldwide.',
    overview: 'Funded Trading Plus is a UK-based firm known for its simplicity and transparency. They offer a range of programs with progressive profit splits from 80% to 100% and fast, customizable payout cycles. Their lack of restrictions makes them a top choice for pros.',
    pros: ["No restrictions on trading style", "High scaling plan up to $5M", "Simple and clear rules", "EA-friendly"],
    cons: ["Slightly higher cost than some competitors"],
    details: { minFunding: 5000, maxFunding: 5000000, profitSplit: 100, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 10, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },
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
    reviewCount: 800,
    affiliateUrl: 'https://finotivefunding.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: true,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge', '2-Step Challenge', 'Instant Funding'],
    tradingInstruments: ['Forex', 'Indices', 'Crypto', 'Commodities'],
    categories: ['Forex/CFD', 'Instant Funding'],
    payoutFrequency: 'Bi-weekly',
    drawdownType: 'Static',
    evaluationProcessSummary: 'Offers high leverage and a one-step evaluation with end-of-day trailing drawdown and no daily loss limits. Also features a unique salary program.',
    minStartingCost: 50,
    geoRestrictions: 'Available worldwide.',
    overview: "Finotive Funding caters to aggressive traders with high leverage options. They offer flexible funding models and stand out with a unique feature: a fixed monthly salary for traders who pass their classic challenge. They boast over $20M in payouts.",
    pros: ["Fixed monthly salary option", "Fast automated payouts", "Instant funding available", "High leverage"],
    cons: ["Some consistency rules can be challenging"],
    details: { minFunding: 2500, maxFunding: 4000000, profitSplit: 95, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 10, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },
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
    evaluationProcessSummary: 'A standard 1/2-step evaluation model with a focus on niche markets like meme stocks and Bitcoin.',
    minStartingCost: 35,
    geoRestrictions: 'Available worldwide.',
    overview: 'FundedPrime, launched in 2023, is an interesting new firm backed by the reputable broker Eightcap. They aim to attract traders with unique challenges focused on meme stocks and crypto, offering a different flavor in a crowded market.',
    pros: ["Backed by Eightcap broker", "Unique challenge themes", "Low entry cost"],
    cons: ["Newer firm with limited reviews", "Bi-weekly payouts are standard"],
    details: { minFunding: 10000, maxFunding: 200000, profitSplit: 90, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 8, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },
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
    reviewCount: 45000,
    affiliateUrl: 'https://fundednext.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['Stellar 1-Step', 'Stellar 2-Step'],
    tradingInstruments: ['Forex', 'Indices', 'Commodities'],
    categories: ['Forex/CFD', 'Multi-Asset'],
    payoutFrequency: 'On-demand',
    drawdownType: 'Static',
    evaluationProcessSummary: 'Features the popular Stellar 1 and 2-step evaluation models with clear rules and achievable targets.',
    minStartingCost: 32,
    geoRestrictions: 'Available worldwide.',
    overview: 'FundedNext has quickly become a market leader since its 2022 launch, with over $95 million in payouts. Their Stellar challenges are popular with beginners, and they are innovating with features like AI support. They have faced some unsubstantiated KYC rumors but remain a top choice.',
    pros: ["Massive payout record ($95M+)", "Excellent for beginners", "Scaling up to $4M", "On-demand payouts"],
    cons: ["Past KYC rumors (though largely unsubstantiated)"],
    details: { minFunding: 6000, maxFunding: 4000000, profitSplit: 90, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 8, minTradingDays: 5 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },
  },
  {
    id: 'maven-trading',
    name: 'Maven Trading',
    shortName: 'Maven',
    logoUrl: 'https://logo.clearbit.com/maventrading.com',
    officialWebsite: 'https://maventrading.com/',
    tagline: 'Low Fees and Strong Community',
    shortDescription: 'A community-focused firm offering low entry fees and mentorship opportunities.',
    rating: 4.3,
    reviewCount: 4700,
    affiliateUrl: 'https://maventrading.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge', '2-Step Challenge'],
    tradingInstruments: ['Forex', 'Indices', 'Crypto'],
    categories: ['Forex/CFD'],
    payoutFrequency: 'Bi-weekly',
    drawdownType: 'Static',
    evaluationProcessSummary: 'Standard 1 and 2-step evaluations with a focus on community support and mentorship during the process.',
    minStartingCost: 100,
    geoRestrictions: 'Available worldwide.',
    overview: 'Maven Trading aims to build a strong community of traders by offering mentorship and support alongside its funding programs. They provide a solid, if standard, offering with bi-weekly payouts and scaling up to $500K.',
    pros: ["Strong community focus", "Mentorship programs", "24/7 support"],
    cons: ["Limited data for 2025 updates", "Standard offering compared to top-tier firms"],
    details: { minFunding: 5000, maxFunding: 500000, profitSplit: 80, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 10, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },
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
    reviewCount: 4000,
    affiliateUrl: 'https://fxify.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: true,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge', '2-Step Challenge', 'Instant Funding'],
    tradingInstruments: ['Forex', 'Indices', 'Commodities', 'Crypto'],
    categories: ['Multi-Asset', 'Instant Funding'],
    payoutFrequency: 'Weekly',
    drawdownType: 'Static',
    evaluationProcessSummary: 'Features fast evaluations with multiple challenge types including instant funding. Known for instant payouts and a strong broker partnership.',
    minStartingCost: 49,
    geoRestrictions: 'Available worldwide, good for US clients.',
    overview: 'Launched in 2023, FXIFY has grown rapidly, paying out over $30M. They offer funding up to $400,000 and are highly rated for their fast evaluations and strong support for US traders.',
    pros: ["Strong broker-backing", "Fast evaluations", "High scaling up to $400K", "Good for US clients"],
    cons: ["Newer firm in the market"],
    details: { minFunding: 15000, maxFunding: 400000, profitSplit: 90, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 10, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },
  },
  {
    id: 'blue-guardian',
    name: 'Blue Guardian',
    shortName: 'Blue Guardian',
    logoUrl: 'https://logo.clearbit.com/blueguardian.com',
    officialWebsite: 'https://blueguardian.com/',
    tagline: 'Guardian Shield & Low Entry Cost',
    shortDescription: 'Known for its innovative "Guardian Shield" risk tool and very low entry fees starting at $27.',
    rating: 4.5,
    reviewCount: 1000,
    affiliateUrl: 'https://blueguardian.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: true,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge', 'Instant Funding', 'Starter'],
    tradingInstruments: ['Forex', 'Indices', 'Crypto'],
    categories: ['Forex/CFD', 'Instant Funding'],
    payoutFrequency: '7 days',
    drawdownType: 'Static',
    evaluationProcessSummary: 'Offers several models including a starter program. Their unique "Guardian Shield" feature acts as an equity protector to auto-close trades.',
    minStartingCost: 27,
    geoRestrictions: 'Available worldwide.',
    overview: 'Blue Guardian stands out with its low entry costs and the "Guardian Shield" equity protection feature. They ran a popular $800K promotion, but have faced some complaints about strict breach rules.',
    pros: ["Very low entry cost ($27)", "Innovative Guardian Shield feature", "Weekly payouts"],
    cons: ["Some complaints about strict breach rules", "Lower max funding than top competitors"],
    details: { minFunding: 10000, maxFunding: 200000, profitSplit: 90, maxDrawdown: 8, dailyDrawdown: 4, profitTarget: 8, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },
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
    evaluationProcessSummary: 'Standard 1 and 2-step evaluation models with a reputation for being flexible and friendly towards automated trading strategies.',
    minStartingCost: 50,
    geoRestrictions: 'Available worldwide.',
    overview: 'Lark Funding is a newer firm that has gained traction due to its flexible rules and accommodating stance on EAs. They offer scaling up to $1M and on-demand payouts, but have limited data compared to more established players.',
    pros: ["Flexible rules", "EA friendly", "On-demand payouts", "Scaling up to $1M"],
    cons: ["Limited data and reviews", "Newer firm"],
    details: { minFunding: 5000, maxFunding: 1000000, profitSplit: 90, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 8, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },
  },
    {
    id: 'aquafunded',
    name: 'AquaFunded',
    shortName: 'AquaFunded',
    logoUrl: 'https://logo.clearbit.com/aquafunded.com',
    officialWebsite: 'https://aquafunded.com',
    tagline: 'Water-Themed Challenges',
    shortDescription: 'An emerging firm with unique branding, offering crypto and forex trading.',
    rating: 4.3,
    reviewCount: 1000,
    affiliateUrl: 'https://aquafunded.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: true,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge', '2-Step Challenge', 'Instant Funding'],
    tradingInstruments: ['Forex', 'Indices', 'Commodities', 'Crypto'],
    categories: ['Multi-Asset', 'Instant Funding'],
    payoutFrequency: 'Bi-weekly',
    drawdownType: 'Static',
    evaluationProcessSummary: 'Offers a variety of challenges with a unique, water-themed branding to stand out in the market.',
    minStartingCost: 97,
    geoRestrictions: 'Available worldwide.',
    overview: 'AquaFunded is a newer firm that uses creative branding to attract traders. They offer a solid range of assets and funding models, including instant funding, and are looking to establish themselves in a competitive space.',
    pros: ["Unique branding", "Offers instant funding", "Trades crypto and forex"],
    cons: ["Emerging firm with less history", "Standard bi-weekly payouts"],
    details: { minFunding: 10000, maxFunding: 500000, profitSplit: 90, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 8, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },
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
    reviewCount: 4000,
    affiliateUrl: 'https://toptiertrader.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['2-Step Challenge', 'Custom Challenge'],
    tradingInstruments: ['Forex', 'Indices', 'Commodities'],
    categories: ['Multi-Asset'],
    payoutFrequency: '24h',
    drawdownType: 'Static',
    evaluationProcessSummary: 'Known for their standard 2-step evaluation and the ability to request custom challenge parameters.',
    minStartingCost: 150,
    geoRestrictions: 'Available worldwide.',
    overview: 'TopTier Trader, which recently rebranded to TX3, offers fast 24-hour payouts and custom challenges. However, they have been criticized for implementing sudden rule changes, which has impacted trader trust.',
    pros: ["24-hour payouts", "Customizable challenges", "Scaling up to $2M"],
    cons: ["Criticism over sudden rule changes", "Rebranding has caused some confusion"],
    details: { minFunding: 25000, maxFunding: 2000000, profitSplit: 90, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 10, minTradingDays: 4 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },
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
    reviewCount: 1000,
    affiliateUrl: 'https://blueberryfunded.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['2-Step Challenge'],
    tradingInstruments: ['Forex', 'Indices', 'Commodities'],
    categories: ['Forex/CFD'],
    payoutFrequency: 'Bi-weekly',
    drawdownType: 'Static',
    evaluationProcessSummary: 'Offers a standard 2-step challenge with a unique branding and a focus on scaling successful traders.',
    minStartingCost: 87,
    geoRestrictions: 'Available worldwide.',
    overview: 'Launched in 2024, Blueberry Funded is backed by the reputable Blueberry Markets broker. They use creative branding and focus on scaling to attract traders in a competitive market.',
    pros: ["Backed by a reputable broker", "Unique branding", "Focus on scaling"],
    cons: ["Only offers a 2-step challenge", "Newer firm"],
    details: { minFunding: 10000, maxFunding: 1000000, profitSplit: 85, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 8, minTradingDays: 4 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },
  },
    {
    id: 'thinkcapital',
    name: 'ThinkCapital',
    shortName: 'ThinkCapital',
    logoUrl: 'https://logo.clearbit.com/thinkmarkets.com',
    officialWebsite: 'https://thinkmarkets.com/prop-trading',
    tagline: 'Prop Trading by ThinkMarkets',
    shortDescription: 'The prop firm arm of ThinkMarkets, offering educational tools and the proprietary ThinkTrader platform.',
    rating: 4.3,
    reviewCount: 500,
    affiliateUrl: 'https://thinkmarkets.com/prop-trading/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['Lightning', 'Dual Step', 'Nexus'],
    tradingInstruments: ['Forex', 'Indices', 'Commodities'],
    categories: ['Multi-Asset'],
    payoutFrequency: 'Monthly',
    drawdownType: 'Static',
    evaluationProcessSummary: 'Offers three distinct challenge types on their proprietary ThinkTrader and MT5 platforms.',
    minStartingCost: 100,
    geoRestrictions: 'Available worldwide.',
    overview: 'ThinkCapital is the prop trading program from the well-known broker ThinkMarkets. They are a good choice for new traders who value the security of a major broker and access to educational tools.',
    pros: ["Backed by a major broker (ThinkMarkets)", "Three different challenge types", "Educational tools", "Proprietary ThinkTrader platform"],
    cons: ["Monthly payout is slow"],
    details: { minFunding: 10000, maxFunding: 500000, profitSplit: 80, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 10, minTradingDays: 5 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: false, fastPayouts: false, noTimeLimit: true },
  },
  {
    id: 'seacrest-funded',
    name: 'Seacrest Funded',
    shortName: 'Seacrest',
    logoUrl: 'https://logo.clearbit.com/seacrestfunded.com',
    officialWebsite: 'https://seacrestfunded.com/',
    tagline: 'Coastal Focus, Formerly MyFundedFX',
    shortDescription: 'The rebranded version of MyFundedFX, an emerging firm with a coastal theme.',
    rating: 4.2,
    reviewCount: 2800,
    affiliateUrl: 'https://seacrestfunded.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge', '2-Step Challenge'],
    tradingInstruments: ['Forex', 'Indices'],
    categories: ['Forex/CFD', 'Multi-Asset'],
    payoutFrequency: 'Weekly',
    drawdownType: 'Static',
    evaluationProcessSummary: 'Offers standard 1 and 2-step challenges under its new brand identity.',
    minStartingCost: 89,
    geoRestrictions: 'Available worldwide.',
    overview: 'Seacrest Funded is the new name for the popular firm MyFundedFX. They are currently establishing their new brand identity while continuing to offer a range of funding challenges.',
    pros: ["Established user base from MyFundedFX", "Weekly payouts"],
    cons: ["Limited reviews under the new brand", "Emerging firm identity"],
    details: { minFunding: 5000, maxFunding: 200000, profitSplit: 80, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 8, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },
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
    reviewCount: 13000,
    isFeatured: true,
    affiliateUrl: 'https://apextraderfunding.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge'],
    tradingInstruments: ['Futures'],
    categories: ['Futures'],
    payoutFrequency: 'Every 8 days',
    drawdownType: 'Trailing',
    evaluationProcessSummary: 'Offers a one-step evaluation process with no daily drawdown. Traders keep 100% of the first $25K profit per account.',
    minStartingCost: 147,
    geoRestrictions: 'Available worldwide.',
    overview: 'Founded in 2021, Apex Trader Funding is the most popular choice for futures traders, with over $579M in payouts. They are known for a straightforward one-step evaluation, no daily drawdown rule, and the ability to manage up to 20 accounts simultaneously.',
    pros: ["Simple one-step evaluation", "No daily drawdown limit", "Frequent huge discounts (80%+)", "Trade with up to 20 accounts", "Keep 100% of first $25k profit"],
    cons: ["Trailing drawdown can be tricky", "Monthly subscription fee model", "Past connection issues (resolved)"],
    details: { minFunding: 25000, maxFunding: 6000000, profitSplit: 90, maxDrawdown: 6, dailyDrawdown: 0, profitTarget: 6, minTradingDays: 7 },
    features: { scalingPlan: false, weekendHolding: false, newsTrading: true, expertAdvisors: false, fastPayouts: true, noTimeLimit: true },
    deal: {
      description: 'Get up to 80% off on all evaluation accounts.',
      isTopDeal: true,
    },
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
    reviewCount: 11000,
    affiliateUrl: 'https://topstep.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['Trading Combine'],
    tradingInstruments: ['Futures'],
    categories: ['Futures'],
    payoutFrequency: 'Daily',
    drawdownType: 'Trailing',
    evaluationProcessSummary: 'Provides a structured evaluation process called the Trading Combine on their proprietary TopstepX platform, with strong coaching and a unique "tilt" warning system.',
    minStartingCost: 49,
    geoRestrictions: 'Available worldwide.',
    overview: 'A Chicago-based pioneer since 2012, Topstep is highly respected in the futures space, with over $81M in payouts. They are known for their educational resources, strong community, and structured evaluation. Traders keep 100% of their profits until the max payout is reached.',
    pros: ["Long-standing, reputable company", "Daily payouts after 5 winning days", "Excellent educational resources and coaching", "Proprietary TopstepX platform with tilt indicator"],
    cons: ["Trailing drawdown can be strict", "Monthly subscription model"],
    details: { minFunding: 50000, maxFunding: 750000, profitSplit: 100, maxDrawdown: 5, dailyDrawdown: 0, profitTarget: 6, minTradingDays: 2 },
    features: { scalingPlan: true, weekendHolding: false, newsTrading: true, expertAdvisors: false, fastPayouts: true, noTimeLimit: true },
    deal: {
      description: 'Special pricing on the Trading Combine evaluations.',
      isTopDeal: true,
    },
  },
  {
    id: 'top-one-futures',
    name: 'Top One Futures',
    shortName: 'Top One',
    logoUrl: '/logos/top-one-futures-icon.png',
    officialWebsite: 'https://toponefutures.com/',
    tagline: '2-Hour Auto-Payouts',
    shortDescription: 'A new 2025 entrant focused on instant sim trading and the fastest automated payouts in the futures market.',
    rating: 4.7,
    reviewCount: 1000,
    affiliateUrl: 'https://toponefutures.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: true,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge', 'Instant Sim'],
    tradingInstruments: ['Futures'],
    categories: ['Futures', 'Instant Funding'],
    payoutFrequency: '2h (auto)',
    drawdownType: 'Trailing',
    evaluationProcessSummary: 'Offers a 1-step evaluation or an instant sim funding model with no daily drawdown, designed for scalpers.',
    minStartingCost: 99,
    geoRestrictions: 'Available worldwide.',
    overview: 'Launched in 2025, Top One Futures is making a name for itself with extremely fast, 2-hour automated payouts via its ProjectX platform. Their instant sim funding and lack of a daily drawdown make them a strong new choice for scalpers.',
    pros: ["Fastest automated payouts (2 hours)", "Instant sim funding option", "No daily drawdown"],
    cons: ["Very new firm (launched 2025)", "Long-term viability unproven"],
    details: { minFunding: 25000, maxFunding: 250000, profitSplit: 90, maxDrawdown: 5, dailyDrawdown: 0, profitTarget: 6, minTradingDays: 1 },
    features: { scalingPlan: true, weekendHolding: false, newsTrading: true, expertAdvisors: false, fastPayouts: true, noTimeLimit: true },
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
    reviewCount: 900,
    affiliateUrl: 'https://tradeify.co/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: true,
    isUSFriendly: true,
    fundingModels: ['Instant Funding'],
    tradingInstruments: ['Futures'],
    categories: ['Futures', 'Instant Funding'],
    payoutFrequency: '30-min',
    drawdownType: 'Trailing',
    evaluationProcessSummary: 'Tradeify\'s Lightning program offers instant funding with no evaluation phase. This allows traders to get funded and paid out extremely quickly.',
    minStartingCost: 199,
    geoRestrictions: 'US-friendly.',
    overview: 'Tradeify is a top choice for futures traders prioritizing speed and simplicity. Their Lightning instant funding program has no evaluation, allows news trading, and offers some of the fastest payouts in the industry (30 minutes).',
    pros: ["No evaluation phase", "Extremely fast payouts (30 minutes)", "News trading allowed", "US-friendly"],
    cons: ["Higher one-time cost than subscription models", "Rules can be strict for consistency"],
    details: { minFunding: 25000, maxFunding: 250000, profitSplit: 90, maxDrawdown: 5, dailyDrawdown: 0, profitTarget: 0, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: false, newsTrading: true, expertAdvisors: false, fastPayouts: true, noTimeLimit: true },
  },
    {
    id: 'my-funded-futures',
    name: 'SeacrestFunded',
    shortName: 'Seacrest',
    logoUrl: 'https://funded.seacrestmarkets.io/android-chrome-192x192.png',
    officialWebsite: 'https://funded.seacrestmarkets.io/',
    tagline: 'Daily, Automated Payouts for Futures Traders',
    shortDescription: 'A futures-specialized firm known for its quick one-step evaluation, daily automated payouts, and trader-friendly model.',
    rating: 4.8,
    reviewCount: 10000,
    affiliateUrl: 'https://myfundedfutures.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge'],
    tradingInstruments: ['Futures', 'Commodities'],
    categories: ['Futures'],
    payoutFrequency: 'Daily',
    drawdownType: 'Trailing',
    evaluationProcessSummary: 'Provides a one-step evaluation with end-of-day trailing drawdown. Traders keep 100% of the first $10k.',
    minStartingCost: 99,
    geoRestrictions: 'Available worldwide.',
    overview: "My Funded Futures is a top-rated futures firm with over $81M in payouts, praised for its transparent rules, fast evaluations, and daily automated payouts. Their end-of-day trailing drawdown and 100% split on the first $10k are trader-friendly features.",
    pros: ["Daily, automated payouts", "Keep 100% of first $10k profit", "End-of-day trailing drawdown", "Free NinjaTrader license"],
    cons: ["Trailing drawdown can be difficult for some traders"],
    details: { minFunding: 50000, maxFunding: 600000, profitSplit: 100, maxDrawdown: 10, dailyDrawdown: 0, profitTarget: 6, minTradingDays: 1 },
    features: { scalingPlan: true, weekendHolding: false, newsTrading: true, expertAdvisors: false, fastPayouts: true, noTimeLimit: true },
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
    reviewCount: 600,
    affiliateUrl: 'https://blusky.pro/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge'],
    tradingInstruments: ['Futures'],
    categories: ['Futures'],
    payoutFrequency: 'Daily',
    drawdownType: 'Static',
    evaluationProcessSummary: 'Offers a straightforward 1-step evaluation with a static drawdown (no trailing) and no daily loss limit, making it easier for beginners to manage risk.',
    minStartingCost: 85,
    geoRestrictions: 'Available worldwide.',
    overview: 'BluSky Trading is considered one of the top futures firms in 2025, especially for beginners. They offer simple evaluations with a popular static drawdown option, daily payouts, excellent support, and a clear path to transitioning successful traders to a real brokerage account.',
    pros: ["Beginner-friendly", "Static drawdown option (no trailing)", "No daily loss limit", "Daily payouts available", "Hold trades over weekend", "Good customer support"],
    cons: ["Lower max funding than some competitors", "Monthly subscription model"],
    details: { minFunding: 25000, maxFunding: 150000, profitSplit: 90, maxDrawdown: 5, dailyDrawdown: 0, profitTarget: 6, minTradingDays: 1 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: false, fastPayouts: true, noTimeLimit: true },
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
    reviewCount: 5800,
    affiliateUrl: 'https://takeprofittrader.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge'],
    tradingInstruments: ['Futures'],
    categories: ['Futures'],
    payoutFrequency: 'On-demand',
    drawdownType: 'Trailing',
    evaluationProcessSummary: 'A one-step evaluation firm that stands out with its Pro+ account, which sends real funds to the exchange. Qualification in just 5 days and payouts from day 1.',
    minStartingCost: 150,
    geoRestrictions: 'Available worldwide.',
    overview: 'Founded in 2021, Take Profit Trader is renowned for fast payouts, which can be requested from day one of being funded. Their Pro+ accounts offer real funds at the exchange, and they frequently offer large discounts on their challenges.',
    pros: ["Payouts from day 1", "Pro+ accounts use real funds", "Frequent 40% off discounts", "Supports 15+ platforms"],
    cons: ["No daily loss limit only in Pro+ account", "Monthly subscription model"],
    details: { minFunding: 25000, maxFunding: 150000, profitSplit: 90, maxDrawdown: 8, dailyDrawdown: 0, profitTarget: 6, minTradingDays: 5 },
    features: { scalingPlan: true, weekendHolding: false, newsTrading: true, expertAdvisors: false, fastPayouts: true, noTimeLimit: true },
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
    reviewCount: 1000,
    affiliateUrl: 'https://bulenox.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge'],
    tradingInstruments: ['Futures'],
    categories: ['Futures'],
    payoutFrequency: 'Weekly',
    drawdownType: 'Trailing',
    evaluationProcessSummary: 'A 1-step evaluation with an end-of-day trailing drawdown, which is more forgiving than an intra-day one. Requires algo approval.',
    minStartingCost: 125,
    geoRestrictions: 'Available worldwide.',
    overview: 'Bulenox is a popular futures firm famous for its frequent and massive discounts (up to 91% off). They offer an end-of-day drawdown, which is a major advantage for traders, and are friendly to news and DCA strategies, with algos requiring approval.',
    pros: ["Frequent huge discounts (91% off)", "End-of-day trailing drawdown", "News and DCA trading allowed", "Algo friendly (with approval)"],
    cons: ["Monthly subscription", "Standard weekly payouts"],
    details: { minFunding: 10000, maxFunding: 250000, profitSplit: 90, maxDrawdown: 10, dailyDrawdown: 0, profitTarget: 6, minTradingDays: 5 },
    features: { scalingPlan: true, weekendHolding: false, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },
    deal: {
      description: 'Massive 91% off deals on qualification accounts.',
      isTopDeal: true,
    },
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
    reviewCount: 500,
    affiliateUrl: 'https://leelootrading.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge'],
    tradingInstruments: ['Futures'],
    categories: ['Futures'],
    payoutFrequency: 'Weekly',
    drawdownType: 'Trailing',
    evaluationProcessSummary: 'Offers a one-step evaluation process with a focus on futures trading and frequent deep discounts on their challenges.',
    minStartingCost: 26,
    geoRestrictions: 'Available worldwide.',
    overview: 'Leeloo Trading is a US-based futures firm offering high flexibility and account bundles. A key feature is that traders keep 100% of their first $8,000-$12,500 in profits. They have a 30-day minimum before the first payout.',
    pros: ["Keep 100% of initial profits ($8k-$12.5k)", "Flexible rules (no news ban)", "Frequent 80% off deals"],
    cons: ["30-day minimum before first payout", "Monthly payout frequency after first withdrawal"],
    details: { minFunding: 25000, maxFunding: 300000, profitSplit: 100, maxDrawdown: 6, dailyDrawdown: 0, profitTarget: 6, minTradingDays: 10 },
    features: { scalingPlan: true, weekendHolding: false, newsTrading: true, expertAdvisors: false, fastPayouts: false, noTimeLimit: true },
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
    evaluationProcessSummary: 'Offers 1-step and Zero-challenge models, leveraging the experience of its parent company.',
    minStartingCost: 125,
    geoRestrictions: 'Available worldwide.',
    overview: 'Launched in 2025, Funding Ticks is a new futures-focused firm with strong backing from the popular Forex firm Funding Pips. They aim to bring the same trader-friendly approach to the futures market, but have limited data so far.',
    pros: ["Backed by a reputable firm (Funding Pips)", "Offers a zero-challenge model"],
    cons: ["Very new firm with limited data", "Long-term reputation is unproven"],
    details: { minFunding: 10000, maxFunding: 250000, profitSplit: 90, maxDrawdown: 10, dailyDrawdown: 0, profitTarget: 6, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: false, newsTrading: true, expertAdvisors: false, fastPayouts: true, noTimeLimit: true },
  },
  {
    id: 'funded-futures-network',
    name: 'Funded Futures Network',
    shortName: 'FFN',
    logoUrl: 'https://logo.clearbit.com/fundedfuturesnetwork.com',
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
    evaluationProcessSummary: 'A 1-step evaluation with a strict 40% consistency rule, meaning no single day can account for more than 40% of total profits.',
    minStartingCost: 150,
    geoRestrictions: 'Available worldwide.',
    overview: 'Funded Futures Network distinguishes itself with live onboarding sessions and a strong emphasis on consistent trading, enforced by a 40% rule. They offer daily payouts after an initial $5K profit threshold.',
    pros: ["Live onboarding sessions", "Daily payouts (after $5K)"],
    cons: ["Strict 40% consistency rule"],
    details: { minFunding: 25000, maxFunding: 250000, profitSplit: 90, maxDrawdown: 10, dailyDrawdown: 0, profitTarget: 6, minTradingDays: 10 },
    features: { scalingPlan: true, weekendHolding: false, newsTrading: true, expertAdvisors: false, fastPayouts: true, noTimeLimit: true },
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
    reviewCount: 6500,
    affiliateUrl: 'https://tickticktrader.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: true,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge', 'Direct Account'],
    tradingInstruments: ['Futures'],
    categories: ['Futures', 'Instant Funding'],
    payoutFrequency: '2h',
    drawdownType: 'Trailing',
    evaluationProcessSummary: 'Provides a standard 1-step evaluation or a "Direct" account for instant funding. The 80/20 sim split was recently updated.',
    minStartingCost: 139,
    geoRestrictions: 'Available worldwide.',
    overview: 'TickTick Trader is a strong competitor in the futures space, offering fast 2-hour payouts and "Direct" accounts for instant funding. They are also known for allowing traders to hold positions overnight, which is a key advantage for some strategies.',
    pros: ["Fast 2-hour payouts", "Instant 'Direct' account option", "No overnight trading ban"],
    cons: ["Recent update to the sim profit split (80/20)"],
    details: { minFunding: 25000, maxFunding: 150000, profitSplit: 90, maxDrawdown: 5, dailyDrawdown: 0, profitTarget: 6, minTradingDays: 5 },
    features: { scalingPlan: true, weekendHolding: false, newsTrading: true, expertAdvisors: false, fastPayouts: true, noTimeLimit: true },
  },
    {
    id: 'purdia',
    name: 'Purdia',
    shortName: 'Purdia',
    logoUrl: 'https://logo.clearbit.com/purdia.com',
    officialWebsite: 'https://purdia.com/',
    tagline: 'Collaborative Scaling',
    shortDescription: 'A new Forex firm with very limited data, focusing on free resets and collaborative scaling.',
    rating: 4.0,
    reviewCount: 50,
    affiliateUrl: 'https://purdia.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: false,
    fundingModels: ['1-Step Challenge', '2-Step Challenge'],
    tradingInstruments: ['Forex', 'Indices'],
    categories: ['Forex/CFD'],
    payoutFrequency: 'Bi-weekly',
    drawdownType: 'Static',
    evaluationProcessSummary: 'Offers standard 1 and 2-step challenges with a promise of free resets to attract new traders.',
    minStartingCost: 99,
    geoRestrictions: 'Unknown.',
    overview: 'Purdia is a very new firm with extremely limited reviews and data available. They market themselves on features like free resets and collaborative scaling, but traders should exercise extreme caution due to the lack of a proven track record.',
    pros: ["Offers free resets"],
    cons: ["Very new firm with almost no data or reviews", "Legitimacy and long-term viability are unproven"],
    details: { minFunding: 10000, maxFunding: 400000, profitSplit: 90, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 8, minTradingDays: 5 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },
  },
  {
    id: 'phidias-prop-firm',
    name: 'Phidias Prop Firm',
    shortName: 'Phidias',
    logoUrl: 'https://logo.clearbit.com/phidiaspropfirm.com',
    officialWebsite: 'https://phidiaspropfirm.com/',
    tagline: 'Art-Inspired Trading for Global Traders',
    shortDescription: 'A new French firm with an art-inspired theme, offering 1 and 2-phase challenges and US access.',
    rating: 3.8,
    reviewCount: 150,
    affiliateUrl: 'https://phidiaspropfirm.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge', '2-Step Challenge'],
    tradingInstruments: ['Forex', 'Indices', 'Metals', 'Crypto', 'Energies', 'Stocks'],
    categories: ['Multi-Asset'],
    payoutFrequency: 'Bi-weekly',
    drawdownType: 'Static',
    evaluationProcessSummary: 'Offers straightforward 1-phase and 2-phase challenges that allow swing trading and EAs.',
    minStartingCost: 96,
    geoRestrictions: 'Available worldwide.',
    overview: 'Phidias is a French prop firm launched in 2024. They use an art-inspired theme and offer multilingual support for their 1-phase and 2-phase challenges. As a new entity with few reviews, their reputation is still developing, but they are open to traders globally, including the US.',
    pros: ["Multilingual support", "Allows swing trading & EAs", "Accepts US clients"],
    cons: ["New firm with sparse reviews", "Lower Trustpilot rating"],
    details: { minFunding: 10000, maxFunding: 1000000, profitSplit: 90, maxDrawdown: 10, dailyDrawdown: 4, profitTarget: 10, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },
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
    evaluationProcessSummary: 'There is no evaluation. Traders build a track record, receive a risk score, and get listed as a "DARWIN" for investors to back. Profits come from performance fees.',
    minStartingCost: 38,
    geoRestrictions: 'Not available to US clients.',
    overview: 'Darwinex operates a unique, FCA-regulated model that is different from traditional prop firms. Instead of passing a challenge, traders build a verifiable track record. If their strategy is good, it gets listed as a "DARWIN" that attracts investor capital, and the trader earns 15-20% in performance fees. It is designed for long-term, consistent traders.',
    pros: ["FCA-regulated", "No evaluation challenges", "Build a verifiable, portable track record", "Attract real investor capital"],
    cons: ["Complex model for beginners", "Lower profit share (15-20% performance fees)", "Not for short-term challenge passers", "No US clients"],
    details: { minFunding: 50000, maxFunding: 3000000, profitSplit: 20, maxDrawdown: 20, dailyDrawdown: 10, profitTarget: 0, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: false, noTimeLimit: true },
  },
    {
    id: 'instant-funding',
    name: 'Instant Funding',
    shortName: 'Instant Funding',
    logoUrl: 'https://logo.clearbit.com/instantfunding.io',
    officialWebsite: 'https://instantfunding.io',
    tagline: 'No Evaluation, No Time Limits',
    shortDescription: 'A no-evaluation prop firm offering up to $200K in funding, but has faced recent claims of non-payment.',
    rating: 3.9,
    reviewCount: 5000,
    affiliateUrl: 'https://instantfunding.io/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: true,
    isUSFriendly: true,
    fundingModels: ['Instant Funding'],
    tradingInstruments: ['Forex', 'Indices', 'Metals', 'Crypto', 'Stocks'],
    categories: ['Forex/CFD', 'Instant Funding'],
    payoutFrequency: 'On-demand',
    drawdownType: 'Static',
    evaluationProcessSummary: 'Provides immediate access to trading accounts with no targets, time limits, daily drawdown, or consistency rules.',
    minStartingCost: 79,
    geoRestrictions: 'Available worldwide.',
    overview: "Instant Funding offers a true instant funding model, allowing traders to bypass evaluations completely. While their model is attractive, they have faced numerous scam claims on social media in late 2025 regarding blocked payouts, so extreme caution is advised.",
    pros: ["True no-evaluation funding", "No profit targets or time limits", "Up to 1:100 leverage"],
    cons: ["Numerous recent scam claims of non-payment", "Lower Trustpilot score than competitors"],
    details: { minFunding: 1250, maxFunding: 200000, profitSplit: 90, maxDrawdown: 10, dailyDrawdown: 0, profitTarget: 0, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },
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
    reviewCount: 50,
    affiliateUrl: 'https://dnafunded.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge', '2-Step Challenge', 'Rapid'],
    tradingInstruments: ['Forex', 'Indices', 'Crypto', 'Commodities'],
    categories: ['Multi-Asset', 'Forex/CFD'],
    payoutFrequency: 'Weekly',
    drawdownType: 'Static',
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
    id: 'the-trading-pit',
    name: 'The Trading Pit',
    shortName: 'The Trading Pit',
    logoUrl: 'https://logo.clearbit.com/thetradingpit.com',
    officialWebsite: 'https://thetradingpit.com/',
    tagline: 'Liechtenstein-Based with High Scaling',
    shortDescription: 'A multi-asset firm based in Liechtenstein offering both CFD and Futures trading with scaling up to $5M.',
    rating: 4.5,
    reviewCount: 600,
    affiliateUrl: 'https://thetradingpit.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: false,
    fundingModels: ['1-Step Challenge', '2-Step Challenge'],
    tradingInstruments: ['Forex', 'Futures', 'Indices', 'Crypto'],
    categories: ['Multi-Asset'],
    payoutFrequency: 'Monthly',
    drawdownType: 'Static',
    evaluationProcessSummary: 'Offers different challenges for CFDs and Futures, with access to platforms like MT4, MT5, and ATAS for futures.',
    minStartingCost: 99,
    geoRestrictions: 'Not available to US clients.',
    overview: 'Based in Liechtenstein, The Trading Pit is a robust multi-asset firm offering challenges for both CFD and Futures traders. They have a strong educational focus and one of the highest scaling plans in the industry, up to $5M, with over €4M in payouts.',
    pros: ["High scaling plan up to $5M", "Offers both Futures and CFD challenges", "Strong educational component"],
    cons: ["Monthly payouts are slow", "Not available for US traders"],
    details: { minFunding: 10000, maxFunding: 5000000, profitSplit: 80, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 8, minTradingDays: 3 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: false, noTimeLimit: true },
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
    reviewCount: 1000,
    affiliateUrl: 'https://luxtradingfirm.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge', '2-Step Challenge'],
    tradingInstruments: ['Forex', 'Indices', 'Stocks'],
    categories: ['Multi-Asset'],
    payoutFrequency: 'Bi-weekly',
    drawdownType: 'Static',
    evaluationProcessSummary: 'Standard 1 and 2-step evaluations with a particular focus on accommodating and scaling traders who use EAs and copy trading systems.',
    minStartingCost: 149,
    geoRestrictions: 'Available worldwide.',
    overview: 'Lux Trading Firm has carved out a niche as the best prop firm for traders using Expert Advisors and copy trading, winning awards for their support in this area. They offer scaling up to $2.5M and are known for their 2025 innovations.',
    pros: ["Award-winning support for EAs and copy trading", "High scaling up to $2.5M", "2025 innovations"],
    cons: ["Slightly higher entry cost"],
    details: { minFunding: 15000, maxFunding: 2500000, profitSplit: 75, maxDrawdown: 5, dailyDrawdown: 0, profitTarget: 15, minTradingDays: 10 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },
  },
  {
    id: 'my-funded-fx',
    name: 'MyFundedFX',
    shortName: 'MyFundedFX',
    logoUrl: 'https://logo.clearbit.com/myfundedfx.com',
    officialWebsite: 'https://myfundedfx.com/',
    tagline: 'Tech Model & Fast Payouts (Rebranded to Seacrest)',
    shortDescription: 'A popular US-friendly firm known for its tech-focused model and fast payouts, now rebranded as Seacrest Funded.',
    rating: 4.6,
    reviewCount: 2800,
    affiliateUrl: 'https://myfundedfx.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge', '2-Step Challenge'],
    tradingInstruments: ['Forex', 'Futures', 'Indices'],
    categories: ['Multi-Asset'],
    payoutFrequency: 'Weekly',
    drawdownType: 'Static',
    evaluationProcessSummary: 'Offers 1 and 2-step challenges for both Forex and Futures traders.',
    minStartingCost: 50,
    geoRestrictions: 'US-friendly.',
    overview: 'MyFundedFX was a very popular firm known for its fast payouts and tech-forward approach. In 2025, they rebranded to Seacrest Funded. They remain a good US-friendly option for both Forex and Futures traders.',
    pros: ["US-friendly", "Trades both Forex and Futures", "Fast weekly payouts"],
    cons: ["Rebranding can cause confusion"],
    details: { minFunding: 5000, maxFunding: 600000, profitSplit: 90, maxDrawdown: 8, dailyDrawdown: 5, profitTarget: 8, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },
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
    reviewCount: 1500,
    affiliateUrl: 'https://e8funding.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['2-Step Challenge'],
    tradingInstruments: ['Forex', 'Futures', 'Indices'],
    categories: ['Multi-Asset'],
    payoutFrequency: '8 days',
    drawdownType: 'Static',
    evaluationProcessSummary: 'A standard 2-step evaluation track with a focus on quick payouts for successful traders.',
    minStartingCost: 33,
    geoRestrictions: 'Available worldwide.',
    overview: 'E8 Funding is known for its fast payout cycle, with the first withdrawal available just 8 days after gettinfunded. They support weekend holding and have a strong payout record of over $59M.',
    pros: ["Fast first payout (8 days)", "Allows weekend holding", "Over $59M in payouts"],
    cons: ["Only offers a 2-step evaluation"],
    details: { minFunding: 25000, maxFunding: 1000000, profitSplit: 100, maxDrawdown: 8, dailyDrawdown: 5, profitTarget: 8, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },
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
    reviewCount: 800,
    affiliateUrl: 'https://mentfunding.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: true,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge', 'Instant Funding'],
    tradingInstruments: ['Forex', 'Indices'],
    categories: ['Forex/CFD', 'Instant Funding'],
    payoutFrequency: 'Weekly',
    drawdownType: 'Static',
    evaluationProcessSummary: 'Offers a choice between a 1-step evaluation or direct instant funding accounts.',
    minStartingCost: 100,
    geoRestrictions: 'Available worldwide.',
    overview: 'Ment Funding provides flexibility with both 1-step challenges and instant funding. They offer scaling up to $2M and weekly payouts. However, reviews on their customer support are mixed.',
    pros: ["Offers both 1-step and instant funding", "Scaling up to $2M", "Weekly payouts"],
    cons: ["Mixed reviews on customer support"],
    details: { minFunding: 10000, maxFunding: 2000000, profitSplit: 90, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 10, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },
  },
  {
    id: 'goat-funded-trader',
    name: 'Goat Funded Trader',
    shortName: 'Goat',
    logoUrl: 'https://logo.clearbit.com/goatfundedtrader.com',
    officialWebsite: 'https://goatfundedtrader.com',
    tagline: 'Up to 100% Splits & Crypto Focus',
    shortDescription: 'Offers instant funding and evaluation programs with up to 100% profit splits on demand, with a strong focus on crypto.',
    rating: 4.4,
    reviewCount: 1500,
    affiliateUrl: 'https://goatfundedtrader.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: true,
    isUSFriendly: true,
    fundingModels: ['Instant Funding', '1-Step Challenge', '2-Step Challenge'],
    tradingInstruments: ['Forex', 'Crypto', 'Indices', 'Stocks', 'Metals', 'Commodities'],
    categories: ['Multi-Asset', 'Crypto', 'Instant Funding'],
    payoutFrequency: 'On-demand',
    drawdownType: 'Static',
    evaluationProcessSummary: 'Offers a flexible approach with multiple challenge types including a popular no-challenge instant funding model.',
    minStartingCost: 45,
    geoRestrictions: 'Available worldwide.',
    overview: 'Goat Funded Trader offers a flexible approach with both evaluation and instant funding paths. They provide scaling up to $800K with on-demand payouts and profit splits that can reach 100%. They are a strong choice for crypto traders.',
    pros: ["Up to 100% profit split", "Instant funding available", "On-demand payouts", "Strong crypto offering"],
    cons: ["Some plans restrict EAs", "Scaling is lower than top competitors"],
    details: { minFunding: 5000, maxFunding: 800000, profitSplit: 95, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 8, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: false, fastPayouts: true, noTimeLimit: true },
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
    reviewCount: 500,
    affiliateUrl: 'https://myflashfunding.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge', '2-Step Challenge'],
    tradingInstruments: ['Futures', 'Forex'],
    categories: ['Multi-Asset'],
    payoutFrequency: 'Weekly',
    drawdownType: 'Static',
    evaluationProcessSummary: 'Standard 1 and 2-step evaluations with rules that are accommodating to high-frequency trading styles.',
    minStartingCost: 49,
    geoRestrictions: 'Available worldwide.',
    overview: 'My Flash Funding is an emerging firm that has gained a following among scalpers due to its quick payout cycle and flexible rules. They offer both futures and forex trading.',
    pros: ["Weekly payouts", "Good for scalpers", "Low entry cost"],
    cons: ["Newer firm with less history", "Lower max funding"],
    details: { minFunding: 5000, maxFunding: 200000, profitSplit: 90, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 8, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },
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
    reviewCount: 200,
    affiliateUrl: 'https://breakoutprop.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: false,
    fundingModels: ['1-Step Challenge'],
    tradingInstruments: ['Forex', 'Indices'],
    categories: ['Multi-Asset'],
    payoutFrequency: 'Bi-weekly',
    drawdownType: 'Static',
    evaluationProcessSummary: 'A 1-step evaluation designed to identify traders who can capitalize on market volatility.',
    minStartingCost: 100,
    geoRestrictions: 'Unknown.',
    overview: 'Breakout Prop is a small, emerging firm catering to a specific niche: breakout traders. They have limited reviews and data, so traders should be cautious.',
    pros: ["Niche focus on breakout strategies"],
    cons: ["Limited data and reviews", "Unproven track record"],
    details: { minFunding: 10000, maxFunding: 400000, profitSplit: 90, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 10, minTradingDays: 5 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },
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
    reviewCount: 100,
    affiliateUrl: 'https://venusfunded.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['2-Step Challenge'],
    tradingInstruments: ['Forex', 'Indices'],
    categories: ['Multi-Asset'],
    payoutFrequency: 'On-demand',
    drawdownType: 'Static',
    evaluationProcessSummary: 'A standard 2-step challenge with on-demand payouts.',
    minStartingCost: 65,
    geoRestrictions: 'Available worldwide.',
    overview: 'Venus Funded is a new firm with a commendable focus on promoting diversity in the trading community. While their offering is standard, their mission sets them apart. They are still emerging and have limited reviews.',
    pros: ["Focus on diversity and women-led initiatives", "On-demand payouts"],
    cons: ["Emerging firm with limited reviews", "Unproven track record"],
    details: { minFunding: 10000, maxFunding: 300000, profitSplit: 90, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 8, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },
  },
    {
    id: 'brightfunded',
    name: 'BrightFunded',
    shortName: 'BrightFunded',
    logoUrl: 'https://logo.clearbit.com/brightfunded.com',
    officialWebsite: 'https://brightfunded.com',
    tagline: 'Best for US Traders',
    shortDescription: 'A highly-rated firm with strong challenge options, considered one of the best for US-based traders.',
    rating: 4.7,
    reviewCount: 200,
    affiliateUrl: 'https://brightfunded.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge', '2-Step Challenge'],
    tradingInstruments: ['Forex', 'Indices', 'Crypto'],
    categories: ['Multi-Asset'],
    payoutFrequency: 'Weekly',
    drawdownType: 'Static',
    evaluationProcessSummary: 'Offers both 1 and 2-step challenges with competitive parameters.',
    minStartingCost: 99,
    geoRestrictions: 'US-friendly.',
    overview: 'BrightFunded is a strong contender, particularly for traders in the US. They offer a solid range of challenges, weekly payouts, and have garnered positive reviews for their transparent process.',
    pros: ["Highly rated for US traders", "Strong challenge options", "Weekly payouts"],
    cons: ["Newer firm"],
    details: { minFunding: 10000, maxFunding: 400000, profitSplit: 90, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 8, minTradingDays: 3 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },
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
    reviewCount: 100,
    affiliateUrl: 'https://lucidtrading.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: true,
    fundingModels: ['2-Step Challenge'],
    tradingInstruments: ['Forex', 'Crypto', 'Indices', 'Metals', 'Energies', 'Stocks'],
    categories: ['Multi-Asset'],
    payoutFrequency: 'On-demand',
    drawdownType: 'Static',
    evaluationProcessSummary: 'A standard 2-step challenge model with a focus on making the rules as clear as possible for traders.',
    minStartingCost: 67,
    geoRestrictions: 'Available worldwide.',
    overview: 'Lucid Trading is a newer firm aiming to build trust through transparency and trader-friendly rules. They offer a standard 2-phase evaluation with achievable targets, no minimum trading days, and on-demand payouts after an initial period. They allow a wide range of trading styles, including EAs, news trading, and weekend holding.',
    pros: ["On-demand payouts", "No minimum trading days", "Allows EAs, news trading, and weekend holding"],
    cons: ["Emerging firm with few reviews", "Initial 21-day period before first payout"],
    details: { minFunding: 10000, maxFunding: 100000, profitSplit: 90, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 8, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },
  },
  {
    id: 'the-legends-trading',
    name: 'The Legends Trading',
    shortName: 'Legends',
    logoUrl: 'https://logo.clearbit.com/thelegendstrading.com',
    officialWebsite: 'https://thelegendstrading.com/',
    tagline: 'Legendary Challenges',
    shortDescription: 'A new firm with a myth-themed approach and limited data available.',
    rating: 4.4,
    reviewCount: 50,
    affiliateUrl: 'https://thelegendstrading.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: false,
    fundingModels: ['2-Step Challenge'],
    tradingInstruments: ['Forex', 'Indices'],
    categories: ['Multi-Asset'],
    payoutFrequency: 'Bi-weekly',
    drawdownType: 'Static',
    evaluationProcessSummary: 'A standard 2-step challenge model wrapped in a unique "legendary" theme.',
    minStartingCost: 120,
    geoRestrictions: 'Unknown.',
    overview: 'The Legends Trading is a new firm using a creative, myth-based theme for its challenges. They are still very new and have very limited data and reviews available.',
    pros: ["Unique branding"],
    cons: ["Very new firm with limited data", "Higher entry cost"],
    details: { minFunding: 10000, maxFunding: 500000, profitSplit: 90, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 8, minTradingDays: 5 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },
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
    reviewCount: 50,
    affiliateUrl: 'https://quantfunded.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: false,
    fundingModels: ['1-Step Challenge', '2-Step Challenge'],
    tradingInstruments: ['Forex', 'Indices', 'Crypto'],
    categories: ['Multi-Asset'],
    payoutFrequency: 'Bi-weekly',
    drawdownType: 'Static',
    evaluationProcessSummary: 'Offers 1 and 2-step challenges designed for traders who rely heavily on algorithms and EAs.',
    minStartingCost: 200,
    geoRestrictions: 'Unknown.',
    overview: 'QuantFunded, a rebrand from Quant Tekel, is a niche firm catering specifically to the needs of quantitative and algorithmic traders. Their rules and platform support are geared towards automated systems.',
    pros: ["Specific focus on quant/algo trading", "EA-heavy approach"],
    cons: ["Higher entry cost", "Emerging firm with few reviews", "Niche appeal"],
    details: { minFunding: 25000, maxFunding: 1000000, profitSplit: 95, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 10, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },
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
    reviewCount: 1000,
    affiliateUrl: 'https://cryptofundtrader.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: true,
    isUSFriendly: true,
    fundingModels: ['1-Step Challenge', '2-Step Challenge', 'Instant Funding'],
    tradingInstruments: ['Crypto'],
    categories: ['Crypto', 'Instant Funding'],
    payoutFrequency: '48h',
    drawdownType: 'Static',
    evaluationProcessSummary: 'Offers 1/2-step and instant funding models specifically for crypto trading, including futures, on over 100 pairs.',
    minStartingCost: 58,
    geoRestrictions: 'Available worldwide.',
    overview: 'Crypto Fund Trader is the premier choice for traders specializing in cryptocurrencies. They offer a huge range of over 100 pairs, allow weekend trading, and have fast 48-hour payouts, making them ideal for crypto scalpers and swing traders.',
    pros: ["Trades over 100 crypto pairs", "Weekend trading allowed", "Fast 48-hour payouts", "Top choice for crypto specialists"],
    cons: ["Niche focus may not suit all traders"],
    details: { minFunding: 5000, maxFunding: 300000, profitSplit: 90, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 8, minTradingDays: 0 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: true, noTimeLimit: true },
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
    reviewCount: 100,
    affiliateUrl: 'https://www.bitfunded.com/?ref=FPG',
    fpgAffiliateCode: 'FPG',
    hasInstantFunding: false,
    isUSFriendly: false,
    fundingModels: ['2-Step Challenge'],
    tradingInstruments: ['Crypto'],
    categories: ['Crypto'],
    payoutFrequency: 'Monthly',
    drawdownType: 'Static',
    evaluationProcessSummary: 'A demo-based 2-step challenge for traders wanting to prove their skills in the crypto markets.',
    minStartingCost: 89,
    geoRestrictions: 'Unknown.',
    overview: 'BitFunded is a new, crypto-only prop firm that is still establishing its reputation. While they offer funding up to $500K, the monthly payouts are slow, and some community members have noted potential scam risks, so caution is advised.',
    pros: ["Crypto-only focus"],
    cons: ["Emerging firm with noted scam risks", "Slow monthly payouts", "Lack of verified reviews"],
    details: { minFunding: 10000, maxFunding: 500000, profitSplit: 90, maxDrawdown: 10, dailyDrawdown: 5, profitTarget: 8, minTradingDays: 5 },
    features: { scalingPlan: true, weekendHolding: true, newsTrading: true, expertAdvisors: true, fastPayouts: false, noTimeLimit: true },
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
      <h2>Analysis of 2025 Prop Firm Research & Key Insights</h2>
      <p>The data confirms several overarching trends in the prop firm space as of 2025:</p>
      <ul>
        <li><strong>Market Saturation & Specialization:</strong> The sheer number of firms shows a saturated market. To compete, firms are specializing (Crypto-only, Futures-only) or adding unique selling propositions (USPs) like instant funding, charity tie-ins (AquaFunded), or AI support (FundedNext).</li>
        <li><strong>The "Evaluation Arms Race" is Over:</strong> The standard 2-step evaluation is no longer enough. Firms now compete on alternatives like 1-Step Challenges, Instant Funding, and Zero-Evaluation models.</li>
        <li><strong>Payout Speed as a Key Metric:</strong> The race for the fastest payout is a major battleground. "On-demand," "24h," and even "2h" or "30-min" payouts (Tradeify) are now used as major marketing tools.</li>
        <li><strong>The Rise of Scaling and Retention:</strong> Top firms now focus on retaining successful traders through aggressive scaling plans and high profit splits (up to 100%).</li>
        <li><strong>Platform Diversification:</strong> While MT4/5 remains dominant, support for cTrader, DXTrade, TradeLocker, and NinjaTrader/Rithmic is now expected.</li>
      </ul>
      
      <h2>Actionable Recommendations: Choosing the Right Firm for Your Profile</h2>
      <h3>1. For the Beginner / Still-Developing Trader</h3>
      <p><strong>Priority:</strong> Education, lower cost, forgiving rules, and learning resources.</p>
      <ul>
        <li><strong>Topstep:</strong> The original educator. Their Trading Combine and coaching resources are top-tier for futures traders.</li>
        <li><strong>The 5%ers:</strong> Their "Bootcamp" scaling plan is designed for growth, and unlimited time reduces pressure.</li>
        <li><strong>FundedNext:</strong> With low entry fees and a supportive environment, it's great for beginners.</li>
      </ul>
      
      <h3>2. For the Established, Consistently Profitable Trader</h3>
      <p><strong>Priority:</strong> Maximizing capital, high profit splits, fast/reliable payouts, and scaling potential.</p>
      <ul>
        <li><strong>FTMO:</strong> The industry benchmark. Unmatched track record, stability, and a "Premium Program" for proven traders.</li>
        <li><strong>Apex Trader Funding:</strong> The leader for futures. High splits, no daily drawdown, and multiple accounts make it ideal for scaling.</li>
        <li><strong>Funded Trading Plus:</strong> Excellent reputation, very high profit splits (up to 100%), and a strong focus on scaling with no restrictions.</li>
        <li><strong>Funding Pips:</strong> If the absolute fastest payout is your primary concern, they are the leader.</li>
      </ul>

      <h3>3. For the Specific Strategy Trader</h3>
      <ul>
        <li><strong>News Traders:</strong> City Traders Imperium, Bulenox, Tradeify.</li>
        <li><strong>EA/Automation Traders:</strong> FundYourFX, The 5%ers, Funded Trading Plus, Lux Trading Firm.</li>
        <li><strong>Swing Traders/Holders:</strong> Leeloo Trading, TickTick Trader.</li>
      </ul>

      <h2>Critical Caveats & Red Flags</h2>
      <ul>
        <li><strong>Trustpilot is Gamed:</strong> Scrutinize low-review-count scores. Look for detailed negative reviews about payout delays.</li>
        <li><strong>The "New Firm" Risk:</strong> Firms from 2024-2025 offer great deals but lack proven long-term viability. Stick with established firms (founded pre-2022) for serious capital.</li>
        <li><strong>The "Instant" and "1-Step" Trade-Off:</strong> These often have a harder-to-manage trailing drawdown.</li>
        <li><strong>Payout Delays/Scams:</strong> Be wary of firms with recent social media claims of non-payment (e.g., Instant Funding).</li>
      </ul>

      <h2>Final Overall Top Picks</h2>
      <ul>
        <li><strong>Overall Best (Forex/CFD):</strong> FTMO (Stability) | FundedNext (Innovation)</li>
        <li><strong>Overall Best (Futures):</strong> Apex Trader Funding (Capital) | Topstep (Education)</li>
        <li><strong>Best for Payout Speed:</strong> Funding Pips | Tradeify</li>
        <li><strong>Best Low-Cost Entry:</strong> FundedNext | Blue Guardian | The 5%ers</li>
        <li><strong>Most Unique Model:</strong> Darwinex (Zero Evaluation, Investor-Backed)</li>
      </ul>
      <p><strong>Disclaimer:</strong> Use discount codes, only risk disposable income, and always Do Your Own Research (DYOR). This landscape changes monthly.</p>
    `
  },
  {
    id: 'glossary-guide',
    title: 'Your A-Z Guide to Prop Trading Terms',
    summary: 'From Drawdown to Scaling Plans, this article introduces our new comprehensive glossary to help you understand the language of prop trading.',
    author: 'FPG Insights',
    publishedDate: 'October 18, 2025',
    imageUrl: '/images/education/glossary-guide.png',
    content: `
      <h2>Why Terminology Matters</h2>
      <p>The world of proprietary trading is filled with specific terms and jargon that can be confusing for newcomers. Understanding concepts like "Trailing Drawdown," "Profit Split," and "Scaling Plans" is not just academic—it's essential for your success. Misinterpreting a single rule can lead to a failed evaluation.</p>
      <p>To help you navigate this complex landscape with confidence, we've created a comprehensive glossary of the most common terms used by prop firms.</p>
      <h2>What You'll Find Inside</h2>
      <p>Our new glossary page provides clear, concise definitions for all the key concepts you'll encounter when researching and joining a prop firm. We break down:</p>
      <ul>
        <li><strong>Evaluation Rules:</strong> Profit Target, Max Drawdown, Daily Loss Limit, etc.</li>
        <li><strong>Account Types:</strong> Static vs. Trailing Drawdown, Instant Funding, 1-Step vs. 2-Step.</li>
        <li><strong>Trader Benefits:</strong> Profit Split, Scaling Plans, Payout Frequency.</li>
      </ul>
      <p>This resource is designed to be your go-to guide, ensuring you fully understand the terms and conditions of any firm you're considering. Arm yourself with knowledge and make smarter decisions on your journey to becoming a funded trader.</p>
      <p><em>Visit our new Glossary page to get started!</em></p>
    `
  },
  {
    id: 'what-is-prop-trading',
    title: 'What is Prop Trading and How Does It Work?',
    summary: 'A comprehensive guide to understanding proprietary trading, its benefits, risks, and how to get started with a funded account.',
    author: 'John Doe',
    publishedDate: 'October 1, 2024',
    imageUrl: '/images/education/getting-started.png',
    content: `
      <h2>Introduction to Proprietary Trading</h2>
      <p>Proprietary trading, or "prop trading," occurs when a financial firm—such as a commercial bank, a brokerage, or even a hedge fund—trades stocks, bonds, currencies, commodities, and other financial instruments with its own money, rather than using its clients' money. The goal is to make a profit for the firm itself.</p>
      <h2>How Prop Firms Work</h2>
      <p>Modern prop firms offer a unique opportunity for retail traders. They provide traders with access to their capital in exchange for a share of the profits. To qualify, traders usually have to pass an evaluation or "challenge" to prove their skills and discipline. This model allows talented traders without significant personal capital to trade larger accounts and earn substantial income.</p>
      <h2>Benefits of Prop Trading</h2>
      <ul>
        <li><strong>Access to Capital:</strong> Trade with a much larger account than you could with your own funds.</li>
        <li><strong>High Profit Splits:</strong> Keep a large percentage of the profits you generate, often up to 90%.</li>
        <li><strong>Limited Risk:</strong> You are not liable for any losses; the firm absorbs them. Your only risk is the initial fee for the evaluation.</li>
        <li><strong>Professional Tools:</strong> Gain access to advanced trading platforms, data feeds, and educational resources.</li>
      </ul>
      <h2>Risks and Considerations</h2>
      <p>The main risk for a trader is failing the evaluation and losing the fee. It's crucial to choose a reputable firm with clear rules, realistic profit targets, and fair drawdown limits. Always read the terms and conditions carefully before signing up.</p>
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
      <h2>Key Factors to Consider</h2>
      <p>Choosing the right prop firm is a critical step in your trading journey. Here are the most important factors to evaluate:</p>
      <h3>1. Funding Model</h3>
      <p>Firms offer various models, including one-step challenges, a two-step challenges, and instant funding. Understand the pros and cons of each. Challenges are cheaper but require you to pass an evaluation. Instant funding gets you trading with real capital immediately but typically comes with a higher cost and stricter rules.</p>
      <h3>2. Trading Rules and Parameters</h3>
      <ul>
        <li><strong>Profit Target:</strong> Is the profit target realistic for your strategy?</li>
        <li><strong>Drawdown Limits:</strong> Understand the difference between static and trailing drawdown, and whether there are daily loss limits.</li>
        <li><strong>Trading Style:</strong> Does the firm allow your strategy (e.g., news trading, weekend holding, EAs)?</li>
      </ul>
      <h3>3. Profit Split and Scaling</h3>
      <p>Look for firms with high profit splits (80-90% is standard). Also, check their scaling plan. A good scaling plan allows you to grow your account size as you consistently generate profits.</p>
      <h3>4. Reputation and Payouts</h3>
      <p>Research the firm's reputation. Look for reviews on trusted sites like Trustpilot. Ensure they have a track record of consistent and timely payouts.</p>
    `
  },
  {
    id: 'trading-psychology',
    title: 'Trading Psychology: Mastering Your Mind for Success',
    summary: 'Learn the psychological aspects of trading that separate successful traders from the rest. Master your emotions and develop the mental discipline needed for consistent profits.',
    author: 'Dr. Sarah Chen',
    publishedDate: 'November 15, 2024',
    imageUrl: '/images/education/trading-psychology.png',
    content: `
      <h2>The Psychology of Trading Success</h2>
      <p>Trading psychology is often the most overlooked aspect of becoming a successful trader. While technical analysis and risk management are crucial, your mental state and emotional control can make or break your trading career.</p>
      
      <h2>Common Psychological Traps</h2>
      <h3>Fear and Greed</h3>
      <p>These are the two primary emotions that drive poor trading decisions. Fear can cause you to exit profitable trades too early or avoid taking necessary risks. Greed can lead to overtrading, increasing position sizes beyond your risk tolerance, or holding losing positions hoping they'll turn around.</p>
      
      <h3>Revenge Trading</h3>
      <p>After a significant loss, many traders feel the need to "get back" at the market. This often leads to impulsive decisions, increased risk, and even bigger losses.</p>
      
      <h3>Confirmation Bias</h3>
      <p>Traders often seek information that confirms their existing beliefs while ignoring contradictory evidence. This can lead to holding onto losing positions longer than necessary.</p>
      
      <h2>Building Mental Discipline</h2>
      <h3>1. Develop a Trading Plan</h3>
      <p>Having a clear, written trading plan helps remove emotion from your decisions. Your plan should include entry and exit criteria, position sizing rules, and risk management parameters.</p>
      
      <h3>2. Keep a Trading Journal</h3>
      <p>Document every trade, including your emotional state, reasoning, and outcomes. This helps identify patterns in your behavior and areas for improvement.</p>
      
      <h3>3. Practice Mindfulness</h3>
      <p>Meditation and mindfulness practices can help you stay calm and focused during volatile market conditions. Even 10 minutes of daily meditation can significantly improve your trading performance.</p>
      
      <h2>Managing Losses</h2>
      <p>Losses are inevitable in trading. The key is to manage them psychologically:</p>
      <ul>
        <li><strong>Accept losses as part of the process</strong> - No trader wins 100% of the time</li>
        <li><strong>Focus on process over outcome</strong> - A well-executed trade that results in a loss is still a good trade</li>
        <li><strong>Learn from each loss</strong> - Analyze what went wrong and how to improve</li>
        <li><strong>Don't take losses personally</strong> - The market doesn't care about your feelings</li>
      </ul>
      
      <h2>Building Confidence</h2>
      <p>Confidence in trading comes from preparation and experience:</p>
      <ul>
        <li><strong>Backtest your strategies</strong> - Historical data can validate your approach</li>
        <li><strong>Start small</strong> - Build confidence with smaller position sizes</li>
        <li><strong>Celebrate small wins</strong> - Acknowledge when you follow your plan correctly</li>
        <li><strong>Focus on consistency</strong> - Regular, disciplined trading builds confidence</li>
      </ul>
      
      <h2>Common Mental Mistakes to Avoid</h2>
      <ul>
        <li><strong>Overtrading</strong> - Taking too many trades out of boredom or FOMO</li>
        <li><strong>Martingale thinking</strong> - Doubling down on losing positions</li>
        <li><strong>Perfectionism</strong> - Waiting for the "perfect" setup that never comes</li>
        <li><strong>Impatience</strong> - Not waiting for proper entry signals</li>
        <li><strong>Ego trading</strong> - Letting pride prevent you from cutting losses</li>
      </ul>
      
      <h2>Developing the Right Mindset</h2>
      <p>Successful traders share certain psychological characteristics:</p>
      <ul>
        <li><strong>Patience</strong> - Waiting for high-probability setups</li>
        <li><strong>Discipline</strong> - Following rules consistently</li>
        <li><strong>Humility</strong> - Accepting that the market is always right</li>
        <li><strong>Adaptability</strong> - Adjusting strategies when market conditions change</li>
        <li><strong>Resilience</strong> - Bouncing back from losses and setbacks</li>
      </ul>
      
      <p><strong>Remember:</strong> Trading psychology is a skill that can be developed with practice and self-awareness. The most successful traders are those who have mastered their emotions and developed the mental discipline to execute their strategies consistently.</p>
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
      <h2>Why Risk Management is Critical in Prop Trading</h2>
      <p>Risk management isn't just about protecting your capital—it's about protecting your funded account and your future as a prop trader. Unlike personal trading, where you can always add more money, prop trading accounts have strict rules and limited second chances.</p>
      
      <h2>The 1% Rule: Your Foundation</h2>
      <p>The golden rule of risk management is to never risk more than 1% of your account on a single trade. For a $100,000 account, this means risking no more than $1,000 per trade.</p>
      
      <h2>Position Sizing Formula</h2>
      <p>Use this formula to calculate your position size:</p>
      <p><strong>Position Size = (Account Balance × Risk Percentage) ÷ (Entry Price - Stop Loss Price)</strong></p>
      
      <h2>Drawdown Management</h2>
      <h3>Understanding Drawdown Limits</h3>
      <p>Most prop firms have strict drawdown limits (usually 5-10% of your account). Once you hit this limit, your account is terminated. This makes risk management even more critical than in personal trading.</p>
      
      <h3>Reducing Risk After Losses</h3>
      <p>If you're down 2-3%, reduce your position sizes by 50%. If you're down 5% or more, consider taking a break from trading to reassess your strategy.</p>
      
      <h2>Key Risk Management Principles</h2>
      <ul>
        <li><strong>Never risk more than 1% per trade</strong></li>
        <li><strong>Use stop losses on every trade</strong></li>
        <li><strong>Don't trade during high-impact news events</strong></li>
        <li><strong>Limit your daily loss to 2-3% maximum</strong></li>
        <li><strong>Take breaks after consecutive losses</strong></li>
      </ul>
      
      <h2>Common Risk Management Mistakes</h2>
      <ul>
        <li><strong>Increasing position sizes after wins</strong> - This leads to overconfidence</li>
        <li><strong>Removing stop losses</strong> - Hoping a losing trade will turn around</li>
        <li><strong>Overtrading</strong> - Taking too many trades to "make up" for losses</li>
        <li><strong>Ignoring correlation</strong> - Taking multiple positions in correlated assets</li>
        <li><strong>Trading without a plan</strong> - Making impulsive decisions</li>
      </ul>
      
      <h2>Building a Risk Management System</h2>
      <h3>1. Define Your Risk Tolerance</h3>
      <p>Determine how much you're willing to lose on any single trade and stick to it religiously.</p>
      
      <h3>2. Set Daily Loss Limits</h3>
      <p>Decide on a maximum daily loss (usually 2-3% of your account) and stop trading when you reach it.</p>
      
      <h3>3. Use Proper Position Sizing</h3>
      <p>Calculate your position size based on your risk tolerance and stop loss distance.</p>
      
      <h3>4. Monitor Your Performance</h3>
      <p>Keep track of your win rate, average win/loss, and maximum drawdown to identify areas for improvement.</p>
      
      <h2>Advanced Risk Management Techniques</h2>
      <h3>Portfolio Heat</h3>
      <p>Monitor your total portfolio risk across all open positions. Never have more than 5-6% of your account at risk across all trades combined.</p>
      
      <h3>Correlation Analysis</h3>
      <p>Avoid taking multiple positions in highly correlated assets. If EUR/USD and GBP/USD are both in your portfolio, you're essentially doubling your risk.</p>
      
      <h3>Time-Based Risk Management</h3>
      <p>Consider the time of day and market conditions when sizing your positions. Volatile periods may require smaller position sizes.</p>
      
      <p><strong>Remember:</strong> In prop trading, capital preservation is more important than capital growth. A 20% return with controlled risk is better than a 50% return with excessive risk that could blow your account.</p>
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
      <h2>Why Technical Analysis Matters in Prop Trading</h2>
      <p>Technical analysis is the study of price action and market behavior through charts and indicators. For prop traders, it's essential because it provides objective entry and exit signals, helps manage risk, and works across all timeframes and markets.</p>
      
      <h2>Core Principles of Technical Analysis</h2>
      <h3>1. Price Action is King</h3>
      <p>Price action refers to the movement of a security's price over time. It's the most direct reflection of market sentiment and supply/demand dynamics.</p>
      
      <h3>2. Trends Tend to Continue</h3>
      <p>Markets often move in trends (up, down, or sideways). Identifying and trading with the trend increases your probability of success.</p>
      
      <h3>3. History Repeats Itself</h3>
      <p>Market patterns and behaviors tend to repeat, making technical analysis a valuable tool for predicting future price movements.</p>
      
      <h2>Essential Chart Patterns</h2>
      <h3>Reversal Patterns</h3>
      <ul>
        <li><strong>Head and Shoulders</strong> - Indicates potential trend reversal</li>
        <li><strong>Double Top/Bottom</strong> - Shows rejection at key levels</li>
        <li><strong>Triple Top/Bottom</strong> - Strong rejection pattern</li>
      </ul>
      
      <h3>Continuation Patterns</h3>
      <ul>
        <li><strong>Triangles</strong> - Consolidation before breakout</li>
        <li><strong>Flags and Pennants</strong> - Brief consolidation in strong trends</li>
        <li><strong>Rectangles</strong> - Sideways consolidation</li>
      </ul>
      
      <h2>Key Technical Indicators</h2>
      <h3>Trend Following Indicators</h3>
      <ul>
        <li><strong>Moving Averages</strong> - Smooth price data to identify trends</li>
        <li><strong>MACD</strong> - Momentum and trend changes</li>
        <li><strong>ADX</strong> - Trend strength measurement</li>
      </ul>
      
      <h3>Oscillators</h3>
      <ul>
        <li><strong>RSI</strong> - Overbought/oversold conditions</li>
        <li><strong>Stochastic</strong> - Momentum and reversal signals</li>
        <li><strong>Williams %R</strong> - Market extremes</li>
      </ul>
      
      <h2>Support and Resistance</h2>
      <p>Support and resistance levels are crucial for prop traders:</p>
      <ul>
        <li><strong>Support</strong> - Price level where buying interest is strong</li>
        <li><strong>Resistance</strong> - Price level where selling pressure is strong</li>
        <li><strong>Breakouts</strong> - When price moves beyond these levels</li>
        <li><strong>False Breakouts</strong> - When price breaks but quickly reverses</li>
      </ul>
      
      <h2>Price Action Trading</h2>
      <h3>Candlestick Patterns</h3>
      <ul>
        <li><strong>Doji</strong> - Indecision in the market</li>
        <li><strong>Hammer/Hanging Man</strong> - Potential reversal signals</li>
        <li><strong>Engulfing Patterns</strong> - Strong reversal signals</li>
        <li><strong>Pin Bars</strong> - Rejection at key levels</li>
      </ul>
      
      <h3>Key Price Action Concepts</h3>
      <ul>
        <li><strong>Higher Highs and Higher Lows</strong> - Uptrend characteristics</li>
        <li><strong>Lower Highs and Lower Lows</strong> - Downtrend characteristics</li>
        <li><strong>Market Structure</strong> - How price moves between levels</li>
      </ul>
      
      <h2>Multi-Timeframe Analysis</h2>
      <p>Successful prop traders analyze multiple timeframes:</p>
      <ul>
        <li><strong>Higher Timeframe</strong> - Overall trend direction</li>
        <li><strong>Entry Timeframe</strong> - Precise entry signals</li>
        <li><strong>Lower Timeframe</strong> - Risk management and exits</li>
      </ul>
      
      <h2>Common Technical Analysis Mistakes</h2>
      <ul>
        <li><strong>Overcomplicating</strong> - Using too many indicators</li>
        <li><strong>Ignoring fundamentals</strong> - Not considering news events</li>
        <li><strong>Cherry-picking</strong> - Only looking for patterns that confirm bias</li>
        <li><strong>No risk management</strong> - Focusing only on entries</li>
      </ul>
      
      <h2>Building Your Technical Analysis System</h2>
      <h3>1. Choose Your Timeframes</h3>
      <p>Select 2-3 timeframes that work well together for your trading style.</p>
      
      <h3>2. Master a Few Indicators</h3>
      <p>It's better to master 2-3 indicators than to use 10 poorly.</p>
      
      <h3>3. Focus on Price Action</h3>
      <p>Price action is the most reliable form of technical analysis.</p>
      
      <h3>4. Backtest Your System</h3>
      <p>Test your technical analysis approach on historical data before risking real money.</p>
      
      <p><strong>Remember:</strong> Technical analysis is a tool, not a guarantee. Combine it with proper risk management and a solid trading plan for the best results.</p>
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
      <h2>What is Drawdown in Prop Trading?</h2>
      <p>Drawdown is the maximum amount of loss you can incur before your funded account is terminated. It's essentially your "safety net" that protects the prop firm's capital. Understanding the different types of drawdowns is crucial for choosing the right firm and developing appropriate risk management strategies.</p>
      
      <h2>Static Drawdown</h2>
      <p>Static drawdown is the most straightforward type. It's a fixed percentage of your initial account balance that never changes, regardless of your profits.</p>
      
      <h3>How Static Drawdown Works</h3>
      <ul>
        <li><strong>Fixed limit:</strong> If you have a 10% static drawdown on a $100,000 account, your limit is always $10,000</li>
        <li><strong>No adjustment:</strong> Even if you make $50,000 in profits, your drawdown limit remains $10,000</li>
        <li><strong>Clear boundaries:</strong> You always know exactly how much you can lose</li>
      </ul>
      
      <h3>Pros of Static Drawdown</h3>
      <ul>
        <li>Simple to understand and calculate</li>
        <li>No surprises - your limit never changes</li>
        <li>Easier to manage risk</li>
        <li>Good for conservative traders</li>
      </ul>
      
      <h3>Cons of Static Drawdown</h3>
      <ul>
        <li>No benefit from profits - your limit doesn't increase</li>
        <li>Can feel restrictive as your account grows</li>
        <li>May limit your trading flexibility</li>
      </ul>
      
      <h2>Trailing Drawdown</h2>
      <p>Trailing drawdown adjusts based on your account's peak value. As you make profits, your drawdown limit increases, but if you lose money, your limit decreases.</p>
      
      <h3>How Trailing Drawdown Works</h3>
      <ul>
        <li><strong>Dynamic limit:</strong> Your drawdown limit follows your account's highest point</li>
        <li><strong>Increases with profits:</strong> If you make $20,000, your drawdown limit increases by $20,000</li>
        <li><strong>Decreases with losses:</strong> If you lose $5,000, your drawdown limit decreases by $5,000</li>
      </ul>
      
      <h3>Example of Trailing Drawdown</h3>
      <p>Starting with $100,000 account and 10% trailing drawdown:</p>
      <ul>
        <li>Initial limit: $90,000 (10% below $100,000)</li>
        <li>If account grows to $120,000: New limit becomes $108,000 (10% below $120,000)</li>
        <li>If account drops to $110,000: Limit becomes $99,000 (10% below $110,000)</li>
      </ul>
      
      <h3>Pros of Trailing Drawdown</h3>
      <ul>
        <li>Rewards profitable trading</li>
        <li>More flexible as you succeed</li>
        <li>Encourages consistent performance</li>
        <li>Better for aggressive traders</li>
      </ul>
      
      <h3>Cons of Trailing Drawdown</h3>
      <ul>
        <li>More complex to track</li>
        <li>Can be stressful as limits change</li>
        <li>Requires careful risk management</li>
        <li>Can lead to overtrading</li>
      </ul>
      
      <h2>EOD (End of Day) Drawdown</h2>
      <p>EOD drawdown is calculated at the end of each trading day. It's similar to static drawdown but only applies to your daily closing balance.</p>
      
      <h3>How EOD Drawdown Works</h3>
      <ul>
        <li><strong>Daily calculation:</strong> Your drawdown is checked at the end of each trading day</li>
        <li><strong>Intraday flexibility:</strong> You can go below the limit during the day as long as you close above it</li>
        <li><strong>Daily reset:</strong> Each day starts fresh with the same limit</li>
      </ul>
      
      <h3>Pros of EOD Drawdown</h3>
      <ul>
        <li>More intraday flexibility</li>
        <li>Less stressful during volatile periods</li>
        <li>Good for day traders</li>
        <li>Allows for temporary drawdowns</li>
      </ul>
      
      <h3>Cons of EOD Drawdown</h3>
      <ul>
        <li>Still restrictive overall</li>
        <li>Can encourage risky intraday behavior</li>
        <li>May not suit all trading styles</li>
      </ul>
      
      <h2>Choosing the Right Drawdown Type</h2>
      <h3>Choose Static Drawdown If:</h3>
      <ul>
        <li>You're a conservative trader</li>
        <li>You prefer simple, clear rules</li>
        <li>You want predictable limits</li>
        <li>You're new to prop trading</li>
      </ul>
      
      <h3>Choose Trailing Drawdown If:</h3>
      <ul>
        <li>You're an experienced trader</li>
        <li>You want to be rewarded for profits</li>
        <li>You can handle changing limits</li>
        <li>You're confident in your strategy</li>
      </ul>
      
      <h3>Choose EOD Drawdown If:</h3>
      <ul>
        <li>You're a day trader</li>
        <li>You need intraday flexibility</li>
        <li>You can manage daily risk well</li>
        <li>You prefer less restrictive rules</li>
      </ul>
      
      <h2>Risk Management for Different Drawdown Types</h2>
      <h3>For Static Drawdown</h3>
      <ul>
        <li>Keep position sizes consistent</li>
        <li>Monitor your account balance regularly</li>
        <li>Don't increase risk after profits</li>
        <li>Focus on consistent, steady growth</li>
      </ul>
      
      <h3>For Trailing Drawdown</h3>
      <ul>
        <li>Track your peak account value</li>
        <li>Adjust position sizes as your limit changes</li>
        <li>Be extra careful after losses</li>
        <li>Don't get overconfident after profits</li>
      </ul>
      
      <h3>For EOD Drawdown</h3>
      <ul>
        <li>Monitor your balance throughout the day</li>
        <li>Close positions before market close if needed</li>
        <li>Don't rely on intraday flexibility too much</li>
        <li>Plan your trades with daily limits in mind</li>
      </ul>
      
      <p><strong>Remember:</strong> No matter which drawdown type you choose, the key is to understand the rules completely and develop a risk management strategy that works within those constraints. The best drawdown type is the one that matches your trading style and risk tolerance.</p>
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
      <h2>What Are Scaling Plans?</h2>
      <p>Scaling plans are programs offered by prop trading firms that allow successful traders to increase their account size over time. Instead of being stuck with your initial account size, you can grow your capital as you prove your trading ability and generate consistent profits.</p>
      
      <h2>How Scaling Plans Work</h2>
      <p>Most scaling plans follow a similar structure:</p>
      <ol>
        <li><strong>Initial Phase:</strong> Start with a smaller account (e.g., $25,000)</li>
        <li><strong>Profit Target:</strong> Meet specific profit targets (e.g., 10% profit)</li>
        <li><strong>Time Requirement:</strong> Maintain profits for a certain period (e.g., 30 days)</li>
        <li><strong>Scaling Up:</strong> Account size increases (e.g., to $50,000, then $100,000)</li>
        <li><strong>Repeat:</strong> Continue the process to reach maximum account size</li>
      </ol>
      
      <h2>Benefits of Scaling Plans</h2>
      <ul>
        <li><strong>Increased earning potential</strong> - Larger accounts mean bigger profits</li>
        <li><strong>Proven track record</strong> - Demonstrates your trading ability</li>
        <li><strong>Risk management</strong> - Gradual increases reduce risk</li>
        <li><strong>Motivation</strong> - Clear goals to work towards</li>
        <li><strong>Long-term growth</strong> - Build wealth systematically</li>
      </ul>
      
      <h2>Common Scaling Plan Requirements</h2>
      <h3>Profit Targets</h3>
      <p>Most firms require you to achieve a certain percentage profit before scaling:</p>
      <ul>
        <li><strong>10% profit</strong> - Most common requirement</li>
        <li><strong>15% profit</strong> - Some firms require higher targets</li>
        <li><strong>20% profit</strong> - For more aggressive scaling</li>
      </ul>
      
      <h3>Time Requirements</h3>
      <p>You typically need to maintain profits for a specific period:</p>
      <ul>
        <li><strong>30 days</strong> - Most common timeframe</li>
        <li><strong>60 days</strong> - For larger scaling steps</li>
        <li><strong>90 days</strong> - For maximum account sizes</li>
      </ul>
      
      <h3>Risk Management Rules</h3>
      <p>Scaling plans often have stricter risk management:</p>
      <ul>
        <li><strong>Lower drawdown limits</strong> - Usually 5% instead of 10%</li>
        <li><strong>Daily loss limits</strong> - Maximum 2-3% per day</li>
        <li><strong>Position size limits</strong> - Maximum 1% risk per trade</li>
        <li><strong>No news trading</strong> - Avoid high-impact events</li>
      </ul>
      
      <h2>Scaling Strategies</h2>
      <h3>Conservative Scaling</h3>
      <ul>
        <li><strong>Focus on consistency:</strong> Prioritize steady profits over large gains</li>
        <li><strong>Lower risk per trade:</strong> Use 0.5-1% risk per trade</li>
        <li><strong>Longer timeframes:</strong> Swing trading or position trading</li>
        <li><strong>Patience:</strong> Take time between scaling requests</li>
      </ul>
      
      <h3>Aggressive Scaling</h3>
      <ul>
        <li><strong>Higher risk tolerance:</strong> Use 1-2% risk per trade</li>
        <li><strong>Faster scaling:</strong> Meet targets quickly</li>
        <li><strong>Multiple strategies:</strong> Diversify across different approaches</li>
        <li><strong>Active management:</strong> Monitor positions closely</li>
      </ul>
      
      <h2>Risk Management for Scaling</h2>
      <h3>Position Sizing</h3>
      <p>As your account grows, maintain consistent risk percentages:</p>
      <ul>
        <li><strong>$25,000 account:</strong> Risk $250-500 per trade (1-2%)</li>
        <li><strong>$50,000 account:</strong> Risk $500-1,000 per trade (1-2%)</li>
        <li><strong>$100,000 account:</strong> Risk $1,000-2,000 per trade (1-2%)</li>
      </ul>
      
      <h3>Drawdown Management</h3>
      <ul>
        <li><strong>Never risk more than 25% of your drawdown</strong> on any single trade</li>
        <li><strong>Reduce position sizes</strong> if you approach 50% of your limit</li>
        <li><strong>Take breaks</strong> if you hit 75% of your drawdown</li>
        <li><strong>Review your strategy</strong> if you consistently approach limits</li>
      </ul>
      
      <h2>Common Scaling Mistakes</h2>
      <h3>Overconfidence</h3>
      <p>After successful scaling, traders often become overconfident and increase risk beyond their comfort level.</p>
      
      <h3>Rushing the Process</h3>
      <p>Trying to scale too quickly can lead to poor risk management and account blowups.</p>
      
      <h3>Ignoring Fundamentals</h3>
      <p>Focusing only on scaling targets while ignoring market conditions and strategy performance.</p>
      
      <h3>Inconsistent Strategy</h3>
      <p>Changing trading approaches frequently instead of refining a proven system.</p>
      
      <h2>Maximizing Scaling Success</h2>
      <h3>1. Develop a Proven System</h3>
      <ul>
        <li>Backtest your strategy thoroughly</li>
        <li>Paper trade before going live</li>
        <li>Document all trades and results</li>
        <li>Refine based on performance data</li>
      </ul>
      
      <h3>2. Maintain Discipline</h3>
      <ul>
        <li>Follow your rules religiously</li>
        <li>Don't deviate from your system</li>
        <li>Keep emotions in check</li>
        <li>Focus on process over profits</li>
      </ul>
      
      <h3>3. Track Performance Metrics</h3>
      <ul>
        <li><strong>Win rate:</strong> Percentage of profitable trades</li>
        <li><strong>Risk-reward ratio:</strong> Average profit vs. average loss</li>
        <li><strong>Maximum drawdown:</strong> Largest peak-to-trough decline</li>
        <li><strong>Sharpe ratio:</strong> Risk-adjusted returns</li>
      </ul>
      
      <h2>Scaling Plan Comparison</h2>
      <table>
        <tr>
          <th>Firm</th>
          <th>Max Account</th>
          <th>Scaling Speed</th>
          <th>Requirements</th>
        </tr>
        <tr>
          <td>FTMO</td>
          <td>$2,000,000</td>
          <td>Moderate</td>
          <td>4 months, 10% profit</td>
        </tr>
        <tr>
          <td>Apex Trader</td>
          <td>$6,000,000</td>
          <td>Fast</td>
          <td>$2,500 profit</td>
        </tr>
        <tr>
          <td>The 5%ers</td>
          <td>$4,000,000</td>
          <td>Moderate</td>
          <td>Monthly reviews</td>
        </tr>
      </table>
      
      <h2>Long-term Scaling Goals</h2>
      <h3>Year 1 Goals</h3>
      <ul>
        <li>Master your trading system</li>
        <li>Achieve consistent monthly profits</li>
        <li>Scale to 2-3x initial account size</li>
        <li>Build a solid track record</li>
      </ul>
      
      <h3>Year 2+ Goals</h3>
      <ul>
        <li>Scale to maximum account size</li>
        <li>Manage multiple accounts</li>
        <li>Consider institutional opportunities</li>
        <li>Mentor other traders</li>
      </ul>
      
      <p><strong>Remember:</strong> Scaling plans are a marathon, not a sprint. Focus on consistent profitability and proper risk management. The scaling will come naturally as you prove your ability to generate steady returns. Success in scaling requires patience, discipline, and a proven trading system.</p>
    `
  }
];