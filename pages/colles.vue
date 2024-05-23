<template>
  <Titleheader title="Colles" />
  <div class="flex h-screen mx-10">
    <ul class="">
      <li v-for="item in programmes" class="">
        <div
          v-if="item.published"
          class="shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform"
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
const programmes = [
  {
    name: "Semaine 7 ",
    to: "../Colles/Semaine5.pdf",
    date: "28/10",
    keywords: ["logique", "quantificateurs", "equations", "calculs"],
    published: false,
  },
  {
    name: "Semaine 6 ",
    to: "../Colles/Semaine5.pdf",
    date: "21/10",
    keywords: ["logique", "quantificateurs", "equations", "calculs"],
    published: false,
  },

  {
    name: "Semaine 5 ",
    to: "../Colles/Semaine5.pdf",
    date: "14/10",
    keywords: ["logique", "quantificateurs", "equations", "calculs"],
    published: false,
  },

  {
    name: "Semaine 4 ",
    to: "../Colles/Semaine4.pdf",
    date: "07/10",
    keywords: ["logique", "quantificateurs", "equations", "calculs"],
    published: false,
  },
  {
    name: "Semaine 3 ",
    to: "../Colles/Semaine3.pdf",
    date: "30/09",
    keywords: ["logique", "quantificateurs", "equations", "calculs"],
    published: false,
  },
  {
    name: "Semaine 2 ",
    to: "../Colles/Semaine2.pdf",
    date: "23/09",
    keywords: ["logique", "quantificateurs", "equations", "calculs"],
    published: false,
  },
  {
    name: "Semaine 1 ",
    to: "../Colles/Semaine1.pdf",
    date: "16/09",
    keywords: ["logique", "quantificateurs", "equations", "calculs"],
    published: true,
  },
];
</script>
