<template>
  <Hero />


  <section id="cours">

    <Titleheader title="Cours" />
    <div class="w-full max-w-7xl mx-auto">
      <UCarousel v-slot="{ item, index }" :items="chapitresItems" :ui="{ item: 'basis-full md:basis-1/2 lg:basis-1/4' }"
        class="rounded-lg overflow-hidden p-4" loop arrows dots :autoplay="{ delay: 2000 }">

        <div class="text-center mx-auto px-2">
          <div class="mt-1 mb-5">
            <h2 class="text-xl text-center font-bold truncate">{{ item.name }}</h2>
          </div>
          <img :src="item.image.includes('public') ? item.image.slice(8) : item.image
            " :alt="item.name" class="h-64 object-cover mx-auto rounded-lg shadow-md" draggable="false" />
          <div class="mt-4 mb-10 flex justify-center gap-2 flex-wrap">
            <UButton v-if="item.cours && typeof item.cours === 'string'" :to="item.cours.includes('public') ? item.cours.slice(8) : item.cours
              " target="_blank" color="gray" variant="soft" size="sm" icon="i-heroicons-book-open">
              Cours
            </UButton>
            <UButton v-if="item.TD && typeof item.TD === 'string'"
              :to="item.TD.includes('public') ? item.TD.slice(8) : item.TD" target="_blank" color="gray" variant="soft"
              size="sm" icon="i-heroicons-pencil-square">
              TD
            </UButton>

            <UButton v-if="item.TDcor && typeof item.TDcor === 'string'" :to="item.TDcor.includes('public') ? item.TDcor.slice(8) : item.TDcor
              " target="_blank" color="gray" variant="soft" size="sm" icon="i-heroicons-check-circle">
              Correction
            </UButton>

            <UButton v-if="item.Autre" :to="item.Autre.includes('public') ? item.Autre.slice(8) : item.Autre
              " target="_blank" color="gray" variant="soft" size="sm" icon="i-heroicons-link">
              {{ item.AutreLabel ? item.AutreLabel : "Autre" }}
            </UButton>
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
  const { getItems } = useDirectus();
  const { data: chapitres } = await getItems("chapitres", {
    filter: { published: { _eq: true } },
    limit: -1,
    sort: "name",
  });
  // console.log("chapitres", chapitres);
  chapitresItems.value = sortChapters(chapitres).reverse();
  // console.log("index", chapitresItems.value);
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
