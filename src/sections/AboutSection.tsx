import { Palette, Clapperboard, Layers, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import FadeIn from "@/components/FadeIn";
import AnimatedText from "@/components/AnimatedText";
import ContactButton from "@/components/ContactButton";

const bio =
  "With more than three years of experience across corporate, creative, and non-profit industries, i design impactful visual content for campaigns, social media, and donor communication, and edit testimonial and event videos that bring real stories to life. Let's build something incredible together!";

function CornerIcon({
  icon: Icon,
  className,
}: {
  icon: typeof Palette;
  className: string;
}) {
  return (
    <div
      className={`absolute rounded-2xl border border-[#D7E2EA]/15 bg-white/[0.02] flex items-center justify-center ${className}`}
    >
      <Icon className="text-[#D7E2EA]/40 w-1/3 h-1/3" strokeWidth={1.2} />
    </div>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 relative"
    >
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
        <CornerIcon
          icon={Sparkles}
          className="w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:w-[210px] md:h-[210px] top-[4%] left-[1%] sm:left-[2%] md:left-[4%]"
        />
      </FadeIn>
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
        <CornerIcon
          icon={Layers}
          className="w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] md:w-[180px] md:h-[180px] bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]"
        />
      </FadeIn>
      <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
        <CornerIcon
          icon={Palette}
          className="w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:w-[210px] md:h-[210px] top-[4%] right-[1%] sm:right-[2%] md:right-[4%]"
        />
      </FadeIn>
      <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
        <CornerIcon
          icon={Clapperboard}
          className="w-[130px] h-[130px] sm:w-[170px] sm:h-[170px] md:w-[220px] md:h-[220px] bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]"
        />
      </FadeIn>

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            About me
          </h2>
        </FadeIn>

        <AnimatedText
          text={bio}
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
          style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
        />
      </div>

      <FadeIn delay={0.15} y={20}>
        <div className="flex gap-6 mt-10 sm:mt-12">
          <Link
            to="/work"
            className="text-[#D7E2EA] text-sm uppercase tracking-widest border-b border-[#D7E2EA]/40 pb-1 hover:border-[#D7E2EA] transition-colors"
          >
            See my work
          </Link>
          <Link
            to="/services"
            className="text-[#D7E2EA]/60 text-sm uppercase tracking-widest border-b border-[#D7E2EA]/20 pb-1 hover:text-[#D7E2EA] hover:border-[#D7E2EA] transition-colors"
          >
            Services
          </Link>
        </div>
      </FadeIn>

      <div className="mt-16 sm:mt-20 md:mt-24">
        <Link to="/contact">
          <ContactButton />
        </Link>
      </div>
    </section>
  );
}

export default AboutSection;
