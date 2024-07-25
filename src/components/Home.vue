<template>
    <div>
        <header>
            <h1>Welcome to Our Product</h1>
            <p>Discover the amazing features of our new product!</p>
        </header>
        <main>
            <section class="feature">
                <h2>Feature 1</h2>
                <p>Our product offers this amazing feature that you will love.</p>
            </section>
            <section class="feature">
                <h2>Feature 2</h2>
                <p>Another great feature of our product that makes it unique.</p>
            </section>
            <section class="feature">
                <h2>Feature 3</h2>
                <p>Experience the benefits of this feature and see the difference.</p>
            </section>
        </main>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style>
/* 样式保持不变 */
header {
    background-color: #42b983;
    color: white;
    padding: 20px;
}

header h1 {
    margin: 0;
    font-size: 2.5em;
}

header p {
    margin: 10px 0 0;
}

main {
    padding: 20px;
}

.feature {
    margin-bottom: 40px;
}
</style>