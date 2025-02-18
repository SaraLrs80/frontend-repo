// src/store/index.js
import { createStore } from 'vuex';

// Crée le store Vuex
export default createStore({
  state: {
    books: [], // État global pour stocker les livres
    userBooks: [],
    notification: []
  },
  mutations: {
    // Mutation pour ajouter des livres
    SET_BOOKS(state, books) {
      state.books = books;
    },
    SET_USER_BOOKS(state, userBooks) {
        state.userBooks = userBooks;
    },
      ADD_NOTIFICATION(state, notification) {
        state.notifications.push(notification);
    },
  },
  actions: {
    // Action pour récupérer les livres (simulé ici)
    fetchBooks({ commit }) {
      const books = [
        { id: 1, title: 'Le Petit Prince', author: 'Antoine de Saint-Exupéry' },
        { id: 2, title: '1984', author: 'George Orwell' },
      ];
      commit('SET_BOOKS', books); // Appelle la mutation pour mettre à jour l'état
    },
  },
  getters: {
    allBooks: (state) => state.books,
  },
});