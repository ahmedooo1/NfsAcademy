<template>
  <div>
    <Navbar />
    <div class="container py-6 mx-auto">
      <h1 class="mb-6 text-3xl font-extrabold text-gray-800 ">Ajouter un guide</h1>
      <form @submit.prevent="addGuide" class="p-4 bg-white rounded-lg shadow-2xl">
        <div class="px-6 mb-6 md:flex md:justify-between md:items-center">
          <div>
            <label class="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0" for="parentCategory">
              Catégorie parente :
            </label>
          </div>
          <div class="w-full md:w-3/4">
            <div class="relative">
              <select id="parentCategory" v-model="selectedParentCategory" class="block w-full px-4 py-3 pr-8 text-gray-700 bg-gray-100 border border-gray-300 rounded-md appearance-none focus:outline-none focus:bg-white focus:border-gray-500">
                <option disabled value="">Choisissez une catégorie parente</option>
                <option v-for="parentCategory in parentCategories" :key="parentCategory._id" :value="parentCategory._id">
                  {{ parentCategory.name }}
                </option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 8l4 4 4-4"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="px-6 mb-6 md:flex md:justify-between md:items-center">
          <div >
            <label class="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0" for="category">
              Catégorie :
            </label>
          </div>
          <div class="w-full md:w-3/4">
            <div class="relative">
              <select id="category" v-model="selectedCategory" class="block w-full px-4 py-3 pr-8 text-gray-700 bg-gray-100 border border-gray-300 rounded-md appearance-none focus:outline-none focus:bg-white focus:border-gray-500">
                <option disabled value="">Choisissez une catégorie</option>
                <option v-for="category in categories" :key="category._id" :value="category._id">
                  {{ category.name }}
                </option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 8l4 4 4-4"></path>                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="px-6 mb-6">
          <label class="block mb-2 font-bold text-gray-500" for="image">
            Image :
          </label>
          <div class="flex flex-col items-center space-y-4">
            <label
              for="dropzone-file"
              class="relative flex flex-col items-center justify-center w-full bg-gray-100 border-2 border-gray-300 border-dashed rounded-md cursor-pointer h-80 md:h-56 hover:bg-gray-200 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
            >
              <div class="text-center">
                <svg class="w-12 h-12 mx-auto text-gray-400 transition-colors duration-300 ease-in-out group-hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                </svg>
                <p class="text-sm text-gray-500 transition-colors duration-300 ease-in-out group-hover:text-gray-600">
                  <span>Ajouter une image</span>
                </p>
                <p class="text-xs text-gray-500 transition-colors duration-300 ease-in-out group-hover:text-gray-600">
                  PNG, JPG, JPEG
                </p>
              </div>
              <input id="dropzone-file" type="file" @change="onFileSelected" class="sr-only" />
              <div x-show="imagePreview" class="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-contain" :style="{ backgroundImage: `url(${imagePreview})` }"></div>
            </label>
            <button x-show="imagePreview" type="button" @click="removeImage" class="inline-block px-2 py-1 font-bold text-gray-500 transition duration-150 ease-in-out border border-transparent rounded-md hover:text-white hover:bg-red-500 hover:border-gray-300 focus:outline-none focus:border-gray-300 focus:shadow-outline-gray active:bg-gray-100">
              Supprimer l'image
            </button>
          </div>
        </div>
        <div class="px-6 mb-6">
          <label class="block mb-2 font-bold text-gray-500" for="title">
            Titre :
          </label>
          <input
            id="title"
            type="text"
            v-model="guide.title"
            required
            class="block w-full px-4 py-3 leading-tight bg-gray-100 border border-gray-300 rounded-md appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        <div class="px-6 mb-6">
          <label class="block mb-2 font-bold text-gray-500" for="description">
            Description :
          </label>
          <!-- <textarea
            id="description"
            v-model="guide.description"
            required
            rows="6"
            class="block w-full px-4 py-3 leading-tight bg-gray-100 border border-gray-300 rounded-md appearance-none resize-none focus:outline-none focus:bg-white focus:border-gray-500"
          ></textarea> -->

<IDEText id="description"  :guide="guide"  v-model="guide.description" class="border-b-2 border-blue-500" />
        </div>
        <div class="flex items-center justify-center px-6 py-4 bg-gray-100 rounded-b-lg">
          <button
            type="submit"
            class="inline-block w-full px-6 py-2 text-base font-medium text-white transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-full md:w-auto hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue focus:border-blue-700 "
          >
            Ajouter le guide
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import IDEText from '~/components/IDEText.vue'
export default {
  components: {
    Navbar,
    IDEText,
  },
  data() {
    return {
      guide: {
        title: "",
        description: "",
      },
      imageFile: null,
      imagePreview: null,
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
      this.imagePreview = URL.createObjectURL(this.imageFile);
    },
    removeImage() {
      this.imageFile = null;
      this.imagePreview = null;
      document.getElementById("dropzone-file").value = "";
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
@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}
</style>