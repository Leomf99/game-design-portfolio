import { notFound } from "next/navigation";

import { projects } from "@/app/content/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="px-20 py-12">
      <h1 className="text-4xl text-center font-bold  ">{project.title}</h1>
      <h2 className="mt-10 mb-6 text-[26px] font-semibold text-center">
        Overview
      </h2>
      <div className="mb-6 text-center">{project.overview}</div>
      <div className="mb-6 flex justify-center h-90 w-full">
        <video
          className="w-full rounded-md"
          src={project.video}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      <div className="mt-10 mb-6 text-[26px] font-semibold text-center">
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
      <div className="-mx-20 space-y-6 my-10">
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
      <div className="mb-6 text-[26px] font-semibold text-center">
        Project Details
      </div>
      <ul className="mt-2 space-y-2">
        <li>
          <span className="font-semibold">Studio:</span>{" "}
          {project.details.studio}
        </li>
        <li>
          <span className="font-semibold">Genre:</span>{" "}
          {project.details.genre}
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
