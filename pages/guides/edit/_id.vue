<template>
    <div class="container mx-auto my-10">
      <h1 class="text-4xl font-bold mb-5">Modifier l'article</h1>
      <form @submit.prevent="updateGuide" class="w-full max-w-lg">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
            Titre
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Titre de l'article"
            v-model="guide.title"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="description">
            Description
          </label>
          <textarea
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Description de l'article"
            v-model="guide.description"
            rows="4"
          ></textarea>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
  
          this.$router.push(`/guides/${this.guide._id}`);
        } catch (error) {
          console.error('Error updating guide:', error);
        }
      },
    },
  };
  </script>