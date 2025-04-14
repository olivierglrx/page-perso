<template>
    <section v-if="baccalaureat" class="bg-white rounded-2xl shadow p-6">
      <h3 class="text-lg font-bold text-gray-800 mb-2">🎓 Spécialités Bac</h3>
      <ul class="list-disc pl-6 text-gray-700">
        <li v-if="baccalaureat.EDSScolariteTerminale1Libelle">Terminale 1 : {{ baccalaureat.EDSScolariteTerminale1Libelle }}</li>
        <li v-if="baccalaureat.EDSScolariteTerminale2Libelle">Terminale 2 : {{ baccalaureat.EDSScolariteTerminale2Libelle }}</li>
        <li v-if="baccalaureat.EDSScolaritePremiere1Libelle">Première 1 : {{ baccalaureat.EDSScolaritePremiere1Libelle }}</li>
        <li v-if="baccalaureat.EDSScolaritePremiere2Libelle">Première 2 : {{ baccalaureat.EDSScolaritePremiere2Libelle }}</li>
        <li v-if="baccalaureat.EDSScolaritePremiere3Libelle">Première 3 : {{ baccalaureat.EDSScolaritePremiere3Libelle }}</li>
      </ul>
    </section>
  </template>
  
  <script setup>
  defineProps({ baccalaureat: Object });
  </script>
  