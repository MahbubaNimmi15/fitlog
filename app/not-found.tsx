import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0b0d0c] px-4 text-center text-white">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#ccff00]">
        Error 404
      </p>

      <h1 className="text-5xl font-black uppercase sm:text-7xl">
        Page Not Found
      </h1>

      <p className="mt-5 max-w-md text-gray-400">
        The page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-md bg-[#ccff00] px-6 py-3 font-bold uppercase text-black"
      >
        Back to Workouts
      </Link>
    </main>
  );
}