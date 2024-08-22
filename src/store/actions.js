import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchNewsItem } from '@/api';

export default {
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
    },
    FETCH_USERINFO(context, username) {
        fetchUserInfo(username)
        .then((res) => {
            context.commit('SET_USERINFO', res.data);
        })
        .catch((error) => {
            console.log(error);
        })
    },
    FETCH_NEWS_ITEM(context, itemId) {
        fetchNewsItem(itemId)
        .then((res)=> {
            context.commit('SET_ASK_ITEM', res.data)
        })
        .catch((error) => {
            console.log(error);
        })
    }
}
