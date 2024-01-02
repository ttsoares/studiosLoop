/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "0.938rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      "6xl": "4.3rem",
    },
    extend: {
      colors: {
        cus_dgray: "hsl(0, 0%, 55%)",
        cus_vdgray: "hsl(0, 0%, 41%)",
      },

      screens: {
        sm: "375px",
        md: "976px",
        lg: "1440px",
      },
      fontFamily: {
        alata: "var(--font-alata)",
        josefile: "var(--font-josefine)",
      },
    },
  },
  plugins: [],
};
