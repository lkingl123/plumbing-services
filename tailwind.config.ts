import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lapis: "#2F6690", // Lapis Lazuli
        cerulean: "#3A7CA5", // Cerulean
        platinum: "#D9DCD6", // Platinum
        indigo: "#16425B", // Indigo Dye
        sky: "#81C3D7", // Sky Blue
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"], // Use Inter for sans-serif globally
        heading: ["Inter", "serif"], // Use Inter for headings as well
      },
    },
  },
  plugins: [],
} satisfies Config;
