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
 darkMode: 'class', 
 lightMode: 'class', 
  theme: {
    extend: {
    
        backgroundColor: {
          'light-bg': '#f8f9fa',
          'dark-bg': '#212529',
        },
        textColor: {
          'light-text': '#212529',
          'dark-text': '#f8f9fa',
        },
      },
      fontFamily: {
        'material-icons': ['Material Icons'], // Ajoutez la police des icônes de Material icons ici
      },
    
  },
  plugins: [
    require('flowbite/plugin')

  ],
}

