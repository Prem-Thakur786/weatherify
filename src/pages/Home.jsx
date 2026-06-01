import { useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import WeatherDetails from "../components/WeatherDetails";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import useWeather from "../hooks/useWeather";

const getBg = (condition) => {
  if (!condition) return "from-slate-700 via-slate-800 to-slate-900";
  const c = condition.toLowerCase();
  if (c.includes("clear"))       return "from-amber-400 via-orange-500 to-pink-600";
  if (c.includes("cloud"))       return "from-slate-400 via-slate-600 to-slate-800";
  if (c.includes("rain") || c.includes("drizzle")) return "from-blue-600 via-blue-800 to-indigo-900";
  if (c.includes("thunder"))     return "from-gray-700 via-purple-900 to-gray-900";
  if (c.includes("snow"))        return "from-blue-100 via-blue-300 to-indigo-400";
  if (c.includes("mist") || c.includes("fog") || c.includes("haze")) return "from-gray-400 via-gray-600 to-gray-800";
  return "from-blue-500 via-indigo-600 to-purple-700";
};

const Home = () => {
  const [city, setCity] = useState("");
  const { weather, loading, error, fetchWeather } = useWeather();

  const handleSearch = () => { if (city.trim()) fetchWeather(city); };

  const condition = weather?.weather?.[0]?.main ?? null;
  const bg = getBg(condition);

  return (
    <div className={`min-h-screen bg-gradient-to-br ${bg} transition-all duration-1000`}>
      {/* Decorative blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-md mx-auto px-4 pb-12">
        <Header />
        <SearchBar city={city} setCity={setCity} handleSearch={handleSearch} />

        {loading && <LoadingSpinner />}
        {error   && <ErrorMessage message={error} />}

        {weather && !loading && (
          <>
            <WeatherCard weather={weather} />
            <WeatherDetails
              humidity={weather.main.humidity}
              wind={weather.wind.speed}
              feelsLike={weather.main.feels_like}
              pressure={weather.main.pressure}
            />
            <p className="text-center text-white/30 text-xs mt-6 font-medium">
              Last updated · {new Date().toLocaleTimeString()}
            </p>
          </>
        )}

        {!weather && !loading && !error && (
          <div className="animate-fade-in text-center mt-16">
            <p className="text-6xl mb-4">🌍</p>
            <p className="text-white/50 text-sm font-medium">Search a city to see the weather</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
