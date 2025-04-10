/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        facebook: [
          '"Facebook Sans"',
          "Helvetica",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],

        orbitron: ["var(--font-orbitron)", "sans-serif"],
      },

      colors: {
        "primary-blue": "#0866ff",
        facebookGray: "#65686c",
        bgInputHome: "#0000000A",
      },
    },
  },
  plugins: [],
};
