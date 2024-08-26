<template>
  <div
    class="block m-4 px-2 py-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <h3 class="p-4 md:uppercase">{{ title }} ({{ date }})</h3>

    <div class="sm:w-5/6 p-4">
      <span v-for="(author, index) in authors" class="italic">{{
        index < authors.length - 1 ? author + ", " : author + "."
      }}</span>
      <a class="mx-5" :href="articleURL">
        <UButton color="white" class="hover:bg-gray-100"
          >Arxiv <Icon name="bi:file-earmark-pdf"> </Icon>
        </UButton>
      </a>
    </div>
    <div class="sm:flex">
      <div class="align-baseline">
        <img :src="imageURL" class="w-3/4" />
      </div>
      <div class="md:w-5/6 p-4">
        {{ abstract }}
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  authors: [Boolean, Array],
  imageURL: String,
  abstract: String,
  articleURL: String,
  date: String,
});
</script>
<style scoped>
.fit {
  width: "fit-content";
}
</style>
