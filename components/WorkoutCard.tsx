"use client";

import Image from "next/image";
import Link from "next/link";
import { Bookmark, Clock, Flame, Star } from "lucide-react";
import toast from "react-hot-toast";
import { usePlan } from "@/context/PlanContext";

export default function WorkoutCard({
  workout,
}: {
  workout: any;
}) {

  const { addPlan, saveWorkout } = usePlan();


  function handlePlan() {
    addPlan(workout);
    toast.success("Added to today's plan");
  }


  function handleSave() {
    saveWorkout(workout);
    toast.success("Saved for later");
  }


  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#151816]">

      {/* Image */}
      <div className="relative h-64 w-full bg-[#111412]">

        {workout.image ? (
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-500">
            No Image
          </div>
        )}

      </div>


      <div className="p-5">


        {/* Category */}
        <div className="flex flex-wrap gap-2">

          {workout.category?.map((item:string)=>(
            <span
              key={item}
              className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-black text-black"
            >
              {item}
            </span>
          ))}

        </div>


        <h3 className="mt-4 text-xl font-black uppercase text-white">
          {workout.name}
        </h3>


        <p className="mt-2 text-sm text-gray-400">
          {workout.equipment}
        </p>


        <div className="mt-5 flex gap-4 text-xs text-gray-300">

          <span className="flex items-center gap-1">
            <Clock size={14}/>
            {workout.duration} min
          </span>


          <span className="flex items-center gap-1">
            <Flame size={14}/>
            {workout.calories} kcal
          </span>


          <span className="flex items-center gap-1">
            <Star size={14}/>
            {workout.rating}
          </span>

        </div>


        <div className="mt-5 flex gap-3">

          <button
            onClick={handlePlan}
            className="flex-1 rounded-md bg-[#ccff00] py-3 text-xs font-black uppercase text-black"
          >
            Add Plan
          </button>


          <button
            onClick={handleSave}
            className="rounded-md border border-white/20 px-4 text-white"
          >
            <Bookmark size={16}/>
          </button>

        </div>


        <Link
          href={`/workout/${workout.id}`}
          className="mt-4 block text-center text-xs font-bold uppercase text-gray-400 hover:text-[#ccff00]"
        >
          View Details
        </Link>


      </div>

    </div>
  );
}