/**
 * Project screenshot that opens a full-screen photo modal when clicked.
 */
"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import Modal from "@/components/Modal";

/**
 * Renders the clickable thumbnail and its modal.
 *
 * @param src image path in /public
 * @param alt image description, also used for the modal's label
 * @returns the thumbnail button and its modal
 */
export default function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group relative h-full w-full cursor-zoom-in"
        aria-label={`Enlarge image of ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 640px) 256px, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </button>

      <Modal isOpen={isOpen} onClose={close} label={alt}>
        <div className="relative h-[85vh] w-full max-w-5xl">
          <Image src={src} alt={alt} fill sizes="100vw" className="object-contain" />
        </div>
      </Modal>
    </>
  );
}
