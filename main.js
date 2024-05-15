import { createApp } from 'vue'
import App from './App.vue'
import VueMathjax from 'vue-mathjax-next';
console.log("main")
createApp(App).use(VueMathjax).mount('#app')