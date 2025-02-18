// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importe le routeur
import store from './store'; // Importe Vuex

// Crée l'application Vue et utilise le routeur et vuex
createApp(App).use(router).use(store).mount('#app');