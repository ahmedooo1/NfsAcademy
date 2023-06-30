<template>
  <div class="p-4">  
    <h1 class="mb-4 text-2xl font-bold text-center"> Profil</h1>
     <!-- Profil de l'utilisateur actuel -->
    <h1 v-if="user" class="mt-4 text-3xl font-medium text-center">
      Bonjour, {{ user.name }}!
    </h1>

    <!-- Formulaire de mise à jour du profil -->
<form @submit.prevent="updateUserProfile" v-if="user" class="mt-4">
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
    class="px-4 py-2 mt-4 text-white bg-indigo-600 rounded-md"
  >
    Mettre à jour le profil
  </button>
</form>
<div v-if="$store.getters.isAdminOrRedacteur" class="flex flex-col items-center justify-center">
  <NuxtLink to="/create" class="p-3 font-bold text-white bg-blue-800 rounded-full text-l md:text-2xl ">Ajouter un guide +</NuxtLink>
</div>
<!-- Bloc réservé aux administrateurs -->
<div v-if="user && isAdmin"  class="mb-4 text-2xl text-center" >
  <h1 
    class="mb-4 text-2xl font-bold text-center"
  >
    Recherchez un utilisateur :

  </h1>
 <!-- Barre de recherche -->
    <input
          type="text"
          v-model="searchQuery"
          @input="searchUsers"
          placeholder="Rechercher par nom ou e-mail"
          class="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
    /></div>
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
        <button @click="deleteUser(user)" class="px-2 py-1 text-white bg-red-500 rounded">
          Delete
        </button>
      </div>
    </div>
    </div>
   </div>

</template>
  
<script>
import { mapState } from 'vuex';
import axios from 'axios';

export default {
  data() {
  return {
    searchQuery: '',
    searchResults: [],
    updatedUser: {
      name: '',
      email: '',
    },
    isAdmin: false, // Ajoutez cette ligne

  };
},
computed: {
  ...mapState(['user']),
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
      this.isAdmin = this.user.role === 'admin';
    } else {
      this.isAdmin = false;
    }
  },
    async updateUserProfile() {
  try {
    const authToken = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${authToken}` };
    const { data } = await this.$axios.put(`api/v1/auth/${this.user._id}`, this.updatedUser, { headers });
    this.$store.commit('setUser', data);
    this.$toast.success('Profil mis à jour avec succès');
  } catch (err) {
    console.error(err);
    this.$toast.error('Erreur lors de la mise à jour du profil');
  }
},
    async searchUsers() {
      if (this.searchQuery.trim()) {
        try {
          const authToken = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${authToken}` };
          const { data } = await this.$axios.post('api/v1/auth/search', { // Utilise axios et non this.$axios
            searchTerm: this.searchQuery,
            role:[ 'user','redacteur','admin' ]
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
        const authToken = localStorage.getItem('token'); // Récupère le jeton stocké
        const headers = { Authorization: `Bearer ${authToken}` }; // En-tête avec le jeton 
        await this.$axios.put(`api/v1/auth/${user._id}`, { role: newRole }, { headers });
        user.role = newRole;
        this.$toast.success('User role updated successfully');
      } catch (err) {
        // if (err.response && err.response.status === 401) { 
        //   this.$store.commit('removeToken'); // Supprime le jeton si invalide
        //   this.$router.push('/login'); // Redirige vers la page de connexion    
        // } else {
        //   console.error(err); 
          this.$toast.error('Error updating user role'); 
        // }
      }
    },
    async deleteUser(user) {
  try {
    const authToken = localStorage.getItem('token'); // Récupère le jeton stocké
    const headers = { Authorization: `Bearer ${authToken}` }; // En-tête avec le jeton 
    await this.$axios.delete(`api/v1/auth/${user._id}`, { headers });
    // this.searchResults = this.searchResults.filter(u => u._id !== user._id);
    this.$toast.success('User deleted successfully');
  } catch (err) {
    console.error(err); // Affiche l'erreur dans la console
    if (err.response && err.response.status === 401) {  
      // // Gère le cas d'un statut 401 Unauthorized
      // this.$store.commit('removeToken');  
      // this.$router.push('/login');    
    } else if (err.response && err.response.status === 404) {
      // Gère le cas d'un statut 404 Not Found
      this.$toast.error('User not found');  
    } else {
      this.$toast.error('Error deleting user'); // Toast d'erreur général
    }
  }
}
  },
    logout() {
      this.$store.commit('removeToken');
      window.location.reload();
    },
}

</script>