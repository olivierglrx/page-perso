<template>
  <div
    class="dark:bg-gray-700 m-3 shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform"
  >
    <div class="flex justify-between">
      <div>
        <Icon name="mdi:file-document" color="black dark:white" /><nuxt-link
          :to="date + '/' + name + '.pdf'"
          external
          class="text-blue-600 font-semibold"
          >{{ name }}
        </nuxt-link>
      </div>
      <div>
        <Icon name="mdi:file-document" color="black dark:white" /><nuxt-link
          :to="date + '/' + name + '-cor.pdf'"
          external
          class="text-blue-600 font-semibold"
          >Correction
        </nuxt-link>
      </div>
    </div>
    <div>
      <span v-for="key in keywords.slice(0, -1)"> {{ key + ", " }}</span>
      <span> {{ keywords.slice(-1)[0] }}.</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  keywords: Object,
  date: String,
});
</script>
