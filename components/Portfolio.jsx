import React from "react";
import { AiFillGithub } from "react-icons/ai";

const Portfolio = () => {
  return (
    <div id="projects" className="">
      <div className="mt-20 lg:mx-20 md:mx-12 mx-6 h-auto">
      <h1 className="lg:text-5xl text-4xl text-center font-bold mb-20">Projects</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {projects.map( (project, index) => (
          <div key={index} className="shadow-gray-300 shadow-xl rounded-md cursor-pointer mb-auto">
            <a href={project.link} target="_blank" rel="noreferrer">
              <img className="hover:opacity-80 duration-500" src={project.imageURL} alt="" />
            </a>
            <hr className=""></hr>
            <div>
              <h1 className="text-black m-4">{project.title}</h1>
            </div>
            <div className="text-gray-600 m-4 text-sm">{project.body}</div>

            <hr className="mx-3"></hr>
            <div className="flex justify-left m-4">
              <a className="mt-3 text-gray-400 text-xl">
                {project.icon}
              </a>
              <div className="text-gray-400 text-sm m-3">{project.langs}</div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

const fillerImage = "https://st4.depositphotos.com/9485312/21658/i/600/depositphotos_216581194-stock-photo-illustration-orange-polygonal-nice-multicolor.jpg";

const projects = [
  {
    title: "School Club App",
    imageURL:
      "/assets/projects/bxsci clubs logo.png",
    body: "A mobile and web app for after school clubs. The app includes screens such as login, signup, dashboard, profile, and club's home.",
    icon:  <AiFillGithub />,
    langs: "Flutter, Dart, PostgreSQL",
    link: "https://sciclubs.vercel.app/#/"
  },
  {
    title: "Bronx Science NHS Website",
    imageURL:
      "/assets/projects/bxsci_nhs_website.png",
    body: "The official site for the Bronx Science National Honor Society (NHS), which elevates the school's commitment to the values of scholarship, service, leadership, and character. By providing volunteering opportunities around the school, such as being a tutor and tour guide, members get first-hand experience building these four skills.",
    langs: "ReactJS, Tailwind",
    icon: <AiFillGithub />,
    link: "https://bxscinhs.vercel.app/"
  },
  {
    title: "3D Animation of Cancer",
    imageURL:
      "/assets/projects/3d animation dna.png",
    body: "Millions of people are affected by cancer each year but millions more remain unaware of what it entails. This animation will go through the symptoms, development, and current treatments for cancer. The goal is to promote awareness for this disease. All animations were created using Autodesk Maya, a computer application used in 3D modeling, animation, and rendering. Python was used to automate repetitve tasks. iMovie was used to assemble the rendered clips together.",
    langs: "Python, Maya",
    link: "https://www.youtube.com/watch?v=mRDQ30rnnb4"
  },
  
];

export default Portfolio;
