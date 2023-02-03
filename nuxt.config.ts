// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: `
            @import '@/assets/css/_variables'
            @import '@/assets/css/_mixins'
            @import '@/assets/css/_fonts'
            @import '@/assets/css/_helpers'
            @import '@/assets/css/_layout'
          `
        }
      }
    }
  }
})
