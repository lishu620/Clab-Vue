import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import ImageGallery from './views/ImageGallery.vue'//引入图片网页
import Header from './components/Header.vue'
import Active from './views/Active.vue'
import Part from './views/Part.vue'
import Enviroment from './views/Enviroment.vue'
import JoinUs from './views/Join-us.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/ImageGallery', component: ImageGallery},
    { path: '/Active', component: Active},
    { path: '/Part', component: Part},
    { path: '/Enviroment', component: Enviroment},
    { path: '/Join-us', component: JoinUs}
    // 可以在这里添加更多路由
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
