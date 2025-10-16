import type { PropFirm, Article } from '../types.ts';

export const propFirms: PropFirm[] = [
  {
    id: 'apex-trader-funding',
    name: 'Apex Trader Funding',
    shortName: 'Apex',
    logoUrl: 'https://apextraderfunding.com/wp-content/uploads/2024/01/apex-logo-new.png',
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
  }
];

export const articles: Article[] = [
  {
    id: 'test-article',
    title: 'Test Article',
    summary: 'This is a test article',
    author: 'Test Author',
    publishedDate: '2024-01-01',
    imageUrl: 'https://via.placeholder.com/400x200',
    content: '<p>This is test content</p>'
  }
];
