/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-blue-1": "#E7EBF2",
        "light-blue-2": "#d1e1f6",
        "light-blue-3": "#BFD6F4",
        "dark-blue-1": "#3A6286",
        "dark-blue-2": "#2d67a4",
        "dark-blue-3": "#184A81",
        "dark-grey": "#2E2C2C"
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
