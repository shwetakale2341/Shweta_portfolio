import { useState } from "react";
import Nav from "@/components/Nav";
import FadeIn from "@/components/FadeIn";
import ContactButton from "@/components/ContactButton";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${name || "your website"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:Shwetakale2341@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="relative min-h-screen" style={{ overflowX: "clip", background: "#0C0C0C" }}>
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        autoPlay
        loop
        muted
        playsInline
        src="/videos/orbit-globe.mp4"
      />
      <div className="absolute inset-0 bg-[#0C0C0C]/60" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Nav />

        <div className="flex-1 flex flex-col justify-center px-6 md:px-10 py-16 sm:py-20">
          <FadeIn delay={0} y={30}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none text-[13vw] sm:text-[8vw] md:text-[6.5vw] mb-4">
              Let&apos;s talk
            </h1>
          </FadeIn>
          <FadeIn delay={0.1} y={20}>
            <p className="text-[#D7E2EA]/70 max-w-lg mb-12 sm:mb-16 text-base sm:text-lg">
              Available for freelance and full-time graphic design and video
              editing work. Tell me a bit about your project.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 max-w-4xl">
            <FadeIn delay={0.2} y={20}>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-transparent border-b border-[#D7E2EA]/30 text-[#D7E2EA] placeholder:text-[#D7E2EA]/40 py-3 outline-none focus:border-[#D7E2EA] transition-colors"
                />
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-b border-[#D7E2EA]/30 text-[#D7E2EA] placeholder:text-[#D7E2EA]/40 py-3 outline-none focus:border-[#D7E2EA] transition-colors"
                />
                <textarea
                  required
                  placeholder="Tell me about your project"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="bg-transparent border-b border-[#D7E2EA]/30 text-[#D7E2EA] placeholder:text-[#D7E2EA]/40 py-3 outline-none focus:border-[#D7E2EA] transition-colors resize-none"
                />
                <div className="mt-4">
                  <ContactButton />
                </div>
              </form>
            </FadeIn>

            <FadeIn delay={0.3} y={20}>
              <div className="flex flex-col gap-6 text-[#D7E2EA]">
                <div>
                  <span className="block text-xs uppercase tracking-widest text-[#D7E2EA]/50 mb-1">
                    Email
                  </span>
                  <a href="mailto:Shwetakale2341@gmail.com" className="text-lg hover:opacity-70 transition-opacity">
                    Shwetakale2341@gmail.com
                  </a>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-[#D7E2EA]/50 mb-1">
                    Phone
                  </span>
                  <a href="tel:+7558588547" className="text-lg hover:opacity-70 transition-opacity">
                    +7558588547
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
