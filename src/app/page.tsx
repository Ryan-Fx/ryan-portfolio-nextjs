import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Navbar />
      <div className="container mx-auto px-8 py-6 mt-16">
        <Hero />
      </div>
    </main>
  );
}
