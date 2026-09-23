"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Bookmark,
  Clock,
  Dumbbell,
  Flame,
  Plus,
  Star,
} from "lucide-react";
import toast from "react-hot-toast";

import { usePlan, type Workout } from "@/context/PlanContext";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function WorkoutDetailsPage() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const [workout, setWorkout] = useState<Workout | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { plan, saved, addToPlan, saveWorkout } = usePlan();

  useEffect(() => {
    if (!id) return;

    async function getWorkout() {
      try {
        setLoading(true);

        const response = await fetch(
          `https://api.abcz.workers.dev/api/fitlog/${id}`
        );

        if (!response.ok) {
          throw new Error("Workout not found");
        }

        const data = await response.json();

        setWorkout(data.data ?? data);
      } catch (error) {
        console.error(error);
        setError("Unable to load this workout.");
      } finally {
        setLoading(false);
      }
    }

    getWorkout();
  }, [id]);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#0b0d0c]">
        <LoadingSpinner />
      </main>
    );
  }

  if (error || !workout) {
    return (
      <main className="flex min-h-[70vh] flex-col items-center justify-center bg-[#0b0d0c] px-4 text-center">
        <h1 className="text-3xl font-black uppercase text-white">
          Workout Not Found
        </h1>

        <p className="mt-3 text-gray-400">
          {error || "This workout could not be found."}
        </p>

        <Link
          href="/"
          className="mt-6 rounded-md bg-[#ccff00] px-6 py-3 font-bold uppercase text-black"
        >
          Back to Workouts
        </Link>
      </main>
    );
  }

  const alreadyInPlan = plan.some(
    (item) => String(item.id) === String(workout.id)
  );

  const alreadySaved = saved.some(
    (item) => String(item.id) === String(workout.id)
  );

  const planIsFull = plan.length >= 5;

  const equipment =
    typeof workout.equipment === "string"
      ? workout.equipment
      : workout.equipment?.join(", ") || "Not specified";

  function handleAddToPlan() {
    if (alreadyInPlan) {
      toast.error("Already in today's plan");
      return;
    }

    if (planIsFull) {
      toast.error("Today's plan can contain maximum 5 workouts");
      return;
    }

    const added = addToPlan(workout);

    if (added) {
      toast.success("Added to today's plan");
    }
  }

  function handleSaveWorkout() {
    if (alreadySaved) {
      toast.error("Workout already saved");
      return;
    }

    const savedSuccessfully = saveWorkout(workout);

    if (savedSuccessfully) {
      toast.success("Saved for later");
    }
  }

  return (
    <main className="min-h-screen bg-[#0b0d0c] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/#library"
          className="mb-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-400 transition hover:text-[#ccff00]"
        >
          <ArrowLeft size={17} />
          Back to Library
        </Link>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative min-h-[420px] overflow-hidden rounded-2xl border border-white/10 sm:min-h-[600px]">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <div className="flex flex-wrap gap-2">
              {workout.muscleGroups?.map((group) => (
                <span
                  key={group}
                  className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-black uppercase text-black"
                >
                  {group}
                </span>
              ))}
            </div>

            <h1 className="mt-5 text-4xl font-black uppercase leading-tight text-white sm:text-5xl">
              {workout.name}
            </h1>

            <p className="mt-5 text-base leading-7 text-gray-400">
              {workout.description}
            </p>

            <div className="mt-8 overflow-hidden rounded-xl border border-white/10 bg-[#131614]">
              <h2 className="border-b border-white/10 px-5 py-4 text-sm font-black uppercase tracking-wider text-[#ccff00]">
                Key Specs
              </h2>

              <div className="divide-y divide-white/10">
                <SpecRow label="Equipment" value={equipment} />
                <SpecRow
                  label="Difficulty"
                  value={workout.difficulty || "Not specified"}
                />
                <SpecRow
                  label="Sets"
                  value={String(workout.sets ?? "Not specified")}
                />
                <SpecRow
                  label="Reps"
                  value={workout.reps || "Not specified"}
                />
                <SpecRow
                  label="Duration"
                  value={`${workout.duration} min`}
                  icon={<Clock size={16} />}
                />
                <SpecRow
                  label="Calories"
                  value={`${workout.caloriesBurned} kcal`}
                  icon={<Flame size={16} />}
                />
                <SpecRow
                  label="Rating"
                  value={String(workout.rating)}
                  icon={<Star size={16} />}
                />
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-black uppercase text-white">
                Instructions
              </h2>

              <ol className="mt-5 space-y-4">
                {workout.instructions?.map((instruction, index) => (
                  <li
                    key={index}
                    className="flex gap-4 rounded-xl border border-white/10 bg-[#131614] p-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ccff00] text-sm font-black text-black">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="pt-1 text-sm leading-6 text-gray-300">
                      {instruction}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <button
                onClick={handleAddToPlan}
                disabled={alreadyInPlan || planIsFull}
                className="flex items-center justify-center gap-2 rounded-md bg-[#ccff00] px-5 py-4 text-sm font-black uppercase text-black transition hover:brightness-90 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {alreadyInPlan ? (
                  <>
                    <Dumbbell size={18} />
                    Added to Plan
                  </>
                ) : (
                  <>
                    <Plus size={18} />
                    Add to Today&apos;s Plan
                  </>
                )}
              </button>

              <button
                onClick={handleSaveWorkout}
                disabled={alreadySaved}
                className="flex items-center justify-center gap-2 rounded-md border border-white/20 bg-transparent px-5 py-4 text-sm font-black uppercase text-white transition hover:border-[#ccff00] hover:text-[#ccff00] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Bookmark size={18} />
                {alreadySaved ? "Saved" : "Save for Later"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function SpecRow({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-4 px-5 py-4">
      <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
        {label}
      </span>

      <span className="flex items-center gap-2 text-right text-sm font-bold text-white">
        {icon && <span className="text-[#ccff00]">{icon}</span>}
        {value}
      </span>
    </div>
  );
}