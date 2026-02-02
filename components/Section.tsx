type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="px-4 py-12 md:px-10 lg:px-20">
      <h2 className="text-[28px] text-center red-txt-sb md:text-[36px]">
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}
