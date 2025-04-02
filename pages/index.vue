<template>
  <Hero />
  <section id="cours">
    <Titleheader title="Cours" />

    <div class="md:w-9/12 mx-auto">
      <UCarousel
        v-slot="{ item, index }"
        :items="chapitresItems"
        :ui="{ item: 'basis-full' }"
        class="rounded-lg overflow-hidden p-10"
        arrows
      >
        <div class="text-center mx-auto">
          <div class="mt-1 mb-5">
            <h2 class="text-xl text-center font-bold">{{ item.name }}</h2>
          </div>
          <img
            :src="
              item.image.includes('public') ? item.image.slice(8) : item.image
            "
            :alt="item.name"
            class="h-72 md:h-96 mx-auto"
            draggable="false"
            arrows
          />
          <div class="mt-1 mb-10 flex justify-evenly">
            <NuxtLink
              v-if="item.cours"
              :to="
                item.cours.includes('public') ? item.cours.slice(8) : item.cours
              "
              external
              class=""
            >
              Cours
            </NuxtLink>
            <NuxtLink
              v-if="item.TD"
              :to="item.TD.includes('public') ? item.TD.slice(8) : item.TD"
              external
              class=""
            >
              TD
            </NuxtLink>
            <NuxtLink
              v-if="item.TDcor"
              :to="
                item.TDcor.includes('public') ? item.TDcor.slice(8) : item.TDcor
              "
              external
            >
              Correction</NuxtLink
            >
          </div>
        </div>
      </UCarousel>
    </div>
  </section>
</template>
<style scoped></style>

<script setup>
const chapitresItems = ref([]);
onMounted(async () => {
  // Fetch seminar items from content folder using Nuxt Content
  // const { data }  = await useAsyncData('seminar', () => queryContent('/events').find())
  const chapitres = await queryContent("/chapitres")
    .where({ published: true })
    .sort("name")
    .find();

  chapitresItems.value = sortChapters(chapitres).reverse();
  console.log(chapitresItems);
  // You can also fetch other items if you add content for them in the future
});

function sortChapters(arr) {
  return arr.sort((a, b) => {
    // Extract the number from the 'name' field, allowing for decimals
    const numA = parseFloat(a.name.replace(/[^\d.]+/g, ""));
    const numB = parseFloat(b.name.replace(/[^\d.]+/g, ""));

    return numA - numB;
  });
}

