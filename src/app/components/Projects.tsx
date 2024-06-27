"use client";

import React from "react";
import { AiFillGithub } from "react-icons/ai";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="">
      <div className="flex justify-center mb-10">
        <p className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6 items-center text-left">
          Below are some of the projects I've worked on. Click on the project
          image to take you to a demo!
        </p>
      </div>

      <div className="flex items-center justify-center">
        <div className="max-w-4xl">
          <div className="">
            {projects.map((project, index) => (
              <ProjectCard
              title={project.title}
              projectUrl={project.link}
                imageSrc={project.imageURL}
                tools={project.tools}
                description={project.body}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const fillerImage =
  "https://st4.depositphotos.com/9485312/21658/i/600/depositphotos_216581194-stock-photo-illustration-orange-polygonal-nice-multicolor.jpg";

const projects = [
  {
    title: "Visage",
    imageURL: "/assets/projects/visage-ui-2.png",
    body: "At its core, Visage provides a simplified workflow for syncing video clips with audio — the core of editing — whether for montages, highlight reels, or edits.",
    tools: ["Next.js", "Tailwind", "Firebase", "FFmpeg"],
    link: "#",
    codeLink: "https://github.com/jefffreyli/video-editing-platform",
  },
  {
    title: "SciClubs",
    imageURL: "/assets/projects/bxsci clubs logo.png",
    body: "A mobile and web app for after school clubs. The app includes screens such as login, signup, dashboard, profile, and club's home.",
    tools: ["Flutter", "Dart", "Firebase"],
    link: "https://sciclubs.vercel.app/#/",
    codeLink: "https://github.com/jefffreyli/Club-App",
  },
  {
    title: "Bronx Science NHS Website",
    imageURL: "/assets/projects/bxsci_nhs_website.png",
    body: "The official site for the Bronx Science National Honor Society (NHS).",
    tools: ["React.js", "Tailwind"],
    link: "https://bxscinhs.vercel.app/",
    codeLink: "https://github.com/jefffreyli/Bronx-Science-NHS",
  },
  {
    title: "3D Animation of Cancer",
    imageURL: "/assets/projects/3d animation dna.png",
    body: "Millions of people are affected by cancer each year but millions more remain unaware of what it entails. This animation will go through the symptoms, development, and current treatments for cancer. The goal is to promote awareness for this disease. All animations were created using Autodesk Maya, a computer application used in 3D modeling, animation, and rendering. Python was used to automate repetitve tasks. iMovie was used to assemble the rendered clips together.",
    tools: ["Python", "Maya"],
    link: "https://www.youtube.com/watch?v=mRDQ30rnnb4",
  },
];

export default Projects;
