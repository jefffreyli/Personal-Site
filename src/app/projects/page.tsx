import type { Metadata } from "next";
import ProjectCard from "@/components/projects/ProjectCard";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects · Jeffrey Li",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-16 px-6 pb-12 pt-16">
      {projects.map((project) => (
        <Reveal key={project.title}>
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </div>
  );
}
