import { notMyWar } from "./not-my-war";
import { imaginacionFgs } from "./imaginacion-fgs";

const allProjects = [notMyWar, imaginacionFgs];

export const projects = allProjects.filter((project) => project.published);
