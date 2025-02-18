<template>
  <div>
    <h2>Bibliothèque</h2>
    <ul>
      <li v-for="book in books" :key="book.id">
        {{ book.title }} - {{ book.author }}
        <button @click="borrowBook(book.id)">Emprunter</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

// Accès au store Vuex
const store = useStore();

// Récupération des livres depuis Vuex
const books = computed(() => store.state.books);

// Charger les livres au montage du composant
onMounted(() => {
  store.dispatch('fetchBooks');
});

// Fonction pour emprunter un livre
const borrowBook = (bookId) => {
  console.log('Emprunter le livre ID:', bookId);
  // Tu peux ajouter ici un appel API pour emprunter le livre
};
</script>
