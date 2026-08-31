import HeroSection from "@/sections/HeroSection";
import MarqueeSection from "@/sections/MarqueeSection";
import ReelSection from "@/sections/ReelSection";
import AboutSection from "@/sections/AboutSection";

function Home() {
  return (
    <div style={{ overflowX: "clip", background: "#0C0C0C" }}>
      <HeroSection />
      <MarqueeSection />
      <ReelSection />
      <AboutSection />
    </div>
  );
}

export default Home;
