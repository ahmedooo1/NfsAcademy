<template>
    <div class="container mx-auto my-10">
      <h1 class="mb-5 text-4xl font-bold">Modifier l'article</h1>
      <form @submit.prevent="updateGuide" class="w-full max-w-lg">
        <div class="mb-4">
          <label class="block mb-2 text-sm font-bold text-gray-700" for="title">
            Titre
          </label>
          <input
            class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Titre de l'article"
            v-model="guide.title"
          />
        </div>
        <div class="mb-4">
          <label class="block mb-2 text-sm font-bold text-gray-700" for="description">
            Description
          </label>
        <IDEText id="description"  :guide="guide"  v-model="guide.description" class="" />

        </div>
        <div class="flex items-center justify-between">
          <button
            class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Mettre à jour
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    async asyncData({ params, $axios }) {
      const { id } = params;
      const { data } = await $axios.get(`/api/v1/guides/${id}`);
      return { guide: data };
    },
    methods: {
      async updateGuide() {
        try {
          await this.$axios.put(`/api/v1/guides/${this.guide._id}`, {
            title: this.guide.title,
            description: this.guide.description,
          });
          this.$toast.success("Mise à jour avec succès !");

          this.$router.push(`/guides/${this.guide._id}`);
        } catch (error) {
          console.error('Error updating guide:', error);
        }
      },
    },
  };
  </script>