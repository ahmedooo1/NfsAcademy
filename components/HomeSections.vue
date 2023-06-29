<template>
  <div>
    <div
      class="w-full h-[514px] bg-blue-700 rounded-bl-[278.50px] rounded-br-[278.50px] flex flex-col justify-center items-center "
    >
      <!--ici-->
      <div class="p-14"></div>
      <div class="flex flex-col items-center justify-center">
        <h1 class="text-4xl text-center text-white ">
          Bienvenue sur votre site
        </h1>

        <img
          src="../assets/images/logoWhite.png"
          alt="Logo"
          class="w-full m-10 fill-white"
        />

        <button
          @click="scrollToQuiSommesNous"
          class="mb-10 font-bold text-gray-900 bg-white rounded-full hover:bg-gray-300"
        >
          <div
  class="relative flex items-center px-8 py-3 overflow-hidden text-gray-900 rounded group focus:outline-none active:text-gray-900"
 
>
  <span class="absolute transition-all -end-full group-hover:end-4">
    <svg
      class="w-5 h-5 rtl:rotate-180"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  </span>

  <span class="text-sm font-medium transition-all group-hover:me-4">
    Qui sommes nous ?
  </span>
</div>
        </button>
        
      </div>
      <!-- Flèche animée -->
      <div class="z-0 animate-bounce">
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
          class="z-0 mt-20 text-white"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </div>
    <!-----presentation de site----->
    <div class="w-3/4 m-auto my-20 text-lg text-center" id="qui-sommes-nous">
      <h1 class="m-5 my-20 text-2xl font-bold text-center">
        C’est quoi NFS Academy ?
      </h1>
      <p class="">
        NFS Academy est un site web éducatif complet et utile pour les personnes
        qui cherchent à apprendre des compétences informatiques dans une grande
        variété de domaines.
      </p>
    </div>





<!-------checkout de site (petits details)-------->
<section class="text-white bg-blue-700 body-font">
  <div class="container flex flex-wrap px-5 py-24 mx-auto">
    <div class="flex flex-wrap content-start mt-auto mb-auto -mx-4 lg:w-1/2 sm:w-2/3 sm:pr-10">
      <div class="w-full px-4 mb-6 sm:p-4">
        <h1 class="mb-2 text-xl font-medium text-white title-font">Moon hashtag pop-up try-hard offal truffaut</h1>
        <div class="leading-relaxed">Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.</div>
      </div>
      <div class="w-1/2 p-4 sm:w-1/2 lg:w-1/4">
        <h2 class="text-3xl font-medium text-white title-font">2.7K</h2>
        <p class="leading-relaxed">Users</p>
      </div>
      <div class="w-1/2 p-4 sm:w-1/2 lg:w-1/4">
        <h2 class="text-3xl font-medium text-white title-font">1.8K</h2>
        <p class="leading-relaxed">Subscribes</p>
      </div>
      <div class="w-1/2 p-4 sm:w-1/2 lg:w-1/4">
        <h2 class="text-3xl font-medium text-white title-font">35</h2>
        <p class="leading-relaxed">Downloads</p>
      </div>
      <div class="w-1/2 p-4 sm:w-1/2 lg:w-1/4">
        <h2 class="text-3xl font-medium text-white title-font">4</h2>
        <p class="leading-relaxed">Products</p>
      </div>
    </div>
    <div class="w-full mt-6 overflow-hidden rounded-lg lg:w-1/2 sm:w-1/3 sm:mt-0">
      <img class="object-cover object-center w-full h-full" src="../assets/images/studentGirl.jpeg" alt="stats">
    </div>
  </div>
</section>





    <!-------les etapes-------->
    <section class="text-gray-600 body-font">
  <div class="container flex flex-wrap px-5 py-24 mx-auto">
    <div class="relative flex pt-10 pb-20 mx-auto sm:items-center md:w-2/3">
      <div class="absolute inset-0 flex items-center justify-center w-6 h-full">
        <div class="w-1 h-full bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white bg-blue-500 rounded-full sm:mt-0 title-font">1</div>
      <div class="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row">
        <div class="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 text-blue-500 bg-blue-100 rounded-full">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        </div>
        <div class="flex-grow mt-6 sm:pl-6 sm:mt-0">
          <h2 class="mb-1 text-xl font-medium text-gray-900 title-font">Shooting Stars</h2>
          <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
        </div>
      </div>
    </div>
    <div class="relative flex pb-20 mx-auto sm:items-center md:w-2/3">
      <div class="absolute inset-0 flex items-center justify-center w-6 h-full">
        <div class="w-1 h-full bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white bg-blue-500 rounded-full sm:mt-0 title-font">2</div>
      <div class="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row">
        <div class="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 text-blue-500 bg-blue-100 rounded-full">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div class="flex-grow mt-6 sm:pl-6 sm:mt-0">
          <h2 class="mb-1 text-xl font-medium text-gray-900 title-font">The Catalyzer</h2>
          <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
        </div>
      </div>
    </div>
    <div class="relative flex pb-20 mx-auto sm:items-center md:w-2/3">
      <div class="absolute inset-0 flex items-center justify-center w-6 h-full">
        <div class="w-1 h-full bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white bg-blue-500 rounded-full sm:mt-0 title-font">3</div>
      <div class="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row">
        <div class="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 text-blue-500 bg-blue-100 rounded-full">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
            <circle cx="12" cy="5" r="3"></circle>
            <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
          </svg>
        </div>
        <div class="flex-grow mt-6 sm:pl-6 sm:mt-0">
          <h2 class="mb-1 text-xl font-medium text-gray-900 title-font">The 400 Blows</h2>
          <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
        </div>
      </div>
    </div>
    <div class="relative flex pb-10 mx-auto sm:items-center md:w-2/3">
      <div class="absolute inset-0 flex items-center justify-center w-6 h-full">
        <div class="w-1 h-full bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white bg-blue-500 rounded-full sm:mt-0 title-font">4</div>
      <div class="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row">
        <div class="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 text-blue-500 bg-blue-100 rounded-full">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div class="flex-grow mt-6 sm:pl-6 sm:mt-0">
          <h2 class="mb-1 text-xl font-medium text-gray-900 title-font">Neptune</h2>
          <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
        </div>
      </div>
    </div>
  </div>
</section>
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
<style>

</style>
