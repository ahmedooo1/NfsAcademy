<template>
  <div>
    <Navbar />
    <div class="container w-3/4 mx-auto">
      <h1>Créer un nouveau guide</h1>
      <h1 class="mb-6 text-2xl font-semibold">Ajouter un guide</h1>
      <form @submit.prevent="addGuide" class="space-y-4">
        <div>
          <div>
            <label for="parentCategory" class="block text-sm font-medium text-gray-700"
              >Catégorie parente :</label
            >
            <select
              id="parentCategory"
              v-model="selectedParentCategory"
              class="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md"
            >
              <option
                v-for="parentCategory in parentCategories"
                :key="parentCategory._id"
                :value="parentCategory._id"
              >
                {{ parentCategory.name }}
              </option>
            </select>
          </div>
          <div>
            <label for="category" class="block text-sm font-medium text-gray-700"
              >Catégorie :</label
            >
            <select
              id="category"
              v-model="selectedCategory"
              class="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md"
            >
              <option
                v-for="category in categories"
                :key="category._id"
                :value="category._id"
              >
                {{ category.name }}
              </option>
            </select>
          </div>
          <div class="flex items-center justify-center w-full">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  aria-hidden="true"
                  class="w-10 h-10 mb-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-semibold">Click to upload</span>
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">PNG, JPG, JPEG</p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                @change="onFileSelected"
                class="border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
              />
            </label>
          </div>
        </div>

        <div>
          <label for="title" class="block text-sm font-medium text-gray-700"
            >Titre :</label
          >
          <input
            type="text"
            id="title"
            v-model="guide.title"
            required
            class="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label for="description" class="block text-sm font-medium text-gray-700"
            >Description :</label
          >
          <textarea
            id="description"
            v-model="guide.description"
            required
            class="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md"
          ></textarea>
        </div>
        <button
          type="submit"
          class="px-4 py-2 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Ajouter le guide
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      guide: {
        title: "",
        description: "",
      },
      imageFile: null,
      parentCategories: [],
      categories: [],
      selectedParentCategory: null,
      selectedCategory: null,
    };
  },
  async created() {
    try {
      const { data } = await this.$axios.get("api/v1/categories");
      this.parentCategories = data.data.map((category) => ({
        ...category,
        subcategories: category.subcategories || [],
      }));
      console.log(
        "Fetched parent categories:",
        JSON.stringify(this.parentCategories, null, 2)
      );
    } catch (err) {
      console.error(err);
    }
  },
  watch: {
    selectedParentCategory() {
      const parentCategory = this.parentCategories.find(
        (c) => c._id === this.selectedParentCategory
      );
      this.categories = parentCategory ? parentCategory.subcategories : [];
    },
  },
  methods: {
    onFileSelected(event) {
      this.imageFile = event.target.files[0];
    },
    async addGuide() {
      try {
        const formData = new FormData();
        formData.append("title", this.guide.title);
        formData.append("description", this.guide.description);
        formData.append("parentCategory", this.selectedParentCategory);
        formData.append("category", this.selectedCategory);
        if (this.imageFile) {
          formData.append("image", this.imageFile, this.imageFile.name);
        }

        const { data } = await this.$axios.post("api/v1/guides", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("Guide ajouté avec succès:", data);
        this.$router.push("/guidesList");
        this.$toast.success("Votre guide a été ajouté avec succès !");
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 2rem;
}
</style>
