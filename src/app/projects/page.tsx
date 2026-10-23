import { ScrambleText } from "@/components/scramble-text"
import { ProjectCard } from "@/components/project-card"
import { Metadata } from "next"

const projects = [
  {
    title: "Clinic Management System",
    role: "Freelance · Commercial product",
    period: "Feb 2026",
    description:
      "A commercial desktop application built with Electron and React, sold to and used daily by several private clinics to replace paper-based management and streamline clinical workflows.",
    infos: [
      "Took the product from requirements to delivery for paying clients, working directly with doctors and clinic staff",
      "Replaced paper records across entire clinical workflows, eliminating data loss and improving patient tracking",
      "Electronic health records with full consultation history per patient",
      "Digital prescription system with reusable templates for faster, more accurate prescribing",
      "Financial module for real-time tracking of clinic expenses, revenue, and billing",
      "Offline-first desktop architecture with a local LibSQL database for reliability without internet",
    ],
    technologies: [
      "Electron",
      "TypeScript",
      "React",
      "Next.js",
      "Drizzle ORM",
      "LibSQL",
      "Tailwind CSS",
    ],
  },
  {
    title: "Multi-Tenant Store",
    role: "Nov 2025",
    description:
      "A multi-tenant e-commerce platform that lets anyone create and run their own independent online store, with built-in payments and payouts.",
    infos: [
      "Multi-tenant architecture with data isolation between independent merchant stores",
      "Dynamic subdomain routing, giving each merchant a personalized storefront",
      "Stripe Connect integration for secure multi-party payments and automated payouts",
      "Merchant dashboard for product management, order tracking, and store configuration",
    ],
    technologies: [
      "Next.js",
      "React",
      "Stripe Connect",
      "Payload CMS",
      "TypeScript",
      "Tailwind CSS",
    ],
    href: "https://ecommerce-ecru-nu-50.vercel.app/",
  },
  {
    title: "Online Docs Editor",
    role: "Jan 2025",
    description:
      "A Google Docs-style collaborative rich text editor with real-time multi-user editing, comments, and team workspaces.",
    infos: [
      "Real-time collaboration with live cursors and selection highlights",
      "Comments, mentions, and a notification system for document updates",
      "Organization workspaces with secure invitation-based access",
      "Rich formatting tools, margin controls, and formatting preservation",
    ],
    technologies: [
      "TypeScript",
      "Next.js",
      "Clerk",
      "Convex",
      "Shadcn UI",
      "Tailwind CSS",
    ],
    href: "https://docs-psi-azure-94.vercel.app/",
  },
  {
    title: "Messaging App",
    role: "Sep 2024",
    description:
      "A real-time chat application for one-on-one and group conversations with authentication and media sharing.",
    infos: [
      "Real-time messaging with Pusher for group and one-on-one chats",
      "Google sign-in via NextAuth with profile management",
      "Online/offline presence and read receipts",
      "Image and file sharing through Cloudinary CDN",
      "Validated forms with React Hook Form and real-time error feedback",
    ],
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Prisma",
      "NextAuth",
      "MongoDB",
      "Pusher",
      "Cloudinary",
    ],
    href: "https://realtime-chat-app-1-alpha.vercel.app",
  },
  {
    title: "Digital Marketplace",
    role: "Nov 2024",
    description:
      "An e-commerce marketplace for buying and selling digital products, with secure file uploads and authentication.",
    infos: [
      "Smooth, responsive marketplace UI built with Next.js and TypeScript",
      "Secure file upload and delivery for digital products",
      "Optimized database queries with Prisma and secure authentication with Kinde",
      "Client-side cart state management with Zustand",
    ],
    technologies: [
      "TypeScript",
      "Next.js",
      "Prisma",
      "Kinde",
      "PostgreSQL",
      "Zustand",
    ],
    href: "https://marketplace-orpin-two.vercel.app/",
  },
  {
    title: "Form Builder",
    role: "Aug 2024",
    description:
      "A dynamic form builder with a drag-and-drop interface, real-time preview, and customizable fields.",
    infos: [
      "Drag-and-drop interface for building forms without code",
      "Real-time preview of every change",
      "Customizable field options including validation rules",
    ],
    technologies: [
      "TypeScript",
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    href: "https://formbuilder-xcuz.vercel.app/",
  },
  {
    title: "Image & Design Tools",
    role: "Dec 2024",
    description:
      "A collection of lightweight, browser-based tools for designers and developers, including an SVG → PNG converter and a corner radius generator.",
    infos: [
      "Fast, client-side tools with no uploads or sign-up required",
      "SVG to PNG converter, corner radius generator, and more",
    ],
    technologies: ["TypeScript", "Next.js", "Tailwind CSS"],
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
        from commercial software used by real clinics to full-stack web apps,
        here are some of the things i&apos;ve built. i love building tools
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
