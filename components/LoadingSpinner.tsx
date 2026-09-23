export default function LoadingSpinner() {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center gap-4">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/20 border-t-[#ccff00]" />

      <p className="text-sm font-bold uppercase tracking-wider text-gray-400">
        Loading workouts...
      </p>
    </div>
  );
}