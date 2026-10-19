const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
      },
      // Notion's light theme palette. Each color has a text shade and a tinted background.
      colors: {
        notion: {
          text: "#37352F",
          muted: "#787774",
          faint: "#9B9A97",
          border: "#E9E9E7",
          surface: "#F7F6F3",
          accent: "#2383E2",
          gray: "#787774",
          "gray-bg": "#F1F1EF",
          brown: "#9F6B53",
          "brown-bg": "#F4EEEE",
          orange: "#D9730D",
          "orange-bg": "#FBECDD",
          yellow: "#CB912F",
          "yellow-bg": "#FBF3DB",
          green: "#448361",
          "green-bg": "#EDF3EC",
          blue: "#337EA9",
          "blue-bg": "#E7F3F8",
          purple: "#9065B0",
          "purple-bg": "#F6F3F9",
          pink: "#C14C8A",
          "pink-bg": "#FAF1F5",
          red: "#D44C47",
          "red-bg": "#FDEBEC",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
