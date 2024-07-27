import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import ImageGallery from './views/ImageGallery.vue'//引入图片网页
import Header from './components/Header.vue'
import Active from './views/Active.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/ImageGallery', component: ImageGallery},
    { path: '/Active', component: Active}
    // 可以在这里添加更多路由
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
