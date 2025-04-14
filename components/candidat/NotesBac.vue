<template>
    <section v-if="notes?.length" class="bg-white rounded-2xl shadow p-6">
      <h3 class="text-lg font-bold text-gray-800 mb-2">📄 Notes Bac</h3>
      <ul class="pl-6 text-gray-700 list-disc">
        <li v-for="(note, i) in notes" :key="i">
          {{ note.EpreuveLibelle }} :
          <span v-if="note.NoteEpreuve">{{ note.NoteEpreuve }}</span>
          <span v-else class="italic text-gray-500">non renseignée</span>
        </li>
      </ul>
    </section>
  </template>
  
  <script setup>
  defineProps({ notes: Array });
  </script>
  