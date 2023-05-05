import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();

  const isActive = href => router.pathname === href;

  const links = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/#projects" },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-6 py-8 flex justify-end items-center">
        {links.map((link, index) => (
          <Link href={link.href} key={index}>
            <span
              className={`cursor-pointer mx-4 ${
                isActive(link.href) ? "font-semibold text-xl" : "font-semibold text-xl"
              } hover:text-gray-600 hover:ease-in duration-300`}
            >
              {link.name}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
