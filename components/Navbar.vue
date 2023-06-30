<template>
  <nav class="sticky w-full bg-blue-700">
    <div class="container px-6 py-6 mx-auto md:flex md:justify-between md:items-center">
      <div class="flex items-center justify-between w-full">
        <div>
          <NuxtLink to="/" class="text-xl font-bold text-gray-800 md:text-2xl">
            <img src="../assets/images/logoWhite.png" alt="Logo" class="w-28" />
          </NuxtLink>
        </div>

        <button @click="toggleMenu" class="md:hidden">
          <!-- Icône du menu burger -->
        </button>

        <div :class="{ 'hidden': !isMenuVisible, 'block': isMenuVisible }" class="flex items-center justify-between md:flex md:ml-6">
          <NuxtLink to="/guidesList" class="flex px-4 py-2 mx-8 text-white rounded-full hover:bg-white hover:text-gray-800 "><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 mx-2"

            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              />
            </svg>
             Guides
          </NuxtLink>
          <button
            v-if="!isLoggedIn"
            @click="openModal"
            class="flex px-4 py-2 text-white rounded-full hover:bg-white hover:text-gray-800"
          >
            <svg
              class="w-6 h-6 mx-2 dark:text-white"
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
           Connexion
          </button>

        
            <NuxtLink to="/profil" v-if="isLoggedIn" class="flex items-center px-4 py-2 mx-8 text-white rounded-full hover:bg-white hover:text-gray-800 "
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8 mx-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Profil
            </NuxtLink>
        

          <button
            v-if="isLoggedIn"
            @click="logout"
            class="flex px-4 py-2 mx-8 text-white rounded-full hover:bg-red-700 hover:text-white"
          >
            <svg
              class="w-6 h-6 mx-2 text-white dark:text-white"
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
            Déconnexion
          </button>
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
          isMenuVisible: false,
      isModalOpen: false,
      isLoggedIn: false,
    };
  },

  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  methods: {
       toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible;
    },
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
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
