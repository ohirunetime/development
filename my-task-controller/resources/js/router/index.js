import { createRouter,createWebHistory }  from 'vue-router';
import Top from '../pages/Top.vue';
import Register from '../pages/Register.vue';
import Login from '../pages/Login.vue';

const router = new createRouter({
    mode: 'history',
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/top',
            name: 'top',
            component: Top
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        }
    ]
});

export default router;