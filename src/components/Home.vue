<template>
    <div class="container">
        <header class="left-column">
            <h1>C区实验室</h1>
            <p>欢迎各位来到C区实验室</p>
        </header>
        <main class="right-column">
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
        </main>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>
/* 确保整个容器充满视窗 */
.container {
    display: flex;
    flex-direction: row;
    height: 100%;
    /* 使容器占满整个视窗高度 */
    width: 100%;
    /* 使容器占满整个视窗宽度 */
    margin: 0;
    /* 去掉默认的外边距 */
    padding: 0;
    /* 去掉默认的内边距 */
}

/* 左侧列样式 */
.left-column {
    flex: 1;
    /* 使其占据一半的宽度 */
    display: flex;
    align-items: center;
    /*垂直对齐*/
    justify-content: center;
    /*水平对齐*/
    height: 50%;
    background-color: #42b983;
    color: white;
    padding: 40px;
    /* 合理设置内边距 */
    box-sizing: border-box;
    /* 包含内边距在元素宽度内 */
}

/* 右侧列样式 */
.right-column {
    flex: 1;
    /* 使其占据一半的宽度 */
    padding: 20px;
    /* 合理设置内边距 */
    box-sizing: border-box;
    /* 包含内边距在元素宽度内 */
}

.feature {
    margin-bottom: 40px;
    /* 各个特性之间的间距 */
}
</style>
