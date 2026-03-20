import solvex0 from '../public/projects/solvex.png';
import solvex1 from '../public/projects/solvex1.png';
import solvex2 from '../public/projects/solvex2.png';
import solvex3 from '../public/projects/solvex3.png';
import solvex4 from '../public/projects/solvex4.png';
import solvex5 from '../public/projects/solvex5.png';
import solvex6 from '../public/projects/solvex6.png';

import engden0 from '../public/projects/engden0.png';
import engden1 from '../public/projects/engden1.png';
import engden2 from '../public/projects/engden2.png';
import engden3 from '../public/projects/engden3.png';
import engden4 from '../public/projects/engden4.png';
import engden5 from '../public/projects/engden5.png';

import typologyden0 from '../public/projects/typologyden.png';
import typologyden1 from '../public/projects/typologyden1.png';
import typologyden2 from '../public/projects/typologyden2.png';
// typologyden3 is missing in the public/projects folder
import typologyden4 from '../public/projects/typologyden4.png';
import typologyden5 from '../public/projects/typologyden5.png';

import homelab0 from '../public/projects/homelab_proxmox_playground.png';
import homelab1 from '../public/projects/homelab_cloudflare.png';
import homelab2 from '../public/projects/homelab_omv_backup.png';

import gdg0 from '../public/projects/gdg_golang_workshop_instructor.png';
import objectDetection0 from '../public/projects/object_detection_application.png';

export interface Project {
  title: string;
  description: string;
  why: string;
  usefulness: string;
  detailedAnalysis: string[];
  skills: string[];
  imagePaths: string[];
  links: {
    label: string;
    url: string;
    type: 'github' | 'linkedin' | 'website' | 'other';
  }[];
}

