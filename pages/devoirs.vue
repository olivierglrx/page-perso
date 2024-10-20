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
      <li v-for="item in Interro" class="">
        <div
          class="dark:bg-gray-700 m-3 shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform"
        >
          <div class="flex justify-between">
            <div>
              <Icon
                name="mdi:file-document"
                color="black dark:white"
              /><nuxt-link
                :to="item.to"
                external
                class="text-blue-600 font-semibold"
                >{{ item.name }}
              </nuxt-link>
              {{ item.date }}
            </div>
            <div v-if="item.showCorrection">
              <Icon
                name="mdi:file-document"
                color="black dark:white"
              /><nuxt-link
                :to="item.to"
                external
                class="text-blue-600 font-semibold"
                >Correction
              </nuxt-link>
              {{ item.date }}
            </div>

            <p v-if="!item.toNotes">Notes à venir</p>
            <div v-else>
              <div v-if="store.logged">
                <Icon
                  name="mdi:file-document"
                  color="black dark:white"
                /><nuxt-link
                  :to="item.toNotes"
                  external
                  class="text-blue-600 font-semibold"
                  >Notes
                </nuxt-link>
              </div>
              <p v-else>Connectez-vous</p>
            </div>
          </div>
          <div>
            <span v-for="key in item.keywords.slice(0, -1)">
              {{ key + ", " }}</span
            >
            <span> {{ item.keywords.slice(-1)[0] }}.</span>
          </div>
        </div>
      </li>
    </ul>

    <ul class="md:w-1/2 w-11/12">
      <h2
        class="mt-2 mb-4 text-1xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-2xl dark:text-white"
      >
        DS
      </h2>
      <li v-for="item in DS" class="">
        <div
          class="dark:bg-gray-700 m-3 shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform"
        >
          <div class="flex justify-between">
            <div>
              <Icon
                name="mdi:file-document"
                color="black dark:white"
              /><nuxt-link
                :to="item.to"
                external
                class="text-blue-600 font-semibold"
                >{{ item.name }}
              </nuxt-link>
              {{ item.date }}
            </div>
            <div v-if="item.showCorrection">
              <Icon
                name="mdi:file-document"
                color="black dark:white"
              /><nuxt-link
                :to="item.showCorrection"
                external
                class="text-blue-600 font-semibold"
                >Correction
              </nuxt-link>
              {{ item.date }}
            </div>

            <p v-if="!item.toNotes">Notes à venir</p>
            <div v-else>
              <div v-if="store.logged">
                <Icon
                  name="mdi:file-document"
                  color="black dark:white"
                /><nuxt-link
                  :to="item.toNotes"
                  external
                  class="text-blue-600 font-semibold"
                  >Notes
                </nuxt-link>
              </div>
              <p v-else>Connectez-vous</p>
            </div>
          </div>
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
const DS = [
  {
    name: "DS2",
    to: "devoirs/DS2.pdf",
    toNotes: "",
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
