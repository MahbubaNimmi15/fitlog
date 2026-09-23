"use client";

import Link from "next/link";
import { Dumbbell, Clock, Flame } from "lucide-react";
import { useState } from "react";

import PlanCard from "@/components/PlanCard";
import LoadingSpinner from "@/components/LoadingSpinner";
import { usePlan } from "@/context/PlanContext";

export default function MyPlanPage() {
  const [activeTab, setActiveTab] = useState<"plan" | "saved">(
    "plan"
  );

  const { plan, saved, isLoaded } = usePlan();

  const totalExercises = plan.length;

  const totalMinutes = plan.reduce(
    (total, workout) =>
      total + Number(workout.duration || 0),
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) =>
      total + Number(workout.caloriesBurned || 0),
    0
  );

  const currentList =
    activeTab === "plan" ? plan : saved;

  if (!isLoaded) {
    return (
      <main className="min-h-screen bg-[#0b0d0c]">
        <LoadingSpinner />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0b0d0c] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#ccff00]">
            Workout Log
          </p>

          <h1 className="mt-3 text-4xl font-black uppercase text-white sm:text-5xl">
            My Plan
          </h1>

          <p className="mt-3 text-gray-400">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <StatCard
            label="Exercises"
            value={totalExercises}
            icon={<Dumbbell size={20} />}
          />

          <StatCard
            label="Minutes"
            value={totalMinutes}
            icon={<Clock size={20} />}
          />

          <StatCard
            label="Calories"
            value={totalCalories}
            icon={<Flame size={20} />}
          />
        </div>

        <div className="mt-10 flex border-b border-white/10">
          <button
            onClick={() => setActiveTab("plan")}
            className={`border-b-2 px-5 py-4 text-sm font-black uppercase tracking-wide transition ${
              activeTab === "plan"
                ? "border-[#ccff00] text-[#ccff00]"
                : "border-transparent text-gray-500 hover:text-white"
            }`}
          >
            Today&apos;s Plan ({plan.length})
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`border-b-2 px-5 py-4 text-sm font-black uppercase tracking-wide transition ${
              activeTab === "saved"
                ? "border-[#ccff00] text-[#ccff00]"
                : "border-transparent text-gray-500 hover:text-white"
            }`}
          >
            Saved ({saved.length})
          </button>
        </div>

        {currentList.length === 0 ? (
          <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ccff00]/10 text-[#ccff00]">
              <Dumbbell size={30} />
            </div>

            <h2 className="mt-6 text-3xl font-black uppercase text-white">
              Nothing Here Yet
            </h2>

            <p className="mt-3 max-w-md text-gray-400">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/#library"
              className="mt-7 rounded-md bg-[#ccff00] px-6 py-3 text-sm font-black uppercase text-black"
            >
              Go to Workouts
            </Link>
          </div>
        ) : (
          <div className="mt-8 space-y-4">
            {currentList.map((workout) => (
              <PlanCard
                key={workout.id}
                workout={workout}
                type={activeTab}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

function StatCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: number;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#151816] p-5">
      <div className="flex items-center justify-between">
        <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
          {label}
        </p>

        <span className="text-[#ccff00]">
          {icon}
        </span>
      </div>

      <p className="mt-3 text-4xl font-black text-white">
        {value}
      </p>
    </div>
  );
}