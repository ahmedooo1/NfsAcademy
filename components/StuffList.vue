<template>
  <div>
    <!-- Filtres -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      <div class="mb-4">
        <label for="category" class="block mb-2">Catégorie :</label>
        <select id="category" v-model="selectedCategory" @change="filterStuffList" class="border rounded">
          <option value="">Toutes les catégories</option>
          <option v-for="category in categories" :key="category._id" :value="category._id">{{ category.name }}</option>
        </select>
      </div>
      <div class="mb-4" v-if="selectedCategory">
        <label for="subcategory" class="block mb-2">Sous-catégorie :</label>
        <select id="subcategory" v-model="selectedSubcategory" @change="filterStuffList" class="border rounded">
          <option value="">Toutes les sous-catégories</option>
          <option v-for="subcategory in subcategories" :key="subcategory._id" :value="subcategory._id">{{ subcategory.name }}</option>
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
      <img :src="stuff.imageUrl" alt="Stuff image" class="w-full h-56 object-cover rounded-xl" />
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
      const category = this.categories.find((category) => category._id === this.selectedCategory);
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
      !this.selectedCategory || (stuff.category && stuff.category.parentCategory && stuff.category.parentCategory._id === this.selectedCategory);
    const subcategoryMatch =
      !this.selectedSubcategory || (stuff.category && stuff.category._id === this.selectedSubcategory);

    return categoryMatch && subcategoryMatch;
  });
},
  },
};
</script>