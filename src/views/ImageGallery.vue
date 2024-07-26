<!-- src/views/ImageGallery.vue -->
<template>
    <div>
        <Header />
        <div class="gallery">
            <div class="gallery-item">
                <img src="/src/assets/img/xuezhang/1 (1).jpeg" alt="Image 1" class="gallery-image" />
            </div>
            <div class="gallery-item">
                <img src="/src/assets/img/xuezhang/1 (1).jpg" alt="Image 2" class="gallery-image" />
            </div>
            <div class="gallery-item">
                <img src="/src/assets/img/xuezhang/1 (10).jpg" alt="Image 3" class="gallery-image" />
            </div>
            <div class="gallery-item">
                <img src="/src/assets/img/xuezhang/1 (12).jpg" alt="Image 4" class="gallery-image" />
            </div>
            <div class="gallery-item">
                <img src="/src/assets/img/xuezhang/1 (14).jpg" alt="Image 5" class="gallery-image" />
            </div>
            <div class="gallery-item">
                <img src="/src/assets/img/xuezhang/1 (17).jpg" alt="Image 6" class="gallery-image" />
            </div>
            <div class="gallery-item">
                <img src="/src/assets/img/xuezhang/1 (19).jpg" alt="Image 7" class="gallery-image" />
            </div>
            <div class="gallery-item">
                <img src="/src/assets/img/xuezhang/1 (2).jpg" alt="Image 8" class="gallery-image" />
            </div>
            <div class="gallery-item">
                <img src="/src/assets/img/xuezhang/1 (2).png" alt="Image 9" class="gallery-image" />
            </div>
            <div class="gallery-item">
                <img src="/src/assets/img/xuezhang/1 (20).jpg" alt="Image 10" class="gallery-image" />
            </div>
            <div class="gallery-item">
                <img src="/src/assets/img/xuezhang/1 (21).jpg" alt="Image 11" class="gallery-image" />
            </div>
            <div class="gallery-item">
                <img src="/src/assets/img/xuezhang/1 (22).jpg" alt="Image 12" class="gallery-image" />
            </div>
            <div class="gallery-item">
                <img src="/src/assets/img/xuezhang/1 (24).jpg" alt="Image 13" class="gallery-image" />
            </div>
            <div class="gallery-item">
                <img src="/src/assets/img/xuezhang/1 (26).jpg" alt="Image 14" class="gallery-image" />
            </div>
            <div class="gallery-item">
                <img src="/src/assets/img/xuezhang/1 (27).jpg" alt="Image 15" class="gallery-image" />
            </div>
            <div class="gallery-item">
                <img src="/src/assets/img/xuezhang/1 (29).jpg" alt="Image 16" class="gallery-image" />
            </div>
            <div class="gallery-item">
                <img src="/src/assets/img/xuezhang/1 (3).jpg" alt="Image 17" class="gallery-image" />
            </div>
            <div class="gallery-item">
                <img src="/src/assets/img/xuezhang/1 (30).jpg" alt="Image 18" class="gallery-image" />
            </div>
            <div class="gallery-item">
                <img src="/src/assets/img/xuezhang/1 (35).jpg" alt="Image 19" class="gallery-image" />
            </div>
            <div class="gallery-item">
                <img src="/src/assets/img/xuezhang/1 (39).png" alt="Image 20" class="gallery-image" />
            </div>
            <div class="gallery-item">
                <img src="/src/assets/img/xuezhang/1 (4).jpg" alt="Image 21" class="gallery-image" />
            </div>
            <div class="gallery-item">
                <img src="/src/assets/img/xuezhang/1 (51).jpg" alt="Image 22" class="gallery-image" />
            </div>
            <div class="gallery-item">
                <img src="/src/assets/img/xuezhang/1 (52).jpg" alt="Image 23" class="gallery-image" />
            </div>
            <div class="gallery-item">
                <img src="/src/assets/img/xuezhang/1 (53).jpg" alt="Image 24" class="gallery-image" />
            </div>
            <div class="gallery-item">
                <img src="/src/assets/img/xuezhang/1 (58).jpg" alt="Image 25" class="gallery-image" />
            </div>
            <div class="gallery-item">
                <img src="/src/assets/img/xuezhang/1 (6).jpg" alt="Image 26" class="gallery-image" />
            </div>
            <!-- 添加更多图片 -->
        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue'; // 根据实际路径调整

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