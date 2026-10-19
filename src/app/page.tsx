import { readFileSync } from "node:fs";
import path from "node:path";
import HomeContent from "@/components/home/HomeContent";
import { parseContent } from "@/lib/content";

// Rebuild daily so the timeline's "today" line stays current.
export const revalidate = 86400;

const CONTENT_PATH = path.join(process.cwd(), "content", "home.txt");

export default function Home() {
  const sections = parseContent(readFileSync(CONTENT_PATH, "utf8"));

  return (
    <div className="mx-auto max-w-2xl space-y-12 px-6 pb-12 pt-16">
      <HomeContent sections={sections} />
    </div>
  );
}
