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
      <CandidatHeader :candidat="data.DonneesCandidats" />
      <CandidatInfo :info="data.InfosSupplementaires" />

      <CandidatScolarite :scolarite="data.Scolarite" />
      <CandidatLettremotivation :text="data.InfosSupplementaires['lettre']" />
      <CandidatAppreciations
        :appreciations="data.AppreciationsEnseignantsFicheAvenir"
      />
      <CandidatBac :baccalaureat="data.Baccalaureat" />
      <CandidatNotesBac :notes="data.NotesBaccalaureat" />
      <CandidatBulletins :bulletins="data.BulletinsScolaires" />
    </div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

const route = useRoute();
const numero = route.params.numero;

const inputPassword = ref("");
const isAuthenticated = ref(false);
const error = ref(false);
const data = ref(null);
const pendingAuth = ref(true);

const PASSWORD = "chaptalPS2026!!";

const group = ref(null);
const notealgo = ref(null);

const loadgroup = async () => {
  if (group.value) return;

  try {
    const res = await fetch(`/ps2/output.json`);
    const datajson = await res.json();

    if (datajson[numero]) {
      group.value = datajson[numero][1];
      notealgo.value = datajson[numero][0];
    } else {
      console.warn(
        `Aucune donnée trouvée pour le numéro ${numero} dans output.json`,
      );
    }
  } catch (e) {
    console.error("Erreur de chargement output.json:", e);
  }
};

const loadData = async () => {
  if (data.value) return;

  try {
    const res = await fetch(`/ps2/${numero}.json`);
    const datajson = await res.json();

    const spepremiere = [
      datajson?.Baccalaureat?.EDSScolaritePremiere1Libelle,
      datajson?.Baccalaureat?.EDSScolaritePremiere2Libelle,
      datajson?.Baccalaureat?.EDSScolaritePremiere3Libelle,
    ];

    const speterminale = [
      datajson?.Baccalaureat?.EDSScolariteTerminale1Libelle,
      datajson?.Baccalaureat?.EDSScolariteTerminale2Libelle,
    ];

    const speabandonne = spepremiere.filter((x) => !speterminale.includes(x));

    if (datajson.DonneesCandidats?.NumeroDossierCandidat == numero) {
      const texte = (
        datajson["lettre"] ??
        datajson.DonneesVoeux?.LettreDeMotivation ??
        ""
      ).toLowerCase();

      // ou en une seule variable si tu veux tester les deux
      const contientVeto = ["veto", "véto", "veterinaire", "vétérinaire"].some(
        (mot) => texte.includes(mot),
      );
      const contientGeol = ["geol", "géol", "geologie", "géologie"].some(
        (mot) => texte.includes(mot),
      );
      const mots = [
        "excellent",
        "bravo",
        "très bien",
        "sérieux",
        "sérieuse",
        "motivation",
        "bavardage",
        "absent",
      ];

      // fonction pour normaliser (casse + accents)
      const normalize = (str) =>
        str
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");

      const motsNormalises = mots.map(normalize);

      const resultats = datajson.AppreciationsEnseignantsFicheAvenir.map(
        (obj) => {
          const texte = normalize(obj.AppreciationFicheAvenir ?? "");

          const comptes = Object.fromEntries(
            motsNormalises.map((mot, i) => [
              mots[i], // garder la forme originale comme clé
              (texte.match(new RegExp(mot, "g")) || []).length,
            ]),
          );

          return {
            ...obj,
            comptes,
          };
        },
      );
      const texteGlobal = (datajson.BulletinsScolaires ?? [])
        .flatMap(
          (bulletin) =>
            bulletin.BulletinsScolairesAnnee?.BulletinsScolairesSeries ?? [],
        )
        .flatMap((serie) => serie.BulletinsScolairesParPeriode ?? [])
        .map((periode) => periode.AppreciationProfesseur ?? "")
        .join(" ");

      const total = Object.fromEntries(mots.map((m) => [m, 0]));

      resultats.forEach((r) => {
        mots.forEach((m) => {
          total[m] += r.comptes[m];
        });
      });

      const normalizeText = (str) =>
        str
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");

      const texteGlobalNormalise = normalizeText(texteGlobal);

      mots.forEach((m) => {
        const motNormalise = normalizeText(m);
        total[m] += (
          texteGlobalNormalise.match(new RegExp(motNormalise, "g")) || []
        ).length;
      });

      console.log(total);

      data.value = {
        ...datajson,
        InfosSupplementaires: {
          "Code candidat": datajson.DonneesCandidats?.NumeroDossierCandidat,
          "Groupe algorithmique": group.value ?? "N/A",
          "Classement Algorithmique": notealgo.value ?? "N/A",
          Remarques: total,
          Spe: speterminale.filter(Boolean).join(", ") || "N/A",
          speabandonne: speabandonne,
          lettre:
            datajson["lettre"] ?? datajson.DonneesVoeux?.LettreDeMotivation,
          veto: contientVeto ? "Oui" : "Non",
          geol: contientGeol ? "Oui" : "Non",
        },
      };
    }

    console.log(data.value);
  } catch (e) {
    console.error("Erreur de chargement ps.json:", e);
  }
};

const checkPassword = async () => {
  if (inputPassword.value === PASSWORD) {
    localStorage.setItem("ps_auth", "true");
    isAuthenticated.value = true;
    error.value = false;

    await loadgroup();
    await loadData();
  } else {
    error.value = true;
  }
};

onMounted(async () => {
  if (localStorage.getItem("ps_auth") === "true") {
    isAuthenticated.value = true;
    await loadgroup();
    await loadData();
  }
  pendingAuth.value = false;
});

definePageMeta({
  layout: "trombi",
});
</script>

<style scoped>
/* Ajouter ici du style personnalisé si besoin */
</style>
