<template>
  <div>
    <div
      class="w-screen h-[614px] bg-blue-700 rounded-bl-[278.50px] rounded-br-[278.50px] flex flex-col justify-center items-center"
    >
      <!--ici-->
      <h1 class="text-4xl text-white text-center">Bienvenue sur votre site</h1>
      <img src="../assets/images/logoWhite.png" alt="Logo" class="w-1/3 m-20" />
      <button
        class="bg-white hover:bg-gray-300 text-gray-900 font-bold py-4 px-8 rounded-full mb-10"
      >
        Qui Somme nous ?
      </button>
      <!-- Flèche animée -->
      <div class="animate-bounce">
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
          class="feather feather-chevron-down text-white"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </div>
  </div>
</template>
