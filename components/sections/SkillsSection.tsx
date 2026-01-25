import Section from "@/components/Section";

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

export default function SkillsSection() {
  return (
    <Section id="skills" title="Skills">
      <div>
        <p className="text-center font-semibold mb-5 text-2xl">Game Design</p>
        <div className="flex flex-wrap justify-center gap-6">
          {skillsGameDesign.map((skill) => (
            <div key={skill} className="skill-box">
              {skill}
            </div>
          ))}
        </div>
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
  );
}
