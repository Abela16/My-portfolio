import Navbar from "@/componenets/Navbar";
import Footer from "@/componenets/Footer";
import Hero from "@/app/section/hero";
import AboutMe from "./section/AboutMe";
import Projects from "./section/Projects";
import Skills from "./section/Skills";
import Contact from "@/app/section/Contact";

export default function Home() {
  return (
    <>
    <Navbar />
    <main className="min-h-screen flex flex-col">
            <section id="home" className="relative min-h-screen scroll-mt-24">
              <Hero />
            </section>

            <section id="about" className="py-20 scroll-mt-24">
              <AboutMe />
            </section>

            <section className="scroll-mt-24">
              <Projects />
            </section>

            <section className="scroll-mt-24">
              <Skills />
            </section>

            <section className="scroll-mt-24">
              <Contact />
            </section>
    </main>
    <Footer />
    </>
  );
}