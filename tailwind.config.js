/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
    },
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        background: 'var(--color-background)',
        text: 'var(--color-text)',
      },
      transitionProperty: {
        'theme': 'background-color, color',
      },
    },
  },
  plugins: [],
};