const allItems = [
  {
    name: "Chapitre 15 - Probabilité",
    toCours: "CH15/cours.pdf",
    toTD: "CH15/td.pdf",
    toCorrection: "CH15/td-cor.pdf",
    showCorrection: true,
    avatar: { src: "CH15/meme15.jpg" },
    published: true,
  },
  {
    name: "Chapitre 14 - Polynomes",
    toCours: "CH14/cours.pdf",
    toTD: "CH14/td-long.pdf",
    toCorrection: "CH14/td-long-cor.pdf",
    showCorrection: true,
    avatar: { src: "CH14/meme14.jpg" },
    published: true,
  },
  {
    name: "Chapitre 13 - Dérivation",
    toCours: "CH13/ch13.pdf",
    toTD: "CH13/td13.pdf",
    toCorrection: "CH13/cortd13.pdf",
    showCorrection: true,
    avatar: { src: "CH13/mem13.png" },
    published: true,
  },
  {
    name: "Chapitre 12 - Continuité",
    toCours: "CH12/cours.pdf",
    toTD: "CH12/td12.pdf",
    toCorrection: "CH12/cortd12.pdf",
    showCorrection: true,
    avatar: { src: "CH12/meme.png" },
    published: true,
  },
  {
    name: "Chapitre 11 - Matrices",
    toCours: "CH11/cours.pdf",
    toTD: "CH11/TD.pdf",
    toCorrection: "CH11/TD-cor.pdf",
    showCorrection: true,
    avatar: { src: "CH11/meme11.jpg" },
    published: true,
  },
  {
    name: "Chapitre 10 - Dénombrement",
    toCours: "CH10/cours.pdf",
    toTD: "CH10/TD.pdf",
    toCorrection: "CH10/TD-cor.pdf",
    showCorrection: true,
    avatar: { src: "CH10/meme10.jpg" },
    published: true,
  },
  {
    name: "Chapitre 9 - Géométrie",
    toCours: "CH9/cours.pdf",
    toTD: "CH9/TD.pdf",
    toCorrection: "CH9/TD-cor.pdf",
    showCorrection: true,
    avatar: { src: "CH9/meme.png" },
    published: true,
  },
  {
    name: "Chapitre 8 - Equations différentielles à coefficients constants",
    toCours: "CH8/cours.pdf",
    toTD: "CH8/TD.pdf",
    toCorrection: "CH8/TD-cor.pdf",
    showCorrection: true,
    avatar: { src: "CH8/mem8.jpg" },
    published: true,
  },
  {
    name: "Chapitre 7 - Vocabulaires des applications",
    toCours: "CH7/CH7-cours.pdf",
    toTD: "CH7/CH7-TD.pdf",
    toCorrection: "CH7/CH7-TD-cor.pdf",
    showCorrection: true,
    avatar: { src: "CH7/7.png" },
    published: true,
  },
  {
    name: "Chapitre 6 - Systèmes linéaires",
    toCours: "CH6/CH6-cours.pdf",
    toTD: "CH6/ch6-td.pdf",
    toCorrection: "CH6/ch6-cor.pdf",
    showCorrection: true,
    avatar: { src: "CH6/6.jpg" },
    published: true,
  },
  {
    name: "Chapitre 5.3 - Suites récurrentes",
    toCours: "CH5/CH5.3-cours.pdf",
    toTD: "CH5/CH5.3-TD.pdf",
    toCorrection: "CH5/CH5.3-correctionTD.pdf",
    showCorrection: true,
    avatar: { src: "CH5/5.2.jpg" },
    published: true,
  },
  {
    name: "Chapitre 5.2 - Suites réelles",
    toCours: "CH5/CH5.2-cours.pdf",
    toTD: "CH5/CH5.2-TD.pdf",
    toCorrection: "CH5/CH5.2-correctionTD.pdf",
    showCorrection: true,
    avatar: { src: "CH5/5.1.jpg" },
    published: true,
  },
  {
    name: "Chapitre 5.1 - Suites usuelles",
    toCours: "CH5/CH5.1-cours.pdf",
    toTD: "CH5/CH5.1-TD.pdf",
    toCorrection: "CH5/CH5.1-correctionTD.pdf",
    showCorrection: true,
    avatar: { src: "CH5/5.2.jpg" },
    published: true,
  },
  {
    name: "Chapitre 4 - Complexe",
    toCours: "CH4/CH4-cours.pdf",
    toTD: "CH4/CH4-TD.pdf",
    toCorrection: "CH4/CH4-correctionTD.pdf",
    showCorrection: true,
    avatar: { src: "CH4/meme-complexe.jpg" },
    published: true,
  },
  {
    name: "Chapitre 3 - Sommes et produits",
    toCours: "CH3/CH3-cours.pdf",
    toTD: "CH3/CH3-TD.pdf",
    toCorrection: "CH3/CH3-correctionTD.pdf",
    showCorrection: true,
    avatar: { src: "CH3/meme3.jpg" },
    published: true,
  },
  {
    name: "Chapitre 2 - Trigonométrie",
    toCours: "CH2/CH2 - cours.pdf",
    toTD: "CH2/CH2-TD.pdf",
    toCorrection: "CH2/CH2-correctionTD.pdf",
    showCorrection: true,
    avatar: { src: "CH2/CH2-meme.png" },
    published: true,
  },
  {
    name: "Chapitre 1 - Etude de fonctions",
    toCours: "CH1/CH1-cours.pdf",
    toTD: "CH1/CH1-TD.pdf",
    toCorrection: "CH1/CH1-TD-cor.pdf",
    showCorrection: true,
    avatar: { src: "CH1/CH1-meme.jpg" },
    published: true,
  },
  {
    name: "Chapitre 0 - Résolution d'équations",
    toCours: "CH0/BCPST-3.pdf",
    toTD: "CH0/CH0-TD.pdf",
    toCorrection: "CH0/CH0-correctionTD.pdf",
    showCorrection: true,
    avatar: { src: "CH0/CH0-meme.jpg" },
    published: true,
  },
];

var items = Array();
for (let x of allItems) {
  if (x.published) {
    items.push(x);
  }
}
</script>
