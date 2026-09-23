"use client";

import { useEffect, useState } from "react";
import WorkoutCard from "./WorkoutCard";
import LoadingSpinner from "./LoadingSpinner";

export default function Library() {
  const [workouts, setWorkouts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    async function fetchWorkouts() {
      try {

        const res = await fetch(
          "https://api.abcz.workers.dev/api/fitlog"
        );

        const data = await res.json();

        setWorkouts(data);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }
    }


    fetchWorkouts();

  }, []);



  if (loading) {
    return <LoadingSpinner />;
  }



  return (
    <section
      id="library"
      className="bg-[#0b0d0c] px-4 py-20 sm:px-6 lg:px-8"
    >

      <div className="mx-auto max-w-7xl">

        <h2 className="text-4xl font-black uppercase text-white">
          The Library
        </h2>

        <p className="mt-3 text-gray-400">
          Twelve lifts covering every major muscle group.
        </p>


        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {workouts.map((workout)=>(
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))}

        </div>


      </div>

    </section>
  );
}