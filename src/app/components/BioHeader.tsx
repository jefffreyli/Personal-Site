"use client";

import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { Typewriter } from "react-simple-typewriter";

export default function BioHeader() {
  return (
    <div className="flex items-center mb-12">
      <div className="w-48 h-48 bg-gray-300 rounded-md mr-8">
        <img
          src="/amazon-day-1.jpeg"
          alt="Jeffrey Li"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div>
        <h1 className="text-5xl md:text-6xl font-bold mb-5 text-dark-grey">
          Hey, I&apos;m Jeffrey Li.
        </h1>
        <Typewriter
          words={phrases}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={75}
          delaySpeed={2000}
        />
        <div className="mt-5 flex justify-left gap-5">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              className="text-gray-400 text-2xl hover:text-gray-500 transition-all"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

const socials = [
  {
    icon: <AiOutlineMail />,
    text: "Email",
    link: "mailto:jeffreyli8000@gmail.com",
    toolTipText: "Send me an email",
  },
  {
    icon: <AiOutlineInstagram />,
    text: "Instagram",
    link: "https://www.instagram.com/jefffrey.li/",
    toolTipText: "Reach out on instagram",
  },
  {
    icon: <AiOutlineGithub />,
    text: "Github",
    link: "https://github.com/sigfigs",
    toolTipText: "View project source code",
  },
  {
    icon: <AiOutlineLinkedin />,
    text: "Linkedin",
    link: "https://www.linkedin.com/in/jeffrey-li-bb0577225/",
    toolTipText: "Network with me",
  },
  {
    icon: <HiOutlineDocumentDownload />,
    text: "CV",
    toolTipText: "Open to freelancing",
  },
];

const phrases = ["Hello :)", "Welcome to the site!", "📍 NYC", "MIT 2027"];
