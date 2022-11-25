// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: `
            @use '@/assets/css/_variables' as *
            @use '@/assets/css/_mixins' as *
            @use '@/assets/css/_fonts' as *
          `
        }
      }
    }
  }
})
