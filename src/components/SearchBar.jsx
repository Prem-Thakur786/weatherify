const SearchBar = ({ city, setCity, handleSearch }) => {
  const onKey = (e) => e.key === "Enter" && handleSearch();

  return (
    <div className="flex gap-2 w-full px-1">
      <div className="relative flex-1">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 text-lg">🔍</span>
        <input
          type="text"
          placeholder="Search city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={onKey}
          className="w-full bg-white/15 backdrop-blur-md border border-white/25 text-white placeholder-white/50 rounded-2xl pl-11 pr-4 py-4 text-sm font-medium outline-none focus:border-white/60 focus:bg-white/20 transition-all duration-300"
        />
      </div>
      <button
        onClick={handleSearch}
        className="bg-white text-blue-600 font-bold px-6 rounded-2xl text-sm hover:bg-blue-50 active:scale-95 transition-all duration-200 shadow-lg shadow-black/20 whitespace-nowrap"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
