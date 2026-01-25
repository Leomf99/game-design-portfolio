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
    <div
      className={`exp-container w-[45%] ${
        align === "left" ? "text-left pr-8" : "text-left pl-8"
      }`}
    >
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
