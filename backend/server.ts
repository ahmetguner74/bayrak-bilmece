import express from 'express';
import cors from 'cors';
import { Country } from '../types';

const app = express();
app.use(cors());
app.use(express.json());

let countries: Country[] = require('./data/countries.json');

app.get('/api/countries', (req, res) => {
  res.json(countries);
});

app.put('/api/countries', (req, res) => {
  countries = req.body;
  res.json(countries);
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
}); 