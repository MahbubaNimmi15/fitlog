"use client";

import Image from "next/image";
import { ArrowLeft, Dumbbell } from "lucide-react";
import Link from "next/link";


const workouts = [
  {
    id: "1",
    name: "Bicep Curl",
    muscle: "Biceps",
    equipment: "Dumbbell",
    level: "Beginner",
    duration: "15",
    calories: "120",
    image: "/banner.png",
    description:
      "A simple isolation exercise that builds bicep strength and arm size.",
  },

  {
    id: "2",
    name: "Bench Press",
    muscle: "Chest",
    equipment: "Barbell",
    level: "Intermediate",
    duration: "25",
    calories: "250",
    image: "/banner.png",
    description:
      "A compound chest exercise focused on upper body strength.",
  },

  {
    id: "3",
    name: "Squat",
    muscle: "Legs",
    equipment: "Barbell",
    level: "Advanced",
    duration: "30",
    calories: "300",
    image: "/banner.png",
    description:
      "A powerful lower body movement for legs and core strength.",
  },
];


export default async function WorkoutDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;


  const workout = workouts.find(
    (item) => item.id === id
  );


  if (!workout) {
    return (
      <main className="min-h-screen bg-[#0b0d0c] p-10 text-white">
        <h1 className="text-3xl font-black">
          Workout Not Found
        </h1>

        <Link
          href="/"
          className="mt-5 inline-block text-[#ccff00]"
        >
          Go Back
        </Link>
      </main>
    );
  }


  return (
    <main className="min-h-screen bg-[#0b0d0c] px-4 py-16 text-white sm:px-6 lg:px-8">

      <div className="mx-auto max-w-6xl">


        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#ccff00]"
        >
          <ArrowLeft size={16}/>
          Back
        </Link>



        <div className="mt-8 grid gap-10 lg:grid-cols-2">


          <div className="relative h-[450px] overflow-hidden rounded-2xl border border-white/10 bg-[#151816]">

            <Image
              src={workout.image}
              alt={workout.name}
              fill
              className="object-cover"
            />

          </div>



          <div>

            <p className="text-sm font-bold uppercase tracking-widest text-[#ccff00]">
              {workout.level}
            </p>


            <h1 className="mt-3 text-5xl font-black uppercase">
              {workout.name}
            </h1>


            <p className="mt-5 text-gray-400">
              {workout.description}
            </p>



            <div className="mt-8 grid grid-cols-2 gap-4">


              <div className="rounded-xl bg-[#151816] p-5">
                <p className="text-sm text-gray-400">
                  Muscle
                </p>
                <p className="mt-2 font-black">
                  {workout.muscle}
                </p>
              </div>


              <div className="rounded-xl bg-[#151816] p-5">
                <p className="text-sm text-gray-400">
                  Equipment
                </p>
                <p className="mt-2 font-black">
                  {workout.equipment}
                </p>
              </div>


              <div className="rounded-xl bg-[#151816] p-5">
                <p className="text-sm text-gray-400">
                  Duration
                </p>
                <p className="mt-2 font-black">
                  {workout.duration} min
                </p>
              </div>


              <div className="rounded-xl bg-[#151816] p-5">
                <p className="text-sm text-gray-400">
                  Calories
                </p>
                <p className="mt-2 font-black">
                  {workout.calories} kcal
                </p>
              </div>


            </div>



            <button
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-md bg-[#ccff00] py-4 font-black uppercase text-black"
            >
              <Dumbbell size={18}/>
              Start Workout
            </button>


          </div>


        </div>

      </div>

    </main>
  );
}