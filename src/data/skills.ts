import dockerIcon from '../public/assets/docker.png';
import goIcon from '../public/assets/go.png';
import pythonIcon from '../public/assets/python.png';
import jenkinsIcon from '../public/assets/jenkins.png';
import jsIcon from '../public/assets/js.png';
import reactIcon from '../public/assets/react.svg';

export interface Skill {
  name: string;
  description: string;
  imagePath?: string;
  isTechnical: boolean;
  technicalImages?: string[];
}

export const technicalSkills: Skill[] = [
  {
    name: "Docker",
    description: "Containerization and orchestration for scalable applications.",
    imagePath: dockerIcon,
    isTechnical: true,
  },
  {
    name: "Go (Golang)",
    description: "High-performance backend development and concurrency patterns.",
    imagePath: goIcon,
    isTechnical: true,
  },
  {
    name: "Python",
    description: "Scripting, FastAPI development, and AI/ML implementations.",
    imagePath: pythonIcon,
    isTechnical: true,
  },
  {
    name: "Jenkins",
    description: "CI/CD pipeline automation and server management.",
    imagePath: jenkinsIcon,
    isTechnical: true,
  },
  {
    name: "JavaScript",
    description: "Full-stack web development with React and Node.js.",
    imagePath: jsIcon,
    isTechnical: true,
  },
  {
    name: "React",
    description: "Frontend development with focus on state management and performance.",
    imagePath: reactIcon,
    isTechnical: true,
  },
  {
    name: "Next.js",
    description: "Server-side rendering, SEO, and full-stack React applications.",
    isTechnical: true,
  },
  {
    name: "Bun",
    description: "Fast JavaScript runtime and build tool.",
    isTechnical: true,
  },
  {
    name: "PostgreSQL",
    description: "Relational database management and schema design.",
    isTechnical: true,
  },
  {
    name: "Django",
    description: "Python-based web framework for rapid development.",
    isTechnical: true,
  },
  {
    name: "FastAPI",
    description: "Modern, fast Python web framework for APIs.",
    isTechnical: true,
  },
  {
    name: "Prisma",
    description: "Next-generation ORM for Node.js and TypeScript.",
    isTechnical: true,
  },
  {
    name: "Git & GitHub",
    description: "Version control and collaborative development workflows.",
    isTechnical: true,
  },
  {
    name: "React Router",
    description: "Declarative routing for React applications.",
    isTechnical: true,
  },
];

export const conceptualSkills: Skill[] = [
  {
    name: "Unit Testing",
    description: "Ensuring code reliability through automated tests.",
    isTechnical: false,
  },
  {
    name: "OOP",
    description: "Object-oriented programming principles and design patterns.",
    isTechnical: false,
  },
  {
    name: "WebSockets",
    description: "Real-time, bidirectional communication between client and server.",
    isTechnical: false,
  },
  {
    name: "REST APIs",
    description: "Designing and consuming standard representational state transfer APIs.",
    isTechnical: false,
  },
  {
    name: "Database Design",
    description: "Architecting scalable and efficient database schemas.",
    isTechnical: false,
  },
  {
    name: "Data Encryption",
    description: "Implementing secure data storage and transit protocols.",
    isTechnical: false,
  },
  {
    name: "Functional Programming",
    description: "Emphasizing immutability and pure functions.",
    isTechnical: false,
  },
  {
    name: "SEO",
    description: "Search Engine Optimization and web performance.",
    isTechnical: false,
  },
  {
    name: "Agent Prompting",
    description: "Leveraging LLMs through advanced prompting techniques.",
    isTechnical: false,
  },
];
