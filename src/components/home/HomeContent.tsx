/**
 * Renders the sections parsed from content/home.txt. Inline nodes become text,
 * links, colored tags or photo popouts, and <Name /> blocks are looked up in the
 * component registry below. Add an entry there to make a new component usable
 * from the text file.
 */
import PhotoLink from "@/components/home/PhotoLink";
import Timeline from "@/components/home/Timeline";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import SocialLinks from "@/components/SocialLinks";
import { cn } from "@/lib/cn";
import { ContentError, type Block, type ContentSection, type Inline } from "@/lib/content";
import { dateToYear, experiences, type NotionColor } from "@/lib/experience";

const components: Record<string, () => React.ReactNode> = {
  Timeline: () => (
    <Timeline experiences={experiences} now={dateToYear(new Date())} />
  ),
  SocialLinks: () => <SocialLinks />,
};

const tagColors: Record<NotionColor, string> = {
  gray: "bg-notion-gray-bg text-notion-gray",
  brown: "bg-notion-brown-bg text-notion-brown",
  orange: "bg-notion-orange-bg text-notion-orange",
  yellow: "bg-notion-yellow-bg text-notion-yellow",
  green: "bg-notion-green-bg text-notion-green",
  blue: "bg-notion-blue-bg text-notion-blue",
  purple: "bg-notion-purple-bg text-notion-purple",
  pink: "bg-notion-pink-bg text-notion-pink",
  red: "bg-notion-red-bg text-notion-red",
};

const tagClass = "rounded px-1.5 py-0.5 no-underline";
const linkClass =
  "underline decoration-notion-border underline-offset-4 transition-colors hover:decoration-notion-text";

/**
 * Renders a link, opening external URLs in a new tab.
 *
 * @param href link target
 * @param className classes for the anchor
 * @param children link text
 * @returns the anchor element
 */
function TextLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const isExternal = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      className={className}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </a>
  );
}

/**
 * Renders one inline node.
 *
 * @param inline the node to render
 * @param key React key within its parent
 * @returns the rendered node
 */
function renderInline(inline: Inline, key: number): React.ReactNode {
  if (inline.type === "text") {
    return inline.text;
  }
  if (inline.type === "link") {
    return (
      <TextLink key={key} href={inline.href} className={linkClass}>
        {inline.text}
      </TextLink>
    );
  }

  const colorClass = inline.color && cn(tagClass, tagColors[inline.color]);
  if (inline.photo) {
    return (
      <PhotoLink
        key={key}
        src={inline.photo}
        orientation={inline.landscape ? "landscape" : "portrait"}
        className={colorClass}
      >
        {inline.text}
      </PhotoLink>
    );
  }
  if (inline.href) {
    return (
      <TextLink key={key} href={inline.href} className={colorClass ?? linkClass}>
        {inline.text}
      </TextLink>
    );
  }
  return (
    <span key={key} className={colorClass}>
      {inline.text}
    </span>
  );
}

/**
 * Renders one block.
 *
 * @param block the block to render
 * @param key React key within its section
 * @returns the rendered block
 * @throws ContentError if a component block names an unregistered component
 */
function renderBlock(block: Block, key: number): React.ReactNode {
  if (block.type === "paragraph") {
    return <p key={key}>{block.content.map(renderInline)}</p>;
  }
  if (block.type === "list") {
    return (
      <ul key={key} className="space-y-2">
        {block.items.map((item, index) => (
          <li key={index}>– {item.map(renderInline)}</li>
        ))}
      </ul>
    );
  }

  const render = components[block.name];
  if (!render) {
    throw new ContentError(
      block.line,
      `unknown component <${block.name} />; available: ${Object.keys(components).join(", ")}`
    );
  }
  return <div key={key}>{render()}</div>;
}

/**
 * Renders all parsed sections. The untitled intro gets no heading.
 *
 * @param sections output of parseContent
 * @returns the home page content
 */
export default function HomeContent({ sections }: { sections: ContentSection[] }) {
  return sections.map((section, index) => {
    const body = (
      <div className="space-y-4 leading-relaxed">
        {section.blocks.map(renderBlock)}
      </div>
    );
    return section.title === undefined ? (
      <Reveal key={index}>{body}</Reveal>
    ) : (
      <Section key={index} title={section.title}>
        {body}
      </Section>
    );
  });
}
