import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-8 lg:px-[100px] py-6 mt-16">
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
