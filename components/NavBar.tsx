"use client";

import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
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
        {navItems.map((item) => (
          <a
            key={item.href}
            className="transition-colors hover:text-black"
            href={item.href}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