export const projects: Project[] = [
  {
    title: "Solvex",
    description: "A university club platform connecting professors with students for internships and research opportunities.",
    why: "I started with React plus Go, but maintaining Docker Compose and a VM setup became heavy. I moved to Next.js because Vercel hosting is simpler and the project is easier to maintain long-term after graduation. Cloudflare made domain and tunneling management faster, and Resend had the best free tier for custom-domain email delivery with better inbox placement.",
    usefulness: "It creates a direct bridge between students and professors for internships, research opportunities, and collaboration, while making communication and visibility more reliable.",
    detailedAnalysis: [
      "Migrated the architecture from React plus Go to a Next.js-first stack to reduce operational overhead and speed up iteration.",
      "Handled Prisma with TypeScript and managed database migrations to keep schema changes controlled across releases.",
      "Implemented SEO-focused structure for better discoverability and stronger organic reach for the club.",
      "Prioritized fast delivery without sacrificing maintainability, with a design ready to scale as the platform grows."
    ],
    skills: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS", "SEO", "Resend", "Cloudflare", "TypeScript"],
    imagePaths: [solvex0, solvex1, solvex2, solvex3, solvex4, solvex5, solvex6],
    links: [
      {
        label: "Live Site",
        url: "https://www.solvex-eui.org/",
        type: 'website'
      }
    ],
  },
  {
    title: "EngDen",
    description: "University student learning platform built with Django and React. Features include secure login with university email, topic-based MCQs monitored by AI for content quality, and self-hosted via Cloudflare tunneling.",
    why: "Django gave me a secure and reliable backend foundation for authentication and content workflows, while React kept the frontend flexible. Cloudflare tunneling made self-hosting practical with safer exposure and easier routing.",
    usefulness: "Helps students keep a structured database of past questions, quizzes, and papers, with a fast MCQ workflow for daily study and revision.",
    detailedAnalysis: [
      "Built an MCQ-centric study flow so students can review subjects quickly with focused sessions.",
      "Implemented secure university-email oriented access control to keep the platform trusted and scoped.",
      "Integrated AI-assisted content monitoring to improve question quality and reduce noisy material.",
      "Designed the system around scalable data organization so new subjects and content can be added cleanly."
    ],
    skills: ["Django", "React", "PostgreSQL", "Cloudinary", "SendGrid", "Cloudflare"],
    imagePaths: [engden0, engden1, engden2, engden3, engden4, engden5],
    links: [
      {
        label: "GitHub Repo",
        url: "https://github.com/OmarDardery/student-database",
        type: 'github'
      },
      {
        label: "Live Site",
        url: "https://engden.dardery.work",
        type: 'website'
      }
    ],
  },
  {
    title: "TypologyDen",
    description: "MBTI-based job recommendation system using Jungian cognitive functions. Features a bingo-style test and Gemini API to verify user consistency and provide weighted job recommendations.",
    why: "I chose React with Supabase to move quickly while keeping the stack clean and maintainable. Gemini API added an AI verification layer to improve response consistency and reduce noisy personality outcomes.",
    usefulness: "It helps students understand their MBTI through Jungian cognitive functions and suggests careers aligned with their cognitive stack.",
    detailedAnalysis: [
      "Designed the personality flow around Jungian cognitive functions instead of surface-level MBTI labels.",
      "Built a weighted recommendation model to map personality patterns into job-fit suggestions.",
      "Added AI-backed consistency checks to catch contradictions and improve result confidence.",
      "Kept the system modular so scoring logic and recommendations can scale with future data."
    ],
    skills: ["React", "Supabase", "Gemini API", "Tailwind CSS"],
    imagePaths: [typologyden0, typologyden1, typologyden2, typologyden4, typologyden5],
    links: [
      {
        label: "GitHub Repo",
        url: "https://github.com/OmarDardery/typologyden",
        type: 'github'
      },
      {
        label: "Live Site",
        url: "https://typologyden.dardery.work",
        type: 'website'
      }
    ],
  },
  {
    title: "Homelab & Proxmox",
    description: "Self-hosted bare-metal hypervisor using Proxmox on an old laptop. Hosted services include Minecraft servers, Jenkins, AI object detection, and OMV for Linux backups.",
    why: "I used Proxmox because it is one of the best free open-source hypervisors for hands-on infrastructure learning. Pairing Docker and lightweight containerized services improved resource efficiency and made deployments simpler to manage.",
    usefulness: "Acts as a real-world playground for CI/CD, backup strategy, networking, and self-hosted AI services while keeping costs low.",
    detailedAnalysis: [
      "Set up a bare-metal Proxmox environment on older hardware to maximize learning per resource.",
      "Deployed containerized services to test operational patterns similar to production systems.",
      "Used Jenkins to practice automated build and deployment flows.",
      "Integrated backup and service isolation workflows to improve reliability and recovery readiness."
    ],
    skills: ["Proxmox", "Docker", "Jenkins", "FastAPI", "Cloudflare", "OMV"],
    imagePaths: [homelab0, homelab1, homelab2],
    links: [
      {
        label: "Post: Cloud Homelab",
        url: "https://www.linkedin.com/posts/omar-el-dardery-96924b2a2_ive-spent-these-past-two-weeks-on-the-cloud-activity-7429954524930310144-XcIS",
        type: 'linkedin'
      },
      {
        label: "Post: Proxmox Workflow",
        url: "https://www.linkedin.com/posts/omar-el-dardery-96924b2a2_ever-had-issues-dualbooting-linux-distros-activity-7438356337203376128-dSKc",
        type: 'linkedin'
      }
    ],
  },
  {
    title: "GDG Golang Workshop",
    description: "DevOps and Backend focused workshop on Go fundamentals. Covered Linux/Git fundamentals, Go syntax, concurrency patterns, and clean code practices (OOP, interfaces).",
    why: "I focused on Go because it is practical for backend performance and modern infrastructure tooling. Starting with Git and Linux basics made the workshop accessible for students with mixed backgrounds.",
    usefulness: "The workshop gave students a practical path into backend and DevOps by combining fundamentals with production-oriented thinking.",
    detailedAnalysis: [
      "Taught GitHub and Git workflows so participants could collaborate with real version-control habits.",
      "Covered core Go syntax and structuring patterns for maintainable code.",
      "Introduced concurrency with waitgroups and resource management principles.",
      "Connected language concepts to scalability and system design thinking for real-world backend work."
    ],
    skills: ["Go (Golang)", "Linux", "Git", "Concurrency"],
    imagePaths: [gdg0],
    links: [
      {
        label: "LinkedIn Post",
        url: "https://www.linkedin.com/posts/omar-el-dardery-96924b2a2_ive-spent-these-past-two-weeks-on-the-cloud-activity-7429954524930310144-XcIS",
        type: 'linkedin'
      }
    ],
  },
  {
    title: "Object Detection App",
    description: "Real-time object detection application using FastAPI and YOLOv8 via WebSockets for low-latency video processing.",
    why: "FastAPI with WebSockets gave me a clean path for low-latency streaming, while YOLOv8 offered strong practical detection performance for real-time use cases.",
    usefulness: "Provides accessible real-time computer vision through a web interface, useful for experimentation and deployment-oriented AI workflows.",
    detailedAnalysis: [
      "Built a real-time inference pipeline that streams detections with minimal delay.",
      "Connected backend inference and frontend rendering through WebSocket transport.",
      "Focused on delivery speed and maintainable structure to support future model and feature upgrades.",
      "Applied system design trade-offs between throughput, latency, and deployment simplicity."
    ],
    skills: ["FastAPI", "YOLOv8", "WebSockets", "Python"],
    imagePaths: [objectDetection0],
    links: [
      {
        label: "GitHub Repo",
        url: "https://github.com/OmarDardery/object-detection-backend",
        type: 'github'
      }
    ],
  },
];
