<template>
  <Titleheader title="Devoirs" />
  <UButton label="Connectez-vous" @click="isOpen2 = true" />

  <UModal v-model="isOpen2">
    <div class="p-4">
      <label> Connectez vous pour accéder aux notes</label>
      <UInput v-model="pass" />
      <UButton
        class="bg-blue-500 hover:bg-blue-600 dark:bg-blue-500"
        size="sm"
        @click="validate(pass)"
        >OK</UButton
      >
      <p>{{ message }}</p>
    </div>
  </UModal>

  <div class="md:flex flex-wrap h-screen mx-10">
    <ul class="md:w-1/2 w-11/12">
      <h2
        class="mt-2 mb-4 text-1xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-2xl dark:text-white"
      >
        Interro
      </h2>
      <li v-for="item in InterroItems" class="">
        <DevoirsCard
          v-if="item.published && Date.parse(item.dateSujet) < today"
          :name="item.titre"
          :date="item.date"
          :dateCorrection="item.dateCorrection"
          :dateSujet="item.dateSujet"
          :dateNote="item.dateNote"
          :notes="item.notes"
          :keywords="item.keywords"
          :to="item.sujet.includes('public') ? item.sujet.slice(8) : item.sujet"
          :correction="
            item.correction && item.correction.includes('public')
              ? item.correction.slice(8)
              : item.correction
          "
        >
        </DevoirsCard>
      </li>
    </ul>
    <ul class="md:w-1/2 w-11/12">
      <h2
        class="mt-2 mb-4 text-1xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-2xl dark:text-white"
      >
        DS
      </h2>
      <li v-for="item in DSItems" class="">
        <DevoirsCard
          v-if="item.published && Date.parse(item.dateSujet) < today"
          :name="item.titre"
          :date="item.date"
          :dateCorrection="item.dateCorrection"
          :dateSujet="item.dateSujet"
          :dateNote="item.dateNote"
          :notes="item.notes"
          :keywords="item.keywords"
          :to="item.sujet.includes('public') ? item.sujet.slice(8) : item.sujet"
          :correction="
            item.correction && item.correction.includes('public')
              ? item.correction.slice(8)
              : item.correction
          "
        >
        </DevoirsCard>
      </li>
    </ul>
  </div>
</template>

<script setup>
const today = Date.now();
const InterroItems = ref([]);
const DSItems = ref([]);
onMounted(async () => {
  // Fetch seminar items from content folder using Nuxt Content
  // const { data }  = await useAsyncData('seminar', () => queryContent('/events').find())
  const interro = await queryContent("/devoirs")
    .where({ type: "interro" })
    .find();

  InterroItems.value = sortChapters(interro).reverse();
  const DS = await queryContent("/devoirs").where({ type: "DS" }).find();

  DSItems.value = sortChapters(DS).reverse();
  console.log(DSItems.value);
  // You can also fetch other items if you add content for them in the future
});

// function sortChapters(arr) {
//   return arr.sort((a, b) => {
//     // Extract the number from the 'name' field, allowing for decimals
//     const numA = parseFloat(a.titre.replace(/[^\d.]/g, ""));
//     const numB = parseFloat(b.titre.replace(/[^\d.]/g, ""));

//     return numA - numB;
//   });
// }

function sortChapters(arr) {
  return arr.sort((a, b) => {
    // Sort by date first
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    if (dateA - dateB !== 0) {
      return dateA - dateB;
    }

    // Extract the number from the 'name' field, allowing for decimals
    const numA = parseFloat(a.titre.replace(/[^\d.]/g, ""));
    const numB = parseFloat(b.titre.replace(/[^\d.]/g, ""));

    return numA - numB;
  });
}

