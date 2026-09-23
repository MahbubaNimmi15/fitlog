import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PlanProvider } from "@/context/PlanContext";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "FitLog",
  description: "Workout Library and Fitness Planner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0b0d0c] text-white">
        <PlanProvider>
          <Navbar />

          {children}

          <Footer />

          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "#171a18",
                color: "#ffffff",
                border: "1px solid #2a2e2b",
              },
            }}
          />
        </PlanProvider>
      </body>
    </html>
  );
}