// Newsletter service for Brevo integration
export interface NewsletterSubscription {
  email: string;
  firstName?: string;
  source?: string;
}

export interface BrevoResponse {
  success: boolean;
  message?: string;
  error?: string;
}

// Brevo API integration
export const subscribeToNewsletter = async (data: NewsletterSubscription): Promise<BrevoResponse> => {
  try {
    const response = await fetch('/api/newsletter/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.error || 'Subscription failed');
    }

    return { success: true, message: 'Successfully subscribed!' };
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Something went wrong. Please try again.' 
    };
  }
};

// Mock implementation for development
export const mockSubscribeToNewsletter = async (data: NewsletterSubscription): Promise<BrevoResponse> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Simulate success
  return { success: true, message: 'Successfully subscribed!' };
};
