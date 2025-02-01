import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1440px",
      },
      colors: {
        "very-dark-gray": "hsl(0, 0%, 17%)",
        "dark-gray": "hsl(0, 0%, 59%)",
      },
      fontSize: {
        "heading-lg": ["1.625rem", { fontWeight: 500, lineHeight: "1.875rem", letterSpacing: "-0.014rem" }],
        "heading-sm": ["1.25rem", { fontWeight: 500, lineHeight: "1.5rem", letterSpacing: "-0.011rem" }],
        "data-label-lg": ["0.75rem", { fontWeight: 600, letterSpacing: "0.109rem" }],
        "data-label-sm": ["0.625rem", { fontWeight: 600, letterSpacing: "0.091rem" }],
      },
      fontFamily: {
        sans: ['"Rubik"', "ui-sans-serif", "system-ui", "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      },
    },
  },
  plugins: [],
} satisfies Config;
