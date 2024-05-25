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
        'fadeOutNoScale': 'fadingOutNoScale 0.4s ease-in',
        'fadeInNoScale': 'fadingInNoScale 0.4s ease-in',
        'fadeUp': 'fadeUp 1s ease-in-out forwards'
      },
      keyframes: {
        fadingOut: {
          '0%': {
            opacity: '1',
            transform: 'scale(1)'
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
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        fadingOutNoScale: {
          '0%': {
            opacity: '1'
          },
          '100%': {
            opacity: '0',
          }
        },
        fadingInNoScale: {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        },
        fadeUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(800px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      }
    },
    fontFamily: {
      'nunito': ["Nunito", 'san-serif']
    }
  },
  plugins: [],
}

