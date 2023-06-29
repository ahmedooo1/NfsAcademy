<template>
 <div>
  <Navbar/>
  <StuffList />
  <Footer/>
 </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import StuffList from '@/components/StuffList.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
      Navbar,
      StuffList,
     Footer,

    },
  name: 'IndexPage',
  auth: false,
}
</script>
