<template>
  <div>
    <div
      class="w-full h-[514px] bg-blue-700 rounded-bl-[278.50px] rounded-br-[278.50px] flex flex-col justify-center items-center"
    >
      <!--ici-->
      <div class="p-14"></div>
      <div class="flex flex-col justify-center items-center">
        <h1 class="text-4xl text-white text-center">
          Bienvenue sur votre site
        </h1>

        <img
          src="../assets/images/logoWhite.png"
          alt="Logo"
          class="w-full m-10 fill-white"
        />

        <button
          @click="scrollToQuiSommesNous"
          class="bg-white hover:bg-gray-300 text-gray-900 font-bold py-4 px-8 rounded-full mb-10"
        >
          Qui Somme nous ?
        </button>
      </div>
      <!-- Flèche animée -->
      <div class="animate-bounce z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          z-index="9"
          class="text-white z-0 mt-20"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </div>
    <div class="w-3/4 text-center text-lg m-auto mt-20" id="qui-sommes-nous">
      <h1 class="text-2xl text-center m-5 my-20 font-bold">
        C’est quoi NFS Academy ?
      </h1>
      <p class="">
        NFS Academy est un site web éducatif complet et utile pour les personnes
        qui cherchent à apprendre des compétences informatiques dans une grande
        variété de domaines.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    scrollToQuiSommesNous() {
      const quiSommesNous = document.querySelector("#qui-sommes-nous");
      quiSommesNous.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
