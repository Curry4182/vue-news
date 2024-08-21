import { createStore } from 'vuex'
import { fetchNewsList, fetchJobsList, fetchAskList } from '@/api';

export const store = createStore({
    state: {
        news: [],
        jobs: [],
        asks: []
    },
    mutations: {
        SET_NEWS(state, news) {
            state.news = news;
        },
        SET_ASKS(state, asks) {
            state.asks = asks;
        },
        SET_JOBS(state, jobs) {
            state.jobs = jobs;
        }
    },
    actions: {
        FETCH_NEWS(context) {
            fetchNewsList()
            .then((res)=>{
                context.commit('SET_NEWS', res.data);
            })
            .catch((error) => {
                console.log(error);
            })
        },
        FETCH_ASKS(context) {
            fetchAskList()
            .then((res)=> {
                context.commit('SET_ASKS', res.data);
            })
            .catch((error) => {
                console.log(error);
            })
        },
        FETCH_JOBS(context) {
            fetchJobsList()
            .then((res) => {
                context.commit('SET_JOBS', res.data);
            })
            .catch((error) => {
                console.log(error);
            })
        }
    }
})