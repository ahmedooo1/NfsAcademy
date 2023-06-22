<template>
  <nav class="bg-blue-700 shadow sticky w-full">
    <div
      class="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center"
    >
      <div class="flex justify-between items-center w-full">
        <div>
          <NuxtLink to="/" class="text-gray-800 text-xl font-bold md:text-2xl">
            <img src="../assets/images/logoWhite.png" alt="Logo" class="w-28" />
          </NuxtLink>
        </div>

        <!-- <div :class="{ 'hidden': !isOpen, 'block': isOpen }" class="md:flex items-center">
        <div class="flex flex-col md:flex-row md:mx-6">
          <nuxt-link 
            v-for="(category, index) in categories"
            :key="index"
            :to="'/category/' + category._id"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
            @click="isOpen = false"
          >
            {{ category.name }}
            <div v-if="category.subcategories.length > 0" class="ml-4">
              <nuxt-link
                v-for="(subcategory, index) in category.subcategories"
                :key="index"
                :to="'/subcategory/' + subcategory._id"
                class="block mt-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                @click="isOpen = false"
              >
                {{ subcategory.name }}
              </nuxt-link>
            </div>
          </nuxt-link>
        </div>
      </div> -->

        <div class="relative mx-auto text-gray-600 md:mx-0">
          <!-- <input
            class="border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Recherche"
          />
          <button type="submit" class="absolute right-0 top-0 mt-2 mr-4">
            <svg
              class="text-gray-600 h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 56.966 56.966"
              xml:space="preserve"
            >
              <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23
                  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92
                  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.155,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
                  s-17-7.626-17-17S14.61,6,23.984,6z"
              />
            </svg>
          </button> -->
        </div>

        <div class="md:ml-6">
          <button
            v-if="!isLoggedIn"
            @click="openModal"
            class="bg-white text-white py-2 px-4 rounded hover:bg-white"
          >
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
              />
            </svg>
          </button>
          <button
            v-if="isLoggedIn"
            @click="logout"
            class="px-4 py-2 bg-red-500 text-white rounded flex flex-row justify-around items-center"
          >
            <svg
              class="w-6 h-6 text-white dark:text-white mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3"
              />
            </svg>
            Déconnecter
          </button>
        </div>
        <div v-if="isLoggedIn">
          <NuxtLink to="/profil" class="text-white text-l font-bold md:text-2xl"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>

    <Modal :isOpen="isModalOpen" @close="closeModal" />
  </nav>
</template>

<script>
import Modal from "./Modal.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      isModalOpen: false,
      isOpen: false,
      categories: [],
    };
  },

  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },

    logout() {
      this.$store.commit("removeToken");
      window.location.reload();
    },
    async getCategories() {
      try {
        const response = await this.$axios.get("api/v1/categories");
        if (response.data.success) {
          this.categories = response.data.data;
        } else {
          console.error("Erreur lors de la récupération des catégories");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des catégories:", error);
      }
    },
  },
};
</script>
