/**
 * Sticky top bar with the site name and page links. The link for the current
 * route is highlighted in the accent color.
 */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

const links = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/resume", label: "resume" },
  { href: "/contact", label: "contact" },
];

/**
 * Renders the navigation bar.
 *
 * @returns the header element
 */
export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="font-display text-xl tracking-wide sm:text-2xl">
          Jeffrey Li
        </Link>
        <ul className="flex gap-3 text-sm sm:gap-5">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "transition-colors hover:text-notion-accent",
                  pathname === link.href && "text-notion-accent"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
