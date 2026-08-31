import { useState } from "react";
import { Play } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import Lightbox from "@/components/Lightbox";

type Reel = {
  title: string;
  category: string;
  src: string;
};

const reels: Reel[] = [
  { title: "LumERA — Radiance Renewal Serum", category: "AI-Generated Product Video", src: "/videos/lumera-serum-reel.mp4" },
  { title: "HSBC", category: "Office Cafeteria Display Video", src: "/videos/hsbc-reel.mp4" },
  { title: "Save the Date", category: "Event Invitation Video", src: "/videos/manorama-hortus-reel.mp4" },
  { title: "WhatsApp AI", category: "Short-Form Video — Client", src: "/videos/bino-reel.mp4" },
  { title: "Paint Application Guide", category: "Informative Video — Client", src: "/videos/short-form-reel.mp4" },
  { title: "BNP Paribas", category: "Client Testimonial", src: "/videos/bnp-reel.mp4" },
];

function VideoReels() {
  const [openReel, setOpenReel] = useState<Reel | null>(null);

  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10 pb-32">
      <FadeIn delay={0} y={30}>
        <h2
          className="hero-heading font-black uppercase leading-none mb-4"
          style={{ fontSize: "clamp(2rem, 6vw, 64px)" }}
        >
          Video Reels
        </h2>
        <p className="text-[#D7E2EA]/60 max-w-lg mb-12">
          A selection of edits — client campaigns, product reels, and social cuts. Click any reel to watch in full.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {reels.map((reel, i) => (
          <FadeIn key={reel.title} delay={i * 0.08} y={20}>
            <button
              onClick={() => setOpenReel(reel)}
              className="relative w-full text-left rounded-[24px] overflow-hidden border border-white/10 bg-white/[0.02] aspect-video group cursor-pointer"
            >
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                src={reel.src}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                <div className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/30">
                  <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-4 left-5">
                <span className="block text-[#D7E2EA] text-lg font-medium">
                  {reel.title}
                </span>
                <span className="block text-[#D7E2EA]/60 text-xs uppercase tracking-widest">
                  {reel.category}
                </span>
              </div>
            </button>
          </FadeIn>
        ))}
      </div>

      {openReel && (
        <Lightbox
          type="video"
          src={openReel.src}
          onClose={() => setOpenReel(null)}
        />
      )}
    </section>
  );
}

export default VideoReels;
