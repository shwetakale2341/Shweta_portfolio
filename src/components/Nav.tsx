import { Link, useLocation } from "react-router-dom";
import FadeIn from "@/components/FadeIn";

const navLinks = [
  { label: "About", to: "/#about" },
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  { label: "Contact", to: "/contact" },
];

function Nav() {
  const location = useLocation();

  return (
    <FadeIn delay={0} y={-20}>
      <nav className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 relative z-20">
        <Link
          to="/"
          className="text-[#D7E2EA] font-black uppercase tracking-tight text-lg md:text-xl"
        >
          Shweta
        </Link>
        <div className="flex gap-6 md:gap-10">
          {navLinks.map((link) => {
            const isActive =
              link.to === "/"
                ? location.pathname === "/"
                : location.pathname === link.to;
            return (
              <Link
                key={link.label}
                to={link.to}
                className={`font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70 ${
                  isActive ? "text-[#D7E2EA]" : "text-[#D7E2EA]/60"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </FadeIn>
  );
}

export default Nav;
