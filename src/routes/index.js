import AskView from '@/views/AskView.vue'
import ItemView from '@/views/ItemView.vue'
import JobsView from '@/views/JobsView.vue'
import NewsView from '@/views/NewsView.vue'
import UserView from '@/views/UserView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path: '/',
            redirect: '/news'
        },
        {
            path: '/news',
            name: 'NEWS',
            component: NewsView
        },
        {
            path: '/ask',
            name: 'ASK',
            component: AskView
        },
        {
            path: '/jobs',
            name: 'JOBS',
            component: JobsView
        },
        {
            path: '/user',
            component: UserView
        },
        {
            path: '/item',
            component: ItemView
        }
    ]
})


export default router 