"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export type Workout = {
  id: number | string;
  name: string;
  image: string;
  muscleGroups?: string[];
  equipment?: string | string[];
  difficulty?: string;
  duration: number;
  caloriesBurned: number;
  sets?: number | string;
  reps?: string;
  rating: number;
  description?: string;
  instructions?: string[];
  isDone?: boolean;
};

type PlanContextType = {
  plan: Workout[];
  saved: Workout[];
  addToPlan: (workout: Workout) => boolean;
  saveWorkout: (workout: Workout) => boolean;
  removeFromPlan: (id: number | string) => void;
  removeFromSaved: (id: number | string) => void;
  markAsDone: (id: number | string) => void;
  planCount: number;
  savedCount: number;
  isLoaded: boolean;
};

const PlanContext = createContext<PlanContextType | undefined>(undefined);

export function PlanProvider({ children }: { children: ReactNode }) {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const storedPlan = localStorage.getItem("fitlog-plan");
      const storedSaved = localStorage.getItem("fitlog-saved");

      if (storedPlan) {
        setPlan(JSON.parse(storedPlan));
      }

      if (storedSaved) {
        setSaved(JSON.parse(storedSaved));
      }
    } catch (error) {
      console.error("Failed to load FitLog data:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem("fitlog-plan", JSON.stringify(plan));
  }, [plan, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem("fitlog-saved", JSON.stringify(saved));
  }, [saved, isLoaded]);

  const addToPlan = (workout: Workout) => {
    const alreadyAdded = plan.some((item) => item.id === workout.id);

    if (alreadyAdded) {
      return false;
    }

    if (plan.length >= 5) {
      return false;
    }

    setPlan((prev) => [...prev, { ...workout, isDone: false }]);

    return true;
  };

  const saveWorkout = (workout: Workout) => {
    const alreadySaved = saved.some((item) => item.id === workout.id);

    if (alreadySaved) {
      return false;
    }

    setSaved((prev) => [...prev, workout]);

    return true;
  };

  const removeFromPlan = (id: number | string) => {
    setPlan((prev) => prev.filter((workout) => workout.id !== id));
  };

  const removeFromSaved = (id: number | string) => {
    setSaved((prev) => prev.filter((workout) => workout.id !== id));
  };

  const markAsDone = (id: number | string) => {
    setPlan((prev) =>
      prev.map((workout) =>
        workout.id === id
          ? { ...workout, isDone: !workout.isDone }
          : workout
      )
    );
  };

  return (
    <PlanContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        saveWorkout,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
        planCount: plan.length,
        savedCount: saved.length,
        isLoaded,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  const context = useContext(PlanContext);

  if (!context) {
    throw new Error("usePlan must be used inside PlanProvider");
  }

  return context;
}