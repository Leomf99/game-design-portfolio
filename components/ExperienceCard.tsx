type ExperienceCardProps = {
  role: string;
  place: string;
  highlights: string[];
  period: string;
  align: "left" | "right";
};

export default function ExperienceCard({
  role,
  place,
  highlights,
  period,
  align,
}: ExperienceCardProps) {
  return (
    <div className="exp-container w-full md:w-[45%]">
      <span className="font-bold">{role}</span>
      <br />
      <span>{place}</span>

      <ul className="list-disc pl-8">
        {highlights.map((text) => (
          <li key={text}>{text}</li>
        ))}
      </ul>

      <br />
      <span>{period}</span>
    </div>
  );
}
