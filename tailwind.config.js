/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"TWK Lausanne"', 'sans-serif'],
      },
      fontWeight: {
        '200': '200',
        '250': '250',
        '300': '300',
        '350': '350',
        '400': '400',
        '450': '450',
        '500': '500',
        '550': '350',
        '600': '600',
        '650': '650',
        '700': '700',
      },
    },
  },
  plugins: [],
}

