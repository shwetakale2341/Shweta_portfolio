import FadeIn from "@/components/FadeIn";

function ReelSection() {
  return (
    <section className="relative bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pb-24 sm:pb-32">
      <FadeIn delay={0} y={30}>
        <div className="relative w-full aspect-video max-w-6xl mx-auto rounded-[24px] sm:rounded-[32px] overflow-hidden border border-white/10">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            src="/videos/showcase-reel.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
            <span className="block text-[#D7E2EA]/60 text-xs sm:text-sm uppercase tracking-widest mb-2">
              Showreel
            </span>
            <span
              className="hero-heading font-black uppercase text-4xl sm:text-6xl md:text-7xl leading-none"
            >
              In motion
            </span>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

export default ReelSection;
