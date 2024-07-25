<template>
    <div class="container">
        <div class="left-column">
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
    height: 100vh;
}

.left-column {
    flex: 1;
    text-align: center;
    padding: 20px;
    background-color: #42b983;
    color: white;
}

.right-column {
    flex: 1;
    padding: 20px;
}

.feature {
    margin-bottom: 20px;
}
</style>