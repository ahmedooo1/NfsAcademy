<template>
  <div class="mb-4">
  <div class="w-full  sm:h-[214px]  bg-blue-700 rounded-bl-[178.50px] rounded-br-[178.50px] flex flex-col justify-center items-center">  
     <h1 class="p-2 text-2xl font-bold text-center bg-white rounded-full ">
      <svg
        height="32"
        id="svg5"
        version="1.1"
        viewBox="0 0 32 32"
        width="32"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg"
        class="w-24 h-24 text-white fill-current"
      >
        <defs id="defs2" />
        <g id="layer1" transform="translate(-12,-484)">
          <path
            d="m 28,486 c -3.854145,0 -7,3.14585 -7,7 0,3.85415 3.145855,7 7,7 3.854145,0 7,-3.14585 7,-7 0,-3.85415 -3.145855,-7 -7,-7 z m 0,2 c 2.773266,0 5,2.22673 5,5 0,2.77327 -2.226734,5 -5,5 -2.773266,0 -5,-2.22673 -5,-5 0,-2.77327 2.226734,-5 5,-5 z"
            id="circle27474"
            style="
              color: #000000;
              fill: #00c89f;
              fill-opacity: 1;
              fill-rule: evenodd;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 4.1;
              -inkscape-stroke: none;
            "
          />
          <path
            d="m 20.5,501 c -3.583699,0 -6.5,2.9163 -6.5,6.5 0,3.5837 2.916301,6.5 6.5,6.5 h 15 c 3.583699,0 6.5,-2.9163 6.5,-6.5 0,-3.5837 -2.916301,-6.5 -6.5,-6.5 z m 0,2 h 15 c 2.510295,0 4.5,1.98971 4.5,4.5 0,2.51029 -1.989705,4.5 -4.5,4.5 h -15 c -2.510295,0 -4.5,-1.98971 -4.5,-4.5 0,-2.51029 1.989705,-4.5 4.5,-4.5 z"
            id="rect27480"
            style="
              color: #000000;
              fill: #002cba;
              fill-opacity: 1;
              fill-rule: evenodd;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 4.1;
              -inkscape-stroke: none;
            "
          />
        </g>
      </svg>  <!-- Profil de l'utilisateur actuel -->
      </h1><h1 v-if="user" class="text-3xl font-medium text-center text-white ">
      Bonjour, {{ user.name }}!
    </h1>
  
  </div>
   

    <div
      v-if="$store.getters.isAdminOrRedacteur"
      class="flex flex-col items-center justify-center my-8"
    >
      <NuxtLink
        to="/create"
        class="flex flex-col items-center justify-center p-3 font-bold border-2 border-dashed rounded-md shadow-lg hover:border-slate-400 bg-slate-100 text-l md:text-2xl md:w-3/4 md:m-auto"
      >
        <svg
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          class="w-24 h-24 text-white fill-current"
        >
          <g data-name="05_Note Book" id="_05_Note_Book">
            <path
              d="M57,52H3a1,1,0,0,1-1-1V18a1,1,0,0,1,1-1H57a1,1,0,0,1,1,1V51A1,1,0,0,1,57,52Z"
              style="fill: #0455bf"
            />
            <path
              d="M53,12H38.24A19.148,19.148,0,0,0,31,13.43c-.35.13-.7.29-1.04.45q-.465-.225-.96-.42A19.111,19.111,0,0,0,21.69,12H7a1,1,0,0,0-1,1V47a1,1,0,0,0,1,1H21.69A16.949,16.949,0,0,1,29,49.65q.255.1.51.24a1.03,1.03,0,0,0,.45.11.988.988,0,0,0,.45-.1l.21-.11c.12-.06.25-.12.38-.17A17.119,17.119,0,0,1,38.24,48H53a1,1,0,0,0,1-1V13A1,1,0,0,0,53,12Z"
              style="fill: #fdfeff"
            />
            <path
              d="M31.515,51.579A15.179,15.179,0,0,1,38.237,50H53a3,3,0,0,0,3-3V17H55V47a2,2,0,0,1-2,2H38.237a16.183,16.183,0,0,0-7.168,1.684l-.216.107a2,2,0,0,1-1.8-.012A16.173,16.173,0,0,0,21.692,49H7a2,2,0,0,1-2-2V17H4V47a3,3,0,0,0,3,3H21.692a15.163,15.163,0,0,1,6.9,1.669A3.02,3.02,0,0,0,29.963,52a2.984,2.984,0,0,0,1.334-.313Z"
              style="fill: #c3d6dd"
            />
            <path
              d="M57,17h-.777L56,17.223V26.07l2-2V18A1,1,0,0,0,57,17Z"
              style="fill: #004787"
            />
            <path
              d="M54,47a1,1,0,0,1-1,1H38.237a17.189,17.189,0,0,0-7.613,1.788l-.216.107a.993.993,0,0,1-.445.1,1.006,1.006,0,0,1-.457-.11A17.164,17.164,0,0,0,21.692,48H7a1,1,0,0,1-1-1V15H5V47a2,2,0,0,0,2,2H21.692a16.173,16.173,0,0,1,7.357,1.779,2,2,0,0,0,1.8.012l.216-.107A16.183,16.183,0,0,1,38.237,49H53a2,2,0,0,0,2-2V15H54Z"
              style="fill: #dfeaef"
            />
            <path
              d="M16,24a1,1,0,0,1-.555-.168L13,22.2l-2.445,1.63A1,1,0,0,1,9,23V12h8V23a1,1,0,0,1-1,1Z"
              style="fill: #d6e8f2"
            />
            <path
              d="M17,23a1,1,0,0,1-.555-.168L14,21.2l-2.445,1.63A1,1,0,0,1,10,22V12h8V22a1,1,0,0,1-1,1Z"
              style="fill: #f74e0c"
            />
            <path
              d="M12,22V12H10V22a1,1,0,0,0,1.555.832l.563-.375A.986.986,0,0,1,12,22Z"
              style="fill: #e03a07"
            />
            <rect height="2" style="fill: #d6e8f2" width="15" x="34" y="37" />
            <rect height="2" style="fill: #d6e8f2" width="13" x="36" y="41" />
            <rect height="2" style="fill: #d6e8f2" width="15" x="11" y="37" />
            <rect height="2" style="fill: #d6e8f2" width="15" x="11" y="33" />
            <rect height="2" style="fill: #d6e8f2" width="15" x="11" y="29" />
            <rect height="2" style="fill: #d6e8f2" width="7" x="11" y="41" />
            <rect height="2" style="fill: #d6e8f2" width="2" x="24" y="41" />
            <rect height="2" style="fill: #d6e8f2" width="2" x="20" y="41" />
            <path
              d="M31,13.43V49.62c-.13.05-.26.11-.38.17l-.21.11a.988.988,0,0,1-.45.1,1.03,1.03,0,0,1-.45-.11q-.255-.135-.51-.24V13.46q.495.195.96.42C30.3,13.72,30.65,13.56,31,13.43Z"
              style="fill: #f0f4f7"
            />
            <polygon
              points="43.366 29.857 42.629 33.543 42.146 35.5 44.103 35.018 47.79 34.28 55 27.07 55 18.223 43.366 29.857"
              style="fill: #e2e8ed"
            />
            <polygon
              points="54 28.07 55 27.07 55 18.223 54 19.223 54 28.07"
              style="fill: #abcad8"
            />
            <polygon
              points="55 27.07 56 26.07 56 17.223 55 18.223 55 27.07"
              style="fill: #8db7c6"
            />
            <path
              d="M60.061,20.009l-4.424-4.424,1.475-1.474a2.084,2.084,0,0,1,2.949,0l1.475,1.474a2.087,2.087,0,0,1,0,2.95Z"
              style="fill: #f74e0c"
            />
            <path
              d="M60.8,14.848l-.737-.737a2.084,2.084,0,0,0-2.949,0l-1.475,1.474.738.738,1.474-1.475A2.086,2.086,0,0,1,60.8,14.848Z"
              style="fill: #cc2600"
            />
            <rect
              height="6.256"
              style="fill: #f74e0c"
              transform="translate(-3.014 43.064) rotate(-45)"
              width="16.683"
              x="42.135"
              y="22.042"
            />
            <rect
              height="2.085"
              style="fill: #febc00"
              transform="translate(-3.014 43.064) rotate(-45)"
              width="16.683"
              x="42.135"
              y="24.128"
            />
            <rect
              height="2.085"
              style="fill: #f74e0c"
              transform="translate(-2.403 41.59) rotate(-45)"
              width="16.683"
              x="40.66"
              y="22.653"
            />
            <rect
              height="6.256"
              style="fill: #dfeaef"
              transform="translate(3.99 45.966) rotate(-45)"
              width="3.128"
              x="55.917"
              y="15.038"
            />
            <path
              d="M57.112,18.535a2.085,2.085,0,0,1,0-2.95h0l-.737-.737L54.163,17.06l4.423,4.424.738-.738Z"
              style="fill: #c3d6dd"
            />
            <polygon
              points="43.103 34.018 41.629 32.543 42.366 28.857 46.79 33.28 43.103 34.018"
              style="fill: #f7d694"
            />
            <polygon
              points="41.629 32.543 41.146 34.5 43.103 34.018 41.629 32.543"
              style="fill: #f74e0c"
            />
          </g>
        </svg>
        Ajouter un guide</NuxtLink
      >
    </div>
    <!-- Formulaire de mise à jour du profil -->
