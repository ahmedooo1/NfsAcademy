<template>
  <div>
    <!-- Filtres -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-20">
      <div class="m-4 flex flex-row justify-center items-center">
        <label for="category" class="block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
        </label>
        <select
          id="category"
          v-model="selectedCategory"
          @change="filterStuffList"
          class="border-none rounded"
        >
          <option value="">Toutes les catégories</option>
          <option
            v-for="category in categories"
            :key="category._id"
            :value="category._id"
          >
            {{ category.name }}
          </option>
        </select>
      </div>
      <div
        class="m-4 flex flex-row justify-center items-center"
        v-if="selectedCategory"
      >
        <label for="subcategory" class="block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            /></svg
        ></label>
        <select
          id="subcategory"
          v-model="selectedSubcategory"
          @change="filterStuffList"
          class="border-none rounded"
        >
          <option value="">Toutes les sous-catégories</option>
          <option
            v-for="subcategory in subcategories"
            :key="subcategory._id"
            :value="subcategory._id"
          >
            {{ subcategory.name }}
          </option>
        </select>
      </div>
    </div>

    <!-- Liste des éléments filtrés -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="stuff in filteredStuffList"
        :key="stuff._id"
        class="bg-white rounded-xl shadow-md p-4"
      >
        <nuxt-link :to="`/guides/${stuff._id}`">
          <img
            :src="stuff.imageUrl"
            alt="Stuff image"
            class="w-full h-56 object-cover rounded-xl"
          />
          <div class="mt-4">
            <h3 class="text-xl font-semibold">{{ stuff.title }}</h3>
            <p class="text-gray-500">{{ stuff.price }} €</p>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stuffList: [],
      filteredStuffList: [],
      categories: [], // Liste des catégories
      selectedCategory: "", // Catégorie sélectionnée
      selectedSubcategory: "", // Sous-catégorie sélectionnée
    };
  },
  computed: {
    subcategories() {
      if (!this.selectedCategory) return [];
      const category = this.categories.find(
        (category) => category._id === this.selectedCategory
      );
      return category ? category.subcategories : [];
    },
  },
  async created() {
    try {
      const { data } = await this.$axios.get("api/v1/categories");
      this.categories = data.data;
      const stuffResponse = await this.$axios.get("api/v1/guides");
      this.stuffList = stuffResponse.data;
      this.filteredStuffList = this.stuffList;
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    filterStuffList() {
      this.filteredStuffList = this.stuffList.filter((stuff) => {
        const categoryMatch =
          !this.selectedCategory ||
          (stuff.category &&
            stuff.category.parentCategory &&
            stuff.category.parentCategory._id === this.selectedCategory);
        const subcategoryMatch =
          !this.selectedSubcategory ||
          (stuff.category && stuff.category._id === this.selectedSubcategory);

        return categoryMatch && subcategoryMatch;
      });
    },
  },
};
</script>
