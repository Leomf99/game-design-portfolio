type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="px-30 py-10">
      <h2 className="text-[36px] text-center red-txt-sb ">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}
