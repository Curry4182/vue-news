<template>
    <div>
        <ul>
            <li v-for="(newsItem, index) in news" :key="index">
                {{ newsItem.title }}
            </li>
        </ul>
    </div>
</template>

<script>
    import { fetchNewsList } from '@/api';

    export default {
        data() {
            return {
                news: []
            }
        },
        created() {
            fetchNewsList().then((res)=>{
                this.news = res.data;
            }).catch((error) => {
                console.log(error);
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>