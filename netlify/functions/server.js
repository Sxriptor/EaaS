const serverless = require('serverless-http');
const express = require('express');
const path = require('path');

const app = express();

// Hardcoded responses (since file loading is tricky in serverless)
const responses = {
  default: [
    "Still not yet.",
    "Nope, not ready.",
    "Almost there. Just kidding.",
    "Coming soon™",
    "In progress...",
    "Not today.",
    "Maybe tomorrow.",
    "Still working on it.",
    "Getting closer. Not really.",
    "Soon-ish.",
    "Eventually.",
    "Not quite.",
    "Still loading...",
    "Under construction.",
    "Patience, grasshopper.",
    "Rome wasn't built in a day. Neither is this.",
    "Check back later.",
    "Still brewing.",
    "Not finished yet.",
    "Work in progress."
  ],
  corporate: [
    "We're currently optimizing our delivery pipeline.",
    "This feature is in our Q47 roadmap.",
    "We're leveraging synergies to accelerate development.",
    "Our team is ideating on the best user experience.",
    "We're in the discovery phase of our agile methodology.",
    "This is currently being prioritized by stakeholders.",
    "We're conducting extensive market research.",
    "Our engineers are architecting a scalable solution.",
    "We're aligning with our strategic initiatives.",
    "This is pending approval from the steering committee.",
    "We're optimizing for maximum ROI.",
    "Our UX team is iterating on the design thinking process.",
    "We're implementing best practices for enterprise readiness.",
    "This requires cross-functional collaboration.",
    "We're ensuring compliance with industry standards.",
    "Our product team is validating the MVP requirements.",
    "We're conducting A/B tests on the user journey.",
    "This is in our technical debt backlog.",
    "We're waiting for budget allocation approval.",
    "Our DevOps team is setting up the CI/CD pipeline."
  ],
  sarcastic: [
    "Oh, you're still here?",
    "Shocking. It's not done yet.",
    "What a surprise. Still nothing.",
    "Did you really think it would be ready?",
    "Wow, such patience. Still no.",
    "Amazing. Still in development.",
    "Incredible. Nothing has changed.",
    "Groundbreaking. It's still not ready.",
    "Revolutionary. Still the same answer.",
    "Brilliant. You got nothing again.",
    "Genius move. Still waiting.",
    "Outstanding. Zero progress to report.",
    "Magnificent. The answer remains no.",
    "Spectacular. Still not happening.",
    "Phenomenal. Same result as always.",
    "Remarkable. Nothing new here.",
    "Extraordinary. Still not ready.",
    "Fantastic. What did you expect?",
    "Wonderful. The status quo continues.",
    "Marvelous. Absolutely nothing."
  ],
  funny: [
    "Still debugging the universe.",
    "The hamsters powering this are on strike.",
    "We're waiting for the intern to get back from lunch.",
    "The code is currently arguing with itself.",
    "Our servers are powered by hopes and dreams.",
    "The feature is stuck in traffic.",
    "We're waiting for the right planetary alignment.",
    "The developers are still googling how to do this.",
    "Our AI became sentient and quit.",
    "The code is having an existential crisis.",
    "We're waiting for Stack Overflow to answer our question.",
    "The feature is in witness protection.",
    "Our rubber duck debugger is on vacation.",
    "The code is currently in therapy.",
    "We're waiting for the coffee machine to be fixed.",
    "The feature escaped and we can't find it.",
    "Our servers are powered by a potato.",
    "The code is stuck in an infinite loop of procrastination.",
    "We're waiting for the magic to happen.",
    "The feature is currently learning to exist."
  ]
};

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

