import Nav from "@/components/Nav";
import FadeIn from "@/components/FadeIn";
import ProjectsSection from "@/sections/ProjectsSection";
import VideoReels from "@/sections/VideoReelsSection";

function Work() {
  return (
    <div style={{ overflowX: "clip", background: "#0C0C0C" }}>
      <div className="min-h-[35vh] flex flex-col">
        <Nav />
        <div className="flex-1 flex items-end px-6 md:px-10 pb-16 sm:pb-20">
          <FadeIn delay={0.1} y={30}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none text-[13vw] sm:text-[10vw] md:text-[9vw]">
              Work
            </h1>
          </FadeIn>
        </div>
      </div>
      <VideoReels />
      <div className="px-5 sm:px-8 md:px-10 pb-32">
        <ProjectsSection />
      </div>
    </div>
  );
}

export default Work;
