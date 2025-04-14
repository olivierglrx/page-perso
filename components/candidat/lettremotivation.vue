<template>
    <section v-if="text" class="bg-white rounded-2xl shadow p-6">
      <h3 class="text-lg font-bold text-gray-800 mb-2">✉️ Lettre de Motivation</h3>
      <div class="text-gray-700 leading-relaxed" v-html="text"></div>
    </section>
  </template>
  
  <script setup>
  defineProps({ text: String });
  </script>
  