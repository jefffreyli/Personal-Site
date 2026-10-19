import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SocialLinks from "@/components/SocialLinks";

export const metadata: Metadata = {
  title: "Contact · Jeffrey Li",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 pb-12 pt-16">
      <Reveal>
        <SocialLinks />
      </Reveal>
    </div>
  );
}
