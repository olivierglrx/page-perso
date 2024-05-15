<template>
  <h1 class="mt-2 mb-4 text-2xl  text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white">
    Publications</h1>   
<p class="m-10 ">Probability percolation is a concept often encountered in statistical physics and probability theory, particularly in the study of random systems, such as networks, lattices, or graphs. Percolation theory deals with the behavior of connected clusters in random systems.

In probability percolation, the system is typically represented as a lattice or a network where each site or edge is occupied with some probability <vue-mathjax :formula="p" />, independently of other sites or edges. The term "percolation" refers to the phenomenon of connectivity in such systems. In other words, one examines whether a path of connected occupied sites or edges spans the entire system, from one side to another.

There are different types of percolation models, such as site percolation (where sites are occupied with probability <vue-mathjax :formula="p" />) and bond percolation (where edges are occupied with probability <vue-mathjax :formula="p" />). The critical probability <vue-mathjax :formula="p_c" /> is of particular interest, as it represents the threshold probability at which percolation behavior undergoes a phase transition.

Probability percolation models are used to study a wide range of phenomena, including the behavior of fluids in porous media, the spread of diseases in populations, the conductivity of materials, and the robustness of networks. They provide insights into the emergence of large-scale connectivity and can be analyzed using various mathematical and computational techniques.</p>
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
  <Script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML"></Script>
</template>

<script setup lang="ts">
const { data: publications } = await useFetch(
  "https://olivierglorieux.fr/wp-json/wp/v2/publications?acf_format=standard"
);

</script>

<style scoped>
.sbt{justify-content: space-around;}
</style>
