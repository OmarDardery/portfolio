import { technicalSkills, conceptualSkills } from "./skills";
import { projects } from "./projects";

export const portfolioData = {
  personalInfo: {
    name: "Omar El-Dardery",
    role: "Full-Stack Developer",
    email: "oadardery@gmail.com",
    tagline: "Useful software, simpler systems, and thoughtfully directed AI.",
  },
  technicalSkills,
  conceptualSkills,
  projects,
};

export type { Skill } from "./skills";
export type { Project } from "./projects";
export type { Course } from "./courses";
export { courses } from "./courses";
export type { EducationEntry, ExperienceEntry } from "./resume";
export { education, experiences } from "./resume";
