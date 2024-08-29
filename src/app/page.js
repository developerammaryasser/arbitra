import Navbar from "@/components/layouts/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Stories from "@/components/sections/Stories";

export default function Home() {
  return (
    <>
    <header className="bg-n-3">
      <Navbar />
      <Hero />
    </header>
      <Services />
      <Stories />
    </>
  );
}
