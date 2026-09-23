import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />

      <section
        id="library"
        className="min-h-screen bg-[#0f1110] px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#ccff00]">
            Exercises
          </p>

          <h2 className="mt-3 text-4xl font-black uppercase text-white sm:text-5xl">
            The Library
          </h2>

          <p className="mt-3 text-gray-400">
            Twelve lifts covering every major muscle group.
          </p>
        </div>
      </section>
    </main>
  );
}