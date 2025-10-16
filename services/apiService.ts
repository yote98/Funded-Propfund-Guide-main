import { propFirms, articles } from './mockData.ts';
import type { PropFirm, Article } from '../types.ts';

// Simulate an async API call
export const getPropFirms = async (): Promise<PropFirm[]> => {
  console.log("Loading firms, total count:", propFirms.length);
  console.log("Last firm in array:", propFirms[propFirms.length - 1]?.id || "none");
  
  // Check for Fundora specifically
  const fundoraIndex = propFirms.findIndex(firm => firm.id === 'fundora');
  console.log("Fundora index in array:", fundoraIndex);
  
  if (fundoraIndex >= 0) {
    console.log("Fundora found at index:", fundoraIndex);
    console.log("Fundora data:", propFirms[fundoraIndex]);
  } else {
    console.log("Fundora not found in array");
  }
  
  return Promise.resolve(propFirms);
};

export const getArticles = async (): Promise<Article[]> => {
  return Promise.resolve(articles);
};
