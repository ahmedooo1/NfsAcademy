<template>
  <div>
    <div
      class="w-full h-[614px] bg-blue-700 rounded-bl-[278.50px] rounded-br-[278.50px] flex flex-col justify-center items-center"
    >
      <!--ici-->

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
          class="bg-white hover:bg-gray-300 text-gray-900 font-bold py-4 px-8 rounded-full mb-30"
        >
          Qui Somme nous ?
        </button>
      </div>
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
          z-index="9"
          class="text-white z-0 mt-40"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </div>
  </div>
</template>
