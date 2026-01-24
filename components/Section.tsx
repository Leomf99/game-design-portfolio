type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="p-10">
      <h2 className="text-2xl text-center font-semibold">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}
