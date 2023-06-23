<template>
  <div class="w-full max-w-md mx-auto mt-10">
    <div class="bg-white shadow-2xl rounded-md p-4 mb-4">
      <p class="text-gray-700 text-lg font-medium">
        Contactez-nous pour obtenir de l'aide ou des informations
        supplémentaires.
      </p>
    </div>
    <form
      @submit.prevent="submitForm"
      class="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4"
    >
      <div class="w-full flex flex-col justify-center items-center">
        <h1 class="font-bold">Contact</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#3b82f6"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#fff"
          class="w-20 h-20"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
          />
        </svg>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
          Nom
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Votre nom"
          v-model="name"
          required
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Votre email"
          v-model="email"
          required
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="message">
          Message
        </label>
        <textarea
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="message"
          placeholder="Votre message"
          v-model="message"
          required
          rows="8"
          cols="50"
        ></textarea>
      </div>
      <div class="flex items-center justify-center">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Envoyer
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await this.$axios.post("api/v1/contact", {
          name: this.name,
          email: this.email,
          message: this.message,
        });

        console.log("Réponse de l'API :", response.data); // Ajoutez cette ligne pour afficher les données

        this.$toast.success("Message envoyé avec succès !");
      } catch (error) {
        console.log("Erreur lors de l'envoi du formulaire :", error);
        this.$toast.error("Une erreur est survenue, veuillez réessayer.");
      }
    },
  },
};
</script>
