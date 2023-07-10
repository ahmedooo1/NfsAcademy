export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'NfsAcademy',
    htmlAttrs: {
      lang: 'fr'
    },
    script: [
   
  ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'nfs academy online guides courses, free guides, guides gratuits, gratuit' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
      },
     
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/flowbite.css'
  ],
  plugins:[
    '~/plugins/cookies.js',
    '~/plugins/vue-scrollto',
    '~/plugins/client-only-placeholder.js',
  { src: '~/plugins/toast.js', mode: 'client' },
  '~/plugins/axios.js',
  { src: '~/plugins/vue-apexcharts.js', mode: 'client' }

  
  ],
 
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://nodeapi.hop.sh/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  },
  router: {
    middleware: ['auth']
  },
  
}

