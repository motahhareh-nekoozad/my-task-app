export default defineNuxtConfig({
  compatibilityDate: '2022-05-01',
  devtools: { enabled: true },
 css: ['@/assets/css/tailwind.css',
    '@/assets/fonts/yekan.css', // 
 ],
   modules: [
    '@nuxtjs/tailwindcss',
  ],  
  components: [
    {
      path: '~/components',
      pathPrefix: false, // optional: removes folder prefix
    }
  ],
  
    build: {
    transpile: []
  }
})