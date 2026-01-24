// app/content/experiences.ts

export type Experience = {
  slug: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  projectSlugs: string[];
};

export const experiences: Experience[] = [
  {
    slug: "24-pack-studios",
    role: "Game Designer",
    company: "24-Pack Studios",
    location: "Spain",
    period: "2025 – Present",
    description:
      "Game design role focused on an isometric stealth title developed by a multidisciplinary team.",
    highlights: [
      "Worked on Not My War, an isometric stealth game with a team of 24 people",
      "Designed and documented core mechanics",
      "Prototyped internal tools and gameplay systems",
      "Led narrative design including worldbuilding, characters, and dialogues",
    ],
    projectSlugs: ["not-my-war"],
  },
];
