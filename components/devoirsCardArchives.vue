<template>
  <div class="flex justify-between w-80">
    <div>
      <Icon name="mdi:file-document" color="black dark:white" /><nuxt-link
        :to="sujet"
        external
        class="text-blue-600 font-semibold"
        >{{ name }}
      </nuxt-link>
    </div>
    <div>
      <Icon name="mdi:file-document" color="black dark:white" /><nuxt-link
        :to="correction"
        external
        class="text-blue-600 font-semibold"
        >Correction
      </nuxt-link>
    </div>
  </div>
  <div>
    <span v-for="key in keywords"> {{ key + ", " }}</span>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  sujet: String,
  correction: String,
  keywords: Object,
});
</script>
