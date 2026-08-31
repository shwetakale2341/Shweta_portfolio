import FadeIn from "@/components/FadeIn";

const services = [
  {
    number: "01",
    name: "Graphic Design",
    description:
      "Campaign visuals, newsletters, infographics, and brochures designed to communicate clearly and stay on-brand across every channel.",
  },
  {
    number: "02",
    name: "Video Editing",
    description:
      "Testimonial and documentary-style edits, event highlight reels, and social cutdowns — shaped in Premiere Pro and After Effects.",
  },
  {
    number: "03",
    name: "Branding",
    description:
      "Consistent visual identity across digital and offline materials, from event collateral to donor communication.",
  },
  {
    number: "04",
    name: "Social & Campaign Content",
    description:
      "Multi-platform assets translated and adapted for regional audiences, built for engagement across social and print.",
  },
  {
    number: "05",
    name: "Event & Print Production",
    description:
      "Bulk print materials, vendor coordination, and event branding delivered on tight deadlines without losing polish.",
  },
];

function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={20}>
        <p className="text-[#0C0C0C]/60 text-center max-w-xl mx-auto mb-16 sm:mb-20 md:mb-24 text-base sm:text-lg">
          Five ways I can help — from a single social post to a full campaign.
        </p>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {services.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={20}>
            <div
              className="flex gap-6 sm:gap-10 py-8 sm:py-10 md:py-12 items-start"
              style={{ borderTop: "1px solid rgba(12, 12, 12, 0.15)" }}
            >
              <span
                className="text-[#0C0C0C] font-black leading-none"
                style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
              >
                {service.number}
              </span>
              <div className="flex flex-col gap-2 pt-2 sm:pt-4">
                <h3
                  className="text-[#0C0C0C] font-medium uppercase"
                  style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                >
                  {service.name}
                </h3>
                <p
                  className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl opacity-60"
                  style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
