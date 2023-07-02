export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'NfsAcademy_front',
    htmlAttrs: {
      lang: 'fr'
    },
    script: [
      {
          src: 'https://cdn.tiny.cloud/1/qy48pjg71k9urdmpfkn5nqx4v6jbwwt8ieju0y8vvlpvo3pz/tinymce/5/tinymce.min.js',
          defer: true
      }
  ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdn.tiny.cloud/1/qy48pjg71k9urdmpfkn5nqx4v6jbwwt8ieju0y8vvlpvo3pz/tinymce/5/skins/ui/oxide/skin.min.css'
    }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/flowbite.css'
  ],
  plugins:[
  { src: '~/plugins/toast.js', mode: 'client' },
  '~/plugins/axios.js',
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
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://localhost:5000/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  },
  router: {
    middleware: ['auth']
  },
  
}

