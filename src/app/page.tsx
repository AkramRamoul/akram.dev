import { Header } from "@/components/header"
import { SectionList } from "@/components/section-list"
import { LinksSection } from "@/components/links-section"
import { SkillsSection } from "@/components/skills-section"

const experienceItems = [
  {
    title: "Full-Stack Developer @ Wanasis",
    period: "Present",
    description:
      "building cross-platform mobile apps with Ionic, Angular, and SCSS, backed by Java REST APIs (Jersey) on top of the Compiere ERP. also developing and customizing ERPNext modules in Python to fit business workflows.",
  },
  {
    title: "Full-Stack Developer (Freelance)",
    period: "Dec 2024 - Present",
    description:
      "designed, built, and sold a commercial clinic management desktop app (Electron, React, TypeScript, Drizzle, LibSQL) now used daily by several private clinics. it replaced paper records with electronic health records, digital prescriptions, consultation history, and a financial module for expenses, revenue, and billing.",
  },
]

const projectItems = [
  {
    title: "Clinic Management System",
    period: "Feb 2026",
    description:
      "commercial desktop software sold to private clinics: patient records, digital prescriptions, consultation history, and clinic finances, all working offline.",
  },
  {
    title: "Multi-Tenant Store",
    period: "Nov 2025",
    description:
      "multi-tenant e-commerce platform where merchants launch their own store on a subdomain, with Stripe Connect payouts and a merchant dashboard.",
    href: "https://ecommerce-ecru-nu-50.vercel.app/",
  },
  {
    title: "Online Docs Editor",
    period: "Jan 2025",
    description:
      "responsive and intuitive rich text editor with comprehensive text formatting tools. and real-time collaboration",
    href: "https://docs-psi-azure-94.vercel.app/",
  },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <SectionList title="experience" items={experienceItems} />
      <SkillsSection />
      <SectionList
        title="projects"
        items={projectItems}
        viewAllHref="/projects"
        viewAllText="all projects"
      />
      <LinksSection />
    </>
  )
}
