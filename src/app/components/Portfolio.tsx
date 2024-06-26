import { comment } from "postcss";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import Comments from "./Comments.jsx";
import { useState } from "react";
import { useTheme } from "next-themes";
import Nav from "./Nav.js";

const Portfolio = () => {
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);

  const handleClick = () => {
    setIsCommentsOpen((prev) => !prev);
  };

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  let commentIcon = (
    <svg
      onClick={handleClick}
      className="text-blue-800"
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-message-circle"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1"></path>
    </svg>
  );

  let heartUnfilledIcon = (
    <svg
      className="text-red-400"
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-heart"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
    </svg>
  );

  let heartFilledIcon = (
    <svg
      className="mt-3 text-red-400"
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-heart-filled"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z"
        stroke-width="0"
        fill="currentColor"
      ></path>
    </svg>
  );

  return (
    <div id="projects" className="">
      <div className="pt-20 lg:px-20 md:px-12 px-8">
        <h1 className="lg:text-5xl text-4xl text-center font-bold pb-28 text-dark-blue-3 dark:text-white">
          Projects
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="shadow-gray-300 dark:shadow-none dark:border-[1px] dark:shadow-md shadow-xl rounded-md cursor-pointer mb-auto"
            >
              <a href={project.link} target="_blank" rel="noreferrer">
                <img
                  className="hover:opacity-80 duration-500 rounded-md"
                  src={project.imageURL}
                  alt=""
                />
              </a>
              <hr className=""></hr>
              <div>
                <h1 className="text-black dark:text-white m-4">
                  {project.title}
                </h1>
              </div>
              <div className="text-gray-600 dark:text-white m-4 text-sm">
                {project.body}
              </div>

              <hr className="mx-3"></hr>

              <div className="flex justify-between">
                <div className="flex justify-left m-4">
                  <a
                    // data-tooltip-id="projects-tooltip"
                    // data-tooltip-content={"View code on github"}
                    className="mt-3 text-gray-400 text-xl"
                  >
                    {project.icon}
                  </a>
                  {/* <Tooltip place="bottom" id="projects-tooltip" /> */}
                  <div className="text-gray-400 text-sm m-3">
                    {project.langs}
                  </div>
                </div>

                {/* <div className="flex items-center justify-right gap-x-5 mr-6">
                  <div className="flex items-center">
                    {heartUnfilledIcon}{" "}
                    <p className="ml-1 text-sm text-gray-600">3</p>
                  </div>
                  <div className="flex items-center">
                    {commentIcon}{" "}
                    <p className="ml-1 text-sm text-gray-600">5</p>
                    <Comments
                      open={isCommentsOpen}
                      setOpen={setIsCommentsOpen}
                    />
                  </div>
                </div> */}
              </div>
            </div>
          ))}
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
    imageURL: "/assets/projects/visage-ui.webp",
    body: "At its core, Visage provides a simplified workflow for syncing video clips with audio — the core of editing — whether for montages, highlight reels, or edits.",
    icon: <AiFillGithub />,
    langs: "Next.js, Tailwind, Firebase, FFmpeg",
    link: "#",
    codeLink: "https://github.com/jefffreyli/video-editing-platform",
  },
  {
    title: "SciClubs",
    imageURL: "/assets/projects/bxsci clubs logo.png",
    body: "A mobile and web app for after school clubs. The app includes screens such as login, signup, dashboard, profile, and club's home.",
    icon: <AiFillGithub />,
    langs: "Flutter, Dart, PostgreSQL",
    link: "https://sciclubs.vercel.app/#/",
    codeLink: "https://github.com/jefffreyli/Club-App",
  },
  {
    title: "Bronx Science NHS Website",
    imageURL: "/assets/projects/bxsci_nhs_website.png",
    body: "The official site for the Bronx Science National Honor Society (NHS).",
    langs: "React.js, Tailwind",
    icon: <AiFillGithub />,
    link: "https://bxscinhs.vercel.app/",
    codeLink: "https://github.com/jefffreyli/Bronx-Science-NHS",
  },
  {
    title: "3D Animation of Cancer",
    imageURL: "/assets/projects/3d animation dna.png",
    body: "Millions of people are affected by cancer each year but millions more remain unaware of what it entails. This animation will go through the symptoms, development, and current treatments for cancer. The goal is to promote awareness for this disease. All animations were created using Autodesk Maya, a computer application used in 3D modeling, animation, and rendering. Python was used to automate repetitve tasks. iMovie was used to assemble the rendered clips together.",
    langs: "Python, Maya",
    link: "https://www.youtube.com/watch?v=mRDQ30rnnb4",
  },
];

export default Portfolio;
