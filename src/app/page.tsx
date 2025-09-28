import { Header } from "@/components/header"
import { SectionList } from "@/components/section-list"
import { LinksSection } from "@/components/links-section"
import { SkillsSection } from "@/components/skills-section"

const projectItems = [
  {
    title: "google docs clone",
    period: "Jan 2025",
    description:
      "responsive and intuitive rich text editor with comprehensive text formatting tools. and real-time collaboration",
    href: "https://docs-psi-azure-94.vercel.app/",
  },
  {
    title: "Form Builder",
    period: "Aug 2024",
    description:
      "dynamic form builder with drag-and-drop interface, real-time preview, and customizable field options",
    href: "https://formbuilder-xcuz.vercel.app/",
  },
]

export default function HomePage() {
  return (
    <>
      <Header />
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
