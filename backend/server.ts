import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { Country } from '../types';

const app = express();
app.use(cors());
app.use(express.json());

const dataPath = path.join(__dirname, 'data', 'countries.json');
let countries: Country[] = [];
try {
  const fileData = fs.readFileSync(dataPath, 'utf-8');
  countries = JSON.parse(fileData) as Country[];
} catch (err) {
  console.error(`Could not read countries data at ${dataPath}:`, err);
  countries = [];
}

app.get('/api/countries', (req, res) => {
  res.json(countries);
});

app.put('/api/countries', (req, res) => {
  countries = req.body;
  try {
    fs.writeFileSync(dataPath, JSON.stringify(countries, null, 2));
  } catch (err) {
    console.error(`Failed to write countries data to ${dataPath}:`, err);
  }
  res.json(countries);
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
}); 