<template>
    <section class="bg-white rounded-2xl shadow p-6">
      <h2 class="text-xl font-semibold text-gray-800 mb-2">
        📁 Dossier Candidat #{{ candidat.NumeroDossierCandidat }}
      </h2>
      <p class="text-gray-700">
        <strong>Nom:</strong> {{ candidat.NomCandidat }} {{ candidat.PrenomCandidat }}
      </p>
      <p><strong>Date de naissance:</strong> {{ candidat.DateNaissance }}</p>
    </section>
  </template>
  
  <script setup>
  defineProps({ candidat: Object });
  </script>
  