<template>
  <div class="flex items-center space-x-2">
    <span>Light mode</span>
    <div
      class="h-5 p-1 border rounded-full w-9"
      :class="{ 'bg-primary-light':!darkMode, 'bg-primary-dark':darkMode }"
      @click="$emit('toggle', !darkMode)"
    >
      <div
        class="w-3 h-3 bg-white border border-solid rounded-full shadow"
        :class="{ 'translate-x-4': darkMode, 'translate-x-0': !darkMode }"
      ></div>
    </div>
    <span>Dark mode</span>
  </div>
</template>

<script>
export default {
  props: ['darkMode'],
};
</script>

<style>
.border-1 {
  border-width: 1px;
}
.bg-primary-light {
  background-color: #e2e8f0;
}
.bg-primary-dark {
  background-color: #2d3748;
  color: #e2e8f0;
}
</style>