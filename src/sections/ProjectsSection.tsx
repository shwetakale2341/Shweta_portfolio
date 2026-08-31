import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import LiveProjectButton from "@/components/LiveProjectButton";
import Lightbox from "@/components/Lightbox";

type Project = {
  number: string;
  category: "Employer" | "Client";
  org: string;
  name: string;
  images: string[]; // 2 or 3 images — layout adapts automatically
};

const projects: Project[] = [
  {
    number: "01",
    category: "Employer",
    org: "Industree Foundation",
    name: "Artisan Market 2025",
    images: [
      "/work/artisan-market-invite.png",
      "/work/womens-entrepreneurship-day.jpg",
      "/work/artisan-market.jpg",
    ],
  },
  {
    number: "02",
    category: "Client",
    org: "Khed City Kalyani",
    name: "Industrial Park Campaign",
    images: [
      "/work/khed-city-clear-title.jpg",
      "/work/world-ocean-day.jpg",
      "/work/making-in-khed-city.jpg",
    ],
  },
  {
    number: "03",
    category: "Employer",
    org: "Industree Foundation",
    name: "Sustainability & Impact",
    images: ["/work/thank-a-farmer.jpg", "/work/bamboo-banner.jpg"],
  },
];

// Full image, never cropped — letterboxed on a dark card so logos and
// text at the edges of a poster never get sliced off. Click to expand.
function ImageSlot({
  src,
  height,
  onOpen,
}: {
  src: string;
  height: string;
  onOpen: (src: string) => void;
}) {
  return (
    <button
      onClick={() => onOpen(src)}
      className="w-full rounded-[28px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden bg-white/[0.04] border border-white/5 flex items-center justify-center p-2 sm:p-3 cursor-pointer hover:border-white/20 transition-colors"
      style={{ height }}
    >
      <img src={src} alt="" className="max-w-full max-h-full object-contain rounded-[16px] sm:rounded-[22px]" />
    </button>
  );
}

function ProjectCard({
  project,
  index,
  totalCards,
  onOpenImage,
}: {
  project: Project;
  index: number;
  totalCards: number;
  onOpenImage: (src: string) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.05;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const hasThree = project.images.length >= 3;

  return (
    <div
      ref={cardRef}
      className="h-[88vh] flex items-start justify-center sticky"
      style={{ top: `${88 + index * 40}px` }}
    >
      <motion.div
        style={{ scale, top: `${index * 40}px` }}
        className="relative w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
      >
        <div className="flex items-center justify-between flex-wrap gap-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="text-[#D7E2EA] font-black leading-none"
              style={{ fontSize: "clamp(2rem, 6vw, 90px)" }}
            >
              {project.number}
            </span>
            <div>
              <span className="block text-[#D7E2EA]/50 text-xs sm:text-sm uppercase tracking-widest">
                {project.category} — {project.org}
              </span>
              <span className="block text-[#D7E2EA] text-lg sm:text-2xl md:text-3xl font-medium uppercase">
                {project.name}
              </span>
            </div>
          </div>
          <LiveProjectButton />
        </div>

        {hasThree ? (
          <div className="flex gap-3 sm:gap-4">
            <div className="flex flex-col gap-3 sm:gap-4" style={{ width: "40%" }}>
              <ImageSlot src={project.images[0]} height="clamp(130px, 16vw, 230px)" onOpen={onOpenImage} />
              <ImageSlot src={project.images[1]} height="clamp(160px, 22vw, 340px)" onOpen={onOpenImage} />
            </div>
            <div style={{ width: "60%" }}>
              <ImageSlot src={project.images[2]} height="clamp(300px, 38vw, 580px)" onOpen={onOpenImage} />
            </div>
          </div>
        ) : (
          <div className="flex gap-3 sm:gap-4">
            {project.images.map((src, i) => (
              <div key={i} style={{ width: "50%" }}>
                <ImageSlot src={src} height="clamp(280px, 34vw, 520px)" onOpen={onOpenImage} />
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}

function ProjectsSection({ limit }: { limit?: number }) {
  const list = limit ? projects.slice(0, limit) : projects;
  const [openImage, setOpenImage] = useState<string | null>(null);

  return (
    <div className="max-w-5xl mx-auto" style={{ paddingBottom: `${list.length * 40 + 40}px` }}>
      {list.map((project, i) => (
        <ProjectCard
          key={project.number}
          project={project}
          index={i}
          totalCards={list.length}
          onOpenImage={setOpenImage}
        />
      ))}

      {openImage && (
        <Lightbox
          type="image"
          src={openImage}
          onClose={() => setOpenImage(null)}
        />
      )}
    </div>
  );
}

export default ProjectsSection;
