<template>
    <div class="greetings">
        <h1 class="green">{{ msg }}</h1>
        <h3>
            欢迎来到C区实验室
            <a href="https://vitejs.dev/" target="_blank" rel="noopener">了解我们</a> +
            <a href="https://vuejs.org/" target="_blank" rel="noopener">加入我们</a>.
        </h3>
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
.greetings {
    text-align: center;
}

.greetings h1 {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    top: -10px;
    margin: 0;
    /* 避免默认 margin 影响布局 */
}

.greetings h3 {
    font-size: 1.2rem;
    margin: 0;
    /* 避免默认 margin 影响布局 */
}

@media (min-width: 1024px) {
    .greetings {
        text-align: left;
    }
}
</style>