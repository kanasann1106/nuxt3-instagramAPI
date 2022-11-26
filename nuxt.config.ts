// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['vuetify/lib/styles/main.sass', 'mdi/css/materialdesignicons.min.css'],
    build: {
      transpile: ['vuetify'],
    },
    runtimeConfig: {
      public: {
        instagramApiUrl: process.env.INSTAGRAM_API_URL,
        userId: process.env.USER_ID,
        accessToken: process.env.ACCESS_TOKEN,
      }
    }
})
