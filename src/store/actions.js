import { fetchNewsList, fetchJobsList, fetchAskList } from '@/api';

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
    }
}
