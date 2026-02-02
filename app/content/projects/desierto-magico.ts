import type { Project } from "./types";

export const desiertoMagico: Project = {
  slug: "desierto-magico",
  title: "Desierto Mágico",
  published: true,
  overview: `Desierto Mágico is an educational Virtual Reality experience that explores biodiversity
from the Coahuila desert using intuitive game mechanics to create activities that help
create awareness about the impact of our actions on the environment.`,
  contributions: [
    {
      text: "Designed and documented mechanics and systems of the experience:",
      details: [
        "Tweaked the system to control the speed and direction on a spline to move the user into different locations.",
        "A small system to use some magic to shoot at static in two different activities to go along with the narrative of the experience.",
        "A procedural system to create a track to fly at the back of an eagle through a canyon as well as to collect magical stones and going through rings to make the experience more interactive.",
        "A system to control the direction of the eagle in a 2D plane while it moves through a spline as the last part of the experience.",
      ],
    },
    {
      text: "Designed the levels and challenges for the experiences.",
    },
    {
      text: "Created tools to help artists implement the artwork into the engine and levels in a more easy way.",
    },
    {
      text: "Started the optimization of the pipeline we used in the studio to make modular and easy to tweak blueprints in Unreal Engine.",
    },
  ],
  video: "",
  images: [
    "/images/desierto/desierto-1.jpg",
    "/images/desierto/desierto-2.jpg",
    "/images/desierto/desierto-3.jpg",
    "/images/desierto/desierto-4.jpg",
  ],
  details: {
    studio: "Hyperlab",
    genre: "VR, Educational, Adventure",
    platform: "Meta Quest 2",
    developmentDuration: "October 2022 – April 2023",
    engine: "Unreal Engine 5.2",
  },
};
