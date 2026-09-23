import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080a09]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-8 sm:px-6 md:flex-row lg:px-8">

        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="FitLog Logo"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />

          <span className="text-xl font-black text-white">
            FITLOG
          </span>
        </div>


        <p className="text-sm text-gray-500">
          © 2026 FitLog. Train hard. Track progress.
        </p>

      </div>
    </footer>
  );
}