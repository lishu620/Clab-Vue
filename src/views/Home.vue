<template>
  <div class="container">
    <div class="left-column">
      <img src="../assets/logo.svg" alt="C区实验室 Logo" class="logo" />
      <div class="text-content">
        <h1 class="green">{{ msg }}</h1>
        <img src='/src/assets/logo.svg'>
      </div>
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

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
}

.left-column {
  flex: 1;
  text-align: center;
  padding: 20px;
  background-color: #42b983;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  position: relative;
}

.logo {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 80px;
  /* 根据需要调整 logo 的大小 */
  height: auto;
}

.text-content {
  margin-top: 60px;
  /* 确保文本不会被 logo 遮盖 */
}

.right-column {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.right-column .feature {
  margin-bottom: 20px;
  background: #ffffff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.right-column .feature h2 {
  margin-top: 0;
  color: #42b983;
}

.right-column .feature p {
  margin-bottom: 0;
  color: #333;
}

.green {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
  margin: 0;
}

h3 {
  font-size: 1.2rem;
  margin: 0;
}

@media (min-width: 1024px) {
  .container {
    flex-direction: row;
  }
}
</style>
