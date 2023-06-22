<template>
  <div>   
    <Navbar/>
    <Profil />
  </div>
 
  </template>
  
  <script>
  import Profil from '@/components/Profil'
  
  export default {
    components: {
      Profil
    },
    name: 'IndexPage',
    meta: {
    auth: true,
  },

  }
  </script>