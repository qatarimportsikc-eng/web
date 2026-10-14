import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f7f3",
          100: "#dcece3",
          200: "#bad9c9",
          300: "#8dbfa8",
          400: "#5aa082",
          500: "#378363",
          600: "#27684f",
          700: "#205441",
          800: "#1b4437",
          900: "#0f2f25",
          950: "#0a231b",
        },
        gold: {
          50: "#fbf8ed",
          100: "#f6efd2",
          200: "#eddda1",
          300: "#e3c766",
          400: "#d9b23f",
          500: "#c9a227",
          600: "#a9831d",
          700: "#86631b",
          800: "#6e501d",
          900: "#5d431d",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(10, 35, 27, 0.18)",
        card: "0 2px 12px -4px rgba(10, 35, 27, 0.10)",
        glow: "0 0 0 1px rgba(201, 162, 39, 0.25), 0 12px 40px -16px rgba(201, 162, 39, 0.45)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #e3c766 0%, #c9a227 45%, #a9831d 100%)",
        "brand-gradient": "linear-gradient(135deg, #1b4437 0%, #0f2f25 60%, #0a231b 100%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
