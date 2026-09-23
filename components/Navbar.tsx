"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bookmark, Dumbbell } from "lucide-react";
import { usePlan } from "@/context/PlanContext";

export default function Navbar() {
  const pathname = usePathname();
  const { planCount, savedCount } = usePlan();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0d0c]/95 backdrop-blur">
      <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">

          {/* Logo + FITLOG */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="FitLog Logo"
              width={38}
              height={38}
              className="h-9 w-9 object-contain"
            />

            <span className="text-xl font-black tracking-wider text-white">
              FITLOG
            </span>
          </Link>


          {/* Desktop Menu */}
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


          {/* Badges */}
          <div className="flex items-center gap-2">
            <Link
              href="/my-plan"
              className="flex items-center gap-1.5 rounded-full bg-[#ccff00] px-3 py-2 text-xs font-black text-black sm:gap-2 sm:px-4"
            >
              <Dumbbell size={15} />
              <span>Plan</span>
              <span>{planCount}</span>
            </Link>

            <Link
              href="/my-plan"
              className="flex items-center gap-1.5 rounded-full border border-white/30 px-3 py-2 text-xs font-black text-white sm:gap-2 sm:px-4"
            >
              <Bookmark size={15} />
              <span>Saved</span>
              <span>{savedCount}</span>
            </Link>
          </div>

        </div>


        {/* Mobile Menu */}
        <div className="mt-4 flex items-center justify-center gap-8 border-t border-white/10 pt-4 md:hidden">
          <Link
            href="/"
            className={`text-xs font-black uppercase tracking-wider ${
              pathname === "/" ? "text-[#ccff00]" : "text-gray-400"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={`text-xs font-black uppercase tracking-wider ${
              pathname === "/my-plan"
                ? "text-[#ccff00]"
                : "text-gray-400"
            }`}
          >
            My Plan
          </Link>
        </div>

      </nav>
    </header>
  );
}