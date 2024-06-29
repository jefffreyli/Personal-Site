import { describe } from "node:test";

export const nameToLogo = [
  {
    name: "Java",
    logoPath: "/logos/java.svg",
    description:
      "First encountered in high school; used for server-side rendering at a subsequent job and later in AWS backend workflows and APIs.",
  },
  {
    name: "Python",
    logoPath: "/logos/python.svg",
    description:
      "Learned through an online course; frequently used in MIT classes and my favorite high-level programming language.",
  },
  {
    name: "C",
    logoPath: "/logos/c.svg",
    description:
      "Studied during the first year of college in low-level programming courses; challenging due to concepts like bits and pointers.",
  },
  {
    name: "Javascript",
    logoPath: "/logos/javascript.svg",
    description: "Utilized for web development projects.",
  },
  {
    name: "Typescript",
    logoPath: "/logos/typescript.svg",
    description: "Applied for web development projects.",
  },
  {
    name: "React.js",
    logoPath: "/logos/reactjs.svg",
    description:
      "Shifted from traditional HTML to React components for better code organization.",
  },
  {
    name: "Next.js",
    logoPath: "/logos/nextjs.svg",
    description: "Found it to be an improved version of React.",
  },
  {
    name: "Tailwind",
    logoPath: "/logos/tailwind.svg",
    description:
      "Switched to Tailwind for all web development projects after learning CSS.",
  },
  {
    name: "Dart",
    logoPath: "/logos/dart.svg",
    description: "Used in a high school mobile app development class.",
  },
  {
    name: "Flutter",
    logoPath: "/logos/flutter.svg",
    description: "Used in a high school mobile app development class.",
  },
  {
    name: "Maya",
    logoPath: "/logos/maya.webp",
    description: "Utilized for a 3D science animation class at MITES Semester.",
  },
];

export function getLogoPathFromName(name: string) {
  const item = nameToLogo.find(
    (item) => item.name.toLowerCase() === name.toLowerCase()
  );
  return item ? item.logoPath : "/";
}
