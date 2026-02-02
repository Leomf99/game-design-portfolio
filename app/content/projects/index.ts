import { imaginacionFgs } from "./imaginacion-fgs";
import { notMyWar } from "./not-my-war";
import { desiertoMagico } from "./desierto-magico";

const allProjects = [notMyWar, imaginacionFgs, desiertoMagico];

export const projects = allProjects.filter((project) => project.published);
