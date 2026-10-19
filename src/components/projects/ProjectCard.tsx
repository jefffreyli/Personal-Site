import ProjectImage from "@/components/projects/ProjectImage";
import type { Project } from "@/types/projects";

/**
 * One project row: screenshot on the left, title, description, tools and links
 * on the right. Stacks vertically on small screens.
 *
 * @param project the project to show
 * @returns the project row
 */
export default function ProjectCard({ project }: { project: Project }) {
  const { title, imageURL, body, tools, demo, source } = project;
  // Some projects use the same URL for both, so only show source when it differs.
  const links: { label: string; href: string }[] = [];
  if (demo) {
    links.push({ label: "demo", href: demo });
  }
  if (source && source !== demo) {
    links.push({ label: "source", href: source });
  }

  return (
    <article className="flex flex-col gap-6 sm:flex-row sm:items-start">
      <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-xl border border-notion-border bg-notion-surface sm:w-64">
        {imageURL ? (
          <ProjectImage src={imageURL} alt={title} />
        ) : (
          <div className="flex h-full items-center justify-center font-display text-4xl text-notion-faint">
            {title.charAt(0)}
          </div>
        )}
      </div>

      <div className="min-w-0">
        <h2 className="mb-2 text-lg font-medium">{title}</h2>
        <p className="leading-relaxed text-notion-muted">{body}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tools.map((tool) => (
            <span
              key={tool}
              className="rounded bg-notion-gray-bg px-1.5 py-0.5 text-xs text-notion-gray"
            >
              {tool}
            </span>
          ))}
        </div>
        <div className="mt-3 flex gap-4 text-sm">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-notion-accent hover:underline"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
