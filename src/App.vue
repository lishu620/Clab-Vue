<script setup>
import { router } from './router';
</script>

<template>
  <div id="app">
    <nav>
      <router-link to="/">首页</router-link>
      <router-link to="/about-us">关于我们</router-link>
    </nav>
    <router-view></router-view>
    <footer>
      <p>我们的招新QQ群:947570002</p>
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: start;
  z-index: 1000;
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
  left: 0;
  width: 100%;
  box-sizing: border-box;
}
</style>
