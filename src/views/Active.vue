<template>
    <div>
        <Header />
        <div class="gallery">
            <h2 class="title">义务维护活动</h2>
            <div class="gallery-item" v-for="(image, index) in images" :key="index">
                <img :src="image" :alt="'Image ' + (index + 1)" class="gallery-image" />
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue'; // 引入 Header 组件

export default {
    name: 'ImageGallery',
    components: {
        Header
    },
    data() {
        return {
            images: []
        };
    },
    async created() {
        await this.loadImages(); // 确保加载图片时组件已创建
    },
    methods: {
        async loadImages() {
            // 使用 import.meta.glob 加载所有图片
            const imageModules = import.meta.glob('../assets/img/huodong/*.{png,jpg,jpeg,svg}');

            // 从模块中提取图片路径
            const imagePromises = Object.values(imageModules).map((module) => module().then((mod) => mod.default));

            // 等待所有图片加载完成
            this.images = await Promise.all(imagePromises);
        }
    }
};
</script>

<style scoped>
.gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
}

.title {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
}

.gallery-item {
    flex: 1 0 30%;
    /* 使每行最多显示3张图片 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.gallery-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    /* 确保图片完全显示在容器内 */
}
</style>
