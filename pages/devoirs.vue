<template>
  <Titleheader title="Devoirs" />

  <div class="flex h-screen mx-10">
    <ul class="md:w-1/2 w-11/12">
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
            <div v-if="store.logged">
              <p v-if="item.toNotes">
                <Icon
                  name="mdi:file-document"
                  color="black dark:white"
                /><nuxt-link
                  :to="item.toNotes"
                  external
                  class="text-blue-600 font-semibold"
                  >Notes
                </nuxt-link>
              </p>
              <p v-else>Notes à venir</p>
            </div>
            <div v-else>
              <button
                label="Open"
                @click="isOpen = true"
                class="text-blue-600 font-semibold"
              >
                Notes
              </button>

              <UModal v-model="isOpen">
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
    to: "/2023/DS2.pdf",
    toNotes: "",
    showCorrection: true,
    date: "",
    keywords: ["sommes"],
  },
  {
    name: "DS1",
    to: "2023/DS1.pdf",
    toNotes: "",
    showCorrection: true,
    keywords: ["equations", "fonctions"],
  },
];

const Interro = [
  {
    name: "Interro2",
    to: "devoirs/2023/DS2.pdf",
    toNotes: "",
    showCorrection: true,
    keywords: [""],
  },
  {
    name: "Interro1",
    to: "devoirs2023/DS1.pdf",
    toNotes: "",
    showCorrection: true,
    keywords: [""],
  },
];

import { useLogginStore } from "@/stores/loggin";
const isOpen = ref(false);
const pass = ref("");
const store = useLogginStore();
const message = ref("");

function validate(pass) {
  if (pass == "Chaptal2024") {
    isOpen.value = !isOpen.value;
    store.logged = true;
  } else {
    message.value = "Mauvais mot de passe";
  }
}
</script>
