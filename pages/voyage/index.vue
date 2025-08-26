<template>
  <!-- 🔐 Formulaire mot de passe -->
  Out of order !
  <!--   <div v-if="pendingAuth" class="hidden"></div>

  <AuthForm
    v-else-if="!isAuthenticated"
    v-model:password="inputPassword"
    :error="error"
    @submit="checkPassword"
  />

  <div v-else-if="isAuthenticated && data">
    <div class="space-y-4">
      <div class="text-center">
        <button
          @click="toggleShuffle"
          class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          {{ isShuffled ? "Show in Order" : "Shuffle" }}
        </button>
      </div>

      <UCarousel
        v-slot="{ item, index }"
        :items="displayedData"
        :ui="{ item: 'basis-full md:basis-1/2 lg:basis-1/3' }"
        class="rounded-lg overflow-hidden"
        arrows
      >
        <div class="text-center mx-auto">
          <img
            :src="item"
            class="w-full object-contain max-h-[80vh]"
            draggable="false"
          />
          <p class="font-semibold">
            {{ item.slice(9) }}
          </p>
        </div>
      </UCarousel>
    </div>
  </div> -->
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});

import { ref, onMounted, computed } from "vue";

const inputPassword = ref("");
const isAuthenticated = ref(false);
const error = ref(false);
const pendingAuth = ref(true);

// Mot de passe attendu
const PASSWORD = "Voyage2025!";

// Vérification du mot de passe
const checkPassword = () => {
  if (inputPassword.value === PASSWORD) {
    localStorage.setItem("voyage_auth", "true");
    isAuthenticated.value = true;
    error.value = false;
  } else {
    error.value = true;
  }
};

onMounted(() => {
  if (localStorage.getItem("voyage_auth") === "true") {
    isAuthenticated.value = true;
  }
  pendingAuth.value = false;
});

const data = ref<string[]>([]);
const isShuffled = ref(true);

function shuffleArray(array: string[]) {
  const copy = array.slice(); // preserve original order
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const displayedData = computed(() =>
  isShuffled.value ? shuffleArray(data.value) : data.value
);

function toggleShuffle() {
  isShuffled.value = !isShuffled.value;
}

onMounted(async () => {
  const res = await fetch("/photo_list.json");
  const raw = await res.json();
  data.value = raw.map((item: string) => `/resized/${item}`);
});
</script>
