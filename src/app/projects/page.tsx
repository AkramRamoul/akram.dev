import { ScrambleText } from "@/components/scramble-text"
import { ProjectCard } from "@/components/project-card"
import { Metadata } from "next"

const projects = [
  {
    title: "google docs clone",
    role: "Jan 2025",
    description:
      "responsive and intuitive rich text editor with comprehensive text formatting tools. and real-time collaboration",
    infos: [
      "real-time collaboration with multiple users",
      "comprehensive text formatting options",
      "live cursor indicators and selection highlights",
    ],
    technologies: ["typescript", "next.js", "clerk", "convex", "tailwind css"],
    href: "https://docs-psi-azure-94.vercel.app/",
  },
  {
    title: "Form Builder",
    role: "Aug 2024",
    description:
      "dynamic form builder with drag-and-drop interface, real-time preview, and customizable field options",
    infos: [
      "drag-and-drop interface for easy form creation",
      "real-time preview of form changes",
      "customizable field options including validation rules",
    ],
    technologies: [
      "typescript",
      "next.js",
      "prisma",
      "tailwind css, PostgreSQL",
    ],
    href: "https://formbuilder-xcuz.vercel.app/",
  },
  {
    title: "Messenger Clone",
    description:
      "a real-time chat application with user authentication and media sharing",
    role: "Sep 2024",
    infos: [
      "Developed a real-time messaging system with Pusher for group and one-on-one chats.",
      "integrated user authentication and profile management",
      "enabled media sharing including images and files",
    ],
    technologies: [
      "typescript",
      "react",
      "prisma",
      "NextAuth",
      "MongoDB",
      "pusher",
      "cloudinary",
    ],
    href: "https://messenger-clone-sigma-nine.vercel.app",
  },
  {
    title: "Digital Marketplace",
    description: "Interactive E-Commerce Platform",
    role: "Nov 2024",
    infos: [
      "User-friendly marketplace with smooth navigation and interaction using Next.js and TypeScript.",
      "Developed secure file upload functionality",
      "Optimized database queries with Prisma and implemented secure user authentication using Kinde.",
    ],
    technologies: [
      "typescript",
      "next.js",
      "prisma",
      "kinde",
      "PostgreSQL",
      "zustand",
    ],
    href: "https://marketplace-orpin-two.vercel.app/",
  },
  {
    title: "Image & Design Tools",
    description:
      "A collection of lightweight, browser-based tools for designers and developers, including an SVG → PNG converter, corner radius generator, and more.",
    role: "Dec 2024",
    infos: [
      "Designed for fast, lightweight, and user-friendly workflows for developers and designers.",
      "Implemented multiple tools including SVG to PNG converter, corner radius generator.",
    ],
    technologies: ["typescript", "next.js", "tailwind css"],
    href: "https://image-tools-sandy.vercel.app/",
  },
]

export default function ProjectsPage() {
  return (
    <main className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-8 text-white">
        <span className="text-accent mr-2">*</span>
        <ScrambleText text="projects" />
      </h1>

      <p className="text-gray-400 mb-12 leading-relaxed">
        here are some of the projects i&apos;ve worked on. i love building tools
        and exploring new technologies along the way.
      </p>

      <div className="space-y-12">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </main>
  )
}

export const metadata: Metadata = {
  title: "Projects",
  description: "Some of the projects I've worked on.",
}
