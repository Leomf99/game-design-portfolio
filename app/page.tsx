import Image from "next/image";
import Link from "next/link";

import Section from "@/components/Section";
import ExperienceCard from "@/components/ExperienceCard";

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

  const skillsGameDesign = [
    "Gameplay Design",
    "Narrative Design",
    "Level Design",
    "System Design",
    "UX/UI Design",
    "Documentation",
    "Game Balance",
    "QA",
  ];

  const skillsSoftware = [
    "Unreal Engine",
    "Visual Scripting",
    "C#",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Maya",
    "Microsoft Office",
    "Excel & Spreadsheets",
    "Notion",
    "Jira",
    "Github",
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
          <p className="text-center font-semibold mb-5 text-2xl">Game Design</p>
          {/* Game Design */}
          <div className="flex flex-wrap justify-center gap-6">
            {skillsGameDesign.map((skill) => (
              <div key={skill} className="skill-box">
                {skill}
              </div>
            ))}
          </div>
          {/* Software */}
          <p className="text-center font-semibold my-5 text-2xl">Software</p>
          <div className="flex flex-wrap justify-center gap-6">
            {skillsSoftware.map((skill) => (
              <div key={skill} className="skill-box">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Section 4: Experience */}
      <Section id="experience" title="Experience">
        <div className="relative flex flex-col px-10">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-brand-red" />

          {/* Item 1 */}
          <div className="flex justify-start">
            <ExperienceCard
              align="left"
              role="Game Designer"
              place="24-Pack Studios, Spain"
              highlights={[
                "Not my War — an isometric stealth game with a team of 24 people.",
                "Designed and documented mechanics, prototyped tools.",
                "Narrative design including worldbuilding, characters and dialogues.",
              ]}
              period="2025 – Present"
            />
          </div>

          {/* Item 2 */}
          <div className="flex justify-end">
            <ExperienceCard
              align="right"
              role="Master’s degree in Game Design"
              place="U-Tad, Madrid, Spain"
              highlights={[
                "Learned game design theory and game analysis",
                "Designed and prototyped levels in Unreal Engine",
                "Developed an isometric stealth game with expert mentorship",
              ]}
              period="2024 – 2025"
            />
          </div>

          {/* Item 3 */}
          <div className="flex justify-start">
            <ExperienceCard
              align="left"
              role="Technical Designer"
              place="Hyperlab, Coahuila, México"
              highlights={[
                "VR interactive experiences: Desierto Mágico, Era de Hielo, Odisea",
                "Designed to teach about the history of nature and our ancestors",
                "Designed, prototyped, and implemented mechanics, tools, and levels",
              ]}
              period="2021 – 2024"
            />
          </div>

          {/* Item 4 */}
          <div className="flex justify-end ">
            <ExperienceCard
              align="right"
              role="Bachelor’s degree in Digital Creativity"
              place="Universidad Carolina, Coahuila, México"
              highlights={[
                "Learned design, color, animation theory, and other artistic areas such as 3D art",
                "Designed and prototyped levels in Unreal Engine",
                "Developed 4-month projects with expert mentorship",
              ]}
              period="2018 – 2021"
            />
          </div>
        </div>
      </Section>
    </main>
  );
}
