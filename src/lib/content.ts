/**
 * Parser for content/home.txt, the plain-text source of the home page. The text
 * is split into sections, each holding paragraphs, lists and component blocks,
 * and inline markup is turned into typed nodes for HomeContent to render.
 * Mistakes throw a ContentError naming the line, so a typo fails the build
 * instead of silently rendering wrong. See content/home.txt for the syntax.
 */
import { notionColors, type NotionColor } from "@/lib/experience";

export type Inline =
  | { type: "text"; text: string }
  | { type: "link"; text: string; href: string }
  | {
      type: "styled";
      text: string;
      color?: NotionColor;
      photo?: string;
      landscape: boolean;
      href?: string;
    };

export type Block =
  | { type: "paragraph"; content: Inline[] }
  | { type: "list"; items: Inline[][] }
  | { type: "component"; name: string; line: number };

export interface ContentSection {
  /** Heading text, or undefined for the untitled intro before the first heading. */
  title?: string;
  blocks: Block[];
}

export class ContentError extends Error {
  constructor(line: number, message: string) {
    super(`content/home.txt line ${line}: ${message}`);
    this.name = "ContentError";
  }
}

// Matches [text](url) links or {text | options} styled spans.
const INLINE_PATTERN = /\[([^\]]+)\]\(([^)\s]+)\)|\{([^}]+)\}/g;
const COMPONENT_PATTERN = /^<([A-Za-z]+)\s*\/>$/;

/**
 * Parses the whole content file into sections.
 *
 * @param source contents of the text file
 * @returns sections in file order; the untitled intro is dropped if empty
 * @throws ContentError on invalid inline markup
 */
export function parseContent(source: string): ContentSection[] {
  const sections: ContentSection[] = [{ blocks: [] }];
  let paragraph: { text: string; line: number } | null = null;
  let listItems: { text: string; line: number }[] = [];

  const currentBlocks = () => sections[sections.length - 1].blocks;

  // Turns the paragraph or list being collected into a finished block.
  const flush = () => {
    if (paragraph) {
      currentBlocks().push({
        type: "paragraph",
        content: parseInline(paragraph.text, paragraph.line),
      });
      paragraph = null;
    }
    if (listItems.length > 0) {
      currentBlocks().push({
        type: "list",
        items: listItems.map((item) => parseInline(item.text, item.line)),
      });
      listItems = [];
    }
  };

  const lines = source.split(/\r?\n/);
  for (let index = 0; index < lines.length; index++) {
    const line = index + 1;
    const text = lines[index].trim();
    const component = COMPONENT_PATTERN.exec(text);

    if (text.startsWith("//")) {
      continue;
    } else if (text === "") {
      flush();
    } else if (text.startsWith("## ")) {
      flush();
      sections.push({ title: text.slice(3).trim(), blocks: [] });
    } else if (component) {
      flush();
      currentBlocks().push({ type: "component", name: component[1], line });
    } else if (text.startsWith("- ")) {
      if (paragraph) {
        flush();
      }
      listItems.push({ text: text.slice(2).trim(), line });
    } else if (listItems.length > 0) {
      // A plain line right after a list item continues that item.
      listItems[listItems.length - 1].text += ` ${text}`;
    } else if (paragraph) {
      paragraph.text += ` ${text}`;
    } else {
      paragraph = { text, line };
    }
  }
  flush();

  return sections.filter(
    (section) => section.title !== undefined || section.blocks.length > 0
  );
}

/**
 * Splits one line of text into plain text, links and styled spans.
 *
 * @param text the text to parse
 * @param line line number used in error messages
 * @returns inline nodes in order
 * @throws ContentError on an invalid {text | options} span
 */
export function parseInline(text: string, line: number): Inline[] {
  const result: Inline[] = [];
  const pattern = new RegExp(INLINE_PATTERN);
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      result.push({ type: "text", text: text.slice(lastIndex, match.index) });
    }
    if (match[1] !== undefined) {
      result.push({ type: "link", text: match[1], href: match[2] });
    } else {
      result.push(parseStyled(match[3], line));
    }
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    result.push({ type: "text", text: text.slice(lastIndex) });
  }
  return result;
}

/**
 * Parses the inside of a {text | key=value | flag} span.
 *
 * @param body everything between the braces
 * @param line line number used in error messages
 * @returns the styled node
 * @throws ContentError on missing text, unknown options or bad values
 */
function parseStyled(body: string, line: number): Inline {
  const [text, ...options] = body.split("|").map((part) => part.trim());
  if (!text) {
    throw new ContentError(line, `"{${body}}" is missing its text`);
  }
  const styled: Extract<Inline, { type: "styled" }> = {
    type: "styled",
    text,
    landscape: false,
  };

  for (const option of options) {
    const equals = option.indexOf("=");
    const key = equals === -1 ? option : option.slice(0, equals).trim();
    const value = equals === -1 ? "" : option.slice(equals + 1).trim();
    const requireValue = () => {
      if (!value) {
        throw new ContentError(line, `"${key}" needs a value, like ${key}=...`);
      }
      return value;
    };

    if (key === "color") {
      const color = notionColors.find((name) => name === value);
      if (!color) {
        throw new ContentError(
          line,
          `unknown color "${value}"; use one of ${notionColors.join(", ")}`
        );
      }
      styled.color = color;
    } else if (key === "photo") {
      styled.photo = requireValue();
    } else if (key === "link") {
      styled.href = requireValue();
    } else if (key === "landscape") {
      styled.landscape = true;
    } else {
      throw new ContentError(
        line,
        `unknown option "${key}" in "{${body}}"; use color, photo, link or landscape`
      );
    }
  }

  if (styled.photo && styled.href) {
    throw new ContentError(line, `"{${body}}" can't have both photo and link`);
  }
  return styled;
}
