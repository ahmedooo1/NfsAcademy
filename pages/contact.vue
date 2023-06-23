<template>
    <div>
     <Navbar/>
     <ContactForm/>
     <Footer/>
    </div>
   </template>
   
   <script>
   import Navbar from '@/components/Navbar.vue';
   import ContactForm from '@/components/ContactForm.vue';
   import Footer from '@/components/Footer.vue';
   
   export default {
     components: {
         Navbar,
         ContactForm,
        Footer,
   
       },
     name: 'IndexPage',
     auth: false,
   }
   </script>
   