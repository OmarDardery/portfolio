import goUdemy from "../public/certificates/go_udemy.png";
import ibmIntroDevops from "../public/certificates/ibm_intro_devops.png";
import ibmIntroAgileScrum from "../public/certificates/ibm_intro_to_agile_and_scrum.png";
import ibmIntroCloudComp from "../public/certificates/ibm_intro_to_cloud_comp.png";
import kodekloudDevopsPrereq from "../public/certificates/kodekloud_devops_prereq.png";
import kodekloudDockerBasics from "../public/certificates/kodekloud_docker_basics.png";
import kodekloudGitBasics from "../public/certificates/kodekloud_git_basics.png";
import kodekloudJenkinsBasics from "../public/certificates/kodekloud_jenkins_basics.png";
import kodekloudPython from "../public/certificates/kodekloud_python.png";
import metaFrontend from "../public/certificates/meta_frontend_course.png";
import metaGit from "../public/certificates/meta_git.png";
import metaHtmlCss from "../public/certificates/meta_html_css.png";
import metaIntroDatabases from "../public/certificates/meta_intro_to_databases_for_backend_dev.png";
import metaJavaScript from "../public/certificates/meta_js_course.png";
import metaPython from "../public/certificates/meta_python.png";
import metaReactBasics from "../public/certificates/meta_react_basics.png";
import metaReactSpecialization from "../public/certificates/meta_react_specialization.jpeg";
import uciConcurrencyGo from "../public/certificates/uci_conc_in_go.png";
import uciFunctionsMethodsInterfacesGo from "../public/certificates/uci_functions_methods_and_interfaces_in_go.png";
import uciGettingStartedGo from "../public/certificates/uci_getting_started_with_go.png";
import uciGoSpecialization from "../public/certificates/uci_specialization_programming_with_google_go.png";

export interface Course {
  image: string;
  title: string;
  provider: string;
  description: string;
  skills: string[];
  type: "course" | "specialization";
}

export const courses: Course[] = [
  {
    image: goUdemy,
    title: "Go Programming",
    provider: "Udemy",
    description: "Fundamentals of Go syntax, types, and core tooling.",
    skills: ["Go (Golang)"],
    type: "course",
  },
  {
    image: ibmIntroDevops,
    title: "Introduction to DevOps",
    provider: "IBM",
    description: "Overview of DevOps culture, CI/CD, and automation basics.",
    skills: ["Docker", "Jenkins", "Git & GitHub"],
    type: "course",
  },
  {
    image: ibmIntroAgileScrum,
    title: "Introduction to Agile and Scrum",
    provider: "IBM",
    description: "Agile values, Scrum roles, and iterative delivery practices.",
    skills: [],
    type: "course",
  },
  {
    image: ibmIntroCloudComp,
    title: "Introduction to Cloud Computing",
    provider: "IBM",
    description: "Cloud service models, deployment types, and core concepts.",
    skills: [],
    type: "course",
  },
  {
    image: kodekloudDevopsPrereq,
    title: "DevOps Prerequisites",
    provider: "KodeKloud",
    description: "Linux, networking, and tooling basics for DevOps learners.",
    skills: ["Docker", "Git & GitHub"],
    type: "course",
  },
  {
    image: kodekloudDockerBasics,
    title: "Docker Basics for DevOps",
    provider: "KodeKloud",
    description: "Container images, Dockerfiles, and core CLI workflows.",
    skills: ["Docker"],
    type: "course",
  },
  {
    image: kodekloudGitBasics,
    title: "Git Basics",
    provider: "KodeKloud",
    description: "Version control fundamentals, branches, and collaboration.",
    skills: ["Git & GitHub"],
    type: "course",
  },
  {
    image: kodekloudJenkinsBasics,
    title: "Jenkins Basics",
    provider: "KodeKloud",
    description: "Pipeline fundamentals, jobs, and CI concepts.",
    skills: ["Jenkins"],
    type: "course",
  },
  {
    image: kodekloudPython,
    title: "Python Basics",
    provider: "KodeKloud",
    description: "Python fundamentals for scripting and automation.",
    skills: ["Python"],
    type: "course",
  },
  {
    image: metaReactSpecialization,
    title: "Meta React Specialization",
    provider: "Meta",
    description:
      "Multi-course specialization covering React fundamentals through applied development.",
    skills: ["React", "JavaScript"],
    type: "specialization",
  },
  {
    image: metaFrontend,
    title: "Introduction to Front-End Development",
    provider: "Meta",
    description: "HTML, CSS, and JavaScript foundations for frontend work.",
    skills: ["JavaScript", "React"],
    type: "course",
  },
  {
    image: metaGit,
    title: "Version Control",
    provider: "Meta",
    description: "Git workflows, branching, and collaboration.",
    skills: ["Git & GitHub"],
    type: "course",
  },
  {
    image: metaHtmlCss,
    title: "HTML and CSS in Depth",
    provider: "Meta",
    description: "Modern HTML structure and CSS layout fundamentals.",
    skills: [],
    type: "course",
  },
  {
    image: metaIntroDatabases,
    title: "Introduction to Databases for Back-End Development",
    provider: "Meta",
    description: "Relational database concepts and SQL basics.",
    skills: ["PostgreSQL", "Database Design"],
    type: "course",
  },
  {
    image: metaJavaScript,
    title: "Programming with JavaScript",
    provider: "Meta",
    description: "Core JavaScript syntax, functions, and DOM basics.",
    skills: ["JavaScript"],
    type: "course",
  },
  {
    image: metaPython,
    title: "Programming in Python",
    provider: "Meta",
    description: "Python fundamentals for general programming.",
    skills: ["Python"],
    type: "course",
  },
  {
    image: metaReactBasics,
    title: "React Basics",
    provider: "Meta",
    description: "Components, props, state, and basic hooks.",
    skills: ["React", "JavaScript"],
    type: "course",
  },
  {
    image: uciConcurrencyGo,
    title: "Concurrency in Go",
    provider: "University of California, Irvine",
    description: "Goroutines, channels, and concurrency patterns.",
    skills: ["Go (Golang)"],
    type: "course",
  },
  {
    image: uciFunctionsMethodsInterfacesGo,
    title: "Functions, Methods, and Interfaces in Go",
    provider: "University of California, Irvine",
    description: "Core Go abstractions and method receivers.",
    skills: ["Go (Golang)", "OOP"],
    type: "course",
  },
  {
    image: uciGettingStartedGo,
    title: "Getting Started with Go",
    provider: "University of California, Irvine",
    description: "Go toolchain setup and basic language syntax.",
    skills: ["Go (Golang)"],
    type: "course",
  },
  {
    image: uciGoSpecialization,
    title: "Programming with Google Go (Specialization)",
    provider: "University of California, Irvine",
    description: "Multi-course specialization in Go programming.",
    skills: ["Go (Golang)"],
    type: "specialization",
  },
];
