import AskView from '@/views/AskView.vue'
import JobsView from '@/views/JobsView.vue'
import NewsView from '@/views/NewsView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
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
        }
    ]
})


export default router 