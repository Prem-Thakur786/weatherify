# 🌤️ Weather App

A beautiful, responsive weather app built with **React + Vite + Tailwind CSS v4** featuring glassmorphism UI, dynamic gradient backgrounds, and real-time weather data from OpenWeatherMap.

---

## ✨ Features

- 🔍 Search weather by city name (click or press **Enter**)
- 🎨 Dynamic gradient background that changes based on weather condition
- 🪟 Glassmorphism cards with frosted-glass effect
- 🌡️ Temperature, high/low, feels like, humidity, wind speed & pressure
- 🌥️ Animated weather condition icons
- ⚡ Fast and lightweight — Vite + React 19
- 📱 Fully responsive with Tailwind CSS v4
- 🌍 Country code displayed alongside city name
- 🕐 Last updated timestamp after every search

---

## 🎨 Dynamic Backgrounds

The background gradient changes automatically based on the current weather:

| Condition | Gradient |
|-----------|----------|
| ☀️ Clear | Amber → Orange → Pink |
| ☁️ Cloudy | Slate gray tones |
| 🌧️ Rain / Drizzle | Deep blue → Indigo |
| ⛈️ Thunderstorm | Dark gray → Purple |
| ❄️ Snow | Soft blue → White |
| 🌫️ Fog / Mist / Haze | Muted gray tones |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- An [OpenWeatherMap](https://openweathermap.org/api) free API key

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/weather-app.git
cd weather-app

# Install dependencies
npm install
```

### Setup API Key

A default API key is included for demo purposes. To use your own:

1. Sign up at [openweathermap.org](https://openweathermap.org/api) and get a free API key.
2. Create a `.env` file in the project root:

```env
VITE_WEATHER_API_KEY=your_openweathermap_api_key_here
```

> ⚠️ Never commit your `.env` file. It is already listed in `.gitignore`.

### Run Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Animated title with floating emoji
│   ├── SearchBar.jsx       # City search — click or Enter key
│   ├── WeatherCard.jsx     # Temp, high/low, icon, description
│   ├── WeatherDetails.jsx  # Humidity, wind, feels like, pressure
│   ├── LoadingSpinner.jsx  # Animated loading state
│   └── ErrorMessage.jsx    # Glassmorphism error display
├── hooks/
│   └── useWeather.js       # Fetch logic & state management
├── pages/
│   └── Home.jsx            # Main page with dynamic background
└── services/
    └── weatherApi.js       # OpenWeatherMap API call
```

---

## 🌐 API Used

[OpenWeatherMap Current Weather API](https://openweathermap.org/current)

```
GET https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={API_KEY}
```

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| React 19 | UI framework |
| Vite | Build tool & dev server |
| Tailwind CSS v4 | Styling & glassmorphism |
| Inter (Google Fonts) | Typography |
| OpenWeatherMap API | Real-time weather data |

---

## 📦 Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

---

## 📄 License

MIT
