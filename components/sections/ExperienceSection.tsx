import Section from "@/components/Section";
import ExperienceCard from "@/components/ExperienceCard";

export default function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      <div className="relative flex flex-col px-10 mt-20">
        <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-brand-red" />

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

        <div className="flex justify-end">
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
  );
}
