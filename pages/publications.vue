<template>
  <Titleheader title="Publications" />

  <p class="m-10"></p>
  <div class="flex flex-wrap sbt">
    <div class="col" v-for="(publi, index) in publications">
      <CardL
        v-if="index % 2 == 1"
        :title="publi.title"
        :authors="publi.authors"
        :imageURL="publi.image"
        :abstract="publi.abstract"
        :articleURL="publi.link"
        :date="publi.date"
      />
      <CardR
        v-else
        :title="publi.title"
        :authors="publi.authors"
        :imageURL="publi.image"
        :abstract="publi.abstract"
        :articleURL="publi.link"
        :date="publi.date"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
var publications = [
  {
    title: "Critical exponents of normal subgroups in higher rank",
    link: "https://arxiv.org/abs/2006.05730v1",
    authors: ["Olivier Glorieux", "Samuel Tapie"],
    abstract:
      "We study the critical exponents of discrete subgroups of a higher rank semi-simple real linear Lie group $G$. Let us fix a Cartan subspace $mathfrak asubset mathfrak g$ of the Lie algebra of $G$. We show that if $Gamma< G$ is a discrete group, and $Gamma’ triangleleft Gamma$ is a Zariski dense normal subgroup, then the limit cones of $Gamma$ and $Gamma’$ in $mathfrak a$ coincide. Moreover, for all linear form $phi : mathfrak ato mathbb R$ positive on this limit cone, the critical exponents in the direction of $phi$ satisfy $displaystyle delta_phi(Gamma’) geq frac 1 2 delta_phi(Gamma)$. Eventually, we show that if $Gamma’backslash Gamma$ is amenable, these critical exponents coincide.",
    image: "critical.png",
    date: "2020",
  },
  {
    title: "Random triangles on flat tori",
    link: "http://arxiv.org/abs/2003.08190v1",
    authors: ["Olivier Glorieux", "Andrew Yarmola"],
    abstract:
      "Inspired by classical puzzles in geometry that ask about probabilities of geometric phenomena, we give an explicit formula for the probability that a random triangle on a flat torus is homotopically trivial. Our main tool for this computation involves reducing the problem to new invariant of measurable sets in the plane that is unchanged under area-preserving affine transformations. Our result show that this probability is minimized at all rectangular tori and maximized at the regular hexagonal torus.",
    image: "tori.png",
    date: "2020",
  },

  {
    title: "Random path in negatively curved manifolds",
    link: "https://arxiv.org/abs/2003.08187v2",
    authors: ["Adrien Boulanger", "Olivier Glorieux"],
    abstract:
      "In this article we consider sequences of random points on non-amenable coverings of compact manifolds. The sequences are the successive positions of the trajectories of the Markov process defined recursively by picking a point uniformly on the Dirichlet domain of the previous one. We prove that the escape rate is positive in this setting. The main technical point is to show a non-local isoperimetric inequality from which we get a spectral gap for the Markov operator. In the case where the covering group is Gromov hyperbolic, we deduce that almost all trajectories converge in the Gromov boundary and that the random variables given by the distance from where the process starts satisfy a central limit theorem.",
    image: "random.png",
    date: "2020",
  },
  {
    title:
      "The embedding of the space of negatively curved surfaces in geodesic currents",
    link: "https://arxiv.org/abs/1904.02558v2",
    authors: ["Olivier Glorieux"],
    abstract:
      "We prove by an algebraic method that the embedding of the Teichmuller space in the space of geodesic currents is totally linearly independent. We prove a similar result for all negatively curved surfaces using an ergodic argument.",
    image: "geodesicCurrent.png",
    date: "2019",
  },

  {
    title:
      "Critical exponent and Hausdorff dimension in pseudo-Riemannian hyperbolic geometry",
    link: "https://arxiv.org/abs/1606.05512v2",
    authors: ["Olivier Glorieux", "Daniel Monclair"],
    abstract:
      "The aim of this article is to understand the geometry of limit sets in pseudo-Riemannian hyperbolic geometry. We focus on a class of subgroups of $mathrm{PO}(p,q+1)$ introduced by Danciger, Gu’eritaud and Kassel, called $mathbb{H}^{p,q}$-convex cocompact. We define a pseudo-Riemannian analogue of critical exponent and Hausdorff dimension of the limit set. We show that they are equal and bounded from above by the usual Hausdorff dimension of the limit set. We also prove a rigidity result in $mathbb{H}^{2,1}=mathrm{ADS}^3$ which can be understood as a Lorentzian version of a famous Theorem of R. Bowen in $3$-dimensional hyperbolic geometry.",
    image: "pseudo.png",
    date: "2019",
  },
  {
    title:
      "Hausdorff dimension of limit sets for projective Anosov representations",
    link: "https://arxiv.org/abs/1902.01844v1",
    authors: ["Olivier Glorieux", "Daniel Monclair", "Nicolas Tholozan"],
    abstract:
      "Limit sets of $mathrm{AdS}$-quasi-Fuchsian groups of $mathrm{PO}(n,2)$ are always Lipschitz submanifolds. The aim of this article is to show that they are never $mathcal{C}^1$, except for the case of Fuchsian groups. As a byproduct we show that $mathrm{AdS}$-quasi-Fuchsian groups that are not Fuchsian are Zariski dense in $mathrm{PO}(n,2)$.",
    image: "OuaichGro.png",
    date: "2019",
  },

  {
    title: "Regularity of limit sets of AdS quasi-Fuchsian groups",
    link: "https://arxiv.org/abs/1809.10639v1",
    authors: ["Olivier Glorieux", "Daniel Monclair"],
    abstract:
      "Limit sets of $mathrm{AdS}$-quasi-Fuchsian groups of $mathrm{PO}(n,2)$ are always Lipschitz submanifolds. The aim of this article is to show that they are never $mathcal{C}^1$, except for the case of Fuchsian groups. As a byproduct we show that $mathrm{AdS}$-quasi-Fuchsian groups that are not Fuchsian are Zariski dense in $mathrm{PO}(n,2)$.",
    image: "hyperboloid.png",
    date: "2018",
  },
  {
    title: "Entropy of embedded surfaces in quasi-fuchsian manifolds",
    link: "https://arxiv.org/abs/1510.03246v4",
    authors: ["Olivier Glorieux"],
    abstract:
      "We compare critical exponent for quasi-Fuchsian groups acting on the hyperbolic 3-space, $mathbb{H}^3$, and on invariant disks embedded in $mathbb{H}^3$. We give a rigidity theorem for all embedded surfaces when the action is Fuchsian and a rigidity theorem for negatively curved surfaces when the action is quasi-Fuchsian.",
    image: "",
    date: "2018",
  },

  {
    title: "Topological mixing of the Weyl chamber flow",
    link: "https://arxiv.org/abs/1809.08863v1",
    authors: ["Nguyen-Thi Dang", "Olivier Glorieux"],
    abstract:
      "We prove that a sequence of quasi-Fuchsian representations for which the critical exponent converges to the topological dimension of the boundary of the group (larger than 2), converges up to subsequence and conjugacy to a totally geodesic representation.",
    image: "",
    date: "2018",
  },
  {
    title: "Critical exponent for geodesic currents",
    link: "https://arxiv.org/abs/1704.06541v1",
    authors: ["Olivier Glorieux"],
    abstract:
      "For any geodesic current we associated a quasi-metric space. For a subclass of geodesic currents, called filling, it defines a metric and we study the critical exponent associated to this space. We show that is is equal to the exponential growth rate of the intersection function for closed curves.",
    image: "",
    date: "2017",
  },

  {
    title: "Convergence of quasi-Fuchsian groups using critical exponent",
    link: "https://arxiv.org/abs/1702.00252v1",
    authors: ["Olivier Glorieux"],
    abstract:
      "We prove that a sequence of quasi-Fuchsian representations for which the critical exponent converges to the topological dimension of the boundary of the group (larger than 2), converges up to subsequence and conjugacy to a totally geodesic representation.",
    image: "",
    date: "2017",
  },
  {
    title:
      "Counting closed geodesics in globally hyperbolic maximal compact AdS 3-manifolds",
    link: "https://arxiv.org/abs/1503.09067v3",
    authors: ["Olivier Glorieux"],
    abstract:
      "We propose a definition for the length of closed geodesics in a globally hyperbolic maximal compact (GHMC) Anti-De Sitter manifold. We then prove that the number of closed geodesics of length less than $R$ grows exponentially fast with $R$ and the exponential growth rate is related to the critical exponent associated to the two hyperbolic surfaces coming from Mess parametrization. We get an equivalent of three results for quasi-Fuchsian manifolds in the GHMC setting : R. Bowen’s rigidity theorem of critical exponent, A. Sanders’ isolation theorem and C. McMullen’s examples lightening the behaviour of this exponent when the surfaces range over Teichmuller space.",
    image: "st.png",
    date: "2017",
  },
];
</script>

<style scoped>
.sbt {
  justify-content: space-around;
}
</style>
