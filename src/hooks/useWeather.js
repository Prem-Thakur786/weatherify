import { useState } from "react";
import { getWeather } from "../services/weatherApi";

const useWeather = () => {
  const [weather, setWeather] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const fetchWeather = async (
    city
  ) => {
    try {
      setLoading(true);
      setError("");

      const data =
        await getWeather(city);

      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    weather,
    loading,
    error,
    fetchWeather,
  };
};

export default useWeather;