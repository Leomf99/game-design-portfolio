import type { Project } from "./types";

export const imaginacionFgs: Project = {
  slug: "imaginacion-fgs",
  title: "Imaginación FGS",
  published: false,
  overview: `Imaginación FGS is an interactive VR experience where you learn about an important
icon from Mexican history and do activities related to the songs he wrote, all while
interacting and playing with activities related to three of his songs to make learning a
more enjoyable experience.`,
  contributions: [
    {
      text: "Designed and documented mechanics and systems of the experience:",
      details: [
        "Refined the system to control the speed and direction on a spline to move the user into different locations balancing them to reduce motion sickness on the VR headset.",
        "A small system to use a toy gun to shoot at static and moving targets in a wild west attraction.",
        "A system to change different parts of a doll, such as the base doll, the hair, and clothes, to finalize the experience with a unique touch.",
      ],
    },
    {
      text:
        "Designed the levels and challenges for the experiences and assisted the artists to decorate the levels.",
    },
    {
      text:
        "Refined and optimized the pipeline we used in the studio to make modular and easy to tweak blueprints in Unreal Engine.",
    },
    {
      text:
        "Worked with artists to ease the implementation of the artwork, such as 3D models, textures, and other 2D art, into the engine.",
    },
  ],
  video: "",
  images: [],
  details: {
    studio: "Hyperlab",
    genre: "VR, Educational, Adventure",
    platform: "Meta Quest 2",
    developmentDuration: "October 2023 – March 2024",
    engine: "Unreal Engine 5.2",
  },
};
