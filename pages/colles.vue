<template>
  <Titleheader title="Colles" />
  <!-- <pre>{{seminarItems}}</pre> -->

  <div class="flex h-screen mx-10">
    <ul class="">
      <li v-for="item in seminarItems" class="">
        <div
          v-if="item.published"
          class="dark:bg-gray-700 m-3 shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform"
        >
          <Icon name="mdi:file-document" color="black dark:white" /><nuxt-link
            :to="
              item.sujet.includes('public') ? item.sujet.slice(8) : item.sujet
            "
            external
            class="text-blue-600 font-semibold"
            >{{ item.titre }}
          </nuxt-link>

          {{ item.date.split("-")[2] + "/" + item.date.split("-")[1] }}
          <div>
            <span v-for="key in item.keywords.split(';')">
              {{ key + ", " }}</span
            >
          </div>
        </div>
      </li>
    </ul>
  </div>

  <!-- 
  
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
    </div> -->
</template>
<script setup>
const seminarItems = ref([]);
onMounted(async () => {
  // Fetch seminar items from content folder using Nuxt Content
  // const { data }  = await useAsyncData('seminar', () => queryContent('/events').find())
  const seminars = await queryContent("/colles").sort({ date: 1 }).find();

  seminarItems.value = seminars.reverse();
  console.log(seminarItems);
  // You can also fetch other items if you add content for them in the future
});
const time = new Date();

const programmes = [
  {
    name: "Semaine 19",
    to: "../Colles/Semaine19.pdf",
    date: "03/03",
    keywords: ["Polynômes", "Probabilités"],
    published: new Date("2024-11-20"),
  },
  {
    name: "Semaine 18",
    to: "../Colles/Semaine18.pdf",
    date: "10/02",
    keywords: ["dérivabilité", "Polynômes"],
    published: new Date("2024-11-20"),
  },
  {
    name: "Semaine 17",
    to: "../Colles/Semaine17.pdf",
    date: "3/02",
    keywords: ["dérivabilité", "Polynômes"],
    published: new Date("2024-11-20"),
  },
  {
    name: "Semaine 16 ",
    to: "../Colles/Semaine16.pdf",
    date: "27/01",
    keywords: ["continuite", "dérivabilité"],
    published: new Date("2024-11-20"),
  },
  {
    name: "Semaine 15 ",
    to: "../Colles/Semaine15.pdf",
    date: "20/01",
    keywords: ["matrices", "continuite"],
    published: new Date("2024-11-20"),
  },
  {
    name: "Semaine 14 ",
    to: "../Colles/Semaine14.pdf",
    date: "13/01",
    keywords: ["matrices", "Dénombrement"],
    published: new Date("2024-11-20"),
  },
  {
    name: "Semaine 13 ",
    to: "../Colles/Semaine13.pdf",
    date: "06/01",
    keywords: ["Dénombrement", "géométrie"],
    published: new Date("2024-11-20"),
  },
  {
    name: "Semaine 12 ",
    to: "../Colles/Semaine12.pdf",
    date: "16/12",
    keywords: ["EDL1", "géométrie"],
    published: new Date("2024-11-20"),
  },
  {
    name: "Semaine 11 ",
    to: "../Colles/Semaine11.pdf",
    date: "09/12",
    keywords: ["EDL1", "géométrie"],
    published: new Date("2024-11-20"),
  },
  {
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
