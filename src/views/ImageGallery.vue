<!-- src/views/ImageGallery.vue -->
<template>
    <div>
        <Header />
        <div class="gallery">
            <div class="gallery-item" v-for="(src, name) in Image" :key="name">
                <img :src="src" :alt="name" class="gallery-item">
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue'; // 引入Header导航栏
import Image from '../utils/loadImage'; // 引入图片加载

export default {
    name: 'ImageGallery',
    components: {
        Header
    }
}
</script>

<style scoped>
.gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
}

.gallery-item {
    flex: 1 0 21%;
    /* 让每行最多显示5个图片，随着屏幕大小调整 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
    margin: 10px;
    display: flex;
    /* 使用 flexbox 以确保图片居中 */
    align-items: center;
    /* 垂直居中图片 */
    justify-content: center;
    /* 水平居中图片 */
}

.gallery-image {
    width: 100%;
    height: auto;
    object-fit: cover;
    /* 确保图片保持比例且填充容器 */
}
</style>