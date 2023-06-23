<template>
  <div
    class="fixed z-50 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
    v-if="isOpen"
  >
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-80 text-center sm:block sm:p-0"
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
        @click="closeModal"
      ></div>

      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >

      <div
        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full z-50"
      >
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            class="bg-white rounded-md shadow-sm -ml-4 -mr-2 px-4 py-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            @click="closeModal"
          >
            <span class="sr-only">Fermer</span>
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div
          class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
          v-if="!showRegisterForm"
        >
          <h3
            class="text-lg leading-6 font-medium text-gray-900 text-center"
            id="modal-title"
          >
            Connexion
          </h3>
          <div class="mt-2">
            <form @submit.prevent="login" class="space-y-6">
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Email</label
                >
                <div class="mt-2">
                  <input
                    type="email"
                    v-model="email"
                    id="email"
                    name="email"
                    autocomplete="email"
                    required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div class="flex items-center justify-between">
                  <label
                    for="password"
                    class="block text-sm font-medium leading-6 text-gray-900"
                    >Mot de passe</label
                  >
                  <div class="text-sm">
                    <a
                      href="#"
                      @click.prevent="toggleMotDePasse"
                      class="font-semibold text-indigo-600 hover:text-indigo-500"
                      >Mot de passe oublié ?</a
                    >
                  </div>
                </div>
                <div class="mt-2">
                  <input
                    id="password"
                    v-model="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
            <p class="mt-10 text-center text-sm text-gray-500">
              Vous n'avez un compte?
              <a
                href="#"
                @click.prevent="toggleRegisterForm"
                class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >Inscrivez vous !</a
              >
            </p>
          </div>
        </div>
        <!-- Formulaire d'inscription -->
        <div
          class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
          v-if="showRegisterForm"
        >
          <!-- Contenu du formulaire d'inscription -->
          <h3
            class="text-lg leading-6 font-medium text-gray-900 text-center"
            id="modal-title"
          >
            Inscription
          </h3>
          <form @submit.prevent="register" class="space-y-6">
            <div>
              <label
                for="name"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Nom</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  v-model="name"
                  id="name"
                  name="name"
                  autocomplete="name"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Email</label
              >
              <div class="mt-2">
                <input
                  type="email"
                  v-model="email"
                  id="email"
                  name="email"
                  autocomplete="email"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Mot de passe</label
                >
              </div>
              <div class="mt-2">
                <input
                  id="password"
                  v-model="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p class="mt-10 text-center text-sm text-gray-500">
            Vous avez déja un compte?
            <a
              href="#"
              @click.prevent="toggleRegisterForm"
              class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >Connectez vous !</a
            >
          </p>
        </div>

        <!-- Formulaire de réinitialisation du mot de passe -->
        <div
          class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
          v-if="showResetPasswordForm"
        >
          <h3
            class="text-lg leading-6 font-medium text-gray-900 text-center"
            id="modal-title"
          >
            Réinitialisation du mot de passe
          </h3>
          <div class="mt-2">
            <form @submit.prevent="sendResetPasswordEmail" class="space-y-6">
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Email</label
                >
                <div class="mt-2">
                  <input
                    type="email"
                    v-model="email"
                    id="email"
                    name="email"
                    autocomplete="email"
                    required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Envoyer l'email
                </button>
              </div>
            </form>
            <p class="mt-10 text-center text-sm text-gray-500">
              <a
                href="#"
                @click.prevent="showResetPasswordForm = false"
                class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >Retour à la connexion</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      showRegisterForm: false,
      showResetPasswordForm: false,
    };
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    toggleRegisterForm() {
      this.showRegisterForm = !this.showRegisterForm;
      this.showResetPasswordForm = false;
    },
    toggleMotDePasse() {
      this.showResetPasswordForm = !this.showResetPasswordForm;
    },

    async login() {
      try {
        const { data } = await this.$axios.post("api/v1/auth/login", {
          email: this.email,
          password: this.password,
          role: this.role,
        });
        console.log("User object:", data.user); // Ajouter cette ligne
        console.log("API response:", data); // Ajouter cette ligne

        // Stockez le token dans le localStorage
        if (data.token) {
          localStorage.setItem("token", data.token);
        } else {
          console.error("Token not found in the response");
        }

        this.$store.commit("setToken", data.token);
        this.$store.commit("setUser", data.user);
        this.$router.push("/profil");
      } catch (error) {
        console.error(error);
        this.$toast.error(
          "Erreur lors de la connexion, verifiez le Mail ou le Mot de passe !"
        );
      }
    },
    async register() {
      try {
        const { data } = await this.$axios.post("api/v1/auth/signup", {
          name: this.name,
          email: this.email,
          password: this.password,
        });
        this.$store.commit("setToken", data.token);
        this.showLoginForm();
      } catch (err) {
        this.$toast.error("Erreur interne du serveur");
      }
    },
    showLoginForm() {
      this.showRegisterForm = false;
    },

    async sendResetPasswordEmail() {
      try {
        const { data } = await this.$axios.post("api/v1/auth/mdpOublie", {
          email: this.email,
        });
        // Afficher un message de succès si l'API renvoie une réponse positive
        this.$toast.success(
          "Un email de réinitialisation du mot de passe a été envoyé."
        );
      } catch (error) {
        // Gérer les erreurs éventuelles
        this.$toast.error(
          "Erreur lors de l'envoi de l'email de réinitialisation du mot de passe."
        );
      }
    },
  },
};
</script>
