<template>
    <section v-if="scolarite" class="bg-white rounded-2xl shadow p-6">
      <h3 class="text-lg font-bold mb-2 text-gray-800">🎓 Scolarité</h3>
      <ul class="space-y-1">
        <li><strong>Année scolaire :</strong> {{ scolarite[0].AnneeScolaireLibelle }}</li>
        <li><strong>Niveau d'étude :</strong> {{ scolarite[0].NiveauEtudeLibelle }}</li>
        <li><strong>Type de classe :</strong> {{ scolarite[0].TypeClasseLibelle }}</li>
        <li><strong>Scolarité :</strong> {{ scolarite[0].ScolariteFrancaiseLibelle }}</li>
        <li><strong>Établissement :</strong> {{ scolarite[0].NomEtablissementOrigine }}</li>
        <li><strong>Commune :</strong> {{ scolarite[0].CommuneEtablissementOrigineLibelle }}</li>
        <li><strong>Pays :</strong> {{ scolarite[0].PaysEtablissementorigineLibelle }}</li>
        <li><strong>Type d'établissement :</strong> {{ scolarite[0].TypeEtablissementorigineLibelle }}</li>
      </ul>
    </section>
  </template>
  
  <script setup>
  defineProps({ scolarite: Array });
  </script>
  