export const getWeather = async (city) => {
  const response = await fetch(
    `https://weather-backend-gamma.vercel.app/weather?city=${city}`
  );

  if (!response.ok) {
    throw new Error("City not found");
  }

  return response.json();
};