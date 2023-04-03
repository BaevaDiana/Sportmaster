import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/my_home.vue'
import NewArticle from '../views/my_new_article.vue'
import ArticleList from '../components/ArticleList.vue'
// import store from '../store
// import {createRouter,createWebHistory} from "vue-router";

Vue.use(VueRouter)

const routes = [
    {
       path:'/',
       name:'Home',
       component: ArticleList
    },
    {
        path: '/about',
        name:'About',

        component: () => import('../views/my_about.vue')
    },
    // {
    //   path: '/article/:id',
    //    component: ArticleBlock,
    //    props: (route) => store.state.articles.find((x) => x.id == route.params.id)
    // },
    {
         path:'/new',
         name:'Add new article',
         component: NewArticle
    },
]

const router = new VueRouter({
    mode:'history',
    base: process.env.BASE_URL,
    routes
})

export default router

// const router=createRouter({
//     routes,
//     history: createWebHistory(process.env.BASE_URL),
// })

// export default router;