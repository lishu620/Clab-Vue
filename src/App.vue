<script setup>
import Welcome from './components/Welcome.vue'
import TheWelcome from './components/TheWelcome.vue'
import { router } from './router';
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.png" width="125" height="125" />
    <div class="wrapper">
      <Welcome msg="C区实验室" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>

  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about-us">About Us</router-link>
    </nav>
    <router-view></router-view>
    <footer>
      <p>Contact us: info@ourproduct.com</p>
      <p>&copy; 2024 Our Product. All rights reserved.</p>
    </footer>
  </div>
</template>

<style scoped>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  background-color: #42b983;
  padding: 10px;
}

nav a {
  color: white;
  margin: 0 10px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  font-weight: bold;
}

footer {
  background-color: #42b983;
  color: white;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
