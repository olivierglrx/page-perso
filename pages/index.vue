<template>
  <Hero />
  <section id="cours">
    <Titleheader title="Cours" />

    <div class="md:w-9/12 mx-auto">
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
            class="h-72 md:h-96 mx-auto"
            draggable="false"
            arrows
          />
          <div class="mt-5 mb-10 flex justify-evenly">
            <NuxtLink :to="item.toCours" external class=""> Cours </NuxtLink>
            <NuxtLink :to="item.toTD" external class=""> TD </NuxtLink>
            <NuxtLink
              v-if="item.showCorrection"
              :to="item.toCorrection"
              external
              class=""
            >
              Correction
            </NuxtLink>
          </div>
        </div>
      </UCarousel>
    </div>
  </section>
</template>
<style scoped></style>

<script setup lang="ts">
const allItems = [
  {
    name: "Chapitre 5.3 - Suites récurrentes",
    toCours: "CH5/CH5.3-cours.pdf",
    toTD: "CH5/CH5.3-TD.pdf",
    toCorrection: "CH5/CH5.3-correctionTD.pdf",
    showCorrection: false,
    avatar: { src: "CH5/CH5.3-meme.jpg" },
    published: false,
  },
  {
    name: "Chapitre 5.2 - Suites réelles",
    toCours: "CH5/CH5.2-cours.pdf",
    toTD: "CH5/CH5.2-TD.pdf",
    toCorrection: "CH5/CH5.2-correctionTD.pdf",
    showCorrection: false,
    avatar: { src: "CH5/CH5.2-meme.jpg" },
    published: false,
  },
  {
    name: "Chapitre 5.1 - Suites usuelles",
    toCours: "CH5/CH5.1-cours.pdf",
    toTD: "CH5/CH5.1-TD.pdf",
    toCorrection: "CH5/CH5.1-correctionTD.pdf",
    showCorrection: false,
    avatar: { src: "CH5/CH5.1-meme.jpg" },
    published: false,
  },
  {
    name: "Chapitre 4 - Complexe",
    toCours: "CH4/CH4-cours.pdf",
    toTD: "CH4/CH4-TD.pdf",
    toCorrection: "CH4/CH4-correctionTD.pdf",
    showCorrection: false,
    avatar: { src: "CH4/CH4-meme.jpg" },
    published: false,
  },
  {
    name: "Chapitre 3 - Sommes et produits",
    toCours: "CH3/CH3-cours.pdf",
    toTD: "CH3/CH3-TD.pdf",
    toCorrection: "CH3/CH3-correctionTD.pdf",
    showCorrection: false,
    avatar: { src: "CH3/CH3-meme.jpg" },
    published: false,
  },
  {
    name: "Chapitre 2 - Trigonométrie",
    toCours: "CH2/CH2-cours.pdf",
    toTD: "CH2/CH2-TD.pdf",
    toCorrection: "CH2/CH2-correctionTD.pdf",
    showCorrection: false,
    avatar: { src: "CH2/CH2-meme.png" },
    published: false,
  },
  {
    name: "Chapitre 1 - Etude de fonctions",
    toCours: "CH1/CH1-cours.pdf",
    toTD: "CH1/CH1-TD.pdf",
    toCorrection: "",
    showCorrection: false,
    avatar: { src: "CH1/CH1-meme.jpg" },
    published: false,
  },
  {
    name: "Chapitre 0 - Résolution d'équations",
    toCours: "CH0/CH0-cours.pdf",
    toTD: "CH0/CH0-TD.pdf",
    toCorrection: "CH0/CH0-correctionTD.pdf",
    showCorrection: false,
    avatar: { src: "CH0/CH0-meme.jpg" },
    published: true,
  },
];

var items: any[] = [];
for (let x of allItems) {
  if (x.published) {
    items.push(x);
  }
}
</script>
