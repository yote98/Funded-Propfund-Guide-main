export const trackNavigation = (fromPage: string, toPage: string) => {
  console.log(`Navigation: ${fromPage} → ${toPage}`);
};

export const trackPropFirmClick = (firmName: string, action: 'view' | 'click') => {
  console.log(`Prop Firm Click: ${firmName} (${action})`);
};

export const trackFilterUsage = (filterType: string, filterValue: string) => {
  console.log(`Filter Used: ${filterType} - ${filterValue}`);
};

export const trackSearch = (searchTerm: string) => {
  console.log(`Search: ${searchTerm}`);
};

export const trackTimeOnPage = (pageName: string, timeSpent: number) => {
  console.log(`Time on Page: ${pageName} - ${timeSpent} seconds`);
};

export const trackAffiliateClick = (affiliateName: string) => {
  console.log(`Affiliate Click: ${affiliateName}`);
};

export const trackTradingToolClick = (toolName: string) => {
  console.log(`Trading Tool Click: ${toolName}`);
};

export const analytics = {
  trackNavigation,
  trackPropFirmClick,
  trackFilterUsage,
  trackSearch,
  trackTimeOnPage,
  trackAffiliateClick,
  trackTradingToolClick
};
