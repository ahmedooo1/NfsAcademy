<template>
  <div>
    <Navbar />
    <div
      v-if="guide"
      class="md:w-1/2 sm:w-11/12 w-5/6 bg-white shadow rounded-lg p-6 flex flex-col justify-center items-center m-auto mt-10"
    >
      <h1 class="text-3xl font-semibold mb-4">{{ guide.title }}</h1>
      <img
        :src="guide.imageUrl"
        alt="Guide image"
        class="w-full h-64 object-cover mb-4 rounded md:h-full md:w-full"
      />
      <p class="text-gray-700">{{ guide.description }}</p>
      <!--  les boutons pour modifier et supprimer des articles ici -->
      <div v-if="$store.getters.isAdminOrRedacteur" class="mt-4">
        <button
          @click="editGuide"
          class="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Modifier
        </button>
        <button
          @click="deleteGuide"
          class="bg-red-500 text-white px-4 py-2 rounded"
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
        this.$toast.success("Guide deleted successfully");
        this.$router.push("/");
      } catch (error) {
        // Gérez les erreurs ici, par exemple, affichez un message d'erreur à l'utilisateur
        console.error(error);
      }
    },
  },
};
</script>
