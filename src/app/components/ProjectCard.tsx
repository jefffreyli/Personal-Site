import Image from "next/image";
import LabelCard from "./LabelCard";

interface ProjectCardProps {
  imageSrc: string;
  languages: string[];
  tools: string[];
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  languages,
  tools,
  description,
}) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-md overflow-hidden flex mb-10">
      <div className="w-1/2">
        <Image
          src={imageSrc}
          alt="Project Image"
          width={200}
          height={200}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="w-2/3 py-4 px-6">
        <div className="mb-4">
          <div className="flex flex-wrap">
            {languages.map((language, index) => (
              <span
                key={index}
                className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                {language}
              </span>
            ))}
          </div>
        </div>
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
        <p className="text-gray-700 text-base">{description}</p>
        <LabelCard name="Java" iconPath="/logos/java.svg" />
      </div>
    </div>
  );
};

export default ProjectCard;
