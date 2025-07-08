"use client";

import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import PhotoCarousel from "./PhotoCarousel";

export default function BioHeader() {
  const handleLinkClick = async (e: React.MouseEvent, link: string) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(link);
      window.open(link, "_blank", "noopener,noreferrer");
    } catch (err) {
      // fallback: open link if clipboard fails
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="flex items-center mb-12">
      <PhotoCarousel />
      <div>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-5 text-dark-grey">
          Hi, I&apos;m Jeffrey.
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
          {socials.map((social, index) => {
            const isInternal = social.link.startsWith("/");
            const iconElement = (
              <span className="text-gray-400 text-2xl hover:text-gray-500 transition-all">
                {social.icon}
              </span>
            );
            return (
              <Link
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-2xl hover:text-gray-500 transition-all"
                onClick={(e) => handleLinkClick(e, social.link)}
              >
                {iconElement}
              </Link>
            );
          })}
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
    icon: <FaXTwitter />,
    text: "X",
    link: "https://x.com/jefffreyli",
    toolTipText: "Reach out on X",
  },
  {
    icon: <AiOutlineGithub />,
    text: "Github",
    link: "https://github.com/jefffreyli",
    toolTipText: "View project source code",
  },
  {
    icon: <AiOutlineLinkedin />,
    text: "Linkedin",
    link: "https://www.linkedin.com/in/jefffrey-li/",
    toolTipText: "Network with me",
  },
  {
    icon: <HiOutlineDocumentDownload />,
    text: "CV",
    link: "/resume",
    toolTipText: "Open to freelancing",
  },
];

const phrases = [
  "Hello :)",
  "Welcome to the site!",
  "Socials and quick links below",
  "Download my resume",
  "Click through the photos for more of my life",
  "Check out my projects",
  "📍 NYC",
  "MIT 2027",
];
