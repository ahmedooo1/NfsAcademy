<template>
  <div>   
    <Navbar/>
    <Profil />
    <Footer/>
  </div>
 
  </template>
  
  <script>
  import Profil from '@/components/Profil'  
  export default {
    components: {
      Profil,
      
    },
    name: 'IndexPage',
    meta: {
    auth: true,
  },

  }
  </script>