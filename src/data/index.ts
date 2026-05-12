import { technicalSkills, conceptualSkills } from "./skills";
import { projects } from "./projects";

export const portfolioData = {
  personalInfo: {
    name: "Omar El-Dardery",
    role: "Full Stack & DevOps Engineer",
    email: "oadardery@gmail.com",
    tagline: "Building scalable web solutions and self-hosted infrastructure.",
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
