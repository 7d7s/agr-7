import type { Config } from "tailwindcss";

export default {
  darkMode: 'media',
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
      },
      colors: {
        // Brand/Primary colors (Cyan/Teal - Emanate)
        primary: {
          50: '#f0fdfd',
          100: '#ccfbfb',
          200: '#99f6f6',
          300: '#5ceded',
          400: '#22dcdc',
          500: '#15c2c1', // Brand Primary
          600: '#0e9b9b',
          700: '#0b7979',
          800: '#096060',
          900: '#084e4e',
          light: '#f0fdfd',
          medium: '#15c2c1',
          dark: '#084e4e',
        },
        // Secondary colors (Darker Teal/Slate)
        secondary: {
          50: '#f0f9f9',
          100: '#d5f0f0',
          200: '#afe0e0',
          300: '#7ecbcb',
          400: '#4db0b0',
          500: '#10a3a2', // Brand Secondary
          600: '#0b8281',
          700: '#0a6868',
          800: '#095454',
          900: '#084545',
        },
        // Accent Color
        accent: {
          DEFAULT: '#10a3a2',
          hover: '#0b8281',
        },
        // Neutral colors (replacing gray-*)
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        // Semantic colors
        success: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          700: '#15803D',
        },
        warning: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          700: '#A16207',
        },
        danger: {
          50: '#fff1f0',
          100: '#ffe4e1',
          200: '#ffc9c2',
          300: '#ffa094',
          400: '#ff6b5b',
          500: '#e05b4a', // Brand Red
          600: '#cc3e2c',
          700: '#ab2e1f',
          800: '#8d291d',
          900: '#75281e',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;


// yellow #D4AF37
