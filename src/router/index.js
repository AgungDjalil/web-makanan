import { createWebHistory,createRouter } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import FoodsView from "@/views/FoodsView.vue";

const routes = [
    {    
    path: '/',
    name: 'home',
    component: HomeView,  
    },
    {    
    path: '/foods',
    name: 'foods',
    component: FoodsView,  
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;