<template>
  <nav class="w-full p-6 bg-transparent bg-slate-200 dark:bg-gray-700">
    <div class="flex items-center justify-between">
      <!-- Header logo -->

      <!-- Mobile toggle -->
      <div class="md:hidden">
        <button @click="drawer">
          <svg
            class="h-8 w-8 fill-current text-black"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- Navbar -->
      <div class="hidden md:block">
        <ul class="flex space-x-8 text-sm font-sans">
          <li><NuxtLink href="/" class="">Cours</NuxtLink></li>
          <li><NuxtLink href="/colles" class="">Colles</NuxtLink></li>
          <li><NuxtLink href="/devoirs" class="">Devoirs</NuxtLink></li>
          <li><NuxtLink href="/informatique" class="">Informatique</NuxtLink></li>
          <li class="">
            <NuxtLink href="/publications" class="">Publications</NuxtLink>
          </li>
        </ul>
      </div>
      <div> <ColorMode /></div>

      <!-- Dark Background Transition -->
      <transition
        enter-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-to-class="opacity-0"
      >
        <div
          @keydown.esc="isOpen = false"
          v-show="isOpen"
          class="z-10 fixed inset-0 transition-opacity"
        >
          <div
            @click="isOpen = false"
            class="absolute inset-0 bg-black opacity-50"
            tabindex="0"
          ></div>
        </div>
      </transition>

      <!-- Drawer Menu -->
      <aside
        class="dark:bg-gray-800 p-5 transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
        :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
      >
        <div class="close">
          <button class="absolute top-0 right-0 mt-4 mr-4" @click="isOpen = false">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <span @click="isOpen = false" class="flex w-full items-center p-4 border-b">
          <!-- <Tailwind /> -->
        </span>

        <ul class="divide-y font-sans">
          <li><NuxtLink href="/" @click="isOpen = false" class="my-4 inline-block">Cours</NuxtLink></li>
          <li><NuxtLink href="/colles" @click="isOpen = false" class="my-4 inline-block">Colles</NuxtLink></li>
          <li><NuxtLink href="/devoirs" @click="isOpen = false" class="my-4 inline-block">Devoirs</NuxtLink></li>
          <li><NuxtLink href="/informatique" @click="isOpen = false" class="my-4 inline-block">Informatique</NuxtLink></li>
          <li> <NuxtLink href="/publications" @click="isOpen = false" class="my-4 inline-block">Publications</NuxtLink> </li>
        </ul>
      </aside>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    },
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      },
    },
  },
  mounted() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
    });
  },
};
</script>

<style scoped>
.router-link-active {
  @apply border-b-2 border-blue-500 pb-1;
}
.router-link-active:hover {
  @apply transition duration-300 delay-150 border-b-2 border-blue-200 pb-1;
}
</style>
