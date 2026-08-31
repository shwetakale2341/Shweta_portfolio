import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import Magnet from "@/components/Magnet";
import ContactButton from "@/components/ContactButton";
import Nav from "@/components/Nav";

const PORTRAIT_SRC = "/portrait/shweta-avatar.png";

function HeroSection() {
  const [portraitFailed, setPortraitFailed] = useState(false);

  return (
    <section
      id="hero"
      className="h-screen flex flex-col relative overflow-hidden"
      style={{ overflowX: "clip" }}
    >
      {/* Ambient depth: soft glow + faint grid, no external assets */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 62%, rgba(187,204,215,0.14) 0%, rgba(187,204,215,0.05) 35%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #D7E2EA 1px, transparent 1px), linear-gradient(to bottom, #D7E2EA 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <motion.div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: 480,
          height: 480,
          left: "50%",
          top: "58%",
          x: "-50%",
          y: "-50%",
          background:
            "radial-gradient(circle, rgba(187,204,215,0.18) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Slow drifting secondary glow, orbiting gently behind the portrait */}
      <motion.div
        className="pointer-events-none absolute rounded-full hidden sm:block"
        style={{
          width: 260,
          height: 260,
          left: "50%",
          top: "60%",
          background:
            "radial-gradient(circle, rgba(230,180,140,0.16) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{
          x: [-160, 160, -160],
          y: [-40, 40, -40],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Faint starfield dots for atmosphere */}
      <div className="pointer-events-none absolute inset-0 hidden sm:block">
        {[
          { top: "12%", left: "8%", size: 2, delay: 0 },
          { top: "20%", left: "85%", size: 3, delay: 0.5 },
          { top: "35%", left: "15%", size: 2, delay: 1 },
          { top: "8%", left: "60%", size: 2, delay: 1.5 },
          { top: "45%", left: "92%", size: 2, delay: 0.8 },
          { top: "70%", left: "6%", size: 2, delay: 1.2 },
          { top: "78%", left: "88%", size: 3, delay: 0.3 },
        ].map((star, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-[#D7E2EA]"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
            }}
            animate={{ opacity: [0.15, 0.7, 0.15] }}
            transition={{
              duration: 3 + i * 0.4,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <Nav />

      <FadeIn delay={0.15} y={40} className="overflow-hidden mt-6 sm:mt-4 md:-mt-5 relative z-10">
        <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[10vw] sm:text-[10.5vw] md:text-[11vw] lg:text-[12vw]">
          hi, i&apos;m shweta
        </h1>
      </FadeIn>

      <FadeIn delay={0.25} y={20} className="relative z-10 px-6 md:px-10">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-[#D7E2EA]/60 text-xs sm:text-sm uppercase tracking-widest">
            Available for freelance &amp; full-time work
          </span>
        </div>
      </FadeIn>

      {/* Portrait */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]">
        <FadeIn delay={0.6} y={30}>
          <Magnet padding={150} strength={3}>
            <div className="relative w-full aspect-[3/4] flex items-end justify-center">
              <img
                src={PORTRAIT_SRC}
                alt="Shweta Kale portrait"
                className="w-full h-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
                onError={() => setPortraitFailed(true)}
                onLoad={() => setPortraitFailed(false)}
              />
              {portraitFailed && (
                <span className="absolute inset-0 flex items-center justify-center text-[#D7E2EA]/50 text-sm uppercase tracking-widest">
                  Add your portrait
                </span>
              )}
            </div>
          </Magnet>
        </FadeIn>
      </div>

      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 mt-auto relative z-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
          >
            a graphic designer &amp; video editor driven by crafting stories that hold attention
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <Link to="/contact">
            <ContactButton />
          </Link>
        </FadeIn>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 text-[#D7E2EA]/40"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#D7E2EA]/60 to-transparent" />
      </motion.div>
    </section>
  );
}

export default HeroSection;
