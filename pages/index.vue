<template>
  <Hero />
  <section id="cours">
    <Titleheader title="Cours" />

    <div class="md:w-9/12 mx-auto">
      <UCarousel
        v-slot="{ item, index }"
        :items="chapitresItems"
        :ui="{ item: 'basis-full' }"
        class="rounded-lg overflow-hidden p-10"
        arrows
      >
        <div class="text-center mx-auto">
          <div class="mt-1 mb-5">
            <h2 class="text-xl text-center font-bold">{{ item.name }}</h2>
          </div>
          <img
            :src="
              item.image.includes('public') ? item.image.slice(8) : item.image
            "
            :alt="item.name"
            class="h-72 md:h-96 mx-auto"
            draggable="false"
            arrows
          />
          <div class="mt-1 mb-10 flex justify-evenly">
            <NuxtLink
              v-if="item.cours && typeof item.cours === 'string'"
              :to="
                item.cours.includes('public') ? item.cours.slice(8) : item.cours
              "
              external
            >
              Cours
            </NuxtLink>
            <NuxtLink
              v-if="item.TD && typeof item.TD === 'string'"
              :to="item.TD.includes('public') ? item.TD.slice(8) : item.TD"
              external
            >
              TD
            </NuxtLink>

            <NuxtLink
              v-if="item.TDcor && typeof item.TDcor === 'string'"
              :to="
                item.TDcor.includes('public') ? item.TDcor.slice(8) : item.TDcor
              "
              external
            >
              Correction
            </NuxtLink>

            <NuxtLink
              v-if="item.Autre"
              :to="
                item.Autre.includes('public') ? item.Autre.slice(8) : item.Autre
              "
              external
            >
              <p v-if="item.AutreLabel">
                {{ item.AutreLabel ? item.AutreLabel : "Autre" }}
              </p>
            </NuxtLink>
          </div>
        </div>
      </UCarousel>
    </div>
  </section>
</template>
<style scoped></style>

<script setup>
const chapitresItems = ref([]);

onMounted(async () => {
  // Fetch seminar items from content folder using Nuxt Content
  // const { data }  = await useAsyncData('seminar', () => queryContent('/events').find())
  const chapitres = await queryContent("/chapitres")
    .where({ published: true })
    .sort("name")
    .find();
  console.log("chapitres", chapitres);
  chapitresItems.value = sortChapters(chapitres).reverse();
  console.log("index", chapitresItems.value);
  // You can also fetch other items if you add content for them in the future
});

function sortChapters(arr) {
  return arr.sort((a, b) => {
    // Extract the number from the 'name' field, allowing for decimals
    const numA = parseFloat(a.name.replace(/[^\d.]+/g, ""));
    const numB = parseFloat(b.name.replace(/[^\d.]+/g, ""));

    return numA - numB;
  });
}
</script>
