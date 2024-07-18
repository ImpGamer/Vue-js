import { createRouter,createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import UserView from '../views/UserView.vue'
import UserProfile from '../components/Users/Views/UserProfile.vue'
import UserPosts from '../components/Users/Views/UserPosts.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:'/',
            name:'home',
            component:HomeView
        },
        {
            path:'/new',
            name: 'new',
            component: () => import('../views/NewView.vue')
        },
        {
            //Creacion de una ruta dinamica
            path:'/product/:id',
            name:'product',
            component: ProductView
        },
        {
            path:"/user/:id",
            name:"user",
            component: UserView,
            //creacion de rutas hijas (/rutaPadre/ruta)
            children: [
                {
                    path:"profile",
                    name:"profile",
                    component:UserProfile
                },
                {
                    path:"posts",
                    name:"posts",
                    component:UserPosts
                }
            ]
        },
        {
            path:'/about',
            name:"about",
            //Importacion de manera dinamica, solamente se importara cuando se acceda a la ruta
            component: () => import('../views/Aboutview.vue')
        },
    ]
})

export default router