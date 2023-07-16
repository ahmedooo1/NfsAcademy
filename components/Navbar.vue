<template>
  <div>
    <nav
      class="relative w-full py-2 mx-auto bg-blue-700 lg:px-6 md:flex md:justify-between md:items-center"
    >
      <div class="container px-6 py-6 mx-auto md:flex md:justify-between md:items-center">
        <div class="flex items-center justify-between w-full">
          <button
            @click="toggleDropdown"
            class="flex w-full text-white lg:hidden focus:outline-none"
          >
            <svg
              class="w-6 h-6 fill-current hover:text-gray-300"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                v-if="!isOpen"
                d="M4 6H20M4 12H20M4 18H20"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                v-else
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <!-- <NuxtLink to="/" class="float-right mb-3 text-white lg:hidden">
              <img
                src="../assets/images/logoWhite.png"
                alt="Logo"
                class="w-28"
              />
          
            </NuxtLink> -->
          <NuxtLink to="/" class="block float-right text-white lg:flex">
            <img src="../assets/images/logoWhite.png" alt="Logo" class="w-28" />
            <div
              class="items-center hidden px-4 py-2 mx-4 text-white rounded-full fill-current lg:flex hover:bg-white hover:text-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 8.467 8.467"
                id="home"
                class="mx-2 hover:text-gray-800"
              >
                <path
                  d="m 4.2189035,0.79415377 a 0.26391311,0.26459421 0 0 0 -0.1443101,0.052707 L 0.91104361,3.2279704 A 0.26391311,0.26459421 0 1 0 1.2285335,3.6496251 L 4.2323036,1.387881 7.2381335,3.6496251 a 0.26391311,0.26459421 0 1 0 0.31749,-0.4216547 L 4.3920736,0.84686077 a 0.26391311,0.26459421 0 0 0 -0.1731701,-0.052707 z m 0,1.17763653 A 0.26391311,0.26459421 0 0 0 4.0745934,2.0244973 L 1.4388135,4.0149559 a 0.26391311,0.26459421 0 0 0 -0.10514,0.2108274 v 3.1815302 a 0.26391311,0.26459421 0 0 0 0.26337,0.2656009 H 3.4416736 A 0.26391311,0.26459421 0 0 0 3.7065934,7.4073135 l -0.006,-1.851457 h 1.05967 v 1.851457 a 0.26391311,0.26459421 0 0 0 0.26337,0.2656009 h 1.84669 A 0.26391311,0.26459421 0 0 0 7.1331826,7.4073135 V 4.2257833 A 0.26391311,0.26459421 0 0 0 7.0280435,4.0149559 l -2.63578,-1.9904587 a 0.26391311,0.26459421 0 0 0 -0.17317,-0.052707 z m 0.013401,0.5957942 2.3729199,1.7889326 V 7.1437795 H 5.2883636 V 5.2902553 A 0.26391311,0.26459421 0 0 0 5.0234435,5.0267207 h -1.58589 a 0.26391311,0.26459421 0 0 0 -0.26492,0.2656012 l 0.006,1.8514576 h -1.31667 V 4.3565171 Z"
                  font-family="sans-serif"
                  font-weight="400"
                  overflow="visible"
                  style="
                    line-height: normal;
                    font-variant-ligatures: normal;
                    font-variant-position: normal;
                    font-variant-caps: normal;
                    font-variant-numeric: normal;
                    font-variant-alternates: normal;
                    font-feature-settings: normal;
                    text-indent: 0;
                    text-align: start;
                    text-decoration-line: none;
                    text-decoration-style: solid;
                    text-decoration-color: #000;
                    text-transform: none;
                    text-orientation: mixed;
                    shape-padding: 0;
                    isolation: auto;
                    mix-blend-mode: normal;
                  "
                ></path>
              </svg>
              Home
            </div>
          </NuxtLink>

          <div
            v-show="isOpen"
            class="absolute left-0 z-50 flex flex-col items-center justify-center w-full duration-75 bg-blue-700 rounded-lg top-20"
          >
            <!-- <button
              @click="toggleDropdown"
              class="absolute top-0 right-0 m-5 text-white hover:text-gray-800 focus:outline-none"
            >
              <svg
                class="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button> -->

            <NuxtLink to="/" class="w-full py-4 text-center text-white hover:bg-blue-600">
              Home
            </NuxtLink>
            <NuxtLink
              to="/guidesList"
              class="w-full py-4 text-center text-white hover:bg-blue-600"
            >
              Guides
            </NuxtLink>
            <a
              href="http://localhost/NfsAcademy_wp/boutique/"
              class="w-full py-4 text-center text-white hover:bg-blue-600"
              target="_blank"
            >
              Boutique
            </a>
            <button
              v-if="!isLoggedIn"
              @click="openModal"
              class="w-full py-4 text-center text-white rounded-b-lg hover:bg-blue-600 focus:outline-none"
            >
              Connexion
            </button>
            <NuxtLink
              v-if="isLoggedIn"
              to="/profil"
              class="w-full py-4 text-center text-white hover:bg-blue-600"
            >
              Profil
            </NuxtLink>
            <button
              v-if="isLoggedIn"
              @click="logout"
              class="w-full py-4 text-center text-white hover:bg-red-600 hover:text-white focus:outline-none"
            >
              Déconnexion
            </button>
          </div>

          <div class="flex items-center justify-between md:ml-6">
            <NuxtLink
              to="/guidesList"
              class="hidden px-4 mx-4 py-2 text-white rounded-full lg:flex hover:bg-white hover:text-gray-800"
            >
              <svg
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
            <a
              href="http://localhost/NfsAcademy_wp/boutique/"
              target="_blank"
              class="hidden px-4 mx-4 py-2 text-white rounded-full lg:flex hover:bg-white hover:text-gray-800"
            >
              <svg
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
                  d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                />
              </svg>

              Boutique
            </a>
            <button
              v-if="!isLoggedIn"
              @click="openModal"
              class="hidden px-4 py-2 text-white rounded-full lg:flex hover:bg-white hover:text-gray-800"
            >
              <svg
                class="w-6 h-6 mx-2"
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
                  d="M1 8h11m0 0L8 4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3"
                />
              </svg>
              Connexion
            </button>

            <NuxtLink
              v-if="isLoggedIn"
              to="/profil"
              class="items-center hidden px-4 py-2 mx-4 text-white rounded-full lg:flex hover:bg-white hover:text-gray-800"
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
              class="hidden px-4 py-2 mx-4 text-white rounded-full lg:flex hover:bg-red-600 hover:text-white"
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
    </nav>
    <Modal :isOpen="isModalOpen" @close="closeModal" />
  </div>
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

<style>
/* Add your styles or override tailwind classes here */

/* Hide the navigation menu by default on small screens */
.lg\\:hidden {
  display: none;
}

/* Show the navigation menu when the hamburger icon is clicked */
.open {
  display: flex;
}
</style>
