import { defineStore } from "pinia";

export const useLogginStore = defineStore("loggin", {
  state: () => ({
    logged: false,
    isDark: false,
  }),
});
