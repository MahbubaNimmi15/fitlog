"use client";

import { useState } from "react";
import Link from "next/link";
import { Dumbbell, Clock, Flame, Star } from "lucide-react";

import { usePlan } from "@/context/PlanContext";
import PlanCard from "@/components/PlanCard";


export default function MyPlan() {


  const {
    plan,
    saved,
  } = usePlan();


  const [activeTab, setActiveTab] = useState<
    "plan" | "saved"
  >("plan");



  const totalMinutes = plan.reduce(
    (sum, item) =>
      sum + Number(item.duration || 0),
    0
  );


  const totalCalories = plan.reduce(
    (sum, item) =>
      sum + Number(item.caloriesBurned || item.calories || 0),
    0
  );



  const workouts =
    activeTab === "plan"
      ? plan
      : saved;




  return (

    <main className="min-h-screen bg-[#0b0d0c] px-4 py-16 text-white sm:px-6 lg:px-8">


      <div className="mx-auto max-w-7xl">


        <h1 className="text-5xl font-black uppercase">
          My Plan
        </h1>


        <p className="mt-3 text-gray-400">
          Cap of five lifts for today. Finish them, then load more.
        </p>





        {/* Metrics */}


        <div className="mt-10 grid gap-5 sm:grid-cols-3">


          <div className="rounded-xl border border-white/10 bg-[#151816] p-6">

            <Dumbbell
              className="text-[#ccff00]"
            />

            <p className="mt-3 text-gray-400">
              Exercises
            </p>

            <h2 className="mt-2 text-3xl font-black">
              {plan.length}
            </h2>

          </div>





          <div className="rounded-xl border border-white/10 bg-[#151816] p-6">

            <Clock
              className="text-[#ccff00]"
            />

            <p className="mt-3 text-gray-400">
              Minutes
            </p>

            <h2 className="mt-2 text-3xl font-black">
              {totalMinutes}
            </h2>

          </div>






          <div className="rounded-xl border border-white/10 bg-[#151816] p-6">

            <Flame
              className="text-[#ccff00]"
            />

            <p className="mt-3 text-gray-400">
              Calories
            </p>

            <h2 className="mt-2 text-3xl font-black">
              {totalCalories}
            </h2>

          </div>


        </div>






        {/* Tabs */}


        <div className="mt-12 flex gap-4 border-b border-white/10">


          <button

            onClick={() => setActiveTab("plan")}

            className={`px-5 py-3 text-sm font-black uppercase ${
              activeTab === "plan"
                ? "border-b-2 border-[#ccff00] text-[#ccff00]"
                : "text-gray-400"
            }`}

          >

            Today's Plan

          </button>





          <button

            onClick={() => setActiveTab("saved")}

            className={`px-5 py-3 text-sm font-black uppercase ${
              activeTab === "saved"
                ? "border-b-2 border-[#ccff00] text-[#ccff00]"
                : "text-gray-400"
            }`}

          >

            Saved

          </button>



        </div>







        {/* Empty State */}


        {workouts.length === 0 ? (


          <div className="mt-16 rounded-xl border border-white/10 bg-[#151816] p-10 text-center">


            <h2 className="text-3xl font-black uppercase">

              Nothing Here Yet

            </h2>


            <p className="mt-3 text-gray-400">

              Browse the library and add a lift to get today moving.

            </p>



            <Link

              href="/"

              className="mt-6 inline-block rounded-md bg-[#ccff00] px-6 py-3 text-sm font-black uppercase text-black"

            >

              Go To Workouts

            </Link>


          </div>


        ) : (



          <div className="mt-8 grid gap-5">


            {workouts.map((item)=>(

              <PlanCard

                key={item.id}

                workout={item}

                type={
                  activeTab === "plan"
                    ? "plan"
                    : "saved"
                }

              />

            ))}


          </div>



        )}




      </div>



    </main>

  );

}