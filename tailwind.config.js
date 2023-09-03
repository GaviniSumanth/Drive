/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F36D21',
        success: '#84CC16',
        warning: '#FB923C',
        error: '#F97C7C'
      }
    }
  },
  // safelist: ['btn-primary']
  plugins: [require('@tailwindcss/typography')]
}
