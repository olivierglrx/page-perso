<template>
  <div id="container" class="mt-1 flex">
    <div class="flex">
      <p class="hidden md:block p-2 mb-10">
        <ul>
          <li class="p-2"> Bienvenue sur le site personnel d'Olivier Glorieux   <UAvatar
            src="olivier.png"
            alt="Avatar"
          />.  </li>
          <li> <Icon name="ph:student-fill" color="black dark:white" /> Etudiants,  vous trouverez ici les documents de cours de la BCPST1 
            du lycée Chaptal.  </li>
            <li> <Icon name="uil:github" color="black dark:white"  /> Enseignants, vous avez accés aux fichiers .tex de ces documents sur 
              <nuxtLink class="text-blue-700 dark:text-blue-300"  to="https://github.com/olivierglrx/BCPST
              ">https://github.com/olivierglrx/BCPST.
            </nuxtLink></li>
            <li> <Icon name="simple-icons:arxiv" color="black dark:white" /> Chercheurs, vous pouvez jeter un oeil à mes anciennes  
              <nuxt-link class="text-blue-700 dark:text-blue-300" to="publications">publications.</nuxt-link></li>
            
        </ul>

      </p>
    </div>
  </div>
</template>

<style scoped>
#container {
  
  margin-bottom: 1%;
  margin-left: 20%;
 

  
}

img {
  height: 100px;
  margin-right: 5%;
}

p {
  
}
</style>
