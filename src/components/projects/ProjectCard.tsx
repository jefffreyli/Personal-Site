import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "../ui/tooltip";
import type { Project } from "@/types/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const {
    title,
    demo: demoUrl,
    source: sourceUrl,
    imageURL: imageSrc,
    tools,
    body: description,
  } = project;
  const hasSource = sourceUrl && sourceUrl.trim() !== "";

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-xs rounded-md overflow-hidden sm:flex mb-10">
      {/* Left half - Demo/Live preview */}
      <div
        className={`sm:w-1/2 relative${demoUrl !== undefined ? " group" : ""}`}
      >
        <Link
          href={demoUrl || ""}
          target="_blank"
          className="block h-full"
          tabIndex={demoUrl !== undefined ? 0 : -1}
          aria-disabled={demoUrl === undefined}
        >
          <div className="relative overflow-hidden h-full">
            <Image
              src={imageSrc}
              alt="Project Demo"
              width={200}
              height={200}
              className={`object-cover h-full w-full transition-all duration-300${
                demoUrl !== undefined
                  ? " group-hover:scale-105 group-hover:opacity-90"
                  : ""
              }`}
            />
            {/* Overlay that appears on hover, only if demoUrl is defined */}
            {demoUrl !== undefined && (
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white bg-opacity-90 px-4 py-2 rounded-md text-black font-medium text-sm">
                    View demo
                  </div>
                </div>
              </div>
            )}
          </div>
        </Link>
      </div>

      {/* Right half - Project details */}
      <div className="sm:w-2/3 py-6 px-6 relative group">
        {hasSource !== undefined ? (
          <Link
            href={sourceUrl || ""}
            target="_blank"
            className="block h-full transition-all duration-300 group-hover:scale-[1.01] rounded-md p-4 -m-4"
          >
            <ProjectContent
              title={title}
              description={description}
              tools={tools}
              hasHoverEffect={true}
            />
            {/* Overlay that appears on hover, only if hasSource is true */}
            <div className="absolute inset-0 bg-black bg-opacity-0  transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-gray-200 bg-opacity-90 px-4 py-2 rounded-md text-black font-medium text-sm">
                  View source
                </div>
              </div>
            </div>
          </Link>
        ) : (
          <div className="h-full">
            <ProjectContent
              title={title}
              description={description}
              tools={tools}
              hasHoverEffect={false}
            />
          </div>
        )}
      </div>
    </div>
  );
};

// Extracted component for project content to avoid duplication
const ProjectContent: React.FC<{
  title: string;
  description: string;
  tools: string[];
  hasHoverEffect: boolean;
}> = ({ title, description, tools, hasHoverEffect }) => (
  <>
    <h1
      className={`text-black font-semibold text-xl mb-2 ${
        hasHoverEffect
          ? "group-hover:text-blue-600 transition-colors duration-300"
          : ""
      }`}
    >
      {title}
    </h1>
    <p className="text-base text-gray-700">{description}</p>

    <div className="h-5" />

    <div className="mb-4">
      <div className="flex flex-wrap">
        {tools.map((tool, index) => (
          <span
            key={index}
            className={`bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ${
              hasHoverEffect
                ? "group-hover:bg-gray-300 transition-colors duration-300"
                : ""
            }`}
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  </>
);

export default ProjectCard;
