import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-[#0b0d0c]">
      <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-[#ccff00]">
            Workout Library
          </p>

          <h1 className="max-w-3xl text-5xl font-black uppercase leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            Train With Intent.
            <br />
            Log Every Set.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <a
            href="#library"
            className="mt-8 inline-flex items-center gap-3 rounded-md bg-[#ccff00] px-6 py-4 text-sm font-black uppercase tracking-wide text-black transition hover:scale-105"
          >
            Browse Workouts
            <ArrowDown size={18} />
          </a>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute h-[330px] w-[330px] rounded-full bg-[#ccff00]/10 blur-3xl sm:h-[430px] sm:w-[430px]" />

          <div className="relative flex min-h-[400px] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#111412] sm:min-h-[500px]">
            <p className="text-center text-sm uppercase tracking-[0.25em] text-gray-600">
              Hero Image
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}