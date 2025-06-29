<template>
  <div class="text-center mx-auto">
    <img :src="'/resized/' + name" class="w-full object-contain max-h-[80vh]" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

// Récupération du paramètre de la route
const route = useRoute();
const name = route.params.name;

definePageMeta({
  layout: false,
});
</script>
