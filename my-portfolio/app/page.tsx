import BackgroundMusic from "@/componenets/backgroundMusic";
import Navbar from "@/componenets/Navbar";
import Hero from "@/app/section/hero";

export default function Home() {
  return (
    <>
    <Navbar />
    <main className="min-h-screen flex flex-col">
      <section id="home" className="relative h-screen">
        <Hero />
      </section>
      <section id="about" className="py-16">
      </section>
      <BackgroundMusic />
      
    </main>
    </>
  );
}