<template>
  <div id="app">
    <header>
      <h1>BookShare</h1>
      <Navbar />
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer>
      <p>&copy; 2025 BookShare</p>
    </footer>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
}

header {
  background-color: #42b983;
  padding: 20px;
  color: white;
}

footer {
  margin-top: 50px;
  padding: 20px;
  background-color: #f5f5f5;
}
</style>
