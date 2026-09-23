import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Star } from "lucide-react";
import type { Workout } from "@/context/PlanContext";

type WorkoutCardProps = {
  workout: Workout;
};

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group overflow-hidden rounded-xl border border-white/10 bg-[#151816] transition duration-300 hover:-translate-y-1 hover:border-[#ccff00]/50"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-5">
        <div className="mb-4 flex flex-wrap gap-2">
          {workout.muscleGroups?.map((group) => (
            <span
              key={group}
              className="rounded-full bg-[#ccff00] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-black"
            >
              {group}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-black uppercase text-white">
          {workout.name}
        </h3>

        <p className="mt-2 text-sm text-gray-400">
          {typeof workout.equipment === "string"
            ? workout.equipment
            : workout.equipment?.join(", ")}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-gray-300">
          <div className="flex items-center gap-1.5">
            <Clock size={15} className="text-[#ccff00]" />
            <span>{workout.duration} min</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Flame size={15} className="text-[#ccff00]" />
            <span>{workout.caloriesBurned} kcal</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Star size={15} className="text-[#ccff00]" />
            <span>{workout.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}