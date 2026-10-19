import { socials } from "@/lib/socials";

/**
 * Lists social accounts as "Label: handle" rows, matching the home page mockup.
 *
 * @returns the list of links
 */
export default function SocialLinks() {
  return (
    <ul className="space-y-1">
      {socials.map((social) => (
        <li key={social.label}>
          <span className="text-notion-muted">{social.label}: </span>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-notion-border underline-offset-4 transition-colors hover:decoration-notion-text"
          >
            {social.handle}
          </a>
        </li>
      ))}
    </ul>
  );
}
