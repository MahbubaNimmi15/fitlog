import Hero from "@/components/Hero";
import Library from "@/components/Library";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0b0d0c]">
      <Hero />

      <Library />

      <Footer />
    </main>
  );
}