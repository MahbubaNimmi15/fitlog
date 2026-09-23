"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";


export type Workout = {
  id: string;
  name: string;

  muscle?: string;
  level?: string;

  equipment?: string;
  image?: string;

  duration?: string;
  caloriesBurned?: number;

  calories?: string;
  rating?: number;

  category?: string[];

  isDone?: boolean;
};


type PlanContextType = {
  plan: Workout[];
  saved: Workout[];

  planCount: number;
  savedCount: number;

  addPlan: (workout: Workout) => void;
  saveWorkout: (workout: Workout) => void;

  removeFromPlan: (id: string) => void;
  removeFromSaved: (id: string) => void;

  markAsDone: (id: string) => void;
};


const PlanContext = createContext<PlanContextType | null>(null);



export function PlanProvider({
  children,
}: {
  children: React.ReactNode;
}) {


  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);



  useEffect(() => {

    const savedPlan =
      localStorage.getItem("fitlog-plan");

    const savedWorkout =
      localStorage.getItem("fitlog-saved");


    if(savedPlan){
      setPlan(JSON.parse(savedPlan));
    }


    if(savedWorkout){
      setSaved(JSON.parse(savedWorkout));
    }


  }, []);




  useEffect(() => {

    localStorage.setItem(
      "fitlog-plan",
      JSON.stringify(plan)
    );

  }, [plan]);




  useEffect(() => {

    localStorage.setItem(
      "fitlog-saved",
      JSON.stringify(saved)
    );

  }, [saved]);





  function addPlan(workout: Workout){

    if(plan.length >= 5){
      return;
    }


    const exists = plan.find(
      (item)=> item.id === workout.id
    );


    if(!exists){

      setPlan([
        ...plan,
        workout
      ]);

    }

  }





  function saveWorkout(workout: Workout){

    const exists = saved.find(
      (item)=> item.id === workout.id
    );


    if(!exists){

      setSaved([
        ...saved,
        workout
      ]);

    }

  }





  function removeFromPlan(id:string){

    setPlan(
      plan.filter(
        (item)=> item.id !== id
      )
    );

  }





  function removeFromSaved(id:string){

    setSaved(
      saved.filter(
        (item)=> item.id !== id
      )
    );

  }





  function markAsDone(id:string){

    setPlan(

      plan.map((item)=>

        item.id === id

        ? {
            ...item,
            isDone: !item.isDone
          }

        : item

      )

    );

  }





  return (

    <PlanContext.Provider

      value={{

        plan,
        saved,

        planCount: plan.length,
        savedCount: saved.length,

        addPlan,
        saveWorkout,

        removeFromPlan,
        removeFromSaved,

        markAsDone,

      }}

    >

      {children}

    </PlanContext.Provider>

  );

}






export function usePlan(){

  const context = useContext(PlanContext);


  if(!context){

    throw new Error(
      "usePlan must be inside PlanProvider"
    );

  }


  return context;

}