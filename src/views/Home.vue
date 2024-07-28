<template>
  <div class="container">
    <div class="left-column">
      <img src="../assets/logo.svg" alt="C区实验室 Logo" class="logo" />
    </div>
    <div class="right-column">
      <section class="feature">
        <h2>介绍我们</h2>
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
      <section class="feature">
        <h2>详细了解</h2>
        <p>
          <RouterLink to="/ImageGallery" class="rounded-link">看看学长学姐</RouterLink>
          <RouterLink to="/Active" class="rounded-link">我们的活动</RouterLink>
          <RouterLink to="/Part" class="rounded-link">我们的聚会</RouterLink>
          <RouterLink to="/Enviroment" class="rounded-link">机房</RouterLink>
        </p>
      </section>
      <section class="feature">
        <h2>加入我们</h2>
        <RouterLink to="/Join-us" class="rounded-link">详细</RouterLink>
        <p>官方招新QQ群:
          <a href="https://qm.qq.com/q/N5fAsw5iYm">947570002</a>
        </p>
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
  top: 50%;
  /* 垂直居中 */
  left: 20px;
  /* 距离左侧边距 */
  transform: translateY(-50%);
  /* 精确垂直居中 */
  width: 525px;
  align-items: center;
  /*水平居中*/
  height: auto;
}

.text-content {
  margin-top: 60px;
}

.right-column {
  flex: 2;
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

.rounded-link {
  display: inline-block;
  padding: 10px 20px;
  text-decoration: none;
  color: #fff;
  background-color: #42b983;
  /* 背景颜色 */
  border-radius: 12px;
  /* 圆角 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  /* 阴影 */
  transition: background-color 0.3s, transform 0.3s;
  /* 平滑过渡效果 */
  margin-right: 20px;
  /* 调整链接间距 */
}

.rounded-link:hover {
  background-color: #2c8b65;
  /* 鼠标悬停时的背景颜色 */
  transform: scale(1.05);
  /* 鼠标悬停时的放大效果 */
}

/* 手机适配 */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .left-column,
  .right-column {
    width: 100%;
    box-shadow: none;
    /* 移除阴影效果以减少小屏幕上的视觉干扰 */
    border-radius: 0;
    /* 移除圆角以适应小屏幕 */
    padding: 10px;
    /* 减小内边距 */
  }

  .logo {
    width: 60px;
    /* 调整 logo 大小以适应小屏幕 */
  }

  .text-content {
    margin-top: 20px;
  }
}
</style>
