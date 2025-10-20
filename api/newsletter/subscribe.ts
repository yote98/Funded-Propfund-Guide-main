// Vercel API route for newsletter subscription
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, firstName, source = 'website' } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    // Brevo API integration
    const brevoApiKey = process.env.BREVO_API_KEY;
    const brevoListId = process.env.BREVO_LIST_ID || '2'; // Default list ID

    if (!brevoApiKey) {
      console.error('Brevo API key not configured');
      return res.status(500).json({ error: 'Newsletter service not configured' });
    }

    const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': brevoApiKey,
      },
      body: JSON.stringify({
        email,
        attributes: {
          FIRSTNAME: firstName || '',
          SOURCE: source,
        },
        listIds: [parseInt(brevoListId)],
        updateEnabled: true, // Update existing contact if email exists
      }),
    });

    if (!brevoResponse.ok) {
      const errorData = await brevoResponse.json();
      console.error('Brevo API error:', errorData);
      
      // Handle duplicate email gracefully
      if (brevoResponse.status === 400 && errorData.code === 'duplicate_parameter') {
        return res.status(200).json({ 
          success: true, 
          message: 'You are already subscribed to our newsletter!' 
        });
      }
      
      return res.status(400).json({ error: 'Failed to subscribe to newsletter' });
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed to our newsletter!' 
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
