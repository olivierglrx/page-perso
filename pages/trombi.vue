<
<template>
  <h1>Info Trombi Chaptal</h1>
  <ul>
    <li>
      Les données sont stockées sur mon drive google le temps de les ajouter au
      trombi global. Puis supprimées.
    </li>
    <!-- <li>Le trombi se trouve :<nuxt-link to=""> ICI</nuxt-link>.</li> -->
    <li>
      Vous pouvez ajouter votre photo
      <nuxt-link
        to="https://docs.google.com/forms/d/e/1FAIpQLSf2xC1HvyvJ7ZtWftE-a2vo7U6a5Phuvz41JADUDanMFSsSMg/viewform?usp=sf_link"
        class="text-blue-700 font-bold dark:text-blue-300"
      >
        ICI</nuxt-link
      >.
    </li>
    <li>
      Il faut un compte google pour pouvoir uploader des fichiers, mais vous
      pouvez remplir le formulaire pour quelqu'un d'autre.
    </li>
  </ul>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "trombi",
});
</script>
<style scoped>
h1 {
  display: block;
  font-size: 2em;
  margin-top: 0.67em;
  margin-bottom: 0.67em;
  margin-left: auto;
  margin-right: auto;
  font-weight: bold;
  text-align: center;
}
ul {
  margin: auto;
  width: 50%;
  list-style: square;
}
li {
  list-style: square;
}
</style>
