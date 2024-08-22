<template>
    <div>
        <ul class="news-list">
            <li class="post" v-for="(item, index) in this.$store.state.news" :key="index">
                <div class="points">
                    {{ item.points }}
                </div>
                <div>
                    <p class="news-title">
                        <a :href="item.url">{{ item.title }}</a>
                    </p>
                    <small class="link-text"> 
                        {{ item.time_ago }} by 
                        <router-link :to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>>
                    </small>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {

        created() {
            this.$store.dispatch('FETCH_NEWS');
        }
    }
</script>

<style scoped>
.news-title {
    margin: 0px;
}
.points {
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883;
}
.news-list {
    margin: 0px;
    padding: 0px;
}
.post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
}
.link-text {
    color: #828282;
}
</style>