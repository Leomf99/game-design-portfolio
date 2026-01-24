import Image from "next/image";
import Link from "next/link";

import Section from "@/components/Section";

export default function HomePage() {
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

  return (
    <main>
      {/* HERO / INTRO simple (opcional) */}
      <header>{/* Header pending */}</header>

      {/* Section 1: About */}
      <Section id="about" title="About me">
        <div className="flex justify-center items-center gap-20">
          <div className="about-img-box">
            <Image src="/images/about.jpg" alt="About" fill priority />
          </div>
          <p className="w-[60%] text-center">
            Hi! Alexis Islas Valdés here. I'm an aspiring Game Designer from
            Mexico, with experience in projects with various scopes using Unreal
            Engine 5. I'm very systematic person that enjoys overcoming
            challenges, analyzing the situation and coming up with creative
            solutions. <br /> <br />I love games for the way they lend
            themselves to tell stories unlike any other media, a different way
            to connect with people, which I strive to reflect on my projects.
            When I had to choose a career, after an introspection, I decided
            that I wanted to create stories and experiences like the ones that
            left a mark on me. This led me to explore the creative industry
            where I discovered that the part that I enjoyed the most was
            designing games, and thus the aspiration to become a Game Designer
            began.
          </p>
        </div>
      </Section>

      {/* Section 2: Projects */}
      <Section id="projects" title="Projects">
        <p className="text-center mb-8">
          Over the last years, I've been developing a few projects that vary in
          genre, team size, and scope. <br />
          These are some of my most recent works, showcasing a range of creative
          and technical skills across different projects.
        </p>
        <div className="flex justify-evenly">
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

      {/* Section 3: Skills */}
      <Section id="skills" title="Skills">
        <div>
          <p className="text-center font-semibold mb-8">Game Design</p>
          <div>
            <div className="bg-[]"></div>
          </div>
        </div>
      </Section>
    </main>
  );
}
