/**
 * Work history shown on the home page timeline, plus helpers for turning
 * "YYYY-MM" month strings into fractional years so bars can be positioned.
 * Entries are listed newest first, which is also the order they are drawn.
 */

export const notionColors = [
  "gray",
  "brown",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "pink",
  "red",
] as const;

export type NotionColor = (typeof notionColors)[number];

/** A span of time. Months are "YYYY-MM"; `end` is exclusive and omitted while ongoing. */
export interface Period {
  start: string;
  end?: string;
}

export interface Experience {
  org: string;
  role: string;
  color: NotionColor;
  periods: Period[];
}

export const experiences: Experience[] = [
  {
    org: "SmallestAI",
    role: "Research Engineer",
    color: "purple",
    periods: [{ start: "2026-06", end: "2026-09" }],
  },
  {
    org: "HackMIT",
    role: "DevOps + Sponsor relations",
    color: "pink",
    periods: [{ start: "2026-05", end: "2026-10" }],
  },
  {
    org: "MIT CSAIL + BCS",
    role: "Machine Learning Researcher",
    color: "red",
    periods: [{ start: "2025-09", end: "2026-07" }],
  },
  {
    org: "Amazon Web Services",
    role: "SDE Intern",
    color: "orange",
    periods: [
      { start: "2024-06", end: "2024-09" },
      { start: "2025-06", end: "2025-09" },
    ],
  },
  {
    org: "Vibrantec",
    role: "Team Lead & Full Stack Mobile App Developer",
    color: "green",
    periods: [{ start: "2024-01", end: "2025-07" }],
  },
];

/**
 * Converts a "YYYY-MM" month string to a fractional year.
 *
 * @param month month string such as "2024-06"
 * @returns the year plus the elapsed fraction, e.g. 2024.4167
 * @throws Error if the string is not in "YYYY-MM" form
 */
export function monthToYear(month: string): number {
  const match = /^(\d{4})-(\d{2})$/.exec(month);
  if (!match) {
    throw new Error(`Expected "YYYY-MM", got "${month}"`);
  }
  const year = Number(match[1]);
  const monthIndex = Number(match[2]) - 1;
  if (monthIndex < 0 || monthIndex > 11) {
    throw new Error(`Month out of range in "${month}"`);
  }
  return year + monthIndex / 12;
}

/**
 * Converts a date to a fractional year.
 *
 * @param date the date to convert
 * @returns the year plus the elapsed fraction of the year
 */
export function dateToYear(date: Date): number {
  const start = Date.UTC(date.getUTCFullYear(), 0, 1);
  const end = Date.UTC(date.getUTCFullYear() + 1, 0, 1);
  return date.getUTCFullYear() + (date.getTime() - start) / (end - start);
}
