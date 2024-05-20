/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
       "bg-pattern": "url('src/img/bg-app.jpg')"
      }
    },
    fontFamily: {
      'nunito': ["Nunito", 'san-serif']
    }
  },
  plugins: [],
}

