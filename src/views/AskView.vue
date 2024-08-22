<template>
    <div>
        <ul class="ask-list">
            <li class="post" v-for="(item, index) in this.$store.state.asks" :key="index">
                <div class="points">
                    {{ item.points }}
                </div>
                <div>
                    <p class="ask-title">
                        <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
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
            this.$store.dispatch('FETCH_ASKS');
        }
    }
</script>

<style scoped>
.ask-title {
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
.ask-list {
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