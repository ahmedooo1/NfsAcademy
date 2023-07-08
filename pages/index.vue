<template>
  <div>
    <Navbar />
    <HomeSections />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import HomeSections from "@/components/HomeSections.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navbar,
    HomeSections,
    Footer,
  },
  name: "IndexPage",
  auth: false,
};
</script>
