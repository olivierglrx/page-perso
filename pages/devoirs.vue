<template>
  <Titleheader title="Devoirs" />

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
      <li v-for="item in InterroItems" class="">
        <DevoirsCard
          v-if="item.published && Date.parse(item.dateSujet) < today"
          :name="item.titre"
          :date="item.date"
          :dateCorrection="item.dateCorrection"
          :dateSujet="item.dateSujet"
          :dateNote="item.dateNote"
          :notes="item.notes"
          :keywords="item.keywords"
          :to="item.sujet.includes('public') ? item.sujet.slice(8) : item.sujet"
          :correction="
            item.correction && item.correction.includes('public')
              ? item.correction.slice(8)
              : item.correction
          "
        >
        </DevoirsCard>
      </li>
    </ul>
    <ul class="md:w-1/2 w-11/12">
      <h2
        class="mt-2 mb-4 text-1xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-2xl dark:text-white"
      >
        DS
      </h2>
      <li v-for="item in DSItems" class="">
        <DevoirsCard
          v-if="
            item.published &&
            Date.parse(item.dateSujet) < today &&
            Date.parse(item.dateSujet) > Date.parse('2025-09-01')
          "
          :name="item.titre"
          :date="item.date"
          :dateCorrection="item.dateCorrection"
          :dateSujet="item.dateSujet"
          :dateNote="item.dateNote"
          :notes="item.notes"
          :keywords="item.keywords"
          :to="item.sujet.includes('public') ? item.sujet.slice(8) : item.sujet"
          :correction="
            item.correction && item.correction.includes('public')
              ? item.correction.slice(8)
              : item.correction
          "
        >
        </DevoirsCard>
      </li>
    </ul>
  </div>
</template>

<script setup>
const today = new Date();
const InterroItems = ref([]);
const DSItems = ref([]);
onMounted(async () => {
  const interro = await queryContent("/devoirs")
    .where({ type: "interro", date: { $gte: "2025-09-01" } })
    .find();
  console.log("interro", interro);

  InterroItems.value = sortChapters(interro).reverse();
  const DS = await queryContent("/devoirs").where({ type: "DS" }).find();
  console.log(DS);
  DSItems.value = sortChapters(DS).reverse();
});

function sortChapters(arr) {
  return arr.sort((a, b) => {
    // Sort by date first
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    if (dateA - dateB !== 0) {
      return dateA - dateB;
    }

    // Extract the number from the 'name' field, allowing for decimals
    const numA = parseFloat(a.titre.replace(/[^\d.]/g, ""));
    const numB = parseFloat(b.titre.replace(/[^\d.]/g, ""));

    return numA - numB;
  });
}
</script>
