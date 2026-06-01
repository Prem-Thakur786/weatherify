const WeatherCard = ({ weather }) => {
  const { name, sys, main, weather: conditions } = weather;
  const icon = conditions[0].icon;
  const description = conditions[0].description;
  const temp = Math.round(main.temp);
  const high = Math.round(main.temp_max);
  const low = Math.round(main.temp_min);

  return (
    <div className="animate-fade-in-up mt-6 bg-white/15 backdrop-blur-xl border border-white/25 rounded-3xl p-6 text-white shadow-2xl shadow-black/20">
      {/* City & Country */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-white/60 text-sm font-medium">{sys.country}</p>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
          className="w-20 h-20 drop-shadow-lg animate-float"
        />
      </div>

      {/* Temperature */}
      <div className="flex items-end gap-3 mt-2">
        <span className="text-8xl font-extrabold leading-none tracking-tighter">
          {temp}°
        </span>
        <div className="mb-3">
          <p className="text-white/50 text-xs font-semibold uppercase tracking-widest">Celsius</p>
          <p className="capitalize text-white/80 text-sm font-medium mt-1">{description}</p>
        </div>
      </div>

      {/* High / Low */}
      <div className="flex gap-4 mt-3 pt-3 border-t border-white/15">
        <span className="text-sm text-white/70">↑ {high}°C</span>
        <span className="text-sm text-white/70">↓ {low}°C</span>
      </div>
    </div>
  );
};

export default WeatherCard;
