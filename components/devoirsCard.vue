<template>
  <div>
    <div
      class="dark:bg-gray-700 m-3 shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform"
    >
      <div class="flex justify-between">
        <div>
          <Icon name="mdi:file-document" color="black dark:white" /><nuxt-link
            :to="to"
            external
            class="text-blue-600 font-semibold"
            >{{ name }}
          </nuxt-link>
        </div>

        <div v-if="Date.parse(dateCorrection) < today && correction">
          <Icon name="mdi:file-document" color="black dark:white" /><nuxt-link
            :to="correction"
            external
            class="text-blue-600 font-semibold"
            >Correction
          </nuxt-link>
        </div>

        <p v-if="!notes || Date.parse(dateNote) > today">Notes à venir</p>
        <div v-else>
          <div>
            <Icon name="mdi:file-document" color="black dark:white" /><nuxt-link
              :to="notes"
              external
              class="text-blue-600 font-semibold"
              >Notes
            </nuxt-link>
          </div>
        </div>
      </div>
      <div v-if="keywords">
        <span v-for="key in keywords.split(';').slice(0, -1)">
          {{ key + ", " }}</span
        >
        <span> {{ keywords.split(";").slice(-1)[0] }}.</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  keywords: String,
  date: String,
  dateCorrection: String,
  dateSujet: String,
  dateNote: String,
  notes: String,
  to: String,
  correction: String,
});
const today = Date.now();

import { useLogginStore } from "@/stores/loggin";

const store = useLogginStore();
</script>
