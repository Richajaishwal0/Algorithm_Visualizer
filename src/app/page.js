"use client";
import Navbar from "@/components/navbar";
import { AlgorithmCards } from "./components/algorithm-cards";
import Footer from "./components/footer";
import Hero from "./components/hero";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar title="Algorithm Visualizer" />
      <Hero />
      <main className="container mx-auto py-12 px-4">
        <AlgorithmCards />
      </main>
      <Footer />
    </div>
  );
}
