<template>
  <div
    class="fixed inset-0 z-50 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
    v-if="isOpen"
  >
    <div
      class="flex items-end justify-center min-h-screen px-4 pt-4 text-center pb-96 sm:block sm:p-0"
    >
      <div
        class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
        aria-hidden="true"
        @click="closeModal"
      ></div>

      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"
        >&#8203;</span
      >

      <div
        class="z-50 inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:text-slate-200 dark:bg-slate-900 sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
      >
        <div
          class="px-4 py-3 dark:text-slate-200 dark:bg-slate-900 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse"
        >
          <button
            type="button"
            class="inline-flex items-center justify-center px-4 py-2 -ml-4 -mr-2 text-gray-400 bg-white rounded-md shadow-sm dark:text-slate-200 dark:bg-slate-900 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            @click="closeModal"
          >
            <span class="sr-only">Fermer</span>
            <svg
              class="w-6 h-6"
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
          class="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4 dark:text-slate-200 dark:bg-slate-900"
          v-if="showLoginForm"
        >
          <h3
            class="text-lg font-medium leading-6 text-center text-gray-900 dark:text-slate-200 dark:bg-slate-900"
            id="modal-title"
          >
            Connexion
          </h3>
          <div class="mt-2">
            <form @submit.prevent="login" class="space-y-6">
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-200 dark:bg-slate-900"
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
                    class="dark:text-slate-200 dark:bg-slate-900 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div class="flex items-center justify-between">
                  <label
                    for="password"
                    class="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-200 dark:bg-slate-900"
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
                    class="block w-full rounded-md border-0 py-1.5 dark:text-slate-200 dark:bg-slate-900 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  class="flex w-full justify-center rounded-full bg-blue-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
            <p
              class="mt-10 text-sm text-center text-gray-500 dark:text-slate-200 dark:bg-slate-900"
            >
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
          class="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4 dark:text-slate-200 dark:bg-slate-900"
          v-if="showRegisterForm"
        >
          <!-- Contenu du formulaire d'inscription -->
          <h3
            class="text-lg font-medium leading-6 text-center text-gray-900 dark:text-slate-200 dark:bg-slate-900"
            id="modal-title"
          >
            Inscription
          </h3>
          <form @submit.prevent="register" class="space-y-6">
            <div>
              <label
                for="name"
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-200 dark:bg-slate-900"
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
                  class="block w-full rounded-md border-0 py-1.5 dark:text-slate-200 dark:bg-slate-900 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-200 dark:bg-slate-900"
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
                  class="block w-full rounded-md border-0 py-1.5 dark:text-slate-200 dark:bg-slate-900 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-200 dark:bg-slate-900"
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
                  class="block w-full rounded-md border-0 py-1.5 dark:text-slate-200 dark:bg-slate-900 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              
            </div><div>
                <label
                  for="passwordConfirmation"
                  class="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-200 dark:bg-slate-900"
                >
                  Confirmation du mot de passe
                </label>
                <div class="mt-2">
                  <input
                    id="passwordConfirmation"
                    v-model="passwordConfirmation"
                    name="passwordConfirmation"
                    type="password"
                    autocomplete="new-password"
                    required
                    class="block w-full rounded-md border-0 py-1.5 dark:text-slate-200 dark:bg-slate-900 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div class="text-red-500">{{ passwordError }}</div>
              </div>
            <div class="mt-2">
              <input
                type="checkbox"
                v-model="acceptTerms"
                required
                class="w-4 h-4 text-indigo-600 transition duration-150 ease-in-out form-checkbox dark:text-slate-200 dark:bg-slate-900"
              />
              <label
                for="acceptTerms"
                class="ml-2 text-sm text-gray-900 dark:text-blue-700 dark:bg-slate-900"
              >
                J'accepte les conditions générales d'utilisation
              </label>
            </div>

            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-full bg-blue-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p class="mt-10 text-sm text-center text-gray-500">
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
          class="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4 dark:text-slate-200 dark:bg-slate-900"
          v-if="showResetPasswordForm"
        >
          <h3
            class="text-lg font-medium leading-6 text-center text-gray-900 dark:text-slate-200 dark:bg-slate-900"
            id="modal-title"
          >
            Réinitialisation du mot de passe
          </h3>
          <div class="mt-2">
            <form @submit.prevent="sendResetPasswordEmail" class="space-y-6">
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-200 dark:bg-slate-900"
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
                    class="block w-full rounded-md border-0 py-1.5 dark:text-slate-200 dark:bg-slate-900 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  class="flex w-full justify-center rounded-full bg-blue-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Envoyer l'email
                </button>
              </div>
            </form>
            <p
              class="mt-10 text-sm text-center text-gray-500 dark:text-slate-200 dark:bg-slate-900"
            >
              <a
                href="#"
                @click.prevent="backToLogin"
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
      passwordConfirmation: "",
      passwordError: "",
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
      this.showLoginForm = !this.showLoginForm;
      this.showResetPasswordForm = false;
    },
    backToLogin() {
      this.showRegisterForm = false;
      this.showResetPasswordForm = false;
      this.showLoginForm = true;
    },
    toggleMotDePasse() {
      this.showRegisterForm = false;
      this.showResetPasswordForm = true;
      this.showLoginForm = false;
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
      // Vérification de la correspondance des mots de passe
      if (this.password !== this.passwordConfirmation) {
        this.passwordError = "Les mots de passe ne correspondent pas";
        return;
      }

      // Vérifications supplémentaires du mot de passe
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/;
      if (!passwordRegex.test(this.password)) {
        this.passwordError =
          "Le mot de passe doit contenir au moins 6 caractères, une lettre majuscule, une lettre minuscule et un symbole";
        return;
      }

      try {
        const { data } = await this.$axios.post("api/v1/auth/signup", {
          name: this.name,
          email: this.email,
          password: this.password,
        });
        this.$store.commit("setToken", data.token);
        this.backToLogin();
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
        this.$toast.success("Un email de réinitialisation du mot de passe a été envoyé.");
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
