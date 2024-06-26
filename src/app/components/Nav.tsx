"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

export default function Nav() {
  // const { systemTheme, theme, setTheme } = useTheme();
  // const currentTheme = theme === "system" ? systemTheme : theme;
  // const router = useRouter();

  // const changeTheme = () => {
  //   if (currentTheme == "light") {
  //     setTheme("dark");
  //   }
  //   if (currentTheme == "dark") {
  //     setTheme("light");
  //   }
  // };
  return (
    <nav className="flex justify-between items-center translate-y-8">
      {/* {router.pathname !== "/" ? ( */}
        <Link href="/">
          <p className="text-dark-blue-3 dark:text-white text-2xl md:text-3xl font-semibold font-serif px-8 md:px-12 underline underline-offset-8 cursor-pointer">
            Jeffrey Li
          </p>
        </Link>
      {/* ) : (
        <div></div>
      )} */}

      <div className="flex gap-x-12 items-center">
        <div className="scale-[2]">
          <Link href="/projects">🧑‍💻</Link>
        </div>

        <div className="scale-[2]">
          <Link href="/currently-playing">🎶</Link>
        </div>

        <div className="scale-[2] mr-12">
          {/* <button onClick={changeTheme} className="cursor-pointer">
            {currentTheme == "light" ? "☀️" : "🌙"}
          </button> */}
        </div>
      </div>
    </nav>
  );
}
