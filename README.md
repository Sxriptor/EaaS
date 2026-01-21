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
<a href="http://localhost:3000" target="_blank"><img src="https://img.shields.io/badge/demo-localhost:3000-white?style=for-the-badge" alt="Local Demo"></a>
<a href="#-getting-started" target="_blank"><img src="https://img.shields.io/badge/setup-npm start-white?style=for-the-badge" alt="Quick Setup"></a>
</p>

## ⚡ Introducing EaaS — Eventually-as-a-Service

Eventually-as-a-Service is a next-generation API that provides **random excuses for why things aren't ready yet** — powered by **JSON files** and **basic JavaScript**.

It responds to HTTP requests with carefully curated reasons why your product, feature, or service is still "in development" after **2,873+ days**. You can get responses in different moods: corporate buzzwords, sarcastic quips, or genuinely funny excuses.

Designed for **developers, product managers, and anyone who needs professional-sounding delays**, EaaS combines cutting-edge procrastination with seamless API responses — giving you instant, reliable excuses even when your server is down.

---

## 💾 Download & Installation

- **[Clone this repo →](https://github.com/your-username/eventually-as-a-service)**
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

All responses are served locally with **no external dependencies** for maximum reliability and minimum features.

---

## 🧩 System Requirements

- **Runtime:** Node.js 14+ 
- **Memory:** Practically nothing
- **Storage:** A few KB for JSON files
- **Network:** HTTP port access
- **Dependencies:** Express.js only

---

## � Getting Started

1. Clone the repository or download the source code.
2. Run `npm install` to install Express.js.
3. Run `npm start` to launch the service.
4. Visit the automatically assigned port (displayed in console).
5. Hit different endpoints to get different excuse styles.

---

## 🔥 Core Features

| Feature | Description |
|---------|-------------|
| 🎯 **Random Responses** | Returns different excuses each time from curated JSON collections. |
| 🏢 **Corporate Mode** | Professional buzzword-filled responses via `/corporate` endpoint. |
| � **Funny Mode** | Humorous and creative excuses via `/funny` endpoint. |
| 😏 **Sarcastic Mode** | Dry, sarcastic responses via `/sarcastic` endpoint. |
| ⏱ **Development Timer** | Shows exact time elapsed since April 1, 2016. |
| 🔌 **Auto Port Detection** | Automatically finds available ports to avoid conflicts. |
| 📡 **Pure API** | All endpoints return clean JSON responses. |
| 🚀 **Zero Config** | Works immediately after `npm start` with no setup. |

---

## � API Endpoints

### Core Endpoints

#### ✅ GET `/`
**Default Responses**
```json
{
  "message": "Still not yet.",
  "developmentTime": "In development for 2,873 days, 4 hours."
}
```

#### ✅ GET `/corporate`
**Corporate Buzzword Responses**
```json
{
  "message": "We're currently optimizing our delivery pipeline.",
  "developmentTime": "In development for 2,873 days, 4 hours."
}
```

#### ✅ GET `/funny`
**Humorous Responses**
```json
{
  "message": "The hamsters powering this are on strike.",
  "developmentTime": "In development for 2,873 days, 4 hours."
}
```

#### ✅ GET `/sarcastic`
**Sarcastic Responses**
```json
{
  "message": "Oh, you're still here?",
  "developmentTime": "In development for 2,873 days, 4 hours."
}
```

### Common Issues

#### ❌ Port Already in Use
**Solution**: The service automatically finds the next available port
- Default starts at port 3000
- Automatically increments (3001, 3002, etc.) if ports are taken
- Use `PORT=8080 npm start` to force a specific port

#### ❌ Module Not Found
**Solution**: Install dependencies
```bash
npm install
```

#### ❌ Permission Denied
**Solution**: Use a port above 1024 or run with appropriate permissions
```bash
PORT=8080 npm start
```

#### ❌ Service Not Responding
**Solution**: Check the console output for the actual port being used
1. Look for "Eventually-as-a-Service running on port XXXX"
2. Visit `http://localhost:XXXX`
3. Verify no firewall is blocking the port

### Debug Information
The console shows:
- Assigned port number
- Available endpoints
- Server startup status
- Any errors during JSON file loading

## 🧭 Resources

- 📚 [Source Code](.) (You're looking at it)
- 🐞 [Report Issues](https://github.com/your-username/eventually-as-a-service/issues)
- 💬 Community: Eventually

---

## ⚖️ License

This repository contains the complete source code for Eventually-as-a-Service.
The service, responses, and concept are provided as-is with no warranty that anything will ever be finished.

MIT License - Use it, modify it, deploy it, or just stare at it. Eventually.

---