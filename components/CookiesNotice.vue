<template>
  <div
    v-if="!cookies.accepted && !cookies.rejected"
    class="fixed bottom-0 left-0 z-40"
    ref="fixedEl"
  >
    <div
      class="fixed max-w-md p-4 space-y-2 bg-white border-2 border-gray-300 rounded-lg shadow-lg sm:w-full dark:text-slate-200 dark:bg-slate-900 left-4 bottom-4 "
    >
      <p class="text-base font-medium">
        NFS Academy utilise des cookies pour améliorer votre expérience
        utilisateur.
        <span class="text-2xl">🍪</span>
      </p>
      <div class="flex flex-col sm:flex-row sm:space-x-2 sm:justify-end">
        <button
          class="w-full px-4 py-2 mt-2 text-white bg-green-500 rounded-md btn btn-gray-400 sm:mt-0 sm:w-auto hover:bg-green-700"
          @click="acceptCookies"
        >
          Accepter
        </button>
        <button
          class="w-full px-4 py-2 mt-2 text-white bg-red-500 rounded-md btn btn-gray-400 sm:mt-0 sm:w-auto hover:bg-red-700"
          @click="rejectCookies"
        >
          Refuser
        </button>
        <button
          class="w-full mt-2 text-gray-600 btn sm:w-auto"
          @click="$router.push('/confidentialite')"
        >
          En savoir plus
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { getCookie } from "cookie-universal-nuxt";

export default {
  methods: {
    ...mapActions({
      acceptCookies: "cookies/accept",
      rejectCookiesAction: "cookies/reject",
    }),
    rejectCookies() {
      this.$cookies.set("accepted", false);
      this.$cookies.set("rejected", true, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
      });
      this.rejectCookiesAction();
    },
  },
  computed: {
    cookies() {
      return this.$store.state.cookies;
    },
  },
  mounted() {
    const accepted = this.$cookies.get("accepted");
    if (accepted) {
      this.$store.dispatch("cookies/accept");
    } else {
      const rejected = this.$cookies.get("rejected");
      if (rejected) {
        this.$store.commit("cookies/setRejected", true);
      } else {
        setTimeout(() => {
          this.$el.querySelector(".fixed").classList.add("animate-popup");
          this.$el.querySelectorAll(".btn")[0].focus();
        }, 2000);
      }
    }
  },
  beforeDestroy() {
    if (this.$refs.fixedEl) {
      this.$refs.fixedEl.classList.remove("animate-popup");
    }
  },
};
</script>

<style scoped>
.fixed {
  transition: transform 0.5s, opacity 0.5s;
}
.animate-popup {
  transform: translateY(0) translateX(0);
  opacity: 1;
}
</style>
