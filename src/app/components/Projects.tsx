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
                key={index}
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
    imageURL: "/projects/visage-ui-2.png",
    body: "At its core, Visage provides a simplified workflow for syncing video clips with audio — the core of editing — whether for montages, highlight reels, or edits. Created as a group submission to the 2024 MIT Weblab hackathon. Website is not live anymore due to maintenance costs.",
    tools: ["Next.js", "Tailwind", "Firebase", "FFmpeg"],
    link: "#",
    codeLink: "https://github.com/jefffreyli/video-editing-platform",
  },
  {
    title: "SciClubs",
    imageURL: "/projects/bxsci clubs logo.png",
    body: "SciClubs is a cross-platform app that organizes all clubs and activities for students. Club leaders can take attendance; members can view announcements and materials. Features include user authentication, database management, and multiple levels of access.",
    tools: ["Flutter", "Dart", "Firebase"],
    link: "https://sciclubs.vercel.app/#/",
    codeLink: "https://github.com/jefffreyli/Club-App",
  },
  {
    title: "Bronx Science NHS Website",
    imageURL: "/projects/bxsci_nhs_website.png",
    body: "The official site for the Bronx Science National Honor Society (NHS) provides details on the application process, member responsibilities, and tutoring forms. Created as my first web development project, it is now used and maintained by student leaders.",
    tools: ["React.js", "Tailwind"],
    link: "https://bxscinhs.vercel.app/",
    codeLink: "https://github.com/jefffreyli/Bronx-Science-NHS",
  },
  {
    title: "3D Animation of Cancer",
    imageURL: "/projects/3d animation dna.png",
    body: "Millions of people are affected by cancer each year but millions more remain unaware of what it entails. The animation explains the symptoms, development, and current treatments for cancer. Its goal is to promote awareness for this disease. All animations were created using Autodesk Maya, a computer application used in 3D modeling, animation, and rendering. Python was used to automate repetitve tasks. iMovie was used to assemble the rendered clips together.",
    tools: ["Python", "Maya"],
    link: "https://www.youtube.com/watch?v=mRDQ30rnnb4",
  },
];

export default Projects;
