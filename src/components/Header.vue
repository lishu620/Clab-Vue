<template>
  <header class="header">
    <nav>
      <ul>
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/ImageGallery">看看学长学姐</router-link></li>
        <li><router-link to="/Active">我们的活动</router-link></li>
        <li><router-link to="/Enviroment">机房环境</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #42b983;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  border-radius: 10px;
  /* 添加圆角 */
}

.logo {
  width: 50px;
  height: 50px;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}
</style>
