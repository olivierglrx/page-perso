<template>
  <Titleheader title="Colles" />
  <!-- <pre>{{seminarItems}}</pre> -->

  <div class="flex h-screen mx-10">
    <ul class="">
      <li v-for="item in seminarItems" class="">
        <div
          v-if="
            item.publishing_date && new Date(item.publishing_date) <= new Date()
          "
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
</script>
