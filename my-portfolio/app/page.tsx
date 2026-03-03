import BackgroundMusic from "@/componenets/backgroundMusic";
import Navbar from "@/componenets/Navbar";
import Hero from "@/componenets/hero"

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">Abelx Portfolio</h1>
      <Navbar />
      <BackgroundMusic />
      <Hero />
    </main>
  );
}