Eventually-as-a-Service

It's been in development for a while.

## Setup

```bash
npm install
npm start
```

Server runs on port 3000 by default, or set PORT environment variable:

```bash
PORT=8080 npm start
```

## Endpoints

- `/` - Main page with button
- `/corporate` - Corporate buzzword responses  
- `/funny` - Humorous responses
- `/sarcastic` - Sarcastic responses
- `/default` - Default dry responses

All endpoints return JSON except the main page.