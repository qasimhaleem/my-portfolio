import Navbar from "@/components/public/Navbar";
import Hero from "@/components/public/Hero";
import Projects from "@/components/public/Projects";
import Skills from "@/components/public/Skills";
import Footer from "@/components/public/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
