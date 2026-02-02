import Section from "@/components/Section";
import ExperienceCard from "@/components/ExperienceCard";

export default function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      <div className="relative mt-6 md:mt-20 flex flex-col gap-8 px-4 md:px-10">
        <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 bg-brand-red md:block" />

        <div className="flex w-full justify-start md:w-auto">
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

        <div className="flex w-full justify-start md:w-auto md:justify-end">
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

        <div className="flex w-full justify-start md:w-auto">
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

        <div className="flex w-full justify-start md:w-auto md:justify-end">
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
