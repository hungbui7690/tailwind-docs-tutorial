/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      // (1)
      spacing: {
        128: '32rem',
      },
    },
  },
  plugins: [],
}
