import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home/Home.vue';
import Team from '../views/Team/Team.vue';
import User from '../views/User/User.vue';
import Search from '../views/Search/Search.vue';
// Import your views/components here

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/team',
        name: 'Team',
        component: Team,
    },
    {
        path: '/user',
        name: 'User',
        component: User,
    },
    {
        path: '/search',
        name: 'Search',
        component: Search,
    }
    // Add more routes here
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;