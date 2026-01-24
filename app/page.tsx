import Section from "@/components/Section"

export default function HomePage() {
  return (
    <main>
      {/* HERO / INTRO simple (opcional) */}
      <header>
      {/* Header pending */}
      </header>

      {/* EJEMPLO 1: About */}
      <Section id="about" title="About me">
        <div className="flex justify-content-between">
          
        </div>
        <p className="text-gray-700">
          Aquí va una bio corta: quién es, en qué se especializa y qué tipo de
          juegos le interesan.
        </p>
      </Section>

      {/* EJEMPLO 2: Skills */}
      <Section id="skills" title="Skills">
        <ul className="list-disc pl-5 text-gray-700">
          <li>Mechanics design</li>
          <li>Narrative design (worldbuilding, dialogues)</li>
          <li>Prototyping & documentation</li>
        </ul>
      </Section>

      {/* TODO: tú replicas este patrón para:
          Projects, Experience, Contact
      */}
    </main>
  )
}
