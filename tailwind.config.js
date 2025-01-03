/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        grey:{
          app:"#f9fbfc"

        },
        purple:{
          300:"#e0e7ff",
          500:"#5046e4",
          600:"#3931aa"
        }
      }
    },
  },
  plugins: [],
}

