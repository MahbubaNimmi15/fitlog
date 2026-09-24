import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import WorkoutActions from "@/components/WorkoutActions";


type Workout = {
  id: string;
  name: string;

  image?: string;
  description?: string;

  equipment?: string | string[];
  category?: string[];

  difficulty?: string;
  level?: string;

  sets?: number;
  reps?: string;

  duration?: number;
  calories?: number;
  caloriesBurned?: number;

  rating?: number;
};



async function getWorkout(id: string): Promise<Workout | null> {

  try {

    const res = await fetch(
      `https://api.abcz.workers.dev/api/fitlog/${id}`,
      {
        cache: "no-store",
      }
    );


    if(!res.ok){
      return null;
    }


    return await res.json();


  } catch(error){

    console.log(error);

    return null;

  }

}




export default async function WorkoutDetails({

  params,

}:{

  params: Promise<{id:string}>;

}) {


  const {id} = await params;


  const workout = await getWorkout(id);



  if(!workout){

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



  const equipment = Array.isArray(workout.equipment)

    ? workout.equipment.join(", ")

    : workout.equipment || "Not specified";



  const calories =
    workout.calories ||
    workout.caloriesBurned ||
    0;




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



{/* IMAGE */}

<div className="relative h-[450px] overflow-hidden rounded-2xl border border-white/10 bg-[#151816]">


<Image

src={workout.image || "/banner.png"}

alt={workout.name}

fill

className="object-cover"

/>


</div>





{/* DETAILS */}


<div>


<div className="flex flex-wrap gap-2">

{workout.category?.map((item)=>(

<span
key={item}
className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-black text-black"
>

{item}

</span>

))}


</div>



<p className="mt-5 text-sm font-bold uppercase tracking-widest text-[#ccff00]">

{workout.level || workout.difficulty}

</p>



<h1 className="mt-3 text-5xl font-black uppercase">

{workout.name}

</h1>



<p className="mt-5 text-gray-400">

{workout.description}

</p>





<div className="mt-8 overflow-hidden rounded-xl border border-white/10 bg-[#151816]">


<div className="grid grid-cols-2 border-b border-white/10 p-5">

<span className="text-gray-400 uppercase">
Equipment
</span>

<span className="font-black">
{equipment}
</span>

</div>



<div className="grid grid-cols-2 border-b border-white/10 p-5">

<span className="text-gray-400 uppercase">
Difficulty
</span>

<span className="font-black">
{workout.level || workout.difficulty}
</span>

</div>



<div className="grid grid-cols-2 border-b border-white/10 p-5">

<span className="text-gray-400 uppercase">
Sets
</span>

<span className="font-black">
{workout.sets}
</span>

</div>



<div className="grid grid-cols-2 border-b border-white/10 p-5">

<span className="text-gray-400 uppercase">
Reps
</span>

<span className="font-black">
{workout.reps}
</span>

</div>



<div className="grid grid-cols-2 border-b border-white/10 p-5">

<span className="text-gray-400 uppercase">
Duration
</span>

<span className="font-black">
{workout.duration} min
</span>

</div>



<div className="grid grid-cols-2 border-b border-white/10 p-5">

<span className="text-gray-400 uppercase">
Calories
</span>

<span className="font-black">
{calories} kcal
</span>

</div>



<div className="grid grid-cols-2 p-5">

<span className="text-gray-400 uppercase">
Rating
</span>

<span className="font-black">
{workout.rating}
</span>

</div>


</div>
{/* INSTRUCTIONS */}

<div className="mt-8">


<h2 className="mb-5 text-2xl font-black uppercase">
  Instructions
</h2>



<div className="space-y-4">



<div className="flex gap-4 rounded-xl border border-white/10 bg-[#151816] p-5">


<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ccff00] font-black text-black">

1

</div>


<p className="text-gray-300">

Set up your position correctly and maintain proper posture before starting the exercise.

</p>


</div>





<div className="flex gap-4 rounded-xl border border-white/10 bg-[#151816] p-5">


<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ccff00] font-black text-black">

2

</div>


<p className="text-gray-300">

Perform the movement with controlled technique and focus on proper form.

</p>


</div>






<div className="flex gap-4 rounded-xl border border-white/10 bg-[#151816] p-5">


<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ccff00] font-black text-black">

3

</div>


<p className="text-gray-300">

Keep correct breathing and complete each repetition safely.

</p>


</div>






<div className="flex gap-4 rounded-xl border border-white/10 bg-[#151816] p-5">


<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ccff00] font-black text-black">

4

</div>


<p className="text-gray-300">

Return slowly to the starting position and finish the set properly.

</p>


</div>




</div>


</div>






{/* ACTION BUTTONS */}

<WorkoutActions workout={workout} />



</div>


</div>


</div>


</main>


);

}