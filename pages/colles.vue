<template>
  <Titleheader title="Colles" />
  <div class="flex h-screen mx-10">
    <ul class="">
      <li v-for="item in programmes" class="">
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

const programmes = [ {
    name: "Semaine 10 ",
    to: "../Colles/Semaine11.pdf",
    date: "09/12",
    keywords: ["EDL1", "géométrie"],
    published: new Date("2024-11-20"),
  }, {
    name: "Semaine 10 ",
    to: "../Colles/Semaine10.pdf",
    date: "02/12",
    keywords: ["Systèmes linéaires", "vocabulaires des applications", "EDL1"],
    published: new Date("2024-11-20"),
  },
  {
    name: "Semaine 9 ",
    to: "../Colles/Semaine9.pdf",
    date: "20/11",
    keywords: ["suites réelles", "Systèmes linéaires"],
    published: new Date("2024-11-20"),
  },
  {
    name: "Semaine 8 ",
    to: "../Colles/Semaine8.pdf",
    date: "20/11",
    keywords: ["suites réelles"],
    published: new Date("2024-11-14"),
  },
  {
    name: "Semaine 7 ",
    to: "../Colles/Semaine7.pdf",
    date: "28/10",
    keywords: ["suites réelles"],
    published: new Date("2024-11-07"),
  },
  {
    name: "Semaine 6 ",
    to: "../Colles/Semaine6.pdf",
    date: "07/11",
    keywords: ["Sommes", "Complexes", "suites réelles"],
    published: new Date("2024-10-20"),
  },

  {
    name: "Semaine 5 ",
    to: "../Colles/Semaine5.pdf",
    date: "14/10",
    keywords: ["Sommes", "Complexes"],
    published: new Date("2024-10-10"),
  },

  {
    name: "Semaine 4 ",
    to: "../Colles/semaine4.pdf",
    date: "07/10",
    keywords: ["trigonometrie", "Sommes"],
    published: new Date("2024-10-03"),
  },
  {
    name: "Semaine 3 ",
    to: "../Colles/Semaine3.pdf",
    date: "30/09",
    keywords: ["equations", "trigonometrie", "fonctions"],
    published: new Date("2024-09-26"),
  },

  {
    name: "Semaine 2 ",
    to: "../Colles/Semaine2.pdf",
    date: "23/09",
    keywords: ["logique", "quantificateurs", "equations", "calculs"],
    published: new Date("2024-09-19"),
  },
  {
    name: "Semaine 1 ",
    to: "../Colles/Semaine1.pdf",
    date: "16/09",
    keywords: ["logique", "quantificateurs", "equations", "calculs"],
    published: new Date("2024-09-16"),
  },
];
</script>
