/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#101A34',
        secondary:'#5E6577',
        lightBlue:"#50BCD9",
        customGray:"#fafbfd"
      },
    },
  },
  plugins: [],
}
