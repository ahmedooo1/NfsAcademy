<template>
  <footer class="bg-blue-600 mt-10">
    <div class="container mx-auto px-6 py-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 class="text-lg font-semibold text-white">Menu</h3>
          <div class="mt-6 flex flex-col">
            <NuxtLink to="/contact" class="text-white hover:underline">
              Contactez nous !
            </NuxtLink>
            <a class="text-white hover:underline" href="#"
              >Politique de confidentialité</a
            >
            <a class="text-white hover:underline" href="#">Qui somme nous ?</a>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-white">Nous contacter</h3>
          <address class="not-italic mt-6 text-white">
            <p>
              <span class="font-semibold">Adresse:</span>
              10, rue sarl Rouen 76000
            </p>
            <p>
              <span class="font-semibold">Téléphone:</span> +33 2 03 04 05 06
            </p>
            <p>
              <span class="font-semibold">Email:</span> nfs-academy@outlook.com
            </p>
          </address>
        </div>
        <div>
          <img src="../assets/images/logoWhite.png" alt="Logo" class="w-36" />
        </div>
        <div><p class="text-white">&copy; 2023 NFS ACADEMY</p></div>
      </div>
    </div>
  </footer>
</template>

<style>
.container {
  width: 90%;
}
</style>
