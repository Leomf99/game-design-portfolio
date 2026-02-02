"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const homeHref = pathname === "/" ? "#home" : "/";
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const filteredItems = useMemo(
    () =>
      navItems.filter((item) => {
        if (!("key" in item)) return true;
        if (item.key === "home") return true;
        if (item.key === "showAbout") return showAbout;
        if (item.key === "showProjects") return showProjects;
        if (item.key === "showSkills") return showSkills;
        if (item.key === "showExperience") return showExperience;
        return true;
      }),
    [showAbout, showProjects, showSkills, showExperience]
  );

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
        hidden && !menuOpen ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto flex h-14 w-full items-center justify-between px-4 md:px-6">
        <a
          className="text-sm font-semibold uppercase tracking-[0.2em]"
          href={homeHref}
        >
          Portfolio
        </a>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/40 md:hidden"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-white transition-transform duration-200 ${
                menuOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-5 bg-white transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-3 h-0.5 w-5 bg-white transition-transform duration-200 ${
                menuOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
        <div className="hidden md:flex md:items-center md:gap-6">
          {filteredItems.map((item) => (
            <a
              key={item.href}
              className="transition-colors hover:text-black"
              href={"key" in item && item.key === "home" ? homeHref : item.href}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t border-white/20 bg-brand-red-subtle/95">
          <div className="flex flex-col gap-3 px-4 py-4">
            {filteredItems.map((item) => (
              <a
                key={`mobile-${item.href}`}
                className="text-sm"
                href={"key" in item && item.key === "home" ? homeHref : item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
