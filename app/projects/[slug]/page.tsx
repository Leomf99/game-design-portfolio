import { notFound } from "next/navigation";

import { projects } from "@/app/content/projects";
import NavBar from "@/components/NavBar";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project || !project.published) {
    notFound();
  }

  return (
    <main className="px-4 py-12 pt-20 md:px-10 lg:px-20">
      <NavBar
        showAbout={false}
        showProjects={false}
        showSkills={false}
        showExperience={false}
      />
      <h1 className="mt-10 text-center text-3xl font-bold md:text-4xl">
        {project.title}
      </h1>
      <h2 className="mt-10 mb-6 text-center text-xl font-semibold md:text-[26px]">
        Overview
      </h2>
      <div className="mb-6 text-center">{project.overview}</div>
      {project.video && (
        <div className="mb-6 flex h-90 w-full justify-center">
          <video
            className="w-full rounded-md"
            src={project.video}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      )}
      <div className="mt-10 mb-6 text-center text-xl font-semibold md:text-[26px]">
        Contributions
      </div>
      <ul className="mt-2 list-disc space-y-4 pl-5">
        {project.contributions.map((contribution) => (
          <li key={contribution.text}>
            <p>{contribution.text}</p>
            {contribution.details && contribution.details.length > 0 && (
              <ul className="mt-2 list-disc space-y-2 pl-5 text-black/80">
                {contribution.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <div className="-mx-4 my-10 space-y-6 md:-mx-10 lg:-mx-20">
        {project.images.length > 0 && (
          <div className="carousel">
            <div className="carousel__track">
              {[...project.images, ...project.images].map((src, index) => (
                <img
                  key={`${src}-${index}`}
                  className="carousel__img"
                  src={src}
                  alt={`${project.title} screenshot`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="mb-6 text-center text-xl font-semibold md:text-[26px]">
        Project Details
      </div>
      <ul className="mt-2 space-y-2">
        <li>
          <span className="font-semibold">Studio:</span>{" "}
          {project.details.studio}
        </li>
        <li>
          <span className="font-semibold">Genre:</span> {project.details.genre}
        </li>
        <li>
          <span className="font-semibold">Platform:</span>{" "}
          {project.details.platform}
        </li>
        <li>
          <span className="font-semibold">Development duration:</span>{" "}
          {project.details.developmentDuration}
        </li>
        <li>
          <span className="font-semibold">Engine:</span>{" "}
          {project.details.engine}
        </li>
      </ul>
    </main>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
