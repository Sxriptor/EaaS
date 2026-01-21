const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Load response data
let responses = {};

function loadResponses() {
  try {
    const files = [
      { file: 'responses.json', key: 'default' },
      { file: 'responses_corporate.json', key: 'corporate' },
      { file: 'responses_sarcastic.json', key: 'sarcastic' },
      { file: 'responses_funny.json', key: 'funny' }
    ];
    
    files.forEach(({ file, key }) => {
      if (fs.existsSync(file)) {
        const data = JSON.parse(fs.readFileSync(file, 'utf8'));
        responses[key] = data[key] || data.default || data[Object.keys(data)[0]];
      }
    });
  } catch (error) {
    // Fallback responses
    responses = {
      default: ["Still not yet."],
      corporate: ["We're currently optimizing our delivery pipeline."],
      sarcastic: ["Oh, you're still here?"],
      funny: ["Still debugging the universe."]
    };
  }
}

function getRandomResponse(mode) {
  const modeResponses = responses[mode] || responses.default;
  return modeResponses[Math.floor(Math.random() * modeResponses.length)];
}

function calculateDevelopmentTime() {
  const START_DATE = new Date("2016-04-01T00:00:00Z");
  const now = new Date();
  const diff = now - START_DATE;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  return { days, hours };
}

// Load responses on startup
loadResponses();

// Serve static files
app.use(express.static('.'));

// Route handlers
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/corporate', (req, res) => {
  const response = getRandomResponse('corporate');
  const time = calculateDevelopmentTime();
  res.json({
    message: response,
    developmentTime: `In development for ${time.days} days, ${time.hours} hours.`
  });
});

app.get('/funny', (req, res) => {
  const response = getRandomResponse('funny');
  const time = calculateDevelopmentTime();
  res.json({
    message: response,
    developmentTime: `In development for ${time.days} days, ${time.hours} hours.`
  });
});

app.get('/sarcastic', (req, res) => {
  const response = getRandomResponse('sarcastic');
  const time = calculateDevelopmentTime();
  res.json({
    message: response,
    developmentTime: `In development for ${time.days} days, ${time.hours} hours.`
  });
});

app.get('/default', (req, res) => {
  const response = getRandomResponse('default');
  const time = calculateDevelopmentTime();
  res.json({
    message: response,
    developmentTime: `In development for ${time.days} days, ${time.hours} hours.`
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Eventually-as-a-Service running on port ${PORT}`);
  console.log('Available at:');
  console.log(`  http://localhost:${PORT}/`);
  console.log(`  http://0.0.0.0:${PORT}/`);
  console.log('Available endpoints:');
  console.log(`  /corporate - Corporate responses`);
  console.log(`  /funny - Humorous responses`);
  console.log(`  /sarcastic - Sarcastic responses`);
  console.log(`  /default - Default responses`);
  console.log('Press Ctrl+C to stop');
});