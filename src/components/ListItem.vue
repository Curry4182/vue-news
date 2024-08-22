<template>
    <div>
        <ul class="item-list">
            <li class="post" v-for="(item, index) in items" :key="index">
                <div class="points">
                    {{ item.points || 0 }}
                </div>
                <div>
                    <p class="item-title">
                        <template v-if="this.$route.name === 'ASK'">
                            <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
                        </template>
                        <template v-else>
                            <a :href="item.url">{{ item.title }}</a>
                        </template>
                    </p>
                    <small class="link-text"> 
                        {{ item.time_ago }} by 
                        <template v-if="this.$route.name === 'JOBS'">
                            <a :href="item.url">{{ item.domain }}</a>
                        </template>
                        <template v-else>
                            <router-link :to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>>
                        </template>
                    </small>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        created() {
            const routeName = this.$route.name;
            let fetchName = '';

            if(routeName === 'ASK') {
                fetchName = 'FETCH_ASKS';
            }else if (routeName === 'NEWS') {
                fetchName = 'FETCH_NEWS';
            }else if (routeName === 'JOBS') {
                fetchName = 'FETCH_JOBS';
            }

            this.$store.dispatch(fetchName);
        },
        computed: {
            items() {
                const routeName = this.$route.name;
                if(routeName === 'ASK') {
                    return this.$store.state.asks;
                }else if (routeName === 'NEWS') {
                    return this.$store.state.news;
                }else if (routeName === 'JOBS') {
                    return this.$store.state.jobs;
                }

                return [];
            }
        }
    }
</script>

<style scoped>
.item-title {
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
.item-list {
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