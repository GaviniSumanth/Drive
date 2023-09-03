// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@fortawesome/fontawesome-svg-core/styles.css', '~/assets/css/app.css'],
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  build: {
    transpile: ['@fortawesome/vue-fontawesome']
  }
})
