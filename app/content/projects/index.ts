import { notMyWar } from "./not-my-war";
import { desiertoMagico } from "./desierto-magico";
import { imaginacionFgs } from "./imaginacion-fgs";
import { eraDeHielo } from "./era-de-hielo";
import { odisea } from "./odisea";
import { dpt82 } from "./dpt-82";

const allProjects = [
  notMyWar,
  imaginacionFgs,
  desiertoMagico,
  eraDeHielo,
  odisea,
  dpt82,
];

export const projects = allProjects.filter((project) => project.published);
