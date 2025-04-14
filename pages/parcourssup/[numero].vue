<template>
  <!-- 🔐 Formulaire mot de passe -->
  <div v-if="pendingAuth" class="hidden"></div>

  <AuthForm
    v-else-if="!isAuthenticated"
    v-model:password="inputPassword"
    :error="error"
    @submit="checkPassword"
  />

  <div v-else-if="isAuthenticated && data">

    <div class="p-6 max-w-5xl mx-auto space-y-6">
      <div class="flex justify-between pt-6">
        <NuxtLink
          v-if="data.InfosSupplementaires?.['candidat précédent']"
          class="text-blue-600 hover:underline"
          :to="`/parcourssup/${data.InfosSupplementaires['candidat précédent']}`"
        >
          ← Candidat précédent
        </NuxtLink>
        <div></div>
        <NuxtLink
          v-if="data.InfosSupplementaires?.['candidat suivant']"
          class="text-blue-600 hover:underline"
          :to="`/parcourssup/${data.InfosSupplementaires['candidat suivant']}`"
        >
          Candidat suivant →
        </NuxtLink>
      </div>
      <CandidatHeader :candidat="data.DonneesCandidats" />
      <CandidatInfo :info="data2.InfosSupplementaires" />
      <CandidatScolarite :scolarite="data.Scolarite" />
      <CandidatBac :baccalaureat="data.Baccalaureat" />
      <CandidatNotesBac :notes="data.NotesBaccalaureat" />
      <CandidatBulletins :bulletins="data.BulletinsScolaires" />
      <CandidatAppreciations :appreciations="data.AppreciationsEnseignantsFicheAvenir" />
    </div>
    
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

// Récupération du paramètre de la route
const route = useRoute();
const numero = route.params.numero;

// Références réactives
const inputPassword = ref("");
const isAuthenticated = ref(false);
const error = ref(false);
const data = ref(null);
const data2 = ref(null);
const pendingAuth = ref(true);

// Mot de passe attendu
const PASSWORD = "chaptalPS2025!!";

// Vérification du mot de passe
const checkPassword = () => {
  if (inputPassword.value === PASSWORD) {
    localStorage.setItem("ps_auth", "true");
    isAuthenticated.value = true;
    error.value = false;
    loadData(); // Chargement des données après authentification
  } else {
    error.value = true;
  }
};

// Fonction de chargement des données candidat
const loadData = async () => {
  if (data.value) return; // Évite les rechargements multiples

  try {
    const res = await fetch(`/ps/${numero}.json`);
    const datajson = await res.json();

    const allCandidats = datajson.exportDeDonnees.exportCandidats.flatMap(
      (f) => f.candidats
    );

    const found = allCandidats.find(
      (c) => c.DonneesCandidats?.NumeroDossierCandidat == numero
    );
   
    const classement = await fetch(`/ps/classement.json`);
    const classementjson = await classement.json();
    const found2 = classementjson.find(
  (c) =>
    c.DonneesCandidats?.NumeroDossierCandidat == numero ||
    c["Code candidat"] == numero
);

    console.log(found2)
    if (found) data.value = found;


    if (found2) {
      found2.InfosSupplementaires = {
        "Code candidat": found2["Code candidat"],
        "Groupe algorithmique": found2["Groupe algorithmique"],
        "Classement Algorithmique": found2["Classement Algorithmique"],
        "Remarques": found2["Remarques"],
        "Spe": found2["Spe"],
        "candidat précédent": found2["candidat précédent"],
        "candidat suivant": found2["candidat suivant"]
      };
      data2.value = found2;
      data.value.InfosSupplementaires = found2
    }
  } catch (e) {
    console.error("Erreur de chargement ps.json:", e);
  }
};

// Initialisation à l'ouverture du composant
onMounted(() => {
  if (localStorage.getItem("ps_auth") === "true") {
    isAuthenticated.value = true;
    loadData(); // Chargement immédiat si déjà authentifié
  }
  pendingAuth.value = false;

});

// Métadonnées de la page
definePageMeta({
  layout: "trombi",
});
</script>

<style scoped>
/* Ajouter ici du style personnalisé si besoin */
</style>
