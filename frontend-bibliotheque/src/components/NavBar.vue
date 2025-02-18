<template>
  <nav>
    <router-link to="/">Accueil</router-link>
    <router-link to="/library">Bibliothèque</router-link>
    <router-link to="/profile">Profil</router-link>
    <router-link to="/exchange">Échange</router-link>
  </nav>
</template>

<script setup>
</script>

<style scoped>
nav {
  background-color: #42b983;
  padding: 10px;
}

nav a {
  color: white;
  margin: 0 10px;
  text-decoration: none;
}
</style>
