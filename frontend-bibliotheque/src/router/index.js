// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue'; // Importe la page d'accueil
import Library from '@/views/Library.vue'; // Importe la page de la bibliothèque
import Profile from '@/views/Profile.vue'; // Importe la page de profil
import Exchange from '@/views/Exchange.vue'; // Importe la page d'échange'

// Définit les routes
const routes = [
  { path: '/', component: Home }, // Route pour la page d'accueil
  { path: '/library', component: Library }, // Route pour la bibliothèque
  { path: '/profile', component: Profile }, // Route pour le profil
  { path: '/Exchange', component: Exchange }, // Route pour le profil
];

// Crée le routeur
const router = createRouter({
  history: createWebHistory(), // Utilise l'historique du navigateur
  routes, // Associe les routes définies
});

export default router; // Exporte le routeur