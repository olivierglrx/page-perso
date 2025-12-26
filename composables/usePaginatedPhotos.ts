// composables/usePaginatedPhotos.ts

import { ref, computed } from "vue";

export function usePaginatedPhotos(batchSize = 3) {
  const allPhotos = ref<string[]>([]);
  const photos = ref<string[]>([]);
  const index = ref(0);

  const hasMore = computed(() => index.value < allPhotos.value.length);

  function loadNextBatch() {
    if (!hasMore.value) return;
    const next = allPhotos.value.slice(index.value, index.value + batchSize);
    photos.value.push(...next);
    index.value += batchSize;
    // console.log("Loaded next batch:", next);
  }

  async function loadPhotoList() {
    if (allPhotos.value.length > 0) return;

    try {
      const res = await fetch("/photo_list.json");
      if (!res.ok) throw new Error("Failed to fetch photo list");
      const names: string[] = await res.json();
      allPhotos.value = names.map((name) => `/resized/${name}`);
      loadNextBatch(); // preload first batch
    } catch (error) {
      console.error("Error loading photo list:", error);
    }
  }

  loadPhotoList();

  return {
    photos,
    loadNextBatch,
    hasMore,
  };
}
