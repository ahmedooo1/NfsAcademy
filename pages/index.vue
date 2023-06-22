<template>
 <div>
  <Navbar/>
  <HomeSections/> 
  <StuffList />
  <Footer/>
 </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import StuffList from '@/components/StuffList.vue';
import HomeSections from '@/components/HomeSections.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
      Navbar,
      StuffList,
     HomeSections,
     Footer,

    },
  name: 'IndexPage',
  auth: false,
}
</script>
