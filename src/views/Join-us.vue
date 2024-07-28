<template>
    <div class="container">
        <div class="left-column">
            <img src="../assets/logo.svg" alt="C区实验室 Logo" class="logo" />
        </div>
        <div class="right-column">
            <section class="feature">
                <h2>联系我们</h2>
                <div class="contact-info">
                    <p class="qq-number">我们是重庆文理学院实训中心C区实验室，值班室位于格致楼C302，负责管理格致楼三楼C区的机房正常运行工作，扫描下方二维码加入群聊</p>
                    <div class="image-container">
                        <img src="../assets/join-us.jpg" alt="Join Us Image" />
                    </div>
                </div>
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
    border-radius: 10px;
}

.logo {
    width: 80%;
    height: auto;
}

.right-column {
    flex: 2;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.feature {
    margin-bottom: 20px;
    background: #ffffff;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.feature h2 {
    color: #42b983;
}

.contact-info {
    position: relative;
}

.qq-number {
    margin: 0;
    display: inline-block;
    cursor: pointer;
}

.image-container {
    margin-top: 10px;
    border-radius: 10px;
    overflow: hidden;
    width: 100%;
    display: flex;
    justify-content: center;
}

.image-container img {
    max-width: 300px;
    height: auto;
    border-radius: 10px;
}

@media (max-width: 768px) {
    .container {
        flex-direction: column;
    }

    .left-column,
    .right-column {
        width: 100%;
        padding: 10px;
        border-radius: 0;
    }

    .logo {
        width: 60px;
    }

    .image-container img {
        max-width: 100%;
    }
}
</style>