// Simple in-memory storage for Vercel deployment
const contacts = [];

// Basic validation schema
const validateContact = (data) => {
  if (!data.name || !data.email || !data.message) {
    throw new Error('Name, email, and message are required');
  }
  if (!data.email.includes('@')) {
    throw new Error('Invalid email format');
  }
  return true;
};

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    try {
      validateContact(req.body);
      const submission = {
        id: contacts.length + 1,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone || '',
        message: req.body.message,
        createdAt: new Date().toISOString()
      };
      contacts.push(submission);
      res.status(201).json(submission);
    } catch (error) {
      console.error('Contact submission error:', error);
      res.status(400).json({ error: error.message || 'Invalid contact data' });
    }
  } else if (req.method === 'GET') {
    try {
      res.status(200).json(contacts);
    } catch (error) {
      console.error('Contact retrieval error:', error);
      res.status(500).json({ error: 'Failed to retrieve contacts' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}