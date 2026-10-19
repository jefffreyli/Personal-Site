/**
 * Gantt-style work timeline. Each experience gets a row with one bar per period,
 * positioned on a linear year axis that runs from the earliest start to the end
 * of the current year. A red line marks today, and bars grow in on first scroll.
 */
"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";
import {
  monthToYear,
  type Experience,
  type NotionColor,
  type Period,
} from "@/lib/experience";

const barColors: Record<NotionColor, string> = {
  gray: "bg-notion-gray",
  brown: "bg-notion-brown",
  orange: "bg-notion-orange",
  yellow: "bg-notion-yellow",
  green: "bg-notion-green",
  blue: "bg-notion-blue",
  purple: "bg-notion-purple",
  pink: "bg-notion-pink",
  red: "bg-notion-red",
};

// Labels that start past this point are right-aligned so they don't overflow.
const RIGHT_ALIGN_THRESHOLD = 55;

/**
 * Renders the timeline.
 *
 * @param experiences rows to draw, top to bottom
 * @param now current time as a fractional year, used for ongoing periods and the today line
 * @returns the timeline element
 */
export default function Timeline({
  experiences,
  now,
}: {
  experiences: Experience[];
  now: number;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // On narrow screens the timeline scrolls sideways; start at the most recent end.
  useEffect(() => {
    const element = scrollRef.current;
    if (element) {
      element.scrollLeft = element.scrollWidth;
    }
  }, []);

  const allStarts = experiences.flatMap((experience) =>
    experience.periods.map((period) => monthToYear(period.start))
  );
  const firstYear = Math.floor(Math.min(...allStarts));
  const lastYear = Math.floor(now) + 1;
  const years = Array.from(
    { length: lastYear - firstYear + 1 },
    (_, i) => firstYear + i
  );

  /**
   * Maps a fractional year to a horizontal position on the axis.
   *
   * @param year fractional year
   * @returns percentage from the left edge, clamped to [0, 100]
   */
  const toPercent = (year: number): number => {
    const percent = ((year - firstYear) / (lastYear - firstYear)) * 100;
    return Math.min(100, Math.max(0, percent));
  };

  /**
   * Computes a period's left offset and width on the axis.
   *
   * @param period the period to place
   * @returns left and width as percentages
   */
  const place = (period: Period) => {
    const left = toPercent(monthToYear(period.start));
    const right = toPercent(period.end ? monthToYear(period.end) : now);
    return { left, width: Math.max(right - left, 0.5) };
  };

  return (
    <div ref={scrollRef} className="overflow-x-auto">
      <div className="min-w-[560px] font-serif text-[11px]">
        <div className="relative mb-2 h-4 text-notion-muted">
          {years.map((year, i) => (
            <span
              key={year}
              className={cn(
                "absolute",
                i > 0 && i < years.length - 1 && "-translate-x-1/2",
                i === years.length - 1 && "-translate-x-full"
              )}
              style={{ left: `${toPercent(year)}%` }}
            >
              {year}
            </span>
          ))}
        </div>

        <div className="relative">
          <div
            className="absolute -top-1 bottom-0 w-px bg-notion-red"
            style={{ left: `${toPercent(now)}%` }}
            aria-hidden
          />
          {experiences.map((experience, row) => {
            const firstBar = place(experience.periods[0]);
            const lastBar = place(experience.periods[experience.periods.length - 1]);
            const alignRight = firstBar.left > RIGHT_ALIGN_THRESHOLD;

            return (
              <div key={experience.org} className="relative h-9">
                {experience.periods.map((period) => {
                  const { left, width } = place(period);
                  return (
                    <motion.div
                      key={period.start}
                      className={cn(
                        "absolute top-0 h-3 origin-left rounded-sm",
                        barColors[experience.color]
                      )}
                      style={{ left: `${left}%`, width: `${width}%` }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: row * 0.06 }}
                    />
                  );
                })}
                <div
                  className={cn(
                    "absolute top-3.5 whitespace-nowrap leading-tight",
                    alignRight && "text-right"
                  )}
                  style={
                    alignRight
                      ? { right: `${100 - (lastBar.left + lastBar.width)}%` }
                      : { left: `${firstBar.left}%` }
                  }
                >
                  <span className="font-medium">{experience.org}</span>
                  <span className="text-notion-muted"> · {experience.role}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
