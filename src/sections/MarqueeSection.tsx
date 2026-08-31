import { useEffect, useRef, useState } from "react";
import Lightbox from "@/components/Lightbox";

// Full images, never cropped — letterboxed on a dark card so text/logos
// never get cut off, no matter the image's original aspect ratio.
const row1Images: string[] = [
  "/work/artisan-market.jpg",
  "/work/making-in-khed-city.jpg",
  "/work/rose-pink-sauce.jpg",
  "/work/sun-and-soil.jpg",
];
const row2Images: string[] = [
  "/work/khed-city-clear-title.jpg",
  "/work/salamander-windows.jpg",
  "/work/pizza-pasta-festival.jpg",
  "/work/nutreez-infographic.jpg",
];

function Tile({
  src,
  i,
  onOpen,
}: {
  src: string;
  i: number;
  onOpen: (src: string) => void;
}) {
  return (
    <button
      onClick={() => onOpen(src)}
      className="rounded-2xl overflow-hidden flex-none bg-white/[0.04] border border-white/5 flex items-center justify-center cursor-pointer hover:border-white/20 transition-colors"
      style={{ width: 340, height: 260 }}
    >
      <img
        src={src}
        alt={`Project thumbnail ${i + 1}`}
        className="max-w-full max-h-full object-contain"
        loading="lazy"
      />
    </button>
  );
}

function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [openImage, setOpenImage] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const sectionTop = el.getBoundingClientRect().top + window.scrollY;
      const value =
        (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(value);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const row1 = [...row1Images, ...row1Images, ...row1Images];
  const row2 = [...row2Images, ...row2Images, ...row2Images];

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div
        className="flex gap-3 mb-3"
        style={{
          transform: `translateX(${offset - 200}px)`,
          willChange: "transform",
        }}
      >
        {row1.map((src, i) => (
          <Tile key={`r1-${i}`} src={src} i={i} onOpen={setOpenImage} />
        ))}
      </div>
      <div
        className="flex gap-3"
        style={{
          transform: `translateX(${-(offset - 200)}px)`,
          willChange: "transform",
        }}
      >
        {row2.map((src, i) => (
          <Tile key={`r2-${i}`} src={src} i={i} onOpen={setOpenImage} />
        ))}
      </div>

      {openImage && (
        <Lightbox
          type="image"
          src={openImage}
          onClose={() => setOpenImage(null)}
        />
      )}
    </section>
  );
}

export default MarqueeSection;
