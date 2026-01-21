<h1 align="center">
<br>
Eventually-as-a-Service
<br>
<small>Deliberately Minimal | Pointlessly Perfect</small>
</h1>

<p align="center">
<img src="https://img.shields.io/badge/version-1.0.0-white" alt="Version" style="max-width: 100%;">
<img src="https://img.shields.io/badge/status-in development-white" alt="Status" style="max-width: 100%;">
<img src="https://img.shields.io/badge/progress-eventually-white" alt="Progress" style="max-width: 100%;">
<img src="https://img.shields.io/badge/platform-any-white" alt="Platform" style="max-width: 100%;">
</p>

# Eventually-as-a-Service

Public repo for the **Eventually-as-a-Service** API, a deliberately minimal web service that does almost nothing. This repository provides the complete source code, deployment instructions, and absolutely no roadmap.

<p align="center">
<a href="https://e-ass.netlify.app/" target="_blank"><img src="https://img.shields.io/badge/live api-e--ass.netlify.app-white?style=for-the-badge" alt="Live API"></a>
<a href="https://e-ass.netlify.app/documentation" target="_blank"><img src="https://img.shields.io/badge/docs-interactive-white?style=for-the-badge" alt="Documentation"></a>
</p>

## ⚡ Introducing EaaS — Eventually-as-a-Service

Eventually-as-a-Service is a next-generation API that provides **random excuses for why things aren't ready yet** — powered by **JSON files** and **basic JavaScript**.

It responds to HTTP requests with carefully curated reasons why your product, feature, or service is still "in development" after **3,580+ days**. You can get responses in different moods: corporate buzzwords, sarcastic quips, or genuinely funny excuses.

Designed for **developers, product managers, and anyone who needs professional-sounding delays**, EaaS combines cutting-edge procrastination with seamless API responses — giving you instant, reliable excuses even when your server is down.

**🌐 Live API:** [https://e-ass.netlify.app/](https://e-ass.netlify.app/)

---

## 💾 Download & Installation

- **[Clone this repo →](https://github.com/your-username/eventually-as-a-service)**
- **[Live API →](https://e-ass.netlify.app/)**
- Compatible with **Node.js 14+**
- Works on **Windows, macOS, Linux**

> After installation, the service automatically finds an available port and starts serving excuses immediately.

---

## 🧠 Service Architecture

| Component | Technology | Description |
|-----------|------------|-------------|
| 🗂 **Response Storage** | **JSON files** | Stores categorized excuses and responses locally. |
| 💬 **API Logic** | **Express.js** | Processes requests and returns random responses with development time. |
| 🔄 **Port Management** | **Node.js net module** | Automatically finds available ports starting from 3000. |
| ⏰ **Time Calculation** | **JavaScript Date** | Calculates exact development time since April 1, 2016. |
| ☁️ **Deployment** | **Netlify Functions** | Serverless deployment for global availability. |

All responses are served locally with **no external dependencies** for maximum reliability and minimum features.

---

## 🧩 System Requirements

- **Runtime:** Node.js 14+ (for local development)
- **Memory:** Practically nothing
- **Storage:** A few KB for JSON files
- **Network:** HTTP access
- **Dependencies:** Express.js only

---

## 🚀 Getting Started

### Use the Live API
Simply make requests to: **[https://e-ass.netlify.app/](https://e-ass.netlify.app/)**

### Local Development
1. Clone the repository or download the source code.
2. Run `npm install` to install Express.js.
3. Run `npm start` to launch the service.
4. Visit the automatically assigned port (displayed in console).
5. Hit different endpoints to get different excuse styles.

---

## 🔥 Core Features

| Feature | Description |
|---------|-------------|
| 🎯 **Random Responses** | Returns different excuses each time from curated collections. |
| 🏢 **Corporate Mode** | Professional buzzword-filled responses via `/corporate` endpoint. |
| 😄 **Funny Mode** | Humorous and creative excuses via `/funny` endpoint. |
| 😏 **Sarcastic Mode** | Dry, sarcastic responses via `/sarcastic` endpoint. |
| ⏱ **Development Timer** | Shows exact time elapsed since April 1, 2016. |
| 🔌 **Auto Port Detection** | Automatically finds available ports to avoid conflicts. |
| 📡 **Pure Text API** | All endpoints return clean plain text responses. |
| 🚀 **Zero Config** | Works immediately after `npm start` with no setup. |
| ☁️ **Global Deployment** | Available worldwide via Netlify CDN. |

---

## 🐛 API Endpoints

### Live API Base URL: `https://e-ass.netlify.app/`

#### ✅ GET `/`
**Default Responses**
```
Still not yet.

In development for 3,580 days, 12 hours.
```

#### ✅ GET `/corporate`
**Corporate Buzzword Responses**
```
We're currently optimizing our delivery pipeline.

In development for 3,580 days, 12 hours.
```

#### ✅ GET `/funny`
**Humorous Responses**
```
The hamsters powering this are on strike.

In development for 3,580 days, 12 hours.
```

#### ✅ GET `/sarcastic`
**Sarcastic Responses**
```
Oh, you're still here?

In development for 3,580 days, 12 hours.
```

#### 📚 GET `/documentation`
**Interactive Documentation**
Visit [https://e-ass.netlify.app/documentation](https://e-ass.netlify.app/documentation) for an interactive API explorer with "Try it" buttons.

### Usage Examples

```bash
# Get a default response
curl https://e-ass.netlify.app/

# Get corporate buzzwords
curl https://e-ass.netlify.app/corporate

# Get funny excuses
curl https://e-ass.netlify.app/funny

# Get sarcastic responses
curl https://e-ass.netlify.app/sarcastic
```

### Common Issues

#### ❌ API Not Responding
**Solution**: The API is hosted on Netlify and should be available 24/7
- Check [https://e-ass.netlify.app/](https://e-ass.netlify.app/) directly
- Verify your internet connection
- Try different endpoints to isolate issues

#### ❌ Local Development Issues
**Solution**: For local development
```bash
npm install
npm start
```

#### ❌ CORS Issues
**Solution**: The API includes CORS headers for browser requests
- All endpoints support cross-origin requests
- No authentication required
- Rate limiting handled by Netlify

### Debug Information
- **Live Status**: Check any endpoint for current status
- **Development Time**: Automatically calculated from April 1, 2016
- **Response Variety**: Each request returns a random response from the selected category

## 🧭 Resources

- 📚 [Interactive Documentation](https://e-ass.netlify.app/documentation)
- 🌐 [Live API](https://e-ass.netlify.app/)
- 💻 [Source Code](.) (You're looking at it)
- 🐞 [Report Issues](https://github.com/your-username/eventually-as-a-service/issues)
- 💬 Community: Eventually

---

## ⚖️ License

This repository and the Eventually-as-a-Service API are released into the **public domain**.

**Public Domain Dedication:**
- Use it commercially or personally
- Modify it however you want
- No attribution required (but appreciated)
- Deploy your own instance anywhere
- The API at https://e-ass.netlify.app/ is free for everyone

**CC0 1.0 Universal** - To the extent possible under law, the author has waived all copyright and related rights to this work.

Use it, abuse it, or just stare at it. Eventually.

---