import fs from 'fs';
import path from 'path';

export const getFlags = () => {
  const flagsDir = path.join(process.cwd(), 'public/flags');
  const files = fs.readdirSync(flagsDir);
  return files.filter(file => file.endsWith('.png'));
}; 