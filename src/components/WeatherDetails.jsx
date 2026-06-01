const Stat = ({ icon, label, value }) => (
  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex flex-col items-center gap-1 hover:bg-white/20 transition-all duration-300">
    <span className="text-2xl">{icon}</span>
    <p className="text-white/50 text-xs font-semibold uppercase tracking-wider">{label}</p>
    <p className="text-white font-bold text-lg">{value}</p>
  </div>
);

const WeatherDetails = ({ humidity, wind, feelsLike, pressure }) => (
  <div className="animate-fade-in-up grid grid-cols-2 gap-3 mt-4">
    <Stat icon="💧" label="Humidity"   value={`${humidity}%`} />
    <Stat icon="💨" label="Wind"       value={`${wind} m/s`} />
    <Stat icon="🌡️" label="Feels Like" value={`${Math.round(feelsLike)}°C`} />
    <Stat icon="🔵" label="Pressure"   value={`${pressure} hPa`} />
  </div>
);

export default WeatherDetails;
