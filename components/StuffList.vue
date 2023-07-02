<template>
  <div>
    <!-- Barre de recherche -->
<div class="flex items-center justify-center m-8">
  <label for="search" class="hidden">Recherche</label>
  <div class="relative z-0 flex w-full mx-auto md:w-1/2">
    <input type="text"
           id="search"
           v-model="searchTerm"
           placeholder="Rechercher par titre..."
           class="w-full px-4 py-2 text-lg text-gray-700 bg-white border border-gray-500 rounded-full focus:outline-none focus:border-blue-500"
           @input="searchGuides()">
    <div class="absolute inset-y-0 right-0 flex items-center pr-3">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

    </div>
  </div>
</div>

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
<div class="grid justify-center grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
  <div
    v-for="stuff in paginatedStuffList"
    :key="stuff._id"
    v-if="stuff.title.toLowerCase().includes(searchTerm.toLowerCase())"
    class="w-full max-w-xs mx-auto overflow-hidden rounded-lg shadow-lg bg-slate-100 dark:bg-gray-800"
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
  v-html="highlightSearchTerm(stuff.title)"
></a>
      </div>
    </nuxt-link>
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
      categories: [],
      selectedCategory: "",
      selectedSubcategory: "",
      searchTerm: "",
      currentPage: 1,
      itemsPerPage: 6,
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
    paginatedStuffList() {
      if (!this.filteredStuffList.length) {
        return [];
      }
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.filteredStuffList.slice(startIndex, endIndex);
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
      highlightSearchTerm(title) {
    const regex = new RegExp(this.searchTerm, "gi");
    return title.replace(regex, "<span class='text-green-500'>$&</span>");
  },
    searchGuides() {
      this.filterStuffList();
      this.currentPage = 1;
    },
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
        const searchTermMatch = stuff.title.toLowerCase().includes(this.searchTerm.toLowerCase());

        return categoryMatch && subcategoryMatch && searchTermMatch;
      });
    },
  },
};
</script>
