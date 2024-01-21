import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-8 py-6 mt-16">
        <Hero />
        <About />
        <Project />
        <Contact />
      </main>
    </div>
  );
}
