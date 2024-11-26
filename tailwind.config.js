/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#949494",
          50: " #F6F8FD",
          DEFAULT: "#C8C8C8",
          foreground: "hsl(var(--primary-foreground))",
        },
        dark: {
          700: "#060606",
          500: "#1A1A1A",
          400: "#2E2E2E",

          DEFAULT: "#121212",
          foreground: "hsl(var(--dark-foreground))",
        },
        second: {
          DEFAULT: "#ff4000d5",
        },
        third: {
          DEFAULT: "#9000ff73",
        },

        grey: {
          600: "#545454", // Subdued - color name in figma
          500: "#757575",
          400: "#AFAFAF", // Disabled - color name in figma
          50: "#F6F6F6", // White Grey - color name in figma
        },
        black: "#000000",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
