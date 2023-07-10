<template>
  <div>
    <div
      :class="{
        'bg-light-bg': !darkMode,
        'bg-dark-bg': darkMode,
        'text-light-text': !darkMode,
        'text-dark-text': darkMode,
        dark: darkMode,
        light: !darkMode,
      }"
    >
      <!-- <dark-mode-toggle :darkMode="darkMode" @toggle="toggleDarkMode" /> -->
      <dark-mode-btn :darkMode="darkMode" @toggle="toggleDarkMode" />
      <nuxt />
    </div>
  </div>
</template>

<script>
import DarkModeToggle from "~/components/dark-mode-toggle.vue";
import DarkModeBtn from "~/components/dark-mode-btn.vue";

export default {
  components: {
    DarkModeToggle,
    DarkModeBtn,
  },
  data() {
    return {
      darkMode: false,
    };
  },
  methods: {
    toggleDarkMode(darkMode) {
      this.darkMode = darkMode;
    },
  },
};
</script>

<style>
body {
  transition: background-color 0.5s ease;
}
</style>
