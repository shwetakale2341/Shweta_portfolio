import Nav from "@/components/Nav";
import FadeIn from "@/components/FadeIn";
import ServicesSection from "@/sections/ServicesSection";

function Services() {
  return (
    <div style={{ overflowX: "clip", background: "#0C0C0C" }}>
      <div className="relative min-h-[40vh] flex flex-col overflow-hidden">
        <video
          className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-20"
          autoPlay
          loop
          muted
          playsInline
          src="/videos/column-drift-bg.mp4"
        />
        <div className="pointer-events-none absolute inset-0 bg-[#0C0C0C]/70" />
        <Nav />
        <div className="relative flex-1 flex items-end px-6 md:px-10 pb-16 sm:pb-20">
          <FadeIn delay={0.1} y={30}>
            <h1
              className="hero-heading font-black uppercase tracking-tight leading-none text-[13vw] sm:text-[10vw] md:text-[9vw]"
            >
              Services
            </h1>
          </FadeIn>
        </div>
      </div>
      <ServicesSection />
    </div>
  );
}

export default Services;
