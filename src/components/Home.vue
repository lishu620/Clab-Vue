<template>
    <div class="container">
      <div class="greetings left-column">
        <h1 class="green">{{ msg }}</h1>
        <h3>
          欢迎来到C区实验室
          <a href="https://vitejs.dev/" target="_blank" rel="noopener">了解我们</a> +
          <a href="https://vuejs.org/" target="_blank" rel="noopener">加入我们</a>.
        </h3>
      </div>
      <div class="right-column">
        <section class="feature">
          <h2>我们是</h2>
          <p>我们是重庆文理学院实训中心C区实验室</p>
        </section>
        <section class="feature">
          <h2>我们的任务</h2>
          <p>我们主要负责格致楼3楼C区机房的日常维护和教学管理工作</p>
        </section>
        <section class="feature">
          <h2>我们的义务</h2>
          <p>我们需要管理好机房的正常教学运行，保证师生正常进行教学任务</p>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
    props: {
      msg: String
    }
  }
  </script>
  
  <style scoped>
  .container {
    display: flex;
    height: 100vh; /* 使容器占满整个视窗高度 */
    width: 100vw;  /* 使容器占满整个视窗宽度 */
    margin: 0;     /* 去掉默认的外边距 */
    padding: 0;    /* 去掉默认的内边距 */
  }
  
  .left-column {
    flex: 1; /* 自适应宽度 */
    background-color: #42b983;
    color: white;
    display: flex; /* 使用 Flexbox 布局 */
    flex-direction: column; /* 垂直排列 */
    align-items: center; /* 垂直居中对齐内容 */
    justify-content: center; /* 水平居中对齐内容 */
    padding: 20px; /* 合理设置内边距 */
    box-sizing: border-box; /* 包含内边距在元素宽度内 */
    height: auto; /* 高度自适应内容 */
  }
  
  .right-column {
    flex: 1; /* 使其占据剩余的宽度 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px; /* 合理设置内边距 */
    box-sizing: border-box; /* 包含内边距在元素宽度内 */
  }
  
  .feature {
    margin-bottom: 40px;
  }
  
  .greetings h1,
  .greetings h3 {
    text-align: center;
  }
  
  @media (min-width: 1024px) {
    .greetings {
      text-align: left;
    }
  }
  </style>
  