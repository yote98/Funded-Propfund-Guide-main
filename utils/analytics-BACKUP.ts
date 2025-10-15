// Analytics utility for tracking user interactions
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

class Analytics {
  private isEnabled: boolean = false;

  constructor() {
    // Check if Google Analytics is loaded
    this.isEnabled = typeof window !== 'undefined' && typeof window.gtag === 'function';
  }

  // Track page views
  trackPageView(pagePath: string, pageTitle: string) {
    if (!this.isEnabled) return;
    
    window.gtag('config', 'G-XXXXXXXXXX', {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }

  // Track custom events
  trackEvent(event: AnalyticsEvent) {
    if (!this.isEnabled) return;

    window.gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
      ...event.custom_parameters,
    });
  }

  // Track affiliate link clicks
  trackAffiliateClick(toolName: string, toolType: 'trading-tool' | 'prop-firm', url: string) {
    this.trackEvent({
      action: 'affiliate_click',
      category: 'engagement',
      label: `${toolType}:${toolName}`,
      custom_parameters: {
        tool_name: toolName,
        tool_type: toolType,
        affiliate_url: url,
        timestamp: new Date().toISOString(),
      },
    });
  }

  // Track trading tool interactions
  trackTradingToolClick(toolName: string, action: 'view' | 'click') {
    this.trackEvent({
      action: `trading_tool_${action}`,
      category: 'trading_tools',
      label: toolName,
      custom_parameters: {
        tool_name: toolName,
        action_type: action,
      },
    });
  }

  // Track prop firm interactions
  trackPropFirmClick(firmName: string, action: 'view' | 'compare' | 'click') {
    this.trackEvent({
      action: `prop_firm_${action}`,
      category: 'prop_firms',
      label: firmName,
      custom_parameters: {
        firm_name: firmName,
        action_type: action,
      },
    });
  }

  // Track filter usage
  trackFilterUsage(filterType: string, filterValue: string, page: string) {
    this.trackEvent({
      action: 'filter_used',
      category: 'user_interaction',
      label: `${page}:${filterType}`,
      custom_parameters: {
        filter_type: filterType,
        filter_value: filterValue,
        page: page,
      },
    });
  }

  // Track search queries
  trackSearch(query: string, resultsCount: number, page: string) {
    this.trackEvent({
      action: 'search',
      category: 'user_interaction',
      label: page,
      value: resultsCount,
      custom_parameters: {
        search_query: query,
        results_count: resultsCount,
        page: page,
      },
    });
  }

  // Track navigation
  trackNavigation(fromPage: string, toPage: string) {
    this.trackEvent({
      action: 'navigation',
      category: 'user_flow',
      label: `${fromPage} -> ${toPage}`,
      custom_parameters: {
        from_page: fromPage,
        to_page: toPage,
      },
    });
  }

  // Track time spent on page
  trackTimeOnPage(page: string, timeSpent: number) {
    this.trackEvent({
      action: 'time_on_page',
      category: 'engagement',
      label: page,
      value: Math.round(timeSpent),
      custom_parameters: {
        page: page,
        time_seconds: timeSpent,
      },
    });
  }
}

// Create singleton instance
export const analytics = new Analytics();

// Helper functions for common tracking scenarios
export const trackAffiliateClick = (toolName: string, toolType: 'trading-tool' | 'prop-firm', url: string) => {
  analytics.trackAffiliateClick(toolName, toolType, url);
};

export const trackTradingToolClick = (toolName: string, action: 'view' | 'click') => {
  analytics.trackTradingToolClick(toolName, action);
};

export const trackPropFirmClick = (firmName: string, action: 'view' | 'compare' | 'click') => {
  analytics.trackPropFirmClick(firmName, action);
};

export const trackFilterUsage = (filterType: string, filterValue: string, page: string) => {
  analytics.trackFilterUsage(filterType, filterValue, page);
};

export const trackSearch = (query: string, resultsCount: number, page: string) => {
  analytics.trackSearch(query, resultsCount, page);
};

export const trackNavigation = (fromPage: string, toPage: string) => {
  analytics.trackNavigation(fromPage, toPage);
};

export const trackTimeOnPage = (page: string, timeSpent: number) => {
  analytics.trackTimeOnPage(page, timeSpent);
};
