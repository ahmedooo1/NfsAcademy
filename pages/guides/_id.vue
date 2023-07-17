<template>
  <div>
    <Navbar />
    <div
      v-if="guide"
      class="flex flex-col items-center justify-center w-5/6 p-6 m-auto mt-10 bg-white rounded-lg shadow md:w-3/4 sm:w-11/12 dark:text-slate-200 dark:bg-slate-900"
    >
      <button
      title="Signaler le guide"
        @click="reportGuide"
        class="right-0 flex items-center justify-around mt-4 ml-auto text-red-500 border border-red-500 rounded-full w-11 h-11"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 m-2 text-lg text-red-500 fill-current"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
          />
        </svg>

      </button>

      <h1 class="mb-4 text-3xl font-semibold">{{ guide.title }}</h1>
      <img
        :src="guide.imageUrl"
        alt="Guide image"
        class="object-cover w-full h-64 mb-4 rounded md:h-full md:w-full"
      />
      <p
        class="w-full text-gray-700 dark:text-slate-200 dark:bg-slate-900"
        v-html="guide.description"
      ></p>
      <!--  les boutons pour modifier et supprimer des articles ici -->
      <div
        v-if="$store.getters.isAdminOrRedacteur"
        class="flex justify-around w-full mt-4"
      >
        <button
          @click="editGuide"
          class="flex items-center justify-around px-4 py-2 mr-2 text-white bg-blue-500 rounded"
        >
          <svg
            class="w-4 m-2 text-white fill-current"
            viewBox="0 0 576 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"
            />
          </svg>
          Modifier
        </button>
        <button
          @click="deleteGuide"
          class="flex items-center justify-around px-4 py-2 text-white bg-red-500 rounded"
        >
          <svg
            class="w-4 m-2 text-white fill-current"
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M432 80h-82.38l-34-56.75C306.1 8.827 291.4 0 274.6 0H173.4C156.6 0 141 8.827 132.4 23.25L98.38 80H16C7.125 80 0 87.13 0 96v16C0 120.9 7.125 128 16 128H32v320c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V128h16C440.9 128 448 120.9 448 112V96C448 87.13 440.9 80 432 80zM171.9 50.88C172.9 49.13 174.9 48 177 48h94c2.125 0 4.125 1.125 5.125 2.875L293.6 80H154.4L171.9 50.88zM352 464H96c-8.837 0-16-7.163-16-16V128h288v320C368 456.8 360.8 464 352 464zM224 416c8.844 0 16-7.156 16-16V192c0-8.844-7.156-16-16-16S208 183.2 208 192v208C208 408.8 215.2 416 224 416zM144 416C152.8 416 160 408.8 160 400V192c0-8.844-7.156-16-16-16S128 183.2 128 192v208C128 408.8 135.2 416 144 416zM304 416c8.844 0 16-7.156 16-16V192c0-8.844-7.156-16-16-16S288 183.2 288 192v208C288 408.8 295.2 416 304 416z"
            />
          </svg>
          Supprimer
        </button>
      </div>
      <Comments :guideId="guide._id" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Comments from "~/components/Comments.vue";
export default {
  components: {
    Navbar,
    Comments,
  },
  data() {
    return {
      guide: null,
    };
  },
  watch: {
    "$store.state.user": {
      deep: true,
      handler() {
        this.$forceUpdate();
      },
    },
  },
  async asyncData({ params, $axios }) {
    const { id } = params;
    const { data } = await $axios.get(`/api/v1/guides/${id}`);
    return { guide: data };
  },

  methods: {
    async reportGuide() {
      try {
        // Vous pouvez ajouter ici une logique pour afficher une confirmation ou une boîte de dialogue à l'utilisateur
        // demandant la raison du signalement avant de le soumettre.

        // Ensuite, envoyez une requête à votre API pour signaler le guide.
        const authToken = localStorage.getItem("token");
        const headers = { Authorization: `Bearer ${authToken}` };
        await this.$axios.post(
          `/api/v1/guides/${this.guide._id}/report`,
          {},
          { headers }
        );

        // Affichez un message de confirmation à l'utilisateur
        this.$toast.success("Le guide a été signalé avec succès !");
      } catch (error) {
        // Gérez les erreurs ici, par exemple, affichez un message d'erreur à l'utilisateur
        console.error(error);
        this.$toast.error("Veuillez vous connectez pour pouvoir signaler le guide !");
      }
    },
    async editGuide() {
      // Redirigez l'utilisateur vers la page de modification avec l'ID du guide
      this.$router.push(`/guides/edit/${this.guide._id}`);
    },
    async deleteGuide() {
      try {
        const authToken = localStorage.getItem("token");
        const headers = { Authorization: `Bearer ${authToken}` };
        // Supprimez l'article via l'API
        await this.$axios.delete(`/api/v1/guides/${this.guide._id}`, {
          headers,
        });
        // Redirigez l'utilisateur vers la page d'accueil après la suppression
        this.$toast.success("Le guide a été supprimé avec succès !");
        this.$router.push("/guidesList");
      } catch (error) {
        // Gérez les erreurs ici, par exemple, affichez un message d'erreur à l'utilisateur
        console.error(error);
      }
    },
  },
};
</script>
