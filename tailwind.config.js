/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          50: '#FDFBF7',
          100: '#FAF6F0',
          200: '#F5EFEB',
          300: '#EDE4DC',
          400: '#DFD2C4',
        },
        earth: {
          900: '#2A1815',
          800: '#3D221D',
          700: '#522F29',
          600: '#6C4038',
          500: '#8A564C',
          400: '#A97166',
          300: '#C79288',
          200: '#E2B8B0',
          100: '#F3DDD8',
        },
        rosewood: {
          50: '#FAF0F1',
          100: '#F5DEE1',
          200: '#EBBEC3',
          300: '#DE9DA4',
          400: '#CE7882',
          500: '#BC5964',
          600: '#A2434E',
        },
        accent: {
          blue: '#3A6878',
          lightBlue: '#DCE8EC',
          terracotta: '#D15F3D',
          gold: '#C9933B',
          sage: '#4D6B53',
        }
      },
      fontFamily: {
        serif: ['"Fraunces"', '"Playfair Display"', 'Georgia', 'serif'],
        script: ['"Caveat"', '"Marck Script"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'paper': '0 4px 20px -2px rgba(61, 34, 29, 0.08), 0 2px 6px -1px rgba(61, 34, 29, 0.04)',
        'paper-lg': '0 12px 35px -4px rgba(61, 34, 29, 0.12), 0 4px 12px -2px rgba(61, 34, 29, 0.06)',
        'paper-xl': '0 20px 50px -6px rgba(61, 34, 29, 0.16), 0 8px 20px -3px rgba(61, 34, 29, 0.08)',
        'stamp': '0 2px 8px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
}
