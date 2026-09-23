"use client";

import { Check, Trash2 } from "lucide-react";
import { usePlan } from "@/context/PlanContext";

export default function MyPlan() {
  const {
    plan,
    saved,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
  } = usePlan();


  return (
    <main className="min-h-screen bg-[#0b0d0c] px-4 py-16 text-white sm:px-6 lg:px-8">

      <div className="mx-auto max-w-7xl">

        <h1 className="text-5xl font-black uppercase">
          My Plan
        </h1>

        <p className="mt-3 text-gray-400">
          Track your selected workouts and progress.
        </p>


        <section className="mt-12">

          <h2 className="text-2xl font-black uppercase">
            Today&apos;s Workout
          </h2>


          {plan.length === 0 ? (

            <p className="mt-5 text-gray-500">
              No workouts added yet.
            </p>

          ) : (

            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

              {plan.map((item)=>(
                <div
                  key={item.id}
                  className="rounded-xl border border-white/10 bg-[#151816] p-5"
                >

                  <h3 className="text-xl font-black">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-sm text-gray-400">
                    {item.muscle}
                  </p>


                  <div className="mt-5 flex gap-3">

                    <button
                      onClick={() => markAsDone(item.id)}
                      className={`flex flex-1 items-center justify-center gap-2 rounded-md py-3 text-xs font-black uppercase ${
                        item.isDone
                        ? "bg-green-500 text-black"
                        : "bg-[#ccff00] text-black"
                      }`}
                    >

                      <Check size={15}/>

                      {item.isDone ? "Done" : "Complete"}

                    </button>


                    <button
                      onClick={() => removeFromPlan(item.id)}
                      className="rounded-md border border-red-500/30 px-4 text-red-400"
                    >
                      <Trash2 size={16}/>
                    </button>

                  </div>

                </div>
              ))}

            </div>

          )}

        </section>



        <section className="mt-16">

          <h2 className="text-2xl font-black uppercase">
            Saved Workouts
          </h2>


          {saved.length === 0 ? (

            <p className="mt-5 text-gray-500">
              No saved workouts.
            </p>

          ) : (

            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

              {saved.map((item)=>(

                <div
                  key={item.id}
                  className="rounded-xl border border-white/10 bg-[#151816] p-5"
                >

                  <h3 className="font-black">
                    {item.name}
                  </h3>


                  <button
                    onClick={() => removeFromSaved(item.id)}
                    className="mt-4 text-sm text-red-400"
                  >
                    Remove
                  </button>


                </div>

              ))}

            </div>

          )}

        </section>

      </div>

    </main>
  );
}