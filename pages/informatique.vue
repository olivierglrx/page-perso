<template>
  <Titleheader title="Informatique" />
  <div class="flex h-screen mx-10">
    <ul class="">
      <li v-for="item in poly" class="">
        <div
          v-if="item.published < time"
          class="dark:bg-gray-700 m-3 shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform"
        >
          <Icon name="mdi:file-document" color="black dark:white" /><nuxt-link
            :to="item.to"
            external
            class="text-blue-600 font-semibold"
            >{{ item.name }}
          </nuxt-link>
          {{ item.date }}
          <div>
            <span v-for="key in item.keywords.slice(0, -1)">
              {{ key + ", " }}</span
            >
            <span> {{ item.keywords.slice(-1)[0] }}.</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
const time = new Date();

const poly = [
  {
    name: "Semaine 7 ",
    to: "../Colles/Semaine5.pdf",
    date: "28/10",
    keywords: ["logique", "quantificateurs", "equations", "calculs"],
    published: new Date("2025-10-20"),
  },
  {
    name: "Semaine 6 ",
    to: "../Colles/Semaine5.pdf",
    date: "21/10",
    keywords: ["logique", "quantificateurs", "equations", "calculs"],
    published: new Date("2025-11-20"),
  },

  {
    name: "Semaine 5 ",
    to: "../Informatique/Semaine5.pdf",
    date: "14/10",
    keywords: ["logique", "quantificateurs", "equations", "calculs"],
    published: new Date("2025-10-20"),
  },

  {
    name: "Semaine 4 ",
    to: "../Informatique/Semaine4.pdf",
    date: "07/10",
    keywords: ["logique", "quantificateurs", "equations", "calculs"],
    published: new Date("2025-10-20"),
  },
  {
    name: "TP 2 ",
    to: "../Informatique/TP 2 Boucles for et while.pdf",

    keywords: ["Boucle", "for", "while"],
    published: new Date("2024-09-26"),
  },

  {
    name: "TP1",
    to: "../Informatique/TP 1 Variables, fonctions et instructions conditionnelles.pdf",
    keywords: ["Variables", "fonctions", "instructions conditionnelles"],
    published: new Date("2024-09-19"),
  },
  {
    name: "Mise en route ",
    to: "../Informatique/Chap 1 Mise en route.pdf",
    keywords: ["Variables", "fonctions", "conditions"],
    published: new Date("2024-09-16"),
  },
];
</script>
