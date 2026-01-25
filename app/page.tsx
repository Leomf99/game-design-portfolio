import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";

export default function HomePage() {
  return (
    <main>
      {/* HERO / INTRO simple (opcional) */}
      <header>{/* Header pending */}</header>

      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
    </main>
  );
}
