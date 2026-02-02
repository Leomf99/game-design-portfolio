type ProjectCardProps = {
  title: string;
  date: string;
  responsabilities: string[];
  image: string;
  link: "left" | "right";
};

export default function ExperienceCard({
  title,
  date,
  responsabilities,
  image,
  link,
}: ProjectCardProps) {
  return <div></div>;
}
