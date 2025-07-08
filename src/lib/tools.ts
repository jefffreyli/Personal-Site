export const nameToLogo = [
  {
    name: "Java",
    logoPath: "/logos/java.svg",
    description:
      "My first programming language and gateway into coding. Later used it for server-side rendering at Vibrantec and building AWS backend workflows and APIs.",
  },
  {
    name: "Python",
    logoPath: "/logos/python.svg",
    description:
      "Self-taught through online courses, then used extensively in MIT coursework. My preferred high-level language for its readability and versatility.",
  },
  {
    name: "C",
    logoPath: "/logos/c.svg",
    description:
      "Learned in MIT 6.1903 during my first year. Wrestling with bits and pointers taught me how computers actually work under the hood.",
  },
  {
    name: "Javascript",
    logoPath: "/logos/javascript.svg",
    description: "My introduction to web development before discovering the benefits of static typing.",
  },
  {
    name: "Typescript",
    logoPath: "/logos/typescript.svg",
    description: "Mastered through MIT 6.102 and now my go-to for web projects. The type safety catches bugs before they become problems.",
  },
  {
    name: "React.js",
    logoPath: "/logos/reactjs.svg",
    description:
      "Transformed how I build UIs by moving from vanilla HTML to component-based architecture for better code organization.",
  },
  {
    name: "Next.js",
    logoPath: "/logos/nextjs.svg",
    description: "React but better. Used for all my web development projects.",
  },
  {
    name: "Tailwind",
    logoPath: "/logos/tailwind.svg",
    description:
      "Replaced traditional CSS in all my projects. Utility-first approach keeps styling consistent and maintainable.",
  },
  {
    name: "Express",
    logoPath: "/logos/express.svg",
    description:
      "Built my first APIs here after learning what endpoints actually do. Solid foundation for understanding RESTful architecture.",
  },
  {
    name: "FastAPI",
    logoPath: "/logos/fastapi.svg",
    description:
      "Created Python backends for hackathon projects.",
  },
  {
    name: "Prisma",
    logoPath: "/logos/prisma.svg",
    description:
      "My first ORM in a full-stack project. Made database interactions feel natural and type-safe.",
  },
  {
    name: "Neon",
    logoPath: "/logos/neon.svg",
    description:
      "Switched from Firebase to PostgreSQL for relational data needs. Neon's serverless approach fits my project workflow perfectly.",
  },
  {
    name: "Dart",
    logoPath: "/logos/dart.svg",
    description: "Learned in high school mobile development class alongside Flutter.",
  },
  {
    name: "Flutter",
    logoPath: "/logos/flutter.svg",
    description: "Built multiple full-stack mobile apps in high school. This experience landed me mobile development internships, including work on Vibrantec's Flutter frontend.",
  },
  {
    name: "Maya",
    logoPath: "/logos/maya.webp",
    description: "Explored 3D modeling and animation during MITES Semester. Taught me a lot about the intersection of art and technology.",
  },
  {
    name: "Vercel",
    logoPath: "/logos/vercel.svg",
    description: "Deploys all my projects seamlessly. Taught me CI/CD pipelines, DNS management, and modern web hosting.",
  },
];

export function getLogoPathFromName(name: string) {
  const item = nameToLogo.find(
    (item) => item.name.toLowerCase() === name.toLowerCase()
  );
  return item ? item.logoPath : "/";
}
