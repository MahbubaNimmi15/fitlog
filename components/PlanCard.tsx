"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Clock, Flame, Star, X } from "lucide-react";
import toast from "react-hot-toast";

import { usePlan, type Workout } from "@/context/PlanContext";


type PlanCardProps = {
  workout: Workout;
  type: "plan" | "saved";
};


export default function PlanCard({
  workout,
  type,
}: PlanCardProps) {


  const {
    removeFromPlan,
    removeFromSaved,
    markAsDone,
  } = usePlan();



  const equipment =
    Array.isArray(workout.equipment)
      ? workout.equipment.join(", ")
      : workout.equipment || "Not specified";



  function handleRemove(){

    if(type === "plan"){

      removeFromPlan(workout.id);

      toast.success(
        "Workout removed from today's plan"
      );

    } else {

      removeFromSaved(workout.id);

      toast.success(
        "Workout removed from saved"
      );

    }

  }




  function handleDone(){

    markAsDone(workout.id);


    toast.success(
      workout.isDone
        ? "Workout marked as not done"
        : "Workout marked as done"
    );

  }




  return (

    <article
      className={`overflow-hidden rounded-xl border bg-[#151816] ${
        workout.isDone
          ? "border-[#ccff00]/50"
          : "border-white/10"
      }`}
    >


      <div className="flex flex-col md:flex-row">


        <div className="relative h-52 w-full md:h-auto md:w-56">

          <Image
            src={workout.image || "/banner.png"}
            alt={workout.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 224px"
          />

        </div>




        <div className="flex flex-1 flex-col justify-between p-5">


          <div>


            <div className="flex items-start justify-between gap-4">


              <div>

                <h3 className="text-xl font-black uppercase text-white">
                  {workout.name}
                </h3>


                <p className="mt-2 text-sm text-gray-400">
                  {equipment}
                </p>


              </div>



              <button

                onClick={handleRemove}

                className="rounded-md border border-white/10 p-2 text-gray-400 transition hover:border-red-500/50 hover:text-red-400"

                aria-label="Remove workout"

              >

                <X size={18}/>

              </button>


            </div>





            <div className="mt-5 flex flex-wrap gap-5 text-xs text-gray-300">


              <span className="flex items-center gap-2">

                <Clock
                  size={15}
                  className="text-[#ccff00]"
                />

                {workout.duration || "0"} min

              </span>




              <span className="flex items-center gap-2">

                <Flame
                  size={15}
                  className="text-[#ccff00]"
                />

                {workout.caloriesBurned || 0} kcal

              </span>




              <span className="flex items-center gap-2">

                <Star
                  size={15}
                  className="text-[#ccff00]"
                />

                {workout.rating || "N/A"}

              </span>


            </div>


          </div>





          <div className="mt-6 flex flex-wrap gap-3">


            <Link

              href={`/workout/${workout.id}`}

              className="rounded-md border border-white/20 px-4 py-2 text-xs font-black uppercase text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"

            >

              View Details

            </Link>





            {type === "plan" && (

              <button

                onClick={handleDone}

                className={`flex items-center gap-2 rounded-md px-4 py-2 text-xs font-black uppercase transition ${
                  workout.isDone
                    ? "bg-[#ccff00] text-black"
                    : "border border-white/20 text-white hover:border-[#ccff00]"
                }`}

              >

                <Check size={16}/>

                {workout.isDone
                  ? "Done"
                  : "Mark as Done"}

              </button>

            )}


          </div>


        </div>


      </div>


    </article>

  );

}