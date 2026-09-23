"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import WorkoutCard from "@/components/WorkoutCard";
import LoadingSpinner from "@/components/LoadingSpinner";
import type { Workout } from "@/context/PlanContext";

type SortOption = "duration" | "calories" | "rating";

export default function Library() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("duration");

  useEffect(() => {
    async function getWorkouts() {
      try {
        setLoading(true);

        const response = await fetch(
          "https://api.abcz.workers.dev/api/fitlog"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch workouts");
        }

        const data: Workout[] = await response.json();

        setWorkouts(data);
      } catch (error) {
        console.error(error);
        setError("Unable to load workouts.");
      } finally {
        setLoading(false);
      }
    }

    getWorkouts();
  }, []);

  const sortedWorkouts = useMemo(() => {
    return [...workouts].sort((a, b) => {
      if (sortBy === "duration") {
        return Number(a.duration) - Number(b.duration);
      }

      if (sortBy === "calories") {
        return Number(b.caloriesBurned) - Number(a.caloriesBurned);
      }

      if (sortBy === "rating") {
        return Number(b.rating) - Number(a.rating);
      }

      return 0;
    });
  }, [workouts, sortBy]);

  return (
    <section
      id="library"
      className="bg-[#0f1110] px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
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

          <div className="relative w-full md:w-52">
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-400">
              Sort By
            </label>

            <select
              value={sortBy}
              onChange={(event) =>
                setSortBy(event.target.value as SortOption)
              }
              className="w-full appearance-none rounded-lg border border-white/15 bg-[#171a18] px-4 py-3 pr-10 text-sm font-bold uppercase text-white outline-none transition focus:border-[#ccff00]"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>

            <ChevronDown
              size={18}
              className="pointer-events-none absolute bottom-[14px] right-3 text-[#ccff00]"
            />
          </div>
        </div>

        {loading && <LoadingSpinner />}

        {!loading && error && (
          <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-6 text-center text-red-300">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sortedWorkouts.map((workout) => (
              <WorkoutCard key={workout.id} workout={workout} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}