<form

      @submit.prevent="updateUserProfile"
      v-if="user"
      class="p-4 my-5 rounded-md shadow-lg md:w-3/4 md:m-auto bg-slate-100"
    >
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
     
    

        <div class="mt-4">
          <label for="newPassword" class="block text-sm font-medium text-gray-700">Nouveau mot de passe</label>
          <input
            :type="passwordInputType"

            type="password"
            id="newPassword"
            v-model="newPassword"
            class="block w-full px-3 py-2 mt-1 text-base bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        
        </div><div class="mt-4">
          <label for="newPassword" class="block text-sm font-medium text-gray-700">Confirmer le nouveau mot de passe</label>
          <input
            :type="passwordInputType"

            type="password"
            id="newPassword"
            v-model="newPasswordConfirm" placeholder="Confirmer le nouveau mot de passe"
            class="block w-full px-3 py-2 mt-1 text-base bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
           <label class="text-gray-600">
          <input type="checkbox" @change="togglePasswordVisibility" class="m-1 rounded"  />
          Afficher le mot de passe
        </label>
        </div>
         
      <button
        type="submit"
        class="px-4 py-2 m-auto mt-4 text-white bg-blue-700 rounded-full"
      >
        Mettre à jour le profil
      </button>
</form>

    <!-- Bloc réservé aux administrateurs -->
    <div
      v-if="user && isAdmin"
      class="p-4 text-2xl text-center shadow-lg md:w-3/4 md:m-auto bg-slate-100"
    >
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
    <div
      v-if="searchResults.length"
      class="p-4 shadow-lg md:w-3/4 md:m-auto bg-slate-100"
    >
      <div v-for="user in searchResults" :key="user.id" class="mb-2">
        <div class="font-medium">{{ user.name }}</div>
        <div class="text-sm text-gray-600">{{ user.email }}</div>
        <div class="text-sm text-gray-600">Role: {{ user.role }}</div>
        <div v-if="isAdmin" class="flex items-center justify-between mt-2">
          <button
            v-if="user.role !== 'admin'"
            @click="updateRole(user, 'admin')"
            class="px-2 py-1 text-white bg-blue-500 rounded"
          >
            Mettre en Admin
          </button>
          <button
            v-if="user.role !== 'redacteur'"
            @click="updateRole(user, 'redacteur')"
            class="px-2 py-1 text-white bg-green-500 rounded"
          >
            Mettre en Redacteur
          </button>
          <button
            v-if="user.role !== 'user'"
            @click="updateRole(user, 'user')"
            class="px-2 py-1 text-white bg-gray-500 rounded"
          >
            Mettre en utilisateur
          </button>
          <button
            @click="deleteUser(user)"
            class="px-2 py-1 text-white bg-red-500 rounded"
          >
            Supprimer
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

    newPassword: "",
    newPasswordConfirm: "",
      isAdmin: false,
         passwordVisible: false,
      passwordInputType: 'password',

    };
  },
  computed: {
    ...mapState(["user"]),
     passwordInputType() {
      return this.passwordVisible ? 'text' : 'password';
    },
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
      togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
      this.passwordInputType = this.passwordVisible ? 'text' : 'password';
    },
        async created() {
      this.user = this.$store.state.user;
      if (this.user) {
        this.updatedUser = { ...this.user };
      } else {
        await this.$router.push("/login");
      }
    },
    initializeUpdatedUser() {
      if (this.user) {
        this.updatedUser.name = this.user.name;
        this.updatedUser.email = this.user.email;
        this.updatedUser.password = this.user.password;
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

    if (this.newPassword && this.newPasswordConfirm && this.newPassword === this.newPasswordConfirm) {
      const updatePasswordResponse = await this.$axios.put(
        `api/v1/auth/reset/${this.user._id}`,
        {
          password: this.newPassword,
          passwordConfirmation: this.newPasswordConfirm,
        },
        { headers }
      );
      console.log("Mot de passe mis à jour avec succès !");
    }else{
      console.log("Erreur lors de la mise à jour du mot de passe");

    }
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
        this.$toast.success("Rôle d’utilisateur mis à jour avec succès");
      } catch (err) {
        // if (err.response && err.response.status === 401) {
        //   this.$store.commit('removeToken'); // Supprime le jeton si invalide
        //   this.$router.push('/login'); // Redirige vers la page de connexion
        // } else {
        //   console.error(err);
        this.$toast.error("Erreur lors de la mise à jour du rôle d’utilisateur");
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
      async updatePassword() {
        try {
          const authToken = localStorage.getItem("token");
          const headers = { Authorization: `Bearer ${authToken}` };
          await this.$axios.put(
        `api/v1/auth/reset/${this.user._id}`,
        {
          password: this.newPassword,
          passwordConfirmation: this.newPasswordConfirmation
        },
        { headers }
      );
          this.$toast.success("Mot de passe mis à jour avec succès !");
        } catch (err) {
          console.error("Erreur lors de la mise à jour du mot de passe:", err);
          // Affichez également le message d'erreur renvoyé par le serveur
          console.error("Message d'erreur du serveur:", err.response.data);
          this.$toast.error("Erreur lors de la mise à jour du mot de passe");
        }
      },

  },
  logout() {
    this.$store.commit("removeToken");
    window.location.reload();
  },
};
</script>
