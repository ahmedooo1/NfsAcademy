<template>
  <div
    class="p-4 mx-auto my-4 font-sans bg-white rounded-lg shadow-md md:w-1/2 dark:text-slate-200 dark:bg-slate-900"
  >
    <header class="py-4 bg-white dark:text-white dark:bg-slate-900">
      <div class="container px-4 mx-auto text-center">
        <h1
          class="text-3xl font-bold text-gray-800 dark:text-slate-200 dark:bg-slate-900"
        >
          Utilisateurs & Guides
        </h1>
        <p class="text-lg text-gray-600 dark:text-slate-200 dark:bg-slate-900">
          Ce graphique montre la répartition des utilisateurs et des guides,
          ainsi que la répartition des utilisateurs par rôle.
        </p>
      </div>
    </header>
    <div class="w-full dark:text-slate-200 dark:bg-slate-900">
      <apexchart
        type="donut"
        :options="chartOptions"
        :series="chartData"
      ></apexchart>
    </div>
    <div
      class="p-4 mt-4 bg-gray-100 rounded-lg dark:text-slate-200 dark:bg-slate-900"
    >
      <ul
        class="text-lg text-gray-600 list-disc list-inside dark:text-slate-200 dark:bg-slate-900"
      >
        <li>Tous les utilisateurs: {{ chartData[0] }}</li>
        <li>Guides: {{ chartData[1] }}</li>
        <li>Rôle Admin: {{ chartData[2] }}</li>
        <li>Rôle Rédacteur: {{ chartData[3] }}</li>
        <li>Rôle Utilisateur: {{ chartData[4] }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      darkMode: false,
      chartOptions: {
        chart: {
          id: "donut-chart-example",
        },
        labels: [
          "Tous les utilisateurs",
          "Guides",
          "Rôle Admin",
          "Rôle Rédacteur",
          "Rôle Utilisateur",
        ],
        legend: {
          position: "bottom",
        },
      },
      chartData: [0, 0, 0, 0, 0],
    };
  },
  methods: {
    countUsersByRole(users, role) {
      return users.filter((user) => user.role === role).length;
    },
  },
  async mounted() {
    try {
      // Récupérer le nombre d'utilisateurs
      const userApiUrl = "/api/v1/auth";
      const userResponse = await this.$axios.get(userApiUrl);
      const users = userResponse.data;
      const userCount = users.length;

      // Récupérer le nombre de guides
      const guideApiUrl = "/api/v1/guides";
      const guideResponse = await this.$axios.get(guideApiUrl);
      const guideCount = guideResponse.data.length;

      // Compter les utilisateurs par rôle
      const roleAdminCount = this.countUsersByRole(users, "admin");
      const roleRedacteurCount = this.countUsersByRole(users, "redacteur");
      const roleUserCount = this.countUsersByRole(users, "user");

      // Mettre à jour les données du graphique avec les nombres d'utilisateurs et de guides
      this.chartData = [
        userCount,
        guideCount,
        roleAdminCount,
        roleRedacteurCount,
        roleUserCount,
      ];
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
};
</script>
