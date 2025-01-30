import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const flagsDir = path.join(process.cwd(), 'public/flags');
    const files = fs.readdirSync(flagsDir);
    const flagFiles = files.filter(file => file.endsWith('.png'));
    res.status(200).json(flagFiles);
  } catch (error) {
    console.error('Error reading flags directory:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
} 