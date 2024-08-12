// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['@/assets/root.css'],
  modules: ['@nuxtjs/tailwindcss', 'nuxt-swiper', '@nuxt/image']
})