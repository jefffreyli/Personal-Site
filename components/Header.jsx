import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";
// import {HiOutlineDocumentDownload } from "react-icons/hi";
import { Typewriter } from "react-simple-typewriter";
import Particle from "./Particle.jsx";
import Nav from "../components/Nav.jsx";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Nav />
      <div className="h-screen bg-[var(--color-bg)] flex justify-center items-center">
        <Particle />
        <div className="text-center absolute">
          <h1 className="text-6xl mb-3 font-semibold mb-5">I'm Jeffrey Li.</h1>
          <Typewriter
            words={phrases}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
          <div className="mt-5 flex justify-center gap-5">
            {socials.map((social, index) => (
              <div key={index}>
                <a
                  href={social.link}
                  target="_blank"
                  className="text-gray-400 text-2xl hover:text-gray-500 transition-all"
                >
                  {social.icon}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Link href="#projects">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-dark-blue-3 absolute h-auto w-12 opacity-75 animate-bounce select-none cursor-pointer left-[48%] bottom-10 transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </Link>
    </header>
  );
};

const socials = [
  {
    icon: <AiOutlineMail />,
    text: "Email",
    link: "mailto:jeffreyli8000@gmail.com",
  },
  {
    icon: <AiOutlineInstagram />,
    text: "Instagram",
    link: "https://www.instagram.com/jefffrey.li/",
  },
  {
    icon: <AiOutlineGithub />,
    text: "Github",
    link: "https://github.com/sigfigs",
  },
  {
    icon: <AiOutlineLinkedin />,
    text: "Linkedin",
    link: "https://www.linkedin.com/in/jeffrey-li-bb0577225/",
  },
  {
    // icon: <HiOutlineDocumentDownload />,
    text: "CV",
  },
];

const phrases = [
  "hello :)",
  "welcome to the site!",
  "a Software Developer",
  "NYC",
  "MIT '27",
];

export default Header;
