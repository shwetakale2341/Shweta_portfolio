import { useEffect } from "react";
import { X } from "lucide-react";

type LightboxProps = {
  src: string;
  type: "image" | "video";
  alt?: string;
  onClose: () => void;
};

function Lightbox({ src, type, alt = "", onClose }: LightboxProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#D7E2EA] transition-colors"
      >
        <X className="w-5 h-5" />
      </button>

      <div
        className="relative max-w-6xl max-h-[85vh] w-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {type === "video" ? (
          <video
            src={src}
            className="max-w-full max-h-[85vh] rounded-2xl"
            controls
            autoPlay
            playsInline
          />
        ) : (
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-[85vh] object-contain rounded-2xl"
          />
        )}
      </div>
    </div>
  );
}

export default Lightbox;
