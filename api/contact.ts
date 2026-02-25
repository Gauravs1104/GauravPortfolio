import type { VercelRequest, VercelResponse } from '@vercel/node';
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  if (!MONGODB_URI) {
    return res.status(500).json({ message: 'MongoDB URI not defined' });
  }

  try {
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(MONGODB_URI);
    }

    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing fields' });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    return res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
