<template>
    <div class="p-6 max-w-md mx-auto mt-20 bg-white rounded-2xl shadow text-center space-y-4">
      <h2 class="text-lg font-semibold text-gray-800">🔒 Accès protégé</h2>
      <input
        :value="password"
        @input="$emit('update:password', $event.target.value)"
        type="password"
        placeholder="Mot de passe"
        class="border p-2 w-full rounded"
        @keyup.enter="$emit('submit')"
      />
      <button
        @click="$emit('submit')"
        class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Valider
      </button>
      <p v-if="error" class="text-red-500 text-sm">Mot de passe incorrect</p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    password: String,
    error: Boolean
  });
  defineEmits(['submit', 'update:password']);
  </script>
  