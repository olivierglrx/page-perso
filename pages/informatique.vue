<template>
  <Titleheader title="Informatique" />
  <div class="flex h-screen mx-10">
    <ul class="">
      <li v-for="item in chapitresItems" class="">
        <div
          v-if="item.published"
          class="dark:bg-gray-700 m-3 shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform"
        >
          <div class="flex justify-between w-full">
            <!-- Left group -->
            <div class="flex items-center space-x-2">
              <Icon name="mdi:file-document" color="black dark:white" />
              <nuxt-link
                :to="item.sujet"
                external
                class="text-blue-600 font-semibold"
              >
                {{ item.titre }}
              </nuxt-link>
            </div>

            <!-- Right group -->
            <div class="flex items-center space-x-2" v-if="item.correction">
              <Icon name="mdi:file-document" color="black dark:white" />
              <nuxt-link
                :to="item.correction"
                external
                class="text-blue-600 font-semibold"
              >
                Correction
              </nuxt-link>
            </div>
          </div>

          <div>
            <span v-for="key in item.keywords.split(',').slice(0, -1)">
              {{ key + ", " }}</span
            >
            <span> {{ item.keywords.split(",").slice(-1)[0] }}.</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
const chapitresItems = ref([]);
onMounted(async () => {
  const chapitres = await queryContent("/informatique")
    .sort({ date: 1 })
    .find();
  chapitresItems.value = chapitres.reverse();
});
</script>
