export default defineNuxtConfig({
  app: {
    baseURL: '/last-task-2035/',
    buildAssetsDir: "/last-task-2035/_nuxt/",
    head: {
      titleTemplate: 'Last Task 2035',
      title: '0.0.1',
    }
  },
  devtools: {
    enabled: false,

    timeline: {
      enabled: true
    }
  },
  css: ['~/assets/main.scss'],

  modules: [
    '@pinia/nuxt',
    'unplugin-icons/nuxt'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})