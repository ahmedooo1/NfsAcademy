<template>
  <button
    class="fixed z-20 w-12 h-12 overflow-hidden text-white bg-gray-800 rounded-full shadow-lg bottom-4 right-4"
    @click="$emit('toggle', !darkMode)"
    :title="darkMode ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <div class="flex items-center justify-center h-12">
      <i
        class="transition-transform duration-500 transform material-icons"
        v-if="darkMode"
      >
      <svg data-name="Layer 1" id="Layer_1" viewBox="0 0 64 64" class="w-6 h-6" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:#efcc00;}.cls-2{fill:none;stroke:#efcc00;stroke-linecap:round;stroke-miterlimit:10;stroke-width:3px;}</style></defs><title/><circle class="cls-1" cx="32" cy="32" r="17"/><line class="cls-2" x1="32" x2="32" y1="5" y2="11"/><line class="cls-2" x1="32" x2="32" y1="53" y2="59"/><line class="cls-2" x1="59" x2="53" y1="32" y2="32"/><line class="cls-2" x1="11" x2="5" y1="32" y2="32"/><line class="cls-2" x1="51.09" x2="46.85" y1="12.91" y2="17.15"/><line class="cls-2" x1="17.15" x2="12.91" y1="46.85" y2="51.09"/><line class="cls-2" x1="51.09" x2="46.85" y1="51.09" y2="46.85"/><line class="cls-2" x1="17.15" x2="12.91" y1="17.15" y2="12.91"/></svg>
      </i>
      <i
        class="transition-transform duration-500 transform material-icons"
        v-else
      >
        <svg data-name="Layer 1" id="Layer_1" viewBox="0 0 64 64" class="w-6 h-6" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:#efcc00;}</style></defs><title/><path class="cls-1" d="M44.54,41.47A23,23,0,0,1,24.49,11.73,1,1,0,0,0,23,10.59,23,23,0,1,0,54.41,42a1,1,0,0,0-1.14-1.47A23.06,23.06,0,0,1,44.54,41.47Z"/></svg>
      </i>
    </div>
  </button>
</template>

<script>
export default {
  props: ['darkMode'],
};
</script>

<style scoped>
.material-icons {
  font-size: 1.5rem;
  transition: transform 0.5s ease;
}

button:focus {
  outline: none;
}

button:hover .material-icons {
  transform: rotate(180deg);
}
</style>