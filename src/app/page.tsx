import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <div className="mx-auto mt-20">
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
      </div>

      <Footer />
    </div>
  );
}
