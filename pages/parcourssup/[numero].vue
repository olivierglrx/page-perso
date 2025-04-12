<template>
  <!-- 🔐 Formulaire mot de passe -->
  <div
    v-if="!isAuthenticated"
    class="p-6 max-w-md mx-auto mt-20 bg-white rounded-2xl shadow text-center space-y-4"
  >
    <h2 class="text-lg font-semibold text-gray-800">🔒 Accès protégé</h2>
    <input
      v-model="inputPassword"
      type="password"
      placeholder="Mot de passe"
      class="border p-2 w-full rounded"
      @keyup.enter="checkPassword"
    />
    <button
      @click="checkPassword"
      class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      Valider
    </button>
    <p v-if="error" class="text-red-500 text-sm">Mot de passe incorrect</p>
  </div>

  <div v-else>
    <div class="p-6 max-w-5xl mx-auto space-y-6">
      <div class="bg-white rounded-2xl shadow p-6">
        <h2 class="text-xl font-semibold text-gray-800 mb-2">
          📁 Dossier Candidat #{{ data.DonneesCandidats.NumeroDossierCandidat }}
        </h2>
        <p class="text-gray-700">
          <strong>Nom:</strong> {{ data.DonneesCandidats.NomCandidat }}
          {{ data.DonneesCandidats.PrenomCandidat }}
        </p>
        <p>
          <strong>Date de naissance:</strong>
          {{ data.DonneesCandidats.DateNaissance }}
        </p>
      </div>

      <div class="bg-white rounded-2xl shadow p-6" v-if="data.Scolarite">
        <h3 class="text-lg font-bold mb-2 text-gray-800">🎓 Scolarité</h3>
        <ul class="space-y-1">
          <li>
            <strong>Année scolaire :</strong>
            {{ data.Scolarite[0].AnneeScolaireLibelle }}
          </li>
          <li>
            <strong>Niveau d'étude :</strong>
            {{ data.Scolarite[0].NiveauEtudeLibelle }}
          </li>

          <li>
            <strong>Type de classe :</strong>
            {{ data.Scolarite[0].TypeClasseLibelle }}
          </li>
          <li>
            <strong>Scolarité :</strong>
            {{ data.Scolarite[0].ScolariteFrancaiseLibelle }}
          </li>
          <li>
            <strong>Établissement :</strong>
            {{ data.Scolarite[0].NomEtablissementOrigine }}
          </li>
          <li>
            <strong>Commune :</strong>
            {{ data.Scolarite[0].CommuneEtablissementOrigineLibelle }}
          </li>
          <li>
            <strong>Pays :</strong>
            {{ data.Scolarite[0].PaysEtablissementorigineLibelle }}
          </li>
          <li>
            <strong>Type d'établissement :</strong>
            {{ data.Scolarite[0].TypeEtablissementorigineLibelle }}
          </li>
        </ul>
      </div>

      <div v-if="data.Baccalaureat" class="bg-white rounded-2xl shadow p-6">
        <h3 class="text-lg font-bold text-gray-800 mb-2">🎓 Spécialités Bac</h3>
        <ul class="list-disc pl-6 text-gray-700">
          <li v-if="data.Baccalaureat.EDSScolariteTerminale1Libelle">
            Terminale 1 : {{ data.Baccalaureat.EDSScolariteTerminale1Libelle }}
          </li>
          <li v-if="data.Baccalaureat.EDSScolariteTerminale2Libelle">
            Terminale 2 : {{ data.Baccalaureat.EDSScolariteTerminale2Libelle }}
          </li>
          <li v-if="data.Baccalaureat.EDSScolaritePremiere1Libelle">
            Première 1 : {{ data.Baccalaureat.EDSScolaritePremiere1Libelle }}
          </li>
          <li v-if="data.Baccalaureat.EDSScolaritePremiere2Libelle">
            Première 2 : {{ data.Baccalaureat.EDSScolaritePremiere2Libelle }}
          </li>
          <li v-if="data.Baccalaureat.EDSScolaritePremiere3Libelle">
            Première 3 : {{ data.Baccalaureat.EDSScolaritePremiere3Libelle }}
          </li>
        </ul>
      </div>

      <div
        v-if="data.NotesBaccalaureat?.length"
        class="bg-white rounded-2xl shadow p-6"
      >
        <h3 class="text-lg font-bold text-gray-800 mb-2">📄 Notes Bac</h3>
        <ul class="pl-6 text-gray-700 list-disc">
          <li v-for="(note, i) in data.NotesBaccalaureat" :key="i">
            {{ note.EpreuveLibelle }} :
            <span v-if="note.NoteEpreuve">{{ note.NoteEpreuve }}</span
            ><span v-else class="italic text-gray-500">non renseignée</span>
          </li>
        </ul>
      </div>

      <div v-if="data.BulletinsScolaires" class="space-y-4">
        <div
          v-for="(annee, i) in data.BulletinsScolaires.reverse()"
          :key="i"
          class="bg-white rounded-2xl shadow p-6"
        >
          <h3 class="text-lg font-bold text-gray-800 mb-2">
            📅 Année : {{ annee.AnneeLibelle }}
          </h3>
          <p class="text-gray-600 mb-4">
            <strong>Série :</strong>
            {{ annee.BulletinsScolairesAnnee?.SerieLibelle }}
          </p>

          <div
            v-for="(serie, j) in annee.BulletinsScolairesAnnee
              ?.BulletinsScolairesSeries || []"
            :key="j"
          >
            <h4 class="text-md font-semibold text-gray-700 mt-4">
              {{ serie.TrimestreLibelle }}
            </h4>
            <table
              class="w-full text-left mt-2 border border-gray-200 rounded overflow-hidden"
            >
              <thead class="bg-gray-100 text-sm">
                <tr>
                  <th class="p-2">Matière</th>
                  <th class="p-2">Moyenne</th>
                  <th class="p-2">Classe</th>
                  <th class="p-2">Min</th>
                  <th class="p-2">Max</th>
                  <th class="p-2">Appreciation</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(matiere, k) in serie.BulletinsScolairesParPeriode"
                  :key="k"
                  class="text-sm border-t"
                >
                  <td class="p-2">{{ matiere.MatiereBulletinLibelle }}</td>
                  <td class="p-2">{{ matiere.MoyenneduCandidat }}</td>
                  <td class="p-2">{{ matiere.MoyenneclasseCandidat }}</td>
                  <td class="p-2">
                    {{ matiere.MoyenneBasseClasseduCandidat }}
                  </td>
                  <td class="p-2">
                    {{ matiere.MoyenneHauteClasseduCandidat }}
                  </td>
                  <td>{{ matiere.AppreciationProfesseur }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div
        v-if="data.AppreciationsEnseignantsFicheAvenir?.length"
        class="bg-white rounded-2xl shadow p-6"
      >
        <h3 class="text-lg font-bold text-gray-800 mb-2">
          🧑‍🏫 Appréciations Enseignants
        </h3>
        <div
          v-for="(app, i) in data.AppreciationsEnseignantsFicheAvenir"
          :key="i"
          class="mb-2"
        >
          <p class="text-gray-700">
            <strong>{{ app.MatiereFicheAvenirLibelle }}</strong> :
            {{ app.AppreciationFicheAvenir }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

const route = useRoute();
const numero = route.params.numero;
const candidat = ref(null);
const data = ref(null);

const inputPassword = ref("");
const isAuthenticated = ref(false);
const error = ref(false);

const p = "chaptalPS2025!!";
const checkPassword = () => {
  if (inputPassword.value === p) {
    localStorage.setItem("ps_auth", "true");
    isAuthenticated.value = true;
    error.value = false;
  } else {
    error.value = true;
  }
};

onMounted(async () => {
  try {
    const res = await fetch("/ps/" + numero + ".json");
    const datajson = await res.json();

    // Parcours de tous les candidats pour trouver celui avec le bon numero
    const allCandidats = datajson.exportDeDonnees.exportCandidats.flatMap(
      (f) => f.candidats
    );

    candidat.value = allCandidats.find(
      (c) => c.DonneesCandidats?.NumeroDossierCandidat == numero
    );
    data.value = candidat.value;
  } catch (e) {
    console.error("Erreur de chargement ps.json:", e);
  }
});

onMounted(() => {
  if (localStorage.getItem("ps_auth") === "true") {
    isAuthenticated.value = true;
  }
});

definePageMeta({
  layout: "trombi",
});
</script>

<style scoped>
/* Tu peux ajouter du style perso ici si besoin */
</style>
