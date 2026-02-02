export type Project = {
  slug: string;
  title: string;
  overview: string;
  contributions: Array<{
    text: string;
    details?: string[];
  }>;
  video: string;
  images: string[];
  details: {
    studio: string;
    genre: string;
    platform: string;
    developmentDuration: string;
    engine: string;
  };
};

export const projects: Project[] = [
  {
    slug: "not-my-war",
    title: "Not My War",
    overview: `Not My War is a 3D isometric stealth and exploration game where the player
                incarnates
                a small white ferret. Explore, survive, and escape an island overrun by deadly
                machines.
                I worked as a Game and Narrative Designer on this project, designing the initial
                gameplay systems and creating the story behind the game while collaborating closely
                with the art and programming teams.`,
    contributions: [
      {
        text: "Designed and documented mechanics and systems of the game:",
        details: [
          "Dialogue system in where the player is able to interact with NPCs and receive information about the story behind the survivors on the island.",
          "The data structure that was used to make the dialogue management easier for the writer to see in a JSON file and used in the game to make a more efficient iteration of the dialogues.",
        ],
      },
      {
        text: "Narrative:",
        details: [
          "The worldbuilding that supports the story that is told in the game, the factions that were at war in the past and the connections they have to the events in the game.",
          "The Main Character and side characters, to give them motivations and personalities to give the game a deeper meaning in rescuing them from the tragic end they are soon to face.",
        ],
      },
      {
        text: `Balanced core-gameplay elements such as the resource’s placement and item
                rewards from quests.`,
      },
      {
        text: `Prototyped a message system (to let the player know what to do inside the
               game).`,
      },
      {
        text: `Designed UX systems to increase gameplay feedback to the player.`,
      },
      {
        text: `Implemented many systems developed by the programming team into the levels.`,
      },
      {
        text: `Worked side by side with art and programming teams to bring all the ideas
                together.`,
      },
      {
        text: `Tested over 15 stealth encounters.`,
      },
      {
        text: `Exhaustive testing and QA of the game.`,
      },
      {
        text: `Reported and documented every bug I found to ease the programming team's job.`,
      },
    ],
    video: "/videos/NMW_gameplay_showcase.mp4",
    images: [
      "/images/nmw/nmw-1.jpg",
      "/images/nmw/nmw-2.jpg",
      "/images/nmw/nmw-3.jpg",
      "/images/nmw/nmw-4.jpg",
    ],
    details: {
      studio: "24-Pack Studios",
      genre: "Stealth, Isometric, Exploration, Adventure",
      platform: "PC",
      developmentDuration: "January - October 2025",
      engine: "Unreal Engine 5.6",
    },
  },
];
