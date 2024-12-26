/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#007BFF",
          secondary: "#FF5722",
          accent: "#FFD700",
          background: "#FFFFFF",
          text: "#1E293B",
          card: "#F5F5F5",
        },
        dark: {
          primary: "#90CAF9",
          secondary: "#FF7043",
          accent: "#FFC107",
          background: "#121212",
          text: "#FFFFFF",
          card: "#1E1E1E",
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
