<template>
    <section v-if="bulletins" class="space-y-4">
      <div v-for="(annee, i) in [...bulletins]" :key="i" class="bg-white rounded-2xl shadow p-6">
        <h3 class="text-lg font-bold text-gray-800 mb-2">📅 Année : {{ annee.AnneeLibelle }}</h3>
        <p class="text-gray-600 mb-4"><strong>Série :</strong> {{ annee.BulletinsScolairesAnnee?.SerieLibelle }}</p>
  
        <div v-for="(serie, j) in annee.BulletinsScolairesAnnee?.BulletinsScolairesSeries || []" :key="j">
          <h4 class="text-md font-semibold text-gray-700 mt-4">{{ serie.TrimestreLibelle }}</h4>
          <table class="w-full text-left mt-2 border border-gray-200 rounded overflow-hidden">
            <thead class="bg-gray-100 text-sm">
              <tr>
                <th class="p-2">Matière</th>
                <th class="p-2">Moyenne</th>
                <th class="p-2">Classe</th>
                <th class="p-2">Min</th>
                <th class="p-2">Max</th>
                <th class="p-2">Appréciation</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(matiere, k) in serie.BulletinsScolairesParPeriode" :key="k" class="text-sm border-t">
                <td class="p-2">{{ matiere.MatiereBulletinLibelle }}</td>
                <td class="p-2">{{ matiere.MoyenneduCandidat }}</td>
                <td class="p-2">{{ matiere.MoyenneclasseCandidat }}</td>
                <td class="p-2">{{ matiere.MoyenneBasseClasseduCandidat }}</td>
                <td class="p-2">{{ matiere.MoyenneHauteClasseduCandidat }}</td>
                <td>{{ matiere.AppreciationProfesseur }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  defineProps({ bulletins: Array });
  </script>
  