<template>
    <section v-if="appreciations?.length" class="bg-white rounded-2xl shadow p-6">
      <h3 class="text-lg font-bold text-gray-800 mb-2">🧑‍🏫 Appréciations Enseignants</h3>
      <div v-for="(app, i) in appreciations" :key="i" class="mb-2">
        <p class="text-gray-700">
          <strong>{{ app.MatiereFicheAvenirLibelle }}</strong> :
          {{ app.AppreciationFicheAvenir }}
        </p>
      </div>
    </section>
  </template>
  
  <script setup>
  defineProps({ appreciations: Array });
  </script>
  