import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { Typewriter } from "react-simple-typewriter";
import Particle from "./Particle.jsx";
import Nav from "../components/Nav.jsx";
import Link from "next/link";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "next-themes";
import Song from "./Song.jsx";

const Header = () => {
  const socialInitial = { scale: 0 };
  const socialAnimate = { scale: 1 };

  const headerInitial = { y: -500 };
  const headerAnimate = { y: 0 };
  const headerTransition = {
    type: "spring",
    stiffness: 120,
    damping: 20,
  };

  const typewriterInitial = { scale: 0 };
  const typewriterAnimate = { scale: 1 };
  const typewriterTransition = {
    type: "spring",
    stiffness: 120,
    damping: 20,
  };

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const changeTheme = () => {
    if (currentTheme == "light") {
      setTheme("dark");
    }
    if (currentTheme == "dark") {
      setTheme("light");
    }
  };

  return (
    <header>
      <div className="h-screen bg-light-blue-1 dark:bg-dark-grey flex justify-center items-center">
        <motion.div
          className="absolute top-0 right-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <button
            onClick={changeTheme}
            className="scale-[2] py-8 px-12 cursor-pointer"
          >
            {currentTheme == "light" ? "☀️" : "🌙"}
          </button>
        </motion.div>
        {/* <Particle /> */}
        <div className="text-center absolute">
          <motion.div
            initial={headerInitial}
            animate={headerAnimate}
            transition={headerTransition}
          >
            <h1 className="text-6xl mb-3 font-semibold mb-5 text-dark-blue-3 dark:text-white">
              I&apos;m Jeffrey Li.
            </h1>
          </motion.div>

          <motion.div
            initial={typewriterInitial}
            animate={typewriterAnimate}
            transition={typewriterTransition}
          >
            <Typewriter
              words={phrases}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={75}
              delaySpeed={2000}
            />
          </motion.div>

          <div className="mt-5 flex justify-center gap-5">
            {socials.map((social, index) => (
              <motion.div
                key={index}
                initial={socialInitial}
                animate={socialAnimate}
                transition={{ type: "spring", delay: index / 2 }}
              >
                <a
                  data-tooltip-id="social-tooltip"
                  data-tooltip-content={social.toolTipText}
                  href={social.link}
                  target="_blank"
                  className="text-gray-400 text-2xl hover:text-gray-500 transition-all"
                >
                  {social.icon}
                </a>
                <Tooltip place="bottom" id="social-tooltip" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* <div className="pt-[40rem]">
          <Song />
        </div> */}
      </div>
    </header>
  );
};

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

export default Header;
