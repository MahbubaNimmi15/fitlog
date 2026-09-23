"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, Flame, Star } from "lucide-react";
import LoadingSpinner from "./LoadingSpinner";


type Workout = {
  id: string;
  name: string;

  image?: string;

  category?: string[];
  equipment?: string | string[];

  duration?: number;
  calories?: number;
  rating?: number;
};



export default function Library() {


  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);


  const [sort, setSort] = useState("duration");




  useEffect(()=>{


    async function fetchWorkouts(){

      try{

        const res = await fetch(
          "https://api.abcz.workers.dev/api/fitlog"
        );


        const data = await res.json();


        setWorkouts(data);


      }catch(error){

        console.log(error);

      }
      finally{

        setLoading(false);

      }

    }


    fetchWorkouts();


  },[]);







  const sortedWorkouts = [...workouts].sort((a,b)=>{


    if(sort === "calories"){

      return (
        (b.calories || 0) -
        (a.calories || 0)
      );

    }


    if(sort === "rating"){

      return (
        (b.rating || 0) -
        (a.rating || 0)
      );

    }


    return (
      (a.duration || 0) -
      (b.duration || 0)
    );


  });







  if(loading){

    return (

      <section
        id="library"
        className="bg-[#0b0d0c] py-20"
      >

        <LoadingSpinner />

      </section>

    );

  }







  return (

    <section
      id="library"
      className="bg-[#0b0d0c] px-4 py-20 sm:px-6 lg:px-8"
    >


      <div className="mx-auto max-w-7xl">





        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">


          <div>


            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#ccff00]">

              Workout Library

            </p>


            <h2 className="mt-3 text-5xl font-black uppercase text-white">

              The Library

            </h2>


            <p className="mt-3 text-gray-400">

              Twelve lifts covering every major muscle group.

            </p>


          </div>







          <select

            value={sort}

            onChange={(e)=>setSort(e.target.value)}

            className="rounded-md border border-white/20 bg-[#151816] px-5 py-3 text-sm font-bold text-white"

          >

            <option value="duration">
              Sort By Duration
            </option>


            <option value="calories">
              Sort By Calories
            </option>


            <option value="rating">
              Sort By Rating
            </option>


          </select>




        </div>









        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">





          {sortedWorkouts.map((workout)=>(


            <Link

              key={workout.id}

              href={`/workout/${workout.id}`}

              className="group overflow-hidden rounded-xl border border-white/10 bg-[#151816] transition hover:-translate-y-2"

            >





              <div className="relative h-60 overflow-hidden">


                <Image

                  src={
                    workout.image ||
                    "/banner.png"
                  }

                  alt={workout.name}

                  fill

                  className="object-cover transition duration-300 group-hover:scale-110"

                />


              </div>








              <div className="p-5">





                <div className="flex flex-wrap gap-2">


                  {workout.category?.map((item)=>(


                    <span

                      key={item}

                      className="rounded-full bg-[#ccff00] px-2 py-1 text-[10px] font-black text-black"

                    >

                      {item}

                    </span>


                  ))}



                </div>








                <h3 className="mt-4 text-lg font-black uppercase text-white">

                  {workout.name}

                </h3>







                <p className="mt-2 text-sm text-gray-400">

                  {Array.isArray(workout.equipment)

                    ? workout.equipment.join(", ")

                    : workout.equipment}

                </p>









                <div className="mt-5 flex justify-between text-xs text-gray-300">



                  <span className="flex items-center gap-1">

                    <Clock size={14}
                    className="text-[#ccff00]"
                    />

                    {workout.duration} min

                  </span>





                  <span className="flex items-center gap-1">

                    <Flame size={14}
                    className="text-[#ccff00]"
                    />

                    {workout.calories} kcal

                  </span>





                  <span className="flex items-center gap-1">

                    <Star size={14}
                    className="text-[#ccff00]"
                    />

                    {workout.rating}

                  </span>



                </div>



              </div>





            </Link>


          ))}





        </div>




      </div>



    </section>

  );

}