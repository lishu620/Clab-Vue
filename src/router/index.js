/* 配置路由 */

import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import AboutUs from '@/components/AboutUs.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about-us',
        name: 'AboutUs',
        component: AboutUs
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
