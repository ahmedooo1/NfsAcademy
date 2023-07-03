<template>
  <div>
    <Navbar />
    <div
      v-if="guide"
      class="flex flex-col items-center justify-center w-5/6 p-6 m-auto mt-10 bg-white rounded-lg shadow md:w-3/4 sm:w-11/12"
    >
      <h1 class="mb-4 text-3xl font-semibold">{{ guide.title }}</h1>
      <img
        :src="guide.imageUrl"
        alt="Guide image"
        class="object-cover w-full h-64 mb-4 rounded md:h-full md:w-full"
      />
<p class="w-full text-gray-700" v-html="guide.description"></p>
      <!--  les boutons pour modifier et supprimer des articles ici -->
      <div v-if="$store.getters.isAdminOrRedacteur" class="mt-4">
        <button
          @click="editGuide"
          class="px-4 py-2 mr-2 text-white bg-blue-500 rounded"
        >
          Modifier
        </button>
        <button
          @click="deleteGuide"
          class="px-4 py-2 text-white bg-red-500 rounded"
        >
          Supprimer
        </button>
      </div>
      <Comments :guideId="guide._id" />
    </div>
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
        this.$toast.success("supprimé avec succès !");
        this.$router.push("/guidesList");
      } catch (error) {
        // Gérez les erreurs ici, par exemple, affichez un message d'erreur à l'utilisateur
        console.error(error);
      }
    },
  },
};
</script>
