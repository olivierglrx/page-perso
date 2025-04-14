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
      <CandidatInfo :info="data.InfosSupplementaires" />

      <CandidatScolarite :scolarite="data.Scolarite" />
      <CandidatLettremotivation :text="data.InfosSupplementaires['lettre']"/>
      <CandidatAppreciations :appreciations="data.AppreciationsEnseignantsFicheAvenir" />

      <CandidatBac :baccalaureat="data.Baccalaureat" />
      <CandidatNotesBac :notes="data.NotesBaccalaureat" />
      <CandidatBulletins :bulletins="data.BulletinsScolaires" />
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
    const res = await fetch(`/ps2/${numero}.json`);
    const datajson = await res.json();

    const allCandidats = datajson.exportDeDonnees.exportCandidats.flatMap(
      (f) => f.candidats
    );

    const found = allCandidats.find(
      (c) => c.DonneesCandidats?.NumeroDossierCandidat == numero
    );
   

    if (found) data.value = found;


    if (found) {
      data.value.InfosSupplementaires = {
        "Code candidat": datajson["Code candidat"],
        "Groupe algorithmique": datajson["Groupe algorithmique"],
        "Classement Algorithmique": datajson["Classement Algorithmique"],
        "Remarques": datajson["Remarques"],
        "Spe": datajson["Spe"],
        "candidat précédent": datajson["candidat précédent"],
        "candidat suivant": datajson["candidat suivant"],
        'lettre' : datajson["lettre"],
        'veto' : datajson["veto"],
        'geol': datajson["geol"],
      };

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
