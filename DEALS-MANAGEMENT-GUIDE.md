# Deals Management Guide 🏷️

## Overview
This guide explains how to manage and update the Top October Deals section on the Funded Program Guide website.

## Configuration File: `services/dealsData.ts`

### Deal Structure
```typescript
interface Deal {
  firmId: string;        // Unique identifier for the prop firm
  title: string;         // Deal title
  description: string;   // Short description of the deal
  discount?: string;     // Discount percentage or details
  validUntil?: string;   // Expiration date (YYYY-MM-DD)
  isActive: boolean;     // Whether the deal is currently active
  priority: number;      // Display order (1-5, lower = higher priority)
}
```

## Updating Deals Manually

### Method 1: Direct File Edit
1. Open `services/dealsData.ts`
2. Locate the `currentDeals` array
3. Modify existing deals or add new ones
4. Ensure `isActive` and `validUntil` are set correctly

### Method 2: Visual Editor
1. Run the `DealsAdmin` component
2. Click "Edit" on the deal you want to modify
3. Update fields in the modal
4. Click "Save Changes"

## Best Practices
- Always set a realistic `validUntil` date
- Keep `priority` values between 1-5
- Verify firm IDs match those in `mockData.ts`
- Remove or deactivate expired deals

## Example Deal Update
```typescript
{
  firmId: 'topstep',
  title: 'Topstep Trading Combine',
  description: 'Special pricing on the Trading Combine evaluations.',
  discount: '25% off',  // Update this value
  validUntil: '2025-11-20',  // Update expiration
  isActive: true,
  priority: 4
}
```

## Troubleshooting
- If a deal doesn't appear, check:
  1. `isActive` is `true`
  2. `validUntil` is in the future
  3. Firm ID exists in `mockData.ts`

## Global Promo Code
The global promo code is defined in `dealsData.ts`:
```typescript
export const GLOBAL_PROMO_CODE = 'FPG10';
```

## Automated Validation
- `getActiveDeals()` automatically:
  1. Filters active deals
  2. Sorts by priority
  3. Returns top 5 deals

## Future Enhancements
- Implement backend persistence
- Add automated deal expiration
- Create admin dashboard for deal management
