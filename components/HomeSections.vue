<template>
  <div>
    <div
      class="w-full  sm:h-[514px]  bg-blue-700 rounded-bl-[278.50px] rounded-br-[278.50px] flex flex-col justify-center items-center"
    >
      <!--ici-->

      <div
        class="container flex justify-center p-6 py-12 mx-auto md:mt-0 md:flex-row md:justify-between "
      >
        <div
          class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left"
        >
          <h1 class="text-xl font-bold text-white sm:text-3xl">
            Bienvenue sur votre site :
          </h1>
          <h1 class="my-2 text-lg font-bold">
            <span class="p-2 text-white bg-black">NFS</span
            ><span class="p-2 text-black bg-white">Academy</span>
          </h1>
          <p class="mt-3 mb-8 text-lg text-white sm:mb-12">
votre solution pour approfondir vos compétences          <br class="hidden md:inline lg:hidden" />dans différents domaines.
            ligula sem
          </p>
          <div
            class="flex flex-col sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start"
          >
            <button
              @click="scrollToQuiSommesNous"
              class="font-bold text-gray-900 bg-white rounded-full hover:bg-gray-300"
            >
              <div
                class="relative inline-flex items-center px-8 py-3 overflow-hidden text-gray-900 rounded group focus:outline-none focus:ring active:text-gray-900"
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
        </div>
        <!---hero img----->
        <div
          class="items-center justify-center hidden p-6 mt-8 sm:flex lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 "
        >
          <img
            src="../\assets\images\instapostLogo.png"
            alt=""
            class="hidden object-contain h-80 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 sm:block"
          />
        </div>
      </div>
      <!-- Flèche animée -->
      <div class="bottom-0 z-0 hidden animate-bounce sm:block ">
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
          class="z-0 text-white"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </div>
    <!-----presentation de site----->
    <div class="w-3/4 m-auto my-20 text-lg text-center" id="qui-sommes-nous">
      <h1 class="m-5 my-20 text-2xl font-bold text-center">C’est quoi NFS Academy ?</h1>
      <p class="">
        NFS Academy est un site web éducatif complet et utile pour les personnes qui
        cherchent à apprendre des compétences informatiques dans une grande variété de
        domaines.
      </p>
    </div>

    <!-------checkout de site (petits details)-------->
    <section class="flex flex-wrap justify-center text-white bg-blue-700 body-font">
      <div
        class="container flex flex-wrap items-center justify-between px-5 py-24 mx-auto"
      >
        <div
          class="flex flex-wrap content-start mt-auto mb-auto -mx-4 lg:w-1/2 sm:w-2/3 sm:pr-10"
        >
          <div class="w-full px-4 mb-6 sm:p-4">
            <h1 class="mb-2 text-xl font-medium text-white title-font">
              Améliorez vos connaissances avec NFS Academy
            </h1>
            <div class="leading-relaxed">
              NFS Academy vous offre la possibilité d'explorer et de perfectionner vos
              compétences. Avec une variété de cours, de guides et de
              tutoriels en ligne, NFS Academy vous permet d'apprendre à votre propre
              rythme, tout en bénéficiant du soutien personnalisé d'experts de
              l'industrie. Rejoignez la communauté en ligne pour échanger des
              connaissances et recevoir des conseils précieux pour réussir.
            </div>
          </div>
        </div>
        <div class="flex justify-center w-full mt-6 overflow-hidden rounded-lg lg:w-1/2 sm:w-1/3 sm:mt-0">
          <svg
            id="fill"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            class="mx-auto fill-current w-60"
          >
            <path
              d="M36,56V49H28v7H23.074A3.074,3.074,0,0,0,20,59.074V61H44V59.074A3.074,3.074,0,0,0,40.926,56Z"
              style="fill: #e5e6eb"
            />
            <rect height="7" style="fill: #cfcfd9" width="2" x="34" y="49" />
            <path
              d="M40.927,56h-2A3.073,3.073,0,0,1,42,59.073V61h2V59.073A3.073,3.073,0,0,0,40.927,56Z"
              style="fill: #cfcfd9"
            />
            <rect
              height="40"
              rx="3.92"
              ry="3.92"
              style="fill: #d9dae2"
              width="58"
              x="3"
              y="11"
            />
            <path
              d="M58.662,11.338A3.905,3.905,0,0,1,59,12.92V45.08A3.92,3.92,0,0,1,55.08,49H4.92a3.905,3.905,0,0,1-1.582-.338A3.918,3.918,0,0,0,6.92,51H57.08A3.92,3.92,0,0,0,61,47.08V14.92A3.918,3.918,0,0,0,58.662,11.338Z"
              style="fill: #cfcfd9"
            />
            <path
              d="M8.183,15H55.817A1.183,1.183,0,0,1,57,16.183V43a0,0,0,0,1,0,0H7a0,0,0,0,1,0,0V16.183A1.183,1.183,0,0,1,8.183,15Z"
            />
            <path
              d="M8.183,15H55.817A1.183,1.183,0,0,1,57,16.183v0A26.817,26.817,0,0,1,30.183,43H7a0,0,0,0,1,0,0V16.183A1.183,1.183,0,0,1,8.183,15Z"
              style="fill: #444"
            />
            <path
              d="M13,3H24.757A10.43,10.43,0,0,1,32,5.9h0A10.43,10.43,0,0,1,39.243,3H51V29H13Z"
              style="fill: #027de5"
            />
            <path
              d="M39.243,3A10.43,10.43,0,0,0,32,5.9,10.43,10.43,0,0,0,24.757,3H17V23H47V3Z"
              style="fill: #cceaff"
            />
            <path
              d="M34,22V4.407A10.171,10.171,0,0,0,32,5.9V22H17v4H47V22Z"
              style="fill: #85b4e0"
            />
            <polygon points="19 9 19 5 23 5 19 9" style="fill: #fff" />
            <path
              d="M37,34.586l-1.489,1.489A1.96,1.96,0,0,0,35,36a2,2,0,1,0,2,2,1.96,1.96,0,0,0-.075-.511l1.782-1.782A1,1,0,0,0,39,35V28H37Z"
              style="fill: #027de5"
            />
            <path d="M44,36.278V28H42v8.278a2,2,0,1,0,2,0Z" style="fill: #027de5" />
            <path d="M49,33.278V28H47v5.278a2,2,0,1,0,2,0Z" style="fill: #027de5" />
            <path d="M29,34.278V28H27v6.278a2,2,0,1,0,2,0Z" style="fill: #027de5" />
            <path
              d="M26,38a1.96,1.96,0,0,0-.511.075L23,35.586V28H21v8a1,1,0,0,0,.293.707l2.782,2.782A1.96,1.96,0,0,0,24,40a2,2,0,1,0,2-2Z"
              style="fill: #027de5"
            />
            <path d="M18,33.278V28H16v5.278a2,2,0,1,0,2,0Z" style="fill: #027de5" />
            <path
              d="M57.08,10H51v2h6.08A2.923,2.923,0,0,1,60,14.92V47.08A2.923,2.923,0,0,1,57.08,50H6.92A2.923,2.923,0,0,1,4,47.08V14.92A2.923,2.923,0,0,1,6.92,12H13V10H6.92A4.925,4.925,0,0,0,2,14.92V47.08A4.925,4.925,0,0,0,6.92,52H27v3H23.074A4.079,4.079,0,0,0,19,59.074V61a1,1,0,0,0,1,1H44a1,1,0,0,0,1-1V59.074A4.079,4.079,0,0,0,40.926,55H37V52H57.08A4.925,4.925,0,0,0,62,47.08V14.92A4.925,4.925,0,0,0,57.08,10ZM36,57h4.926A2.076,2.076,0,0,1,43,59.074V60H21v-.926A2.076,2.076,0,0,1,23.074,57H28a1,1,0,0,0,1-1V52h6v4A1,1,0,0,0,36,57Z"
            />
            <path
              d="M56,16.184V42H8V16.184A.185.185,0,0,1,8.184,16H13V14H8.184A2.186,2.186,0,0,0,6,16.184V43a1,1,0,0,0,1,1H57a1,1,0,0,0,1-1V16.184A2.186,2.186,0,0,0,55.816,14H51v2h4.816A.185.185,0,0,1,56,16.184Z"
            />
          </svg>
        </div>
      </div>
    </section>

    <!-------les etapes-------->
    <section class="body-font">
      <div class="container flex flex-wrap px-5 py-24 mx-auto">
        <div class="relative flex pt-10 pb-20 mx-auto sm:items-center md:w-2/3">
          <div class="absolute inset-0 flex items-center justify-center w-6 h-full">
            <div class="w-1 h-full bg-blue-500 pointer-events-none"></div>
          </div>
          <div
            class="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white bg-blue-500 rounded-full sm:mt-0 title-font"
          >
            1
          </div>
          <div
            class="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row"
          >
            <div
              class="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 text-white bg-blue-700 rounded-full"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-12 h-12"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div class="flex-grow mt-6 sm:pl-6 sm:mt-0">
              <h2 class="mb-1 text-xl font-medium title-font">
                Devenez expert avec NFS Academy
              </h2>
              <p class="leading-relaxed">
                NFS Academy vous propose des cours en ligne pour maîtriser plusieurs
                domaines. Vous pourrez apprendre avec des professionnels de
                l'industrie qui partagent leur expertise avec vous. Rejoignez la
                communauté et devenez un expert dans vos future domaines.
              </p>
            </div>
          </div>
        </div>
        <div class="relative flex pb-20 mx-auto sm:items-center md:w-2/3">
          <div class="absolute inset-0 flex items-center justify-center w-6 h-full">
            <div class="w-1 h-full bg-blue-500 pointer-events-none"></div>
          </div>
          <div
            class="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white bg-blue-500 rounded-full sm:mt-0 title-font"
          >
            2
          </div>
          <div
            class="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row"
          >
            <div
              class="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 text-white bg-blue-700 rounded-full"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-12 h-12"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div class="flex-grow mt-6 sm:pl-6 sm:mt-0">
              <h2 class="mb-1 text-xl font-medium title-font">
                NFS Academy : guides et tutoriels en ligne
              </h2>
              <p class="leading-relaxed">
                NFS Academy est une plateforme qui offre des guides et des tutoriels
                informatiques en ligne. Vous pouvez accéder à une bibliothèque complète de
                ressources pour vous aider à apprendre de nouvelles compétences dans différents domaines.
                 Partagez vos guides et tutoriels pour aider la communauté et
                obtenir des commentaires constructifs.
              </p>
            </div>
          </div>
        </div>
        <div class="relative flex pb-20 mx-auto sm:items-center md:w-2/3">
          <div class="absolute inset-0 flex items-center justify-center w-6 h-full">
            <div class="w-1 h-full bg-blue-500 pointer-events-none"></div>
          </div>
          <div
            class="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white bg-blue-500 rounded-full sm:mt-0 title-font"
          >
            3
          </div>
          <div
            class="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row"
          >
            <div
              class="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 text-white bg-blue-700 rounded-full"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-12 h-12"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="5" r="3"></circle>
                <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
              </svg>
            </div>
            <div class="flex-grow mt-6 sm:pl-6 sm:mt-0">
              <h2 class="mb-1 text-xl font-medium title-font">
                Apprenez la programmation et les réseaux avec NFS
              </h2>
              <p class="leading-relaxed">
                NFS Academy vous permet de suivre des cours en ligne animés par des
                experts de l'industrie, portant sur des sujets clés tels que la
                programmation, les réseaux et la cybersécurité. Vous allez développer vos
                compétences en informatique et apprendre les bonnes pratiques de
                l'industrie pour devenir un professionnel de l'informatique accompli.
              </p>
            </div>
          </div>
        </div>
        <div class="relative flex pb-10 mx-auto sm:items-center md:w-2/3">
          <div class="absolute inset-0 flex items-center justify-center w-6 h-full">
            <div class="w-1 h-full bg-blue-500 pointer-events-none"></div>
          </div>
          <div
            class="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white bg-blue-500 rounded-full sm:mt-0 title-font"
          >
            4
          </div>
          <div
            class="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row"
          >
            <div
              class="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 text-white bg-blue-700 rounded-full"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-12 h-12"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div class="flex-grow mt-6 sm:pl-6 sm:mt-0">
              <h2 class="mb-1 text-xl font-medium title-font">
                Rejoignez la communauté d'apprentissage de NFS Academy
              </h2>
              <p class="leading-relaxed">
                NFS Academy est une communauté d'apprentissage en ligne où vous pouvez
                vous connecter avec d'autres apprenants, échanger des conseils, poser des
                questions et obtenir de l'aide dans différents domaines de l'informatique.
                En rejoignant NFS Academy, vous obtenez également un accès exclusif à des
                événements et des opportunités de réseautage pour créer des liens avec
                d'autres professionnels de l'informatique.
              </p>
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
<style></style>
