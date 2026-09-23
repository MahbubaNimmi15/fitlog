"use client";

import { Bookmark, Dumbbell } from "lucide-react";
import toast from "react-hot-toast";
import { usePlan, type Workout } from "@/context/PlanContext";


export default function WorkoutActions({
  workout,
}: {
  workout: Workout;
}) {


  const {
    addPlan,
    saveWorkout,
    plan,
    saved,
  } = usePlan();




  function handleAddPlan() {

    const exists = plan.find(
      (item) => item.id === workout.id
    );


    if (exists) {

      toast.error(
        "Workout already in today's plan"
      );

      return;

    }


    if(plan.length >= 5){

      toast.error(
        "Maximum 5 workouts allowed"
      );

      return;

    }



    addPlan(workout);


    toast.success(
      "Added to today's plan"
    );

  }





  function handleSave(){


    const exists = saved.find(
      (item)=> item.id === workout.id
    );


    if(exists){

      toast.error(
        "Workout already saved"
      );

      return;

    }



    saveWorkout(workout);


    toast.success(
      "Saved for later"
    );


  }





  return (

    <div className="mt-8 flex flex-col gap-3">


      <button

        onClick={handleAddPlan}

        className="flex w-full items-center justify-center gap-2 rounded-md bg-[#ccff00] py-4 font-black uppercase text-black transition hover:scale-[1.02]"

      >

        <Dumbbell size={18}/>

        Add To Today&apos;s Plan


      </button>





      <button

        onClick={handleSave}

        className="flex w-full items-center justify-center gap-2 rounded-md border border-white/20 py-4 font-black uppercase text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"

      >

        <Bookmark size={18}/>

        Save For Later


      </button>



    </div>

  );

}