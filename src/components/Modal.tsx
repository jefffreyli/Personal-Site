/**
 * Shared modal shell: a dimmed full-screen overlay portaled to <body> (so
 * scroll-reveal transforms can't offset it) with an X close button. It pauses
 * smooth scrolling while open and closes on Escape, the X or a backdrop click.
 */
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

/**
 * Renders the modal when open.
 *
 * @param isOpen whether the modal is shown
 * @param onClose called when the user dismisses the modal
 * @param label accessible name for the dialog
 * @param children dialog content; clicks inside it don't close the modal
 * @returns the portaled modal, or nothing before hydration
 */
export default function Modal({
  isOpen,
  onClose,
  label,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  label: string;
  children: React.ReactNode;
}) {
  // The portal target only exists in the browser, so wait until after hydration.
  const [isMounted, setIsMounted] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    lenis?.stop();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      lenis?.start();
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, lenis, onClose]);

  if (!isMounted) {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={label}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 sm:p-10"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="flex max-h-full w-full items-center justify-center"
            onClick={(event) => event.stopPropagation()}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.div>
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-notion-text transition-colors hover:bg-white"
            aria-label="Close"
          >
            <X size={18} strokeWidth={2} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
