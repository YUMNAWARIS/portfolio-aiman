import Hero from "@/components/sections/Hero";
import Contact from "@/components/sections/Contact";
import SelectedWork from "@/components/sections/SelectedWork";
import Timeline from "@/components/sections/timeline";

export default function Home() {
  return (
    <>
      <Hero />
      <Timeline />
      <SelectedWork />
      <Contact />
    </>
  );
}
