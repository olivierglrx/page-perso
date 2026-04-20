<template>
  <section class="bg-white rounded-2xl shadow p-6" v-if="info">
    <h3 class="text-lg font-bold mb-2 text-gray-800">
      🧾 Informations Complémentaires
    </h3>
    <ul class="space-y-1 text-gray-700">
      <li><strong>Code candidat :</strong> {{ info["Code candidat"] }}</li>
      <li>
        <strong>Groupe algorithmique :</strong>
        {{ info["Groupe algorithmique"] }}
      </li>
      <li>
        <strong>Classement :</strong>
        {{ info["Classement Algorithmique"] || "—" }}
      </li>
      <li><strong>Remarques :</strong> {{ info["Remarques"] || "—" }}</li>
      <li><strong>Spécialités :</strong> {{ info["Spe"] }}</li>
      <li>
        <strong>Spécialités abandonnées :</strong>
        {{ info["speabandonne"]?.[0] }}
      </li>
      <li><strong>Veto :</strong> {{ info["veto"] }}</li>
      <li><strong>Geol :</strong> {{ info["geol"] }}</li>
    </ul>
  </section>
</template>

<script setup>
defineProps({ info: Object });
</script>
