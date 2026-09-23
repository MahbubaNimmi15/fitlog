import Link from "next/link";
import { Dumbbell } from "lucide-react";


export default function NotFound() {

  return (

    <main className="flex min-h-screen items-center justify-center bg-[#0b0d0c] px-4 text-white">


      <div className="text-center">


        <Dumbbell
          size={60}
          className="mx-auto text-[#ccff00]"
        />



        <h1 className="mt-6 text-7xl font-black">
          404
        </h1>



        <h2 className="mt-4 text-3xl font-black uppercase">
          Page Not Found
        </h2>



        <p className="mt-4 text-gray-400">
          The workout page you are looking for does not exist.
        </p>



        <Link

          href="/"

          className="mt-8 inline-block rounded-md bg-[#ccff00] px-6 py-3 font-black uppercase text-black"

        >

          Back To Home

        </Link>



      </div>


    </main>

  );

}