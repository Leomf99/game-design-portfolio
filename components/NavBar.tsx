"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type NavBarProps = {
  showAbout?: boolean;
  showProjects?: boolean;
  showSkills?: boolean;
  showExperience?: boolean;
};

const navItems = [
  { label: "Home", href: "/", key: "home" },
  { label: "About", href: "#about", key: "showAbout" },
  { label: "Projects", href: "#projects", key: "showProjects" },
  { label: "Skills", href: "#skills", key: "showSkills" },
  { label: "Experience", href: "#experience", key: "showExperience" },
  { label: "Contact", href: "/#contact" },
] as const;

export default function NavBar({
  showAbout = true,
  showProjects = true,
  showSkills = true,
  showExperience = true,
}: NavBarProps) {
  const pathname = usePathname();
  const homeHref = pathname === "/" ? "#home" : "/";
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const current = window.scrollY;
        const delta = current - lastScrollY.current;

        if (Math.abs(delta) > 6) {
          if (delta > 0 && current > 80) {
            setHidden(true);
          } else {
            setHidden(false);
          }
          lastScrollY.current = current;
        }

        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 text-white bg-brand-red-subtle backdrop-blur transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto flex h-14 w-full items-center justify-evenly px-6">
        {navItems
          .filter((item) => {
            if (!("key" in item)) return true;
            if (item.key === "showAbout") return showAbout;
            if (item.key === "showProjects") return showProjects;
            if (item.key === "showSkills") return showSkills;
            if (item.key === "showExperience") return showExperience;
            return true;
          })
          .map((item) => (
            <a
              key={item.href}
              className="transition-colors hover:text-black"
              href={"key" in item && item.key === "home" ? homeHref : item.href}
            >
              {item.label}
            </a>
          ))}
      </div>
    </nav>
  );
}
