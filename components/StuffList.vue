<template>
  <div>
    <!-- Filtres -->
    <div class="grid grid-cols-1 gap-4 m-20 md:grid-cols-2 lg:grid-cols-3 ">
      <div class="flex flex-row items-center justify-center m-4">
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
        class="flex flex-row items-center justify-center m-4"
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
    
<div class="flex items-center justify-center">
  

<div class="grid justify-center grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
  <div
  v-for="stuff in filteredStuffList.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)"
  :key="stuff._id"
    class="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
  >
   
        <nuxt-link :to="`/guides/${stuff._id}`">
          <img
            :src="stuff.imageUrl"
            alt="Stuff image"
            class="object-cover w-full h-56"
          />
          <div class="py-5 text-center">
            <a
              href="#"
              class="block text-xl font-bold text-gray-800 dark:text-white"
              tabindex="0"
              role="link"
            >
              {{ stuff.title }}
            </a>
            <!-- <span class="text-sm text-gray-700 dark:text-gray-200"
              >{{ stuff.price }} €</span
            > -->
          </div>
          
        </nuxt-link>
      </div>
    </div>

</div>
<!-- Pagination -->
<div class="relative flex items-center justify-center m-2">
  <div class="flex">
    <a
      @click.prevent="currentPage > 1 && changePage(currentPage - 1)"
      :class="{
        'cursor-not-allowed text-gray-100 bg-slate-300': currentPage === 1,
        'hover:text-white hover:bg-blue-600 cursor-pointer': currentPage !== 1,
      }"
      class="flex items-center px-4 py-2 mx-1 text-gray-700 bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 "
    >
      < Retour
    </a>

    <template v-for="page in Math.ceil(filteredStuffList.length / itemsPerPage)">
      <a
        @click.prevent="changePage(page)"
        :class="{
          'text-blue-600 cursor-not-allowed': currentPage === page,
          'hover:text-white cursor-pointer ': currentPage !== page,
          'hover:bg-blue-600 cursor-pointer': currentPage !== page,
        }"
        class="items-center hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md cursor-pointer sm:flex dark:bg-gray-800 dark:text-gray-200"
        :key="page"
      >
        {{ page }}
      </a>
    </template>

    <a
      @click.prevent="currentPage < Math.ceil(filteredStuffList.length / itemsPerPage) && changePage(currentPage + 1)"
      :class="{
        'cursor-not-allowed text-gray-100 bg-slate-300': currentPage === Math.ceil(filteredStuffList.length / itemsPerPage),
        'hover:text-white cursor-pointer hover:bg-blue-600 ': currentPage !== Math.ceil(filteredStuffList.length / itemsPerPage),
      }"
      class="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 "
    >
      Suivant >
    </a>
  </div>
</div>
  </div>
</template>

<script>
import { ServerTable, ClientTable, Event } from "vue-pagination-2";

export default {
   components: {
    Pagination: ClientTable,
  },
  data() {
    return {
      stuffList: [],
      filteredStuffList: [],
      categories: [], // Liste des catégories
      selectedCategory: "", // Catégorie sélectionnée
      selectedSubcategory: "", // Sous-catégorie sélectionnée
      currentPage: 1, // Page actuelle
      itemsPerPage: 6, // Nombre d'éléments par page
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
      changePage(page) {
    this.currentPage = page;
  },
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

<style>
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 8px;
}

.pagination-list {
  display: flex;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.pagination-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  width: 2.5rem;
}

.pagination-link {
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
}

.pagination-prev,
.pagination-next {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  width: 2.5rem;
}

.pagination-active {
  background-color: #4299e1;
  color: white;
}

.pagination-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.card2:hover {
 transform: scale(0.98);
 border-radius: 20px;
}

.card:hover {
 box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
}
</style>
