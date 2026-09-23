"use client";

import Link from "next/link";
import { Bookmark, Dumbbell } from "lucide-react";
import toast from "react-hot-toast";
import { usePlan } from "@/context/PlanContext";

type WorkoutProps = {
  workout: {
    id: string;
    name: string;
    muscle: string;
    level: string;
  };
};

export default function WorkoutCard({ workout }: WorkoutProps) {
  const { addPlan, saveWorkout } = usePlan();

  const handlePlan = () => {
    addPlan(workout);
    toast.success("Added to plan");
  };

  const handleSave = () => {
    saveWorkout(workout);
    toast.success("Workout saved");
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-[#111412] p-5 transition hover:-translate-y-1">

      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#ccff00]/10">
        <Dumbbell className="text-[#ccff00]" />
      </div>

      <h3 className="text-xl font-black uppercase text-white">
        {workout.name}
      </h3>

      <p className="mt-2 text-sm text-gray-400">
        Muscle: {workout.muscle}
      </p>

      <p className="mt-1 text-sm text-gray-400">
        Level: {workout.level}
      </p>


      <div className="mt-6 flex gap-3">

        <button
          onClick={handlePlan}
          className="flex flex-1 items-center justify-center gap-2 rounded-md bg-[#ccff00] py-3 text-xs font-black uppercase text-black"
        >
          <Dumbbell size={15} />
          Plan
        </button>


        <button
          onClick={handleSave}
          className="flex items-center justify-center rounded-md border border-white/20 px-4 text-white"
        >
          <Bookmark size={16} />
        </button>

      </div>


      <Link
        href={`/workout/${workout.id}`}
        className="mt-4 block text-center text-xs font-bold uppercase text-gray-400 hover:text-[#ccff00]"
      >
        View Details
      </Link>

    </div>
  );
}