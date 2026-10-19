import Reveal from "@/components/Reveal";

/**
 * Renders a section with a small heading that fades in on scroll.
 *
 * @param title heading text
 * @param children section body
 * @returns the section element
 */
export default function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <section>
        <h2 className="mb-3 font-medium">{title}</h2>
        {children}
      </section>
    </Reveal>
  );
}
