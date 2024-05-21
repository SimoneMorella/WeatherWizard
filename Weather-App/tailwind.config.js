/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fadeOut': 'fadingOut 0.3s ease-out forwards',
        'fadeIn': 'fadingIn 0.3s ease-in forwards',
        'fadeOutNoScale': 'fadingOutNoScale 0.3s ease-in forwards',
        'fadeInNoScale': 'fadingInNoScale 0.3s ease-in forwards',
      },
      keyframes: {
        fadingOut: {
          '0%': {
            opacity: '1',
            transform: 'scale(1)'
          },
          '50%': {
            opacity: '0.5',
            transform: 'scale(0.5)'
          },
          '100%': {
            opacity: '0',
            transform: 'scale(0)'
          }
        },
        fadingIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0)'
          },
          '50%': {
            opacity: '0.5',
            transform: 'scale(0.5)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        fadingOutNoScale: {
          '0%': {
            opacity: '1'
          },
          '50%': {
            opacity: '0.5'
          },
          '100%': {
            opacity: '0',
          }
        },
        fadingInNoScale: {
          '0%': {
            opacity: '0'
          },
          '50%': {
            opacity: '0.5'
          },
          '100%': {
            opacity: '1'
          }
        },
      },
      backgroundImage: {
        dayBg: "url('src/img/dayBg.png')",
        nightBg: "url('src/img/nightBg.png')"
      }
    },
    fontFamily: {
      'nunito': ["Nunito", 'san-serif']
    }
  },
  plugins: [],
}

