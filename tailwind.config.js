/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.{js,ts}",
    "./node_modules/flowbite/**/*.{js,ts}"


  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#1a202c',
          secondary: '#a0aec0',
          accent: '#e2e8f0',
          background: '#ffffff',
          text: '#1a202c'
        },
        dark: {
          primary: '#ffffff',
          secondary: '#a0aec0',
          accent: '#2d3748',
          background: '#1a202c',
          text: '#e2e8f0'
        },
      },
      fontFamily: {
        'material-icons': ['Material Icons'], // Ajoutez la police des icônes de Material icons ici
      },
    },
  },
  plugins: [
    require('flowbite/plugin')

  ],
}

