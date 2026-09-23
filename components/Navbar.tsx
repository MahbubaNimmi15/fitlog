"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dumbbell, Bookmark } from "lucide-react";
import { usePlan } from "@/context/PlanContext";

export default function Navbar() {
  const pathname = usePathname();
  const { planCount, savedCount } = usePlan();

  return (
    <header className="border-b border-white/10 bg-[#0b0d0c]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ccff00] text-black">
            <Dumbbell size={22} />
          </div>

          <span className="text-xl font-black tracking-wider text-white">
            FITLOG
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className={`text-sm font-bold uppercase tracking-wider transition ${
              pathname === "/"
                ? "text-[#ccff00]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={`text-sm font-bold uppercase tracking-wider transition ${
              pathname === "/my-plan"
                ? "text-[#ccff00]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 rounded-full bg-[#ccff00] px-3 py-2 text-xs font-bold text-black sm:px-4"
          >
            <Dumbbell size={15} />
            <span>Plan</span>
            <span>{planCount}</span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-2 rounded-full border border-white/30 px-3 py-2 text-xs font-bold text-white sm:px-4"
          >
            <Bookmark size={15} />
            <span>Saved</span>
            <span>{savedCount}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}