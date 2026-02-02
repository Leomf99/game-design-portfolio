import type { Project } from "./types";

export const odisea: Project = {
  slug: "odisea",
  title: "Odisea",
  published: true,
  overview: `Odisea is an interactive VR experience where you travel to the past to learn about the
dinosaurs that lived in Coahuila. This project used a safari type experience to make this
happen while at the same time using some interactive features to make the people
engage more with the activity.`,
  contributions: [
    {
      text: "Designed and documented mechanics and systems of the experience:",
      details: [
        "Simple AI system to make some dinosaurs get to feed when the users threw food at them.",
        "System to control the speed and direction on a spline to move the user into different locations balancing them to reduce motion sickness on the VR headset.",
        "Small system that used a futuristic device to shoot a flare and alert flying dinosaurs to make them fly.",
        "System that activated a flare that made a crowd of dinosaurs flee into a direction and disappear.",
      ],
    },
    {
      text:
        "Reorganized the blueprints that were used in a previous version of the project to make them more comprehensive for future usage and updates that came along with the development.",
    },
    {
      text:
        "Optimized the game to make the transition from a PC VR format into the Meta Quest 2 format that needed less load to function properly.",
    },
    {
      text:
        "Designed the levels and challenges for the experiences and assisted the artists to decorate the levels.",
    },
    {
      text:
        "Refined the pipeline the original experience used to make it easier to tweak blueprints in Unreal Engine.",
    },
  ],
  video: "",
  images: [],
  details: {
    studio: "Hyperlab",
    genre: "VR, Educational, Adventure",
    platform: "Meta Quest 2",
    developmentDuration: "September 2021 – September 2022",
    engine: "Unreal Engine 5.2",
  },
};
