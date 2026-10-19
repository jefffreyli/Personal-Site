/**
 * Client-side providers wrapped around every page: Lenis smooth scrolling on the
 * document root, and a Framer Motion config that turns off animations for visitors
 * who ask for reduced motion.
 */
"use client";

import { MotionConfig } from "framer-motion";
import { ReactLenis } from "lenis/react";

/**
 * Wraps the app in the smooth-scroll and motion providers.
 *
 * @param children page content
 * @returns the wrapped content
 */
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, wheelMultiplier: 1 }}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ReactLenis>
  );
}
