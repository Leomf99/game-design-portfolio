import Image from "next/image";
import Link from "next/link";

import Section from "@/components/Section";

const projectImages = [
  {
    src: "/images/projects/DesiertoMagico1.png",
    alt: "Desierto Magico",
    href: "#",
    title: "Ver Desierto Mágico",
  },
  {
    src: "/images/projects/EradeHielo4.png",
    alt: "Era de Hielo",
    href: "#",
    title: "Ver Era de Hielo",
  },
  {
    src: "/images/projects/NMW.png",
    alt: "Not My War",
    href: "#",
    title: "Ver Not My War",
  },
  {
    src: "/images/projects/Odisea5.png",
    alt: "Odisea",
    href: "#",
    title: "Ver Odisea",
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
      <div className="flex justify-evenly gap-8">
        {projectImages.map((image, index) => (
          <Link
            className="project-img-box"
            key={image.src}
            href={image.href}
            title={image.title}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              className={index === 2 ? "project-img-inner-offset" : ""}
            />
          </Link>
        ))}
      </div>
    </Section>
  );
}
