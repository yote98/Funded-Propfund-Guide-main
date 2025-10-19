// Top Deals Configuration - Easy to update promotions
// Update this file whenever deals change

export interface Deal {
  firmId: string;
  title: string;
  description: string;
  discount?: string;
  validUntil?: string;
  isActive: boolean;
  priority: number; // 1-5, lower number = higher priority
}

export const currentDeals: Deal[] = [
  {
    firmId: 'the-5-percenters',
    title: 'The 5%ers Bootcamp Special',
    description: 'Join the popular Bootcamp program with special offers.',
    discount: '20% off',
    validUntil: '2025-11-30',
    isActive: true,
    priority: 1
  },
  {
    firmId: 'ftmo',
    title: 'FTMO Challenge Discount',
    description: 'The industry standard challenge at a competitive price.',
    discount: '20% off',
    validUntil: '2025-11-15',
    isActive: true,
    priority: 2
  },
  {
    firmId: 'apex-trader-funding',
    title: 'Apex Trader Funding Mega Sale',
    description: 'Get up to 80% off on all evaluation accounts.',
    discount: '80% off',
    validUntil: '2025-12-31',
    isActive: true,
    priority: 3
  },
  {
    firmId: 'topstep',
    title: 'Topstep Trading Combine',
    description: 'Special pricing on the Trading Combine evaluations.',
    discount: '25% off', // Updated from '30% off'
    validUntil: '2025-11-20',
    isActive: true,
    priority: 4
  },
  {
    firmId: 'bulenox',
    title: 'Bulenox Massive Discount',
    description: 'Massive 91% off deals on qualification accounts.',
    discount: '91% off',
    validUntil: '2025-10-31',
    isActive: true,
    priority: 5
  },
  {
    firmId: 'funding-pips',
    title: 'Funding Pips Lightning Deal',
    description: 'Lightning-fast payouts in just 4 hours with special pricing.',
    discount: '15% off',
    validUntil: '2025-12-15',
    isActive: true,
    priority: 6
  }
];

// Global promo code
export const GLOBAL_PROMO_CODE = 'FPG10';

// Helper function to get active deals sorted by priority
export const getActiveDeals = (): Deal[] => {
  return currentDeals
    .filter(deal => deal.isActive)
    .sort((a, b) => a.priority - b.priority)
    .slice(0, 5); // Show top 5 deals
};

// Helper function to check if deal is still valid
export const isDealValid = (deal: Deal): boolean => {
  if (!deal.validUntil) return true;
  return new Date(deal.validUntil) > new Date();
};
