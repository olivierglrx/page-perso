<template>
  <div>
    <h2
      class="mt-2 mb-4 text-l text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-2xl dark:text-white"
    >
      {{ date }}
    </h2>

    <div class="flex mx-10">
      <ul class="flex flex-wrap">
        <li v-for="item in data" class="">
          <DsCard
            class="w-80 md:h-28"
            :name="item.name"
            :keywords="item.keywords"
            :date="date"
          ></DsCard>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: Object,
  date: String,
});
</script>
