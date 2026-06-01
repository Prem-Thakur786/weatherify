const API_KEY = import.meta.env.VITE_WEATHER_API_KEY || "4d8fb5b93d4af21d66a2948710284366";

export const getWeather = async (city) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`
  );
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message === "city not found" ? "City not found. Please try again." : "Something went wrong.");
  }
  return res.json();
};
