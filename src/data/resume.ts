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
      "Developed RESTful backend services in Django.",
      "Integrated PostgreSQL queries and optimized data retrieval for telemetry analytics.",
      "Built frontend pages using recursive algorithms to visualize tree-like components from the database.",
    ],
  },
  {
    role: "Full-Stack Intern",
    company: "ITIDA",
    location: "New Administrative Capital, Egypt",
    dates: "Dec. 2025 – Jan. 2026",
    bullets: [
      "Developed full-stack features for an equipment booking and management system using React and Node.js.",
      "Used Docker Compose to containerize and run the full-stack environment.",
      "Used Git and GitHub branches to build and test features before merging into production.",
    ],
  },
];
