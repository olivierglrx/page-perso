<template>
  <Titleheader title="Publications" />

  <p class="m-10"></p>
  <div class="flex flex-wrap sbt">
    <div class="col" v-for="publi in publications">
      <Card
        :title="publi.title.rendered"
        :authors="publi.Authors"
        :imageURL="publi.acf.image.url.replace(/^http:/, 'https:')"
        :fields="publi.Field"
        :abstract="publi.acf.abstract"
        :articleURL="publi.acf.url"
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.sbt {
  justify-content: space-around;
}
</style>
