import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  projectUrl: string;
  imageSrc: string;
  tools: string[];
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  projectUrl,
  imageSrc,
  tools,
  description,
}) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-md overflow-hidden sm:flex mb-10">
      <div className="sm:w-1/2">
        <Link
        href={projectUrl}
        target="_blank"
        >
          <Image
            src={imageSrc}
            alt="Project Image"
            width={200}
            height={200}
            className="object-cover h-full w-full"
          />
          </Link>
      </div>
      <div className="sm:w-2/3 py-6 px-6">
        <h1 className="text-black font-semibold text-xl mb-2">{title}</h1>
        <p className="text-base">{description}</p>

        <div className="h-5" />

        <div className="mb-4">
          <div className="flex flex-wrap">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
