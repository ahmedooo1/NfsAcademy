<template>
  <div>
    <div
      class="w-full sm:h-[514px] bg-blue-700 rounded-bl-[278.50px] rounded-br-[278.50px] flex flex-col justify-center items-center"
    >
      <!--ici-->

      <div
        class="container flex justify-center p-6 py-12 mx-auto md:mt-0 md:flex-row md:justify-between"
      >
        <div
          class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left"
        >
          <CookiesNotice />
          <h1 class="text-xl font-bold text-white sm:text-3xl">
            Bienvenue sur votre site :
          </h1>
          <h1 class="my-2 text-lg font-bold">
            <span class="p-2 text-white bg-black">NFS</span
            ><span class="p-2 text-black bg-white">Academy</span>
          </h1>
          <p class="mt-3 mb-8 text-lg text-white sm:mb-12">
            votre solution pour approfondir vos compétences
            <br class="hidden md:inline lg:hidden" />dans différents domaines.
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
                <span
                  class="absolute transition-all -end-full group-hover:end-4"
                >
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

                <span
                  class="text-sm font-medium transition-all group-hover:me-4"
                >
                  Qui sommes nous ?
                </span>
              </div>
            </button>
          </div>
        </div>
        <!---hero img----->
        <div
          class="items-center justify-center hidden p-6 mt-8 sm:flex lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112"
        >
          <img
            src="../assets/images/nfsAcLogo.png"
            alt="nfsa-logo"
            class="hidden object-contain h-80 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 sm:block"
          />
        </div>
      </div>
      <!-- Flèche animée -->
      <div class="bottom-0 z-0 hidden animate-bounce sm:block">
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
    <section
      class="flex flex-wrap justify-center text-white bg-blue-700 body-font"
    >
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
              NFS Academy vous offre la possibilité d'explorer et de
              perfectionner vos compétences. Avec une variété de cours, de
              guides et de tutoriels en ligne, NFS Academy vous permet
              d'apprendre à votre propre rythme, tout en bénéficiant du soutien
              personnalisé d'experts de l'industrie. Rejoignez la communauté en
              ligne pour échanger des connaissances et recevoir des conseils
              précieux pour réussir.
            </div>
          </div>
        </div>
        <div
          class="flex justify-center w-full mt-6 overflow-hidden rounded-lg lg:w-1/2 sm:w-1/3 sm:mt-0"
        >
          <img
            src="../assets/images/boy-studying-onlinepng.png"
            alt="studyonline"
            class="object-contain h-80 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 sm:block"
          />
        </div>
      </div>
    </section>

    <!-------les etapes-------->
    <section class="body-font">
      <div class="container flex flex-wrap px-5 py-24 mx-auto">
        <div class="relative flex pt-10 pb-20 mx-auto sm:items-center md:w-2/3">
          <div
            class="absolute inset-0 flex items-center justify-center w-6 h-full"
          >
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
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-12 h-12"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                />
              </svg>
            </div>
            <div class="flex-grow mt-6 sm:pl-6 sm:mt-0">
              <h2 class="mb-1 text-xl font-medium title-font">
                Devenez expert avec NFS Academy
              </h2>
              <p class="leading-relaxed">
                NFS Academy vous propose des cours en ligne pour maîtriser
                plusieurs domaines. Vous pourrez apprendre avec des
                professionnels de l'industrie qui partagent leur expertise avec
                vous. Rejoignez la communauté et devenez un expert dans vos
                future domaines.
              </p>
            </div>
          </div>
        </div>
        <div class="relative flex pb-20 mx-auto sm:items-center md:w-2/3">
          <div
            class="absolute inset-0 flex items-center justify-center w-6 h-full"
          >
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
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-12 h-12"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
            </div>
            <div class="flex-grow mt-6 sm:pl-6 sm:mt-0">
              <h2 class="mb-1 text-xl font-medium title-font">
                NFS Academy : guides et tutoriels en ligne
              </h2>
              <p class="leading-relaxed">
                NFS Academy est une plateforme qui offre des guides et des
                tutoriels informatiques en ligne. Vous pouvez accéder à une
                bibliothèque complète de ressources pour vous aider à apprendre
                de nouvelles compétences dans différents domaines. Partagez vos
                guides et tutoriels pour aider la communauté et obtenir des
                commentaires constructifs.
              </p>
            </div>
          </div>
        </div>
        <div class="relative flex pb-20 mx-auto sm:items-center md:w-2/3">
          <div
            class="absolute inset-0 flex items-center justify-center w-6 h-full"
          >
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
                NFS Academy vous permet de suivre des cours en ligne animés par
                des experts de l'industrie, portant sur des sujets clés tels que
                la programmation, les réseaux et la cybersécurité. Vous allez
                développer vos compétences en informatique et apprendre les
                bonnes pratiques de l'industrie pour devenir un professionnel de
                l'informatique accompli.
              </p>
            </div>
          </div>
        </div>
        <div class="relative flex pb-10 mx-auto sm:items-center md:w-2/3">
          <div
            class="absolute inset-0 flex items-center justify-center w-6 h-full"
          >
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
                NFS Academy est une communauté d'apprentissage en ligne où vous
                pouvez vous connecter avec d'autres apprenants, échanger des
                conseils, poser des questions et obtenir de l'aide dans
                différents domaines de l'informatique. En rejoignant NFS
                Academy, vous obtenez également un accès exclusif à des
                événements et des opportunités de réseautage pour créer des
                liens avec d'autres professionnels de l'informatique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import CookiesNotice from "@/components/CookiesNotice.vue";
export default {
  components: {
    CookiesNotice,
  },
   data() {
    return {
      keywords: "Web dev, Graphisme, Mode de vie, Marketing, Compétences, Tutoriels, Guides, Informatique, Réseaux, Programmation",
    };
  },
  head() {
    return {
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content: this.keywords,
        },
      ],
    };
  },
 
  methods: {
    scrollToQuiSommesNous() {
      const quiSommesNous = document.querySelector("#qui-sommes-nous");
      quiSommesNous.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
<style></style>
