<template>
  <footer class="bg-blue-700 ">
    <div class="container px-6 py-10 mx-auto">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 class="text-lg font-semibold text-white">Menu</h3>
          <div class="flex flex-col mt-6">
            <NuxtLink to="/contact" class="text-white hover:underline">
              Contactez nous !
            </NuxtLink> 
            <NuxtLink to="/confidentialite" class="text-white hover:underline">
              Politique de confidentialité
            </NuxtLink>
             <NuxtLink to="/quisommesnous" class="text-white hover:underline">
             qui sommes nous ?
             </NuxtLink>
            
            
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-white">Nous contacter</h3>
          <address class="mt-6 not-italic text-white">
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
