<template>
  <div class="block max-w-xs m-4  px-2 py-4 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">

    <div class="grid place-items-center">
        <img :src="imageURL" class="h-3/4"  />
  
    </div>
    <div class="">
      <h3 class="max-w-xs p-6 md:uppercase">
        {{ title }}</h3>

      <div v-if="fields" class="mb-2">
        
          <UButton color="white" v-for="field in fields" class="hover:bg-gray-100 rounded-full">
          {{ field.name }}
          </UButton>      
        
        </div>

        <div>
              <span v-for="(author, index) in authors" :key="author.term_id" class="italic">{{ index<authors.length-1 ? author.name+', ' : author.name+'.' }}</span>
        </div>

<div class="flex space-x-4 my-4">

      <a :href="articleURL">
        <UButton color="white" class="hover:bg-gray-100">Arxiv <Icon name="bi:file-earmark-pdf">  </Icon> </UButton>
      </a>

      <UPopover overlay>
        <UButton color="white" class="hover:bg-gray-100" label="Abstract" />
        <template #panel>
          <div class="max-w-xs rounded-full mx-auto">
            <p class="p-5 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-700">
              {{ abstract }}</p>
          </div>
        </template>
      </UPopover>
    </div>
  </div>

</div>




</template>


<script setup>
defineProps({
  title: String,
  authors: [Boolean, Array],
  imageURL: String,
  fields: [Boolean, Array],
  abstract: String,
  articleURL: String,
});


</script>
<style scoped>
.fit {
  width:"fit-content"; 
}
</style>