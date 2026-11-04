export interface EducationEntry {
  institution: string;
  program: string;
  location: string;
  dates: string;
  highlights?: string[];
}

export interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  dates: string;
  bullets: string[];
}

export const education: EducationEntry[] = [
  {
    institution: "Egypt University of Informatics",
    program: "Bachelor of Computer Engineering",
    location: "New Administrative Capital, Egypt",
    dates: "Oct. 2023 – Present",
    highlights: ["GPA: 3.71"],
  },
  {
    institution: "University of California, Irvine (Coursera Specialization)",
    program: "Programming with Google Go Specialization",
    location: "Remote",
    dates: "Jan. 2026",
  },
];

export const experiences: ExperienceEntry[] = [
  {
    role: "Full-Stack Intern & Developer",
    company: "Nfrtix",
    location: "Cairo, Egypt",
    dates: "May 2025 – Jul. 2025",
    bullets: [
      "Built backend features to support equipment telemetry and analytics.",
      "Improved how telemetry data was retrieved for analysis.",
      "Made hierarchical equipment data easier to explore through visual frontend pages.",
    ],
  },
  {
    role: "Full-Stack Intern",
    company: "ITIDA",
    location: "New Administrative Capital, Egypt",
    dates: "Dec. 2025 – Jan. 2026",
    bullets: [
      "Built features that help people book and manage equipment.",
      "Set up a consistent development environment for the application and its services.",
      "Worked with version control and tested changes before integrating them.",
    ],
  },
];
