import WorkoutCard from "./WorkoutCard";

const workouts = [
  {
    id: "1",
    name: "Bicep Curl",
    muscle: "Biceps",
    level: "Beginner",
  },
  {
    id: "2",
    name: "Bench Press",
    muscle: "Chest",
    level: "Intermediate",
  },
  {
    id: "3",
    name: "Squat",
    muscle: "Legs",
    level: "Advanced",
  },
  {
    id: "4",
    name: "Shoulder Press",
    muscle: "Shoulders",
    level: "Intermediate",
  },
];

export default function Library() {
  return (
    <section
      id="library"
      className="bg-[#0b0d0c] px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-[#ccff00]">
          The Library
        </p>

        <h2 className="text-4xl font-black uppercase text-white">
          Choose Your Workout
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {workouts.map((workout) => (
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