import Image from "next/image";

import Section from "@/components/Section";

export default function AboutSection() {
  return (
    <Section id="about" title="About me">
      <div className="flex flex-col justify-center gap-5 items-center md:gap-20 md:flex-row">
        <div className="about-img-box">
          <Image src="/images/aboutme.jpg" alt="About" fill priority />
        </div>
        <p className="w-[90%] md:w-[60%] text-center">
          Hi! Alexis Islas Valdés here. I'm an aspiring Game Designer from
          Mexico, with experience in projects with various scopes using Unreal
          Engine 5. I'm very systematic person that enjoys overcoming
          challenges, analyzing the situation and coming up with creative
          solutions. <br /> <br />I love games for the way they lend themselves
          to tell stories unlike any other media, a different way to connect
          with people, which I strive to reflect on my projects. When I had to
          choose a career, after an introspection, I decided that I wanted to
          create stories and experiences like the ones that left a mark on me.
          This led me to explore the creative industry where I discovered that
          the part that I enjoyed the most was designing games, and thus the
          aspiration to become a Game Designer began.
        </p>
      </div>
    </Section>
  );
}
