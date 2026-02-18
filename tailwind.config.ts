import type { Config } from "tailwindcss";

export default {
  darkMode: "media",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "shrink-0",
    "transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-parkinsans)"],
        outfit: ["var(--font-parkinsans)"], // Override existing usage
        greatvibes: ["var(--font-greatvibes)"],
      },
      colors: {
        // Brand/Primary colors (Cyan/Teal - Emanate)
        primary: { light: "#f0fdfd", medium: "#15c2c1", dark: "#063c23" },
      },
    },
  },
  plugins: [],
} satisfies Config;

// yellow #D4AF37
