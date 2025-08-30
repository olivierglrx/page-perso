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
  /*   {
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
  }, */
];
</script>
