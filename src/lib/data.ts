import { TeamMemberSchema, ProjectSchema } from "./types";
import teamData from "../../data/team.json";
import projectsData from "../../data/projects.json";

export const getTeam = () => {
  const parsed = TeamMemberSchema.array().safeParse(teamData);
  if (parsed.success) {
    return parsed.data;
  } else {
    console.error("Failed to parse team data:", parsed.error);
    return [];
  }
};

export const getProjects = () => {
  const parsed = ProjectSchema.array().safeParse(projectsData);
  if (parsed.success) {
    return parsed.data;
  } else {
    console.error("Failed to parse projects data:", parsed.error);
    return [];
  }
};
