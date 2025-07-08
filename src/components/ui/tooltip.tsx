"use client";

import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../lib/cn";

interface TooltipProps {
  children: React.ReactNode;
  content: string;
  href?: string;
  className?: string;
  side?: "top" | "bottom" | "left" | "right";
  delay?: number;
  offset?: number;
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  href,
  className = "",
  side = "top",
  delay = 300,
  offset = 8,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const showTooltip = (event: React.MouseEvent) => {
    if (isMobile) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      updatePosition(event);
      setIsVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  const updatePosition = (event: React.MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const tooltipWidth = 200; // Approximate tooltip width
    const tooltipHeight = 40; // Approximate tooltip height

    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    // Adjust position based on side preference
    switch (side) {
      case "top":
        y -= tooltipHeight + offset;
        x -= tooltipWidth / 2;
        break;
      case "bottom":
        y += offset;
        x -= tooltipWidth / 2;
        break;
      case "left":
        x -= tooltipWidth + offset;
        y -= tooltipHeight / 2;
        break;
      case "right":
        x += offset;
        y -= tooltipHeight / 2;
        break;
    }

    // Move tooltip to the right by 8 pixels
    x += 22;

    // Prevent tooltip from going off-screen
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const absoluteX = rect.left + x;
    const absoluteY = rect.top + y;

    if (absoluteX < 10) x = 10 - rect.left;
    if (absoluteX + tooltipWidth > viewportWidth - 10)
      x = viewportWidth - tooltipWidth - 10 - rect.left;
    if (absoluteY < 10) y = 10 - rect.top;
    if (absoluteY + tooltipHeight > viewportHeight - 10)
      y = viewportHeight - tooltipHeight - 10 - rect.top;

    setPosition({ x, y });
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (isVisible && !isMobile) {
      updatePosition(event);
    }
  };

  const handleClick = () => {
    if (isMobile && href) {
      window.open(href, "_blank");
    }
  };

  const content_element = (
    <div
      ref={containerRef}
      className={cn(
        "relative inline-block",
        isMobile ? "cursor-pointer" : "cursor-pointer",
        className
      )}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      {children}

      <AnimatePresence>
        {isVisible && !isMobile && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: side === "top" ? 10 : -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: side === "top" ? 10 : -10 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
              duration: 0.2,
            }}
            className="absolute z-50 pointer-events-none"
            style={{
              left: position.x,
              top: position.y,
            }}
          >
            <div className="bg-black text-white text-sm font-medium px-3 py-2 rounded-md shadow-lg whitespace-nowrap max-w-xs">
              {content}
              <div
                className={cn(
                  "absolute w-2 h-2 bg-black transform rotate-45",
                  side === "top" && "bottom-[-4px] left-1/2 -translate-x-1/2",
                  side === "bottom" && "top-[-4px] left-1/2 -translate-x-1/2",
                  side === "left" && "right-[-4px] top-1/2 -translate-y-1/2",
                  side === "right" && "left-[-4px] top-1/2 -translate-y-1/2"
                )}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  if (href && !isMobile) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        {content_element}
      </a>
    );
  }

  return content_element;
};
