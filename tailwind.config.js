/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        academy: {
          ink: '#17151F',
          violet: '#4B22B8',
          bright: '#5A31F4',
          mist: '#F6F5FA',
          line: '#E8E5F0',
        },
      },
      boxShadow: {
        soft: '0 18px 60px rgba(37, 28, 70, 0.10)',
        lift: '0 10px 32px rgba(75, 34, 184, 0.16)',
      },
      fontFamily: {
        sans: ['Inter', 'Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
