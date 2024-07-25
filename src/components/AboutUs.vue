<template>
    <div>
        <header>
            <h1>About Us</h1>
            <p>Learn more about our company and team.</p>
        </header>
        <main>
            <section class="about">
                <h2>Our Mission</h2>
                <p>Our mission is to provide the best products and services to our customers.</p>
            </section>
            <section class="about">
                <h2>Our Team</h2>
                <p>We have a diverse and talented team dedicated to making our mission a reality.</p>
            </section>
            <section class="about">
                <h2>Contact Us</h2>
                <p>If you have any questions or need more information, feel free to contact us.</p>
            </section>
        </main>
    </div>
</template>

<script>
export default {
    name: 'AboutUs'
}
</script>

<style>
/* 样式可根据需要进行调整 */
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

.about {
    margin-bottom: 40px;
}
</style>
