<template>
  <Titleheader title="Devoirs" />

  <UModal v-model="isOpen2">
    <div class="p-4">
      <label> Connectez vous pour accéder aux notes</label>
      <UInput v-model="pass" />
      <UButton class="bg-blue-500 hover:bg-blue-600 dark:bg-blue-500" size="sm" @click="validate(pass)">OK</UButton>
      <p>{{ message }}</p>
    </div>
  </UModal>

  <div class="p-4 space-y-8 max-w-6xl mx-auto">
    <div class="flex justify-center gap-4 mb-6">
      <UButton to="#Interro" label="Interro" variant="soft" />
      <UButton to="#DS" label="DS" variant="soft" />
      <UButton to="#DM" label="DM" variant="soft" />
    </div>

    <div v-for="(items, type) in { 'Interro': InterroItems, 'DS': DSItems, 'DM': DMItems }" :key="type">
      <h2 :id="type" class="mb-4 text-2xl font-bold text-center dark:text-white scroll-mt-20">{{ type }}</h2>
      <UTable :data="items" :columns="columns" v-model:sorting="sorting" class="w-full">
        <template #date-cell="{ row }">
          {{ new Date(row.original.date).toLocaleDateString() }}
        </template>
        <template #sujet-cell="{ row }">
          <UButton v-if="row.original.sujet" :to="getPublicLink(row.original.sujet)" target="_blank"
            icon="i-heroicons-document-text" variant="ghost" color="gray" aria-label="Sujet" />
        </template>
        <template #correction-cell="{ row }">
          <UButton v-if="row.original.correction && isPublished(row.original.dateCorrection)"
            :to="getPublicLink(row.original.correction)" target="_blank" icon="i-heroicons-check-circle" variant="ghost"
            color="green" aria-label="Correction" />
        </template>
        <template #notes-cell="{ row }">
          <UButton v-if="row.original.notes && isPublished(row.original.dateNote)"
            @click="handleNoteClick(row.original.notes)" icon="i-heroicons-chart-bar" variant="ghost" color="blue"
            aria-label="Notes" />
        </template>
      </UTable>
    </div>
  </div>
</template>

<script setup>
const today = new Date();
const isOpen2 = ref(false);
const pass = ref("");
const message = ref("");

const sorting = ref([{ id: 'date', desc: true }]);

const InterroItems = ref([]);
const DSItems = ref([]);
const DMItems = ref([]);

const columns = [
  { accessorKey: 'titre', header: 'Titre', enableSorting: true },
  { accessorKey: 'date', header: 'Date', enableSorting: true },
  { accessorKey: 'sujet', header: 'Sujet' },
  { accessorKey: 'correction', header: 'Correction' },
  { accessorKey: 'notes', header: 'Notes' }
]

const { getItems } = useDirectus();

onMounted(async () => {
  const { data: allDevoirs } = await getItems("devoirs", {
    filter: { published: { _eq: true } },
    limit: -1,
    sort: "-date"
  });

  if (allDevoirs) {
    InterroItems.value = filterAndSort(allDevoirs, 'interro');
    DSItems.value = filterAndSort(allDevoirs, 'DS');
    DMItems.value = filterAndSort(allDevoirs, 'DM');
  }
});

function filterAndSort(items, type) {
  return items
    .filter(d => d.type === type)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

function getPublicLink(link) {
  return link && link.includes('public') ? link.slice(8) : link;
}

function isPublished(dateStr) {
  if (!dateStr) return true; // If no date specified, assume published or handle logic differently
  return new Date(dateStr) < today;
}


function handleNoteClick(link) {
  if (localStorage.getItem('auth') === 'true') {
    window.open(getPublicLink(link), '_blank');
  } else {
    selectedNoteLink.value = link;
    isOpen2.value = true;
    message.value = ""; // Reset message on new attempt
  }
}

const selectedNoteLink = ref('');

function validate(password) {
  if (password === 'PCSI2') {
    localStorage.setItem('auth', 'true');
    isOpen2.value = false;
    if (selectedNoteLink.value) {
      window.open(getPublicLink(selectedNoteLink.value), '_blank');
      selectedNoteLink.value = ''; // Reset selected link
    }
    pass.value = ""; // Clear password field
  } else {
    message.value = "Mot de passe incorrect";
  }
}

</script>