// Documentation HTML content
const documentationHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Eventually-as-a-Service Documentation</title>
  <style>
    body {
      background: #0f0f0f;
      color: #eaeaea;
      font-family: system-ui, -apple-system, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0;
      padding: 20px;
      box-sizing: border-box;
    }
    .container {
      text-align: center;
      max-width: 600px;
    }
    h1 {
      font-size: 2.5em;
      margin-bottom: 10px;
    }
    .subtitle {
      color: #888;
      margin-bottom: 40px;
    }
    .endpoint {
      background: #1a1a1a;
      border: 1px solid #333;
      border-radius: 8px;
      padding: 20px;
      margin: 15px 0;
      text-align: left;
    }
    .endpoint h3 {
      margin: 0 0 10px 0;
      color: #fff;
    }
    .endpoint code {
      background: #333;
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }
    .endpoint p {
      margin: 5px 0;
      color: #ccc;
    }
    .try-button {
      background: #333;
      color: #fff;
      border: 1px solid #555;
      padding: 8px 16px;
      cursor: pointer;
      border-radius: 4px;
      margin-top: 10px;
    }
    .try-button:hover {
      background: #444;
    }
    .response {
      background: #2a2a2a;
      border-left: 3px solid #666;
      padding: 10px;
      margin-top: 10px;
      font-family: 'Courier New', monospace;
      font-size: 12px;
      display: none;
    }
    .footer {
      margin-top: 40px;
      color: #666;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Eventually-as-a-Service</h1>
    <p class="subtitle">Deliberately minimal API for professional procrastination</p>
    
    <div class="endpoint">
      <h3>GET <code>/</code></h3>
      <p>Default responses - dry and to the point</p>
      <button class="try-button" onclick="tryEndpoint('/')">Try it</button>
      <div class="response" id="response-default"></div>
    </div>

    <div class="endpoint">
      <h3>GET <code>/corporate</code></h3>
      <p>Corporate buzzword responses for enterprise delays</p>
      <button class="try-button" onclick="tryEndpoint('/corporate')">Try it</button>
      <div class="response" id="response-corporate"></div>
    </div>

    <div class="endpoint">
      <h3>GET <code>/funny</code></h3>
      <p>Humorous excuses for creative procrastination</p>
      <button class="try-button" onclick="tryEndpoint('/funny')">Try it</button>
      <div class="response" id="response-funny"></div>
    </div>

    <div class="endpoint">
      <h3>GET <code>/sarcastic</code></h3>
      <p>Sarcastic responses for when patience runs thin</p>
      <button class="try-button" onclick="tryEndpoint('/sarcastic')">Try it</button>
      <div class="response" id="response-sarcastic"></div>
    </div>

    <div class="footer">
      <p>In development since April 1, 2016</p>
      <p>API: <a href="/" style="color: #888;">https://e-ass.netlify.app/</a></p>
    </div>
  </div>

  <script>
    async function tryEndpoint(path) {
      const responseId = 'response-' + (path === '/' ? 'default' : path.substring(1));
      const responseDiv = document.getElementById(responseId);
      
      try {
        responseDiv.style.display = 'block';
        responseDiv.textContent = 'Loading...';
        
        const response = await fetch(path);
        const data = await response.text();
        
        responseDiv.textContent = data;
      } catch (error) {
        responseDiv.textContent = 'Error: ' + error.message;
      }
    }
  </script>
</body>
</html>`;

// Route handlers
app.get('/', (req, res) => {
  const response = getRandomResponse('default');
  const time = calculateDevelopmentTime();
  res.send(`${response}\n\nIn development for ${time.days} days, ${time.hours} hours.`);
});

app.get('/corporate', (req, res) => {
  const response = getRandomResponse('corporate');
  const time = calculateDevelopmentTime();
  res.send(`${response}\n\nIn development for ${time.days} days, ${time.hours} hours.`);
});

app.get('/funny', (req, res) => {
  const response = getRandomResponse('funny');
  const time = calculateDevelopmentTime();
  res.send(`${response}\n\nIn development for ${time.days} days, ${time.hours} hours.`);
});

app.get('/sarcastic', (req, res) => {
  const response = getRandomResponse('sarcastic');
  const time = calculateDevelopmentTime();
  res.send(`${response}\n\nIn development for ${time.days} days, ${time.hours} hours.`);
});

app.get('/documentation', (req, res) => {
  res.send(documentationHTML);
});

module.exports.handler = serverless(app);