import type { Project } from "./types";

export const eraDeHielo: Project = {
  slug: "era-de-hielo",
  title: "Era de Hielo",
  published: true,
  overview: `Era de Hielo is an educational Virtual Reality experience that explores and enacts our
ancestors’ activities during the Paleolithic period in Mexico using interactive systems to
immerse the user into the experience.`,
  contributions: [
    {
      text: "Designed and documented mechanics and systems of the experience:",
      details: [
        "Simple friction system to use sticks to light a bonfire.",
        "System to use the controller to paint into a wall using the particle system of Unreal Engine to make the users able to paint whatever they wanted in the experience.",
        "A bow-like system to use an atlatl to shoot arrows at static and moving targets with an arch visualizer to know the direction of the arrow.",
      ],
    },
    {
      text: "Designed the level challenge for the experiences shooting and assisted the artists to decorate the levels.",
    },
    {
      text: "Prototyped a more complex throwing system that emulated the throwing of the arrow in a more faithful way, using the motion to calculate velocity and direction.",
    },
    {
      text: "Alongside the throwing as it was difficult to aim correctly, an aim assist was also tested that slightly adjusted the direction of the projectile if it was in an acceptable threshold to hit the target.",
    },
    {
      text: "Worked with artists to ease the implementation of the artwork, such as 3D models, textures, and other 2D art, into the engine.",
    },
  ],
  video: "/videos/Hielo.mp4",
  images: [
    "/images/hielo/EraDeHielo-1.webp",
    "/images/hielo/EraDeHielo-2.webp",
    "/images/hielo/EraDeHielo-3.webp",
    "/images/hielo/EraDeHielo-4.webp",
  ],
  details: {
    studio: "Hyperlab",
    genre: "VR, Educational, Adventure",
    platform: "Meta Quest 2",
    developmentDuration: "March 2022 – June 2022",
    engine: "Unreal Engine 5.2",
  },
};
