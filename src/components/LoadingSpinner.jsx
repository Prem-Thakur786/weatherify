const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center py-12 gap-4 animate-fade-in">
    <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin" />
    <p className="text-white/60 text-sm font-medium animate-pulse">Fetching weather...</p>
  </div>
);

export default LoadingSpinner;
