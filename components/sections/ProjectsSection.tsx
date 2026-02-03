import Image from "next/image";
import Link from "next/link";

import Section from "@/components/Section";

const projectImages = [
  {
    src: "/images/projects/DesiertoMagico1.png",
    alt: "Desierto Magico",
    href: "/projects/desierto-magico",
    title: "Desierto Mágico",
    subtitle: "VR educational experience",
  },
  {
    src: "/images/projects/EradeHielo4.png",
    alt: "Era de Hielo",
    href: "/projects/era-de-hielo",
    title: "Era de Hielo",
    subtitle: "Paleolithic VR adventure",
  },
  {
    src: "/images/projects/NMW.png",
    alt: "Not My War",
    href: "/projects/not-my-war",
    title: "Not My War",
    subtitle: "Isometric stealth game",
  },
  {
    src: "/images/projects/Odisea5.png",
    alt: "Odisea",
    href: "/projects/odisea",
    title: "Odisea",
    subtitle: "Safari-style VR learning",
  },
];

export default function ProjectsSection() {
  return (
    <Section id="projects" title="Projects">
      <p className="text-center mb-8">
        Over the last years, I've been developing a few projects that vary in
        genre, team size, and scope. <br />
        These are some of my most recent works, showcasing a range of creative
        and technical skills across different projects.
      </p>
      <div className="flex flex-col items-center justify-evenly gap-6 md:flex-row md:gap-8">
        {projectImages.map((image, index) => (
          <Link
            className="project-img-box group relative"
            key={image.src}
            href={image.href}
            title={`Ver ${image.title}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              className={`transition-transform duration-300 group-hover:scale-105 ${
                index === 2 ? "project-img-inner-offset" : ""
              }`}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-black/0 text-center text-white/0 transition-all duration-300 group-hover:bg-black/60 group-hover:text-white">
              <span className="text-lg font-semibold">{image.title}</span>
              <span className="px-5 text-xs uppercase tracking-[0.2em] text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {image.subtitle}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
