<template>
  <div>
    <h2>Mon Profil</h2>
    <h3>Mes livres empruntés</h3>
    <ul>
      <li v-for="book in borrowedBooks" :key="book.id">
        {{ book.title }} - {{ book.author }}
        <button @click="returnBook(book.id)">Rendre</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import bookService from '../services/bookService';

const store = useStore();
const borrowedBooks = computed(() => store.state.userBooks); // Livres empruntés

onMounted(() => {
  store.dispatch('fetchUserBooks'); // Charger les livres empruntés
});

const returnBook = async (bookId) => {
  try {
    await bookService.returnBook(bookId); // API pour rendre un livre
    store.dispatch('fetchUserBooks'); // Rafraîchir la liste après retour
  } catch (error) {
    console.error("Erreur lors du retour du livre :", error);
  }
};
</script>
