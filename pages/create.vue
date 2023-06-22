<template>
    <div>
      <AddGuide />
    </div>
  </template>
  
  <script>
  import AddGuide from '@/components/AddGuide.vue';
  
  export default {
    components: {
      AddGuide,
    },
    meta: {
    auth: true,
  },
  };
  </script>