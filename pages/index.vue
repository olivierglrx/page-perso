<template>
  <section id="cours">
    <h1
      class="mt-2 mb-4 text-2xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white"
    >
      Cours
    </h1>
    <div class="w-9/12 mx-auto">
      <UCarousel
        v-slot="{ item, index }"
        :items="items"
        :ui="{ item: 'basis-full' }"
        class="rounded-lg overflow-hidden p-10"
        arrows
      >
        <div class="text-center mx-auto">
          <div class="mt-5 mb-10">
            <h2 class="text-xl text-center font-bold">{{ item.name }}</h2>
          </div>
          <img
            :src="item.avatar.src"
            :alt="item.name"
            class="h-96 mx-auto"
            draggable="false"
            arrows
          />
          <div class="mt-5 mb-10 flex justify-evenly">
            <NuxtLink :to="item.toCours" external class=""> Cours </NuxtLink>
            <NuxtLink :to="item.toTD" external class=""> TD </NuxtLink>
            <NuxtLink v-if="item.toCorrection" :to="item.toCorrection" external class="">
              Correction
            </NuxtLink>
          </div>
        </div>
      </UCarousel>
    </div>
  </section>
</template>
<style scoped></style>

<script setup>
const items = [
  {
    name: "Chapitre 1 - Etude de fonctions",
    toCours: "CH1/CH1-cours.pdf",
    toTD: "CH1/CH1-TD.pdf",
    toCorrection: "",
    avatar: { src: "CH1/CH1-meme.jpg" },
  },
  {
    name: "Chapitre 0 - Résolution d'équations",
    toCours: "CH0/CH0-cours.pdf",
    toTD: "CH0/CH0-TD.pdf",
    toCorrection: "CH0/CH0-correction.pdf",
    avatar: { src: "CH0/CH0-meme.jpg" },
  },
];
</script>
