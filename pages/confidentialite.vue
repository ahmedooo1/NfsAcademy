<template>
  <div>
    <Navbar />
    <Confidentialite />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Confidentialite from "@/components/Confidentialite.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navbar,
    Confidentialite,
    Footer,
  },
  name: "IndexPage",
  auth: false,
};
</script>
