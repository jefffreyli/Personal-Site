import { LinkPreview } from "@/components/ui/link-preview";
import { cn } from "@/lib/cn";

const sizes = {
  portrait: { width: 150, height: 200 },
  landscape: { width: 200, height: 150 },
};

/**
 * Inline text that pops up one of my photos on hover, used to illustrate the story.
 *
 * @param src photo path in /public
 * @param orientation photo aspect, which sets the preview size
 * @param className extra classes for the inline text
 * @param children the inline text
 * @returns the hoverable text
 */
export default function PhotoLink({
  src,
  orientation = "portrait",
  className,
  children,
}: {
  src: string;
  orientation?: keyof typeof sizes;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <LinkPreview
      url={src}
      isStatic
      imageSrc={src}
      {...sizes[orientation]}
      className={cn(
        "text-notion-text underline decoration-dotted decoration-notion-faint underline-offset-4",
        className
      )}
    >
      {children}
    </LinkPreview>
  );
}
