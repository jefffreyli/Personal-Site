"use client";

import { motion } from "framer-motion";

/**
 * Fades and slides its children up the first time they scroll into view.
 *
 * @param children content to reveal
 * @param delay seconds to wait before animating
 * @param className classes for the wrapper div
 * @returns the animated wrapper
 */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
