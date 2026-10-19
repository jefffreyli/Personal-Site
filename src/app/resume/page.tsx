import type { Metadata } from "next";
import { getResumeUrl } from "@/lib/resume";

export const metadata: Metadata = {
  title: "Resume · Jeffrey Li",
};

export default async function ResumePage() {
  const resumeUrl = await getResumeUrl();

  return (
    <div className="mx-auto h-[calc(100vh-4rem)] max-w-4xl px-6 pb-6">
      <iframe
        src={resumeUrl}
        className="h-full w-full rounded-xl border border-notion-border"
        title="Jeffrey Li's Resume"
      />
    </div>
  );
}
