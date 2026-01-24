import { notFound } from "next/navigation";

import { experiences } from "@/app/content/experiences";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ExperienceSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const experience = experiences.find((item) => item.slug === slug);

  if (!experience) {
    notFound();
  }

  return (
    <main>
      <h1>{experience.role}</h1>
      <p>
        {experience.company} · {experience.location}
      </p>
      <p>{experience.period}</p>
      <p>{experience.description}</p>
      <ul>
        {experience.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </main>
  );
}

export async function generateStaticParams() {
  return experiences.map((experience) => ({ slug: experience.slug }));
}
