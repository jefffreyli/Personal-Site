'use client'

import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { Typewriter } from "react-simple-typewriter";
import { useTheme } from "next-themes";

const Header = () => {

  // const { systemTheme, theme, setTheme } = useTheme();
  // const currentTheme = theme === "system" ? systemTheme : theme;

  // const changeTheme = () => {
  //   if (currentTheme == "light") {
  //     setTheme("dark");
  //   }
  //   if (currentTheme == "dark") {
  //     setTheme("light");
  //   }
  // };

  return (
    <header>
      <div className="h-screen bg-light-blue-1 dark:bg-dark-grey flex justify-center items-center">
        {/* <Particle /> */}
        <div className="text-center absolute px-4">
            <h1 className="text-5xl md:text-6xl mb-3 font-semibold mb-5 text-dark-blue-3 dark:text-white">
              I&apos;m Jeffrey Li.
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

          <div className="mt-5 flex justify-center gap-5">
            {socials.map((social, index) => (
                <a
                  // data-tooltip-id="social-tooltip"
                  // data-tooltip-content={social.toolTipText}
                  key={index}
                  href={social.link}
                  target="_blank"
                  className="text-gray-400 text-2xl hover:text-gray-500 transition-all"
                >
                  {social.icon}
                </a>
                // <Tooltip place="bottom" id="social-tooltip" />
            ))}
          </div>
        </div>
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
