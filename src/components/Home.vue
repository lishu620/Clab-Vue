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
.container {
    display: flex;
    flex-direction: row;
    padding: 80%;
}

.left-column {
    flex: 1;
    background-color: #42b983;
    color: white;
    padding: 20px;
    margin-right: 20px;
}

.left-column h1 {
    margin: 0;
    font-size: 2.5em;
}

.left-column p {
    margin: 10px 0 0;
}

.right-column {
    flex: 2;
    padding: 20px;
}

.feature {
    margin-bottom: 40px;
}
</style>