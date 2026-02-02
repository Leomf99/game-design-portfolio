import type { Project } from "./types";

export const dpt82: Project = {
  slug: "dpt-82",
  title: "Dpt. 82",
  published: true,
  overview: `A VR game inspired by the Pacman game, making it a twist making it a horror game
with puzzle elements where you need to help ghosts from victims of a serial killer in
yellow to collect the keys needed to escape an apartment building.`,
  contributions: [
    {
      text:
        "Project leader in charge of a small group of people that was varied in the disciplines needed for the project, like sound 3D and 2D artist as well as taking the role of designing the mechanics of the game.",
    },
    {
      text:
        "Design and implement a procedural generated level to make every game unique:",
      details: [
        "This system used predefined rooms to populate a grid that will house randomly the objects that the player would need to collect to escape.",
      ],
    },
    {
      text:
        "Desing and implement AI characters that were an essential part of the game experience:",
      details: [
        "The enemy that roamed the halls chased the player running when it saw the player and searching for them when they escaped their sight.",
        "The NPCs that will give the player the quest of collecting the object to later give them one of the keys as they received the object.",
      ],
    },
  ],
  video: "",
  images: [],
  details: {
    studio: "Invader Institute",
    genre: "VR, Horror, Adventure",
    platform: "PC VR",
    developmentDuration: "September – December 2019",
    engine: "Unreal Engine 4.26",
  },
};
