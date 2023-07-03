import Vue from 'vue'

Vue.component('client-only-placeholder', {
  functional: true,
  render(h, { children }) {
    if (process.client) {
      return children
    }
  },
})