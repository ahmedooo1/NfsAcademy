<template>
  <div>
    <Navbar />
    <div class="container mx-auto my-10">
      <h1 class="mb-5 text-4xl font-bold">Modifier l'article</h1>
      <form
        @submit.prevent="updateGuide"
        class="flex flex-col items-center justify-center w-5/6 p-6 m-auto mt-10 bg-white rounded-lg shadow md:w-3/4 sm:w-11/12 dark:text-slate-200 dark:bg-slate-900"
      >
        <div class="mb-4">
          <label class="block mb-2 text-sm font-bold" for="title">
            Titre
          </label>
          <input
            class="w-full px-3 py-2 leading-tight border rounded shadow appearance-none dark:text-black focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Titre de l'article"
            v-model="guide.title"
          />
        </div>
        <div class="mb-4">
          <label class="block mb-2 text-sm font-bold" for="description">
            Description
          </label>

          <editor
            id="description"
            :guide="guide"
            v-model="guide.description"
            api-key="qy48pjg71k9urdmpfkn5nqx4v6jbwwt8ieju0y8vvlpvo3pz"
            :init="{
              height: 500,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount',
              ],
              toolbar:
                'undo redo | formatselect | bold italic forecolor backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help',
            }"
          />
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
    <Footer />
  </div>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";

export default {
  components: {
    Editor,
  },
  meta: {
    auth: true,
  },
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
        console.error("Error updating guide:", error);
      }
    },
  },
};
</script>
