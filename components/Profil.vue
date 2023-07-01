<template>
  <div class="p-4">
    <h1 class="flex justify-center w-full m-auto mb-4 text-2xl font-bold text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 33.7 33.7"
        width="200"
        height="200"
        id="profile"
      >
        <g stroke="#1505a5" stroke-linecap="round" stroke-linejoin="round">
          <path
            class="text-blue-700 fill-current"
            stroke-width=".89"
            d="M13.526 2.445v3.447c-1.099.258-2.15.69-3.113 1.278L7.995 4.752 4.492 8.254l2.419 2.419a10.657 10.657 0 0 0-1.28 3.085H2.214v4.976h3.419c.261 1.09.693 2.13 1.279 3.085l-2.419 2.419 3.503 3.502 2.418-2.418c.964.588 2.014 1.02 3.113 1.279v3.419h4.948V26.6c1.09-.26 2.13-.692 3.086-1.278l2.418 2.418 3.503-3.502-2.419-2.419a10.657 10.657 0 0 0 1.279-3.085h3.447v-4.976H26.34a10.657 10.657 0 0 0-1.279-3.085l2.419-2.419-3.503-3.502L21.56 7.17a10.658 10.658 0 0 0-3.086-1.278V2.445zm.8 20.475a6.836 6.836 0 0 1-2.175-.974A6.96 6.96 0 0 1 9.65 18.91a6.83 6.83 0 0 1-.543-2.679c0-3.796 3.097-6.866 6.893-6.866a6.86 6.86 0 0 1 6.866 6.866 6.935 6.935 0 0 1-.539 2.679 6.898 6.898 0 0 1-1.47 2.192 6.914 6.914 0 0 1-2.182 1.48c-.411.174-.842.31-1.29.402"
            color="#000"
            overflow="visible"
          ></path>
          <path
            fill="#00d1b6"
            d="M5.704 29.602v-.868c0-.835.65-1.578 1.392-1.949 3.062-1.67 6.51-3.379 6.51-3.379l.791-.39c.467.17.92.393 1.574.414.745-.056 1.092-.282 1.62-.438l.73.357c.279.186 2.97 1.392 6.96 3.62.743.463 1.022 1.206 1.022 2.134v.55"
          ></path>
          <path
            fill="none"
            d="M15.95 12.83a3.55 3.55 0 0 0-3.558 3.558v3.483c0 1.971 2.029 3.558 3.557 3.558 1.53 0 3.558-1.587 3.558-3.558v-3.483a3.55 3.55 0 0 0-3.558-3.558zm-2.344 10.576.791-.39c.467.17.92.393 1.574.414.745-.056 1.092-.282 1.62-.438l.73.357"
          ></path>
        </g>
      </svg>
    </h1>
    <!-- Profil de l'utilisateur actuel -->
    <h1 v-if="user" class="my-4 text-3xl font-medium text-center">
      Bonjour, {{ user.name }}!
    </h1>
    <div
      v-if="$store.getters.isAdminOrRedacteur"
      class="flex flex-col items-center justify-center my-8"
    >
      <NuxtLink
        to="/create"
        class="flex flex-col items-center justify-center p-3 font-bold text-white bg-blue-700 rounded-md shadow-lg text-l md:text-2xl md:w-3/4 md:m-auto"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="add"
          x="0"
          y="0"
          version="1.1"
          viewBox="0 0 29 29"
          xml:space="preserve"
          class="w-24 h-24 text-white fill-current"
        >
          <path
            d="M14.5 27.071c-6.893 0-12.5-5.607-12.5-12.5s5.607-12.5 12.5-12.5S27 7.678 27 14.571s-5.607 12.5-12.5 12.5zm0-23c-5.79 0-10.5 4.71-10.5 10.5s4.71 10.5 10.5 10.5S25 20.36 25 14.571s-4.71-10.5-10.5-10.5z"
          ></path>
          <path d="M14.5 21.571a1 1 0 0 1-1-1v-12a1 1 0 0 1 2 0v12a1 1 0 0 1-1 1z"></path>
          <path d="M20.5 15.571h-12a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z"></path>
        </svg>
        Ajouter un guide</NuxtLink
      >
    </div>
    <!-- Formulaire de mise à jour du profil -->
    <form @submit.prevent="updateUserProfile" v-if="user" class="p-4 my-5 shadow-lg md:w-3/4 md:m-auto bg-slate-100">
          <h1 class="mb-4 text-2xl font-bold text-center">Informations personnelles</h1>

      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Nom</label>
        <input
          type="text"
          id="name"
          v-model="updatedUser.name"
          class="block w-full px-3 py-2 mt-1 text-base bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div class="mt-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          v-model="updatedUser.email"
          class="block w-full px-3 py-2 mt-1 text-base bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <button
        type="submit"
        class="px-4 py-2 m-auto mt-4 text-white bg-blue-700 rounded-full"
      >
        Mettre à jour le profil
      </button>
    </form>

    <!-- Bloc réservé aux administrateurs -->
    <div v-if="user && isAdmin" class="p-4 my-5 mb-20 text-2xl text-center shadow-lg md:w-3/4 md:m-auto bg-slate-100">
      <h1 class="mb-4 text-2xl font-bold text-center">Recherchez un utilisateur :</h1>
      <!-- Barre de recherche -->
      <input
        type="text"
        v-model="searchQuery"
        @input="searchUsers"
        placeholder="Rechercher par nom ou e-mail"
        class="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
      />
    </div>
    <!-- Le reste de la liste des utilisateurs et des boutons de gestion des rôles -->

    <!-- Liste des utilisateurs trouvés -->
    <div v-if="searchResults.length" class="mt-4">
      <div v-for="user in searchResults" :key="user.id" class="mb-2">
        <div class="font-medium">{{ user.name }}</div>
        <div class="text-sm text-gray-600">{{ user.email }}</div>
        <div class="text-sm text-gray-600">Role: {{ user.role }}</div>
        <div v-if="isAdmin" class="mt-2">
          <button
            v-if="user.role !== 'admin'"
            @click="updateRole(user, 'admin')"
            class="px-2 py-1 text-white bg-blue-500 rounded"
          >
            Set as Admin
          </button>
          <button
            v-if="user.role !== 'redacteur'"
            @click="updateRole(user, 'redacteur')"
            class="px-2 py-1 text-white bg-green-500 rounded"
          >
            Set as Redacteur
          </button>
          <button
            v-if="user.role !== 'user'"
            @click="updateRole(user, 'user')"
            class="px-2 py-1 text-white bg-gray-500 rounded"
          >
            Set as User
          </button>
          <button
            @click="deleteUser(user)"
            class="px-2 py-1 text-white bg-red-500 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      searchQuery: "",
      searchResults: [],
      updatedUser: {
        name: "",
        email: "",
      },
      isAdmin: false, // Ajoutez cette ligne
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  mounted() {
    axios.defaults.debug = true;
    this.initializeUpdatedUser();
    this.initializeIsAdmin(); // Ajoutez cette lign
  },
  watch: {
    user(newVal) {
      this.initializeUpdatedUser();
      this.initializeIsAdmin(); // Ajoutez cette ligne
    },
    "$store.state.user": {
      deep: true,
      handler() {
        this.$forceUpdate();
      },
    },
    watch: {
      user: {
        handler(newVal) {
          this.initializeUpdatedUser();
          this.initializeIsAdmin();
        },
        immediate: true,
      },
    },
    immediate: true,
  },

  methods: {
    initializeUpdatedUser() {
      if (this.user) {
        this.updatedUser.name = this.user.name;
        this.updatedUser.email = this.user.email;
      }
    },
    initializeIsAdmin() {
      if (this.user) {
        this.isAdmin = this.user.role === "admin";
      } else {
        this.isAdmin = false;
      }
    },
    async updateUserProfile() {
      try {
        const authToken = localStorage.getItem("token");
        const headers = { Authorization: `Bearer ${authToken}` };
        const { data } = await this.$axios.put(
          `api/v1/auth/${this.user._id}`,
          this.updatedUser,
          { headers }
        );
        this.$store.commit("setUser", data);
        this.$toast.success("Profil mis à jour avec succès");
      } catch (err) {
        console.error(err);
        this.$toast.error("Erreur lors de la mise à jour du profil");
      }
    },
    async searchUsers() {
      if (this.searchQuery.trim()) {
        try {
          const authToken = localStorage.getItem("token");
          const headers = { Authorization: `Bearer ${authToken}` };
          const { data } = await this.$axios.post("api/v1/auth/search", {
            // Utilise axios et non this.$axios
            searchTerm: this.searchQuery,
            role: ["user", "redacteur", "admin"],
          });
          this.searchResults = data;
        } catch (err) {
          console.error(err);
        }
      } else {
        this.searchResults = [];
      }
    },

    async updateRole(user, newRole) {
      try {
        const authToken = localStorage.getItem("token"); // Récupère le jeton stocké
        const headers = { Authorization: `Bearer ${authToken}` }; // En-tête avec le jeton
        await this.$axios.put(`api/v1/auth/${user._id}`, { role: newRole }, { headers });
        user.role = newRole;
        this.$toast.success("User role updated successfully");
      } catch (err) {
        // if (err.response && err.response.status === 401) {
        //   this.$store.commit('removeToken'); // Supprime le jeton si invalide
        //   this.$router.push('/login'); // Redirige vers la page de connexion
        // } else {
        //   console.error(err);
        this.$toast.error("Error updating user role");
        // }
      }
    },
    async deleteUser(user) {
      try {
        const authToken = localStorage.getItem("token"); // Récupère le jeton stocké
        const headers = { Authorization: `Bearer ${authToken}` }; // En-tête avec le jeton
        await this.$axios.delete(`api/v1/auth/${user._id}`, { headers });
        // this.searchResults = this.searchResults.filter(u => u._id !== user._id);
        this.$toast.success("User deleted successfully");
      } catch (err) {
        console.error(err); // Affiche l'erreur dans la console
        if (err.response && err.response.status === 401) {
          // // Gère le cas d'un statut 401 Unauthorized
          // this.$store.commit('removeToken');
          // this.$router.push('/login');
        } else if (err.response && err.response.status === 404) {
          // Gère le cas d'un statut 404 Not Found
          this.$toast.error("User not found");
        } else {
          this.$toast.error("Error deleting user"); // Toast d'erreur général
        }
      }
    },
  },
  logout() {
    this.$store.commit("removeToken");
    window.location.reload();
  },
};
</script>
