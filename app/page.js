import About from "@/components/main/About";
import Contact from "@/components/main/Contact";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Services from "@/components/main/Services";
import TiltCard from "@/components/main/TiltCard";

export default function Home() {
  return (
    <main className="h-full w-full overflow-x-hidden">
      <div className="flex flex-col w-full">
        <Hero /> 
        <About />
        <Services />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}

