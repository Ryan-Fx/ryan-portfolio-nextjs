import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto px-8 py-6 mt-16">
        <Hero />
        <About />
        <Project />
      </div>
    </main>
  );
}
