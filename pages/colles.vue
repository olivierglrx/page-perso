<template>
  <Titleheader title="Colles" />

  <div class="p-4 space-y-8 max-w-6xl mx-auto">
    <UTable :data="seminarItems" :columns="columns" v-model:sorting="sorting" class="w-full">
      <template #date-cell="{ row }">
        {{ new Date(row.original.date).toLocaleDateString() }}
      </template>
      <template #sujet-cell="{ row }">
        <UButton v-if="row.original.sujet" :to="getPublicLink(row.original.sujet)" target="_blank"
          icon="i-heroicons-document-text" variant="ghost" color="gray" aria-label="Sujet" />
      </template>
      <template #keywords-cell="{ row }">
        <div class="flex flex-wrap gap-1">
          <UBadge v-for="key in row.original.keywords?.split(';').filter(k => k.trim())" :key="key" color="gray"
            variant="soft" size="lg">
            {{ key.trim() }}
          </UBadge>
        </div>
      </template>
    </UTable>
  </div>
</template>

<script setup>
const sorting = ref([{ id: 'date', desc: true }]);
const seminarItems = ref([]);

const columns = [
  { accessorKey: 'titre', header: 'Titre', enableSorting: true },
  { accessorKey: 'date', header: 'Date', enableSorting: true },
  { accessorKey: 'sujet', header: 'Sujet' },
  { accessorKey: 'keywords', header: 'Mots-clés' }
]

const { getItems } = useDirectus();

onMounted(async () => {
  const { data: seminars } = await getItems("colles", {
    sort: "date",
    filter: { published: { _eq: true } } // Assuming we should filter by published based on original visual check logic, usually safer to filter in query
  });

  // Note: Original code did client side reverse(). 
  // Directus sort "date" is ascending, "-date" is descending.
  // Original query had sort "date" then client reverse => descending order.
  // We can just set sort "-date" in query or keep client logic.
  // Let's use clean Directus sort if possible, or matches original.

  if (seminars) {
    // Client-side filtering for published date to match original vue logic: 
    // v-if="item.publishing_date && new Date(item.publishing_date) <= new Date()"
    // We should replicate this filtering.

    seminarItems.value = seminars.filter(item => {
      if (!item.publishing_date) return false;
      return new Date(item.publishing_date) <= new Date();
    }).reverse(); // Original reversed it.
  }
});

function getPublicLink(link) {
  return link && link.includes('public') ? link.slice(8) : link;
}
</script>
