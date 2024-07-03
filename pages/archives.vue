<template>
  <Titleheader title="Archives" />
  <USelect
    class="w-48"
    v-model="selected"
    :options="k"
    option-attribute="label"
    @change="onChange(this.name)"
  />
  {{ selected }}
  <ArchivesAnnes :data="DM2020" :date="'2020'"></ArchivesAnnes>
  <ArchivesAnnes :data="D2021" :date="'2021'"></ArchivesAnnes>
  <ArchivesAnnes :data="DS2023" :date="'2023'"></ArchivesAnnes>
</template>

<script setup>
var DS2023 = [
  {
    name: "DS1",
    keywords: [
      "Sommes",
      "Produits",
      "Partie entière",
      "Equations à paramètre",
      "Résolutions d'équations",
    ],
  },
  {
    name: "DS2",
    keywords: ["Trigonométrie", "Suites récurrentes", "Sommes"],
  },

  {
    name: "DS3",
    keywords: ["Systèmes linéaires", "Suites AG", "Complexes", "Sommes"],
  },
  {
    name: "DS4",
    keywords: ["Equations différentielles", "Sommes", "Intégrales"],
  },
  {
    name: "DS5",
    keywords: ["Quantificateurs", "Matrices", "Dénombrement", "Sommes"],
  },
  {
    name: "Concours Blanc",
    keywords: [
      "Suites récurrentes",
      "TAF",
      "Espaces vectoriels",
      "Probabilités",
    ],
  },
  {
    name: "DS7",
    keywords: ["Probabilités", "Continuité", "Dérivabilité", "Polynômes"],
  },
  {
    name: "DS9",
    keywords: ["Applications Linéaires", "Espaces vectoriels", "DL"],
  },
  {
    name: "DSrevision",
    keywords: ["Probabilite", "Sommes", "Ecricome2022"],
  },
];

var DM2020 = [
  {
    name: "DM1",
    keywords: [
      "Suite AG",
      "Partie entière",
      "Equations à paramètre",
      "Résolutions d'équations",
    ],
  },
  {
    name: "DM2",
    keywords: ["Complexes", "Sommes"],
  },

  {
    name: "DM3",
    keywords: ["Trigonométrie", "Arctan"],
  },
  {
    name: "DM4",
    keywords: ["Binomes de Newton"],
  },
  {
    name: "DM5",
    keywords: ["Complexes", "Sommes", "Produits", "Sommes"],
  },
  {
    name: "DM6",
    keywords: ["Suites récurrentes", "Suites implicites"],
  },
];

const DM2021 = [
  {
    name: "DM1",
    keywords: ["Equations", "Etudes de fonctions"],
  },
  {
    name: "DM2",
    keywords: ["Equations", "Partie entière"],
  },
  {
    name: "DM3",
    keywords: ["Equations", "Racines", "Complexes"],
  },
  {
    name: "DM4",
    keywords: ["Complexes", "Coefficients binomiaux", "Suites"],
  },
  {
    name: "DM5",
    keywords: ["Complexes", "Sommes", "Fibonnaci"],
  },
  {
    name: "DM6",
    keywords: ["Systèmes linéaires", "Suites"],
  },
  {
    name: "DM7",
    keywords: ["Intégrales", "Equations différentielles"],
  },
  {
    name: "DM8",
    keywords: ["Ensembles", "Logiques", "Trigonométrie"],
  },
  {
    name: "DM9",
    keywords: ["Matrices", "Systèmes linéaires"],
  },
  {
    name: "DM12",
    keywords: ["Polynômes", "Tchebychev"],
  },
  {
    name: "DM13",
    keywords: ["VAR"],
  },
  {
    name: "DM14",
    keywords: ["Probabilité", "Matrices", "Continuité"],
  },
  {
    name: "DM15",
    keywords: ["Dérivation", "Liebniz"],
  },
  {
    name: "DM16",
    keywords: [
      "Algébre linéaire",
      "EV",
      "Produit scalaire",
      "Intégration",
      "Dérivation",
    ],
  },
  {
    name: "DM17",
    keywords: ["VAR", "G2E"],
  },
  {
    name: "DM-info",
    keywords: ["Listes", "Chaines de caractéres", "Boucles"],
  },
  {
    name: "DM-Toussaint",
    keywords: ["Fonctions", "Equations", "Suites", "Sommes"],
  },
  {
    name: "DM-Noel",
    keywords: ["Matrices", "Systèmes linéaires"],
  },
  {
    name: "DM-Février",
    keywords: ["Fonctions", "Sommes"],
  },
];

const DS2021 = [
  {
    name: "DS1",
    keywords: ["Equations", "Etudes de fonctions"],
  },
  {
    name: "DS2",
    keywords: ["Equations", "Partie entière"],
  },
  {
    name: "DS3",
    keywords: ["Equations", "Racines", "Complexes"],
  },
  {
    name: "DS4",
    keywords: ["Complexes", "Coefficients binomiaux", "Suites"],
  },
  {
    name: "DS5",
    keywords: ["Complexes", "Sommes", "Fibonnaci"],
  },
  {
    name: "DS6",
    keywords: ["Systèmes linéaires", "Suites"],
  },
  {
    name: "DS7",
    keywords: ["Intégrales", "Equations différentielles"],
  },
  {
    name: "ConcoursBlanc",
    keywords: ["Ensembles", "Logiques", "Trigonométrie"],
  },
  {
    name: "DM9",
    keywords: ["Matrices", "Systèmes linéaires"],
  },
];

const D2021 = DS2021.concat(DM2021);

var keywordsD = {};
DS2023.forEach((x) => callbackFct(x.keywords, keywordsD));
DM2020.forEach((x) => callbackFct(x.keywords, keywordsD));
D2021.forEach((x) => callbackFct(x.keywords, keywordsD));
function callbackFct(x, dict) {
  x.forEach((item) => {
    console.log(item);
    if (item in dict) {
      dict[item] += 1;
    } else {
      dict[item] = 1;
    }
  });
}

const ordered = Object.keys(keywordsD)
  .sort()
  .reduce((obj, key) => {
    obj[key] = keywordsD[key];
    return obj;
  }, {});

var k = [];
for (var item in ordered) {
  k.push({ label: item + " (" + ordered[item] + ")", name: item });
}

const selected = ref(k[0]);

function onChange() {
  console.log(DM2020);
}
</script>
