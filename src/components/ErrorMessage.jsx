const ErrorMessage = ({ message }) => (
  <div className="animate-fade-in-up mt-6 bg-red-500/20 backdrop-blur-md border border-red-400/30 rounded-2xl p-4 flex items-center gap-3">
    <span className="text-2xl">⚠️</span>
    <p className="text-red-100 font-medium text-sm">{message}</p>
  </div>
);

export default ErrorMessage;