const DS = [
  {
    name: "Info",
    to: "devoirs/informatique2.pdf",
    toNotes: "devoirs/NOTES 1BIOA - DS5.pdf",
    showCorrection: "devoirs/informatique2-cor.pdf",
    date: "",
    keywords: ["chaine de caractères", "liste"],
  },
  {
    name: "DS5",
    to: "devoirs/DS5-V3.pdf",
    toNotes: "devoirs/NOTES 1BIOA - DS5.pdf",
    showCorrection: "devoirs/DS5-cor.pdf",
    date: "",
    keywords: ["matrices", "continuite", "denombrement"],
  },
  {
    name: "DS4",
    to: "devoirs/DS4.pdf",
    toNotes: "devoirs/NOTES 1BIOA - DS4.pdf",
    showCorrection: "devoirs/DS4-correction.pdf",
    date: "",
    keywords: ["EDL", "géométrie", "vocabulaire des fonctions"],
  },
  {
    name: "DS3",
    to: "devoirs/DS3.pdf",
    toNotes: "devoirs/NOTES 1BIOA - DS3.pdf",
    showCorrection: "devoirs/DS3-correction.pdf",
    date: "",
    keywords: ["complexes", "sommes", "suites usuelles"],
  },
  {
    name: "DS2",
    to: "devoirs/DS2.pdf",
    toNotes: "devoirs/NOTES 1BIOA - DS2.pdf",
    showCorrection: "devoirs/DS2-cor.pdf",
    date: "",
    keywords: ["trigonométrie", "sommes", "récurrences"],
  },
  {
    name: "DS1",
    to: "devoirs/DS1.pdf",
    toNotes: "devoirs/NOTES 1BIOA - DS1.pdf",
    showCorrection: "devoirs/DS1-cor.pdf",
    keywords: ["equations", "fonctions", "quantificateurs"],
  },
];

const Interro = [
  {
    name: "Interro15 ",
    to: "devoirs/Interro15.pdf",
    toNotes: "",
    showCorrection: "devoirs/cor-int15.pdf",
    keywords: ["continuité"],
  },
  {
    name: "Interro13 - info",
    to: "devoirs/Interro13.pdf",
    toNotes: "devoirs/NOTES 1BIOA - Feuille 14.pdf",
    showCorrection: "devoirs/int12-cor.pdf",
    keywords: ["Informatique", "dénombrement"],
  },

  {
    name: "Interro11",
    to: "devoirs/Interro11.pdf",
    toNotes: "devoirs/NOTES 1BIOA - Feuille 14.pdf",
    showCorrection: false,
    keywords: ["géométrie"],
  },

  {
    name: "Interro10",
    to: "devoirs/Interro10.pdf",
    toNotes: "",
    showCorrection: false,
    keywords: ["vocabulaires des applications, EDL"],
  },
  {
    name: "Interro9",
    to: "devoirs/Interro9.pdf",
    toNotes: "devoirs/NOTES 1BIOA - Feuille 12.pdf",
    showCorrection: false,
    keywords: ["système linéaire"],
  },
  {
    name: "Interro8",
    to: "devoirs/Interro8.pdf",
    toNotes: "",
    showCorrection: false,
    keywords: ["suites réelles"],
  },
  {
    name: "Interro7",
    to: "devoirs/Interro7.pdf",
    toNotes: "devoirs/NOTES 1BIOA - interro7.pdf",
    showCorrection: false,
    keywords: ["Complexes", "suites usuelles"],
  },
  {
    name: "Interro6",
    to: "devoirs/Interro6.pdf",
    toNotes: "",
    showCorrection: false,
    keywords: ["Complexes", "fonctions"],
  },
  {
    name: "Interro5",
    to: "devoirs/Interro5.pdf",
    toNotes: "",
    showCorrection: false,
    keywords: ["Sommes", "fonctions"],
  },
  {
    name: "Interro4",
    to: "devoirs/Interro4.pdf",
    toNotes: "",
    showCorrection: false,
    keywords: ["trigonométrie", "fonctions"],
  },
  {
    name: "Interro3",
    to: "devoirs/Interro3.pdf",
    toNotes: "devoirs/NOTES 1BIOA - interro.pdf",
    showCorrection: false,
    keywords: ["composition", "fonctions"],
  },
  {
    name: "Interro2",
    to: "devoirs/Interro2.pdf",
    toNotes: "",
    showCorrection: false,
    keywords: ["equations", "quantificateurs"],
  },
  {
    name: "Interro1",
    to: "devoirs/Interro1.pdf",
    toNotes: "",
    showCorrection: false,
    keywords: ["equations"],
  },
  {
    name: "Test Rentrée",
    to: "devoirs/rentree.pdf",
    toNotes: "",
    showCorrection: false,
    keywords: [""],
  },
];

import { useLogginStore } from "@/stores/loggin";
const isOpen = ref(false);
const isOpen2 = ref(false);
const pass = ref("");
const store = useLogginStore();
const message = ref("");

function validate(pass) {
  if (pass == "Chaptal2024") {
    isOpen2.value = !isOpen2.value;
    store.logged = true;
  } else {
    message.value = "Mauvais mot de passe";
  }
}
</script>
