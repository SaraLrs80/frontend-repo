<template>
  <div>
    <h2>Proposer un Échange</h2>
    <p>Sélectionnez un livre que vous souhaitez échanger avec un autre utilisateur.</p>
    <ul>
      <li v-for="book in exchangeableBooks" :key="book.id">
        {{ book.title }} - {{ book.author }}
        <button @click="proposeExchange(book.id)">Proposer un échange</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import exchangeService from '../services/exchangeService';

const store = useStore();
const exchangeableBooks = computed(() => store.state.exchangeableBooks); // Livres disponibles pour échange

onMounted(() => {
  store.dispatch('fetchExchangeableBooks'); // Charger les livres échangeables
});

const proposeExchange = async (bookId) => {
  try {
    await exchangeService.proposeExchange(bookId); // API pour envoyer une demande d'échange
    alert("Demande d'échange envoyée !");
  } catch (error) {
    console.error("Erreur lors de la demande d'échange :", error);
  }
};
</script>
