import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected work by Juliet Ogbonna, including the Mater Christi Centre website (team collaboration at Verbum Networks) and the Nova Hairs e-commerce store.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <section className="container-x py-20">
      <SectionHeading
        as="h1"
        align="center"
        eyebrow="Portfolio"
        title={
          <>
            My <span className="text-gradient">Projects</span>
          </>
        }
        intro="Here are some of the projects I've built with modern frontend technologies, shown on laptop, tablet and mobile. Click any project to open the live site."
      />
      <div className="mt-16 space-y-10">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
