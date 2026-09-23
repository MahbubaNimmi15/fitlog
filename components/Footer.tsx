import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080a09]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-7 sm:px-6 md:flex-row lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="FitLog Logo"
            width={38}
            height={38}
            className="h-9 w-9 object-contain"
          />

          <span className="text-lg font-black tracking-wider text-white">
            FITLOG
          </span>
        </Link>

        <p className="text-center text-sm text-gray-500 md:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}